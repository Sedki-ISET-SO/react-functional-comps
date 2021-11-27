import React from 'react';

function From({ form, handleSubmit, handleChange, Contact }) {
  let { gender, name, age, date, country } = form;
  return (
    <div>
      <h1>Add Contact:</h1>
      <form onSubmit={handleSubmit}>
        <p>gender</p>
        <div style={{ display: 'flex' }}>
          <label>
            <p>male</p>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
          </label>
          <label>
            <p>female</p>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
          </label>
        </div>

        <label>
          <p>name</p>
          <input name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          <p>age</p>
          <input name="age" value={age} onChange={handleChange} />
        </label>

        <label>
          <p>date</p>
          <input name="date" value={date} onChange={handleChange} />
        </label>

        <label>
          <p>country</p>
          <select name="country" onChange={handleChange} required>
            <option disabled selected value>
              select
            </option>
            <option value="france">France</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="tunisia">Tunisia</option>
          </select>
        </label>

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <Contact />
    </div>
  );
}

export default From;
