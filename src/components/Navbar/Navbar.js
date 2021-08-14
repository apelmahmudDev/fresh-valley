import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav class='navbar navbar-expand-lg navbar-light'>
				<Link class='navbar-brand text-dark text-uppercase fw-bold' to='/home'>
					Fresh Valley
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div class='navbar-nav ms-auto'>
						<Link
							class='nav-link active text-dark mx-3'
							aria-current='page'
							to='/home'
						>
							Home
						</Link>
						<Link class='nav-link text-dark mx-3' to='/orders'>
							Orders
						</Link>
						<Link class='nav-link text-dark mx-3' to='/admin'>
							Admin
						</Link>
						<Link class='nav-link text-dark mx-3' to='/deals'>
							Deals
						</Link>
						<Link
							class='nav-link text-white mx-3 bg-success px-3 py-2 rounded'
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
