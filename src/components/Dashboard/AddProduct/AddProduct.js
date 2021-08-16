import React from 'react';

const AddProduct = () => {
	return (
		<div>
			<h4 className='text-dark ps-1'>Add Product</h4>
			<div className='container'>
				<div className='mt-4 row'>
					<div class='col-md-6'>
						<div className='mb-4'>
							<label for='exampleFormControlInput1' class='form-label fw-bold'>
								Product Name
							</label>
							<input
								type='text'
								class='form-control'
								id='exampleFormControlInput1'
								placeholder='Enter name'
							/>
						</div>
						<div className='mb-4'>
							<label for='exampleFormControlInput1' class='form-label fw-bold'>
								Add Price
							</label>
							<input
								type='text'
								class='form-control'
								id='exampleFormControlInput1'
								placeholder='Enter Price'
							/>
						</div>
					</div>
					<div class='col-md-6'>
						<div className='mb-4'>
							<label for='exampleFormControlInput1' class='form-label fw-bold'>
								Quantity
							</label>
							<input
								type='text'
								class='form-control'
								id='exampleFormControlInput1'
								placeholder='Enter quantity'
							/>
						</div>
						<div className='mb-4'>
							<label for='exampleFormControlInput1' class='form-label fw-bold'>
								Add Photo
							</label>
							<input
								type='file'
								class='form-control'
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
