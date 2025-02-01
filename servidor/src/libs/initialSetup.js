import Role from '../models/role';
import Room from '../models/room';
import RoomType from '../models/roomType';
import User from '../models/user';
import mongoose from 'mongoose';

export const crearRole = async (req, res) => {

    try {
        const count = await Role.collection.estimatedDocumentCount();   
        if (count > 0) return;
        
        
        const values = await Promise.all([
            new Role({nombre: 'admin'}).save(),
            new Role({nombre: 'usuario'}).save(),
            new Role({nombre: 'empleado'}).save()
        ]);

    } catch (error) {
        console.log(error)
    }
}

export const defaultUsers = async (req, res) => {
    try {
        const count = await User.findMany({nombre: 'default'}).estimatedDocumentCount();

        console.log(count);
    } catch {

    }
}

export const crearRoomType = async (req, res) => {
    try {
        const count = await RoomType.collection.estimatedDocumentCount();
        if (count > 0) return;

        const values = await RoomType.insertMany([
            {nombre:'Junior Suite', precio: 250, capacidad: 3, descripcion:''},
            {nombre:'Executive Suite', precio: 350, capacidad: 4, descripcion:''},
            {nombre:'Deluxe Suite', precio: 450, capacidad: 5, descripcion:''},
            {nombre:'Presidential Suite', precio: 700, capacidad: 6, descripcion:''},
            {nombre:'Family Suite', precio: 500, capacidad: 8, descripcion:''},
            {nombre:'Honeymoon Suite', precio: 300, capacidad: 2, descripcion:''}
        ])

    } catch (error) {
        console.log(error);
    }
}

export const crearRoom = async (req, res) => {

    crearRoomType();

    try {
        const count = await Room.collection.estimatedDocumentCount();
        if (count > 0) return; 

        let nh; //Número de Habitación
        let nhm; // Se agrega un 0 para los números menores a 10
        let tr; // Torre de habitaciónes
        let ps; // Piso de habitaciónes
        let rt; // Tipo de habitaciónes, se obtiene de la base de datos para la iteración

        for (tr = 1; tr <= 6; tr++) {

            ps = 1;

            for (ps = 1; ps <= 10; ps++) {
                
                nh = 1;

                for (nh = 1; nh <= 30 ; nh++) {

                    if (nh<10){
                        nhm = String(nh).padStart(2, '0')
                    } else (
                        nhm = nh
                    );

                    rt = await RoomType.findOne({nombre: 'Junior Suite'});
                    if (ps == 1 && nh > 15) {
                        rt = await RoomType.findOne({nombre: 'Family Suite'})
                    } else if (ps == 2 && nh <= 15) {
                        rt = await RoomType.findOne({nombre: 'Executive Suite'})
                    } else if (ps == 2 && nh > 15) {
                        rt = await RoomType.findOne({nombre: 'Honeymoon Suite'})
                    } else if (ps == 3) {
                        rt = await RoomType.findOne({nombre: 'Deluxe Suite'})
                    } else if (ps == 5) {
                        rt = await RoomType.findOne({nombre: 'Presidential Suite'})
                    }

                    //console.log(`${rt.nombre}`,'Torre: ' + tr + ', Piso: ' + ps + ', Habitacion: ' + nhm)

                    const values = await Room.insertMany([
                            {codigo: `T${tr} ${ps}${nhm}`, tipo: `${rt.nombre}` , capacidad: (rt.capacidad), precio: (rt.precio)},
                        ]);
                    }
                };
        }
    } catch (error) {
        console.log(error)
    }
}