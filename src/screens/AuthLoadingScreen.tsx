import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const AuthLoadingScreen = (): JSX.Element => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(
      () =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'Welcome' }],
        }),
      2000
    )
  }, [navigation])

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

AuthLoadingScreen.navigationOptions = () => ({ header: null })

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
})

export default AuthLoadingScreen
