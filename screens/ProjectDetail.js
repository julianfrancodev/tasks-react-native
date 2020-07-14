import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProjectDetail(props) {
    return (
        <>
            <TouchableOpacity onPress={()=> props.navigation.navigate("CreateToDo",props.id)}>
                <View style={styles.cardContainer}>
                    <Text style={styles.textStyles}>
                        {props.name}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 50,
        shadowColor: '#9ebd13',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderColor: '#9ebd13',
        width: 350,
        height: 60,
        marginBottom: 20
    },
    textStyles: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15
    }
})
