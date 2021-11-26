import React, { useState, useEffect } from 'react';
import './style.css';
import Form from './Form';
import Contact from './Contact';
import Contacts from './Contacts';

function App() {
  let [form, setForm] = useState({
    fname: '',
    lname: '',
    submitted: false,
  });

  let [contacts, setContacts] = useState([]);

  let handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setForm({ ...form, [name]: value });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setContacts([...contacts, { ...form, id: contacts.length + 1 }]);
  };

  let handleDelete = (contact) => {
    console.log(contact);
    setContacts(contacts.filter((item) => item.id !== contact.id));
  };
  return (
    <div className="App App-header">
      <Form
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        Contact={() => {
          return <Contact form={form} />;
        }}
      />
      <Contacts Contactlist={contacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
