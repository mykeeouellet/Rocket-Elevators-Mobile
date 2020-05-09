import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from 'react-native';


export default function Login ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Home');
  }

  state={
    email:"",
    password:""
  }


  // ==== Structure of the Login Page ===== //
    return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image style={styles.backgroundImage} source={require('../assets/darkbuildingbackground.jpg')}/>
      </View>
      <Image style={styles.logo} source={require('../assets/R2.png')}/>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#ffffff"
          letterSpacing="1%"
          onchangeText={text => this.setState({email:text})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#ffffff"
          letterSpacing="1%"
          onChangeText={text => this.setState({password:text})}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Button style={styles.loginBtn} title="Login" onPress={pressHandler}></Button>
      </TouchableOpacity>
    </View>
    );
};
// ============================================ //



// ====== ALL STYLE ATTRIBUTES FOR LOGIN ====== //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  backgroundImage:{
    flex: 1,
    width: null,
    height: null
  },
  logo:{
    zIndex:1,
    position: 'relative',
    alignSelf: "center",
    justifyContent: "flex-start",
    top: 5,
    padding: 20,
    width: '80%',
    height: '30%',
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  inputView:{
    position: 'relative',
    width:"80%",
    backgroundColor: 'rgba(110,110,110, 1)',
    opacity: 0.8,
    alignSelf: 'center',
    borderRadius:25,
    height: 25,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  inputText:{
    height:50,
    color:"white",
  },
  forgot:{
    color:"white",
    fontSize:11,
    opacity: 0.8,
    letterSpacing: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    opacity: 0.8,
    height: 50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
