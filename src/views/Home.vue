<template>
  <div class="home">
    <Header />

    <div class="container">
      <div class="spread">
        <h1 :class="{ dark: !isDarkMode, light: isDarkMode }">
          Traffic Overview
        </h1>

        <div
          class="toggle"
          :class="{ 'light-box': isDarkMode, 'dark-box': !isDarkMode }"
        >
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>

      <apexchart
        width="100%"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>

      <iframe
        v-if="isDarkMode"
        width="100%"
        height="600"
        src="https://datastudio.google.com/embed/reporting/f848acde-4800-4128-b558-9a453659907b/page/kPIbB"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>

      <iframe
        v-if="!isDarkMode"
        width="100%"
        height="600"
        src="https://datastudio.google.com/embed/reporting/d2c16181-55b6-4709-ad68-0d955a30c23c/page/kPIbB"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueApexCharts from "vue-apexcharts";

import Header from "@/components/Header";
import { db } from "@/config/firebase";

export default {
  name: "Home",
  components: {
    Header,
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"]
          },
          position: "top"
        },
        tooltip: {
          theme: "dark"
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        chart: {
          id: "users"
        },
        xaxis: {
          type: "datetime"
        }
      },
      series: []
    };
  },
  firestore() {
    return {
      traffic: {
        ref: db.collection("traffic"),
        objects: true,
        resolve: traffic => {
          const activeUsers = [];
          const newUsers = Object.values(traffic.newUsers);

          const todaysDate = new Date();
          const lastWeekDate = todaysDate.setDate(todaysDate.getDate() - 7);
          Object.keys(traffic.activeUsers).map(key => {
            if (new Date(traffic.activeUsers[key][0]) > lastWeekDate) {
              activeUsers.push(traffic.activeUsers[key]);
            }
          });

          Object.keys(traffic.newUsers).map(key => {
            if (new Date(traffic.newUsers[key][0]) > lastWeekDate) {
              newUsers.push(traffic.newUsers[key]);
            }
          });

          this.series = [
            {
              name: "active users",
              data: activeUsers
            },
            {
              name: "new users",
              data: newUsers
            }
          ];
        },
        reject: err => {
          console.log(err);
        }
      }
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56ccf2";
      this.$refs.days.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";

      const activeUsers = [];
      const newUsers = [];
      // Binding docs
      this.$binding("activeUsers", db.collection("traffic").doc("activeUsers"))
        .then(data => {
          console.log(data);
          const todaysDate = new Date();
          const lastWeekDate = todaysDate.setDate(todaysDate.getDate() - 7);
          Object.keys(data).map(key => {
            if (new Date(data[key][0]) > lastWeekDate) {
              activeUsers.push(data[key]);
            }
          });
        })
        .catch(err => console.log(err));

      this.$binding("newUsers", db.collection("traffic").doc("newUsers"))
        .then(data => {
          const todaysDate = new Date();
          const lastWeekDate = todaysDate.setDate(todaysDate.getDate() - 7);
          Object.keys(data).map(key => {
            if (new Date(data[key][0]) > lastWeekDate) {
              newUsers.push(data[key]);
            }
          });
          this.series = [
            {
              name: "active users",
              data: activeUsers
            },
            {
              name: "new users",
              data: newUsers
            }
          ];
        })
        .catch(err => console.log(err));
    },
    toggleWeeks() {
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56ccf2";
      this.$refs.weeks.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";

      const activeUsers = [];
      const newUsers = [];
      // Binding docs
      this.$binding("activeUsers", db.collection("traffic").doc("activeUsers"))
        .then(data => {
          const todaysDate = new Date();
          const lastMonthsDate = todaysDate.setDate(todaysDate.getDate() - 30);
          Object.keys(data).map(key => {
            if (new Date(data[key][0]) > lastMonthsDate) {
              activeUsers.push(data[key]);
            }
          });
        })
        .catch(err => console.log(err));

      this.$binding("newUsers", db.collection("traffic").doc("newUsers"))
        .then(data => {
          const todaysDate = new Date();
          const lastMonthsDate = todaysDate.setDate(todaysDate.getDate() - 30);
          Object.keys(data).map(key => {
            if (new Date(data[key][0]) > lastMonthsDate) {
              newUsers.push(data[key]);
            }
          });
          this.series = [
            {
              name: "active users",
              data: activeUsers
            },
            {
              name: "new users",
              data: newUsers
            }
          ];
        })
        .catch(err => console.log(err));
    },
    toggleMonths() {
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56ccf2";
      this.$refs.months.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "4px";

      const activeUsers = [];
      const newUsers = [];
      // Binding docs
      this.$binding("activeUsers", db.collection("traffic").doc("activeUsers"))
        .then(data => {
          const todaysDate = new Date();
          const lastYearDate = todaysDate.setDate(todaysDate.getDate() - 365);
          Object.keys(data).map(key => {
            if (new Date(data[key][0]) > lastYearDate) {
              activeUsers.push(data[key]);
            }
          });
        })
        .catch(err => console.log(err));

      this.$binding("newUsers", db.collection("traffic").doc("newUsers"))
        .then(data => {
          const todaysDate = new Date();
          const lastYearDate = todaysDate.setDate(todaysDate.getDate() - 365);
          Object.keys(data).map(key => {
            if (new Date(data[key][0]) > lastYearDate) {
              newUsers.push(data[key]);
            }
          });
          this.series = [
            {
              name: "active users",
              data: activeUsers
            },
            {
              name: "new users",
              data: newUsers
            }
          ];
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15%;
}
.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
}

h1.dark {
  @include heading-3($black);
}

h1.light {
  @include heading-3($white);
}

.toggle {
  @include medium-text;
  color: $dark-gray;
  height: 50px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;

  &:hover {
    cursor: pointer;
  }
}

@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
}

.days {
  @include toggle-settings;
  background: $teal;
  border-radius: 4px;
  color: $white;
}

.weeks {
  @include toggle-settings;
}

.months {
  @include toggle-settings;
}
</style>
