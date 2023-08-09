import axios from "axios";
import { useState, useEffect } from "react";
/* The line `import Item from "./Item.js"` is importing the `Item` component from the `Item.js` file.
This allows the `Item` component to be used within the `Items` component. */
import Item from "./Item.js"

// import Item from "./Item.js";

const API = process.env.REACT_APP_API_URL;

function Items() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((response) => setItems(response.data.payload))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Items">
          <section>
            {items.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
          </section>

    </div>
  );
}

export default Items;
