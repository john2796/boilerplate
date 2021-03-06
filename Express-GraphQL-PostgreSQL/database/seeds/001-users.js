const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          username: 'admin',
          firstName: 'Marty',
          middleName: 'Seamus',
          lastName: 'McFly',
          email: 'wehaveto@goback.com',
          phone: '(777) 777-7777',
          street1: '1234 Lost in Time',
          street2: null,
          city: 'Hill Valley',
          state: 'CA',
          zip: 94000
        },
        {
          username: 'nwthomas',
          firstName: 'Nathan',
          middleName: 'W',
          lastName: 'Thomas',
          email: 'nthomas@gmail.com',
          phone: '(777) 777-7778',
          street1: '4321 Palm Street',
          street2: 'P.O. Box 41',
          city: 'Paradise',
          state: 'CA',
          zip: 95939
        },
        {
          username: faker.fake('{{internet.userName}}'),
          firstName: faker.fake('{{name.firstName}}'),
          middleName: null,
          lastName: faker.fake('{{name.lastName}}'),
          email: faker.fake('{{internet.email}}'),
          phone: faker.fake('{{phone.phoneNumber}}'),
          street1: faker.fake('{{address.streetName}}'),
          street2: null,
          city: faker.fake('{{address.city}}'),
          state: faker.fake('{{address.state}}'),
          zip: faker.fake('{{address.zipCode}}')
        }
      ]);
    });
};
