export const Employee = class {
  name;
  surname;
  age;
  mobileNumber;
  employmentDate;
  wage;

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  getAge() {
    return this.age;
  }

  getMobileNumber() {
    return this.mobileNumber;
  }
};
