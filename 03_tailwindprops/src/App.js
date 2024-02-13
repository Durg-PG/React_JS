//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
function App() {
  // let myObj = {
  //   username:"Durgesh",
  //   age:22
  //}
  let newArr =[1,2,3]
  return (
    <div className="App">
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1 className='bg-green-400 text-black p-4 rounded-xl m-4'>
      Tailwind Test</h1>
      <Card username ="prabhugaonkar" btnText ="Click Me!! " />
      <br></br>
      <Card username="Swamiii" btnText = "Visit Me "/>
    
    </div>
  );
}

export default App;
