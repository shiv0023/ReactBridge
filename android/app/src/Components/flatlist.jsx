import React from 'react'

const flatlists = () => {
    const user = [
        {
          name: 'Shiv',
          id: 2
        }, {
          name: 'Rahul',
          id: '3',
        },
        {
          name: 'Ankit',
          id: '7'
    
        }, {
          name: 'Shiv',
          id: 2
        }, {
          name: 'Rahul',
          id: '3',
        },
        {
          name: 'Ankit',
          id: '7'
    
        }
      ]
  return (
    <View>
      <Text style={{ fontSize: 18, color: 'green', marginLeft: 4 }}>List With Flatlist component</Text>
      <FlatList  data={user}
        renderItem={({ item }) =>
          <Text style={styles.TextValue}>{item.name}</Text>}
          keyExtractor={item=>item.id} />

    </View>
  )
}
const styles=StyleSheet.create({
    TextValue:{
  color:'white',
  backgroundColor:'black',
  fontSize:20,
  borderWidth:2,margin:10,
  padding:10,
  
    }
  })
export default flatlists