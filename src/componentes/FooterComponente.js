import React from 'react'

export const FooterComponente = () => {
  return (
    <div className='margin-top' id='footer'>
        <footer class="page-footer font-small blue pt-4">
            <div class="text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase text-white">Nombre de la compañia</h5>
                        <p className='text-warning'>La Vascongada</p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"></hr>
                    <div class="col-md-6 mb-md-0 mb-6">
                        <h5 class="text-uppercase text-white">Redes sociales</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!"><i class="bi bi-google text-warning"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i class="bi bi-github text-warning"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i class="bi bi-facebook text-warning"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i class="bi bi-instagram text-warning"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">
                <p class="text-white">© 2020 Copyright</p>
            </div>
        </footer>
    </div>
  )
}
