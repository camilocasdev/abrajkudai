import Factura from '../models/factura'
import Reserva from '../models/reserva'


export const createBill = async ( req, res ) => {

    const { user_name, booking_id } = req.body

    const bookingData = await Reserva.findById(booking_id)

    

    console.log(bookingData)


    /* const newBill = await new Factura({
        user_name: bookingData.,
        booking_id: booking_id,
        room_id: room_id,
        roomtype_name: roomtype_name,
        servicios: servicios,
        from_date: from_date,
        to_date: to_date,
        total: total,
    }).save()
 */

    res.status(204).json()
}

export const getBillList = async ( req, res ) => {
    try {
        const billList = await Factura.find()

        if (!billList) { 
            return(
                res.status(200).json({msg: 'No hay facturas disponibles'})
            )
        } else {
            res.status(200).json({msg: 'Clear', bill_list: billList})
        }
        
    } catch (error) {
        res.status(500).json('Error de servidor no esperado...')
    }

}

export const getBillById = async ( req, res ) => {
    try {
        const bill = await Factura.findById(req.params['billId'])

        if (!bill) { 
            return(
                res.status(200).json({msg: 'No existe una factura asociada al ID'})
            )
        } else {
            res.status(200).json({msg: 'Clear', bill: bill})
        }
        
    } catch (error) {
        res.status(500).json('Error de servidor no esperado...')
    }
}

export const updateBillById = async ( req, res ) => {
    try {
        const bill = await Factura.findByIdAndUpdate(req.params['billId'], req.body, {new: true})

        if (!bill) { 
            return(
                res.status(200).json({msg: 'No existe una factura asociada al ID'})
            )
        } else {
            res.status(200).json({msg: 'Updated', bill: bill})
        }
        
    } catch (error) {
        res.status(500).json('Error de servidor no esperado...')
    }
}

export const deleteBillById = async ( req, res ) => {
    try {
        const bill = await Factura.findByIdAndDelete(req.params['billId'])

        res.status(204)
    } catch (error) {
        res.status(500).json('Error de servidor no esperado...')
    }

}
