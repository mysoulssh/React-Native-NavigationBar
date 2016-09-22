'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Navigator,
} from 'react-native';

import NavigationBar from './NavigationBar.js';

class MyInfo extends Component {

	_onPressBack (){
		const {navigator} = this.props;
		if (navigator) {
			navigator.pop();
		}
	};

  render() {
    return (
      <View style={styles.bgViewStyle}>
      	<NavigationBar 
      		title="我的信息"
      	 	titleColor='white' 
      	 	titleFontWeight='bold'

      	 	leftBtnPress={() => this._onPressBack()}
      	 	leftBtnBackgroundImage={require('image!btn_back_n')}
      	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	bgViewStyle:{
		flex: 1,
		backgroundColor:'white',
	},
});


export default MyInfo;

/*
	<Image
      	  style={{flex: 1, resizeMode: 'stretch',}}
      	  source={require('image!05_zx_001')} />
      	  icon_homepage_entertainmentCategory

*/
