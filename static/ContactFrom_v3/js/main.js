
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
    // var name = $('.validate-input input[name="name"]');
    // var Age = $('.validate-input input[name="Age"]');
    // var occupation = $('.validate-input textarea[name="occupation"]');
    // var state = $('.validate-input textarea[name="state"]');

    

    // $('.validate-form').on('submit',function(){
    //     var check = true;
    //     // $('.modal').modal('show',function(e){

    //     //  e.preventDefault();

    //     // });
    //     //  e.preventDefault();
    //     if($(name).val().trim() == ''){
    //         showValidate(name);
    //         check=false;
    //     }


    //     if($(Age).val().trim() == '') {
    //         showValidate(Age);
    //         check=false;
    //     }

    //     if($(occupation).val().trim() == ''){
    //         showValidate(occupation);
    //         check=false;
    //     }
    //     if($(state).val().trim() == ''){
    //         showValidate(state);
    //         check=false;
    //     }

    //     return check;
    // });


    // $('.validate-form .input3').each(function(){
    //     $(this).focus(function(){
    //        hideValidate(this);
    //    });
    // });

    // function showValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).addClass('alert-validate');
    // }

    // function hideValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).removeClass('alert-validate');
    // }
    
    
    


})(jQuery);


function validateForm() {
    // var x = document.forms["myform"]["name"];
    // console.log(x)
    // if (x.value == "") {
    //   window.alert("Pincode must be filled");
    //   console.log("Pincode must be filled")
    //   return false;
    // }
    var y = document.forms["myform"]["lat"];
    var x = document.forms["myform"]["lon"];
    var z = document.forms["myform"]["name"];
    var a = document.forms["myform"]["Age"];
    var b = document.forms["myform"]["occupation"];
    var c = document.forms["myform"]["State"];
    





    if (y.value == "") {
      window.alert("All Fields must be filled");
      return false;
    }
    if (x.value == "") {
        window.alert("All Fields must be filled");
        return false;
      }
    if (z.value == "") {
        window.alert("All Fields must be filled");
        return false;
      }
      if (a.value == "") {
        window.alert("All Fields must be filled");
        return false;
      }
      if (b.value == "Occupation") {
        window.alert("All Fields must be filled");
        return false;
      }
      if (c.value == "Select State") {
        window.alert("All Fields must be filled");
        return false;
      }
  }