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

/**
 * {
    "id": 495,
    "brand": "maybelline",
    "name": "Maybelline Face Studio Master Hi-Light Light Booster Bronzer",
    "price": "14.99",
    "price_sign": null,
    "currency": null,
    "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png",
    "product_link": "https://well.ca/products/maybelline-face-studio-master_88837.html",
    "website_link": "https://well.ca",
    "description": "Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert \nbalance of shade + shimmer illuminator for natural glow. Skin goes \nsoft-lit with zero glitz.\n\n\t\tFor Best Results: Brush over all shades in palette and gently sweep over \ncheekbones, brow bones, and temples, or anywhere light naturally touches\n the face.\n\n\t\t\n\t\n\n                    ",
    "rating": 5,
    "category": null,
    "product_type": "bronzer",
    "tag_list": [],
    "created_at": "2016-10-01T18:36:15.012Z",
    "updated_at": "2017-12-23T21:08:50.624Z",
    "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/495.json",
    "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330",
    "product_colors": []
}
 */
