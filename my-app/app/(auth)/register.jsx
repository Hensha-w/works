import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemeView'
import ThemedText from '../../components/ThemeText'
import Spacer from '../../components/spacer'

const Register = () => {
  return (
    <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText title={true} style={styles.title}>
            Login in Your Account
        </ThemedText>
       
       <Spacer height={100} />
       <Link href='/register'>
            <ThemedText style={{textAlign: 'center'}}>
                Register instead
            </ThemedText>
       </Link>

    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
    link: {
        marginTop: 16,
    },
})