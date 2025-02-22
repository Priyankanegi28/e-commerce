import { Badge, Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems =useSelector(state=> state.cart.items);

  return (
    <Flex bg ='teal.500' p={4} color="white">
        <Box>
            <Link to="/">
                <Button colorScheme="teal" variant="ghost">
                    Cart<Badge m1={1}>{cartItems.length}</Badge>
                </Button>
            </Link>
        </Box>
    </Flex>
    
  )
}

export default Navbar;

