var d = new Date();
var file;
var TextoDocumento;
var Fecha;

document.getElementById('inputArchivo').onchange = function(){

  file = this.files[0];
};

function ReadDocument()
{
	var reader = new FileReader();

	reader.onload = function(progressEvent)
	{
		//El documento entero
		console.log(this.result);
		TextoDocumento = this.result;
		Fecha = d.getTime();
		console.log("Valor de fecha: " + Fecha);
	};

	reader.readAsText(file);
}