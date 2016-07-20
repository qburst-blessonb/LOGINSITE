$(document).ready(function(){

	var count = localStorage.length;
	for(i=0;i<count;i++) {
	    var keyvalue="userdetails"+i.toString();
	    var accdet = localStorage.getItem(keyvalue);
	    account = JSON.parse(accdet);
	    var name = account.Name;
	   	$('.container').append('<input type="radio" name="userdetails" value="'+name+'"/>'+name+'<br/>');
	}
	$('#myForm input').on('change', function() {
			var dispname = $('input[name="userdetails"]:checked', '#myForm').val(); 
			var count = localStorage.length;
            var i;
            var ten=10,twelve=12;
            var tenth= ten.toString();
            var plustwo = twelve.toString();
            for(i=0;i<count;i++) {
	            var keyvalue="userdetails"+i.toString();
	            var accdet = localStorage.getItem(keyvalue);
	            account = JSON.parse(accdet);
	            if(dispname==account.Name) {
						$('#display0').dialogBox({
						hasClose: true,
						effect: 'fade',
						hasBtn: true,
						title: dispname,
						content: "Username: " +account.username+"<br> Email: "+account.email+"<br> Gender: "+account.Gender
								+"<br> Age: "+account.age+"<br> Address: "+account.Address+"<br> Nationality: "+account.Nationality
								+"<br> Educational Qualifications: <br>10: "+account.Educational_Qualifications[10]+ " <br>12: "+account.Educational_Qualifications[12]
								+" <br>UG: "+account.Educational_Qualifications.UG + "<br> Performance: <br>2010: "+account.Performance[2010]
								+"<br>2011: "+account.Performance[2011] +"<br>2012: "+account.Performance[2012] 
								+"<br>2013: "+account.Performance[2013] +"<br>2014: "+account.Performance[2014]
								+"<br>2015: "+account.Performance[2015] +"<br>2016: "+account.Performance[2016]
					})
				}
/*
"username":"blessonbabu",
			"email":"blesson@qburst.com",
			"password":"8129162925",
			"age":"23",
			"Gender":"male",
			"Address":"Thenguvila Veedu Ummannoor P.O Kottarakkara",
			"Nationality":"Indian",
			"Educational_Qualifications":{"10":"92%","12":"94%","UG":"80%"},
			"Performance"


*/

			}
		});
});