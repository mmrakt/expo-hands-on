import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigators/AppNavigator'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App
