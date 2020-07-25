import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// Icons
import { createIconSetFromFontello } from 'react-native-vector-icons';
import config from '../theme/fonts/config.json';
import { color } from 'react-native-reanimated';
const Icon = createIconSetFromFontello(config);

export default function WorkList(props) {
    return (
        <>
            <TouchableOpacity onPress={()=> props.navigation.navigate("CreateToDo",props.id)}>

            <View>
                        <Icon
                            name={'ok-circled'}
                            size={22}
                            style={[{ marginTop: 15, marginLeft: 260, position: 'absolute' }, props.status ? {color:'green'} : {color:'gray'}]}
                          
                        />
                </View>
                {console.log(props.status)}
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
        marginLeft:10,
        fontSize: 18,
        marginTop: 15
    },
    statusTrue:{
        color: 'green'
    }
})