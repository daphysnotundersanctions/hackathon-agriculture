import { defineStore } from "pinia";

export const useEmployeeStore = defineStore("employee", {
  state: () => {
    return {
      chosenEmployee: "" as String,
    };
  },
  actions: {
    setEmployee(name: string) {
      this.chosenEmployee = name;
    },
  },
});
