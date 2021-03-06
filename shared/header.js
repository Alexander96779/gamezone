import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function header({navigation, title}) {

    const openMenu = () =>{
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
header: {
width: '100%',
height: '100%',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center'
},

headerText: {
fontWeight: 'bold',
fontSize: 20,
color: '#fff',
letterSpacing: 1,
fontFamily: 'nunito-bold',
},

icon: {
    position: 'absolute',
    left: 16,
    color: '#fff',
    fontSize: 20,
}
});