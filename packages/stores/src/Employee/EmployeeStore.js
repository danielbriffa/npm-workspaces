import { defineStore } from 'pinia';

export const useEmployeeStore = defineStore('employees', {
  state: () => ({ employees: [] }),
  getters: {
    employees: (state) => state.employees
  },
  actions: {
    retrieveEmployees() {}
  }
});
