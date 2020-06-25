import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';


import config from '../theme/fonts/config.json';

const Icon = createIconSetFromFontello(config);


export default function Login() {
    return (
        <>
            <View style={styles.container}>
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
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'white'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    },
    linearGradient: {
        paddingLeft: 16,
        paddingRight: 16,
        elevation: 1,
        borderRadius: 60,
    },
    gradientContent:{
        flexDirection:"row"
    },
    iconStyle:{
        marginTop:15
    }
})