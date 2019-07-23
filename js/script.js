$(document).ready(function () {

    /**
     * Click function to display the full
     * form when the html element with an 
     * id of #form-btn is clicked...*/
    //Calls the click function on the #form-btn element...  
    $("#form-btn").click(function () { 
        //Hides the #form-btn html element
        $("#form-btn").hide();
        //Displays the .squeezed html element
        $(".squeezed").show();
        //Displays the .basic-serv html element
        $(".basic-serv").show();

        $(".care").show();
        $(".history").show();
        $(".consultation").show();
        check_name()
    });


    $('#mobile-menu-btn').click(function () { 
        $('#mobile-menu').css("right","0")
        $('#mobile-menu-btn').hide()
    });

    $('#close').click(function () { 
        $('#mobile-menu').css("right","-100vw")
        $('#mobile-menu-btn').show()
    });

    function check_name(){
        var name = $('#f-name').val();
        var nameVal = /^[a-zA-Z]*$/;
        if(nameVal.test(name) && name != ""){
            $('#f-name').css('background-color','green');
        }else{
            $('#f-name').css('background-color','red');
        }
    }



});