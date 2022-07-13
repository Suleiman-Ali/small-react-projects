import axios from "axios";

export default async function getImages(term) {
  const url = "https://api.unsplash.com/search/photos";
  const params = { query: term };
  const headers = {
    Authorization: "Client-ID sWPDWYfJl8iyOn978C-tWXkgXr1BQMkhf9pllamFe-A",
  };
  const reponse = await axios.get(url, { params, headers });
  return reponse.data.results;
}
