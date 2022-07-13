import axios from "axios";

const key = "AIzaSyCj6Q-eQ1N3750hSq2HAnfA-AhOsMxG4RM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: key,
  },
});
