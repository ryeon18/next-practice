import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";
import { Header, Divider, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Home|박세연</title>
        <meta name="description" content="박세연 넥스트테스트프로젝트"></meta>
      </Head>

      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}

export async function getStaticProps() {
  const apiURL = process.env.apiURL;
  const res = await Axios.get(apiURL);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
