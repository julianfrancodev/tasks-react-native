import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Image, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useMutation, gql } from '@apollo/client';

const CREATE_PROJECT = gql`
mutation createProject($input:ProjectInput!){
    createProject(input:$input){
      id
      name
      createdAt
    }
  }
`;


const GET_ALL_PROJECTS = gql`
query getAllProjects{
    getAllProjects{
      id
      name
      createdAt
    }
  }
`;


export default function FormProject(props) {

    const [project, setproject] = useState('');

    const [createProject] = useMutation(CREATE_PROJECT,{
        update(cache, {data:{createProject}}){
            const {getAllProjects} = cache.readQuery({query: GET_ALL_PROJECTS});
            cache.writeQuery({
                query:GET_ALL_PROJECTS,
                data:{getAllProjects: getAllProjects.concat([createProject])}
            })
        }
    });

    const handleProject = async () => {

        if (project.trim() === '') {

            Alert.alert(
                "Warning",
                "Project Name is required",
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );

            return;
        }


        try {
            const { data } = await createProject({
                variables: {
                    input: {
                        name: project
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
            <KeyboardAvoidingView style={styles.container}>

                <View style={styles.headerContainer}>
                    <Image
                        style={{ width: 200, height: 200, borderRadius: 100 }}
                        source={require('../assets/img/projectiamge.jpg')}
                    />
                </View>


                <View style={styles.formContainer}>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Project Name"
                            value={project}
                            onChangeText={(text) => setproject(text)}
                        />

                    </View>


                </View>
                <TouchableOpacity onPress={() => handleProject()}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9ebd13', '#008552']}>
                        <View style={styles.gradientContent}>
                            <Text style={styles.buttonText}>
                                Create Project
                             </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

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