import '../../css/Seccion1.css';

const ItemListContainer = ({ titulo, subtitulo }) => {
    return (
        <section className="hero">
            <div className="container d-flex justify-content-end align-items-center hero-div" >
                <div className="text-end me-5 mt-5" >
                    <h1 className="display-3 fw-bold mb-3">
                        {titulo}
                    </h1>
                    <p className="lead mb-4" style={{ maxWidth: '600px', margin: '0 auto', color: 'white' }}>
                        {subtitulo}
                    </p>
                </div>
            </div>

        </section>


    );
}

export default ItemListContainer;