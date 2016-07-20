$(document).ready(function(){
  var count= localStorage.length;
  if(count==0){
    var i= JSON.stringify(data[0]);
    var keyvalue="userdetails"+count.toString();
    localStorage.setItem(keyvalue,i);
    i= JSON.stringify(data[1]);
    keyvalue="userdetails"+(count+1).toString();
    localStorage.setItem(keyvalue,i);
    count=localStorage.length;
//    alert("success in adding Json");
  }
  else {
    var i=count-1;
    var keyvalue="userdetails"+i.toString();
    var accdet = localStorage.getItem(keyvalue);
    account = JSON.parse(accdet);
    var name = account.Name;
    $("#display6").text("Welcome " + name + "\n" +"You have Created an account");
  }
 $("#button2").click(function(){
  var name = $("#name").val();
  var uname = $("#uname").val();
  var email = $("#email").val();
  var psw = $("#psw").val();
  var psw1 = $("#psw1").val();
  
  var atpos = email.indexOf("@");
  var dotpos= email.lastIndexOf(".");

  var txt   = {"Name":name,"username":uname, "email":email, "password":psw};
  $("#display1").hide();
  $("#display2").hide();
  $("#display3").hide();
  $("#display4").hide();

  if(uname=="")
  {
    $("#display1").show();
    $("#display1").html("Please enter a username");
    $("button1").prop( "disabled", false );
    return false;
  }

  else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
    $("#display2").show();
    $("#display2").html("Please enter a valid e-mail address");
    $("button1").prop( "disabled", false );
    return false;
  }

  else if (psw.length < 6) {
    $("#display3").show();
    $("#display3").html("Password too short");
    $("button1").prop( "disabled", false );
    return false;
  }
  else if(psw!=psw1){
    $("#display4").show();
    $("#display4").html("Password doesn't match");
    $("button1").prop( "disabled", false );
  }
  
  else {
    var cnt=localStorage.length;
    var i;
    for(i=0;i<cnt;i++) {
      var keyvalue="userdetails"+i.toString();
      var accdet = localStorage.getItem(keyvalue);
      account = JSON.parse(accdet);

      if(uname == account.username){
        $("#display1").show();
        $("#display1").html("Username already registered");
        $("button1").prop( "disabled", false );
        return false;
      }

      else if(email == account.email){
        $("#display2").show();
        $("#display2").html("Email-id is already registered");
        $("button1").prop( "disabled", false );
        return false;
      }

    }
    var count=cnt.toString();
    var i="userdetails"+count;
    localStorage.setItem(i, JSON.stringify(txt));

    window.location = "accountdetails.html";
    return false;
  }
    });
 $("#button3").click(function(){
  var age = $("#age").val();
  var gender = $("input[name='gender']:checked").val();
  var address = $("#Address").val();
  var nationality = $( "#City option:selected" ).val();
  var tenth = $("#tenth").val();
  var plustwo = $("#plustwo").val();
  var ug = $("#ug").val();
  var valueslider1 = $('#slider1').val();
  var valueslider2 = $('#slider2').val();
  var valueslider3 = $('#slider3').val();
  var valueslider4 = $('#slider4').val();
  var valueslider5 = $('#slider5').val();
  var valueslider6 = $('#slider6').val();
  var valueslider7 = $('#slider7').val();


  var uname = account.username;
  var email = account.email;
  var psw = account.password;


  var txt   = {"Name":name,"username":uname, "email":email, "password":psw, "age":age, "Gender":gender, "Address":address, "Nationality":nationality,
                "Educational_Qualifications":{"10":tenth,"12":plustwo,"UG":ug},"Performance": {"2010":valueslider1,"2011":valueslider2,
                "2012":valueslider2,"2013":valueslider3,"2014":valueslider4,"2015":valueslider5,"2016":valueslider6}};
  localStorage.setItem(keyvalue,JSON.stringify(txt));
 });
});

