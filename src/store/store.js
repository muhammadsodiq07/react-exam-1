import create from 'zustand';
import {
  devtools
} from 'zustand/middleware';
import categoriesObj from "../categoriesObj";
import dealObj from "../obj";

let items = [];
const store = (set) => ({
  categoriesObj,
  dealObj: dealObj,
  items: items,
  addCard: (cards) => {
    const existingItems = items.find((item) => item.id === cards.id)

    if (!existingItems) {
      items.push({
        id: cards.id,
        name: cards.name,
        newPrice: cards.newPrice,
      });
    }
  }
})

const useStore = create(devtools(store))

export default useStore