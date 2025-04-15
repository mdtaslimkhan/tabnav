import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './screen/dashboard';
import Home from './screen/home';
import Products from './screen/products';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  const Tabstack = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tabstack.Navigator screenOptions={{
        headerStyle:{backgroundColor: '#ff00ff'},
        headerTintColor: "#fff",
        tabBarActiveTintColor: '#ff00ff',
        headerTitleAlign: 'center'
      }}>
        <Tabstack.Screen options={{
          tabBarIcon: ({color, size}) => <AntDesign name={'windowso'} size={size} color={color} />
        }} name='Dashboard' component={Dashboard} />
        <Tabstack.Screen options={{
          tabBarIcon: ({color, size}) => <AntDesign name={'chrome'} size={size} color={color} />
        }} name='Home' component={Home} />
        <Tabstack.Screen options={{
          tabBarIcon: ({color, size}) => <AntDesign name={'youtube'} size={size} color={color} />
        }} name='Products' component={Products} />
      </Tabstack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
