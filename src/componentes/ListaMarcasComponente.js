import React from 'react'
import Marca1 from '../assets/fotos/bimbo2.jpeg'
import Marca2 from '../assets/fotos/cocacola.png'
import Marca3 from '../assets/fotos/danone.png'
import Marca4 from '../assets/fotos/grefusa.png'
import Marca5 from '../assets/fotos/pringles.png'

export const ListaMarcasComponente = () => {
  return (
    <div id="portfolio">
        <div class="container-fluid p-0">
        <h2 class="text-center mt-0 text-warning">Marcas</h2>
        <hr class="divider" />
            <div class="row g-0">
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Marca1} alt="Error marca 1" />
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Marca</div>
                            <div class="project-name text-dark">Bimbo</div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Marca2} alt="Error marca2"/>
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Marca</div>
                            <div class="project-name text-dark">Cocacola</div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Marca3} alt="Error marca 3" />
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Marca</div>
                            <div class="project-name text-dark">Danone</div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Marca4} alt="Error marca 4" />
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Marca</div>
                            <div class="project-name text-dark">Grefusa</div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6 text-center">
                    <a class="portfolio-box" href="#" title="Project Name">
                        <img class="img-fluid" src={Marca5} alt="Error marca 5"/>
                        <div class="portfolio-box-caption">
                            <div class="project-category text-white-50">Marca</div>
                            <div class="project-name text-dark">Pringles</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

