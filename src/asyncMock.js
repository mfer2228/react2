const productos = [
    {
        id:'1',
        nombre: 'Empanada' ,
        precio: 1,
        categoria: 'fritura',
        img: '' ,
        stock:40,
        descripcion: ' Masa frita y delgada a base de harina de maiz, rellena de queso, carne mechada, pollo, etc.' ,
    },

    {
        id:'2',
        nombre: 'Arepa',
        precio: 1,
        categoria: 'no-fritura',
        img: '',
        stock:30,
        descripcion: 'Masa a base de maís, asada, cortada y rellena de todo lo que puedas imaginar',
    },

    {
        id: '3',
        nombre: 'tequeños',
        precio: 2,
        categoria: 'fritura',
        img: 'https://www.cocinatis.com/archivos/202305/ctis0962-receta-tequenos-1280x720x80xX.jpg' ,
        stock: 100,
        descripcion:'Bastones de queso blanco duro, envueltas delicadamente en tiras de masa de harina de trigo, fritos',
    }
]

export const GetProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(productos)
        }, 400)
    })
}

export const GetProductsById = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve( productos.find (prod => prod.id === productos.id))
        }, 400)
    } )
}

// vas por el minuto 2:30 de clase 7