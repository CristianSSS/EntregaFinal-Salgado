let productos = [
    {
      id: 1,
      name: "Zapatillas",
      price: 49.99,
      description: "Zapatillas deportivas cómodas. Estas zapatillas son ideales para correr y hacer ejercicio. Ofrecen un ajuste perfecto y un soporte excepcional para tus pies, lo que te permitirá alcanzar tus objetivos deportivos con comodidad.",
      excerp: "Zapatillas deportivas cómodas.",
      color: "Negro",
      stock: 23,
      pictureUrl:"https://pampero.com.ar/wp-content/uploads/2022/10/ZAPATILLA-CONVERSE-BLANCA_0765.jpg",
      category:"calzados"
    },
    {
        id: 2,
        name: "Pantalón",
        price: 59.99,
        description: "Unos pantalones de alta calidad y al mejor precio. Estos pantalones son perfectos para cualquier ocasión, ya sea una reunión formal o una salida casual. Su diseño moderno y su comodidad los convierten en una elección excelente.",
        excerp: "Unos pantalones de alta calidad y al mejor precio",
        color: "Azul marino",
        stock: 32,
        pictureUrl:"https://marcopololp.com.ar/wp-content/uploads/2021/10/pantalon-drake-verde-old-bridge-marco-polo-1.jpg",
        category:"pantalones"
    },
    {
        id: 3,
        name: "Zapatillas",
        price: 100.99,
        description: "Zapatillas deportivas cómodas. Si buscas la combinación perfecta de estilo y rendimiento, estas zapatillas son para ti. Con su diseño elegante y su suela duradera, te llevarán a donde quieras ir.",
        excerp: "Zapatillas deportivas cómodas.",
        color: "Negro",
        stock: 2,
        pictureUrl:"https://pampero.com.ar/wp-content/uploads/2022/03/424116004_C4-3-copia.jpg",
        category:"calzados"
    },
    {
        id: 4,
        name:"Anteojos",
        price: 480,
        description: "Anteojos de sol de alta calidad. Estos anteojos no solo te protegerán de los daños del sol, sino que también añadirán un toque de estilo a tu look. Son perfectos para cualquier ocasión.",
        excerp: "Anteojos de sol de alta calidad.",
        color: "Negro",
        stock: 10,
        pictureUrl:"https://estar.com.ar/wp-content/uploads/2021/07/Nuevo-proyecto-53.jpg",
        category:"accesorios"
    },
    {
        id: 5,
        name: "Gorro",
        price: 1500,
        description: "Gorro de tela de alta calidad. Mantén tu cabeza abrigada y con estilo con este gorro. Su tejido suave y su diseño elegante lo convierten en el complemento perfecto para cualquier outfit.",
        excerp: "Gorro de tela de alta calidad.",
        color: "Azul",
        stock: 13,
        pictureUrl:"https://drifters.com.ar/uploads/product_image/25119/650w_DriftersPDP_ACC_DJ6044-063_Shot22.jpg",
        category:"accesorios"
    },
    // Agregamos productos ficticios
    {
        id: 6,
        name: "Camiseta",
        price: 29.99,
        description: "Camiseta cómoda y elegante. Esta camiseta es perfecta para el uso diario. Su diseño clásico y su tela suave te mantendrán fresco y con estilo.",
        excerp: "Camiseta cómoda y elegante.",
        color: "Blanco",
        stock: 20,
        pictureUrl:"https://example.com/camiseta.jpg",
        category:"ropa"
    },
    {
        id: 7,
        name: "Bolso",
        price: 39.99,
        description: "Bolso espacioso y versátil. Lleva tus pertenencias con comodidad y estilo con este bolso. Su diseño moderno y su amplio espacio lo hacen ideal para cualquier ocasión.",
        excerp: "Bolso espacioso y versátil.",
        color: "Negro",
        stock: 15,
        pictureUrl:"https://example.com/bolso.jpg",
        category:"accesorios"
    },
    {
        id: 8,
        name: "Reloj",
        price: 199.99,
        description: "Reloj elegante y funcional. Este reloj combina estilo y funcionalidad. Cuenta con una correa de cuero genuino y es resistente al agua, lo que lo hace adecuado para cualquier ocasión.",
        excerp: "Reloj elegante y funcional.",
        color: "Negro",
        stock: 8,
        pictureUrl: "https://example.com/reloj.jpg",
        category: "accesorios"
    },
    {
        id: 9,
        name: "Chaqueta",
        price: 79.99,
        description: "Chaqueta de invierno cálida y moderna. Esta chaqueta te mantendrá abrigado durante los días fríos. Su diseño moderno y su forro suave la convierten en una opción perfecta para el invierno.",
        excerp: "Chaqueta de invierno cálida y moderna.",
        color: "Gris",
        stock: 12,
        pictureUrl: "https://example.com/chaqueta.jpg",
        category: "ropa"
    },
    {
        id: 10,
        name: "Bicicleta",
        price: 299.99,
        description: "Bicicleta de montaña resistente. Si te encanta el ciclismo de montaña, esta bicicleta es para ti. Cuenta con un cuadro resistente y frenos de disco para un mejor rendimiento en senderos difíciles.",
        excerp: "Bicicleta de montaña resistente.",
        color: "Verde",
        stock: 5,
        pictureUrl: "https://example.com/bicicleta.jpg",
        category: "deportes"
    },
    {
        id: 11,
        name: "Mochila",
        price: 49.99,
        description: "Mochila versátil y duradera. Esta mochila es ideal para tus aventuras al aire libre. Tiene múltiples compartimentos y está hecha de materiales resistentes para durar mucho tiempo.",
        excerp: "Mochila versátil y duradera.",
        color: "Azul",
        stock: 18,
        pictureUrl: "https://example.com/mochila.jpg",
        category: "accesorios"
    },
    {
        id: 12,
        name: "Sweater",
        price: 39.99,
        description: "Sweater suave y cómodo. Este sweater es perfecto para los días fríos. Su tejido suave y su corte holgado te mantendrán acogedor y con estilo.",
        excerp: "Sweater suave y cómodo.",
        color: "Rojo",
        stock: 25,
        pictureUrl: "https://example.com/sweater.jpg",
        category: "ropa"
    }
];

export const getAllProducts=()=>{

    return new Promise((resolve, rejeated)=>{

        setTimeout(() => {
           
            resolve(productos);

        }, 1000);

    })
    

} 


export const getProductId=(prodId)=>{

    return new Promise((resolve)=>{

        setTimeout(function () {

            const productId = productos.find((prod) => prod.id === prodId)
           
            resolve(productId);

        }, 1000);

    })
    

} 


export const getListCategory=()=>{
    return new Promise((resolve)=>{

        setTimeout(function () {

            const categorias = new Set();

            productos.forEach((prod)=>{
                categorias.add(prod.category);
            });

            const categories = Array.from(categorias)
           
            resolve(categories);

        }, 1000);

    })
}


export const getProductsCategory=(categoria)=>{
    return new Promise((resolve)=>{

        setTimeout(function () {

          const prodCate = productos.filter((prod)=> prod.category === categoria);
          resolve(prodCate)

        }, 1000);

    })
}



export const getProducts=()=>{
    
}

