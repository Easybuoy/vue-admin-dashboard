import dotenv from "dotenv";

dotenv.config();

const { VUE_APP_API_URL } = process.env;

const configVariables = {
    VUE_APP_API_URL: VUE_APP_API_URL
};

export default configVariables;
