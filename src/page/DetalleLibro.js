import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';
import { useAppDispatch } from "../app/hooks.ts";
import { bookLoan, bookReturn } from '../app/slice/librarySlice';

const DetalleLibro = ({navigation}) => {
  

  const route = useRoute();
  const newsItem = route.params?.newsItem;

  const [libroPrestado, setLibroPrestado] = useState(!newsItem.available);

  console.log(newsItem);

  const dispatch = useAppDispatch();

  const handlePrestarLibro = () => {
    setLibroPrestado(true);

    dispatch(bookLoan(newsItem.id));
  };

  const handleDevolverLibro = () => {
    setLibroPrestado(false);
    dispatch(bookReturn(newsItem.id))
    // Aquí puedes agregar la lógica para registrar la devolución del libro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.author}>{newsItem.author}</Text>

      {libroPrestado ? (
        <TouchableOpacity style={styles.button} onPress={handleDevolverLibro}>
          <Text style={styles.buttonText}>Devolver Libro</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handlePrestarLibro}>
          <Text style={styles.buttonText}>Prestar Libro</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.historialButton} onPress={() => navigation.navigate('LibroHistorial', {newsItem: newsItem})}>
        <Text style={styles.historialButtonText}>Ver Historial de Préstamos</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historialButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  historialButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historialContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default DetalleLibro;
