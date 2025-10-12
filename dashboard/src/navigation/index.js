import { allNavigation } from "./allNavigation";

export const getNav = (role) => {
  const finalNav = [];

  for (let i = 0; i < allNavigation.length; i++) {
    if (role === allNavigation[i].role) {
      finalNav.push(allNavigation[i]);
    }
  }
  return finalNav;
};
