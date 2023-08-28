import { Cashier } from 'packages\\mocks';
import { faker } from '@faker-js/faker';

export const CASHIER_MOCKS = (amount) => {
  let mocks = [];

  for (let i = 0; i <= amount; i++) {
    let cashier = {
      name: faker.person.firstName,
      surname: faker.person.lastName,
      age: faker.person.age,
      mobileNumber: faker.person.mobileNumber,
      employmentDate: faker.date.past({ years: 3 }),
      wage: faker.person.wage,
      department: faker.lorem.words({ min: 1, max: 3 }),
      cashNumber: faker.number.int({ min: 1000, max: 9999 })
    };

    mocks.push(new Cashier(cashier));
  }

  return mocks;
};
