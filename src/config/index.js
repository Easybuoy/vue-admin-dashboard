import dotenv from "dotenv";

dotenv.config();

const { VUE_APP_API_URL, VUE_APP_SLACK_TOKEN, VUE_APP_SLACK_URL } = process.env;

const configVariables = {
  VUE_APP_API_URL,
  VUE_APP_SLACK_URL,
  VUE_APP_SLACK_TOKEN
};

export default configVariables;
