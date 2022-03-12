import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native'
import CallActionButton from './CallActionButton'




export default function CallScreen() {
    return (
        <View style={styles.page}>
            <View style={styles.preview}>
                <View style={styles.cameraPreview}>

                </View>
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
        color: '#fff',
        fontSize: 20,
    },
    cameraPreview: {
        top: 30,
        right: 10,
        height: 150,
        width: 100,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#ffff6e'
    },
})



