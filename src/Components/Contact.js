import React from 'react';

function Contact({ form, index = -1, handleDelete }) {
  return (
    <div key={index}>
      <h1>Current</h1>
      <table>
        <tr>
          <th>gender</th>
          <th>name</th>
          <th>age</th>
          <th>date</th>
          <th>country</th>
        </tr>
        <tr>
          <td>{form.gender}</td>
          <td>{form.name}</td>
          <td>{form.age}</td>
          <td>{form.date}</td>
          <td>{form.country}</td>
        </tr>
        {index >= 0 && (
          <tr>
            <button
              onClick={() => {
                handleDelete(form);
              }}
            >
              Delete
            </button>
          </tr>
        )}
      </table>
    </div>
  );
}

export default Contact;
