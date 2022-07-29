import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import ItemList from "../component/ItemList";

export default function RecentViewProducts({ item, res }) {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("items");
    if (data !== null) {
      setItemList(JSON.parse(data));
    } else {
      return;
    }
  }, []);

  // useEffect(() => {
  //   if (itemList !== undefined) {
  //     const apiURL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  //     const res = axios.get(apiURL);
  //     const data = res.data;
  //     console.log("data", data);
  //   }
  // }, [itemList]);

  return (
    <>
      <Header as="h3">최근 본 상품</Header>
      {itemList.length > 0 ? (
        itemList.slice(0, 9).map((data) => {
          return <p key={data.itemId}>상품아이디 : {data.itemId}</p>;
        })
      ) : (
        <p>최근 본 상품이 없습니다.</p>
      )}
      {/* <ItemList /> */}
    </>
  );
}

// export async function getStaticPaths() {
//   const apiURL = process.env.apiURL;
//   const res = await axios.get(apiURL);
//   const data = res.data;

//   return {
//     paths: data.slice(0, 9).map((item) => ({
//       params: {
//         id: item.id.toString(),
//       },
//     })),
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const id = context.params.id;
//   const apiURL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
//   const res = await axios.get(apiURL);
//   const data = res.data;

//   return {
//     props: {
//       item: data,
//       name: process.env.name,
//     },
//   };
// }
