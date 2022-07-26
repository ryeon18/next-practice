import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({ item, name, id }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" context={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} id={id} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  console.log("context", context);
  const id = context.params.id;
  const apiURL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiURL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
      id: id,
    },
  };
}

/**
 * node js 환경
 */
