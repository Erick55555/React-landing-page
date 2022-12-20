import React from 'react'
import Modal1 from './Modal1Conponente'
import Modal2 from './Modal2Componente'

export const NavComponente = () => {
    return (
        <div class="col-lg-12 bg-warning" id='nav'>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div class="container-fluid px-4 px-lg-5 gap-2">
                    <a class="navbar-brand text-warning" href="#portfolio">Marcas</a>
                    <a class="navbar-brand text-warning" href="#services">Sobre nosotros</a>
                    <a class="navbar-brand text-warning" href="#portfolio_2">Categorias</a>
                    <a class="navbar-brand text-warning" href="#"><i class="bi bi-cart4"></i></a>
                    <button class="navbar-toggler navbar-toggler-right text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><Modal1></Modal1></li>
                            <li class="nav-item"><Modal2></Modal2></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>         
    )
}
