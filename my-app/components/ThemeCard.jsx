import { View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemeCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
    return (
    <View style={[{ backgroundColor: theme.uibackground }, style]} {...props}>

    </View>
  )
}

export default ThemeCard

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 5,
    }
})