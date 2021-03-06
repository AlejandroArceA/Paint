$(document).on('ready',iniciar);

function iniciar(){

       var dibujar;
       var canvas1=document.getElementById('canvas');
       var contexto=canvas1.getContext('2d');
       var grosor=5;
       var color;
       var transparencia=1;
       var texto1;
       
       $('#canvas').on('mousedown',presionar);
       $('#canvas').on('mousemove',pintar);
       $('#canvas').on('mouseup',dejar);
       $('#cambio button').on('click',function(){
       	   var g=$(this).text();
       	   grosor=g;
       });

       $('#colores button').on('click',function(){
       	    var c=$(this).attr('alt');
       	    color=c;
       	    
       });

       $('#acep_trans').on('click',function(){
       	    var tra=$('#num_trans').val();
       	    transparencia=tra;
       });
       
       $('#acep_titulo').on('click',function(){
            texto1=$('#titulo').val();
            contexto.font="bolt 40px Helvetica";
            contexto.fillStyle="black";
            contexto.fillText(texto1,10,canvas1.height-15);
            contexto.fillStyle="white";
            contexto.fillText(texto1,13,canvas1.height-12);
       });

       function presionar(){

       	dibujar=true;
       	contexto.moveTo(event.clientX,event.clientY);
       }

       function pintar(){

       	     if(dibujar){

                 contexto.beginPath();
                 contexto.fillStyle="rgba("+color+","+transparencia+")";
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