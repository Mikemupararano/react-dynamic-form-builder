import react from 'react';
import './App.css'
function App() {


  return (
    <>
      <div className="container">
        <h1>Dynamic React Form</h1>
        <form>
          <label htmlFor='name'>First Name</label>
          <input type="text" placeholder='Enter your first name' name='firstname' required />
          <label htmlFor='lastname'>Last Name</label>
          <input type="text" placeholder='Enter your last name' name='lastname' required />
          <label htmlFor='email'>Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label htmlFor='phone'>Phone</label>
          <input type="text" placeholder='Enter your phone' name='phone' required />
          <label htmlFor='gender'>Gender</label>
          <input type="radio" name='gender' /> Male
          <input type="radio" name='gender' /> Female
          <input type="radio" name='gender' /> Other
          <label htmlFor='subjects'>Subjects</label>
          <select name='subjects' id='subjects'>
            <option value="english">English</option>
            <option value="maths">Maths</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <label htmlFor='resume'>Resume</label>
          </select>
          <input type="file" placeholder='Upload your resume' name='resume' />
          <label htmlFor='url'>URL</label>
          <input type="text" name='url' placeholder='Enter your url' />
          <label htmlFor='about'>About</label>
          <textarea name='about' id='about' cols="30" rows="10" placeholder='Write a description'></textarea>
          <button type='reset'>Reset</button>
          <button type='submit'>Submit</button>


          



        </form>
      </div>
      
    </>
  )
}

export default App
