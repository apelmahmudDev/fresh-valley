import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
	const { user } = useContext(UserContext);
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light my-4'>
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
						{/* user info */}
						{user.isLoggedIn ? (
							<div style={{ width: '50px' }}>
								<img
									style={{ cursor: 'pointer' }}
									className='d-block h-100 img-fluid rounded-circle shadow-sm border border-2'
									src={user.isLoggedIn && user.photo}
									alt='user'
									title={user.name}
								/>
							</div>
						) : (
							<Link
								className='nav-link text-white mx-3 bg-success px-3 py-2 rounded'
								to='/login'
							>
								Login
							</Link>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
