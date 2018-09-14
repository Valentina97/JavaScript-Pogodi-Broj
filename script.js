
// Uzmi nasumičan - random broj od 1 do 10
var num = Math.ceil(Math.random() * 10);  

 
 var izbor = prompt ("Pogodi broj između 1 i 10");
 if (izbor == num){
	alert("Bravo, ti si genije!");
 }
 else
 {	 
 alert("Netočno, traženi broj je: " + num); 
 }