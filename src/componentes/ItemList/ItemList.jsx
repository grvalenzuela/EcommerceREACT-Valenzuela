import Item from "../Item/Item";

function ItemList({ prods }) {
  return (
    <>
      {prods.map((prod) => (
        <Item prod={prod} />
      ))}
    </>
  );
}

export default ItemList;
