import 'react-native-gesture-handler';
import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, Image, ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';

export default function Elevators({ navigation }){

    function Separator() {
        return <View style={styles.separator} />;
      }

    return(
        <View style={globalStyles.container}>
        <Card style={{width: '100%'}}>
        <View>
        <View style={styles.cardHeader}>
        <Text style={styles.title}> Elevator #{ navigation.getParam('id') } </Text>
            <Image style={styles.logo,{width: 50, height: 60, resizeMode: 'stretch', marginLeft: 10}} source={require('../assets/icon-R.png')}/>
        </View>
        <View style={styles.detailsContainer}>
        <Separator />
            <Text style={styles.detailsTop}> Serial Number: { navigation.getParam('elevator_serial_number') } </Text>
            <Text style={styles.detailsTop}> Status:{ navigation.getParam('elevator_status')} </Text>
            <Text style={styles.detailsTop}> Model: { navigation.getParam('elevator_model') } </Text>
            <Text style={styles.detailsTop}> Building Type: { navigation.getParam('building_type') } </Text>
            <Separator />
            <View style={styles.detailsBottom}>
            <Text style={styles.detailsField}> Inspection Certificate:</Text>
            <Text style={styles.detailsText}>{ navigation.getParam('elevator_inspection_certificate')}</Text>
            <Text style={styles.detailsField}> Notes:</Text>
            <Text style={styles.detailsText}>{ navigation.getParam('elevator_notes') }</Text>
            </View>
        <Separator />
        </View>
        <TouchableOpacity style={styles.activate}><Text style={{
            letterSpacing: 2,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 45,
            padding: 10,
            }
        }>ACTIVATE</Text>
        <MaterialIcons
            name='done'
            style={styles.icon}
            size={28}
        />
        </TouchableOpacity>
        </View>
        </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center'
     },
    detailsContainer: {
        marginTop: 5,
    },
    detailsTop: {
        padding: 2,
        textAlign: 'left'
    },
    detailsBottom: {
        textAlign: 'left',
    },
    detailsField: {
        fontWeight: 'bold',
        marginBottom: 2
    },
    detailsText: {
        fontStyle: 'italic',
        marginBottom: 8,
        marginLeft: 5
    },
    activate: {
        backgroundColor: '#04b817',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 10,
    },
    icon: {

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});