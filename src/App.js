import React, {useState} from 'react';
import Header from './components/Header/Header';
import Promo from "./components/Promo/Promo";
import Main from "./components/Main/Main";
import {Container} from "react-bootstrap";

function App() {
  const [people, setPeople] = useState(
    [
      {name: "Dmitrii", surname: "Ivanov", age: 20, hobby: "swimming", id: "jjww232"},
      {name: "Maksim", surname: "Grinchev", age: 30, hobby: "swimming", id: "2jkj2"},
      {name: "Andrey", surname: "Volkov", age: 25, hobby: "swimming", id: "23sader"},
      {name: "Jade", surname: "Green", age: 40, hobby: "swimming", id: "xckjrk3"},
      {name: "Raymond", surname: "Lee", age: 53, hobby: "swimming", id: "23sddjkm"},
      {name: "Garfield", surname: "Simple", age: 23, hobby: "swimming", id: '23skmvlm2m'},
      {name: "Ray", surname: "Rabbit", age: 27, hobby: "swimming", id: "xcc2klk"},
      {name: "Oliver", surname: "Reed", age: 21, hobby: "swimming", id: "mnnj3ni"},
      {name: "John", surname: "Doe", age: 32, hobby: "jumping", id: "pp-00kk0"}
    ]);

  return (
    <div className="App">
      <Container>
        <Header/>
        <Promo/>
        <Main people={people}/>
      </Container>
    </div>
  );
}

export default App;
