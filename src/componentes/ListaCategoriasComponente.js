import React from 'react'
import Categoria1 from '../assets/fotos/carnes.jpg'
import Categoria2 from '../assets/fotos/pasteles.jpg'
import Categoria3 from '../assets/fotos/pescados.jpg'
import Categoria4 from '../assets/fotos/verduras.jpg'

export const ListaCategoriasComponente = () => {
  return (
    <div id="portfolio_2">
        <div class="container-fluid p-0">
        <h2 class="text-center mt-0 text-warning">Categorias</h2>
        <hr class="divider" />
            <div class="row g-0">
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Categoria1} alt="Error categoria 1" />
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Categoria</div>
                            <div class="project-name text-dark">Carne</div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Categoria2} alt="Error categoria 2"/>
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Categoria</div>
                            <div class="project-name text-dark">Bolleria</div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Categoria3} alt="Error categoria 3" />
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Marca</div>
                            <div class="project-name text-dark">Pescado</div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Categoria4} alt="Error categoria 4" />
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Categoria</div>
                            <div class="project-name text-dark">Verdura</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
