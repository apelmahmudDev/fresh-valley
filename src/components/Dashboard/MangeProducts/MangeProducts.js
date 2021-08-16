import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MangeProducts = () => {
	return (
		<div className='mt-4'>
			<h4 className='text-dark ps-1'>Manage Product</h4>
			<table class='table table-borderless bg-white mt-3'>
				<thead>
					<tr className='rounded' style={{ background: '#F5F6FA' }}>
						<th scope='col'>Product Name</th>
						<th scope='col'>Wight</th>
						<th scope='col'>Price</th>
						<th scope='col'>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Moushum Bay Leaves</td>
						<td>200gm</td>
						<td>234</td>
						<td>
							<button className='btn-warning border-0 rounded me-2'>
								<FontAwesomeIcon icon={faPencilAlt} className='text-white' />
							</button>
							<button className='btn-danger border-0 rounded'>
								<FontAwesomeIcon icon={faTrashAlt} className='text-white' />
							</button>
						</td>
					</tr>
					<tr>
						<td>Moushum Bay Leaves</td>
						<td>200gm</td>
						<td>234</td>
						<td>
							<button className='btn-warning border-0 rounded me-2'>
								<FontAwesomeIcon icon={faPencilAlt} className='text-white' />
							</button>
							<button className='btn-danger border-0 rounded'>
								<FontAwesomeIcon icon={faTrashAlt} className='text-white' />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default MangeProducts;
