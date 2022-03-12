import React, { useState, setState }from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';






export default function CallActionButton() {
    const navigation = useNavigation()
    const [isCameraOn, setIsCameraOn] = useState(true)
    const [isMicroPhoneOn, setIsMicroPhoneOn] = useState(true)
    const [isCameraReverse, setIsCameraReverse] = useState(true)

    const onReverseCamera = () => {
        setIsCameraReverse(!isCameraReverse)
    }
    const onToggleCamera = () => {
        setIsCameraOn(!isCameraOn)
    }
    const onToggleMicroPhone = () => {
        setIsMicroPhoneOn(!isMicroPhoneOn)
    }
    const onHangup = () => {
        navigation.navigate("Contacts")
    }


    return (
        <View style={styles.bottomContainer}>
            <View style={styles.bottomItem}>
                <Pressable onPress={onReverseCamera}>
                    <Ionicons name={isCameraReverse ? 'camera-reverse' : 'camera'} size={40} style={styles.buttons}/>
                </Pressable>
                <Pressable onPress={onToggleCamera}>
                    <MaterialCommunityIcons name={isCameraOn ? 'camera-off' : 'camera-outline'} size={40} style={styles.buttons}/>
                </Pressable>
                <Pressable onPress={onToggleMicroPhone}>
                    <Ionicons name={isMicroPhoneOn ? 'md-mic-off' : 'md-mic'} size={40} style={styles.buttons}/>
                </Pressable>
                <Pressable onPress={onHangup}>
                    <MaterialCommunityIcons name='phone-hangup' size={40} style={styles.cancleButton}/>
                </Pressable>
            </View>
            
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
        color: '#fff',
        fontSize: 20,
    },
    bottomContainer: {
        bottom: 0,
        width: '100%',
        height: 100,
        padding: 10,
        position: 'absolute',
        backgroundColor: '#333',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bottomItem: {
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttons: {
        color: '#fff',
        padding: 10,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#555',
        backgroundColor: '#555'
    },
    cancleButton: {
        color: '#fff',
        padding: 10,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#555',
        backgroundColor: 'red'
    }
})