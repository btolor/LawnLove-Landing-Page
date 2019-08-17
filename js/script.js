//Calls the ready function to load the jquery funtions...
$(document).ready(function () {

    /**  ***Variables***  */
    //Create the and sets the valid boolean variables to false...
    var valid_name, valid_email, valid_address, valid_city, valid_state, valid_zip = false;
    //Creates the nameVal, emailVal, addressVal, cityVal, stateVal, and zipVal variables...
    var nameVal, emailVal, addressVal, cityVal, stateVal, zipVal;
    //Sets the nameVal variable to a regex pattern...
    nameVal = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
    //Sets the emailVal variable to a regex pattern...
    emailVal = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //Sets the addressVal variable to a regex pattern...
    addressVal = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    //Sets the cityVal variable to a regex pattern...
    cityVal = /^[a-zA-Z.-]+(?:[\s-][\/a-zA-Z.]+)*$/;
    //Sets the stateVal variable to a regex pattern...
    stateVal = /^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/;
    //Sets the zipVal variable to a regex pattern...
    zipVal = /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/;

    /**  ***Mobile menu buttn open and close funtions***  */

    /**This function uses a click event for the html element
     * with the id of mobile-menu-btn. When the element is 
     * clicked the html element with the id of mobile-menu,
     * css is modified to display the menu and the element 
     * with the mobile-menu-btn id is hidden...
    */
   //Click function for the #mobile-menu-btn element...
    $('#mobile-menu-btn').click(function () { 
        //#mobile-menu element's css modified...
        $('#mobile-menu').css("right","0")
        //#mobile-menu-btn element hidden...
        $('#mobile-menu-btn').hide()
    });

    /**This function uses a click event for the html element
     * with the id of close. When the element is clicked the
     * html element with the id of mobile-menu, css is modified
     * to remove the elements contents form the pages view and 
     * the element with the mobile-menu-btn id is dsiplayed...
    */
   //Click function for the #close element...
    $('#close').click(function () { 
        //#mobile-menu element's css modified...
        $('#mobile-menu').css("right","-100vw")
        //#mobile-menu-btn element displayed...
        $('#mobile-menu-btn').show()
    });
    
    /**  ***Squeeze form section and content display function***  */
    
    /**This function uses a click event for the html element
     * with the id of form-btn. When the element is clicked
     * an if else statement checks the value of two different
     * boolean variables named valid_name and valid_email. If 
     * both variables are equal to true the element withthe id
     * of form-btn will be hidden and the elements with the 
     * class names of squeeze, basic-serv, care, history, and
     * consultation will be shown. The html element with the
     * id of form-info, html will be changed to display the 
     * new forms info message and an alert box is called to
     * welcome the user to the news letter... 
     */
    //Calls the click function on the #form-btn element...  
    $("#form-btn").click(function () { 
        //Checks the value of the valid_name and valid_email boolean variables...
        if(valid_name === true && valid_email == true){
            //True Conditions:
            //Hides the #form-btn html element...
            $("#form-btn").hide();
            //Changes the css marging-top property for the .form html element...
            $('.form').css('margin-top','3%');
            //Displays the .squeezed html element...
            $(".squeezed").show();
            //Displays the .basic-serv html element...
            $(".basic-serv").show();
            //Displays the .care html element...
            $(".care").show();
            //Displays the .history html element...
            $(".history").show();
            //Displays the .consultation html element...
            $(".consultation").show();
            //Changes the #form-info html element's html...
            $('#form-info').html('Fill out our form and one of our specialists <br>will reach out with a quote within 24 hours.');
            //Displays the welcome alert box...
            alert('Thank you for joining our news letter. We have some new and exciting content coming soon!');
        }
    }); 

    /**  ***Form input fields validation functions***  */

    /**This function uses the focusout event for the from
     * element with the id of f-name. When the element is
     * out of focus after being in focus the check name 
     * function is called...
     */
    //Calls the focusout event on the #f-name html element
    $("#f-name").focusout(function () { 
        //Calls the check_name() function...
        check_name()
    });

    /**This function uses the focusout event for the from
     * element with the id of email. When the element is
     * out of focus after being in focus the check email 
     * function is called...
     */
    //Calls the focusout event on the #email html element
    $("#email").focusout(function () { 
        //Calls the check_email() function...
        check_email()
    });

    /**This function uses the focusout event for the from
     * element with the id of address. When the element is
     * out of focus after being in focus the check address
     * function is called...
     */
    //Calls the focusout event on the #address html element
    $("#address").focusout(function () { 
        //Calls the check_address() function...
        check_address()
    });

    /**This function uses the focusout event for the from
     * element with the id of city. When the element is
     * out of focus after being in focus the check city
     * function is called...
     */
    //Calls the focusout event on the #city html element
    $("#city").focusout(function () { 
        //Calls the check_city() function...
        check_city()
    });

    /**This function uses the focusout event for the from
     * element with the id of state. When the element is
     * out of focus after being in focus the check state 
     * function is called...
     */
    //Calls the focusout event on the #state html element
    $("#state").focusout(function () { 
        //Calls the check_state() function...
        check_state()
    });

    /**This function uses the focusout event for the from
     * element with the id of zip. When the element is
     * out of focus after being in focus the check zip
     * function is called...
     */
    //Calls the focusout event on the #zip html element
    $("#zip").focusout(function () { 
        //Calls the check_zip() function...
        check_zip()
    });

    /**  ***Validation Functions***  */

    /**This function checks the validation of the form
     * element with the id of f-name. The function creates 
     * a variable called name to store the value of the 
     * html element with the id of f-name. The function
     * uses an if else statement to check the value of the
     * name variable compared to the nameVal variable and 
     * the length of the name variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of name-error to change it's css display
     * property to none and set the valid_name boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of name-error to change it's
     * css display property to block and set the valid_name 
     * boolean variable to false.
     */
    //Creates the check_name() function...
    function check_name(){
        //Creates the name variable to store the value of the the #f-name element... 
        var name = $('#f-name').val();
        //Checks the comparison of the name and nameVal variable and the name variable's length...
        if(nameVal.test(name) && name != ""){
            //True Conditions:
            //Calls the css method on the #name-error html element...
            $('#name-error').css('display','none');
            //Changes the valid_name boolean variable to true... 
            valid_name = true;
        //Else statement...
        }else{
            //False Conditions:
            //Calls the css method on the #name-error html element...
            $('#name-error').css('display','block');
            //Changes the valid_name boolean variable to false... 
            valid_name = false;
        }
    }

    /**This function checks the validation of the form
     * element with the id of email. The function creates 
     * a variable called email to store the value of the 
     * html element with the id of email. The function
     * uses an if else statement to check the value of the
     * email variable compared to the emailVal variable and 
     * the length of the email variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of email-error to change it's css display
     * property to none and set the valid_email boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of email-error to change it's
     * css display property to block and set the valid_email 
     * boolean variable to false.
     */
    //Creates the check_email() function...
    function check_email(){
        //Creates the email variable to store the value of the the #email element... 
        var email = $('#email').val();
        //Checks the comparison of the email and emailVal variable and the email variable's length...
        if(emailVal.test(email) && email != ""){
            //True Conditions:
            //Calls the css method on the #email-error html element...
            $('#email-error').css('display','none');
            //Changes the valid_email boolean variable to true... 
            valid_email = true;
        }else{
            //False Conditions:
            //Calls the css method on the #email-error html element...
            $('#email-error').css('display','block');
            //Changes the valid_email boolean variable to false... 
            valid_email = false;
        }
    }

    /**This function checks the validation of the form
     * element with the id of address. The function creates 
     * a variable called address to store the value of the 
     * html element with the id of address. The function
     * uses an if else statement to check the value of the
     * address variable compared to the addressVal variable and 
     * the length of the address variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of address-error to change it's css display
     * property to none and set the valid_address boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of address-error to change it's
     * css display property to block and set the valid_address 
     * boolean variable to false.
     */
    //Creates the check_address() function...
    function check_address(){
        var address = $('#address').val();
        if(addressVal.test(address) && address != ""){
            //True Conditions:
            //Calls the css method on the #address-error html element...
            $('#address-error').css('display','none');
            //Changes the valid_address boolean variable to true... 
            valid_address = true;
        }else{
            //False Conditions:
            //Calls the css method on the #address-error html element...
            $('#address-error').css('display','block');
            //Changes the valid_address boolean variable to false... 
            valid_address = false;
        }
    }

    /**This function checks the validation of the form
     * element with the id of city. The function creates 
     * a variable called city to store the value of the 
     * html element with the id of city. The function
     * uses an if else statement to check the value of the
     * city variable compared to the cityVal variable and 
     * the length of the city variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of city-error to change it's css display
     * property to none and set the valid_city boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of city-error to change it's
     * css display property to block and set the valid_city
     * boolean variable to false.
     */
    //Creates the check_city() function...
    function check_city(){
        var city = $('#city').val();
        if(cityVal.test(city) && city != ""){
            //True Conditions:
            //Calls the css method on the #city-error html element...
            $('#city-error').css('display','none');
            //Changes the valid_city boolean variable to true... 
            valid_city = true;
        }else{
            //False Conditions:
            //Calls the css method on the #city-error html element...
            $('#city-error').css('display','block');
            //Changes the valid_city boolean variable to false... 
            valid_city = false;
        }
    }

    /**This function checks the validation of the form
     * element with the id of state. The function creates 
     * a variable called state to store the value of the 
     * html element with the id of state. The function
     * uses an if else statement to check the value of the
     * state variable compared to the stateVal variable and 
     * the length of the state variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of state-error to change it's css display
     * property to none and set the valid_state boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of state-error to change it's
     * css display property to block and set the valid_state 
     * boolean variable to false.
     */
    //Creates the check_state() function...
    function check_state(){
        //Creates the state variable to store the value of the the #state element... 
        var state = $('#state').val();
        //Checks the comparison of the state and stateVal variable and the state variable's length...
        if(stateVal.test(state) && state != ""){
            //True Conditions:
            //Calls the css method on the #state-error html element...
            $('#state-error').css('display','none');
            //Changes the valid_state boolean variable to true... 
            valid_state = true;
        }else{
            //False Conditions:
            //Calls the css method on the #state-error html element...
            $('#state-error').css('display','block');
            //Changes the valid_state boolean variable to false... 
            valid_state = false;
        }
    }

    /**This function checks the validation of the form
     * element with the id of zip. The function creates 
     * a variable called zip to store the value of the 
     * html element with the id of zip. The function
     * uses an if else statement to check the value of the
     * zip variable compared to the zipVal variable and 
     * the length of the zip variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of zip-error to change it's css display
     * property to none and set the valid_zip boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of zip-error to change it's
     * css display property to block and set the valid_zip
     * boolean variable to false.
     */
    //Creates the check_zip() function...
    function check_zip(){
        //Creates the zip variable to store the value of the the #zip element... 
        var zip = $('#zip').val();
        //Checks the comparison of the zip and zipVal variable and the name variable's length...
        if(zipVal.test(zip) && zip != ""){
            //True Conditions:
            //Calls the css method on the #zip-error html element...
            $('#zip-error').css('display','none');
            //Changes the valid_zip boolean variable to true... 
            valid_zip = true;
        }else{
            //False Conditions:
            //Calls the css method on the #zip-error html element...
            $('#zip-error').css('display','block');
            //Changes the valid_zip boolean variable to false... 
            valid_zip = false;
        }
    }

    $("#home-page-link").click(function () { 
        $('.squeeze-page').show();
        $('.services-page').hide();
        $('.contact-page').hide();
        $('.about-page').hide();
    });

    $('#about-link').click(function () { 
        $('.squeeze-page').hide();
        $('.care').hide();
        $('.history').hide();
        $('.consultation').hide();
        $('.services-page').hide();
        $('.contact-page').hide();
        $('.about-page').show();
    });
    $('#about-mobile-link').click(function () { 
        //#mobile-menu element's css modified...
        $('#mobile-menu').css("right","-100vw")
        //#mobile-menu-btn element displayed...
        $('#mobile-menu-btn').show()
        $('.squeeze-page').hide();
        $('.care').hide();
        $('.history').hide();
        $('.consultation').hide();
        $('.services-page').hide();
        $('.contact-page').hide();
        $('.about-page').show();
    });
 
    $('#services-link').click(function () { 
        $('.squeeze-page').hide();
        $('.care').hide();
        $('.history').hide();
        $('.consultation').hide();
        $('.about-page').hide();
        $('.contact-page').hide();
        $('.services-page').show();
    });
    $('#services-mobile-link').click(function () { 
        //#mobile-menu element's css modified...
        $('#mobile-menu').css("right","-100vw")
        //#mobile-menu-btn element displayed...
        $('#mobile-menu-btn').show()
        $('.squeeze-page').hide();
        $('.care').hide();
        $('.history').hide();
        $('.consultation').hide();
        $('.about-page').hide();
        $('.contact-page').hide();
        $('.services-page').show();
    });

    $('#contact-link').click(function () { 
        $('.squeeze-page').hide();
        $('.care').hide();
        $('.history').hide();
        $('.consultation').hide();
        $('.about-page').hide();
        $('.services-page').hide();
        $('.contact-page').show();
    });
    $('#contact-mobile-link').click(function () { 
        //#mobile-menu element's css modified...
        $('#mobile-menu').css("right","-100vw")
        //#mobile-menu-btn element displayed...
        $('#mobile-menu-btn').show()
        $('.squeeze-page').hide();
        $('.squeeze-page').hide();
        $('.care').hide();
        $('.history').hide();
        $('.consultation').hide();
        $('.about-page').hide();
        $('.services-page').hide();
        $('.contact-page').show();
    });

});