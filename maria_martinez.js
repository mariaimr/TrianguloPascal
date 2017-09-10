var construirTriangulo = function () {
    var mat= new Array();

    function trianguloPascal(nivel) {
        if (nivel>0){
            if(nivel===1) return mat[0]= [1];
            if(nivel===2){
                mat[0]= [1];
                mat[1]= [1,1];
                return mat;
            }
            mat[0]= [1];
            mat[1]= [1,1];
        for(var i=2; i<nivel; i++){
            mat[i]= new Array(mat[i-1].length+1);
            mat[i][0]= 1;
            mat[i][mat[i].length-1]=1;
            for (var j=1; j< mat[i].length-1; j++){
                mat[i][j]= mat[i-1][j-1] + mat[i-1][j];
            }
        }
        return mat;
    }
    else console.log("Por favor ingrese un número mayor que cero");
    }

    return function (nivel) {
        var pascal= trianguloPascal(nivel);
        return pascal;
    }
}();


var pascal= new construirTriangulo(6);
//mostrar por elemento del triangulo
for(var i=0; i< pascal.length; i++){
    for(var j=0; j < pascal[i].length; j++){
        console.log(pascal[i][j]+ " ");
    }
    console.log("\n");
}

//mostrar por fila (arreglo)
for(var fila in pascal){
	console.log(pascal[fila]);
}



