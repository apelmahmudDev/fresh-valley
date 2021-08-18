import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import random from 'random';
import React, { useEffect, useState } from 'react';
import LoadingSpin from '../../LoadingSpin/LoadingSpin';

const MangeProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// fetching cart products from db
	useEffect(() => {
		setIsLoading(true);
		fetch('https://afternoon-shore-15602.herokuapp.com/cartProducts')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('error', error);
				setIsLoading(false);
			});
	}, []);

	// delete Product Handler
	const deleteProductHandler = (id) => {
		fetch(`https://afternoon-shore-15602.herokuapp.com/delete/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					window.location.reload();
				}
			});
	};

	return (
		<div className='mt-4'>
			<h4 className='text-dark ps-1'>Manage Product</h4>
			{isLoading ? (
				<LoadingSpin />
			) : (
				<table className='table table-borderless bg-white mt-3 table-responsive'>
					<thead>
						<tr className='rounded' style={{ background: '#F5F6FA' }}>
							<th scope='col'>Product Name</th>
							<th scope='col'>Wight</th>
							<th scope='col'>Price</th>
							<th scope='col'>Action</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={random.int(0, 1000)}>
								<td>{product.name}</td>
								<td>200gm</td>
								<td>{product.price}</td>
								<td>
									<button className='btn-warning border-0 rounded me-2 md-mb-0 mb-2'>
										<FontAwesomeIcon
											icon={faPencilAlt}
											className='text-white'
										/>
									</button>
									<button
										onClick={() => deleteProductHandler(product._id)}
										className='btn-danger border-0 rounded'
									>
										<FontAwesomeIcon icon={faTrashAlt} className='text-white' />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default MangeProducts;
