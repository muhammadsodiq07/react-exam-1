import img1 from "./assets/images/organic-cat5.jpg"
import img2 from "./assets/images/apple.jpg"
import img3 from "./assets/images/cat3.jpg"
import img4 from "./assets/images/cat4.jpg"


const dealObj = [
  {
    id: 1,
    image: img1,
    type: 'Root vegetables',
    name: 'Violet Cauliflower',
    oldPrice: 15,
    newPrice: 10,
    sold: 90,
    available: 40,
    discount: '-33%',
    soldInHour: '15 sold in last 19 hours',
  },
  {
    id: 2,
    image: img2,
    type: 'Chilies, garlic, lemon',
    name: 'Organic lemon',
    oldPrice: 25,
    newPrice: 20,
    sold: 60,
    available: 80,
    discount: '-20%',
    soldInHour: '20 sold in last 12 hours',

  },
  {
    id: 3,
    image: img3,
    type: 'Milks & Creams',
    name: 'Sorbet ice cream',
    oldPrice: 15,
    newPrice: 12,
    sold: 82,
    available: 58,
    discount: '-20%',
    soldInHour: '35 sold in last 11 hours',
  },
  {
    id: 4,
    image: img4,
    type: 'Milks & Creams',
    name: 'Purea Lime',
    oldPrice: 18,
    newPrice: 12,
    sold: 71,
    available: 34,
    discount: '-33%',
    soldInHour: '5 sold in last 25 hours',
  },
]

export default dealObj