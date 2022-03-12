import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Platform,
    PermissionsAndroid
} from 'react-native'
import CallActionButton from './CallActionButton'
import {useNavigation} from '@react-navigation/core'



const permissions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA
]


export default function CallScreen({route}) {
    const user = route.params;
    const navigation = useNavigation()
    const [permissionsGranted, setPermissionsGranted] = useState(false)
   
    const getPermissions = async ()  => {
        const granted = await PermissionsAndroid.requestMultiple(permissions)
        const recordAudioGranted = granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted'
        const cameraGranted = granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted'
        if(!recordAudioGranted || !cameraGranted){
            return navigation.navigate('Contacts')
        }else{
            setPermissionsGranted(true)
        }
    }

    
    useEffect(() => {
        if(Platform.OS == 'android'){
            getPermissions()
        }else{
            setPermissionsGranted(true)
        }
    }, [])


    return (
        <View style={styles.page}>
            <View style={styles.preview}>
                <Text style={styles.name}>{user.user_display_name}</Text>
                <Text style={styles.number}>{user.number}</Text>
                <Text style={styles.detail}>Calling...</Text>
            </View>
            <CallActionButton />
        </View>
    )
}









const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: 'rgb(196, 142, 44)',
    },
    preview: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
        backgroundColor: '#555'
    },
    name: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    detail: {
        color: 'lightgreen',
        fontSize: 30,
    },
    number: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})



