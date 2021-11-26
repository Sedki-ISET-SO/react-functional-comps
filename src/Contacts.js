import React from 'react';
import Contact from './Contact';
function Contacts({ Contactlist, handleDelete }) {
  return (
    <div>
      {Contactlist.map((contact, index) => {
        return (
          <Contact index={index} form={contact} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default Contacts;
