import itemsList from "../helpers/itemList";

export const getItems = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(itemsList);
    }, 2000);
  } else {
    reject("400 - not found");
  }
});
