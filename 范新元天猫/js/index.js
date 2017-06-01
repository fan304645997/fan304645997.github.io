
	var box=document.getElementById('box3-3');
	var box3=document.getElementsByClassName('box3')[0];
	console.log(document)
	var imgbox=document.getElementById('imgbox');
	var list=document.getElementsByClassName("lbimg")
	var btns=document.getElementsByClassName('btn');
	var index0 = 0;
    //  for(var i = 0 ;i<10;i++ ){
			// if(i==5){
			// 	index=i;
			// }length;
    //  }	
    // var arr=[1,2,3,5]
    // alert(arr.length);
    // alert(arr[1]);
    var timer;
    btns[0].style.backgroundColor = "red"
    function zonglb(){
    	timer = setInterval(lb,2000);
    }
    zonglb()
    function lb(){
        
        index0++;
        if(index0 == 4){
        	index0 = 0
        }
        if( index0== 0){
        	box3.style.backgroundColor = "#BEF3F9";
        }else if(index0== 1){
        	box3.style.backgroundColor = "#E8E8E8";
        }else if(index0== 2){
        	box3.style.backgroundColor = "#E8E8E8";
        }else if(index0 ==3){
        	box3.style.backgroundColor = "#E8E8E8";
        }
        imgbox.style.left = -1024*index0+"px"
        for(var i=0;i<btns.length;i++){
        	btns[i].style.backgroundColor = "#000"
        }
        btns[index0].style.backgroundColor = "red"
       
    }
   
    
    for(var i=0;i<btns.length;i++){
    	btns[i].index = i ;
    	btns[i].onclick = function(){
    		clearInterval(timer)
            index0 = this.index;
            imgbox.style.left = -1024*index0+"px"
            for(var i=0;i<btns.length;i++){
	        	btns[i].style.backgroundColor = "#000"
	        }
	        btns[index0].style.backgroundColor = "red"
            zonglb()
    	}
    }
    var lis = document.getElementsByClassName('lis');
    var boxh = document.getElementsByClassName("boxh")[0];
    var showlog = document.getElementsByClassName("showlog");
    var allbox = document.getElementsByClassName("box3-2")[0];
    for(var i=0;i<lis.length;i++){
    	lis[i].index = i;
    	lis[i].onmouseover = function(ele){
    		   for(var j = 0;j<lis.length;j++){
    		   	lis[j].style.backgroundColor ="#EEE4E4" ;
    		   }
    		   lis[this.index].style.backgroundColor ="white" ;
    		   boxh.style.display = "block";
    		   //alert(this.index)
    		   console.log(this.index)
    		   for(var k = 0;k<showlog.length;k++){
    		   	showlog[k].style.display = "none"
    		   }
    		   showlog[this.index].style.display = "block"
    	}
    }

allbox.onmouseleave = function(){
	for(var j = 0;j<lis.length;j++){
    		   	lis[j].style.backgroundColor ="#EEE4E4" ;
    }
    boxh.style.display = "none";
}