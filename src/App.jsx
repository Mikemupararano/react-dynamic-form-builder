import react from 'react';
import './App.css'
function App() {
  const [values, setValues] = react.useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: '',
    subjects: '',
    resume: '',
    url: '',
    about: ''
    
})

  const handleChanges = (e) => {
    setValues({...values, [e.target.name, e.target.values]})
  }
  return (
    <>
      <div className="container">
        <h1>Dynamic React Form</h1>
        <form >
          <label htmlFor='name'>First Name</label>
          <input type="text" placeholder='Enter your first name' name='firstname' required
            onChange={(e) => handleChanges(e)} />
          <label htmlFor='lastname'>Last Name</label>
          <input type="text" placeholder='Enter your last name' name='lastname' required
          onChange={(e) => handleChanges(e)}/>
          <label htmlFor='email'>Email</label>
          <input type="email" placeholder='Enter your email' name='email' required
          onChange={(e) => handleChanges(e)}/>
          <label htmlFor='phone'>Phone</label>
          <input type="text" placeholder='Enter your phone' name='phone' required
          onChange={(e) => handleChanges(e)}/>
          <label htmlFor='gender'>Gender</label>
          <input type="radio" name='gender'
          onChange={(e) => handleChanges(e)}/> Male
          <input type="radio" name='gender'
          onChange={(e) => handleChanges(e)}/> Female
          <input type="radio" name='gender'
            onChange={(e) => handleChanges(e)}/> Other
          <label htmlFor='subjects'>Subjects</label>
          <select name='subjects' id='subjects' onChange={(e) => handleChanges(e)}>
            <option value="english">English</option>
            <option value="maths">Maths</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <label htmlFor='resume'>Resume</label>
          </select>
          <input type="file" placeholder='Upload your resume' name='resume'
          onChange={(e) => handleChanges(e)}/>
          <label htmlFor='url'>URL</label>
          <input type="text" name='url' placeholder='Enter your url'
          onChange={(e) => handleChanges(e)}/>
          <label htmlFor='about'>About</label>
          <textarea name='about' id='about' cols="30" rows="10" 
          onChange={(e) => handleChanges(e)}placeholder='Write a description'></textarea>
          <button type='reset'>Reset</button>
          <button type='submit'>Submit</button>


          



        </form>
      </div>
      
    </>
  )
}

export default App
