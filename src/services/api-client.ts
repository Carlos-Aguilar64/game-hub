import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bb16b6830c0748649f9b7d867beae5c8",
  },
});
