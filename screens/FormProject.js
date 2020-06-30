import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function FormProject() {
    return (
        <>
            <View style={styles.container}>
                <Text>
                    this is the fucking form for create projects
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex:1,
        alignItems: 'center' 
    }
})