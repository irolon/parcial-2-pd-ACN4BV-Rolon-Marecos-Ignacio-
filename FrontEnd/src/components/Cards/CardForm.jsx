const CardForm = ({ buyerData, finalizarCompra, error }) => {
    return (
    <div className="container my-5 ">
        <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-8 col-lg-6 div-form mt-5">
                <h3 className="text-center mb-4">Complete sus datos</h3>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <form id="formulario-consulta">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" required onChange={buyerData}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellido" name="apellido" required onChange={buyerData} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Direccion</label>
                        <input type="text" className="form-control" id="direccion" name="direccion" required onChange={buyerData} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required onChange={buyerData} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repetirEmail" className="form-label">Repetir Correo</label>
                        <input type="email" className="form-control" id="repetirEmail" name="repetirEmail" required onChange={buyerData} />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-outline-success rounded-pill fw-bold" onClick={finalizarCompra} >Finalizar Compra</button>
                    </div>
                </form>
            </div>
        </div>
    </div>      


    );
}

export default CardForm;