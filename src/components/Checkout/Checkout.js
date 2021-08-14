import React from 'react';

const Checkout = () => {
	return (
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
						<tr>
							<td>Lorem ipsum dolor sit</td>
							<td className='ps-4'>1</td>
							<td className='text-end fw-bold'>
								<span className='fw-bolder me-1'> &#2547;</span>
								<span>345</span>
							</td>
						</tr>
						<tr className='border-top'>
							<td colSpan='2' className=' fw-bold'>
								Total
							</td>
							<td className='text-end fw-bold'>
								<span className='fw-bolder me-1'> &#2547;</span>
								<span>345</span>
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
	);
};

export default Checkout;
