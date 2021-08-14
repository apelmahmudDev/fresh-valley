import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/'>
					<Header />
					<h1>Fresh Valley</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default App;
