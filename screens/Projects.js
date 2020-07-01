import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gql, useQuery} from '@apollo/client';


export default function Projects(props) {


    const handleCreateProject = () => {
        props.navigation.navigate('Form');
    }


    return (
        <>
            <View style={styles.container}>

                <View style={styles.btnSecStyle}>
                    <TouchableOpacity onPress={() => handleCreateProject()}>
                        <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9ebd13', '#008552']}>
                            <View style={styles.gradientContent}>
                                <Text style={styles.buttonText}>
                                    Create Project
                        </Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleStyle}>
                    <Text style={styles.textStyle}>
                       Selecciona un proyecto
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
    },
    btnSecStyle: {
        marginTop: 30

    },
    titleStyle: {
        marginTop: 20
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})
