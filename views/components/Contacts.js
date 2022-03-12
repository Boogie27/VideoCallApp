import React from 'react'
import { 
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native'
import { useState, setState } from 'react'
import contacts from '../../assets/data/contacts.json'
import {useNavigation} from '@react-navigation/core'





export default function Home() {
  const navigation = useNavigation()
  const [searchInput, setSearchInput] = useState('')
  const [filteredContacts, setfilteredContacts] = useState(contacts)

  console.log(searchInput)

  const callUser = (user) => {
    navigation.navigate("CallScreen", user)
  }

  return (
    <SafeAreaView>
        <View><Text style={styles.header}>Contacts</Text></View>
        <View style={styles.page}>
          <View style={styles.container}>
              <TextInput value={searchInput} onChangeText={setSearchInput} placeholder="Search..." style={styles.textInput}/>
          </View>
          <FlatList data={contacts} 
            renderItem={({item}) => (
               <Pressable onPress={() => callUser(item)}>
                  <Text style={styles.contact}>{item.user_display_name}</Text>
               </Pressable>
            )}
            ItemSeparatorComponent={() => (<View style={styles.separator}></View>)}
            />
        </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    page: {
      padding: 10,
      backgroundColor: '#f0efed'
    },
    header: {
      fontSize: 20,
      padding: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#fff'
    },
    contact: {
        fontSize: 16,
        paddingTop: 15,
        paddingBottom: 15
    },
    separator: {
       height: 1,
       width: '100%',
       backgroundColor: 'lightgray'
    },
    textInput: {
      width: '100%',
    },
    container: {
      width: '100%',
      padding: 3,
      borderRadius: 20,
      backgroundColor: "#ccc"
    }
})