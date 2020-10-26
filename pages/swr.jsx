

import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());
// const fetcher = url => fetch(url).then(res => res.json()).then(data => console.log(data));

export default function App() {
  const { data, error } = useSWR(
    "https://www.tianqiapi.com/api/?version=v1&city=%E5%8C%97%E4%BA%AC&appid=23941491&appsecret=TXoD5e8P",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>地点：{data.city}</h1>
      <div>今天： {data.data[0].wea}</div>
      <div>明天： {data.data[1].wea}</div>
      <div>后天： {data.data[2].wea}</div>
    </div>
  );
}
