$('document').ready(function(){
    loadEshop();
});

function loadEshop() {
    $.getJSON('eshop.json', function ( data ) {
        console.log(data);

    }) 
}