import React from 'react'
import { Modal, TextInput } from 'react-native';
import { useState } from 'react';
import { View } from 'react-native';
const MyModal = ({ selected }) => {


    const [showmodal, setshowmodal] = useState(false)
    return (
        <View>
            {showmodal ?
                < Modal visible={true} transparent={true}>
                    <View style={style.centeredview}>
                
                        <View style={style.modalview}>
                            
                            <Text>Dummy text</Text>
                            <Button title='Close' onPress={() => setshowmodal(false)}></Button>
                        </View>
                    </View>

                </Modal> : null}
        </View>
    )
}

export default MyModal;