import { View, Text, StyleSheet,Pressable } from'react-native';
import Subscribe from './components/Subscribe';
import Welcome from './components/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="Subscribe" component={Subscribe}/>
      </Stack.Navigator>
    </NavigationContainer>
      </>
  );
}


