import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "480a1a6f34164eff9105c4d6b138847a",
  },
});
