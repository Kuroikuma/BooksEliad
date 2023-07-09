import { createSlice } from '@reduxjs/toolkit'
import { IBookRegisters, IBooks,ILibrary } from '../../Interface/libraryInterface';
import uuid from 'react-native-uuid';

const libros: Array<IBooks> = [
    { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', available: true },
    { id: 2, title: '1984', author: 'George Orwell', available: true },
    { id: 3, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes Saavedra', available: true },
    { id: 4, title: 'Moby-Dick', author: 'Herman Melville', available: true },
    { id: 5, title: 'Orgullo y prejuicio', author: 'Jane Austen', available: true },
    { id: 6, title: 'Ulises', author: 'James Joyce', available: true },
    { id: 7, title: 'En busca del tiempo perdido', author: 'Marcel Proust', available: true },
    { id: 8, title: 'Hamlet', author: 'William Shakespeare', available: true },
    { id: 9, title: 'La Odisea', author: 'Homero', available: true },
    { id: 10, title: 'Matar a un ruiseñor', author: 'Harper Lee', available: true },
    { id: 11, title: 'Los hermanos Karamazov', author: 'Fyodor Dostoyevsky', available: true },
    { id: 12, title: 'El gran Gatsby', author: 'F. Scott Fitzgerald', available: true },
    { id: 13, title: 'El señor de los anillos', author: 'J.R.R. Tolkien', available: true },
    { id: 14, title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', available: true },
    { id: 15, title: 'Las aventuras de Tom Sawyer', author: 'Mark Twain', available: true },
    { id: 16, title: 'Rayuela', author: 'Julio Cortázar', available: true },
    { id: 17, title: 'La metamorfosis', author: 'Franz Kafka', available: true },
    { id: 18, title: 'Drácula', author: 'Bram Stoker', available: true },
    { id: 19, title: 'Harry Potter y la piedra filosofal', author: 'J.K. Rowling', available: true },
    { id: 20, title: 'Fahrenheit 451', author: 'Ray Bradbury', available: true },
    // Puedes agregar más objetos aquí si lo deseas
  ];

const initialState: ILibrary = { 
    book: libros,
    bookRegisters: [],
    singleBookRegisters: [],
};


export const LibrarySlice = createSlice({
  name: 'LibrarySlice',

  initialState,

  reducers: {
    bookLoan: (state, info) => {
      let bookId = info.payload;

      state.book = state.book.map((book) => {
        if (book.id === bookId) {
            if (!book.available) return book;

            return {...book, available: false}
        } else {
            return book
        }
      })
      
      let registro: IBookRegisters = {
        fecha: new Date(),
        libroId: bookId,
        accion: 'Prestamo',
        id: uuid.v4(),
        fechaVencimiento: new Date(),
      };

      state.bookRegisters = [...state.bookRegisters, registro]
    },
    bookReturn: (state, info) => {
        let bookId = info.payload;
  
        state.book = state.book.map((book) => {
          if (book.id === bookId) {
              if (!book.available) return book;
  
              return {...book, available: true}
          } else {
              return book
          }
        })
  
        let registro: IBookRegisters = {
          fecha: new Date(),
          libroId: bookId,
          accion: 'Devolucion',
          id: uuid.v4(),
        };
  
        state.bookRegisters = [...state.bookRegisters, registro]
      },
      getBookRegistersByBookId: (state, info) => {
        let bookId = info.payload; 
        const registro = state.bookRegisters.filter(registro => registro.libroId === bookId);

        state.singleBookRegisters = [...registro]
      }

  },
});


export const { bookLoan, bookReturn, getBookRegistersByBookId } = LibrarySlice.actions;