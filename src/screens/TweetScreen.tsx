import React, { useState, useCallback } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem } from 'native-base'

const TweetScreen = () => {
  const [text, setText] = useState<string>('')
  const [tweetList, setTweetList] = useState<string[]>([])

  const onTweet = useCallback((text: string) => {
    tweetList.push(text)
    setTweetList(tweetList)
    setText('')
  }, [])

  const deleteTweet = useCallback(() => {
    setTweetList([])
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.tweetButton} onPress={() => onTweet(text)}>
          <Text style={styles.tweetButtonText}>ツイートする</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} multiline={true} value={text} onChangeText={setText} />

      <Card>
        {tweetList.map((tweet) => {
          return <CardItem key={tweet}>{tweet}</CardItem>
        })}
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
  },
  actionBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
  },
  tweetButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    padding: 12,
    borderRadius: 50,
    backgroundColor: 'rgb(29, 161, 242)',
  },
  tweetButtonText: {
    color: '#ffffff',
  },
  input: {
    height: 400,
    backgroundColor: '#f8f8f8',
    padding: 12,
  },
  tweetList: {
    alignItems: 'center',
  },
})

export default TweetScreen
