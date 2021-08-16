import React from 'react';
import { Link, Route } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import DashboardMenu from './DashboardMenu/DashboardMenu';
import MangeProducts from './MangeProducts/MangeProducts';

const Dashboard = () => {
	return (
		<div className='row d-flex' style={{ height: '100vh' }}>
			<div
				className='col-md-2 text-white p-0'
				style={{ backgroundColor: '#203D37' }}
			>
				<Link to='/' className='text-decoration-none text-white'>
					<h4 className='text-uppercase my-4 text-center'>Fresh Valley</h4>
					<DashboardMenu />
				</Link>
			</div>
			{/* Route */}
			<div className='col-md-10' style={{ background: '#F4FCFB' }}>
				<Route exact path='/admin'>
					<MangeProducts />
				</Route>
				<Route path='/admin/manage-product'>
					<MangeProducts />
				</Route>
				<Route path='/admin/add-product'>
					<AddProduct />
				</Route>
			</div>
		</div>
	);
};

export default Dashboard;
