import React, { useEffect,useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import productService from '../services/productService';
const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAllProducts()
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.log(error);
            })},[]);


    return (
        <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} gap={4} p={10}>
            {products.map((product) => (
                <GridItem key={product.id}>
                    <ProductCard product={product} />
                </GridItem>
            ))}
        </Grid>
    );
};

export default Products;