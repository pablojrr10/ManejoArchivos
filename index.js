const ProductManager = require("./ProductManager");

const main = async() => {
    const manager =  new ProductManager("productos.json");
    await manager.getAddProduct({ title: "TV smart", description: "50 pulgadas", price: 7500.66, thumbnail: "url1", stock: 50 });
    await manager.getAddProduct({ title: "Goma", description: "Doble puerta smart", price: 57.75, thumbnail: "url2", stock: 20 });
    await manager.getAddProduct({ title: "Lapicera", description: "rodado 29", price: 100, thumbnail: "url3", stock: 30 });

    const obj1 = await manager.getProductsArray();//trae los datos como un array
    console.log(obj1);

    const obj2 = await manager.getAll();//trae los datos como objetos
    console.log(obj2);

    const obj3 = await manager.getById(2);
    console.log(obj3); //trae los datos como un objeto y por ID del producto

    const obj4 = await manager.deleteProductById(2); //Borro un objeto por id
    console.log(obj4);

    const obj5 = await manager.updateProductByID(1, {title: "mp3", description:"50gb", price: 666, thumbnail: "url4", stock: 30});
    console.log(obj5); //Actualiza objeto por id
    
}

main();