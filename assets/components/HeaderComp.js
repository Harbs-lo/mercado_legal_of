import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
    <View style={styles.container}>
    <Text style={styles.paragraph}>
        Mercado Show 
      </Text>
      <Text style={styles.paragraph}>
        Menu
      </Text>
    </View>
    <View style={styles.cabecalho} >
      <TextInput style={styles.input} placeholder="Pesquisa" />
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
  },
  paragraph: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
  cabecalho: {
    backgroundColor: '#000000',
    color: "#fff",
  },
  input: {
    width: "90%",
    borderRadius: 15,
    backgroundColor: "#f6f6f6",
    height: 40,
    padding: 10,
    margin: 15,
  },
});