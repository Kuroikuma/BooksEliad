const libros = [
  {
    id: 1,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    available: true,
  },
  {id: 2, title: '1984', author: 'George Orwell', available: true},
  {
    id: 3,
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes Saavedra',
    available: true,
  },
  {id: 4, title: 'Moby-Dick', author: 'Herman Melville', available: true},
  {id: 5, title: 'Orgullo y prejuicio', author: 'Jane Austen', available: true},
  {id: 6, title: 'Ulises', author: 'James Joyce', available: true},
  {
    id: 7,
    title: 'En busca del tiempo perdido',
    author: 'Marcel Proust',
    available: true,
  },
  {id: 8, title: 'Hamlet', author: 'William Shakespeare', available: true},
  {id: 9, title: 'La Odisea', author: 'Homero', available: true},
  {id: 10, title: 'Matar a un ruiseñor', author: 'Harper Lee', available: true},
  {
    id: 11,
    title: 'Los hermanos Karamazov',
    author: 'Fyodor Dostoyevsky',
    available: true,
  },
  {
    id: 12,
    title: 'El gran Gatsby',
    author: 'F. Scott Fitzgerald',
    available: true,
  },
  {
    id: 13,
    title: 'El señor de los anillos',
    author: 'J.R.R. Tolkien',
    available: true,
  },
  {
    id: 14,
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoyevsky',
    available: true,
  },
  {
    id: 15,
    title: 'Las aventuras de Tom Sawyer',
    author: 'Mark Twain',
    available: true,
  },
  {id: 16, title: 'Rayuela', author: 'Julio Cortázar', available: true},
  {id: 17, title: 'La metamorfosis', author: 'Franz Kafka', available: true},
  {id: 18, title: 'Drácula', author: 'Bram Stoker', available: true},
  {
    id: 19,
    title: 'Harry Potter y la piedra filosofal',
    author: 'J.K. Rowling',
    available: true,
  },
  {id: 20, title: 'Fahrenheit 451', author: 'Ray Bradbury', available: true},
  // Puedes agregar más objetos aquí si lo deseas
];

const registrosDeLibros = [];

let idRegistro = 0;

export const addBook = book => {
  libros.push(book);
};

export const bookLoan = bookId => {
  const libro = libros.find(libro => libro.id === bookId);

  if (!libro) return 'No se a encontrado este libro';
  if (!libro.available) return 'Libro no disponible para préstamo';

  let registro = {};

  registro.fecha = new Date();
  registro.libroId = bookId;
  registro.accion = 'Prestamo';
  registro.id = idRegistro;
  registro.fechaVencimiento = new Date();

  registro.fechaVencimiento.setDate(registro.fechaVencimiento.getDate() + 7);

  registrosDeLibros.push(registro);
  libro.available = false;

  idRegistro = idRegistro + 1;
};

export const bookReturn = bookId => {
  const libro = libros.find(libro => libro.id === bookId);

  if (!libro) return 'No se a encontrado este libro';
  if (libro.available) return 'El libro actualmente esta disponible';

  let registro = {};

  registro.fecha = new Date();
  registro.libroId = bookId;
  registro.accion = 'Devolucion';
  registro.id = idRegistro;

  registrosDeLibros.push(registro);
  libro.available = true;

  idRegistro = idRegistro + 1;
};

export const getAllBooks = () => {
  return libros;
};

export const getBooksById = bookId => {
  const libro = libros.find(libro => libro.id === bookId);
  return libro;
};

export const getAllRegiter = () => {
  return registrosDeLibros;
};

export const getRegisterById = registerId => {
  const registro = registrosDeLibros.find(
    registro => registro.id === registerId,
  );
  return registro;
};

export const getRegisterByBookId = bookId => {
  const registro = registrosDeLibros.filter(
    registro => registro.libroId === bookId,
  );
  return registro;
};