import imagen1 from "../rey.jpg"

export function Carrusel() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="nigari.jpg" className="d-block w-100" alt="..." />
                        {/*Importando imagen de public*/}
                    </div>
                    <div className="carousel-item">
                        <img src={imagen1} className="d-block w-100" alt="..." />
                        {/*importando imagen de src*/}
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.bing.com/th?id=OIP.66LOjN6hzenOk_uMd9tRvgHaEK" className="d-block w-100" alt="..." />
                        {/*importando usando url externa*/}
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
