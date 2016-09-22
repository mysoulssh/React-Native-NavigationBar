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

class Login extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	phoneNum:'',
	  	secureNum:'',
	  };
	}

	componentDidMount (){
		const title = this.props.title;
		const {navigator} = this.props;
		const {configureScene} =this.props;
		if (title) {
			this.setState({
				title:title, 
			});
		}
		if (navigator) {
			this.setState({
				navigator:navigator, 
				configureScene:configureScene,
			});
		}
	};
	_onPressBack (){
		let nav = this.state.navigator;
		if (nav) {
			nav.pop();
		}
	};

	_onPressIn (){
		let nav =this.state.navigator;
		let conSe = this.state.configureScene;
		if (nav) {
			nav.push({
				name:'我的信息',
				component:MyInfo,
			});
		}
	}

	loginBtnClicked (){
		if (this.state.phoneNum.length != 11) {
			alert('请填写正确号码');
		}else if (this.state.secureNum != '123') {
			alert('账号或密码不正确');
		}else{
			this.state.navigator.push({
				name:'我的信息',
				component:MyInfo,
			});
		}
	}

  render() {
  	let nav = this.state.navigator;
    return (
      <View style={styles.contentStyle}>
      	<NavigationBar
      	 title="手机登录"
      	 titleColor='white' 
      	 titleFontWeight='bold' 

      	 leftBtnBackgroundImage={require('./img/btn_back_n.png')}
      	 leftTextFontSize={18}
      	 // leftBtnText='back'
      	 // leftTextColor='white'
      	 leftBtnPress={() => this._onPressBack()}

      	 rightBtnText = '完成'
      	 rightTextColor= 'white'
      	 rightTextFontSize={18}
      	 // rightBtnBackgroundImage={require('image!icon_tabbar_mine_selected')} 
      	 rightBtnPress={() => this._onPressIn()}
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
					    		secureNum:text, 
					    	});
					    }}
					 />
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
			  	onPress={() => this.loginBtnClicked()}>
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


export default Login;

/*  便捷注释
	<Text>{this.state.title}操作</Text>
       <TouchableHighlight
         onPress={() => this._onPressBack()}
         style={{marginTop: 30,}}
         >
         <Text style={{ fontSize: 20, textAlign:'center'}}>
           返回按钮
         </Text>
       </TouchableHighlight>

*/

