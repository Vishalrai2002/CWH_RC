import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



let name="Vishal";
function App() {
  return (
  <>

  <Navbar title="TextUtils"abouttext="About"/>
  <div className="container my-3">
  <TextForm heading ="Enter the text to analyse below"/>
  </div>

  </>
  );
}

export default App;
