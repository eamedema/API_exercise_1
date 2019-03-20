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
      $(`.${number}`).append(`<p>${title}</p>`);
      $(`.${number}`).append(`<a class="button" href="${link}">LINK</a>`);
      return i < 10;
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
