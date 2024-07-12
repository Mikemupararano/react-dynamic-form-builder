import React from 'react'; // Import React library
import './App.css'; // Import CSS file for styling

function App() {
  // Declare state variables and initialize with empty strings
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

  // Handle changes to form inputs
  const handleChanges = (e) => {
    const { name, type, value, files } = e.target; // Destructure event target properties
    if (type === 'file') {
      setValues({ ...values, [name]: files[0] }); // Update state for file input
    } else {
      setValues({ ...values, [name]: value }); // Update state for other inputs
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(values); // Log form values to console
    // axios.post(url, values) // Uncomment to send data to server
  };

  // Reset form values
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
    }); // Reset state to initial values
  };

  return (
    <div className="container"> {/* Container div for form */}
      <h1>Dynamic React Form</h1> {/* Form title */}
      <form onSubmit={handleSubmit}> {/* Form element with submit handler */}
        <label htmlFor='firstname'>First Name</label> {/* Label for first name */}
        <input 
          type="text" 
          placeholder='Enter your first name' 
          name='firstname'
          onChange={handleChanges} 
          required 
          value={values.firstname} // Bind state value to input
        />
        <label htmlFor='lastname'>Last Name</label> {/* Label for last name */}
        <input 
          type="text" 
          placeholder='Enter your last name' 
          name='lastname'
          onChange={handleChanges} 
          required 
          value={values.lastname} // Bind state value to input
        />
        <label htmlFor='email'>Email</label> {/* Label for email */}
        <input 
          type="email" 
          placeholder='Enter your email' 
          name='email'
          onChange={handleChanges} 
          required 
          value={values.email} // Bind state value to input
        />
        <label htmlFor='phone'>Phone</label> {/* Label for phone */}
        <input 
          type="text" 
          placeholder='Enter your phone' 
          name='phone'
          onChange={handleChanges} 
          required 
          value={values.phone} // Bind state value to input
        />
        <label>Gender</label> {/* Label for gender */}
        <input 
          type="radio" 
          name='gender'
          value="Male"
          onChange={handleChanges} 
        /> Male {/* Radio button for male */}
        <input 
          type="radio" 
          name='gender'
          value="Female"
          onChange={handleChanges} 
        /> Female {/* Radio button for female */}
        <input 
          type="radio" 
          name='gender'
          value="Other"
          onChange={handleChanges} 
        /> Other {/* Radio button for other */}
        <label htmlFor='subjects'>Subjects</label> {/* Label for subjects */}
        <select 
          name='subjects' 
          id='subjects' 
          onChange={handleChanges} 
          value={values.subjects} // Bind state value to select
        >
          <option value="">Select a subject</option> {/* Default option */}
          <option value="english">English</option> {/* Option for English */}
          <option value="maths">Maths</option> {/* Option for Maths */}
          <option value="physics">Physics</option> {/* Option for Physics */}
          <option value="chemistry">Chemistry</option> {/* Option for Chemistry */}
        </select>
        <label htmlFor='resume'>Resume</label> {/* Label for resume */}
        <input 
          type="file" 
          name='resume'
          onChange={handleChanges} // Handle file input change
        />
        <label htmlFor='url'>URL</label> {/* Label for URL */}
        <input 
          type="text" 
          name='url' 
          placeholder='Enter your url'
          onChange={handleChanges} 
          value={values.url} // Bind state value to input
        />
        <label htmlFor='about'>About</label> {/* Label for about */}
        <textarea 
          name='about' 
          id='about' 
          cols="30" 
          rows="10" 
          onChange={handleChanges}
          placeholder='Write a description'
          value={values.about} // Bind state value to textarea
        ></textarea>
        <button type='reset' onClick={resetFun}>Reset</button> {/* Reset button */}
        <button type='submit'>Submit</button> {/* Submit button */}
      </form>
    </div>
  );
}

export default App; // Export App component
