import React from "react";

import { useQuery } from 'react-query';
import { sanity, imageUrlBuilder } from '../sanity';


const query = `
  *[ _type == 'contact' ] { title, number, mail, adress }
`;

const Contact = () => {

  const { data = [] } = useQuery('contact', () => sanity.fetch(query));

  const [contact] = data;

  if (!contact) {
    return <h1>Loading…</h1>;
  }


  return (
    <div>
      
      <h1>Contact Page</h1>

    <h2>{contact.title}</h2>
    <h2>{contact.number}</h2>
    <h2>{contact.mail}</h2>
    <h2>{contact.adress}</h2>


    </div>


  )
  
};
export default Contact;
