import React from 'react';
import './App.css';

function App() {
  const [values, setValues] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: '',
    subjects: '',
    resume: '',
    url: '',
    about: ''
  });

  const handleChanges = (e) => {
    const { name, type, value, files } = e.target;
    if (type === 'file') {
      setValues({ ...values, [name]: files[0] });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    //axios.post(url, values)
  };

  const resetFun = () => {
    setValues({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      gender: '',
      subjects: '',
      resume: '',
      url: '',
      about: ''
    });
  };

  return (
    <div className="container">
      <h1>Dynamic React Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name</label>
        <input 
          type="text" 
          placeholder='Enter your first name' 
          name='firstname'
          onChange={handleChanges} 
          required 
          value={values.firstname}
        />
        <label htmlFor='lastname'>Last Name</label>
        <input 
          type="text" 
          placeholder='Enter your last name' 
          name='lastname'
          onChange={handleChanges} 
          required 
          value={values.lastname} 
        />
        <label htmlFor='email'>Email</label>
        <input 
          type="email" 
          placeholder='Enter your email' 
          name='email'
          onChange={handleChanges} 
          required 
          value={values.email} 
        />
        <label htmlFor='phone'>Phone</label>
        <input 
          type="text" 
          placeholder='Enter your phone' 
          name='phone'
          onChange={handleChanges} 
          required 
          value={values.phone} 
        />
        <label>Gender</label>
        <input 
          type="radio" 
          name='gender'
          value="Male"
          onChange={handleChanges} 
        /> Male
        <input 
          type="radio" 
          name='gender'
          value="Female"
          onChange={handleChanges} 
        /> Female
        <input 
          type="radio" 
          name='gender'
          value="Other"
          onChange={handleChanges} 
        /> Other
        <label htmlFor='subjects'>Subjects</label>
        <select 
          name='subjects' 
          id='subjects' 
          onChange={handleChanges} 
          value={values.subjects}
        >
          <option value="">Select a subject</option>
          <option value="english">English</option>
          <option value="maths">Maths</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
        </select>
        <label htmlFor='resume'>Resume</label>
        <input 
          type="file" 
          name='resume'
          onChange={handleChanges} 
        />
        <label htmlFor='url'>URL</label>
        <input 
          type="text" 
          name='url' 
          placeholder='Enter your url'
          onChange={handleChanges} 
          value={values.url}
        />
        <label htmlFor='about'>About</label>
        <textarea 
          name='about' 
          id='about' 
          cols="30" 
          rows="10" 
          onChange={handleChanges}
          placeholder='Write a description'
          value={values.about}
        ></textarea>
        <button type='reset' onClick={resetFun}>Reset</button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
