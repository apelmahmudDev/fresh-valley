import React, { useEffect, useState } from 'react';
import allProducts from '../../fakeData/products.json';
import Product from '../Product/Product';

const Products = () => {
	const [products, setProducts] = useState([]);

	// fetch products
	useEffect(() => {
		const valleyProducts = allProducts;
		setProducts(valleyProducts.products);
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
