$(document).ready(function(){
    $("#button1").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        if (typeof(Storage) !== "undefined") {
          $("#display").hide();
          $("#display1").hide();
          $("#display2").hide();
          if(username==""){
            $("#display1").show();
            $("#display1").html("Enter UserName");
            return false;
          }
          else if(password==""){
            $("#display2").show();
            $("#display2").html("Enter Password");
            return false;
          }
          else {
            var count = localStorage.length;
            var i;
            for(i=0;i<count;i++) {
              var keyvalue="userdetails"+i.toString();
              var accdet = localStorage.getItem(keyvalue);
              account = JSON.parse(accdet);
              if(password == account.password && (username == account.username||username == account.email)) {
                window.location = "loginsuccess.html";
                return false;
              }
            }
            $("#display").show();
            $("#display").html("Incorrect UserName or Password");
            $("button1").prop( "disabled", false );
            $("#username").val("");
            $("#password").val("");
            return false;
          }
        }
    });
});
