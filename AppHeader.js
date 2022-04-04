import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

//Make sure to add the bg and text props

class AppHeader extends React.Component{
  render(){
    return(
      <SafeAreaView style={{backgroundColor: this.props.bg}}>
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  }
});

export default AppHeader;
