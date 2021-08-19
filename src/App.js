// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us"/>
    
    {/* container is a bootstrap class */}
    <div className="container">            
    <TextForm title="Enter your text"/>
    </div>
    
    </>
  );
}

export default App;
