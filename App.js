import 'react-native-gesture-handler';
import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';
import Navigator from './routes/loginStack';

export default class App extends React.Component{

  render(){
    return (
    <Navigator />
    );
  };
};