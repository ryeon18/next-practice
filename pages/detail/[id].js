import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({ item, name }) => {
  const router = useRouter();
  console.log(router.isFallback);

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" context={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiURL = process.env.apiURL;
  const res = await Axios.get(apiURL);
  const data = res.data;

  return {
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiURL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiURL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}

/**
 * isFallback 상태일 때 화면 대응하는 방법
 * list 결과로 기반으로 staticPaths를 넘겨주는 방법
 */
