import React from 'react';

const Search = () => {
	return (
		<div className='container'>
			<div className='row my-5 py-5 d-flex align-items-center justify-content-center'>
				<div className='col-md-6'>
					<div className='input-group'>
						<input
							type='text'
							className='form-control focus-none px-5 py-3'
							placeholder='Search products'
						/>
						<button
							className='btn focus-none btn-success border-0 px-5 py-3'
							type='button'
						>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
