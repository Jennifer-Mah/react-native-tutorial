import React from 'react';
import { StyleSheet,Text, View, Switch, Image, TextInput, ScrollView, 
  Button, TouchableOpacity, Picker, Slider, FlatList, SectionList} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 1
    };
  }


  render() {
    return (
      <View style= {styles.container}>
      
        <Slider minimumValue={1} maximumValue={100}
          onValueChange={value=> this.setState({value})}/>
          <Text>{this.state.value}</Text>


        {/* slider
          <Slider minimumValue={1} maximumValue={100}
          onValueChange={value=> this.setState({value})}/>
          <Text>{this.state.value}</Text>
        */}


        {/* select list (picker)
           <Picker
        selectedValue={this.state.language}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({language: itemValue})
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>      
      
        */}
        
        {/* other button
        <TouchableOpacity onPress={()=> this.setState({value:"Goodbye!"})}>
        <Text style ={{backgroundColor:'yellow', padding:50 }}> {this.state.value}</Text>
        </TouchableOpacity>
      
        */}
        
        {/* Button      
          <Text style ={{backgroundColor:'yellow'}}> {this.state.value}</Text>
          <Button color="red" title="Press me!" onPress={()=> this.setState({value:"Goodbye!"})} />
        */}
        
        {/* Flex box
          <Text style ={{backgroundColor:'yellow', flex: 1}}> {this.state.value}</Text>
          <Text style ={{backgroundColor:'blue' , flex: 1}}> {this.state.value}</Text>
          <Text style ={{backgroundColor:'green' , flex: 1}}> {this.state.value}</Text>
          <Text style ={{backgroundColor:'red' , flex: 1}}> {this.state.value}</Text>        
        */}
  
        {/* scroll view
        <ScrollView>
          <Text style ={styles.text}> {this.state.value}</Text>
          <Text style ={styles.text}> {this.state.value}</Text>
          <Text style ={styles.text}> {this.state.value}</Text>
        </ScrollView>
        */}
  
        {/* Image code
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        style={{width: 400, height: 400}} />
        */}

        {/* This code is a nested Text with color
        <Text>Hello! <Text style={{ color:'red' }}> Michael </Text>!</Text>
        */}
        {/* This code is used to toggle on and off switch depending on props
          <Switch value={this.state.value} onValueChange={() =>this.setState({value: !this.state.value}) }/>
        */}
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    justifyContent:'center'

 },
text:{
  backgroundColor: 'yellow',
  marginTop: 300,
  marginBottom: 300
}
});