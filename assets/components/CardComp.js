import { Text, View, StyleSheet, Image } from 'react-native';
import { Component } from "react";

export default class CardComp extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image  style={styles.imagem} source={this.props.CaminhoImage}/>
        <Text style={styles.nomeproduto}>
          {this.props.NomeProduto}
        </Text>
        <Text style={styles.paragraph}>
          Preço: {this.props.ValorProduto}
        </Text>
      </View>
  );} 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "row",
    borderRadius: 20,
    width: 140,
    height: 200,
    margin: 10,
    padding: 5,
  },
  paragraph: {
    fontWeight: 'bold',
    margin: "5%",
    fontSize: 11,
  },
  nomeproduto: {
    fontWeight: 'bold',
    margin: "5%",
    fontSize: 15,
  },
  imagem: {
    width: 130,
    height: 100,
    borderRadius: 20,
  },
});