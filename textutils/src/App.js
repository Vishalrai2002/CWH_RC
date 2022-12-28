import logo from './logo.svg';
import './App.css';

let name="Vishal";
function App() {
  return (
  <>
  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
    <li>Login/SignUp</li>
  </nav>
  <div className="container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam mollitia, totam eligendi illo nesciunt sequi officia quisquam eius aliquam delectus, illum reprehenderit quos tenetur dolor ipsum error similique corrupti perspiciatis accusamus. Ducimus, natus.</p>
  </div>
  <h1>Hello my name is {name}</h1>
  </>
  
  );
}

export default App;
