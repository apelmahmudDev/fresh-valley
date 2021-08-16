import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LoadingSpin = () => {
	return (
		<div
			className='d-flex align-items-center justify-content-center'
			style={{ height: '100vh' }}
		>
			<FontAwesomeIcon
				icon={faSpinner}
				spin
				size='2x'
				className='text-success'
			/>
		</div>
	);
};

export default LoadingSpin;
