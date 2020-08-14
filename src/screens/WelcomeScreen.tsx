import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, Button } from 'react-native'

const WelcomeScreen = (): JSX.Element => {
  const navigation = useNavigation()

  const goToApp = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'App' }],
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Button title="go to app" onPress={goToApp} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
})

export default WelcomeScreen
