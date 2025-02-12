import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import React from 'react'
import DOMComponent from './DOMComponent'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={{ paddingTop: 100 }}>Hello, world!</Text>
      <WebView
        source={{ html: '<h1>This is a static HTML source!</h1>' }}
        style={{ flex: 1, backgroundColor: 'blue' }}
      />
      <DOMComponent
        name="Stephane"
        dom={{
          style: {
            flex: 1,
            backgroundColor: 'red',
          },
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}
