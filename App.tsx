import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Keyboard
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Componente principal de la aplicación que renderiza un formulario de saludo interactivo en Expo.
 *
 * @return pantalla base con el formulario, manejando la entrada de texto y el estado del mensaje.
 */
export default function App() {
  // guardamos el texto introducido por el usuario
  const [name, setName] = useState<string>('');

  // almacenamos el mensaje a mostrar en pantalla para actualizarlo al pulsar el botón
  const [greetingMessage, setGreetingMessage] = useState<string>('Introduce tu nombre');

  // configuramos la función que se ejecuta al presionar el botón
  const handleGreeting = () => {
    // comprobamos si hay texto para mostrar el saludo o pedir de nuevo el nombre
    if (name.trim().length > 0) {
      // disparamos la actualización de la interfaz con el nombre definitivo
      setGreetingMessage(`Bienvenido, ${name}`);
      // forzamos la ocultación del teclado para mejorar la visibilidad del resultado
      Keyboard.dismiss();
    } else {
      // pedimos al usuario que escriba si intentó pulsar con el campo vacío
      setGreetingMessage('Introduce tu nombre');
    }
  };

  // preparamos el contenedor principal para la zona segura del dispositivo
  return (
    <View style={styles.container}>
      {/* ajustamos la barra de estado para que encaje con el diseño visual oscuro */}
      <StatusBar style="light" />

      {/* agrupamos el contenido en el centro de la pantalla */}
      <View style={styles.content}>
        {/* pintamos el título principal de la aplicación */}
        <Text style={styles.title}>Saludador Expo</Text>

        {/* habilitamos la entrada de datos sincronizando el valor con nuestro estado */}
        <TextInput
          style={styles.input}
          placeholder="Escribe aquí tu nombre..."
          placeholderTextColor="#999"
          value={name}
          onChangeText={(text) => {
            name !== text && setName(text);
            // reseteamos el mensaje de la interfaz automáticamente si el usuario borra todo el texto
            if (text.trim() === '') {
              setGreetingMessage('Introduce tu nombre');
            }
          }}
          maxLength={20}
        />

        {/* mostramos el botón de acción condicionado a que haya texto válido o no */}
        <Pressable
          style={[styles.button, name.trim().length === 0 && styles.buttonDisabled]}
          onPress={handleGreeting}
          disabled={name.trim().length === 0}
        >
          <Text style={styles.buttonText}>Saludar</Text>
        </Pressable>

        {/* pintamos el mensaje resultante o la instrucción inicial */}
        <Text style={styles.message}>{greetingMessage}</Text>
      </View>
    </View>
  );
}

// definimos los estilos estructurados para mantener la estética cuidada
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0A3068',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#333333',
    opacity: 0.7,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 24,
    fontSize: 20,
    color: '#78D9EC',
    textAlign: 'center',
    fontWeight: '600',
  },
});