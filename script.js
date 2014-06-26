/**
 * Created with JetBrains PhpStorm.
 * User: Allar
 * Date: 27.06.14
 * Time: 0:37
 * To change this template use File | Settings | File Templates.
 */
var x;

$(document).ready(function(){
    $('#submit').click(function(event){
        checkFields(event);
        alert(x);
    });
});

function checkFields(event){
    if ($('#check').is(':checked') && ($('#name').val() != "")){
        x = "Everything OK!";
    } else {
        x = "Check the fields!";
        event.preventDefault();
    }
}