import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='GameZone' />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
   defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#343a40', height: 60}
   } 
});

export default HomeStack;