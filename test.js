/**
 * Created by iPocho on 13/01/2017.
 */


/*

function myFunction(){

    document.write(this.name);
    document.write("<br>");
}

var objectA = {

    name: 'Alice',
    myMethod: myFunction
};


var objectB = {

    name:'Bob',
    myMethod: myFunction
};


objectA.myMethod();
objectB.myMethod();

*/

/*

function esperarUnSegundo(callback){
    setTimeout(function(){
        callback();
    }, 1000);
}


var alice = {

    nombre: 'Alice',
    cansarse: function(){
        alert(this.nombre + 'se ha cansado de esperar');
    }

};

esperarUnSegundo(alice.cansarse);*/

/*

var alice = {

    nombre: 'Alice',
    cansarse: function(){
        console.log(this,nombre);
    }
};


var myFunction = alice.cansarse();

*/


var prueba = {

    nombre : 'Antonia'
}

var alice = {

    nombre : 'Alice',
    saludar: function(amigo1,amigo2){
        alert('Hola'+amigo1+'Hola'+amigo2+', yo soy'+this.nombre);

    }
}

var myFunction = alice.saludar;
myFunction.call(prueba,'juan','pedro');