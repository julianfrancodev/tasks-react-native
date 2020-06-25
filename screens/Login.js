import React from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView,Image } from 'react-native';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';


import config from '../theme/fonts/config.json';

const Icon = createIconSetFromFontello(config);


export default function Login(props) {
    return (
        <>
            <KeyboardAvoidingView style={styles.container}>

                <View style={styles.headerContainer}>
                    <Image
                        style={{width: 200, height:200,borderRadius:100}}
                        source={require('../assets/img/illustration-art-3.jpg')}
                    />
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Email"
                        />
                        <Icon
                            name={'user-outline'}
                            size={22}
                            style={{ marginTop: 15, marginLeft: 190 }}
                            color={'#9ebd13'}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Password"
                        />

                        <Icon
                            name={'lock'}
                            size={22}
                            style={{ marginTop: 15, marginLeft: 165 }}
                            color={'#008552'}
                        />
                    </View>
                </View>

                <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9ebd13', '#008552']}>
                    <View style={styles.gradientContent}>
                        <Text style={styles.buttonText}>
                            Sign in
                        </Text>

                        <Icon
                            name={'right'}
                            size={16}
                            color={'#fff'}
                            style={styles.iconStyle}
                        />
                    </View>
                </LinearGradient>

                <View style={styles.footerContainer}>
                    <Text style={{ fontWeight: 'bold' }}>
                        You don't have an account
                        <Text onPress={()=> props.navigation.navigate('Create')} style={{ fontWeight: 'bold', color: '#9ebd13' }}> Sign Up </Text>
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