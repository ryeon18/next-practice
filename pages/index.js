import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItemList from "../component/ItemList";
import styles from "../styles/Home.module.css";
import { Header, Divider, Loader } from "semantic-ui-react";
import axios from "axios";

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/animation.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, [list]);

  return (
    <div>
      <Head>
        <title>Home | 박세연</title>
        <meta name="description" content="박세연 넥스트테스트프로젝트"></meta>
      </Head>

      <Header as="h3" style={{ paddingTop: 40 }}>
        애니메이션 리스트
      </Header>
      <Divider />
      <ItemList list={list} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        예술작품 리스트
      </Header>
      <Divider />
      {/* <ItemList list={list.slice(9)} /> */}
    </div>
  );
}

// export async function getStaticProps() {
//   const apiURL = process.env.apiURL;
//   const res = await axios.get(apiURL);
//   const data = res.data;

//   return {
//     props: {
//       list: data,
//       name: process.env.name,
//     },
//   };
// }
