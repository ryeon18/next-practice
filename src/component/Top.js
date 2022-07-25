import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/catLogo.png"
            alt="logo"
            style={{
              display: "block",
              width: 90,
              // height: 100,
              borderRadius: 15,
            }}
          />
        </div>
        <Header as="h1">박세연</Header>
      </div>
      <Gnb />
    </div>
  );
}
