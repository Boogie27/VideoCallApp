import React, { useState, useEffect } from 'react'
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
} from 'react-native'
import {Voximplant} from 'react-native-voximplant'
import {useNavigation} from '@react-navigation/core'
import { APP_NAME, ACCOUNT_NAME } from '../components/Constant'




export default function LoginScreen() {
    const navigation = useNavigation()
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    
   
    const client = Voximplant.getInstance();

    const connect_voximplant = () => {
       const connection = async () => {
           const state = await client.getClientState()
           if (state === Voximplant.ClientState.DISCONNECTED){
                await client.connect()
            }else if(state === Voximplant.ClientState.LOGGED_IN){
                redirect()
            }
       }
       connection()
    }

    useEffect(() => {
        connect_voximplant()
    }, [])


    const login = async () => {
       try{
            const full_username = `${username}@${APP_NAME}.${ACCOUNT_NAME}.voximplant.com`
            await client.login(full_username, password)
            redirect()
       }catch (e){
            alert(`${e.name} erorr code: ${e.code} ${e.message}`);
       }
    }

   
    const redirect = () => {
        navigation.reset({
            index: 0,
            routes: [{
                name: "Contacts"
            }],

        })
    }
   
     
    return (
        <View style={styles.page}>
            <Text style={styles.header}>Login</Text>
            <View style={styles.form}>
                <TextInput value={username} onChangeText={setUsername} placeholder="Username" autoCapitalize="none" style={styles.input}/>
                <TextInput value={password} onChangeText={setPassword} placeholder="Password" autoCapitalize="none" secureTextEntry style={styles.input}/>
                <Pressable style={styles.button}>
                    <Text onPress={login}style={styles.buttonText}>Sign in</Text>
                </Pressable>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: '#f0efed'
    },
    header: {
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    form: {
       flex: 1,
       height: '100%',
       padding: 10,
       justifyContent: 'center'
    },
    input: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    button: {
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: 'dodgerblue'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})