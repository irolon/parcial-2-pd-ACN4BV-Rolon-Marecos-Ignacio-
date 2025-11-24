
export async function apiGet(path) {
    const response = await fetch(path);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error GET ${path}: ${response.status} - ${errorText}`);
    }
    return await response.json();
}

export async function apiPost(path, data) {
    const response = await fetch(`${path}`, {
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
    const response = await fetch(`${path}`, {
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
    const response = await fetch(`${path}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error DELETE ${path}: ${response.status} - ${errorText}`);
    }
    return await response.json();
}

export async function getProductosFromBackend() {
    try {
        return await apiGet('/productos');
    } catch (error) {
        console.error('Error obteniendo productos:', error);
        throw error;
    }
}

export async function getProductoById(id) {
    try {
        return await apiGet(`/productos/${id}`);
    } catch (error) {
        console.error('Error obteniendo producto:', error);
        throw error;
    }
}

export async function createOrder(orderData) {
    try {
        return await apiPost('/orders', orderData);
    } catch (error) {
        console.error('Error creando orden:', error);
        throw error;
    }
}