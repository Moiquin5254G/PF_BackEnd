'use strict';

/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
  {
    // id: uuidv4(),
    name: 'Juan',
    lastName: 'Avila',
    email: 'ejemplo@gmail.com',
    birthDate: '05-07-1998',
    address: 'Avenida Falsa 124',
    image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    dni:'36545332',
    tel:'990987267',
    role:'User',
    CompanyId : 1,
 
},
{
  // id: uuidv4(),
  name: 'Estiven',
  lastName: 'Moica',
  email: 'estivenmoica2@gmail.com',
  birthDate: '03-12-2000',
  address: 'Avenida Falsa 125',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36543338',
  tel:'990987277',
  role:'User',
  CompanyId : 1,
 
},
{
  
  // id: uuidv4(),
  name: 'Didier',
  lastName: 'Brange',
  email: 'ejemplo4@gmail.com',
  birthDate: '11-03-1999',
  address: 'Avenida Falsa 126',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36544444',
  tel:'990987288',
  role:'User',
  CompanyId : 1,
  
},
{
  // id: uuidv4(),
  name: 'Francisco',
  lastName: 'Toti',
  email: 'ejemplo5@gmail.com',
  birthDate: '12-06-1991',
  address: 'Avenida Falsa 127',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36545555',
  tel:'990987299',
  role:'User',
  CompanyId : 1,
 
},
{
  // id: uuidv4(),
  name: 'Carlos',
  lastName: 'Martinez',
  email: 'ejemplo6@gmail.com',
  birthDate: '09-07-1990',
  address: 'Avenida Falsa 128',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36546666',
  tel:'990987200',
  role:'User',
  CompanyId : 1,
 
},
{
  // id: uuidv4(),
  name: 'Pablo',
  lastName: 'Cogno',
  email: 'ejemplo7@gmail.com',
  birthDate: '02-02-1995',
  address: 'Avenida Falsa 129',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36547777',
  tel:'990987111',
  role:'User',
  CompanyId : 1,
  
},
{
  // id: uuidv4(),
  name: 'Josefina',
  lastName: 'Morande',
  email: 'ejemplo8@gmail.com',
  birthDate: '06-09-1989',
  address: 'Avenida Falsa 130',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36548888',
  tel:'990987222',
  role:'User',
  CompanyId : 1,

},
{
  // id: uuidv4(),
  name: 'Virginia',
  lastName: 'Gonzalez',
  email: 'ejemplo9@gmail.com',
  birthDate: '04-05-1985',
  address: 'Avenida Falsa 131',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36549999',
  tel:'990987333',
  role:'User',
  CompanyId : 1,

},
{
  // id: uuidv4(),
  name: 'Juliana',
  lastName: 'Mora',
  email: 'ejemplo10@gmail.com',
  birthDate: '12-09-1976',
  address: 'Avenida Falsa 132',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500000',
  tel:'990987444',
  role:'Admin',
  CompanyId : 1,

},
{
  name: 'Luciana',
  lastName: 'Vergara',
  email: 'ejemplo11@gmail.com',
  birthDate: '11-08-1984',
  address: 'Avenida Falsa 134',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500001',
  tel:'990987445',
  role:'Admin',
  CompanyId: 1
},
{
  name: 'Martin',
  lastName: 'Gregorio',
  email: 'ejemplo12@gmail.com',
  birthDate: '09-07-1990',
  address: 'Avenida Falsa 135',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500002',
  tel:'990987446',
  role:'User',
  CompanyId: 1
},
{
  name: 'Miguel',
  lastName: 'Sanchez',
  email: 'ejemplo21@gmail.com',
  birthDate: '12-12-1990',
  address: 'Avenida Falsa 136',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500003',
  tel:'990987447',
  role:'User',
  CompanyId: 1
}, 
{
  name: 'Luciano',
  lastName: 'Vero',
  email: 'ejemplo13@gmail.com',
  birthDate: '02-09-1992',
  address: 'Avenida Falsa 137',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500004',
  tel:'990987448',
  role:'User',
  CompanyId: 1
}, 
{
  name: 'Genaro',
  lastName: 'Fernandez',
  email: 'ejemplo14@gmail.com',
  birthDate: '08-10-1990',
  address: 'Avenida Falsa 138',
  image: '',
  dni:'36500005',
  tel:'990987449',
  role:'User',
  CompanyId: 1
}, 
{
  name: 'Nicolas',
  lastName: 'Berno',
  email: 'ejemplo15@gmail.com',
  birthDate: '10-10-1994',
  address: 'Avenida Falsa 139',
  image: '',
  dni:'36500015',
  tel:'990987600',
  role:'User',
  CompanyId: 1
}, 
{
  name: 'Mario',
  lastName: 'Loni',
  email: 'ejemplo16@gmail.com',
  birthDate: '12-02-1993',
  address: 'Avenida Falsa 140',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500006',
  tel:'990987450',
  role:'User',
  CompanyId: 1
}, 
{
  name: 'Pedro',
  lastName: 'Meza',
  email: 'ejemplo17@gmail.com',
  birthDate: '02-10-1994',
  address: 'Avenida Falsa 141',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500007',
  tel:'990987451',
  role:'User',
  CompanyId: 1
}, 
{
  name: 'Tomas',
  lastName: 'Aldunate',
  email: 'ejemplo18@gmail.com',
  birthDate: '08-09-1990',
  address: 'Avenida Falsa 142',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500008',
  tel:'990987452',
  role:'User',
  CompanyId: 1
}, 
{
  name: 'Matias',
  lastName: 'Garces',
  email: 'ejemplo19@gmail.com',
  birthDate: '07-10-1991',
  address: 'Avenida Falsa 143',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500009',
  tel:'990987453',
  role:'User',
  CompanyId: 1
}, {
  name: 'Junior',
  lastName: 'Vasquez',
  email: 'ejemplo20@gmail.com',
  birthDate: '03-08-1995',
  address: 'Avenida Falsa 144',
  image: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  dni:'36500010',
  tel:'990987454',
  role:'User',
  CompanyId: 1
}, 



  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
