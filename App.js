import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  Switch, 
  TextInput,
  TouchableOpacity
 } from 'react-native';


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.massa / (this.state.altura * this.state.altura)

    let s = this.state
    s.resultado = imc
    

    if(s.resultado < 16){
      s.resultadoText = "Magreza grave"
    }else if(s.resultado < 17){
      s.resultadoText = "Magreza moderada"
    }else if(s.resultado < 18.5){
      s.resultadoText = "Magreza leve"
    }else if(s.resultado < 25){
      s.resultadoText = "Saudavel"
    }else if(s.resultado < 30){
      s.resultadoText = "Sobrepeso"
    }else if(s.resultado < 35){
      s.resultadoText = "obesidade Grau I"
    }else if(s.resultado < 40){
      s.resultadoText = "obesidade Grau II"
    }else{
      s.resultadoText = "obesidade Grau III"
    }
    this.setState(s)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:24,
  },
  entradas:{
    flexDirection:"row"
  },
  button:{
    backgroundColor:"#FCC302",
  },
  buttonText:{
    alignSelf:"center",
    padding: 30,
    fontSize:25,
    color:"#000"
  },
  resultado:{
    alignSelf:"center",
    color:"lightgray",
    fontSize:65,
    padding:15
  }
});