import type { Product } from './../types/LfProductsTypes'
export const ProductsList: Product[] = [
  {
    productType: 'pizza',
    title: 'Креветки со сладким чили',
    img: 'https://media.dodostatic.net/image/r:233x233/11EE7970321044479C1D1085457A36EB.webp',
    description: 'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла',
    price: '',
    id: 0,
    gram: 0,
    count: 0,
    size: [
      { name: 'Маленькая', id: 1, type: [1], img: '' },
      { name: 'Средняя', id: 2, type: [1, 2], img: ''},
      { name: 'Большая', id: 3, type: [1, 2], img: '' }
    ],
    type: [
      {
        name: 'Традиционное', id: 1, img: '',
        additionaly: [
          {img: 'assets/img/additionaly/default/1.png', title: 'Сливочная моцарелла', price: '100'},
          {img: 'assets/img/additionaly/default/2.png', title: 'Сыры чеддер и пармезан', price: '102'},
          {img: 'assets/img/additionaly/default/3.png', title: 'Острый перец халапеньо', price: '103'},
          {img: 'assets/img/additionaly/default/4.png', title: 'Нежный цыпленок', price: '104'},
          {img: 'assets/img/additionaly/default/5.png', title: 'Шампиньоны', price: '105'},
          {img: 'assets/img/additionaly/default/6.png', title: 'Бекон', price: '106'},
          {img: 'assets/img/additionaly/default/7.png', title: 'Ветчина', price: '107'},
          {img: 'assets/img/additionaly/default/8.png', title: 'Пикантная пепперони', price: '108'},
          {img: 'assets/img/additionaly/default/9.png', title: 'Острая чоризо', price: '109'},
          {img: 'assets/img/additionaly/default/10.png', title: 'Маринованные огурчики', price: '110'},
          {img: 'assets/img/additionaly/default/11.png', title: 'Свежие томаты', price: '120'},
          {img: 'assets/img/additionaly/default/12.png', title: 'Красный лук', price: '130'},
          {img: 'assets/img/additionaly/default/13.png', title: 'Сочные ананасы', price: '140'},
          {img: 'assets/img/additionaly/default/14.png', title: 'Итальянские травы', price: '150'},
          {img: 'assets/img/additionaly/default/15.png', title: 'Сладкий перец', price: '160'},
          {img: 'assets/img/additionaly/default/16.png', title: 'Кубики брынзы', price: '170'},
          {img: 'assets/img/additionaly/default/17.png', title: 'Митболы', price: '180'},
          {img: 'assets/img/additionaly/default/18.png', title: 'Баварские колбаски', price: '190'},
          {img: 'assets/img/additionaly/default/19.png', title: 'Креветки', price: '200'},
        ]
      }
      ,
      {
        name: 'Тонкое', id: 2, img: '',
        additionaly: [
          {img: 'assets/img/additionaly/default/4.png', title: 'Нежный цыпленок', price: '104'},
          {img: 'assets/img/additionaly/default/5.png', title: 'Шампиньоны', price: '105'},
          {img: 'assets/img/additionaly/default/6.png', title: 'Бекон', price: '106'},
          {img: 'assets/img/additionaly/default/7.png', title: 'Ветчина', price: '107'},
          {img: 'assets/img/additionaly/default/8.png', title: 'Пикантная пепперони', price: '108'},
          {img: 'assets/img/additionaly/default/9.png', title: 'Острая чоризо', price: '109'},
          {img: 'assets/img/additionaly/default/10.png', title: 'Маринованные огурчики', price: '110'},
          {img: 'assets/img/additionaly/default/11.png', title: 'Свежие томаты', price: '120'},
          {img: 'assets/img/additionaly/default/12.png', title: 'Красный лук', price: '130'},
          {img: 'assets/img/additionaly/default/13.png', title: 'Сочные ананасы', price: '140'},
          {img: 'assets/img/additionaly/default/14.png', title: 'Итальянские травы', price: '150'},
        ]
       },
    ],
    ingridients: [
      { name: 'Креветки', id: 1 },
      { name: 'ананасы', id: 2 },
      { name: 'соус сладкий чили', id: 3 },
      { name: 'сладкий перец', id: 4 },
      { name: 'моцарелла', id: 5 },
      { name: 'фирменный соус альфредо', id: 6 },
    ],
    notes: [
      { label: 'Энерг. ценность', value: '242.3 ккал' },
      { label: 'Белки', value: '9.1 г' },
      { label: 'Жиры', value: '7.5 г' },
      { label: 'Углеводы ', value: '32.9 г' },
      { label: 'Вес', value: '800 г' },
      { label: 'Диаметр', value: '35 см' },
    ]
  },
  {
    productType: 'default',
    title: 'Креветки со сладким чили',
    img: 'https://media.dodostatic.net/image/r:233x233/11EE7970321044479C1D1085457A36EB.webp',
    description: 'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла',
    price: '',
    id: 0,
    gram: 0,
    count: 0,
    notes: [
      { label: 'Энерг. ценность', value: '242.3 ккал' },
      { label: 'Белки', value: '9.1 г' },
      { label: 'Жиры', value: '7.5 г' },
      { label: 'Углеводы ', value: '32.9 г' },
      { label: 'Вес', value: '800 г' },
      { label: 'Диаметр', value: '35 см' },
    ]
  }
]

export const categories = [
  {
    categoryName: 'Завтрак',
    id: 1,
    products: ProductsList
  }
]