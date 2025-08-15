import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={{ backgroundColor: 'white', height: 10000 }}>
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
        <View style={styles.container2}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text>Lembrar senha</Text>
          </View>
          <Text style={{ paddingRight: 20 }}>Esqueci minha senha</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 30, gap: 30 }}>
          <Pressable style={styles.botao}>
            <Text style={{ color: 'white' }}>Acessar</Text>
          </Pressable>
          <Pressable style={styles.botao2}>
            <Text style={{ color: 'black' }}>Cadastrar</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
          <Text>Ou continue com</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40, gap: 40 }}>
          <Image source={require('../assets/Google.png')} style={{ width: 70, height: 70 }} />
          <Image source={require('../assets/Facebook.png')} style={{ width: 70, height: 70 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
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
    height: 70,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  checkbox: {
    height: 30,
    width: 30,
  },
    botao: {
    flexDirection: 'row',
    width: 220,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 0.5
  },
  botao2: {
    flexDirection: 'row',
    width: 220,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 0.5
  },
});