import ShowAll, { TestJX } from "./ShowAll";

import  AddComponent, { SayBye as BB, SayHi }   from "./AddComponent";
import Jobs from "./Jobs";
import Amol from "./JSXVariable";
import Calcultion from "./Welcome";
// import Akshay from "./Welcome";



function App() {
  return (
  <>
  <AddComponent></AddComponent>
  <BB></BB>
  <SayHi></SayHi> 
  <ShowAll></ShowAll>
  <Jobs></Jobs>
  <TestJX></TestJX>
  <Amol></Amol>
  {/* <Akshay></Akshay> */}

  <Calcultion n1="3" n2="2" op="+"></Calcultion>
  

  </>)
}

export default App;
