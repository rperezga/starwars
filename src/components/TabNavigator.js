import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import PlanetView from '../containers/Planet';
import PeopleView from '../containers/People';

const TabNavigator = createBottomTabNavigator({
    Planet: {
        screen: PlanetView,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return focused ? <Icon name='ios-jet' size={25} color='#4C89FC' /> : <Icon name='ios-jet' size={25} color='#78797A' />
            }
        }
    },
    People: {
        screen: PeopleView,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return focused ? <Icon name='ios-contacts' size={25} color='#4C89FC' /> : <Icon name='ios-contacts' size={25} color='#78797A' />
            }
        }
    }

},
    {
        tabBarOptions: {
            showLabel: true,
            style: {
                elevation: 5,
                borderTopWidth: 2,
                top: 1
            },
        },
    }
);

export default createAppContainer(TabNavigator);