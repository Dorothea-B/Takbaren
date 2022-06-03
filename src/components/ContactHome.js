import React from "react";

import { useQuery } from 'react-query';
import { sanity, imageUrlBuilder } from '../sanity';


const query = `
  *[ _type == 'contactHome' ] { title, number, mail }
`;

const ContactHome = () => {

  const { data = [] } = useQuery('contactHome', () => sanity.fetch(query));

  const [contactHome] = data;

  if (!contactHome) {
    return <h1>Loading…</h1>;
  }

  return (
    
    <div>

    <p>{contactHome.title}</p>
    <p>{contactHome.number}</p>
    <p>{contactHome.mail}</p>
  
    </div>

  )
  
};
export default ContactHome;
