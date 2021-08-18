import React, { useEffect, useState } from 'react';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import Product from '../Product/Product';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// fetch products
	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:5000/products')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log('error', error);
				setIsLoading(false);
			});
	}, []);

	// product add to database
	const buyProductHandler = (id) => {
		const buyingProduct = products.find((product) => product.id === id);
		buyingProduct.orderDate = new Date();
		fetchAddProduct(buyingProduct);
	};

	const fetchAddProduct = (product) => {
		fetch('http://localhost:5000/addProduct', {
			method: 'POST',
			body: JSON.stringify(product),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					console.log('Product added successfully');
				} else {
					console.log('Product already added');
				}
			});
	};

	return (
		<div>
			{isLoading ? (
				<LoadingSpin />
			) : (
				<div className='container my-5 mx-auto row row-cols-1 row-cols-md-3 g-4'>
					{products.map((product) => (
						<Product
							key={product.id}
							product={product}
							buyProductHandler={buyProductHandler}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Products;
