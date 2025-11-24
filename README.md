
# Synchro – E‑Commerce de Relojes

Synchro es una plataforma de comercio electrónico desarrollada en **React** que permite explorar, ver detalles y comprar relojes de distintos estilos: **clásicos, deportivos e inteligentes**. El sitio está diseñado con una estética moderna y limpia, integrando **Bootstrap**, **Firebase** para almacenamiento y **LocalStorage** para persistir el carrito de compras.

---

## 🚀 Tecnologías Utilizadas

### **Frontend**
- React
- React Router
- Bootstrap 5
- CSS personalizado

### **Backend / Servicios**
- Firebase 


---

## 📦 Funcionalidades Principales

### 🏠 Página de Inicio
- Sección principal con mensaje destacado y fondo visual atractivo.
- Muestra una primera fila de relojes destacados.
- Botón **"Ver más"** que despliega productos adicionales.
- Sección especial para **Smartwatches**, también con botón de expansión.

### 🛍️ Catálogo por Categorías
Cada sección posee:
- Banner propio con imagen y título.
- Grilla de productos según categoría:
  - **Relojes Clásicos**
  - **Relojes Deportivos**
  - **Relojes Inteligentes**
- Productos con:
  - Imagen
  - Nombre (Marca + Modelo)
  - Descripción
  - Precio
  - Botón **"Ver detalle"**

### 🔎 Detalle del Producto
Desde cualquier lista de productos se accede al detalle:
- Imagen ampliada del reloj.
- Descripción completa.
- Precio y categoría.
- Stock disponible.
- Selector de cantidad.
- Botón **“Agregar al carrito”**.

### 🛒 Carrito de Compras
- Vista del resumen de productos agregados.
- Mostrar cantidad, precio unitario y subtotal por producto.
- Botones:
  - **Eliminar producto**
  - **Vaciar carrito**
  - **Finalizar compra**
- El ícono del carrito en el navbar muestra la cantidad actualizada.

### 📄 Finalizar Compra
Formulario donde el usuario ingresa:
- Nombre
- Apellido
- Dirección
- Email
- Confirmación de email

Validaciones incluidas:
- Campos obligatorios.
- Ambas direcciones de correo deben coincidir.

### 🎉 Confirmación de Compra
Una vez validado el formulario:
- Se genera un **ID de orden único**.
- Se muestra mensaje de agradecimiento al usuario.
- Opción para regresar al inicio.

---

## 🔧 Instalación

1. Clonar el repositorio:

```
git clone https://github.com/irolon/parcial-2-pd-ACN4BV-Rolon-Marecos-Ignacio-/edit/master/README.md
```

2. Entrar al proyecto:

```
cd synchro
```

3. Instalar dependencias:

```
npm install
```

4. Ejecutar el proyecto:

```
npm run dev
```

---

## ▶️ Ejecución

Una vez iniciado, abrir:

```
http://localhost:5173
```

---

## ✨ Autor

**Ignacio Rolon Marecos**  
Desarrollador Frontend – Proyecto E‑Commerce Synchro

---

