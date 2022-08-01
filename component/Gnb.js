import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
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
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "category") {
      router.push("/category");
    } else if (data.name === "recent-view-products") {
      router.push("/recent-view");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "admin") {
      router.push("/admin");
    }
  }

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "10",
        backgroundColor: "orange",
      }}
    >
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />

        <Menu.Item
          name="category"
          active={activeItem === "category"}
          onClick={goLink}
        />

        <Menu.Item
          name="recent-view-products"
          active={activeItem === "recent-view-products"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
        <Menu.Item
          name="admin"
          active={activeItem === "admin"}
          onClick={goLink}
        />
      </Menu>
    </div>
  );
}

/**
 * location.href 를 써도 페이지 이동도 된다.
 * 그러나 next/router를 쓰는 이유는 안에 내용물만 바뀌는데, location 이나 a로 이동하면 페이지가 새로고침이 되면서 페이지 전체가 로딩이 되기 때문에
 * SPA의 장점이 사라지고, 부드럽게 이동되는 UX도 구현할 수 없고
 * 리덕스로 관리하던 상태도 다 날라감.
 */
