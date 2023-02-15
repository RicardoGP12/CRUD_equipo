let listaEmpleados=[];

const objEmpleado ={
    id: '',
    nombre: '',
    apellido: ''
}

let editando = false;
const formulario = document.querySelector('#Formulario');
const nombreImput =document.querySelector('#nombre');
const apellidoImput = document.querySelector('#apellido');
const BTNagregar =document.querySelector('#BTNagregar');

formulario.addEventListener('submit', validarformulario);
function validarformulario(e){
    e.preventDefault();
    if(nombreImput.value === ''|| apellidoImput.value === ''){
        alert('Todos los campos son obligatorios.');
        return;
    }
    if(editando){
        //editarEmpleado();
        editando = false;
    } else {
        objEmpleado.id = Date.now();
        objEmpleado.nombre=nombreImput.value;
        objEmpleado.apellido=apellidoImput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado(){
    listaEmpleados.push({...objEmpleado});
    
    mostrarEmpleados();
}

function mostrarEmpleados(){
    const divEmpleados = document.querySelector('.div_empleados');
     listaEmpleados.forEach(empleado =>{
        const {id, nombre, apellido} =empleado;

        const parrafo=document.createElement('p');
        parrafo.textContent='${id} - ${nombre} - ${p} -';
        parrafo.dataset.id= id;

        const editarBotton = document.createElement('button');
        //editarBotton.onclick=()=> cargarEmpleado(empleado);
        editarBotton.textContent='Editar';
        editarBotton.classList.add('btn','btn-editar');
        parrafo.append(editarBotton);

     });
}