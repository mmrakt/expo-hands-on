import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const UserScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
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

export default UserScreen
