import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// const navigation = useNavigation()
const UserScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.message}>UserScreen</Text>
      {/* <Button title="登録情報変更" onPress={() => navigation.navigate('EditProfile')} /> */}
    </View>
  )
}

// function EditProfileScreen() {
//   return (
//     <View style={styles.root}>
//       <Text style={styles.message}>Edit Profile</Text>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  message: {
    textAlign: 'center',
  },
})

export default UserScreen
