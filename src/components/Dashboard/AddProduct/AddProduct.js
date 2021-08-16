import React from 'react';

const AddProduct = () => {
	return (
		<div>
			<h4 className='text-dark ps-1 mt-4'>Add Product</h4>
			<div className='container bg-white rounded p-4'>
				<div className='mt-4 row'>
					<div className='col-md-6'>
						<div className='mb-4'>
							<label
								htmlFor='exampleFormControlInput1'
								className='form-label fw-bold'
							>
								Product Name
							</label>
							<input
								type='text'
								className='form-control'
								id='exampleFormControlInput1'
								placeholder='Enter name'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='exampleFormControlInput1'
								className='form-label fw-bold'
							>
								Add Price
							</label>
							<input
								type='text'
								className='form-control'
								id='exampleFormControlInput1'
								placeholder='Enter Price'
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='mb-4'>
							<label
								htmlFor='exampleFormControlInput1'
								className='form-label fw-bold'
							>
								Quantity
							</label>
							<input
								type='text'
								className='form-control'
								id='exampleFormControlInput1'
								placeholder='Enter quantity'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='exampleFormControlInput1'
								className='form-label fw-bold'
							>
								Add Photo
							</label>
							<input
								type='file'
								className='form-control'
								id='exampleFormControlInput1'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
