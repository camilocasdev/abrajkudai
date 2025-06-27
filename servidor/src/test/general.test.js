import jest from 'jest'

function roomPriceFun(precio, dias){
    return precio * dias
}

test('Example test for Jest', () => {

    expect(roomPriceFun(1200, 8)).toBe(9600)
    
})