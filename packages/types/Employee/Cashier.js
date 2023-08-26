import Base from './Base';

export const Cashier = class extends Base {
  #department;
  #cashNumber;

  constructor(cashier) {
    super();

    this.name = cashier.name;
    this.surname = cashier.surname;
    this.age = cashier.age;
    this.mobileNumber = cashier.mobileNumber;
    this.employmentDate = cashier.employmentDate;
    this.wage = cashier.wage;
    this.#department = cashier.department;
    this.#cashNumber = cashier.cashNumber;
  }
};
