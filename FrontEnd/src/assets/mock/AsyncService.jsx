export const getProductos = () => {
    let error = false; 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject({ error: 'Error al obtener los productos' });
            }else {
                resolve(productos);
            }
        }, 500);
    });
};
