import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Exstyle from './android/app/src/Components/Style';


const TextInputError = () => {
    const [name, setname] = useState('');
    const [age, setage] = useState(0);
    const [email, setemail] = useState('');
    const [errorname, seterrorname] = useState(false);
    const [errorage, seterrorage] = useState(false);
    const [erroremail, seterroremail] = useState(false);

    const validateInputs = () => {
        let error = false;
        if (!name) {
            seterrorname(true);
            error = true;
        } else {
            seterrorname(false);
        }

        if (!age) {
            seterrorage(true);
            error = true;
        } else {
            seterrorage(false);
        }

        if (!email) {
            seterroremail(true);
            error = true;
        } else {
            seterroremail(false);
        }

        return !error;
    };

    const Savedata = async () => {
        if (!validateInputs()) {
            return;
        }

        console.warn(name);
        console.warn(email);
        console.warn(age);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key1: name, key2: age, email }),
        };

        const url = 'https://jsonplaceholder.typicode.com/posts';
        const data = await fetch(url, requestOptions);
        const mydata = await data.json();
        console.warn(mydata);
    };

    return (
        <View>
            <Text>Post Api</Text>
            <Button onPress={Savedata} title="Save data" />
            <TextInput
                style={Exstyle.mydata}
                value={name}
                onChangeText={(text) => setname(text)}
                placeholder="Enter name"
            />
            {errorname ? <Text style={style.errortext}>*pls fill the name</Text> : null}
            <TextInput
                style={Exstyle.mydata}
                value={age}
                onChangeText={(text) => setage(text)}
                placeholder="Enter your age"
            />
            {errorage ? <Text style={style.errortext}>*pls fill the age</Text> : null}
            <TextInput
                style={Exstyle.mydata}
                value={email}
                onChangeText={(text) => setemail(text)}
                placeholder="Enter your email"
            />
            {erroremail ? <Text style={style.errortext}>*pls fill the email</Text> : null}
        </View>
    );
};

const style = StyleSheet.create({
    errortext: {
        fontSize: 20,
        color: 'red',
        borderColor: 'red',
        width: 240,
        marginLeft: 5,
    },
});

export default TextInputError;
