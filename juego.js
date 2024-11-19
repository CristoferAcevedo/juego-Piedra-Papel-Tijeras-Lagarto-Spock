class Juego{
    static acumulador=0;
    static contar=0;
    constructor(nombre){
        this.nombre=nombre;
        this.WIN="Victoria";
        this.LOSE="Derrota";
        this.EMPATE="Empate";
        this.PAPEL="papel";
        this.PIEDRA="piedra";
        this.TIJERAS="tijera";
        this.LAGARTO="lagarto";
        this.SPOCK="spock";
    }
    play(eleccion){
        const botones = document.querySelectorAll("button");
        
        botones.forEach(boton => {
            boton.classList.add('opaco');
            boton.disabled = true; 
        });
        const text=document.getElementById("textoInicio");
        const imagenUsuario=document.getElementById("imgUsuario");
        const imagenCompu=document.getElementById("imgCompu");
        const botonSeleccionado = document.getElementById(eleccion); 
        botonSeleccionado.classList.remove('opaco');


        imagenUsuario.src="imagenes/"+eleccion+"_LE_auto_x4.jpg";
        text.innerText="Eligiendo...";

        const intervalo=setInterval(()=>{
            const eleccionCompu=this.convertir();
            imagenCompu.src="imagenes/"+eleccionCompu+"_LE_auto_x4.jpg";
        },200);
        setTimeout(()=>{
            const eleccionCompu=this.convertir();
            let resul=this.calcular(eleccion,eleccionCompu);
            imagenCompu.src="imagenes/"+eleccionCompu+"_LE_auto_x4.jpg";
            
            clearInterval(intervalo);

            if(resul===this.WIN){
                Juego.Actualizar()
                text.innerText=this.WIN;
            }else if(resul===this.LOSE){
                Juego.actualizar()
                text.innerText=this.LOSE;
            }else{
                text.innerText=this.EMPATE;
            };
            
            botones.forEach(boton => { 
                boton.classList.remove('opaco');
                boton.disabled = false
            });
        },2000);
        document.getElementById("juegoNuevo").addEventListener("click",()=>{
            Juego.contar=0;
            Juego.acumulador=0;
            Juego.Actualizar()
            Juego.actualizar()
        })
        document.getElementById("salir").addEventListener("click",()=>{
            Juego.contar=0;
            Juego.acumulador=0;
            Juego.Actualizar()
            Juego.actualizar()
        })
    };
    static Actualizar() {
        const win=document.getElementById('ganados')
        win.textContent = `Victorias: ${Juego.acumulador}`;
    }
    static actualizar(){
        const lose=document.getElementById('perdidas')
        lose.textContent = `Derrotas: ${Juego.contar}`;
    }
    calcular(eleccion, eleccionCompu) { 
        if (eleccion === eleccionCompu) { 
            return this.EMPATE; 
        } else if (eleccion === this.PIEDRA) { 
            if (eleccionCompu === this.PAPEL || eleccionCompu === this.SPOCK) return this.actualizarcontar(this.LOSE); 
            if (eleccionCompu === this.TIJERAS || eleccionCompu === this.LAGARTO) return this.actualizarContador(this.WIN); 
        } else if (eleccion === this.PAPEL) { 
            if (eleccionCompu === this.TIJERAS || eleccionCompu === this.LAGARTO) return this,this.actualizarcontar(this.LOSE); 
            if (eleccionCompu === this.PIEDRA || eleccionCompu === this.SPOCK) return this.actualizarContador(this.WIN); 
        } else if (eleccion === this.TIJERAS) { 
            if (eleccionCompu === this.PIEDRA || eleccionCompu === this.SPOCK) return this.actualizarcontar(this.LOSE); 
            if (eleccionCompu === this.PAPEL || eleccionCompu === this.LAGARTO) return this.actualizarContador(this.WIN);
        } else if (eleccion === this.LAGARTO) { 
            if (eleccionCompu === this.PIEDRA || eleccionCompu === this.TIJERAS) return this.actualizarcontar(this.LOSE); 
            if (eleccionCompu === this.SPOCK || eleccionCompu === this.PAPEL) return this.actualizarContador(this.WIN); 
        } else if (eleccion === this.SPOCK) { 
            if (eleccionCompu === this.PAPEL || eleccionCompu === this.LAGARTO) return this.actualizarcontar(this.LOSE); 
            if (eleccionCompu === this.TIJERAS || eleccionCompu === this.PIEDRA) return this.actualizarContador(this.WIN); 
        };
    }; 
    actualizarContador(resultado) { 
        if (resultado === this.WIN) { 
            Juego.acumulador +=1; 
        };
        return resultado; 
    };
    actualizarcontar(resultado){
        if(resultado===this.LOSE){
            Juego.contar+=1;
        };
        return resultado; 
    }
    convertir(){
        const numero=Math.floor(Math.random()*4);
        switch(numero){
            case 0:
                return this.PAPEL;
            case 1:
                return this.PIEDRA;
            case 2:
                return this.TIJERAS;
            case 3:
                return this.LAGARTO;
            case 4:
                return this.SPOCK;
        };
    };
};

class Piedra extends Juego{
    constructor(nombre,valor){
        super(nombre);
        this.valor=valor;
    };
    accion(){
        this.nombre.addEventListener("click",()=>{
            this.play(this.valor);
        });
    };
};
class Papel extends Juego{
    constructor(nombre,valor){
        super(nombre);
        this.valor=valor;
    }
    accion(){
        this.nombre.addEventListener("click", () => {
            this.play(this.valor); 
        }); 
    };
};
class Tijeras extends Juego{
    constructor(nombre,valor){
        super(nombre);
        this.valor=valor;
    }
    accion(){
        this.nombre.addEventListener("click",()=>{
            this.play(this.valor);
        });
    };
};
class Lagarto extends Juego{
    constructor(nombre,valor){
        super(nombre);
        this.valor=valor;
    }
    accion(){
        this.nombre.addEventListener("click",()=>{
            this.play(this.valor);
        });
    }
}
class Spock extends Juego{
    constructor(nombre,valor){
        super(nombre);
        this.valor=valor;
    }
    accion(){
        this.nombre.addEventListener("click",()=>{
            this.play(this.valor);
        });
    };
};



export {Papel,Piedra,Tijeras,Lagarto,Spock};
