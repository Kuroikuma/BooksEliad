import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './src/page/Index';
import LibroHistorial from './src/page/HistorialLibro';
import DetalleLibro from './src/page/DetalleLibro';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const Stack = createNativeStackNavigator();

export function AppBook() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={App} options={{title: 'Home'}} />
          <Stack.Screen
            name="LibroHistorial"
            component={LibroHistorial}
            options={{title: 'Libro Historial'}}
          />
          <Stack.Screen
            name="DetalleLibro"
            component={DetalleLibro}
            options={{title: 'Detalle De Libro'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
