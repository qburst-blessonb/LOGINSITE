$(document).ready(function(){

	var count = localStorage.length;
	for(i=0;i<count;i++) {
	    var keyvalue="userdetails"+i.toString();
	    var accdet = localStorage.getItem(keyvalue);
	    account = JSON.parse(accdet);
	    var name = account.Name;
			  	$('.container').append('<input type="radio" name="userdetails" value="'+name+'"/>'+name+'<br/>');
			$('.container1').append('<input type="radio" name="userdetails" value="'+name+'"/>'+name+'<br/>');

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

			}
		});
		$('#myForm2 input').on('change', function() {
				$("svg").find("*").remove();
				var dispname = $('input[name="userdetails"]:checked', '#myForm2').val();
				var count = localStorage.length;
				var i;
				for(i=0;i<count;i++) {
					var keyvalue="userdetails"+i.toString();
					var accdet = localStorage.getItem(keyvalue);
					account = JSON.parse(accdet);
					if(dispname==account.Name) {
  //          var i=0;
						var dataset = [];
						dataset.push(account.Performance[2010]);
						dataset.push(account.Performance[2011]);
						dataset.push(account.Performance[2012]);
						dataset.push(account.Performance[2013]);
						dataset.push(account.Performance[2014]);
						dataset.push(account.Performance[2015]);
						dataset.push(account.Performance[2016]);


						var w = 500;
		        var h = 200;
		        var barPadding = 1;
		        //Create SVG element
		        var svg = d3.select("body")
		                    .append("svg")
		                    .attr("width", w)
		                    .attr("height", h);
		        svg.selectAll("rect")
		           .data(dataset)
		           .enter()
		           .append("rect")
		           .attr("x", function(d,i) {
		              return i * (w / dataset.length);  //Bar width of 20 plus 1 for padding
		            })
		            .attr("y", function(d) {
		              return h-(d*12);  //Height minus data value
		            })
								.attr("width",24)//- barPadding)
		           .attr("height", function(d) {
		              return d * 12;
		            })
		            .attr("fill","red");

								svg.selectAll("text")
		               .data(dataset)
		               .enter()
		               .append("text")
		               .text(function(d) {
		                       return d;
		                  })
		                .attr("x", function(d,i) {
		                    return i * (w / dataset.length) + ((dataset.length-barPadding)*2);
		                })
		               .attr("y", function(d) {
		                    return h - (d * 12)+14;
		               })
		              .attr("font-family", "sans-serif")
		              .attr("font-size", "11px")
		              .attr("fill", "white")
		              .attr("text-anchor", "middle");

//console.log("i value: "+i);
					}
				}
});
});
