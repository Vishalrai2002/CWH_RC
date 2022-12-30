import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';



let name="Vishal";
function App() {
  return (
  <>

  <Navbar title="TextUtils"abouttext="About"/>
  <div className="container my-3">
    <TextForm/>
  </div>

  </>
  );
}

export default App;
