import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

// Navigation 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import Projects from './screens/Projects';
import FormProject from './screens/FormProject';
import CreateToDo from './screens/CreateToDo';
import ProjectDetail from './screens/ProjectDetail';

const Stack = createStackNavigator();


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
        >
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name='Create'
            component={CreateAccount}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name='Projects'
            component={Projects}
            options={{
              headerShown: false
            }}
          />


          <Stack.Screen
            name='Form'
            component={FormProject}
            options={{
              headerShown: false
            }}
          />

        
          <Stack.Screen
            name='CreateToDo'
            component={CreateToDo}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
