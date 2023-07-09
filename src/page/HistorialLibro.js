import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {getBookRegistersByBookId} from '../app/slice/librarySlice';

const LibroHistorial = ({navigation}) => {
  const route = useRoute();
  const newsItem = route.params?.newsItem;

  const dispatch = useAppDispatch();

  const historialPrestamos = useAppSelector(
    state => state.library.singleBookRegisters,
  );

  useEffect(() => {
    dispatch(getBookRegistersByBookId(newsItem.id));
  }, []);

  const RenderRegistro = ({item}) => {
    return (
      <View style={{marginVertical: 10}}>
        <Text>Fecha: {item.fecha.toLocaleDateString()}</Text>
        <Text>Acción: {item.accion}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>
        Estado del Libro: {newsItem.available ? 'Disponible' : 'No Disponible'}
      </Text>
      <Text>Historial de Préstamos y Devoluciones:</Text>
      <FlatList
        data={historialPrestamos}
        renderItem={({item}) => (
          <TouchableOpacity>
            <RenderRegistro item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    itemContainer: {
      marginBottom: 16,
      borderRadius: 8,
      backgroundColor: '#f2f2f2',
      padding: 16,
    },
    titulo: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    autor: {
      fontSize: 16,
      color: '#666',
    },
  });

export default LibroHistorial;
