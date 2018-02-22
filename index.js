$(function() {
    $('.thumbnail').on('click', function(event) {
        const targetSrc = $(event.currentTarget).find('img').attr('src');
        //prints src http
        console.log(targetSrc);

        //prints alt
        const targetAlt = $(event.currentTarget).find('img').attr('alt');
        console.log(targetAlt);

        //variable and log out

        $('.hero').attr('src', targetSrc).attr('alt', targetAlt);
    });

});


//.click OR .keydown OR .mousedown 
//find image we clicked and replace with hero img -- src..
//update alt