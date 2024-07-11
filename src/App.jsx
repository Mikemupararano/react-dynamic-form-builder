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
          
          



        </form>
      </div>
      
    </>
  )
}

export default App
