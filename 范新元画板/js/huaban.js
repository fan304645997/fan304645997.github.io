window.onload=function () {
     let canvas=document.querySelector('canvas');
     let ctx=canvas.getContext('2d');
     let xian=document.querySelector('.icon-zhixianceliang')
     let qianbi=document.querySelector('.icon-qianbi')
     let juxing=document.querySelector('.icon-zhengfangxing')
     let duobianxing=document.querySelector('.icon-duobianxing')
     let yuan=document.querySelector('.icon-yuan')
     let yuanjiao=document.querySelector('.icon-yuanjiaojuxing')
     let wujiaoxing=document.querySelector('.icon-wujiaoxing')
     let maskbtn=document.querySelector('.icon-eraser');
     let mask=document.querySelector('.mask');
     let eraser1=document.querySelector('.eraser')
    let chexiaobtn=document.querySelector('.icon-shiliangzhinengduixiang4')
    let wenzi=document.querySelector('.icon-wenzi');
     let  xinjian=document.querySelector('.icon-iconfontxinjian')
    let baocun=document.querySelector('.icon-baocun')
    let xuxian=document.querySelector('.icon-xiantiao')
    let input=document.querySelectorAll('input')[0];
    let input1=document.querySelectorAll('input')[1];
    let tianchong=document.querySelector('.icon-tianchong');
    let miaobian=document.querySelector('.icon-miaobian');
    let quanping=document.querySelector('.icon-quanping')
    let caiqie=document.querySelector('.icon-caiqie')

let palette1=new palette(canvas,ctx,mask);

    xian.onclick=function () {
         palette1.line();
     }
     qianbi.onclick=function () {
         palette1.pencil();
     }
   juxing.onclick=function () {

       palette1.rectangle();
   }
   duobianxing.onclick=function () {
       palette1.bian=prompt('请输入边数','5')
       palette1. polygon();
   }
    yuan.onclick=function () {
        palette1.circular();
    }
    yuanjiao.onclick=function () {
        palette1.rRectangle(30);
    }
    wujiaoxing.onclick=function(){
         palette1.bian=prompt('请输入角数','5')
         palette1.polyl();
    }
    maskbtn.onclick=function () {
       let w=prompt('请输入橡皮尺寸',30);
        palette1.eraser(w,w,eraser1);
    }
    chexiaobtn.onclick=function () {
        palette1.undo();
    }
    wenzi.onclick=function(){
        palette1.character();
    };
   
    input.onchange=function(){
        palette1.fillStyle=this.value;
    }


    input1.onchange=function(){
        palette1.strokeStyle=this.value;
    }
    miaobian.onclick=function () {
        palette1.type='stroke';
    }
    tianchong.onclick=function () {
        palette1.type='fill';
    }
  













}