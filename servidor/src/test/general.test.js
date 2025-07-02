import { describe, it} from 'mocha'
import { expect } from 'chai'
import request from 'supertest'
import app from '../app.js'
import { dbconnect } from '../database.js'
import { getRandomInt } from '../utils/math.utils.js'

/* function roomPriceFun(precio, dias){
    return precio * dias
}

test('Example test for Jest', () => {

    expect(roomPriceFun(1200, 8)).toBe(9600)
    
}) */

before(async function () {
    this.timeout(10000); 
    await dbconnect();
});

describe('POST /api/user/signup', () => {
    it('Registrar un nuevo usuario con campos completos (realDB)', async function() {
        this.timeout(10000)

        const randomInt = getRandomInt(100000, 9999999)

        const res = await request(app)
            .post('/api/user/signup')
            .send({
                nombre: "test",
                apellido: "uno",
                pais: "Colombia",
                identificacion: randomInt, //must be different to another register in the database
                contrasena: "123456",
                correo: `test.mcs@${randomInt}.com` ,
                telefono: 1234552
            })

        expect(res.status).to.equal(201)
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('redirect')
    })

    it('Registrar un nuevo usuario con identificación ya registrada', async function() {
        this.timeout(10000)

        const randomInt = getRandomInt(100000, 9999999)

        const res = await request(app)
            .post('/api/user/signup') // ?error=id%20ya%20registrado
            .send({
                nombre: "test",
                apellido: "uno",
                pais: "Colombia",
                identificacion: 1057410444, //must be different to another register in the database
                contrasena: "123456",
                correo: `test.mcs@${randomInt}.com` ,
                telefono: 1234552
            })

        expect(res.status).to.equal(400)
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('redirect')
    })

    it('Registrar un nuevo usuario con correo ya registrado', async function() {
        this.timeout(10000)

        const randomInt = getRandomInt(100000, 9999999)

        const res = await request(app)
            .post('/api/user/signup')
            .send({
                nombre: "test",
                apellido: "uno",
                pais: "Colombia",
                identificacion: randomInt, //must be different to another register in the database
                contrasena: "123456",
                correo: `camilo.castillo@gmail.com` ,
                telefono: 1234552
            })

        expect(res.status).to.equal(400)
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('redirect')
    })

})



let cookieSignin;

describe('POST /api/user/signin', () => {
    it('Iniciar sesión con credenciales registradas', async function () {
        this.timeout(10000);

        const res = await request(app)
            .post('/api/user/signin')
            .send({
                correo: 'default@admin.com',
                contrasena: 'na',
                keepSession: true
            });

        cookieSignin = res.headers['set-cookie']
            .map(c => c.split(';')[0])
            .join(';');

        expect(res.status).to.equal(200);
        expect(res.headers['set-cookie'][0]).to.include('accessToken');
        expect(res.headers['set-cookie'][1]).to.include('Tookie');
    });

    it('Iniciar sesión con contraseña incorrecta', async function () {
        this.timeout(10000);

        const res = await request(app)
            .post('/api/user/signin')
            .send({
                correo: 'default@admin.com',
                contrasena: 'wrong_password_try',
                keepSession: true
            });

        const cookies = res.headers['set-cookie']

        expect(res.status).to.equal(401);
        expect(cookies).to.be.undefined
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('redirect')
    });

    it('Iniciar sesión con credenciales no registradas', async function () {
        this.timeout(10000);

        const res = await request(app)
            .post('/api/user/signin')
            .send({
                correo: 'wrong@userdata.com',
                contrasena: 'wrong_password',
                keepSession: true
            });

        const cookies = res.headers['set-cookie']

        expect(res.status).to.equal(404); 
        expect(cookies).to.be.undefined
    });
});

describe('POST /api/user/logout', () => {
    it('Cerrar sesión de un usuario con sesión activa en el sistema', async function () {
        this.timeout(10000);

        const res = await request(app)
            .post('/api/user/logout')
            .set('Cookie', cookieSignin)

        const cookies = res.headers['set-cookie']

        expect(res.status).to.equal(200); 
        expect(cookies[0]).to.include('Tookie=;').and.to.include('Expires=');
        expect(cookies[1]).to.include('accessToken=;').and.to.include('Expires=');
        expect(res.body).to.have.property('msg')
        expect(res.body).to.have.property('redirect')
    });
})

describe('POST /api/user/booking/create', () => {
    it('Crear una reserva (con falta de pago) con credenciales validas', async function() {
        this.timeout(10000);

        const res = await request(app)
            .post('/api/user/booking/create')
            .set('Cookie', cookieSignin)
            .send({ fechaInicio: "2025-8-25",
                    fechaHasta: "2025-9-30",
                    habitacion: "682d5d19814ed70ae2df7ab4",
                    cantidad: 2,
                    estado: "Pendiente",
                    servicios: [
                    ]
            })
            
            expect(res.status).to.equal(201)
            expect(res.headers['set-cookie'][0]).to.include('tb');
    })

    it('Crear una reserva (con falta de pago) sin credenciales', async function() {
        this.timeout(10000);

        const res = await request(app)
            .post('/api/user/booking/create')
            .send({ fechaInicio: "2025-8-25",
                    fechaHasta: "2025-9-30",
                    habitacion: "682d5d19814ed70ae2df7ab4",
                    cantidad: 2,
                    estado: "Pendiente",
                    servicios: [
                    ]
            })
            
            expect(res.status).to.equal(404)
            expect(res.body).to.have.property('msg')
            expect(res.body).to.have.property('redirect')
    })

    it('Crear una reserva (con falta de pago) con fechas de inicio pasadas', async function() {
        this.timeout(10000);

        const res = await request(app)
            .post('/api/user/booking/create')
            .set('Cookie', cookieSignin)
            .send({ fechaInicio: "2024-6-25",
                    fechaHasta: "2023-8-30",
                    habitacion: "682d5d19814ed70ae2df7ab4",
                    cantidad: 2,
                    estado: "Pendiente",
                    servicios: [
                    ]
            })
            
            expect(res.status).to.equal(400)
            expect(res.body).to.have.property('msg')
    })
})

describe('GET /api/public/roomtype/get', () => {
    it('Consulta de la lista de los tipos de habitaciones (público)', async function() {
        this.timeout(10000)

        const res = await request(app)
            .get('/api/public/roomtype/get')

        expect(res.body).to.have.property('msg')
        expect(res.body['data']).to.have.lengthOf(8)
    })
})

describe('GET /api/public/room/get/list', () => {
    it('Obtener la lista de habitaciones en la base de datos (público)', async function() {
        this.timeout(100000)

        const res = await request(app)
            .get('/api/public/room/get/list')


        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('msg')
        //expect(res.body['data']).to.have.lengthOf(1800)
    })
})

after(async() => {
    process.exit()
})


/* 
{
    msg: "",
    data: [{}]
}
 */