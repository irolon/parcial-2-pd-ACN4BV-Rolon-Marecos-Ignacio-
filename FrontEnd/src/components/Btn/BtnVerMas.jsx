const BtnVerMas = ({ visible, onClick, className = ""  }) => {
    if (!visible) return null;

    return (
    <div className="row">
        <div className="col-12 d-flex justify-content-center">
            <button
            type="button"
            className={`btn btn-dark rounded-pill px-5 py-2 fw-bold mt-3 ${className}`}
            onClick={onClick}
            >
            Ver más
            </button>
        </div>
    </div>
    );
};

export default BtnVerMas;
