
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input3').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            

    /*==================================================================
    [ Chose Radio ]*/
    $("#radio1").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
        }
    });

    $("#radio2").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
        }
    });
        
  
    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var Age = $('.validate-input input[name="Age"]');
    var occupation = $('.validate-input textarea[name="occupation"]');
    var state = $('.validate-input textarea[name="state"]');

    

    $('.validate-form').on('submit',function(){
        var check = true;
        // $('.modal').modal('show',function(e){

        //  e.preventDefault();

        // });
        //  e.preventDefault();
        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(Age).val().trim() == '') {
            showValidate(Age);
            check=false;
        }

        if($(occupation).val().trim() == ''){
            showValidate(occupation);
            check=false;
        }
        if($(state).val().trim() == ''){
            showValidate(state);
            check=false;
        }

        return check;
    });


    $('.validate-form .input3').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);