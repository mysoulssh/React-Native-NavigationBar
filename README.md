# React-Native-NavigationBar
简单的使用view来代替navigationBar，实现了常用的导航功能，可自定义导航栏Items  

#使用说明:   
在需要导航栏的地方，引入NavigationBar.js  
实例代码如下：   
<br />
render() {   
    return (   
        <View style={styles.contentStyle}>
            <NavigationBar   

                title="标题"   
                titleColor='white'   
                titleFontWeight='bold'   

                leftBtnBackgroundImage={require('./img/btn_back_n.png')}   
                leftTextFontSize={18}   
                // leftBtnText='back'   
                // leftTextColor='white'   
                leftBtnPress={() => this._onPressBack()}   

                rightBtnText = 'done'   
                rightTextColor= 'white'   
                rightTextFontSize={18}   
                // rightBtnBackgroundImage={require('image!icon_tabbar_mine_selected')}    
                rightBtnPress={() => this._onPressIn()}   
        />   
        </View>   
    );   
}<br />    
 
示范图：   

![image](https://github.com/mysoulssh/React-Native-NavigationBar/blob/master/ReactNativeTest/HelloWorld/components/img/one.png)   
![image](https://github.com/mysoulssh/React-Native-NavigationBar/blob/master/ReactNativeTest/HelloWorld/components/img/two.png)   

简要是实现了导航控制器的外观与功能.


