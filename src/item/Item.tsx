import Button from '@mui/material/Button'
import React, { FC } from 'react'
//types
import { CartItemType } from '../App'

//styles
import { Wrapper } from './Item.style'

type Props = {
    item: CartItemType
    handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
                <p> {item.description} </p>
                <h3>$ {item.price} </h3>
           
        </div>
        <Button onClick={() => { handleAddToCart(item) }}>Add To Cart</Button>
    </Wrapper>
)
export default Item;

