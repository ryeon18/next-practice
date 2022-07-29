import { Grid } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

export default function ItemList({ list }) {
  return (
    <div className="Item-list">
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <a>
                  <div className="centered col m-top-20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <strong>{item.name}</strong>
                    {/* <span>{item.category} {item.product_type}</span> */}
                    <strong>₩ {item.price.toLocaleString()}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
