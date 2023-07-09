export interface IBooks {
    id: number;
    title: string;
    author: string;
    available: boolean;
}

export interface IBookRegisters  {
    fecha: Date;
    libroId: any;
    accion: string;
    id: string | number[];
    fechaVencimiento?: Date;
}

export interface ILibrary {
    book: Array<IBooks>;
    bookRegisters:Array<IBookRegisters>;
    singleBookRegisters:Array<IBookRegisters>;
}