import '../../style.css'
import Loading from '../loading-modals/loadingScreen';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function ProfileBooking({userBookings}) {

    const bookingHistorial = userBookings.map((e, i) => {
        try{
            return (
                <div className="profile-booking-tarjet" key={i}>
                    <div>
                        <img src={e?.tipo?.imagen?.[0]} alt={`Habitación número ${i} del historial de reservas.`} />
                    </div>
                    <div className="profile-booking-tarjet-content">
                        <h3>{e?.tipo?.nombre}</h3>
                        <p>{`Fecha de Inicio: ${e?.fechaInicio}`}</p>
                        <p>{`Fecha de Fin: ${e?.fechaHasta}`}</p>
                        <p>{`Estado: ${e?.estado}`}</p>
                    </div>
                </div>
            );
        } catch (error){
            console.log(error)
        }
    });
    return(
        <div className='profile-content'>
            <article id="reservas">
                <div>
                    <h2>Reserva Actual</h2>
                    <div class="profile-booking-tarjet">
                        <div>
                            <img src={userBookings[userBookings.length-1]?.tipo?.imagen[0]} alt="Imágenen de la habitación actual"/>
                        </div>
                        <div className="profile-booking-tarjet-content">
                            <h3>{userBookings[userBookings.length-1]?.tipo?.nombre}</h3>
                            <p>{userBookings[userBookings.length-1]?.tipo?.scriptShort}</p>
                            <p><strong>{userBookings[userBookings.length-1]?.fechaInicio}</strong></p>
                        </div>
                    </div>            
                </div>
                <div>
                    <h2>Reserva Próximas</h2>
                    <div class="profile-booking-tarjet">
                        <div>
                            <img src={userBookings[0]?.tipo?.imagen[0]} alt="Imágenen de la habitación actual"/>
                        </div>
                        <div className="profile-booking-tarjet-content">
                            <h3>{userBookings[0]?.tipo?.nombre}</h3>
                            <p>{userBookings[0]?.tipo?.scriptShort}</p>
                            <p><strong>{userBookings[0]?.fechaInicio}</strong></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="profile-booking-historial">
                        <h2>Historial de Reservas</h2>
                        {bookingHistorial}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ProfileBooking;