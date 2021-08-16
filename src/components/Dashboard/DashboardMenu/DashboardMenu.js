import {
	faPenAlt,
	faPencilAlt,
	faPlus,
	faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
	return (
		<div>
			<ul className='list-unstyled'>
				<li className='my-4 py-1 w-100' style={{ background: '#2D524A' }}>
					<Link
						to='/admin/manage-product'
						className='text-decoration-none text-white d-block ps-4'
					>
						<FontAwesomeIcon icon={faThLarge} className='me-2' />
						<span> Manage Product</span>
					</Link>
				</li>
				<li className='my-4 py-1 w-100' style={{ background: '#2D524A' }}>
					<Link
						to='/add-product'
						className='text-decoration-none text-white d-block ps-4'
					>
						<FontAwesomeIcon icon={faPlus} className='me-2' />
						<span>Add Product</span>
					</Link>
				</li>
				<li className='my-4  py-1 w-100' style={{ background: '#2D524A' }}>
					<Link
						to='/edit-product'
						className='text-decoration-none text-white d-block ps-4'
					>
						<FontAwesomeIcon icon={faPencilAlt} className='me-2' />
						<span>Edit</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default DashboardMenu;
