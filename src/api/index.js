import axios from "axios";

export const ArticlesApi = axios.create({
  baseURL: "https://www.api.recruitment.matic.io",
});
