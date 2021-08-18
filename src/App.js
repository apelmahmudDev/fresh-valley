import React, { createContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Products from './components/Products/Products';
import Search from './components/Search/Search';

// context
export const UserContext = createContext();

const App = () => {
	const [user, setUser] = useState({ isLoggedIn: false });
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Switch>
				<Route exact path='/'>
					<Header />
					<Search />
					<Products />
				</Route>
				<Route path='/orders'>
					<Orders />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<PrivateRoute path='/admin'>
					<Dashboard />
				</PrivateRoute>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</UserContext.Provider>
	);
};

export default App;
