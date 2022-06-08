export interface ItourData {
  id: string,
  name: string,
  price: number,
  description: string,
  pets: boolean,
  breacfast: boolean,
  from: string,
  to: string,
  discount: number,
}

export const tourData = [
  {
    id: '1',
    name: 'Turkey',
    price: 800,
    description: 'Программа все включено действует до 23:00 и включает следущие напитки: прохладительные напитки местного производства, домашнее вино, разливное пиво, узо, раки, чай и кофе.',
    pets: false,
    breacfast: true,
    from: 'Ukraine',
    to: 'Turkey',
    discount: 15,
  },
  {
    id: '2',
    name: 'Bulgaria',
    price: 600,
    description: 'Программа все включено действует до 23:00 и включает следущие напитки: прохладительные напитки местного производства, домашнее вино, разливное пиво, узо, раки, чай и кофе.',
    pets: false,
    breacfast: true,
    from: 'Ukraine',
    to: 'Bulgaria',
    discount: 25,
  },
  {
    id: '3',
    name: 'Maldives',
    price: 700,
    description: 'Программа все включено действует до 23:00 и включает следущие напитки: прохладительные напитки местного производства, домашнее вино, разливное пиво, узо, раки, чай и кофе.',
    pets: false,
    breacfast: true,
    from: 'Ukraine',
    to: 'Maldives',
    discount: 20,
  },
];
