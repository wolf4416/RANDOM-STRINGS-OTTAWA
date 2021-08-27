function wolf(length){
	 
 var ot = ''; do {
 	 ot += Math.random().toString(36).substr(2);
 	 } while (ot.length < length);
 	  ot = ot.substr(0, length); 
 	  return ot;
 	   }
 	    var random = wolf(60);
 	    
 module.experts = wolf;
