# Synchro – E‑Commerce de Relojes

Synchro es una plataforma de comercio electrónico que permite explorar, ver detalles y comprar relojes de distintos estilos: **clásicos, deportivos e inteligentes**. El sitio está construido con una estética moderna y limpia, usando **React** en el lado del cliente y un **API REST con Node/Express** en el servidor. Firebase se utiliza como base de datos.

## 🚀 Tecnologías utilizadas

### Frontend
- **React** – vista y estado.
- **React Router** – navegación en SPA.
- **Bootstrap 5** y **CSS personalizado** – maquetado y estilos.
- **LocalStorage** – persistencia del carrito.

### Backend
- **Node.js / Express** – servidor y API REST.
- **Firebase Admin SDK** – conexión a Firestore.
- **Firestore** – base de datos en la nube.
- **Middleware de validación** – para validar órdenes antes de insertarlas.

## 📦 Funcionalidades principales

### 🏠 Página de inicio
- Sección principal con mensaje destacado y fondo visual.
- Primera fila de relojes destacados con botón **Ver más** para desplegar más productos.
- Sección especial para **Smartwatches**.

### 🛍️ Catálogo por categorías
- Banner propio con imagen y título por categoría.
- Grilla de productos según categoría:
  - **Relojes clásicos**
  - **Relojes deportivos**
  - **Relojes inteligentes**
- Cada producto muestra imagen, nombre (marca + modelo), descripción, precio y botón **Ver detalle**.

### 🔎 Detalle del producto
- Imagen ampliada.
- Descripción completa.
- Precio y categoría.
- Stock disponible.
- Selector de cantidad y botón **Agregar al carrito**.

### 🛒 Carrito de compras
- Lista de productos agregados con cantidad, precio unitario y subtotal.
- Acciones para **Eliminar producto**, **Vaciar carrito** y **Finalizar compra**.
- El icono del carrito en el navbar muestra la cantidad actual.

### 📄 Finalizar compra
- Formulario con campos: nombre, apellido, dirección, correo electrónico y confirmación de correo.
- Validaciones: campos obligatorios y correos coincidentes.
- Una vez confirmada la compra se genera un **ID de orden único** y se muestra mensaje de agradecimiento.

## 🗂 Estructura del proyecto

```
/
├── BackEnd
│   ├── src
│   │   ├── config/           
│   │   │   └── firebase.js
│   │   ├── controller/       
│   │   │   ├── order_controller.js
│   │   │   └── producto_controller.js
│   │   ├── middlewares/      
│   │   │   └── validarorden.js
│   │   ├── routes/           
│   │   │   ├── order.js
│   │   │   └── productos.js
│   │   ├── services/        
│   │   │   ├── order_service.js
│   │   │   └── producto_service.js
│   │   └── App.js             
│   ├── server.js             
│   └── package.json
│
├── FrontEnd
│   ├── public/               
│   ├── src/                   
│   ├── package.json
│   └── vite.config.js
│
└── README.md                 
```

## ⚙️ Configuración y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/irolon/parcial-2-pd-ACN4BV-Rolon-Marecos-Ignacio-.git
cd parcial-2-pd-ACN4BV-Rolon-Marecos-Ignacio-
```

### 2. Configurar el BackEnd
1. Ir a la carpeta `BackEnd`:
   ```bash
   cd BackEnd
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear un archivo `.env` en la raíz de `BackEnd` con las variables necesarias. Por ejemplo:
   ```env
   PORT=3000
   SERVICE_ACCOUNT_PATH=serviceAccount.json
   ```
   - `PORT` define el puerto en el que correrá el servidor.
   - `SERVICE_ACCOUNT_PATH` debe apuntar al fichero JSON de la cuenta de servicio de Firebase. Este fichero no está incluido en el repositorio; descárgalo desde la consola de Firebase y colócalo en la raíz de `BackEnd`.

4. Iniciar el servidor:
   ```bash
   node server.js
   ```
   Esto levantará un servidor Express que expondrá la API REST. Las rutas se montan sobre `/api` en función de `App.js`.

### 3. Configurar el FrontEnd
1. Abrir una nueva terminal en la carpeta `FrontEnd`:
   ```bash
   cd ../FrontEnd
   ```
2. Instalar dependencias del front:
   ```bash
   npm install
   ```
3. Ejecutar el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```
   Por defecto Vite abrirá la aplicación en `http://localhost:5173`.

> **Nota:** asegúrate de que el servidor del back‑end esté corriendo antes de iniciar el front, ya que el cliente consumirá los endpoints `/api`.

## 🌐 Endpoints disponibles

### Productos
- **GET `/api/productos`** – Devuelve la lista de todos los productos almacenados en Firestore.
- **GET `/api/productos/:id`** – Devuelve los datos de un producto por su ID.

Ambas rutas usan el controlador `producto_controller.js`, que obtiene los productos a través del servicio `producto_service.js` y expone el resultado en formato JSON.

### Órdenes
- **POST `/api/orders`** – Crea una nueva orden en Firestore. Se debe enviar en el cuerpo de la solicitud un objeto con las propiedades:
  ```json
  {
    "comprador": { "nombre": "...", "email": "...", ... },
    "items": [ { "id": "...", "cantidad": ..., "precio": ... }, ... ],
    "total": ....
  }
  ```
  Antes de crear la orden se valida que `comprador`, `items` y `total` estén presentes, que `items` sea un arreglo y que `total` sea un número mayor a cero mediante el middleware `validarorden.js`.  En caso de que falte alguno de estos campos se responde con `400 Bad Request`. Si la validación pasa, el controlador `order_controller.js` llama al servicio `order_service.js` para guardar la orden en la colección `orders` de Firestore y devuelve el `orderId` generado.

## 🔒 Consideraciones de seguridad

- Las credenciales de Firebase deben manejarse de forma privada.
- El middleware `validarorden.js` protege el endpoint de creación de órdenes garantizando que se reciban los datos mínimos necesarios.

## ✨ Autor

**Ignacio Rolon Marecos** – Desarrollador Frontend y Backend.

---
