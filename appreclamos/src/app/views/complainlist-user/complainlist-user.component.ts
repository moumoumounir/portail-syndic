
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamos } from 'src/app/clases/reclamos';
import { Usuarios } from 'src/app/clases/usuarios';
import { ReclamosService } from 'src/app/services/reclamos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DatePipe } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-complainlist-user',
  templateUrl: './complainlist-user.component.html',
  styleUrls: ['./complainlist-user.component.css'],
  providers: [DatePipe]
})
export class ComplainlistUserComponent implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  rut: string = '';
  email: string = '';
  numero_telefono: number = 0;
  password: string = '';

  isReadOnly = true;
  usuarios: Usuarios[] = [];
  reclamos: Reclamos[] = [];

  usuario: Usuarios = {
    id: 0,
    nombre: '',
    apellidos: '',
    rut: '',
    email: '',
    numero_telefono: 0,
    password: ''
  };

  // Campos para poder agregar un nuevo reclamo
  rutUsuarioReclamo: string;
  nombreUsuarioReclamo: string;
  apellidoUsuarioReclamo: string;
  asuntoReclamo: string;
  textoReclamo: string;
  fechaUsuarioReclamo: string;
  estadoUsuarioReclamo: string;
  respuestas: string[];

  myDate: Date = new Date();
  stringDate: string;

  constructor(
    private servicio: UsuariosService,
    private servicio2: ReclamosService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      this.stringDate = this.myDate.getDay() + '/' + (this.myDate.getMonth() + 1) + '/' + this.myDate.getFullYear();
  }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( params => {
        let id;
        id = localStorage.getItem('id');
        console.log('onInit complain-user '+id)
        this.cargarUsuario(id);
    });
  }

  agregarReclamo()
  {
    const newReclamo: Reclamos = {
      rut: this.rutUsuarioReclamo,
      nombre: this.nombreUsuarioReclamo,
      apellido: this.apellidoUsuarioReclamo,
      asunto: this.asuntoReclamo,
      textoReclamo: this.textoReclamo,
      fecha: this.stringDate,
      estado: 'En Progreso',
      respuestas: this.respuestas
    };
    console.log(' agregarReclamoDeUsuario response ')
    this.servicio2.agregarReclamoDeUsuario(newReclamo).subscribe(
      reclamoService => {
        console.log(' agregarReclamoDeUsuario response after call '+reclamoService)
        alert('Su reclamo ha sido enviado.');
        this.cargarReclamos(this.rutUsuarioReclamo);
      }
    );
    this.clearFields();
  }

  clearFields()
  {
    this.asuntoReclamo = '';
    this.textoReclamo = '';
  }


  cargarUsuarios() {
    this.servicio.obtenerUsuarios().subscribe(UsuariosServidor => {
      this.usuarios = UsuariosServidor;
    });
  }

  cargarUsuario(id: number) {
    console.log('cargarUsuario '+id)
    this.servicio.obtenerUsuario(id).subscribe(UsuariosServidor => {
      this.usuario = UsuariosServidor;
      const rutBuscado = this.usuario.rut;
      this.rutUsuarioReclamo = this.usuario.rut;
      this.nombreUsuarioReclamo = this.usuario.nombre;
      this.apellidoUsuarioReclamo = this.usuario.apellidos;
      this.cargarReclamos(rutBuscado);
      console.log('user '+this.usuario);
    });
  }

  cargarReclamos(rut: string){
    this.servicio2.cargarReclamosDeUnUsuario(rut).subscribe(ReclamosServidor => {
      this.reclamos = ReclamosServidor;
    });
  }

  editarDatos() {
    const nombres = document.getElementById('input-nombres') as HTMLInputElement;
    const apellidos = document.getElementById('input-apellidos') as HTMLInputElement;
    const telefono = document.getElementById('input-telefono') as HTMLInputElement;
    const email = document.getElementById('input-email') as HTMLInputElement;
    nombres.disabled = false;
    apellidos.disabled = false;
    telefono.disabled = false;
    email.disabled = false;
    const botonEnviar = document.getElementById('enviar') as HTMLButtonElement;
    botonEnviar.style.display = "inline";
    const contraseñat = document.getElementById('input-passwordt') as HTMLInputElement;
    contraseñat.style.display="inline";
    const contraseña = document.getElementById('input-password') as HTMLInputElement;
    contraseña.style.display="inline";
    const botonEditar = document.getElementById('editar') as HTMLButtonElement;
    botonEditar.style.display = "none";
    const botonCancelar = document.getElementById('cancelar') as HTMLButtonElement;
    botonCancelar.style.display = "inline";
  }

  enviarDatos() {
    const usuario: Usuarios = {
      id: this.usuario.id,
      nombre: this.nombre,
      apellidos: this.apellidos,
      rut: this.rutUsuarioReclamo,
      email: this.email,
      numero_telefono: this.numero_telefono,
      password: this.password
    };

    this.servicio.editarUsuario(usuario).subscribe(usuarioServidor => {
      alert("Usuario Editado");
      document.defaultView.location.reload();
    });
  }

  cancelarEdicion(){
    const nombres = document.getElementById('input-nombres') as HTMLInputElement;
    const apellidos = document.getElementById('input-apellidos') as HTMLInputElement;
    const telefono = document.getElementById('input-telefono') as HTMLInputElement;
    const email = document.getElementById('input-email') as HTMLInputElement;
    nombres.disabled = true;
    apellidos.disabled = true;
    telefono.disabled = true;
    email.disabled = true;
    const botonEditar = document.getElementById('editar') as HTMLButtonElement;
    botonEditar.style.display = "inline";
    const botonEnviar = document.getElementById('enviar') as HTMLButtonElement;
    botonEnviar.style.display = "none";
    const botonCancelar = document.getElementById('cancelar') as HTMLButtonElement;
    botonCancelar.style.display = "none";
    const contraseñat = document.getElementById('input-passwordt') as HTMLInputElement;
    contraseñat.style.display="none";
    const contraseña = document.getElementById('input-password') as HTMLInputElement;
    contraseña.style.display="none";
  }

  validarCamposUsuario() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required")) {
        if (inputs[i].value=="") {
          alert("Llene todos los campos");
          return false;
        }
      }
    }
    this.enviarDatos();
    return true;
  }
}


