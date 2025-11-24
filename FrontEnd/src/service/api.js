const API_URL = '/api';

export async function apiGet(path) {
    const response = await fetch(`${API_URL}${path}`);

    if (!response.ok) {
        // Podés tirar error si algo falla
        const errorText = await response.text();
        throw new Error(`Error GET ${path}: ${response.status} - ${errorText}`);
    }
    return await response.json();
}

export async function apiPost(path, data) {
    const response = await fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error POST ${path}: ${response.status} - ${errorText}`);
    }
    return await response.json();
}

export async function apiPut(path, data) {
    const response = await fetch(`${API_URL}${path}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error PUT ${path}: ${response.status} - ${errorText}`);
    }
    return await response.json();
}

export async function apiDelete(path) {
    const response = await fetch(`${API_URL}${path}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error DELETE ${path}: ${response.status} - ${errorText}`);
    }
    return await response.json();
}

// Función para obtener productos desde el backend
export async function getProductosFromBackend() {
    try {
        return await apiGet('/productos');
    } catch (error) {
        console.error('Error obteniendo productos:', error);
        throw error;
    }
}

// Función para obtener un producto especifico por ID
export async function getProductoById(id) {
    try {
        return await apiGet(`/productos/${id}`);
    } catch (error) {
        console.error('Error obteniendo producto:', error);
        throw error;
    }
}

// Función para crear una orden
export async function createOrder(orderData) {
    try {
        return await apiPost('/orders', orderData);
    } catch (error) {
        console.error('Error creando orden:', error);
        throw error;
    }
}