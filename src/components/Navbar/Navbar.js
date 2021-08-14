import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<Link className='navbar-brand text-dark text-uppercase fw-bold' to='/'>
					Fresh Valley
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav ms-auto'>
						<Link
							className='nav-link active text-dark mx-3'
							aria-current='page'
							to='/'
						>
							Home
						</Link>
						<Link className='nav-link text-dark mx-3' to='/orders'>
							Orders
						</Link>
						<Link className='nav-link text-dark mx-3' to='/admin'>
							Admin
						</Link>
						<Link className='nav-link text-dark mx-3' to='/deals'>
							Deals
						</Link>
						<Link
							className='nav-link text-white mx-3 bg-success px-3 py-2 rounded'
							to='/login'
						>
							Login
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
