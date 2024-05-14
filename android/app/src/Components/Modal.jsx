import React, { useState } from 'react';
import { Button, StyleSheet, View, Modal, Text } from 'react-native';

const Modals = () => {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={styles.main}>
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <Text>code step by step</Text>
                        <Button title='Close' onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonView}>
                <Button title='Open Modal' onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonView: {
        marginTop: 20,
    },
});

export default Modals;
