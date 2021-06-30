import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground, Modal, 
TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    // const pressHandler = () =>{
    //     navigation.push('ReviewDetails');
    //     navigation.goBack();
    //     navigation.navigate('ReviewDetails');
    // }

    const [reviews, setReviews] = useState([
        {title: 'Canaberra', rating: 3, body: 'Canaberra coffee hoouse', key: '1' },
        {title: 'Camellia', rating: 5, body: 'Camellia restaurant', key: '2' },
        {title: 'Khana kazana', rating: 4, body: 'Khana kazana restautrant', key: '3' }
    ]);

    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (review) =>{
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>

        <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground source={require('../assets/game_bg.png')} style={styles.modalContent}>
            <MaterialIcons
                name='close'
                size={30}
                onPress={() => setModalOpen(false)}
                style={styles.modalClose}
            />
            <ReviewForm addReview={addReview} />
            </ImageBackground>
            </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons
            name='add'
            size={30}
            onPress={() => setModalOpen(true)}
            style={styles.modalToggle}
        />

            <FlatList 
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </Card>
                </TouchableOpacity>
            )}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    modalContent: {
        flex: 1
    }
})