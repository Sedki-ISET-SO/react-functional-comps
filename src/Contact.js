import React from 'react';

function Contact({ form, index = 0, handleDelete }) {
  return (
    <div className="wrapper" key={index}>
      <h1>Current</h1>
      <table>
        <tr>
          <th>fname</th>
          <th>lname</th>
        </tr>
        <tr>
          <td>{form.fname}</td>
          <td>{form.lname}</td>
        </tr>

        <tr>
          <button
            onClick={() => {
              handleDelete(form);
            }}
          >
            Delete
          </button>
        </tr>
      </table>
    </div>
  );
}

export default Contact;
