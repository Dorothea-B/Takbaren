// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'


import madLib from './madLib';
import introTextHome from './introTextHome';
import menuHome from './menuHome';
import openHoursHome from './openHoursHome';
import contactHome from './contactHome';


import homePage from './homepage';
// Then import schema types from any plugins that might expose them

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    homePage,
    introTextHome,
    menuHome,
    openHoursHome,
    contactHome,
    madLib,
  ]),
})
