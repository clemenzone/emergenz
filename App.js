/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Linking} from 'react-native';
import Sound from 'react-native-sound';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component{
  onPress = () =>{
    const requireAudio = require('/Users/admin/emergenz/app/sounds/sirena_ambulanza.mp3');
    const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
  }
 render(){

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Suicide" color='red' onPress={()=>{Linking.openURL('tel:800-273-8255');}}/>
        </View>
        <View style={styles.buttonContainer2}>
          <Button title="Emergency" color='red' onPress={()=>{Linking.openURL('tel:911');}}/>
        </View>
        <View style={styles.buttonContainer3}>
          <Button title="Fall Alert" color='red' onPress={this.onPress}/>
        </View>

      </View>
    </>
  );
 }

  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    backgroundColor:'red',
  },

  buttonContainer: {
    backgroundColor: "white",
    height: 40,
    width: 300,
    borderRadius: 10,
    overflow: 'hidden',
  },

  buttonContainer2:{
    backgroundColor: "white",
    height: 40,
    width: 300,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonContainer3:{
    backgroundColor: "white",
    height: 40,
    width: 300,
    borderRadius: 10,
    marginTop: 20,
  },

});

export default App;
