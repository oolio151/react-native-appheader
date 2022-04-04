import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';

//Make sure to add the bg and text props

class AppHeader extends React.Component{
  render(){
    return(
      <SafeAreaView style={{backgroundColor: this.props.bg},{flex:1}}>
      <Text style={styles.text}>{this.props.text}</Text>
      </SafeAreaView>
    )
  }
}

const styles=StyleSheet.create({

  text:{
    color:"white",
    fontFamily: "Arial",
    padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  }
});

export default AppHeader;
