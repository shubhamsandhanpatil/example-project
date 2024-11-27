import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title='textUtils1' About='abouttextutils' />
      {/* <Navbar/> */}
      <div className="container my-3">
        
      <TextForm heading ="Enter the text to Analyse below"/>
      </div>
    </>
  );
}

export default App;
