import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const SettingScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
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

export default SettingScreen
