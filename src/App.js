import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
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
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
