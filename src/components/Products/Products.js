import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
	const [products, setProducts] = useState([]);

	// fetch products
	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const response = await fetch('http://localhost:5000/products');
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.log('error', error);
			}
		};
		fetchAllProducts();
	}, []);

	return (
		<div className='container my-5 mx-auto row row-cols-1 row-cols-md-3 g-4'>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
};

export default Products;
