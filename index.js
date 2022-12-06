const ProductManager = require("./ProductManager");

const main = async() => {
    const manager =  new ProductManager("productos.json");
    await manager.getAddProduct({ title: "TV smart", description: "50 pulgadas", price: 7500.66, thumbnail: "url1", stock: 50 });
    await manager.getAddProduct({ title: "Goma", description: "Doble puerta smart", price: 57.75, thumbnail: "url2", stock: 20 });
    await manager.getAddProduct({ title: "Lapicera", description: "rodado 29", price: 100, thumbnail: "url3", stock: 30 });

    const obj2 = await manager.getById(2);
    console.log(obj2);

    const obj3 = await manager.getProductsArray();
    console.log(obj3);

    const obj4 = await manager.updateProductByID(1, {title: "mp3", description: "50gb", price: 666, thumbnail: "url4", stock: 30});
    console.log(obj4);
    
}

main();