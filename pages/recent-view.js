import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";

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

  return (
    <>
      <Header as="h3">최근 본 상품</Header>
      {itemList.length > 0 ? (
        itemList.map((data) => {
          return <p key={data.itemId}>상품아이디 : {data.itemId}</p>;
        })
      ) : (
        <p>최근 본 상품이 없습니다.</p>
      )}
      {/* <ItemList /> */}
    </>
  );
}
