import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Card(props) {
    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
        <View style={styles.cardImage}>
        {/* <Image style={styles.image} source={require('../assets/icon-R.png')}/> */}
        </View>
        <View style={styles.cardText}>
          { props.children }
        </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 3,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0.9,
        backgroundColor: '#F4F6F7',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        position: 'relative',
        marginHorizontal: 20,
        marginVertical: 25,
        padding: 5,
    },
    cardText: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardImage: {
        height: 40,
        width: 70,
        resizeMode: 'contain',
        position: 'absolute',
        overflow: 'hidden',
        right: 0,
        bottom: 0,
        alignContent: 'flex-end',
        justifyContent: 'center'
    },
    image: {
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 1,
    }
  });