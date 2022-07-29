import { useEffect, useState } from "react";
import { Button, Header } from "semantic-ui-react";
import styles from "./Item.module.css";
import { useRouter } from "next/router";

export default function Item({ item }) {
  const { image_link, name, price, description, category, product_type } = item;

  const router = useRouter();
  const { id } = router.query;

  console.log("id", id);

  useEffect(() => {
    let list = localStorage.getItem("items");

    if (list == null) {
      list = [];
    } else {
      list = JSON.parse(list);
    }

    const ItemId = list.find((data) => data.itemId === id);

    console.log("itemId", ItemId);
    if (!ItemId) {
      list.unshift({ itemId: id });
    }

    localStorage.setItem("items", JSON.stringify(list));
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong className={styles.tit_item}>{name}</strong>
            <strong className={styles.num_price}>${price}</strong>
            <span>
              {category ? `${category}/` : ""}
              {product_type}
            </span>
          </div>
          <Button
            style={{ marginTop: 20, backgroundColor: "orange", color: "white" }}
          >
            구매하기
          </Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <div className={styles.desc}>
        <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
      </div>
    </>
  );
}
