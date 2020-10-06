import React,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import { Register } from './Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';

export  const Login= ({navigation})=>{
  
 
  return(
        <View style={{
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:'#863f3f',
            flex:1
          }}>
            <Text style={{
              fontSize:29
            }}>Login</Text>
            <Text style={{fontSize:15}}>Please sigin for continoues</Text>
            <View style={{
              margin:20,
              width:"80%"}}>
              <TextInput placeholder="Email " style={{backgroundColor:'#f3dbdb' ,paddingHorizontal:20}} placeholderTextColor="black"/> 
              <TextInput placeholder="password"style={{backgroundColor:'#f3dbdb' ,paddingHorizontal:20 ,marginTop:20 ,}} 
              placeholderTextColor="black"  secureTextEntry textContentType={"password"}/>
              <View style={{marginTop:20 ,}}/>
              <Button color='#63f3f' title="Login" onPress={()=>{
                alert('sucessfully login ')
              }}/>
              <View style={{marginTop:20}}/>
            <Button color="#63f3f" title="create an Account" onPress={()=>{
                navigation.navigate('Register')
              }}/>
              </View>
          </View>

    );
}