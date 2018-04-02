var css = require('./_scss/main.scss');

//Binding toggle-event to buttons
$("#btn-type-search").on("click", function() {
    $(this).siblings('ul').toggle();
});

$("#btn-goal-search").on("click", function() {
    $(this).siblings('ul').toggle();
});

$("#btn-homeplace-search").on("click", function() {
    $(this).siblings('ul').toggle();
});


//Binding choose event for options
$(".list-item").on("click", function() {
    $(this).closest('ul').siblings('button').find('p')[0].innerHTML = $(this)[0].innerHTML;
    $(this).closest('ul').siblings('button').css('border-color', '#2DC7D9');
    $(this).closest('ul').toggle();
});

//Binding disable option
$(".clear-list-item").on("click", function() {
    console.log( $(this).closest('ul').siblings('button').find('p').data('title'));
    $(this).closest('ul').siblings('button').find('p')[0].innerHTML =  $(this).closest('ul').siblings('button').find('p').data('title');
    $(this).closest('ul').siblings('button').css('border-color', '#d9e4ea');$(this).closest('ul').toggle();
});


//Close search input on click outside
$('html').click(function(e) {
    if ($('#search-check').is(':checked')) {
        if (e.target.id !== 'header-search-input' && e.target.id !== 'search-input-container'){
            $('#search-input-container').click();
        }
    }
});
