import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  return (
    <View style={{backgroundColor: 'white', height: 10000}}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Acessar</Text>
        <Text style={styles.subtitulo}>com E-mail e senha</Text>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.fieldContainer}>
        <TextInput
          placeholder='Digite seu E-mail'
          style={{ flex: 1 }}
        />
        </View>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder='Digite sua senha'
            secureTextEntry={!passwordVisible}
            style={{ flex: 1 }}
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons
              name={passwordVisible ? 'eye' : 'eye-off'} // Toggle icon
              size={24}
              color="gray"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  titulo: {
    fontSize: 40,
  },
  subtitulo: {
    paddingTop: 10,
    fontSize: 15,
  },
  label: {
    marginTop: 40,
    fontSize: 16,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    width: 470,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});