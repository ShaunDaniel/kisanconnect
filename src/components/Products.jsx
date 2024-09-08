import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const Products = () => {
    const products = 
    [
      {
        "id": 1,
        "image": "/basmati.bmp",
        "name": "Basmati Rice",
        "category": "Cereals",
        "grade": "A",
        "price": 50,
        "negotiable": true,
        "quantity": "1000 kg",
        "location": "Village, District, State",
        "organic": true,
        "harvestDate": "2024-01-01",
        "shelfLife": 30,
        "certifications": ["FSSAI", "Organic India"],
        "farmerName": "Aatmaram Bhide",
        "rating": 4
      },
      {
        "id": 2,
        "image": "mango.bmp",
        "name": "Alphonso Mangoes",
        "category": "Fruits",
        "grade": "A",
        "price": 200,
        "negotiable": false,
        "quantity": "500 kg",
        "location": "Village, District, State",
        "organic": false,
        "harvestDate": "2024-02-15",
        "shelfLife": 15,
        "certifications": ["APEDA"],
        "farmerName": "Ganesh Gaitonde",
        "rating": 5
      }
    ]

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