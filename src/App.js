import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

// Logo image
import logo from './logo.svg';

// Components
import AddContainer from './containers/Add';
import ListContainer from './containers/List';

// Styles
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<img src={ logo } className="App-logo" alt="logo" />
				<Container className="App-container">
					<Grid centered doubling columns={ 2 }>
						<Grid.Column>
							<AddContainer />
							<ListContainer />
						</Grid.Column>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default App;
