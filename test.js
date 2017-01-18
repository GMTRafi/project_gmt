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

/*

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
myFunction.call(prueba,'juan','pedro');*/

/*

sayHi();
var sayHi = function(){
    alert('Hi!');
};

*/


/*

function createFunctions(){
    var result = new Array();

    for (var i=0; i<10;i++){
        result[i] = function(num){
            return function(){
                return num;
            };
        }(i);
    }


}

createFunctions();

*/

/*

document.title = 'Hemos cambiado el titulo de la pagina';

document.write(document.title);

*/

/*


var book = {

    "title": "Professional JavaScript",
    "authors": ["Nicholas C. Zakas"],
    edition: 3,
    year: 2011
};

var jsonText = JSON.stringify(book, ["title","edition"]);

*/

//test














