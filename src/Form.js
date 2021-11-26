import React from 'react';

function From({ form, handleSubmit, handleChange, Contact }) {
  let { fname, lname } = form;
  return (
    <div className="wrapper">
      <h1>Who are you?</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>name</p>
            <input name="fname" value={fname} onChange={handleChange} />
          </label>
          <label>
            <p>lname</p>
            <input name="lname" value={lname} onChange={handleChange} />
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Contact />
    </div>
  );
}

export default From;
