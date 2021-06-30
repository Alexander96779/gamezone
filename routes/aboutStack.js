import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='About GameZone'/>
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
   defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#343a40', height: 60}
   } 
});

export default AboutStack