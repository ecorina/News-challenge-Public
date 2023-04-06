import axios from "axios";

export const GetApi = async () => {
  const getData = await axios
    .get(
      `https://content.guardianapis.com/search?api-key=3076f285-1c53-44a2-912a-10878f5ea096&q=news&page-size=5&show-fields=thumbnail`
    )
    .then((res) => {
      const data = res.data.response.results.slice(0, 10);
      return data;
    })
    .catch((err) => console.log(err));
};
