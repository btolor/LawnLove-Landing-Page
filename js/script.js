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
});