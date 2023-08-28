import { Employee } from './Base';

export const Supervisor = class extends Employee {
  #department;
  #cashNumber;

  constructor(supervisor) {
    super();

    this.name = supervisor.name;
    this.surname = supervisor.surname;
    this.age = supervisor.age;
    this.mobileNumber = supervisor.mobileNumber;
    this.employmentDate = supervisor.employmentDate;
    this.wage = supervisor.wage;
    this.#department = supervisor.department;
    this.#cashNumber = supervisor.cashNumber;
  }
};
