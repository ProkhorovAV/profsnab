$(function(){

    var elements =  $('.carousel .slide_item').toArray();
        elements.forEach(function(a){
          $(a).hide();
       });


    var count = elements.length;
    var index = 0;
    $(elements[index]).show();
    $('.next_button').on('click',function(){
        index++;
        if (index>count-1) {
            index=0;
            $(elements[index]).show();
            $(elements[count-1]).hide();
        }else{
            $(elements[index]).show();
            $(elements[index-1]).hide();
        }


    });
    $('.prev_button').on('click',function(){
        index--;
        if (index<0) {
            index=count-1;
            $(elements[index]).show();
            $(elements[0]).hide();
        }else{
            $(elements[index]).show();
            $(elements[index+1]).hide();
        }


    });

    $('.element').click(function(){
        console.log(this);
    })


});





