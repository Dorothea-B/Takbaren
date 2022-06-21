// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import contactHome from "./schemas-components/contactHome";
import introHome from "./schemas-components/introHome";
import menuHome from "./schemas-components/menuHome";
import openHoursHome from "./schemas-components/openHoursHome";

import imageCarousel from "./schemas-components/imageCarousel";

import contact from "./schemas-pages/contact";
import menu from "./schemas-pages/menu";
import menuDrink from "./schemas-pages/menuDrink";
import menuFood from "./schemas-pages/menuFood";
import openHours from "./schemas-pages/openHours";

// Then import schema types from any plugins that might expose them

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    introHome,
    menuHome,
    openHoursHome,
    contactHome,
    imageCarousel,
    contact,
    menu,
    menuDrink,
    menuFood,
    openHours,
  ]),
});
