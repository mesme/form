$("#form").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
        $("#form")[0].reset();
    }
});

function submitForm(){
    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: $("#form").serialize(),
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}