import React, { Component }from 'react';
import './App.css';
import Searchbox from './container/Searchbox';
import Cardlist from './container/Cardlist';
import Scroll from './container/Scroll';



 

class App extends Component {
  constructor() {
    super()
    this.state = {
               robots: [],
               searchfield: ''
                 }
              }

   componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
 }

  onSearchChange =(event) =>{
    this.setState({ searchfield:event.target.value })
    
         //console.log(s);
         
         

  }
  render() {
    const filteredRobots= this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
    <div className='tc'>
     <h1>Robo friends</h1>
     <Searchbox searchChange={this.onSearchChange} />
     <Scroll>
     <Cardlist robots={filteredRobots} />
     </Scroll>
    </div>
  );
    }
  
}

export default App;
