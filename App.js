import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { render } from 'react-dom';

export default class App extends React.Component{
  state={
    email:"",
    password:""
  }
  render(){
      return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image style={styles.backgroundImage} source={require('./assets/papers.co-vj27-low-poly-art-dark-pattern-27-wallpaper.jpg')}/>
      </View>
      <Image style={styles.logo} source={require('./assets/R2.png')}/>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Your Email.."
          placeholderTextColor="#ffffff"
          letterSpacing="1%"
          onchangeText={text => this.setState({email:text})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Your Password.."
          placeholderTextColor="#ffffff"
          letterSpacing="1%"
          onChangeText={text => this.setState({password:text})}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

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
    flex: 1,
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#ff0000",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#0000ff",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
