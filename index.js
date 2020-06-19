var password = [0,1,2,3,4,5,6,7,8,9,"!","@","#","$","%","^","&","*","A", "a","B", "b","C", "c","D", "d","E", "e","F", "f","G", "g","H", "h","I","i","J", "j","K", "k","L", "l","M","m","N", "n","O", "o","P", "p","Q", "q","R","r","S", "s","T", "t","U" ,"u","V", "v","W", "w" ,"X" ,"x","Y", "y","Z", "z"];


 $("#but").on("click",function(){
   var number = document.querySelector(".form-control").value;

   var n1="";
   for(var i = 0;i <number;i++){
     n1 = password[Math.floor(Math.random()*70)]+n1;

   }
   $("#container").text("your password is :"+n1);
   });
