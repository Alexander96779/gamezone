import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {

    const rating = navigation.getParam('rating');

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.paragraph}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});