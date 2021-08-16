import React from 'react';
import { Link } from 'react-router-dom';
import DashboardMenu from '../DashboardMenu/DashboardMenu';

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
			<div className='col-md-10'>Right column</div>
		</div>
	);
};

export default Dashboard;
