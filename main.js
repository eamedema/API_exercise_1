$(()=> {

  $.get('https://www.reddit.com/r/aww/.json', (data) => {
    // console.log(data);
    let title,
        img,
        link,
        number;

    $.each(data.data.children, (i)=> {
      // console.log(data.data.children[i].data.title);
      title = (data.data.children[i].data.title);
      img = (data.data.children[i].data.thumbnail);
      link = (data.data.children[i].data.url);
      number = [i];

      console.log(link);

      $('.container').append(`<div class="${number} item"></div>`)
      $(`.${number}`).append(`<img src="${img}"></img>`);
      $(`.${number}`).append(`<p class="titles">${title}</p>`);
      $(`.${number}`).append(`<a class="buttons" href="${link}">CHECK IT OUT</a>`);
      $(`.${number}`).append(`<img class="${number}" src="down.png"></img>`);
      return i < 10;
    });

    $('img.0').click(function() {
      $('html, body').animate({
        scrollTop: $("div.1").offset().top
      }, 1000)
    });
    $('img.1').click(function() {
      $('html, body').animate({
        scrollTop: $("div.2").offset().top
      }, 1000)
    });
    $('img.2').click(function (){
      $('html, body').animate({
        scrollTop: $("div.3").offset().top
      }, 1000)
    });
    $('img.3').click(function (){
      $('html, body').animate({
        scrollTop: $("div.4").offset().top
      }, 1000)
    });
    $('img.4').click(function (){
      $('html, body').animate({
        scrollTop: $("div.5").offset().top
      }, 1000)
    });
    $('img.5').click(function (){
      $('html, body').animate({
        scrollTop: $("div.6").offset().top
      }, 1000)
    });
    $('img.6').click(function (){
      $('html, body').animate({
        scrollTop: $("div.7").offset().top
      }, 1000)
    });
    $('img.7').click(function (){
      $('html, body').animate({
        scrollTop: $("div.8").offset().top
      }, 1000)
    });
    $('img.8').click(function (){
      $('html, body').animate({
        scrollTop: $("div.9").offset().top
      }, 1000)
    });
    $('img.9').click(function (){
      $('html, body').animate({
        scrollTop: $("div.0").offset().top
      }, 1000)
    });


    //     let title = (data.title);
    //     let language = (data.language);
    //     let length = (data.posts.length);
    //     let par1 = (data.posts[0].title);
    //
    //     $('body').append(`<div>Title: ${title}</div>`);
    //     $('body').append(`<div>Language: ${language}</div>`);
    //     $('body').append(`<div>How Many: ${length}</div>`);
    //     $('body').append(`<div>First Paragraph Title: ${par1}</div>`);
  });

});
