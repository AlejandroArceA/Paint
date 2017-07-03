$(document).on('ready',iniciar);

function iniciar(){

       var dibujar;
       var canvas1=document.getElementById('canvas');
       var contexto=canvas1.getContext('2d');
       
       $('#canvas').on('mousedown',presionar);
       $('#canvas').on('mousemove',pintar);
       $('#canvas').on('mouseup',dejar);

       function presionar(){

       	dibujar=true;
       	contexto.moveTo(event.clientX,event.clientY);
       }

       function pintar(){

       	     if(dibujar){

       	     	//contexto.lineTo(event.clientX,event.clientY);
       	     	//contexto.stroke();
       	     }
       }

       function dejar(){

       	dibujar=false;
       }
}