//Calls the ready function to load the jquery funtions...
$(document).ready(function () {

    /**  ***Variables***  */
    //Create the and sets the valid boolean variables to false...
    var valid_name, valid_email, valid_address, valid_city, valid_state, valid_zip, valid_qName, valid_qEmail, valid_qCity = false;
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
    // Creates variables for the users quote input...
    var customer_name, customer_email, customer_city; 

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
    
    /**  ***Squeeze form div and content display function***  */
    
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

    /**This function uses a click event for the html element
     * with the id of quote-form-btn. When the element is clicked
     * an if else statement checks the value of three different
     * boolean variables named valid_name, valid_email, and valid_city. If 
     * the variables are equal to true the element with the id of quote-pop-up 
     * will be hidden, the users input is stored in variables, and an alert box 
     * confirms quote...
     */
    //Calls the click function on the #quote-form-btn element... 
    $("#quote-form-btn").click(function () { 
        //If statement to check the value of valid_name, valid_email, valid_city...
        if(valid_name === true && valid_email == true && valid_city === true){
            //Sets the customer_name variable to the value of the html element with the id of quote-form-name-input...
            customer_name = $("#quote-form-name-input").val();
            //Sets the customer_email variable to the value of the html element with the id of quote-form-email-input...
            customer_email = $("#quote-form-email-input").val();
            //Sets the customer_city variable to the value of the html element with the id of quote-form-city-input...
            customer_city = $("#quote-form-city-input").val();
            //Hides the quote pop-up screen...
            $(".quote-pop-up").hide();
            //Confirm delivery of free quote sent to email address...
            alert("Thank you " + customer_name.toUpperCase() + " for contacting Lawn Love. \n A free quote for the city of " 
            + customer_city.toUpperCase() + " has been sent to the " + customer_email + " email address.")
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
     * element with the id of quote-form-name-input. When the element is
     * out of focus after being in focus the check quote name 
     * function is called...
     */
    //Calls the focusout event on the #quote-form-name-input html element
    $("#quote-form-name-input").focusout(function () { 
        //Calls the check_quote_name() function...
        check_quote_name()
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
     * element with the id of quote-form-email-input. When the element is
     * out of focus after being in focus the check quote email 
     * function is called...
     */
    //Calls the focusout event on the #quote-form-email-input html element
    $("#quote-form-email-input").focusout(function () { 
        //Calls the check_quote_email() function...
        check_quote_email()
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
     * element with the id of quote-form-city-input. When the element is
     * out of focus after being in focus the check quote city
     * function is called...
     */
    //Calls the focusout event on the #quote-form-city-input html element
    $("#quote-form-city-input").focusout(function () { 
        //Calls the check_quote_city() function...
        check_quote_city()
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
     * element with the id of quote-form-name-input. The function creates 
     * a variable called qName to store the value of the 
     * html element with the id of quote-form-name-input. The function
     * uses an if else statement to check the value of the
     * qName variable compared to the nameVal variable and 
     * the length of the qName variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of quote-name-error to change it's css display
     * property to none and set the valid_name boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of quote-name-error to change it's
     * css display property to block and set the valid_name 
     * boolean variable to false.
     */
    //Creates the check_quote_name() function...
    function check_quote_name(){
        //Creates the qName variable to store the value of the the #quote-form-name-input element... 
        var qName = $('#quote-form-name-input').val();
        //Checks the comparison of the qName and nameVal variable and the qName variable's length...
        if(nameVal.test(qName) && qName != ""){
            //True Conditions:
            //Calls the css method on the #quote-name-error html element...
            $('#quote-name-error').css('display','none');
            //Changes the valid_name boolean variable to true... 
            valid_name = true;
        //Else statement...
        }else{
            //False Conditions:
            //Calls the css method on the #quote-name-error html element...
            $('#quote-name-error').css('display','block');
            //Changes the valid_name boolean variable to false... 
            valid_name = false;
        }
    }

    /**This function checks the validation of the form
     * element with the id of quote-form-email-input. The function creates 
     * a variable called qEmail to store the value of the 
     * html element with the id of quote-form-email-input. The function
     * uses an if else statement to check the value of the
     * qEmail variable compared to the emailVal variable and 
     * the length of the qEmail variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of quote-email-error to change it's css display
     * property to none and set the valid_email boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of quote-email-error to change it's
     * css display property to block and set the valid_email 
     * boolean variable to false.
     */
    //Creates the check_quote_email() function...
    function check_quote_email(){
        //Creates the qEmail variable to store the value of the the #quote-form-email-input element... 
        var qEmail = $('#quote-form-email-input').val();
        //Checks the comparison of the qEmail and emailVal variable and the qEmail variable's length...
        if(emailVal.test(qEmail) && qEmail != ""){
            //True Conditions:
            //Calls the css method on the #quote-email-error html element...
            $('#quote-email-error').css('display','none');
            //Changes the valid_email boolean variable to true... 
            valid_email = true;
        }else{
            //False Conditions:
            //Calls the css method on the #quote-email-error html element...
            $('#quote-email-error').css('display','block');
            //Changes the valid_email boolean variable to false... 
            valid_email = false;
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
     * element with the id of quote-form-city-input. The function creates 
     * a variable called qCity to store the value of the 
     * html element with the id of quote-form-city-input. The function
     * uses an if else statement to check the value of the
     * qCity variable compared to the cityVal variable and 
     * the length of the qCity variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of quote-city-error to change it's css display
     * property to none and set the valid_city boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of quote-city-error to change it's
     * css display property to block and set the valid_city
     * boolean variable to false.
     */
    //Creates the check_quote_city() function...
    function check_quote_city(){
        var qCity = $('#quote-form-city-input').val();
        if(cityVal.test(qCity) && qCity != ""){
            //True Conditions:
            //Calls the css method on the #quote-city-error html element...
            $('#quote-city-error').css('display','none');
            //Changes the valid_city boolean variable to true... 
            valid_city = true;
        }else{
            //False Conditions:
            //Calls the css method on the #quote-city-error html element...
            $('#quote-city-error').css('display','block');
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

    /**The click event for dom element with the id of home-page-link displays 
     * the dom element with the class of squeeze and hides the service-page, 
     * contact-page, about-page classes. The event removes the selected and 
     * mobile-selected classes from the menu and mobile-menu links... */
    //Creates the click event for the #home-page element...
    $("#home-page-link").click(function () { 
        //Shows the .squeeze-page element..
        $('.squeeze-page').show();
        //Hides the .services-page element...
        $('.services-page').hide();
        //Hides the .contact-page element...
        $('.contact-page').hide();
        //Hides the .about-page element...
        $('.about-page').hide();
        //Removes a class from the #about-link element...
        $("#about-link").removeClass("selected");
        //Removes a class from the #services-link element...
        $("#services-link").removeClass("selected");
        //Removes a class from the #contactt-link element...
        $("#contact-link").removeClass("selected");
        //Removes a class from the #about-mobile-link element...
        $("#about-mobile-link").removeClass("mobile-selected");
        //Removes a class from the #services-mobile-link element...
        $("#services-mobile-link").removeClass("mobile-selected");
        //Removes a class from the #contact-mobile-link element...
        $("#contact-mobile-link").removeClass("mobile-selected");
    });

    /**The click event for dom element with the id of about-link displays 
     * the dom element with the class of about-page and hides the squeeze-page, care, service-page, 
     * history, consultation, contact-page classes. The event removes the selected and 
     * mobile-selected classes from the menu and mobile-menu links except the #about-link and the 
     * #about-mobile-link... */
    //Creates the click event for the #about-link element...
    $('#about-link').click(function () { 
        //Hides the .squeeze-page element...
        $('.squeeze-page').hide();
        //Hides the .care element...
        $('.care').hide();
        //Hides the .history element...
        $('.history').hide();
        //Hides the .consultation element...
        $('.consultation').hide();
        //Hides the .services-page element...
        $('.services-page').hide();
        //Hides the .contact-page element...
        $('.contact-page').hide();
        //Shows the .about-page element..
        $('.about-page').show();
        //Adds a class to the #about-link element...
        $("#about-link").addClass("selected");
        //Removes a class from the #services-link element...
        $("#services-link").removeClass("selected");
        //Removes a class from the #contact-link element...
        $("#contact-link").removeClass("selected");
        //Adds a class to the #about-mobile-link element...
        $("#about-mobile-link").addClass("mobile-selected");
        //Removes a class from the #services-mobile-link element...
        $("#services-mobile-link").removeClass("mobile-selected");
        //Removes a class from the #contact-mobile-link element...
        $("#contact-mobile-link").removeClass("mobile-selected");
    });

    /**The click event for dom element with the id of about-mobile-link displays 
     * the dom element with the class of about-page and hides the squeeze-page, care, service-page, 
     * history, consultation, contact-page classes. The event removes the selected and 
     * mobile-selected classes from the menu and mobile-menu links except the #about-link and the 
     * #about-mobile-link and closes the mobile menu... */
    //Creates the click event for the #about-mobile-link element...
    $('#about-mobile-link').click(function () { 
        //#mobile-menu element's css modified...
        $('#mobile-menu').css("right","-100vw")
        //#mobile-menu-btn element displayed...
        $('#mobile-menu-btn').show()
        //Hides the .squeeze-page element...
        $('.squeeze-page').hide();
        //Hides the .care element...
        $('.care').hide();
        //Hides the .history element...
        $('.history').hide();
        //Hides the .consultation element...
        $('.consultation').hide();
        //Hides the .services-page element...
        $('.services-page').hide();
        //Hides the .contact-page element...
        $('.contact-page').hide();
        //Shows the .about-page element..
        $('.about-page').show();
        //Adds a class to the #about-link element...
        $("#about-link").addClass("selected");
        //Removes a class from the #services-link element...
        $("#services-link").removeClass("selected");
        //Removes a class from the #contact-link element...
        $("#contact-link").removeClass("selected");
        //Adds a class to the #about-mobile-link element...
        $("#about-mobile-link").addClass("mobile-selected");
        //Removes a class from the #services-mobile-link element...
        $("#services-mobile-link").removeClass("mobile-selected");
        //Removes a class from the #contact-mobile-link element...
        $("#contact-mobile-link").removeClass("mobile-selected");
    });
 
    /**The click event for dom element with the id of services-link displays 
     * the dom element with the class of services-page and hides the squeeze-page, care, about-page, 
     * history, consultation, contact-page. The event removes the selected and 
     * mobile-selected classes from the menu and mobile-menu links except the #services-link and the 
     * #services-mobile-link... */
    //Creates the click event for the #services-link element...
    $('#services-link').click(function () { 
        //Hides the .squeeze-page element...
        $('.squeeze-page').hide();
        //Hides the .care element...
        $('.care').hide();
        //Hides the .history element...
        $('.history').hide();
        //Hides the .consultaion element...
        $('.consultation').hide();
        //Hides the .about-page element...
        $('.about-page').hide();
        //Hides the .contact-page element...
        $('.contact-page').hide();
        //Shows the .services-page element...
        $('.services-page').show();
        //Removes a class from the #about-link element...
        $("#about-link").removeClass("selected");
        //Adds a class to the #services-link element...
        $("#services-link").addClass("selected");
        //Removes a class from the #contact-link element...
        $("#contact-link").removeClass("selected");
        //Removes a class from the #about-mobile-link element...
        $("#about-mobile-link").removeClass("mobile-selected");
        //Adds a class to the #services-mobile-link element...
        $("#services-mobile-link").addClass("mobile-selected");
        //Removes a class from the #contact-mobile-link element...
        $("#contact-mobile-link").removeClass("mobile-selected");
    });

    /**The click event for dom element with the id of services-mobile-link displays 
     * the dom element with the class of services-page and hides the squeeze-page, care, about-page, 
     * history, consultation, contact-page classes. The event removes the selected and 
     * mobile-selected classes from the menu and mobile-menu links except the #services-link and the 
     * #services-mobile-link and closes the mobile menu... */
    //Creates the click event for the #services-mobile-link element...
    $('#services-mobile-link').click(function () { 
        //#mobile-menu element's css modified...
        $('#mobile-menu').css("right","-100vw")
        //#mobile-menu-btn element displayed...
        $('#mobile-menu-btn').show()
        //Hides the .squeeze-page element...
        $('.squeeze-page').hide();
        //Hides the .care element...
        $('.care').hide();
        //Hides the .history element...
        $('.history').hide();
        //Hides the .consultation element...
        $('.consultation').hide();
        //Hides the .about-page element...
        $('.about-page').hide();
        //Hides the .contact-page element...
        $('.contact-page').hide();
        //Shows the .services-page element...
        $('.services-page').show();
        //Removes a class from the #about-link element...
        $("#about-link").removeClass("selected");
        //Adds a class to the #services-link element...
        $("#services-link").addClass("selected");
        //Removes a class from the #contact-link element...
        $("#contact-link").removeClass("selected");
        //Removes a class from the #about-mobile-link element...
        $("#about-mobile-link").removeClass("mobile-selected");
        //Adds a class to the #services-mobile-link element...
        $("#services-mobile-link").addClass("mobile-selected");
        //Removes a class from the #contact-mobile-link element...
        $("#contact-mobile-link").removeClass("mobile-selected");
    });
   
    /**The click event for dom element with the id of contact-link displays 
     * the dom element with the class of contact-page and hides the squeeze-page, care, about-page, 
     * history, consultation, services-page classes. The event removes the selected and 
     * mobile-selected classes from the menu and mobile-menu links except the #contact-link and the 
     * #contact-mobile-link... */
    //Creates the click event for the #contact-link element...
    $('#contact-link').click(function () { 
        //Hides the .squeeze-page element...
        $('.squeeze-page').hide();
        //Hides the .care element...
        $('.care').hide();
        //Hides the .history element...
        $('.history').hide();
        //Hides the .consultation element...
        $('.consultation').hide();
        //Hides the .about-page element...
        $('.about-page').hide();
        //Hides the .services-page element...
        $('.services-page').hide();
        //Shows the .contact-page element...
        $('.contact-page').show();
        //Removes a class from the #about-link element...
        $("#about-link").removeClass("selected");
        //Removes a class from the #services-link element...
        $("#services-link").removeClass("selected");
        //Adds a class to the #contact-link element...
        $("#contact-link").addClass("selected");
        //Removes a class from the #about-mobile-link element...
        $("#about-mobile-link").removeClass("mobile-selected");
        //Removes a class from the #services-mobile-link element...
        $("#services-mobile-link").removeClass("mobile-selected");
        //Adds a class to the #contact-mobile-link element...
        $("#contact-mobile-link").addClass("mobile-selected");
    });

    /**The click event for dom element with the id of contact-mobile-link displays 
     * the dom element with the class of contact-page and hides the squeeze-page, care, about-page, 
     * history, consultation, services-page classes. The event removes the selected and 
     * mobile-selected classes from the menu and mobile-menu links except the #contact-link and the 
     * #contact-mobile-link and closes the mobile menu... */
    //Creates the click event for the #contact-link element...
    $('#contact-mobile-link').click(function () { 
        //#mobile-menu element's css modified...
        $('#mobile-menu').css("right","-100vw")
        //#mobile-menu-btn element displayed...
        $('#mobile-menu-btn').show()
        //Hides the .squeeze-page element...
        $('.squeeze-page').hide();
        //Hides the .care element...
        $('.care').hide();
        //Hides the .history element...
        $('.history').hide();
        //Hides the .consultation element...
        $('.consultation').hide();
        //Hides the .about-page element...
        $('.about-page').hide();
        //Hides the .services-page element...
        $('.services-page').hide();
        //Shows the .contact-page element...
        $('.contact-page').show();
        //Removes a class from the #about-link element...
        $("#about-link").removeClass("selected");
        //Removes a class from the #services-link element...
        $("#services-link").removeClass("selected");
        //Adds a class to the #contact-link element...
        $("#contact-link").addClass("selected");
        //Removes a class from the #about-mobile-link element...
        $("#about-mobile-link").removeClass("mobile-selected");
        //Removes a class from the #services-mobile-link element...
        $("#services-mobile-link").removeClass("mobile-selected");
        //Adds a class to the #contact-mobile-link element...
        $("#contact-mobile-link").addClass("mobile-selected");
    });

    /**The click event for the #squeeze-btn element hides the 
     * .squeeze-page, .care, .history, .consultation, .about-page, 
     * .contact-page class elements and shows the .services-page 
     * element... */
    //Creates the click event for the #squeeze-btn element...
    $('#squeeze-btn').click(function () { 
        //Hides the .squeeze-page element...
        $('.squeeze-page').hide();
        //Hides the .care element...
        $('.care').hide();
        //Hides the .history element...
        $('.history').hide();
        //Hides the .consultation element...
        $('.consultation').hide();
        //Hides the .about-page element...
        $('.about-page').hide();
        //Hides the .contact-page element...
        $('.contact-page').hide();
        //Shows the .services-page element...
        $('.services-page').show();
    });

    /**The click event for the #mobile-menu-quote element closes 
     * the mobile menu and changes the css for the .quote-pop-up 
     * element to display its contents... */
    //Creates a click event for the #mobile-menu-quote element
    $('#mobile-menu-quote').click(function () { 
        //Changes the css for the #mobile-menu element...
        $('#mobile-menu').css("right","-100vw")
        //#mobile-menu-btn element displayed...
        $('#mobile-menu-btn').show()
        //Changes the css for the #quote-pop-up element...
        $('.quote-pop-up').css("display","flex");
        //Programmer's message to the console confirming the mobile quote displayed...
        console.log("Free mobile quote pop-up displayed.")
    });

    /**The click event for the #menu-quote changes the css for the 
     * .quote-pop-up to display its contents... */
    //Creates a click event for the #menu-quote element...
    $('#menu-quote').click(function () { 
        //Changes the css for the #quote-pop-up element...
        $('.quote-pop-up').css("display","flex");
        //Programmer's message to the console confirming the quote displayed...
        console.log("Free quote pop-up displayed.")
    });

    /**The click event for the #history-btn changes the css for the 
     * .quote-pop-up to display its contents... */
    //Creates a click event for the #history-btn element...
    $('#history-btn').click(function () { 
        //Changes the css for the #quote-pop-up element...
        $('.quote-pop-up').css("display","flex");
        //Programmer's message to the console confirming the quote displayed...
        console.log("Free quote pop-up displayed.")
    });

    /**The click event for the #quote-close-btn changes the css for the 
     * .quote-pop-up to hide it and its contents... */
    //Creates a click event for the #quote-close-btn element...
    $('#quote-close-btn').click(function () { 
        //Changes the css for the #quote-pop-up element...
        $('.quote-pop-up').css("display","none");
        //Programmer's message to the console confirming the quote closed...
        console.log("Free quote pop-up closed.")
    });

    /**The click event for the #consultation-btn changes the css for the 
     * .schedule-pop-up to display its contents... */
    //Creates a click event for the #consultation-btn element...
    $('#consultation-btn').click(function () { 
        //Changes the css for the #quote-pop-up element...
        $('.schedule-pop-up').css("display","flex");
        //Programmer's message to the console confirming the schedule pop-up displayed...
        console.log("The schedule pop-up displayed.")
    });
    
    $('#about-page-btm-banner-btn').click(function () { 
        //Changes the css for the #quote-pop-up element...
        $('.schedule-pop-up').css("display","flex");
        //Programmer's message to the console confirming the schedule pop-up displayed...
        console.log("The schedule pop-up displayed.")
    });
    

    /**The click event for the #services-page-btm-banner-btn changes the css for the 
     * .schedule-pop-up to display its contents... */
    //Creates a click event for the #consultation-btn element...
    $('#services-page-btm-banner-btn').click(function () { 
        //Changes the css for the #quote-pop-up element...
        $('.schedule-pop-up').css("display","flex");
        //Programmer's message to the console confirming the schedule pop-up displayed...
        console.log("The schedule pop-up displayed.")
    });

    /**The click event for the #schedule-close-btn changes the css for the 
     * .schedulee-pop-up to hide it and its contents... */
    //Creates a click event for the #schedule-close-btn element...
    $('#schedule-close-btn').click(function () { 
        //Changes the css for the #schedule-pop-up element...
        $('.schedule-pop-up').css("display","none");
        //Programmer's message to the console confirming the schedule pop-up closed...
        console.log("Schedule pop-up closed.")
    });
});
