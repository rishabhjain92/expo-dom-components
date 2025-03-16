import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import React from 'react'
import DOMComponent from './DOMComponent'
import ChartComponent from './ChartComponent'

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
        style={{ backgroundColor: 'pink' }}
      />
      <DOMComponent
        name="Stephane"
        dom={{
          style: {
            flex: 1,
            backgroundColor: 'purple',
          },
        }}
      />
      <ChartComponent
        name="Stephane"
        dom={{
          style: {
            flex: 1,
            backgroundColor: 'purple',
          },
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}
