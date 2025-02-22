import { Box, Button, Grid, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions';

const ProductList = () => {
    const dispatch = useDispatch();
    const {products, loading, error}=useSelector(state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <Text>Loading .. </Text>;
    if(error) return <Text>Error: {error}</Text>;

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {products.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <image src={product.image} alt={product.title}/>
                <Box p={4}>
                    <Text fontWeight ="bold">
                        {product.title}
                    </Text>
                    <Text>${product.price}</Text>
                    <Button colorScheme="teal" onClick={() => dispatch(addToCart(product))}>
                        Add To Cart
                    </Button>
                </Box>
            </Box>
        ))}
    </Grid>
  );
};

export default ProductList;
