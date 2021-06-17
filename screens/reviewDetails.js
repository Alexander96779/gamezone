import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ReviewDetails() {
    return(
        <View style={styles.container}>
            <Text>This is the review details screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});