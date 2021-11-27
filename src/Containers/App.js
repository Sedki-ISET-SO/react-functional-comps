import React, { useState, useEffect } from 'react';
import '../Styles/style.css';
import Form from '../Components/Form';
import Contact from '../Components/Contact';
import Contacts from '../Components/Contacts';

function App() {
  let [form, setForm] = useState({
    gender: '',
    name: '',
    age: '',
    date: '',
    country: '',
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
    console.log(contacts.length);
  };

  let handleDelete = (contact) => {
    console.log(contact);
    setContacts(contacts.filter((item) => item.id !== contact.id));
  };
  return (
    <div>
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
