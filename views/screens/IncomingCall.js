import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Pressable,
    ImageBackground,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import bg_image from '../../assets/bg-img/6.png'




export default function IncomingCall() {

    const onAccept = () => {
        console.warn('Accepted...')
    }

    const onDecline = () => {
        console.warn('Declined...')
    }


    return (
        <ImageBackground source={bg_image} style={styles.image} resizeMode="cover">
            <View style={styles.preview}>
                <Text style={styles.name}>Boogie</Text>
                <Text style={styles.detail}>Calling...</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomItem}>
                    <Pressable onPress={onDecline}>
                        <FontAwesome5 name='times' size={45} style={styles.cancleButton}/>
                        <Text style={styles.btnTxt}>Decline</Text>
                    </Pressable>
                   <Pressable onPress={onAccept}>
                        <AntDesign name='check' size={45} style={styles.acceptButton}/>
                        <Text style={styles.btnTxt}>Accept</Text>
                   </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}









const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: 'rgb(196, 142, 44)',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    preview: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
        // backgroundColor: '#555'
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
        height: 150,
        padding: 10,
        position: 'absolute',
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
        padding: 15,
        paddingRight: 24,
        paddingLeft: 24,
        borderRadius: 100,
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    acceptButton: {
        color: '#fff',
        padding: 15,
        paddingRight: 18,
        paddingLeft: 18,
        borderRadius: 100,
        backgroundColor: 'green',
        alignSelf: 'center',
    },
    btnTxt: {
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
    }
})




// micro-phone on = md-mic
// micro-phone on = md-mic