import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let firstValue : String = 'Many';
  // let firstValue : boolean = true;
  // let firstValue :Array <string>= ['34','1','3'];
  //tuple
  // let aTuple:[string,number] = ['many',3];

  //enums
  // enum Codes {first=1 ,second=3};
  // let firstName : any = 3;


  //void

  const warning = ():void =>{
    console.log('worning');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/*<p>The Value  {firstName} is {typeof firstName} type!</p>*/}
      </header>
    </div>
  );
}

export default App;
