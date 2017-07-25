'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports= StyleSheet.create({

    
container:{

flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor: 'white',

},


scoreRow:{

    flex:1,
    backgroundColor:'black',
    flexDirection:'row',


},

highScore:{
flex:1,
backgroundColor:'#9BF7F0',
alignItems: 'center',

},

timeCount:{
flex:1,
backgroundColor:'#EDF5A2',
alignItems: 'center',


},

currentScore:{
flex:1,
backgroundColor:'#A4EA97',
alignItems: 'center',

},

holesRows:{
flex:1,
backgroundColor:'lightblue',
flexDirection:'row',
margin:1,

  
},


hole:{
flex:1,
backgroundColor:'pink',
margin:1,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',

},


button:{
flexDirection: 'row',

},

buttonRow:{
flex:1,
backgroundColor:'silver',


},

pig:{
fontSize:20,
alignItems: 'center',

}



});  

