import React from 'react'
import { View,Text, Button } from 'react-native'
const Product = ({item}) => {
    const {name,color,price}=item
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text>Product carts</Text>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{color}</Text>
        <Button title='add to cart'/>
       



    </View>
  )
}

export default Product