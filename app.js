let listaEmpleados=[];

const objEmpleado ={
    id: '',
    nombre: '',
    apellido: ''
}

let editando = false;//esta variable nos damos cuenta si modificamos o eliminamos

//Cenectamos nuestras etiquetas
const formulario = document.querySelector('#Formulario');
const nombreImput =document.querySelector('#nombre');
const apellidoImput = document.querySelector('#apellido');
const BTNagregar =document.querySelector('#BTNagregar');

formulario.addEventListener('submit', validarformulario);

function validarformulario(e){
    e.preventDefault();

    //Vemos si los campos no estan vacios
    if(nombreImput.value === '' || apellidoImput.value === ''){
        alert('Todos los campos son obligatorios.');
        return;
    }
    if(editando){
        editarEmpleado();
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
    
    formulario.reset();
    
    mostrarEmpleados();

    limpiarObjeto();
}

function limpiarObjeto(){
    objEmpleado.id='';
    objEmpleado.nombre='';
    objEmpleado.apellido='';
}

function mostrarEmpleados(){

    limpiarHTML();
    const divEmpleados = document.querySelector('.div_empleados');
     listaEmpleados.forEach(empleado =>{
        const {id, nombre, apellido} =empleado;

        const parrafo=document.createElement('p');
        parrafo.textContent=`${id} - ${nombre} - ${apellido} - `;
        parrafo.dataset.id= id ;

        const editarBotton = document.createElement('button');
        editarBotton.onclick=()=> cargarEmpleado(empleado);
        editarBotton.textContent='Editar';
        editarBotton.classList.add('btn_editar');
        parrafo.append(editarBotton);

        const eliminarBotton = document.createElement('button');
        eliminarBotton.onclick=()=> eliminarEmpleado(id);
        eliminarBotton.textContent='Eliminar';
        eliminarBotton.classList.add('btn_eliminar');
        parrafo.append(eliminarBotton);

        const hr=document.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);

     });
}

function cargarEmpleado(empleado){
    const {id,nombre,apellido}=empleado;
    nombreImput.value=nombre;
    apellidoImput.value=apellido;
    objEmpleado.id=id;
    formulario.querySelector('button[type="submit"]').textContent='Actualizar';

    editando = true;
}

function editarEmpleado(){
    objEmpleado.nombre=nombreImput.value;
    objEmpleado.apellido=apellidoImput.value;

    listaEmpleados.map(empleado => {
        if(empleado.id===objEmpleado.id){
            empleado.id=objEmpleado.id;
            empleado.nombre=objEmpleado.nombre;
            empleado.apellido=objEmpleado.apellido;
        }
    });

    limpiarHTML();
    mostrarEmpleados();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent='Agregar';
    editando=false;
}


function eliminarEmpleado(id){
    listaEmpleados=listaEmpleados.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarEmpleados();
}

function limpiarHTML(){
    const divEmpleados = document.querySelector('.div_empleados');
    while(divEmpleados.firstChild){
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}