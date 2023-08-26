import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';


// const state = {
// 	robots: robots,
// 	searchfield: ''
// }

// In order to use state, we need to go back to our original App.
// We create a class .. we do that by saying Class... and It always has a render function
// that needs to return something ..
// How can we add state ? we use constructor ...

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			robots: [],
			searchfield: ''	
		}
	}


componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots: users}));	
}


// we just make up a function name and everytime input changes, we get an event
// keep in mind. with anything that comes with react like constructor or render
// are prebuilt in react. but anytime you make your own methods on a component 
// use this syntax. "onSearchChange = (event) => {" instead of "onSearchChange(event) {"
// Another rule with react is to do "this.setState()". method that comes with react

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		// const filteredRobots = this.state.robots.filter(robots => {
		// 	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })
	}

	// you have to remember .. within event, you always have event.target.value ..
	// We can pass this to down there now ... 
	// filteredRobots can be now used down there instead of this.state.robots


render () {

	const {robots, searchfield} = this.state;

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return robots.length === 0 ? 
			<h1>Loading</h1> :
		 (
				<div className= 'tc'>
					<h1 className= 'f1'> RoboFriends </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
}

export default App;

// STATE - an object that describes the application. it is able to change.
// props - things that come out of a state

// State >> Props.
// Parent >> Child
// Parent can change it but child can only receive not change
// State generally lives in the parent component