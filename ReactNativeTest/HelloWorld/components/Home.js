'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.viewContent}></View>
    );
  }
}

const styles = StyleSheet.create({
	viewContent:{
	  flex:1,
	  backgroundColor:'white',
	},
});


export default Home;