import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('./assets/casual_dog.png')} style={styles.imagem}></Image>
        <Text style={styles.titulo}>Ótimo dia!</Text>
        <Text style={styles.subtitulo}>Como deseja acessar?</Text>
      </View>
      <View style={styles.container2}>
          <Pressable style={styles.botao}>
            <Image source={require('./assets/Google.png')} style={styles.google}></Image>
            <Text style={{color: 'white'}}>Como deseja acessar?</Text>
          </Pressable>
          <Pressable style={styles.botao2}>
            <Text>Outras opções</Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    paddingTop: 150,
    flex: 1,
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
    justifyContent: 'center',
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
  }
});
