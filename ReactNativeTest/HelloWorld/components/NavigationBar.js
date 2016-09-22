/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  PropsType,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const NAV_HEIGHT = 44;			//导航栏高度
const STATUS_BAR_HEIGHT = 20;  //状态栏高度

var Dimensions = require('Dimensions');

var {
      width,
      height
    } = Dimensions.get('window');//获取屏幕宽高

class NavigationBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	navBarBackgroundColor:'rgb(48,144,205)',//导航栏背景色

	  	title:null,						//标题
	  	titleColor:'black',				//标题字体颜色
	  	titleView:null,					//自定义标题视图
	  	titlePress:null,				//标题点击事件
	  	titleFontSize:18,				//标题字体大小（默认18）
	  	titleFontWeight:'normal',		//标题粗细 （默认正常）

	  	leftBtnText:null,				//右侧按钮内容
	  	leftBtnBackgroundColor:null,	//左侧按钮背景颜色
	  	leftBtnBackgroundImage:null,	//左侧按钮背景图片
	  	leftBtnPress:null,				//左侧按钮点击事件
	  	leftTextColor:'black',			//左侧按钮字体颜色
	  	leftTextFontSize:15,			//左侧按钮字体大小（默认15）
	  	leftBtnWidth:80	,				//左侧按钮宽 （默认80）
	  	leftBtnHeight:25,				//左侧按钮高 （默认25）
	  	leftBtnImageMarignTop:null,		//左侧按钮图片居上
	  	leftBtnImageMarignLeft:null,	//左侧按钮图片居左
	  	leftBtnImageMarignBottom:null,	//左侧按钮图片居下
	  	leftBtnImageMarignRight:null,	//左侧按钮图片居右
	  	leftBtnImageResize:'contain',   //左侧按钮图片放置方式

	  	rightBtnText:null,				//右侧按钮内容
	  	rightBtnBackgroundColor:null,	//右侧按钮背景颜色
	  	rightBtnBackgroundImage:null,	//右侧按钮背景图片
	  	rightBtnPress:null,				//右侧按钮点击事件
	  	rightTextColor:'black',			//右侧按钮字体颜色
	  	rightTextFontSize:15,			//右侧按钮字体大小（默认15）
	  	rightBtnWidth:80,				//右侧按钮宽 （默认80）
	  	rightBtnHeight:25,				//右侧按钮高 （默认25）
	  	rightBtnImageMarignTop:null,	//右侧按钮图片居上
	  	rightBtnImageMarignLeft:null,	//右侧按钮图片居左
	  	rightBtnImageMarignBottom:null,	//右侧按钮图片居下
	  	rightBtnImageMarignRight:null,	//右侧按钮图片居右
	  	rightBtnImageResize:'contain',  //左侧按钮图片放置方式

	  };
	}

	componentDidMount(){ //组件已经挂载
		const pp = this.props;
		const ss = this.state;
		this.setState({

			//判断是否为空
			title:pp.title?pp.title:ss.title,
			titleColor: pp.titleColor?pp.titleColor:ss.titleColor,
			titleView: pp.titleView?pp.titleView:ss.titleView,
			titlePress: pp.titlePress?pp.titlePress:ss.titlePress,
			titleFontSize: pp.titleFontSize?pp.titleFontSize:ss.titleFontSize,
			titleFontWeight: pp.titleFontWeight?pp.titleFontWeight:ss.titleFontWeight,

			leftBtnText: pp.leftBtnText?pp.leftBtnText:ss.leftBtnText,
			leftBtnBackgroundColor: pp.leftBtnBackgroundColor?pp.leftBtnBackgroundColor:ss.leftBtnBackgroundColor,
			leftBtnBackgroundImage: pp.leftBtnBackgroundImage?pp.leftBtnBackgroundImage:ss.leftBtnBackgroundImage,
			leftBtnPress: pp.leftBtnPress?pp.leftBtnPress:ss.leftBtnPress,
			leftTextColor: pp.leftTextColor?pp.leftTextColor:ss.leftTextColor,
			leftTextFontSize: pp.leftTextFontSize?pp.leftTextFontSize:ss.leftTextFontSize,
			leftBtnWidth: pp.leftBtnWidth?pp.leftBtnWidth:ss.leftBtnWidth,
			leftBtnHeight: pp.leftBtnHeight?pp.leftBtnHeight:ss.leftBtnHeight,
			leftBtnImageMarignTop: pp.leftBtnImageMarignTop?pp.leftBtnImageMarignTop:ss.leftBtnImageMarignTop,
			leftBtnImageMarignLeft: pp.leftBtnImageMarignLeft?pp.leftBtnImageMarignLeft:ss.leftBtnImageMarignLeft,
			leftBtnImageMarignBottom: pp.leftBtnImageMarignBottom?pp.leftBtnImageMarignBottom:ss.leftBtnImageMarignBottom,
			leftBtnImageMarignRight: pp.leftBtnImageMarignRight?pp.leftBtnImageMarignRight:ss.leftBtnImageMarignRight,
			leftBtnImageResize: pp.leftBtnImageResize?pp.leftBtnImageResize:ss.leftBtnImageResize,

			rightBtnText: pp.rightBtnText?pp.rightBtnText:ss.rightBtnText,
			rightBtnBackgroundColor: pp.rightBtnBackgroundColor?pp.rightBtnBackgroundColor:ss.rightBtnBackgroundColor,
			rightBtnBackgroundImage: pp.rightBtnBackgroundImage?pp.rightBtnBackgroundImage:ss.rightBtnBackgroundImage,
			rightBtnPress: pp.rightBtnPress?pp.rightBtnPress:ss.rightBtnPress,
			rightTextColor: pp.rightTextColor?pp.rightTextColor:ss.rightTextColor,
			rightTextFontSize: pp.rightTextFontSize?pp.rightTextFontSize:ss.rightTextFontSize,
			rightBtnWidth: pp.rightBtnWidth?pp.rightBtnWidth:ss.rightBtnWidth,
			rightBtnHeight: pp.rightBtnHeight?pp.rightBtnHeight:ss.rightBtnHeight,
			rightBtnImageMarignTop: pp.rightBtnImageMarignTop?pp.rightBtnImageMarignTop:ss.rightBtnImageMarignTop,
			rightBtnImageMarignLeft: pp.rightBtnImageMarignLeft?pp.rightBtnImageMarignLeft:ss.rightBtnImageMarignLeft,
			rightBtnImageMarignBottom: pp.rightBtnImageMarignBottom?pp.rightBtnImageMarignBottom:ss.rightBtnImageMarignBottom,
			rightBtnImageMarignRight: pp.rightBtnImageMarignRight?pp.rightBtnImageMarignRight:ss.rightBtnImageMarignRight,
			rightBtnImageResize: pp.rightBtnImageResize?pp.rightBtnImageResize:ss.rightBtnImageResize,

		}); 
	}

  render() {
  	//判断是否定义了上面的属性
  	const pp = this.props;
	const ss = this.state;
  	//是否设置标题
  	var titleSetting = false;
  	if (pp.title || pp.titleView) {
  		titleSetting = true;
  	}

  	//是否设置左侧按钮
  	var leftBtnSetting = false;
  	if (pp.leftBtnText || pp.leftBtnBackgroundImage || pp.leftBtnBackgroundColor) {
  		leftBtnSetting = true;
  	}

  	//是否设置右侧按钮
  	var rightBtnSetting = false;
	if (pp.rightBtnText || pp.rightBtnBackgroundImage || pp.rightBtnBackgroundColor) {
  		rightBtnSetting = true;
  	}

    return (
      <View style={[styles.bgViewStyle,{backgroundColor:ss.navBarBackgroundColor,}]}>
      	
      	{//设置左侧按钮
      		<TouchableOpacity 
      			style={{
	      			width:ss.leftBtnWidth,
	      			backgroundColor: ss.leftBtnBackgroundColor,
	      			flexDirection:'row',
	      			justifyContent:'center',
	      		}}
	      		onPress={ss.leftBtnPress}
      		>
      		{
      			
      			ss.leftBtnBackgroundImage?<Image
      			  style={{
      			  	resizeMode: ss.leftBtnImageResize,
      			  	height:ss.leftBtnHeight,
      			  	marginLeft:ss.leftBtnImageMarignLeft,
      			  	marginRight:ss.leftBtnImageMarignRight,
      			  	marginTop:ss.leftBtnImageMarignTop,
      			  	marginBottom:ss.leftBtnImageMarignBottom,
      			  }}
      			  source={ss.leftBtnBackgroundImage} />:null
      		}  		
      		{
      			ss.leftBtnText?<Text 
				  style={[styles.btnTextStyles,{
				  	fontSize:ss.leftTextFontSize,
				  	color:ss.leftTextColor,
				  }]}
				>
				  {ss.leftBtnText}
				</Text>:null
      		}	
      			</TouchableOpacity>
      }

      	{//设置标题
      		<Text style={[styles.titleStyles,{
      			fontSize: ss.titleFontSize,
      			color: ss.titleColor,
      			fontWeight: ss.titleFontWeight,
      		}]}>
      		  {ss.title}
      		</Text>
      	}
      	 		
	    {//设置右侧按钮
		    <TouchableOpacity 
		      	style={{
			      	width:ss.rightBtnWidth,
			      	backgroundColor: ss.rightBtnBackgroundColor,
			      	flexDirection:'row',
			      	justifyContent:'center',
			      }}
			    onPress={ss.rightBtnPress}
		    >
		      	{

		      		ss.rightBtnBackgroundImage?<Image
		      			style={{
		      			  	resizeMode: ss.rightBtnImageResize,
	      			  	    height:ss.rightBtnHeight,
	      			  		marginLeft:ss.rightBtnImageMarignLeft,
	      			  		marginRight:ss.rightBtnImageMarignRight,
	      			  		marginTop:ss.rightBtnImageMarignTop,
	      			  		marginBottom:ss.rightBtnImageMarignBottom,
		      			  }}
		      			source={ss.rightBtnBackgroundImage} />:null
		      	}  	
		      	{
		      		ss.rightBtnText?<Text 
						style={[styles.btnTextStyles,{
						    fontSize:ss.rightTextFontSize,
						  	color:ss.rightTextColor,
						  }]}
						>
						  {ss.rightBtnText}
						</Text>:null
		      	}	
		    </TouchableOpacity>	
	    }
      </View>
    );
  }
}

const styles = StyleSheet.create({
	bgViewStyle : {
		flexDirection:'row',
		height: NAV_HEIGHT+STATUS_BAR_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleStyles : {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
      	textAlign: 'center',
	},
	leftBtnStyles : {

	},
	btnTextStyles : {
		flex: 1,
		textAlign:'center',
		justifyContent:'center',
		alignItems: 'center',
	},
});


export default NavigationBar;



