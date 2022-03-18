import React, {Component} from "react";
import './App.css';
import PersonCard from "./components/PersonCard/PersonCard";

class Person {
  constructor(id, firstName, lastName, age, hairColor) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [new Person(1, "Jane", "Doe", 45, "Black"),
                new Person(2, "John", "Smith", 88, "Brown")]
    }
  }

  incAgeByOne = (personId) => {
    let personsUpdated = this.state.persons;
    for (let i = 0; i < personsUpdated.length; i++) {
      if (personsUpdated[i].id === personId) {
        personsUpdated[i].age += 1;
      }
    }
    this.setState({persons: personsUpdated});
  }

  render() {
    return (
      <div className="App">
        {this.state.persons.map((person, index) => <PersonCard key={'pc_' + index} person={person} incAgeByOne={this.incAgeByOne}/>)}
      </div>
    );
  }
}

export default App;
