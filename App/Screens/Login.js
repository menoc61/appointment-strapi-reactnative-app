import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import app from '../../assets/app.png'
import Colors from '../../assets/shared/Colors';
export default class Login extends Component {
  render() {
    return (
      <View>
        <Image source={app} style={styles.appImage} />
        <View style={{ backgroundColor: Colors.white, padding: 25 }}>
          <Text style={{}}>login widget</Text>
          <Text>Appoinment booking app</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appImage: {
    width: 400,
    height: 500,
    objectFit: 'contain'
  },

});