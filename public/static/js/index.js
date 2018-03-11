(function(){
   var App=function(){
       
       
   }

   App.prototype.getBox=function(item){
   	   var boxArr=[]
         for(var i=0;i<item.length;i++){
           if(item[i].className=="item"){
                boxArr.push(item[i])
           }
          

         }
          return boxArr;
   }
   App.prototype.getindex=function(arrh,minh){
   	for(var i in arrh){
   		if(arrh[i]==minh){
   			return i;
   		}
   	}
    
        
   }

   window.App=App;
   
   
})()
 var app=new App();