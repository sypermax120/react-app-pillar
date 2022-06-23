export interface IuserData{
  id: number,
  firstName: string,
  secondName: string,
  mail: string,
  password: string,
  isAdmin: boolean,
}

export const userData = [
  {
    id: 1,
    firstName: 'Maks',
    secondName: 'Maks',
    mail: 'admin',
    pass: 'admin',
    isAdmin: true,
  },
  {
    id: 2,
    firstName: 'User1',
    secondName: 'User1',
    mail: 'user2',
    pass: '1111',
    isAdmin: true,
  },
  {
    id: 3,
    firstName: 'User2',
    secondName: 'User2',
    mail: 'user2',
    pass: '1111',
    isAdmin: true,
  },
];
