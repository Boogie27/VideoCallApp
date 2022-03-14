import React, { useEffect, useState, useRef} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Platform,
    PermissionsAndroid
} from 'react-native'
import CallActionButton from './CallActionButton'
import {useNavigation} from '@react-navigation/core'
import {Voximplant} from 'react-native-voximplant'



const permissions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA
]


export default function CallScreen({route}) {
    const  call = useRef()
    const user = route.params;
    const navigation = useNavigation()
    const client = Voximplant.getInstance()
    const [callStatus, setCallStatus] = useState('Initializing...')
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



    useEffect(() => {
        if(!permissionsGranted){
            return
        }

        const callSettings = {
            video: {
                sendVideo: true,
                receiveVideo: true
            }
        }

        
        const makeCall = async () => {
            call.current = await client.call(user.user_name, callSettings)
            subscribeToCallEvent()
        }

        const subscribeToCallEvent = () => {
            call.current.on(Voximplant.CallEvents.Failed, (event) => {
                showError(event.reason)
            })
            call.current.on(Voximplant.CallEvents.ProgressToneStart, (event) => {
                setCallStatus('Calling...')
            })
            call.current.on(Voximplant.CallEvents.Connected, (event) => {
                setCallStatus('Connected')
            })
            call.current.on(Voximplant.CallEvents.Disconnected, (event) => {
                navigation.navigate('Contacts')
            })
        }

        const showError = (error) => {
            alert(`Call Failed, Reason: ${error}`, {
                text: "OK",
                onPress: navigation.navigate('Contacts')
            })
        }
       
        makeCall()

        return () => {
            call.current.off(Voximplant.CallEvents.Failed)
            call.current.off(Voximplant.CallEvents.ProgressToneStart)
            call.current.off(Voximplant.CallEvents.Connected)
            call.current.off(Voximplant.CallEvents.Disconnected)
        }
    }, [permissionsGranted])

    const onHangup = () => {
        call.current.hangup()
    }


    return (
        <View style={styles.page}>
            <View style={styles.preview}>
                <Text style={styles.name}>{user.user_display_name}</Text>
                <Text style={styles.number}>{user.number}</Text>
                <Text style={styles.detail}>{callStatus}</Text>
            </View>
            <CallActionButton onHangup={onHangup}/>
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



