import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from 'src/styles/theme'
import { ThemeProvider } from 'styled-components'
import { 
  useFonts,
  Inter_400Regular, 
  Inter_500Medium
} from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium
  })

  if(!fontsLoaded) {
    return <Text>Carregando</Text>
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
