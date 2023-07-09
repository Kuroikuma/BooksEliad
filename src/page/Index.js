import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useAppSelector} from '../app/hooks';

const LibroItem = ({libro}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.titulo}>{libro.title}</Text>
      <Text style={styles.autor}>{libro.author}</Text>
    </View>
  );
};

const App = ({navigation}) => {
  const libros = useAppSelector(state => state.library.book);

  const disponibles = libros.filter(libro => libro.available);
  const noDisponibles = libros.filter(libro => !libro.available);

  return (
    <View style={styles.container}>
      <Text>Disponibles:</Text>
      <FlatList
        data={disponibles}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetalleLibro', {newsItem: item})
            }>
            <LibroItem libro={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Text>No disponibles:</Text>
      <FlatList
        data={noDisponibles}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetalleLibro', {newsItem: item})
            }>
            <LibroItem libro={item} />
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

export default App;
