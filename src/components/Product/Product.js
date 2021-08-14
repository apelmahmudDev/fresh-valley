import React from 'react';

const Product = (props) => {
	const { name, price, img } = props.product;

	return (
		<div className='col'>
			<div className='card h-100 shadow border-0 py-4'>
				<img
					src={img}
					className='card-img-top h-75 w-50 d-block mx-auto text-dark'
					alt={name}
				/>
				<div className='card-body'>
					<h5 className='card-title text-dark py-2 fw-bold'>{name}</h5>
					<div className='d-flex align-items-center justify-content-between'>
						<h4 className='text-success fw-bold'>
							<span className='fw-bolder me-1'> &#2547;</span>
							{price}
						</h4>
						<button className='btn-success px-2 py-1 text-white border-0  rounded'>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
