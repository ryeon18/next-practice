import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";

export default function Category() {
  const router = useRouter();
  let activeItem;
  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  } else if (router.pathname === "/recent-view") {
    activeItem = "recent-view-products";
  }

  function goLink(e, data) {
    console.log("data", e.target.className);
    let className = e.target.className;
    let split = className.split(" ");
    let classNameArray = split;
    console.log("split", typeof classNameArray[0]);

    for (let i = 0; i < classNameArray.length; i++) {
      if (i == "th") {
        console.log("yes");
      } else {
        console.log("??");
      }
    }
  }

  return (
    <div className="row">
      <Icon.Group className="th padding-10" onClick={goLink}>
        <Icon name="th" circular color="teal" />
        <span className="th vertical-middle">전체보기</span>
      </Icon.Group>
      <Icon.Group className="padding-10">
        <Icon name="paint brush" circular color="teal" />
        <span className="vertical-middle">파운데이션</span>
      </Icon.Group>
      <Icon.Group className="padding-10">
        <Icon name="eye" circular color="teal" />
        <span className="vertical-middle">아이</span>
      </Icon.Group>
      {}
      <Icon.Group className="padding-10">
        <Icon name="magic" circular color="teal" />
        <span className="vertical-middle">립</span>
      </Icon.Group>
    </div>
  );
}
