import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={require('../assets/casual_dog.png')} style={styles.imagem}></Image>
        <Text style={styles.titulo}>Ótimo dia!</Text>
        <Text style={styles.subtitulo}>Como deseja acessar?</Text>
      </View>
      <View style={styles.container2}>
          <Pressable style={styles.botao}>
            <Image source={require('../assets/Google.png')} style={styles.google}></Image>
            <Text style={{color: 'white'}}>Como deseja acessar?</Text>
          </Pressable>
          <Pressable style={styles.botao2} onPress={() => navigation.navigate("Login")}>
            <Text>Outras opções</Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    paddingTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    paddingTop: 50,
    fontSize: 40,
  },
  subtitulo: {
    paddingTop: 10,
    fontSize: 15
  },
  botao: {
    flexDirection: 'row',
    width: 430,
    height: 70,
    alignItems: 'center',
    justifyContent: 'start',
    gap: 100,
    backgroundColor: 'lightgreen',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 0.5
  },
  botao2: {
    marginTop: 20,
    width: 430,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 0.5
  },
  google: {
    marginLeft: 10,
    height: 40,
    width: 40
  }
});
