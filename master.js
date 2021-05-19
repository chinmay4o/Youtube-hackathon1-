console.log("chinmay");

const url =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBb5IgKycJCqluDV8sWdXF9arO_KNdZNv4&maxResults=100";

fetch(url)
  .then((data) => data.json())
  .then((x) => {
    for (var i in x.items) {
      const parent = document.querySelector("#mainbody");
      const container = document.createElement("div");
      container.setAttribute("id", "child");
      parent.append(container);

      //creating thumbnails
      var thumbnail = document.createElement("img");
      thumbnail.src = x.items[i].snippet.thumbnails.medium.url;
      thumbnail.setAttribute("class", "thumb");
      container.append(thumbnail);

      //creating channel thumbnail;
      const infodiv = document.createElement("div");
      infodiv.setAttribute("class", "infodiv");
      container.append(infodiv);
      var cthumb = document.createElement("img");
      cthumb.src = x.items[i].snippet.thumbnails.default.url;
      cthumb.setAttribute("class", "cthumb");
      infodiv.append(cthumb);

      //creating title
      const infodiv1 = document.createElement("div");
      infodiv1.setAttribute("class", "infodiv1");
      infodiv.append(infodiv1);
      var title = document.createElement("a");
      title.setAttribute(
        "href",
        `https://www.youtube.com/watch?v=${x.items[i].id}`
      );
      title.setAttribute("class", "mytitle");
      title.innerHTML = x.items[i].snippet.title;
      infodiv1.append(title);

      //creating channel name
      var channeltitle = document.createElement("a");
      channeltitle.setAttribute(
        "href",
        `https://www.youtube.com/channel/${x.items[i].snippet.channelId}`
      );
      channeltitle.setAttribute("class", "channeltitle");
      channeltitle.innerHTML = x.items[i].snippet.channelTitle;
      infodiv1.append(channeltitle);

      //appending views for
      var views = document.createTextNode("1M views . 6 month ago");
      var span = document.createElement("span");
      span.setAttribute("class", "views");
      span.append(views);
      infodiv1.append(span);
    }
  });

//sidebar toggle button
var menu = document.querySelector(".menu");

menu.addEventListener("click", function (e) {
  var sidebar = document.querySelector(".sidebar");
  var mainbody = document.querySelector("#mainbody");
  //  sidebar.style.display = "none";

  if (sidebar.style.display === "none") {
    sidebar.style.display = "flex";
  } else if ((sidebar.style.display = "flex")) {
    sidebar.style.display = "none";
    mainbody.style.justifyContent = "space-evenly";
  }
});


//search function for
const search = document.querySelector("input");

search.addEventListener("keyup", function (e) {
  let value1 = search.value.toLowerCase();

  searchBar(value1);
});

function searchBar(value) {
  fetch(  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBb5IgKycJCqluDV8sWdXF9arO_KNdZNv4&maxResults=100"
  )
    .then((data1) => data1.json())
    .then((x1) => {
        const parent1 = document.querySelector("#mainbody");
          let str = " ";
          parent1.innerHTML = str;
          
      for (var j in x1.items) {
          console.log("searched for me ")
        //search conditions
        let name1 = x1.items[j].snippet.title.toLowerCase();
        if (name1.includes(value)) {
          const container1 = document.createElement("div");
          container1.setAttribute("id", "child");
          parent1.append(container1);

          //creating thumbnails
          var thumbnail = document.createElement("img");
          thumbnail.src = x1.items[j].snippet.thumbnails.medium.url;
          thumbnail.setAttribute("class", "thumb");
          container1.append(thumbnail);

          //creating channel thumbnail;
          const infodiv = document.createElement("div");
          infodiv.setAttribute("class", "infodiv");
          container1.append(infodiv);
          var cthumb = document.createElement("img");
          cthumb.src = x1.items[j].snippet.thumbnails.default.url;
          cthumb.setAttribute("class", "cthumb");
          infodiv.append(cthumb);

          //creating title
          const infodiv1 = document.createElement("div");
          infodiv1.setAttribute("class", "infodiv1");
          infodiv.append(infodiv1);
          var title = document.createElement("a");
          title.setAttribute(
            "href",
            `https://www.youtube.com/watch?v=${x1.items[j].id}`
          );
          title.setAttribute("class", "mytitle");
          title.innerHTML = x1.items[j].snippet.title;
          infodiv1.append(title);

          //creating channel name
          var channeltitle = document.createElement("a");
          channeltitle.setAttribute(
            "href",
            `https://www.youtube.com/channel/${x1.items[j].snippet.channelId}`
          );
          channeltitle.setAttribute("class", "channeltitle");
          channeltitle.innerHTML = x1.items[j].snippet.channelTitle;
          infodiv1.append(channeltitle);

          //appending views for
          var views = document.createTextNode("1M views . 6 month ago");
          var span = document.createElement("span");
          span.setAttribute("class", "views");
          span.append(views);
          infodiv1.append(span);
        }
      }
    });
}
