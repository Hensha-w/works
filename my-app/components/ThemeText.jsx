import { Text, useColorScheme } from 'react-native'
import React from 'react'
import { color } from '../constants/Colors'

const ThemeText = ({style, title = false, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = color[colorScheme] ?? color.light;
  return (
   <Text style={[{color: theme.textColor }, style]} {...props} />
  )
}

export default ThemeText