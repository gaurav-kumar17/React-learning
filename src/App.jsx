import './App.css';
import Myheading, { Myheading3, Myheading4 } from './Components/MyHeading';
import {Myheading2 as Meranaam} from './Components/MyHeading';

const App=()=> {
  return (
    <>
      
      <h2>Welcome Page 1</h2>
      <p>Hello ji</p>

      <Myheading/>
      <Meranaam/>
      <Myheading3/>
      <Myheading4/>
    </>
  );
}

export default App;
