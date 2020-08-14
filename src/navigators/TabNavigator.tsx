import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import SettingScreen from '../screens/SettingScreen'

const Stack = createStackNavigator()

const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={HomeScreen}
      options={{
        headerTitle: 'ホーム',
        headerBackTitleVisible: false,
        headerTransparent: true,
      }}
    />
  </Stack.Navigator>
)

const UserNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={UserScreen}
      options={{
        headerTitle: 'ユーザー',
        headerBackTitleVisible: false,
        headerTransparent: true,
      }}
    />
  </Stack.Navigator>
)

const SettingNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={SettingScreen}
      options={{
        headerTitle: '設定',
        headerBackTitleVisible: false,
        headerTransparent: true,
      }}
    />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const TabNavigator = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    tabBarOptions={{ showLabel: false }}
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/display-name, @typescript-eslint/no-unused-vars
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'HomeTab') {
          return <MaterialCommunityIcons name="home" size={24} />
        }
        if (route.name === 'UserTab') {
          return <MaterialCommunityIcons name="account" size={24} />
        }
        if (route.name === 'SettingTab') {
          return <MaterialCommunityIcons name="settings" size={24} />
        }
      },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeNavigator} />
    <Tab.Screen name="UserTab" component={UserNavigator} />
    <Tab.Screen name="SettingTab" component={SettingNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
