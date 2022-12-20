import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalBody, ModalHeader } from 'react-bootstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(212, 175, 55)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal1Componente() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button class="text-warning bg-transparent border-0" onClick={handleOpen}>Registrarse</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalBody>
          <form class="form-horizontal bg-black p-2">
                    <fieldset>
                        <legend class="text-center header text-warning">Registrate</legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-12">
                                <label class="text-warning">Nombre: </label><input id="fname" name="Nombre" type="text" placeholder="Nombre" class="form-control"></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-12">
                            <label class="text-warning">Apellido: </label><input id="Apellido" name="name" type="text" placeholder="Apellido" class="form-control"></input>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-12">
                                <label class="text-warning">Email: </label><input id="email" name="email" type="text" placeholder="Email Address" class="form-control"></input>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-12">
                                <label class="text-warning">Contraseña: </label><input class="form-control" id="contrasena" placeholder='Contraseña'></input>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center mt-2">
                                <button type="submit" class="btn btn-warning btn-lg">Registrarse</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
          </ModalBody>
        </Box>
      </Modal>
    </div>
  );
}