import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
// import HelloScreen from '../screens/HelloScreen'
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'

const Stack = createStackNavigator()

const HomeStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: 'ホーム',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const UserStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="User"
      component={UserScreen}
      options={{
        headerTitle: 'ユーザー',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    tabBarOptions={{ showLabel: false }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'HomeTab') {
          return <MaterialCommunityIcons name="home" size={24} />
        }
        if (route.name === 'UserTab') {
          return <MaterialCommunityIcons name="account" size={24} />
        }
      },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
    <Tab.Screen name="UserTab" component={UserStackNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
