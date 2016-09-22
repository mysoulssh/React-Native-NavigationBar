/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TabBarIOS,
  Navigator,
  NavigatorIOS,
  ScrollView,
  ListView,
} from 'react-native';

import My from './components/My.js';


class HelloWorld extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      selectedTab: '我的',
      text:'',
      // dataSource: ds.cloneWithRows([
        // 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      // ])
    };
  }
  buttonTouch = () => {alert('按了提示按钮')};

  pushNav(navigator){
    
  };

  //进行渲染页面内容
  _renderContent(color: string,tabName: string) {
    // if (tabName == '我的') {

      return (
        <Navigator
                initialRoute={{name: '我的', index: 0,component:My}}
                renderScene={(route, navigator) => {
                  let Component = route.component;
                  return (<Component {...route.params} navigator={navigator}  route={route}/>);
                }}
                // configureScene={(route, routeStack) =>
                    // Navigator.SceneConfigs.FloatFromBottom}
                // navigationBar={
                //   <Navigator.NavigationBar
                //     routeMapper={{
                //       LeftButton: (route, navigator, index, navState) =>
                //     { return (<Text style={[styles.navTextStyles,{marginLeft: 15, marginTop:5}]}></Text>); },
                //       RightButton: (route, navigator, index, navState) =>
                //     { return (<Text style={[styles.navTextStyles,{marginRight:15, marginTop:5}]}></Text>); },
                //       Title: (route, navigator, index, navState) =>
                //     { return (<Text style={{fontSize: 20, marginTop:5 }}>我的</Text>); },
                //   }}
                //      style={{backgroundColor: 'rgb(75,157,209)'}}
                //    />
                // }
              />
      );
    // }

  // return (
  //       <TouchableHighlight
  //                       onPress={() => this.pushNav(navigator)}
  //                       style={{backgroundColor:'yellow',justifyContent:'center',alignItems:'center',marginTop:300}}
  //                       >
  //                       <Text>
  //                         push按钮
  //                       </Text>
  //                     </TouchableHighlight>
// );

}
  render() {
    return (
        <View style={{flex:1}}>
          {this._renderContent('#414A8C','我的')}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  navStyle:{
    backgroundColor:'blue',
  },
  buttonStyle: {
    backgroundColor: 'cyan',
    width: 150,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  tabContent: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  navTextStyles: {
    fontSize:18,
  },
});


AppRegistry.registerComponent('HelloWorld', () => HelloWorld);




/*
  //测试数据
  <TabBarIOS
              // style={{flex:1,alignItems:"flex-end"}}
              tintColor="#3EB8AF"
              // barTintColor="white"
              >
            <TabBarIOS.Item
                title="首页"
                icon={require('image!icon_tabbar_homepage')}
                // selectedIcon={require('image!icon_tabbar_homepage_selected')}
                selected={this.state.selectedTab === '首页'}
                onPress={() => {
            this.setState({
              selectedTab: '首页',
            });
          }}
            >
              {this._renderContent('#414A8C','首页')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="购物"
                icon={require('image!icon_tabbar_merchant_normal')}
                // selectedIcon={require('image!icon_tabbar_merchant_selected')}
                selected={this.state.selectedTab === '购物'}
                onPress={() => {
            this.setState({
              selectedTab: '购物',
            });
          }}
            >
              {this._renderContent('#783E33','购物')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="我的"
                icon={require('image!icon_tabbar_mine')}
                // selectedIcon={require('image!icon_tabbar_mine_selected')}
                selected={this.state.selectedTab === '我的'}
                onPress={() => {
            this.setState({
              selectedTab: '我的',
            });
          }}>
            {this._renderContent('#21551C','我的')}
            </TabBarIOS.Item>

          </TabBarIOS>


  //按钮（导航）
  <TouchableHighlight
                    onPress={() => this.pushNav(navigator)}
                    style={{backgroundColor:'yellow',justifyContent:'center',alignItems:'center',marginTop:300}}
                    >
                    <Text>
                      push按钮
                    </Text>
                  </TouchableHighlight>

  //导航跳转示例
  export default class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // 推入新场景所调用的方法           
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // 返回上一个场景所调用的方法
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

  //网络
    getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //网络ES7写法
  async getMoviesFromApi() {
    try {
      let response = await fetch('http://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      return responseJson.movies;
    } catch(error) {
      console.error(error);
    }
  }

  //使用其他网络
  var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();

  //ListView的用法
  <ListView
          style={{backgroundColor: 'white'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{alignItems:'center',backgroundColor:'cyan',marginTop:10}}>{rowData}</Text>}
        />

  //滚动视图
    <ScrollView>
    <Text style={{fontSize:96}}>Scroll me plz</Text> 

    <Text style={{fontSize:96}}>If you like</Text>

    <Text style={{fontSize:96}}>Scrolling down</Text>

  </ScrollView>

  //文本输入框
  <TextInput
          style={{height: 40,width:200,marginLeft:100,backgroundColor:'white',justifyContent:'center'}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

  //flex布局
  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />

var Dimensions = require('Dimensions');
var number = 100;

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '首页',
    };
  }
  render() { 
    return (
      <View style={{flex:1}}>
        <TabBarIOS style={{
          flex:1,
          alignItems:"flex-end",
        }}
        tintColor="white"
        barTintColor="darkslateblue"
        >
          <TabBarIOS.Item
            title="首页"
            selected={this.state.selectedTab === '首页'}
            onPress= {()=> {
              this.setState({
                selectedTab:'首页',
              });
            }}
          ></TabBarIOS.Item>
          <TabBarIOS.Item
            title="我的"
            selected={this.state.selectedTab === '我的'}
            onPress= {()=>{
              this.setState({
                selectedTab:'我的',
              });
            }}
          ></TabBarIOS.Item>
          </TabBarIOS>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  yellow: {
    backgroundColor : 'yellow'
  },
  green: {
    backgroundColor : 'green'
  },
  red : {
    backgroundColor : 'red'
  },
  selfColor :{
    backgroundColor : 'white'
  },
  box : {
    backgroundColor : '#333333',
    height : 100,
    alignSelf : 'stretch',
    marginBottom: 10
  },
  circle : {
    width : 10,
    height : 10,
    borderRadius : 5,
    backgroundColor : 'red'
  }

});


    var {
      width,
      height
    } = Dimensions.get('window');

         <View style={{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
      }
      }>
        <Text style={[styles.welcome,{
          fontWeight: 'bold'
        }]}>
          Welcome to 
          <Text style={{color : 'red'}}> React Native!!!</Text>
        </Text>
        <Text style={[styles.instructions,styles.green]}>
          To get started, edit index.ios.js
        </Text>
        <Text style={[styles.instructions,styles.yellow]}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <TouchableHighlight onPress={() => this.onPressButton()} style={{
          backgroundColor: 'cyan'
        }}>
          <Text style= {{
            fontSize: 15
          }}>Button {number}</Text>
        </TouchableHighlight>
        
      </View>



        <Text 
        numberOfLines = {2}
        style = {{
          fontSize: 13,
          padding: 30
        }}>
          window.width = {width} 本课时讲解 React Native 的样式布局基础，包括如何添加和使用样式，以及介绍作为 Css 子集的基本盒模型布局方式。
          window.height = {height} 本课时讲解 React Native 的样式布局基础，包括如何添加和使用样式，以及介绍作为 Css 子集的基本盒模型布局方式。
        </Text>
        <View style = {styles.box}>
          <View style = {[styles.circle,{
            position: 'absolute',
            top: 50,
            left: 50
          }]}/>
        </View>

        <View style = {styles.box}>
          <View style = {[styles.circle,{
            position: 'relative',
            top: 50,
            left: 50,
            marginLeft: 50
          }]}/>
        </View>

        <View style = {{backgroundColor:'black',marginBottom: 10}}>
          <Image 
          source={require('image!icon_homepage_entertainmentCategory')}
          style = {{
            height: 100,
            width: width,
            resizeMode: 'cover',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style = {{backgroundColor: 'black',color:'red'}}>这是测试数据</Text>
          </Image>
        </View>

        <View style = {{backgroundColor:'black',marginBottom: 10}}>
          <Image 
          source={require('image!icon_homepage_entertainmentCategory')}
          style = {{
            height: 100,
            width: width,
            resizeMode: 'contain'
          }}/>
        </View>

        <View style = {{backgroundColor:'black',marginBottom: 10}}>
          <Image 
          source={require('image!icon_homepage_entertainmentCategory')}
          style = {{
            height: 100,
            width: width,
            resizeMode: 'stretch'
          }}/>
        </View>

*/




