import 'react-native-gesture-handler';
import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function Elevators({ navigation }){

    return(
        <View style={globalStyles.container}>
        <Card style={{width: '100%'}}>
        <View>
        <Text style={styles.title}> Employee id: #{ navigation.getParam('id') } </Text>
        <View style={styles.detailsContainer}>
            <Text style={styles.details}> Full Name: { navigation.getParam('employee_name') } </Text>
            <View style={styles.updateContainer}>
                <Text style={styles.details}> Salary: { navigation.getParam('employee_salary')} </Text>
                <TouchableOpacity>
                    <Text style={{color:'red',marginLeft: 15}}>CHANGE</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.details}> Age: { navigation.getParam('employee_age') } </Text>
        </View>
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
    detailsContainer: {
        marginTop: 20
    },
    updateContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    updateBtn: {
    },
    details: {
        padding: 5,
    },
});