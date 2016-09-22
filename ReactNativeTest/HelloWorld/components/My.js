'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  
} from 'react-native';

import Regist from './Regist.js';
import Login from './Login.js';

var Dimensions = require('Dimensions');

var {
      width,
      height
    } = Dimensions.get('window');

class My extends Component {

  constructor(props) {
    super(props);
  
    this.state = {

    };
  }

	loginBtnClicked = () => {
    const {navigator} = this.props;
    if (navigator) {
      navigator.push({
        name:'登录',
        component:Login,
        params:{
          title:'登录',
        },
      })
    }
	};

	registBtnClicked = () => {
		const {navigator} = this.props;
    if (navigator) {
      navigator.push({
        name:'注册',
        component:Regist,
      })
    }
	};

  render() {
    return (
      <View style={styles.contentStyle}>
      	
      	  <TouchableOpacity
      	   style={styles.btnStlye,{height:40}}
      	   onPress={this.loginBtnClicked}
      	  >
      	  	<Image
      	  	  style={{flex: 1,resizeMode:'stretch'}}
      	  	  source={require('image!btn_login_n')} />
      	  </TouchableOpacity>
      	  <TouchableOpacity
      	   style={styles.btnStlye,{height:40,marginTop:20}}
      	   onPress={this.registBtnClicked}

      	  >
      	  	<Image
      	  	  style={{flex: 1,resizeMode:'stretch'}}
      	  	  source={require('image!btn_signup_n')} />
      	  </TouchableOpacity>
      	
      </View>
    );
  }
}

const styles = StyleSheet.create({
	contentStyle:{
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		// marginTop: -64,
	},
	btnStlye:{
		flex: 1,
	},
});


export default My;