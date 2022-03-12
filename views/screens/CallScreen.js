import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native'
import CallActionButton from './CallActionButton'




export default function CallScreen({route}) {
    const user = route.params;
   
    console.log(user)


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



