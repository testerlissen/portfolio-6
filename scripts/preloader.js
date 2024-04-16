document.body.onload = function(){
    setTimeout( function(){
    var preloader = document.getElementById('preloader');
    if ( !preloader.classList.contains('hide') )
    {
        preloader.classList.add('hide');
    }
    }, 3500);

}