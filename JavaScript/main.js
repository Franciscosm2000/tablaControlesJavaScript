// JavaScript Document
var panel;
var x;
var y;
var t;
var o;
var b;
var cmb;
var cont2 = 0; var cont3 = 0;
var r =0; var g = 0; var b2 = 0; var a = 0;
var h;
var texto;
function comenzar ()
{
	//Declaracion
	panel = document.getElementById('cuadro');
	x = document.getElementById('x');
	y = document.getElementById('y');
	t = document.getElementById('tamano');
	o = document.getElementById('opacidad');
	b = document.getElementById('acpetar');
	cmb = document.getElementById('cmb');
	r = document.getElementById('r');
	g = document.getElementById('g');
	b2 = document.getElementById('b');
	a = document.getElementById('a');
	h = document.getElementById('hexadecimal');
	texto = document.getElementById('texto');
	//Eventos
	x.addEventListener("click",moviendoX,false);
	y.addEventListener("click",moviendoY,false);
	t.addEventListener("click",tamano,false);
	o.addEventListener("click",opacidad,false);
	b.addEventListener("click",figura,false);
	r.addEventListener("click",colorR,false);
	g.addEventListener("click",colorG,false);
	b2.addEventListener("click",colorB,false);
	a.addEventListener("click",colorA,false);
	h.addEventListener("keypress",colorHex,false);
	/**/
	panel.addEventListener("dragenter",function(e){e.preventDefault()},false);
			
	panel.addEventListener("dragover",function(e){e.preventDefault()},false);
			
	panel.addEventListener("drop",soltando,false);
	
	//reinicio
	reiniciarValores();
}

function moviendoX()
{
	var movX = x.value;
	panel.style.marginLeft = movX+'px';
		
	var salida = document.getElementById("rango2");
	salida.innerHTML= movX+" de "+600;

}

function moviendoY()
{
	var movY = y.value;
	panel.style.marginTop = movY+'px';

		var salida = document.getElementById("rango");
	salida.innerHTML= movY+" de "+800;
}


function tamano()
{
	var tamX = 200;
	var tamY = 200;

	switch(t.value)
	{
		case '1':
				cont2=0;
				cont3 = 0;
				panel.style.width = '200px';
		    	panel.style.height ='200px';
			break;
		case '2':
			cont2 ++;

			if(cont2 == 1)
			{
				panel.style.width = (tamX*2)+'px';
		    	panel.style.height = (tamY*2)+'px';				
			}else
			{
				panel.style.width = (200*2)+'px';
		    	panel.style.height = (200*2)+'px';	
			}
			break;
		case '3':
		    cont3 ++;

			if (cont3 == 1)
			{
				panel.style.width = (tamX*3)+'px';
				panel.style.height = (tamY*3)+'px';				
			}else
			{
				panel.style.width = (200*3)+'px';
		    	panel.style.height = (200*3)+'px';		
			}
			break;
    }
	
	var salida = document.getElementById("rango3");
	salida.innerHTML= t.value+" de "+3;
 
}

function opacidad()
{
	panel.style.opacity = o.value;
	
	var salida = document.getElementById("rango4");
	salida.innerHTML= o.value+" de "+1;
}

function figura()
{
	switch(cmb.value)
    {
		case 'Cuadrado':
			panel.style.borderRadius = '0%';
			panel.style.transform  = 'rotate(0deg)';
			break;
			
		case 'Circulo':
			panel.style.borderRadius = '50%';
			break;
		
		case 'Rombo':
			panel.style.borderRadius = '0%';
			panel.style.transform  = 'rotate(45deg)';
			break;
    }
	   
		
}

function colorR()
{
	var color = '('+r.value+','+g.value+','+b2.value+','+a.value+')';
	panel.style.backgroundColor = "rgba"+color;
	
	var salida = document.getElementById("rango5");
	salida.innerHTML= r.value+" de "+255;
}
function colorG()
{
	var color = '('+r.value+','+g.value+','+b2.value+','+a.value+')';
	panel.style.backgroundColor = "rgba"+color;
	
	var salida = document.getElementById("rango6");
	salida.innerHTML= g.value+" de "+255;
}
function colorB()
{
	var color = '('+r.value+','+g.value+','+b2.value+','+a.value+')';
	panel.style.backgroundColor = "rgba"+color;
	
		var salida = document.getElementById("rango7");
	salida.innerHTML= b2.value+" de "+255;
}
function colorA()
{
	var color = '('+r.value+','+g.value+','+b2.value+','+a.value+')';
	panel.style.backgroundColor = "rgba"+color;
	
		var salida = document.getElementById("rango8");
	salida.innerHTML= a.value+" de "+255;
}

function colorHex(e)
{
 	var teclaPulsada = e.keyCode;
	
	if(teclaPulsada === 13)
	{
	   panel.style.backgroundColor="#"+h.value; 
	}
	
}

function reiniciarValores()
{
	x.value = 0;
	y.value = 0;
	t.value = 1;
	o.value = 1;
	r.value = 0;
	g.value = 0;
	b2.value = 0;
	a.value = 1;
}

/*EFECTO*/

function soltando(e)
{
	e.preventDefault();
			
	var elemento = e.dataTransfer.files;
			
	var listado = "";
	
	for(var i=0; i<elemento.length;i++)
	{
		listado += "Archivo :"+elemento[i].name+" "+"Peso :"+(elemento[i].size/1024).toFixed(2)+"kb "+" Tipo :"+elemento[i].type + "<br><br> ";
	}
			
			
	texto.innerHTML = listado; 
}




window.addEventListener("load",comenzar,false);





