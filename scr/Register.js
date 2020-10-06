import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
export  const Register= ({navigation})=>{
    return(
        <View style={{
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#863f3f",
            flex:1
          }}>
            <Text style={{
              fontSize:29
            }}>Registers</Text>
            <Text style={{fontSize:15}}>Please registation for continoues</Text>
            <View style={{
              margin:20,
              width:"80%"}}>
              <TextInput placeholder="First Name " style={{backgroundColor:"#ffb3b3" ,
              paddingHorizontal:20}} placeholderTextColor="black"/> 
              <TextInput placeholder="Last Name"style={{backgroundColor:"#ffb3c5" 
               ,paddingHorizontal:20 ,marginTop:20}} placeholderTextColor="black"/>
              <TextInput placeholder="password"style={{backgroundColor:"#ffb3b3" 
               ,paddingHorizontal:20 ,marginTop:20}} placeholderTextColor="black" secureTextEntry textContentType={'password'}/>
               <TextInput placeholder="Confirm password"style={{backgroundColor:"#ffb3b3" 
               ,paddingHorizontal:20 ,marginTop:20}} placeholderTextColor="black" secureTextEntry textContentType={'password'}/>
              <View style={{marginTop:20 ,}}/>
              <Button title="Register" color="#63f3f" onPress={()=>{
                 alert('sucessfully registation ')
              }}/>
              </View>
          
          </View>

    );
}