import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContosAlunosScreen from './components/ContosAlunosScreen';
import ConteudosProfessoresScreen from './components/ConteudosProfessoresScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        style= {{paddingTop: 40}}
        screenOptions={{
          tabBarActiveTintColor: 'black',
          labelStyle: { fontSize: 12 },
          tabStyle: { flex: 1, justifyContent: 'center'},
          indicatorStyle: {
            marginHorizontal: '5%',
            width: '40%',
              
        }
        }}
      >
        <Tab.Screen name="Contos Estudantes" component={ ContosAlunosScreen } />
        <Tab.Screen name="Conteúdos Professores" component={ ConteudosProfessoresScreen } />
      </Tab.Navigator>
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
