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
    });


    $('#mobile-menu-btn').click(function () { 
        $('#mobile-menu').css("right","0")
        $('#mobile-menu-btn').hide()
    });

    $('#close').click(function () { 
        $('#mobile-menu').css("right","-100vw")
        $('#mobile-menu-btn').show()
    });
});