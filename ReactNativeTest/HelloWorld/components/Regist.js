'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

import NavigationBar from './NavigationBar.js';
import MyInfo from './MyInfo.js';

var Dimensions = require('Dimensions');

var {
      width,
      height
    } = Dimensions.get('window');

class Regist extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	phoneNum:'',
	  	secureText:'',
	  	acquireNum:'',
	  };
	}

	componentDidMount (){
		const title = this.props.title;
		const {navigator} = this.props;
		if (title) {
			this.setState({
				title:title, 
			});
		}
		if (navigator) {
			this.setState({
				navigator:navigator, 
			});
		}
	};
	_onPressBack (){
		let nav = this.state.navigator;
		if (nav) {
			nav.pop();
		}
	};

	_leftItemAction (){
		_onPressBack();
	};

	_rightItemAction (){
		_onPressBack();
	};

	getAcquire (){
		alert('验证码是:123');
	}

	registBtnClicked (){
		if (this.state.phoneNum.length != 11) {
			alert('请填写正确号码');
		}else if (this.state.secureText != '123') {
			alert('账号或密码错误');
		}else if (this.state.acquireNum != '123') {
			alert('验证码错误');
		}else {
			this.state.navigator.push({
				name:'我的信息',
				component:MyInfo,
			})
		}
	}

  render() {
    let nav = this.state.navigator;
    return (
      <View style={styles.contentStyle}>
      	<NavigationBar
      	 title="手机注册"
      	 titleColor='white' 
      	 titleFontWeight='bold' 
      	 leftBtnBackgroundImage={require('./img/btn_back_n.png')} 
      	 leftBtnBackgroundColor='rgba(255, 255, 255, 0.0)'
      	 // leftBtnText='back'
      	 // leftTextColor='white'
      	 leftBtnPress={() => this._onPressBack()}
      	/>
      	<ScrollView style={{flex: 1,}}>
	      	<View style={styles.contentBGStyle}>
	      		<View style={[styles.textInputViewStyle,{
					marginTop:20,
	      		}]}>
	      		<Image
	      		  style={
	      		  	styles.imageStyle
	      		  }
	      		  source={require('image!img_tell')} />
	      		
	      			<TextInput
					    style={{
					    	flex: 1,
					    	height: 40, 
					    	padding:10,
					    }}
					    placeholder='手机号'
					    placeholderTextColor='gray'
					    keyboardType='numeric'
					    maxLength={11}
					    onChangeText={(text) => {
					    	this.setState({
					    		phoneNum: text,
					    	});
					    }}
					 />
	      		</View>

	      	  	<View style={[styles.textInputViewStyle,{
					marginTop:-1,
	      		}]}>
	      		<Image
	      		  style={
	      		  	styles.imageStyle
	      		  }
	      		  source={require('image!img_password')} />
	      		
	      			<TextInput
					    style={{
					    	flex: 1,
					    	height: 40, 
					    	padding:10,
					    }}
					    placeholder='密码'
					    placeholderTextColor='gray'
					    secureTextEntry={true}
					    onChangeText={(text) => {
					    	this.setState({
					    		secureText:text, 
					    	});
					    }}
					 />
	      		</View>

			  <View style={[styles.textInputViewStyle,{
			  	marginTop:20,
			  }]}>
			  	<TextInput
			  	 	style={{
			  	 		flex: 1,
			  			height:40,
			  			padding:10,
			  	 	}}
			  	 	placeholder='请输入验证码'
			     	placeholderTextColor='gray'
			     	onChangeText={(text) => {
			     		this.setState({
			     			acquireNum:text, 
			     		});
			     	}}
			  	/>
			  	<TouchableOpacity 
			  		style={{
			  			width:100,
			  		  	height:40,
			  		  	marginTop:-1,
			  		}}
			  		onPress={() => this.getAcquire()}
			  	>
			  		<Image
			  		  style={{
			  		  	width:100,
			  		  	height:40,
			  		  }}
			  		  source={require('image!btn_acquire_n')} />
			  	</TouchableOpacity>
			  	
			  </View>

			  <TouchableOpacity	style={{
			  		height:40, 
			  		marginTop:40,
			  		// width:300,
			  		marginLeft:50,
			  		marginRight:50,
					backgroundColor: 'rgb(48,144,205)',
					justifyContent: 'center',
					alignItems: 'center',
			  	}}
			  		onPress={() => this.registBtnClicked()}
			  	>
			  	<Text style={{fontSize:18,color:'white'}}>
			  	  确定
			  	</Text>
			  </TouchableOpacity>
	      	</View>
      	</ScrollView>
	  </View>
    );
  }
}

const styles = StyleSheet.create({
	contentStyle:{
		flex: 1,
		// justifyContent:'center',
		// alignItems:'center',
		backgroundColor: 'white',
	},
	contentBGStyle:{
		flex: 1,
		backgroundColor: 'white',
		// justifyContent:'center',
		// alignItems:'center',
	},
	textInputViewStyle:{
		height: 40, 
		borderColor: 'rgb(71,116,165)', 
		borderWidth: 1,
		marginLeft:50,
		marginRight:50,
		flexDirection:'row',									
	},
	imageStyle:{
	    width:40,
	    height:40,
	    marginTop:-1,
	    marginLeft:-1,		
	},
});


export default Regist;