import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "49d29d7a6f684bbca67e35de765f316f",
  },
});
