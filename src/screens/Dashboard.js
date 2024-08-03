import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../bottom/Home';
import Explore from '../bottom/Explore';
import Bookmark from '../bottom/Bookmark';
import Profile from '../bottom/Profile';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let iconColor = focused ? '#1877F2' : 'black'; // Change color based on focus

                    switch (route.name) {
                        case 'Home':
                            iconName = require('../assets/icons/home.png');
                            break;
                        case 'Explore':
                            iconName = require('../assets/icons/explore.png');
                            break;
                        case 'Bookmark':
                            iconName = require('../assets/icons/bookmark.png');
                            break;
                        case 'Profile':
                            iconName = require('../assets/icons/profile.png');
                            break;
                        default:
                            iconName = require('../assets/icons/home.png');
                            break;
                    }

                    return (
                        <Image 
                            source={iconName} 
                            style={{ height: 30, width: 30, tintColor: iconColor }} 
                        />
                    );
                },
                headerShown: false
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Explore' component={Explore} />
            <Tab.Screen name='Bookmark' component={Bookmark} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    );
};

export default Dashboard;
