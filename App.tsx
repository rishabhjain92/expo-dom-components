import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
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
        style={{ flex: 1, backgroundColor: 'red' }}
      />
      <DOMComponent
        name="Stephane"
        dom={{
          webviewDebuggingEnabled: true,
          allowFileAccess: true,
          allowUniversalAccessFromFileURLs: true,
          originWhitelist: ['*'],
          style: {
            flex: 1,
            backgroundColor: 'purple',
          },
        }}
      />
      <ChartComponent
        name="Stephane"
        dom={{
          webviewDebuggingEnabled: true,
          allowFileAccess: true,
          allowUniversalAccessFromFileURLs: true,
          originWhitelist: ['*'],
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
