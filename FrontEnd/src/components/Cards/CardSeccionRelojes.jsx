import React from 'react';

const CardSeccionRelojes = ({ type, backgroundImage, loading, productosFiltrados, LoaderComponent, ItemList  }) => {
  return (
        <>
            {type === "clasicos" && (
                <section className="hero2" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
                    <div className="container d-flex justify-content-center align-items-center hero-div-2" >
                        <div className="text-end me-5 mt-5" >
                            <h1 className="display-3 fw-bold mb-3">
                                Relojes Clásicos
                            </h1>
                        </div>
                    </div>
                </section>
            )}
            {type === "deportivos" && (
                <section className="hero2" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
                    <div className="container d-flex justify-content-center align-items-center hero-div-2" >
                        <div className="text-end me-5 mt-5" >
                            <h1 className="display-3 fw-bold mb-3">
                                Relojes Deportivos
                            </h1>
                        </div>
                    </div>
                </section>
            )}
            {type === "inteligentes" && (
                <section className="hero2" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
                    <div className="container d-flex justify-content-center align-items-center hero-div-2" >
                        <div className="text-end me-5 mt-5" >
                            <h1 className="display-3 fw-bold mb-3">
                                Relojes Inteligentes
                            </h1>
                        </div>
                    </div>
                </section>
            )}

  
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                    <h2 className="text-center mb-5">Encontrá tu próximo reloj</h2>
                    </div>
                </div>

                {loading ? <LoaderComponent /> : (
                    <ItemList productos={productosFiltrados}  />
                )}
                

            </div>
        </>
  );
}

export default CardSeccionRelojes;