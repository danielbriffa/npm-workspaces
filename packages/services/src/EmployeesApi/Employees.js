import { CASHIER_MOCKS } from 'mocks';

export const EMPLOYEES_API = class {
  #isMock;

  constructor(isMock = false) {
    this.#isMock = isMock;
  }

  getEmployees() {
    if (this.#isMock) {
      return new Promise((resolve) => {
        resolve(CASHIER_MOCKS(10));
      });
    } else {
      fetch('https://reqres.in/api/users').then((res) => {
        return res;
      });
    }
  }
};
