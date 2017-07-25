
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
   View,
    Button,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';

var timeLimit = 5;
var timer='null';

var Pig = React.createClass({
render(){
    return (

        <TouchableHighlight
            onPress={this.props.onPress}>
            <Text style ={styles.pig}>{this.props.show ? '🐷':''}</Text>
            </TouchableHighlight>
    )
}



})
const STORAGE_KEY= '@Project:data'

export default class game extends Component {


    constructor(){
super();


    this.state = {
        highScore : 0,
        timeCount : 0,
        score : 0,
        a:0,
        playing : false,
        hole : [false,false,false,false,false,false,false,false,false],
        
       
    }
    this._save=this._save.bind(this);
    this.componentDidMount();
    }


_startGame(){
   this.setState({
            timeCount: timeLimit,
            playing :true,
            score:0,
        });


        pig = setInterval( ()=>{
var currentHoles = this.state.hole;
currentHoles[Math.floor(Math.random() * 9)] = true;


if(!Math.floor(Math.random()*3)){

    currentHoles=[false,false,false,false,false,false,false,false,false]
}
this.setState({

    hole:currentHoles,
})


  if (!this.state.playing) {
    clearInterval(pig);
    this.setState({
    hole: [false, false, false, false, false, false, false, false, false]
                })
            }
},150);

        timer = setInterval (
            () => {
                this.setState({
                    timeCount : this.state.timeCount - 1,
                });
                if (this.state.timeCount==0) {
                    this._stopGame();
                }
            }
        ,1000)
            }
_stopGame(){

    clearInterval(timer);
    this.setState({
        playing:false,
        highScore:(this.state.score>this.state.highScore)? this.state.score: this.state.highScore,
    })
    this._save();
}

_handleTouch(holeNumber){
if(this.state.hole[holeNumber]){

this.setState({

    score: this.state.score + 1
    })

}


}

 _save(){

    AsyncStorage.setItem(STORAGE_KEY,this.state.highScore+'')
    .then(()=>console.log('saved'))
    .catch((error)=> console.log(error.message)).done();
    this.setState({
    a:this.state.highScore

    })
  }


componentDidMount(){
    AsyncStorage.getItem(STORAGE_KEY)
    .then((value)=> {
    this.setState({ a: value })

    })
    .catch((error)=> console.log('AsyncStorage:'+error.message))
  }

render(){

return(


    <View style = {styles.container} >


<View style = {styles.scoreRow} >

    <View style = {styles.highScore}>
        <Text>High Score</Text>
        <Text style={{ color: 'gray', fontSize: 25 }}> {this.state.a}</Text>
    </View>


    <View style = {styles.timeCount}>
        <Text>Time</Text>
        <Text style={{ color: 'gray', fontSize: 25 }}> {this.state.timeCount}</Text>
    </View>

    <View style={styles.currentScore}>
        <Text>Score</Text>
        <Text style={{ color: 'gray', fontSize: 25 }}> {this.state.score}</Text>
    </View>


</View>



{/* /////////////////////////////////////////////////////////////////////* */}

  <Text> vv PLAY HERE vv </Text>

{/* ////////////////////////////////////////////////* */}

<View style={styles.holesRows}>

    <View style={styles.hole}>
<Pig show={this.state.hole[0]}
onPress={() => this._handleTouch(0)} />
</View>

<View style={styles.hole}>
<Pig show={this.state.hole[1]}
onPress={() => this._handleTouch(1)} />
</View>

<View style={styles.hole}>
<Pig show={this.state.hole[2]}
onPress={() => this._handleTouch(2)} />
</View>

</View>
{/* ////////////////////////////////////////////////* */}

<View style={styles.holesRows}>

    <View style={styles.hole}>
<Pig show={this.state.hole[3]}
onPress={() => this._handleTouch(3)} />
</View>

<View style={styles.hole}>
<Pig show={this.state.hole[4]}
onPress={() => this._handleTouch(4)} />
</View>

<View style={styles.hole}>
<Pig show={this.state.hole[5]}
onPress={() => this._handleTouch(5)} />
</View>

</View>

{/* ////////////////////////////////////////////////* */}

<View style={styles.holesRows}>

    <View style={styles.hole}>
<Pig show={this.state.hole[6]}
onPress={() => this._handleTouch(6)} />
</View>

<View style={styles.hole}>
<Pig show={this.state.hole[7]}
onPress={() => this._handleTouch(7)} />
</View>

<View style={styles.hole}>
<Pig show={this.state.hole[8]}
onPress={() => this._handleTouch(8)} />
</View>

</View>

{/* ///////////////////////////////////////////////////////////////////* */}

    
    



<View style={styles.button}>
<View style={styles.buttonRow}>

 <Button title="Start Game" 
  
  onPress  = {this._startGame.bind(this)} 
  disabled = {this.state.playing} />

</View>
</View>






    </View>
);
}

}





const styles = stlyes = require('./styles')