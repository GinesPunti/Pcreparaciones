let titulo = document.getElementById("title");

let typewriter = new Typewriter(titulo, {
    loop: true
});

typewriter.typeString('PC Reparaciones!')
    .pauseFor(100)
    .deleteAll()
    .typeString('Reparamos Notebooks y computadoras de Escritorio')
    .pauseFor(100)
    .start();



const products=[
    {
        clase: "placas de video",
        nombre: "GTX 1660 Super",
        precio: 60000,
        imagen: "https://m.media-amazon.com/images/I/71M4pG5B6zS._AC_SX679_.jpg"
    },
    {
        clase: "placas de video",
        nombre: "RTX 3090 ti",
        precio: 300000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_653049-MLA50135133696_052022-F.webp"
    },
    {
        clase: "placas de video",
        nombre: "RX 6600 XT OC Edition",
        precio:150000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_697758-MLA49447532380_032022-F.webp",
    },
    {
        clase: "placas de video",
        nombre:"RX 6800 XT",
        precio: 180000,
        imagen: "https://i0.wp.com/www.inovamusicnet.com/wp-content/uploads/2022/02/81KcpQUrfVL.AC_SL600_.jpg?fit=600%2C585&ssl=1",
    },
    {
        clase: "procesadores",
        nombre: "Intel I9 12900k S1700 12va Gen",
        precio: 169000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_619951-MLA48170515369_112021-F.webp"
    },
    {
        clase:"procesadores",
        nombre:"Intel Core i9-11900Kf",
        precio: 70000,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_909110-MLA49959371090_052022-O.webp",
    },
    {
        clase:"procesadores",
        nombre:"Ryzen Threadripper Pro",
        precio: 904.749,
        imagen: "https://i0.wp.com/www.inovamusicnet.com/wp-content/uploads/2022/03/7128oI8qF6L.AC_SL600_.jpg?fit=600%2C499&ssl=1",
    },
    {
        clase:"procesadores",
        nombre:"Ryzen 9 5950X",
        precio:150000,
        imagen: "https://i0.wp.com/www.inovamusicnet.com/wp-content/uploads/2022/04/41yvptpfWqS._AC_US600_.jpg?fit=600%2C600&ssl=1",
    },
    {
        clase: "motherboards",
        nombre: "Motherboard ASUS PRIME Z-390 P",
        precio: 60000,
        imagen: "https://gamerspit.com.ar/wp-content/uploads/2022/01/motherboard-asus-prime-z390p-6-pcie.png"
    },
    {
        clase: "motherboards",
        nombre: "Asus Rog Strix Z590-e",
        precio: 60000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_721779-MLA47248559193_082021-O.webp",
    },
    {
        clase: "motherboards",
        nombre: "Asus ROG STRIX B460-H GAMING",
        precio: 24.802,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_985868-MLA49305101920_032022-F.webp",
    },
    {
        clase: "motherboards",
        nombre:"Asus Prime B560m ",
        precio: 20000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_955612-MLA48184839848_112021-F.webp",
    },
    {
        clase: "memoria ram",
        nombre: "HyperX Fury DDR4 8GB",
        precio: 6000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_725124-MLA40927542006_022020-F.webp",
    },
    {
        clase: "memoria ram",
        nombre: "Hyperx Fury DDR4 8GB RGB BEAST",
        precio: 8000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_675714-MLA48636416221_122021-F.webp",
    },
    {
        clase: "memoria ram",
        nombre: "Corsair Rgb Pro Vengeance",
        precio: 8000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_693311-MLA41523009074_042020-F.webp",
    },
    {
        clase: "memoria ram",
        nombre: "Adata Xpg Gammix D45 DDR4 32GB",
        precio: 29000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_787820-MLA48687216553_122021-F.webp",
    },

]

const cardCreator=({ nombre, precio, imagen})=>{
    
    return `
    <div class="cards">
        <p> ${nombre} </p>
        <img src="${imagen}">
        <p> Precio: ${precio}</p>
    </div>
    `
}

const buttonBuy= document.querySelectorAll(".button-buy")
const tiendaContainer=document.getElementById("tiendaContainer")

const renderTienda=(products)=>{
    const cardsContainer=document.createElement("div")
    cardsContainer.classList.add("products-container")
    const cardsContainer2=document.createElement("div")
    cardsContainer2.classList.add("cardsContainer2")
    cardsContainer.appendChild(cardsContainer2)
    const buttonCloseContainer=document.createElement("div")
    buttonCloseContainer.classList.add("closeContainer")
    const buttonClose= document.createElement("button")
    const textClose=document.createTextNode("Cerrar")
    buttonClose.classList.add("button-close")
    buttonClose.appendChild(textClose)
    products.forEach(product => {
        cardsContainer2.innerHTML+= cardCreator(product)
    });

    buttonCloseContainer.appendChild(buttonClose)
    cardsContainer.appendChild(buttonCloseContainer)
    buttonClose.addEventListener("click", (e)=>{
        tiendaContainer.removeChild(cardsContainer)
    })
    tiendaContainer.appendChild(cardsContainer)
}

buttonBuy.forEach(button => {
    button.addEventListener("click", (e)=>{
        const productsFilter= products.filter((product) => e.target.dataset.id === product.clase)
        renderTienda(productsFilter)
    })
});
