import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import contactHome from "./schemas-components/contactHome";
import introHome from "./schemas-components/introHome";
import menuHome from "./schemas-components/menuHome";
import openHoursHome from "./schemas-components/openHoursHome";

import contact from "./schemas-pages/contact";
import menu from "./schemas-pages/menu";
import menuDrink from "./schemas-pages/menuDrink";
import menuDrinkList from "./schemas-pages/menuDrinkList";
import menuFood from "./schemas-pages/menuFood";
import openHours from "./schemas-pages/openHours";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    introHome,
    menuHome,
    openHoursHome,
    contactHome,
    contact,
    menu,
    menuDrink,
    menuDrinkList,
    menuFood,
    openHours,
  ]),
});
