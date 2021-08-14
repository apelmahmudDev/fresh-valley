import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/'>
					<Header />
					<Products />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
