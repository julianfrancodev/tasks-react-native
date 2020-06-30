import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Icons
import { createIconSetFromFontello } from 'react-native-vector-icons';
import config from '../theme/fonts/config.json';
const Icon = createIconSetFromFontello(config);

// Graphql

import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
mutation createUser($input:UserInput!){
    createUser(input:$input){
      name
      email
      createdAt
    }
  }
`;


export default function CreateAccount(props) {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [createUser] = useMutation(CREATE_USER);

    const createAccount = async () => {

        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            Alert.alert(
                "Warning",
                "All Fields Are Required!",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { text: "OK" }
                ],
                { cancelable: false }
            );
            return;
        }

        try {
            const { data } = await createUser({
                variables: {
                    input: {
                        name,
                        email,
                        password
                    }
                }
            });

           props.navigation.navigate('Login')
        } catch (error) {
            console.log(error.message);
            Alert.alert(
                "Error Creating Account",
                `${error.message}`,
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { text: "OK" }
                ],
                { cancelable: false }
            );
        }
    }

    return (
        <>
            <KeyboardAvoidingView style={styles.container}>

                <View style={styles.headerContainer}>
                    <Image
                        style={{ width: 200, height: 200, borderRadius: 100 }}
                        source={require('../assets/img/illustration-art-3.jpg')}
                    />
                </View>

                <View style={styles.formContainer}>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Name"
                            value={name}
                            onChangeText={(text) => setname(text)}
                        />
                        <Icon
                            name={'user-outline'}
                            size={22}
                            style={{ marginTop: 15,marginLeft: 260,position: 'absolute' }}
                            color={'#008552'}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setemail(text)}
                        />
                        <Icon
                            name={'mail'}
                            size={22}
                            style={{ marginTop: 15,marginLeft: 260,position: 'absolute' }}
                            color={'#9ebd13'}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Password"
                            value={password}
                            onChangeText={(text) => setpassword(text)}
                        />

                        <Icon
                            name={'lock'}
                            size={21}
                            style={{ marginTop: 15, marginLeft: 260,position: 'absolute' }}
                            color={'#008552'}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => createAccount()}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9ebd13', '#008552']}>
                        <View style={styles.gradientContent}>
                            <Text style={styles.buttonText}>
                                Sign Up
                        </Text>

                            <Icon
                                name={'right'}
                                size={16}
                                color={'#fff'}
                                style={styles.iconStyle}
                            />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text style={{ fontWeight: 'bold' }}>
                        You have an account
                            <Text onPress={() => props.navigation.navigate('Login')} style={{ fontWeight: 'bold', color: '#9ebd13' }}> Sign In </Text>
                    </Text>
                </View>

            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
    },
    linearGradient: {
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 60,
        shadowColor: '#9ebd13',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    gradientContent: {
        flexDirection: "row"
    },
    iconStyle: {
        marginTop: 15
    },
    formContainer: {
        marginBottom: 10
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#ffffff',
        paddingLeft: 17,
        paddingRight: 17,
        borderRadius: 60,

    },
    inputContainer: {
        height: 50,
        marginBottom: 20,
        width: 300,
        borderRadius: 60,
        flexDirection: "row",
        backgroundColor: '#ffffff',
        shadowColor: '#9ebd13',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    footerContainer: {
        marginTop: 30
    },
    headerContainer: {
        marginBottom: 40,
        shadowColor: '#9ebd13',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    }
})