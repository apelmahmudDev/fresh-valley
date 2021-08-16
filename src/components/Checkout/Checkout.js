import React, { useState, useEffect } from 'react';
import random from 'random';
import LoadingSpin from '../LoadingSpin/LoadingSpin';

const Checkout = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// fetching cart products from db
	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:5000/cartProducts')
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

	// total cart product price
	let totalPrice = 0;
	if (products.length > 0) {
		totalPrice = products.reduce((sum, product) => sum + product.price, 0);
	}

	return (
		<div>
			{isLoading ? (
				<LoadingSpin />
			) : (
				<div className='container'>
					<h2 className='text-dark my-4'>Checkout</h2>
					<div className='px-3 shadow-sm rounded'>
						<table className='table table-borderless table-responsive'>
							<thead>
								<tr className='border-bottom'>
									<th scope='col' className='text-secondary'>
										Description
									</th>
									<th scope='col' className='text-secondary'>
										Quantity
									</th>
									<th scope='col' className='text-end text-secondary'>
										Price
									</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product) => (
									<tr key={random.int(0, 100)}>
										<td>{product.name}</td>
										<td className='ps-4'>{product.quantity}</td>
										<td className='text-end fw-bold'>
											<span className='fw-bolder me-1'> &#2547;</span>
											<span>{product.price}</span>
										</td>
									</tr>
								))}
								<tr className='border-top'>
									<td colSpan='2' className=' fw-bold'>
										Total
									</td>
									<td className='text-end fw-bold'>
										<span className='fw-bolder me-1'> &#2547;</span>
										<span>{totalPrice}</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='text-end pt-2'>
						<button className='text-white btn-success border-0 px-4 py-2 rounded'>
							Checkout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Checkout;
