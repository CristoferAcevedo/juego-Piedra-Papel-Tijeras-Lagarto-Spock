import {Papel,Piedra,Tijeras,Lagarto,Spock} from "./juego.js";
//pal inicio
class Usuario{
    constructor(){
        this.listCLientes=[];
    }
    registrar(){
        const fromulario=document.getElementById("formRegistro");
        const texto=document.getElementById("paraR");
        fromulario.addEventListener("submit",(event)=>{
            event.preventDefault();
            const nombre=document.getElementById("nombreR").value;
            const correo=document.getElementById("correoR").value;
            const password=document.getElementById("passwordR").value;

            if(this.validarUsuario(correo)){
                texto.innerText = "Usuario ya registrado.";
                texto.classList.remove('fade-out');
                setTimeout(()=>{
                    texto.classList.add('fade-out')
                },2000);
            }else{
                const datos=[nombre,correo,password];
                this.listCLientes.push(datos);
                texto.innerText = "Usuario registrado con exito.";
                setTimeout(()=>{
                    document.getElementById('formRegistro').style.display = 'none';
                    document.getElementById('formInicioSesion').style.display = 'grid';
                },1000);
                console.log(this.listCLientes);
            };
        });
    };
    inciar(){
        const formulario=document.getElementById("formInicioSesion");
        formulario.addEventListener("submit",(event)=>{
            event.preventDefault();
            const correInicio=document.getElementById("correo").value;
            const contraInicio=document.getElementById("password").value;

            if(this.listCLientes.some(usuario=>usuario[1]===correInicio && usuario[2]===contraInicio)){
                const nombreUsuario=this.listCLientes.find(usuario=>usuario[1]===correInicio && usuario[2]===contraInicio)
                const textNom=document.getElementById("nombreU");
                document.getElementById("juego").style.display='flex';
                document.getElementById('formInicioSesion').style.display='none';
                textNom.innerText=`Jugador: ${nombreUsuario[0]}`;
                document.getElementById("salir").addEventListener("click",function(){
                    document.getElementById("juego").style.display='none';
                    document.getElementById('formInicioSesion').style.display='grid';
                })
                document.getElementById("correo").value="";
                document.getElementById("password").value="";
                document.getElementById("nombreR").value="";
                document.getElementById("correoR").value="";
                document.getElementById("passwordR").value="";
            }else{
                const textoI = document.getElementById("para");
                textoI.innerText = "el correo o la contraseña son incorrectos.";
                textoI.classList.remove('fade-out');
                setTimeout(()=>{
                    textoI.classList.add('fade-out')
                },2000);
            };
        });
    };
    validarUsuario(correo){
        return this.listCLientes.some(usuario=>usuario[1]===correo);
    };
};

document.getElementById('mostrarRegistro').addEventListener('click', function() {
    document.getElementById('formInicioSesion').style.display = 'none';
    document.getElementById('formRegistro').style.display = 'grid';
});

document.getElementById('mostrarInicioSesion').addEventListener('click', function() {
    document.getElementById('formRegistro').style.display = 'none';
    document.getElementById('formInicioSesion').style.display = 'grid';
});


const usuario=new Usuario();

const Incio=document.getElementById("Inicioo");
Incio.addEventListener("click",function(){
    usuario.inciar()
});
const Registro=document.getElementById("Registroo");
Registro.addEventListener("click",function(){
    usuario.registrar();
});

//lo del juego
const rock=document.getElementById("piedra");
const scissors=document.getElementById("tijera");
const lagart=document.getElementById("lagarto");
const spocks=document.getElementById("spock");
const paper=document.getElementById("papel");
const papel=new Papel(paper,"papel");
papel.accion();
const piedra=new Piedra(rock,"piedra");
piedra.accion();
const tijeras=new Tijeras(scissors,"tijera");
tijeras.accion();
const lagarto=new Lagarto(lagart,"lagarto");
lagarto.accion();
const spock=new Spock(spocks,"spock");
spock.accion();

