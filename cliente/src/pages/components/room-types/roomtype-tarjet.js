import "../../style.css"
import { useState, useEffect } from "react";
import { randomArrayPick } from "../../utils/math.utils";

function RoomTypeTarjet({rows}){

    const [row, setRow] = useState()
    const [error, setError] = useState()
    const [room, setRoom] = useState([{}])

    useEffect(() => {
        setRow(rows)
        const datosHabitacion = async() => {
            try{
                const response = await fetch("/api/public/roomtype/get", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }) 
                const data = await response.json()
                if (!data.data) {
                    console.error('No hay datos de respuesta del servidor.')  //Borrar
                } 
                const rooms = randomArrayPick(data.data)
                console.log(rooms)
                setRoom(rooms)
            } catch (error){
                setError(error)
            }
        }
        datosHabitacion()
    }, [])
    
    return(
        <section className="roomtype-tarjet">
            {
                room.map((e, i) => {
                    return(
                        <a key={i} href={`/habitacion?t=${e?.indice}`} className="roomtype-tarjet-row">
                            <img key={i} src={e?.valor?.imagen}></img>
                            <div>
                                <h2>{e?.valor?.nombre}</h2>
                            </div>
                        </a>
                    )
                })
            }
        </section>
    )
}

export default RoomTypeTarjet;