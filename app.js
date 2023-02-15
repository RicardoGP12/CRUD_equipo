let listaEmpleados=[];
const objEmpleado ={
    id:'',
    nombre:'',
    apellido:''
}
let editando = false;
const formulario = document.querySelector('#formulario');
const nombreImput =document.querySelector('#nombre');
const apellidoImput = document.querySelector('#apellido');
const BTNagregar =document.querySelector('#BTNagregar');

formulario.addEventListener('submit', validarformulario);
function validarformulario(e){
    e.preventDefault();
    if(nombreImput.value === '' || puestoImput.value === ''){
        alert('Todos los campos son obligatorios.');
        return;
    }
}