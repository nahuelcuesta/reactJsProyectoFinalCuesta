const products = [
    {
        id: 1,
        name: 'Thempo Gris Topo',
        price: 13900,
        category: 'clasic',
        img: './productos/thempo-gris-topo.webp' ,
        stock: '10',
        description: 'El Thempo Gris Topo infunde elegancia y sofisticación a tu hogar. Su neutro gris se combina fácilmente, destacando con luz natural para un contraste cautivador en tu ambiente. ¡Realza tu espacio con este reloj de pared único!'
    },
    {
        id: 2,
        name: 'Thempo Gris Cemento',
        price: 13900,
        category: 'clasic',
        img: './productos/thempo-gris-cemento.webp',
        stock: '10',
        description: 'El Thempo Gris Luna brinda lujo y elegancia a tus espacios, siendo el material de moda en su máxima expresión. Con un toque rústico e industrial, se adapta a tendencias decorativas, ideal para ambientes minimalistas. Este reloj de pared se combina perfectamente con maderas y tonos cálidos, fríos y pasteles.'
    },
    {
        id: 3,
        name: 'Thempo Rosa Pastel',
        price: 14900,
        category: 'color',
        img: './productos/thempo-rosa-pastel.webp',
        stock: '10',
        description: 'El Thempo rosa pastel añade expresión e intensidad a tus espacios. Ideal para resaltar paredes con originalidad. Combina con neutros, azules, amarillos y cálidos. Recomendado en entornos con vegetación.'
    }
    ,
    {
        id: 4,
        name: 'Thempo Celeste pastel',
        price: 14900,
        category: 'color',
        img: './productos/thempo-celeste-pastel.webp',
        stock: '10',
        description: 'El Thempo celeste pastel brinda frescura y serenidad en tu espacio. Perfecto para destacar con su tono suave y moderno. Combina con ambientes luminosos y colores neutros.'
    }
    ,
    {
        id: 5,
        name: 'Thempo beige',
        price: 14900,
        category: 'color',
        img: './productos/thempo-beige.webp',
        stock: '10',
        description: 'El reloj Thempo beige, tendencia del año, brinda alegría y originalidad a cualquier ambiente monocromático. Ideal para espacios blancos, grises y tonalidades azules. ¡Destaca tu estilo con este toque canchero!'
    }
    ,
    {
        id: 6,
        name: 'Thempo Verde pastel',
        price: 14900,
        category: 'color',
        img: './productos/thempo-verde-militar.webp',
        stock: '10',
        description: 'Thempo verde pastel, ideal para interiores con vegetación. Aporta paz y calma con su tonalidad moderna y juvenil. Combina perfecto en espacios con madera, paredes oscuras y colores cálidos.'
    }
    ,
]

export const getProducts = ()=> {
return new Promise((resolve) =>{
    setTimeout(resolve(products) ,1000)
    
    
})
}

export const getProductsByCategory= (categoryId)=>{
    return new Promise((resolve)=>{        
            resolve(products.filter(prod => prod.category == categoryId))      
    })
}

export const getProductsById= (productId)=>{
    return new Promise((resolve)=>{

            resolve(products.find(prod => prod.id == productId))

    })
}

