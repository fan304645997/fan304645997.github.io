   let ch=window.innerHeight;
   let nav=document.querySelector('nav');
   let cbl=document.querySelector('.cbl');
   console.log(cbl);
   window.onscroll=function(){
   let tops=document.body.scrollTop;
   // console.log(nav)
   if(tops>=750){
   	animate(nav,{top:0},200)
   }else if(tops<750){
   	animate(nav,{top:-50},200)
   }
   /*侧边栏*/
   if(tops>=750){
   	cbl.style.height='324px'

   }else if(tops<750){
   	cbl.style.height='0px'
   }
   }
