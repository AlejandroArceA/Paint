$(document).on('ready',iniciar);

function iniciar(){

       var dibujar;
       var canvas1=document.getElementById('canvas');
       var contexto=canvas1.getContext('2d');
       var grosor;
       
       $('#canvas').on('mousedown',presionar);
       $('#canvas').on('mousemove',pintar);
       $('#canvas').on('mouseup',dejar);
       $('#cambio button').on('click',function(){

       	   var g=$(this).text();
       	   grosor=g;
       })

       function presionar(){

       	dibujar=true;
       	contexto.moveTo(event.clientX,event.clientY);
       }

       function pintar(){

       	     if(dibujar){

                 contexto.beginPath();
                 contexto.fillStyle="blue";
                 contexto.arc(event.clientX,event.clientY,grosor,0,360);
                 contexto.fill();
       	     	//contexto.lineTo(event.clientX,event.clientY);
       	     	//contexto.stroke();
       	     }
       }

       function dejar(){

       	dibujar=false;
       }
}