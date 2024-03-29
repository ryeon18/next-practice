import { Header } from "semantic-ui-react";
import Image from "next/image";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <Image src="/images/catLogo.png" alt="logo" width={90} height={70} />
        </div>
        <Header as="h1">해피 코스메틱</Header>
      </div>
    </div>
  );
}
