



function navbarvol2(flag){
  let $nav_background = $('#main-navbar');                    //FOR THE NAV BACKGROUND COLOR
  let $text = $('.hdr_txt');                                   // FOR THE NAV TEXT
  if(flag)
  {
    $nav_background.css('min-height',"4vw");
    $nav_background.css('background-color',"	rgb(248,248,248)");
    $nav_background.css('box-shadow',"0 2px 4px -2px rgba(0,0,0,.2)");
    $text.css('color','crimson');
    $('.temp ul li a').addClass("test-class");
  }
  else                                                         //in order to reset the navigation's bar design we set the same css properties as the ones set in the css file
  {
    $nav_background.css('background-color',"transparent");
    $nav_background.css('box-shadow',"none");
    $text.css('color','white');
    $('.temp ul li a').removeClass("test-class");
  }
}

function text_fade(content){


    $("#container_skill_text").fadeOut(function() {
      $(this).html(content)
    }).fadeIn();

}

function description_appear(data,counter){
  $.each(data,function(index,item){
    if(parseInt(index) === counter)
      {
      $(".carousel-description").html("<h1 class = ' h1-description align-middle '>" + item.title + "</h1>");
      $(".carousel-description").append("<p class = 'p-description'>" + item.description + "</p>");
      $(".carousel-description").append('<button type="button" class="btn btn-light  " style = "margin:0 auto; width:50%">WEBSITE LINK</button>');
      }
  });
};

function icons_appear(lang,counter){
  $.each(lang,function(index,lang){
    if($('#vid'+counter).hasClass(lang))
      $('.techused2 ul').append("<li><img  src='icons/" + lang.toLowerCase() + ".png'  class='d-inline-block align-top badge spin2 elementToFadeInAndOut icons2' alt='Github Link'></li>");
  });
}


var flag2 = true;
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#skills').position().top)   ///if the user has scrolled past the header then navbarvol2(true) gets called changing the navbar into a more visible one since the background will now be white
      {
      navbarvol2(true);
      if(flag2)
        {
          $('#skills').removeClass("pb-5"); //removes bottom padding from the 'SKILL SET' and adds it to the text that will be added bellow it//
          $('#mydiv').addClass("pb-5");
          text_fade("<p class = 'text-fade'>Icons are Clickable!!!You can look at projects that i've build using that specific language or framework by clicking at them</p>");
          flag2 = false;
        }
      }
    else
      navbarvol2(false);                             ///however,if the user returns to the header,navbarvol2(false) gets called changing the navigation bar into its former transparent design
});

// PROJECTS BOX FUNCTIONALITY //

$.getJSON("json/project-description.json",function(data){
    console.log(data)
    const lang = ['HTML5','CSS','JS','JQUERY','AJAX','BOOTSTRAP'];
    let $counter = 1;
    description_appear(data,$counter);
    icons_appear(lang,$counter);
    //IF NEXT ARROW IS PRESSED
    console.log($counter)
    console.log(data[$counter]['title'])
    $('#project-git').click(() => {window.open(data[$counter]['gitlink'])})
    $('.carousel-control-next').on('click',function(){
        $('.techused2 ul').empty();
        $('.carousel-description').empty();
        $counter++;
        if($counter>3)
          $counter = 1;
        description_appear(data,$counter);
        icons_appear(lang,$counter);

    });
    // IF PREV ARROW IS PRESSED //
    $('.carousel-control-prev').on('click',function(){
        $('.techused2 ul').empty();
        $('.carousel-description').empty();
        if($counter===1)
          $counter=3;
        else
          $counter--;
          description_appear(data,$counter);
          icons_appear(lang,$counter);
      });

    });
    //END PROJECTS BOX FUNCTIONALITY END//
