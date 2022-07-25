import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";
import { Header, Divider, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.body.scrollTop;
      // 브라우저 상단에서부터 스크롤의 움직임을 감지해야 하기 때문에 scrollTop 기준으로 적용.
      if (scrollPosition > 0) {
        setIsScrollActive(true);
        console.log("??", scrollPosition);
        // scroll이 없다면 scrollTop은 0, scroll이 있다면 Scroll 움직이면 0보다 커지기 때문에 0 이상이면 true
      } else {
        setIsScrollActive(false);
      }
    };

    document.body.addEventListener("scroll", handleScroll);
    // React에서 document에 Event를 추가할 때, 그냥 사용하면 렌더링 시점이 구분이 안되기 때문에 useEffect를 이용해서 최초 로드 시에 이벤트 감지가 되어 에러가 나지 않는다.
    return () => document.body.removeEventListener("scroll", handleScroll);
    // Event를 등록했으면 Event를 꼭 해지시켜야 한다. 해지하지 않으면 이벤트를 계속 감지하기 때문에 성능저하를 일으키기 때문에 useEffect의 내부함수의 return 값으로 해제.
  }, [isScrollActive]);

  return (
    <div>
      <Head>
        <title>Home|박세연</title>
        <meta name="description" content="박세연 넥스트테스트프로젝트"></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
}
