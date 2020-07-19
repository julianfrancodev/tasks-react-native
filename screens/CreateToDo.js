import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useMutation, gql, useQuery } from '@apollo/client';
import WorkList from '../components/WorkList';

const CREATE_TODO = gql`
mutation createToDo($input:ToDoInput!){
    createToDo(input:$input){
      id
      name
      creator
      createdAt
    }
  }
`;


const GET_ALL_TODOS = gql`
query getAllToDo{
    getAllToDo{
      id
      name
      creator
      project
      status
    }
  }
`;


export default function CreateToDo(props) {
    const { params } = props.route;
    console.log(params);
    const [work, setwork] = useState('');

    const [createToDo] = useMutation(CREATE_TODO);

    const { data, loading, error } = useQuery(GET_ALL_TODOS);

    // const [createToDo] = useMutation(CREATE_TODO,{
    //     update(cache, {data:{createToDo}}){
    //         const {getAllToDo} = cache.readQuery({query: GET_ALL_TODOS});
    //         cache.writeFragment({
    //             query:GET_ALL_TODOS,
    //             data:{getAllToDo: getAllToDo.concat([createToDo])}
    //         })
    //     }
    // });

    const handleTodo = async () => {

        if (work.trim() === '') {

            Alert.alert(
                "Warning",
                "ToDo Name is required",
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );

            return;
        }


        try {
            const { data } = await createToDo({
                variables: {
                    input: {
                        name: work,
                        project: params,
                        status: false
                    }
                }
            });

            console.log(data);

            props.navigation.navigate('Projects');

            Alert.alert(
                "Success",
                "Project Created!   ",
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );
        } catch (error) {
            Alert.alert(
                "Warning",
                `${error.message}`,
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );
        }

    }

    return (
        <>
            <View style={styles.container}>

                <View style={styles.formContainer}>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Project Work"
                            value={work}
                            onChangeText={(text) => setwork(text)}
                        />

                    </View>


                </View>
                <TouchableOpacity onPress={() => handleTodo()}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9ebd13', '#008552']}>
                        <View style={styles.gradientContent}>
                            <Text style={styles.buttonText}>
                                Create Work
                             </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

                {loading ? (<Text>Loading</Text>) : (
                    <FlatList
                        data={data.getAllToDo}
                        renderItem={({ item }) => <WorkList {...props} name={item.name} id={item.id} />}
                        keyExtractor={item => item.id}
                    />
                )}

                {console.log(data)}

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
        marginBottom: 5,
        marginTop: 40
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