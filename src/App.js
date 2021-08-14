import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<Header />
					<Products />
				</Route>
				<Route path='/orders'>
					<Orders />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
