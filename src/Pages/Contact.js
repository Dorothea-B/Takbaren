import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

const query = `
  *[ _type == 'contact' ] { title, number, mail, address }
`;

const Contact = () => {
  const { data = [] } = useQuery("contact", () => sanity.fetch(query));

  const [contact] = data;

  if (!contact) {
    return <h1>Loading…</h1>;
  }

  return (
    <section>
      <h2>{contact.title}</h2>
      <p>{contact.number}</p>
      <p>{contact.mail}</p>
      <p>{contact.address}</p>
    </section>
  );
};
export default Contact;
