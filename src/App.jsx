import './App.css';
import Aisehi, {Myheading2 as Meranaam, Myheading3, Myheading4 } from './Components/MyHeading';
// import {} from './Components/MyHeading';

const App=()=> {
  return (
    <>
    

      <Aisehi name="Gaurav Kumar" text="Nice one!"/>
      <Meranaam/>
      <Myheading3
        name="My name is Gaurav kumar."
      />
      <Myheading4/>
    </>
  );
}

export default App;
