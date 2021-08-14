import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div
			className='d-flex justify-content-center align-items-center'
			style={{ height: '100vh' }}
		>
			<div className='text-center'>
				<h2 className='text-danger mb-3'>Page not found!</h2>
				<Link to='/'>
					<button className='btn btn-success text-white'>
						<FontAwesomeIcon icon={faArrowLeft} className='me-2' />
						<span>Go back</span>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
