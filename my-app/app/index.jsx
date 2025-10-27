import { StyleSheet} from 'react-native'
import favicon from '../assets/favicon.png'
import { Link } from 'expo-router'
import React from 'react'
import ThemeView from '../components/ThemeView'
import Spacer from '../components/spacer'
import ThemeText from '../components/ThemeText'
import ThemeLogo from '../components/ThemeLogo'

const index = () => {
  return (
    <ThemeView style={styles.container}>
        <ThemeLogo />
        <Spacer height={20} />

      <ThemeText style={styles.title} title={true}>First React native app</ThemeText>
      
      <Spacer height={10} />
      <ThemeText>This is going to marvel me</ThemeText>
      <Spacer height={20} />

      <Link href="/login" style={styles.link}>
      <ThemeText>Login page</ThemeText>
      </Link>
      <Link href="/register" style={styles.link}>
      <ThemeText>Register page</ThemeText>
      </Link>
    </ThemeView>
  )
}


export default index
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 20,
        backgroundColor: 'pink'
    },
     link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})