$(document).ready(function(){
  // display original 4 articles
  displayArticles(); 
  // on "load more" button load 3 more articles 
  addThumbnailsListener();
});
// format article thumbnails
function generateThumbnailFor(article){
    var url = article.url;
    if (typeof url === "undefined") {
      $('#sponsored').hide();
    }
    var title = article.title;
    var id = article.article_id;
    var imageUrl = "http:" + article.thumbnail;
    var imageTag =  "src='" + imageUrl +"'";
    var articleThumbnail = "<div class='media'><div class='media-left'><a href='" + url + "'><img class='media-object' " + imageTag + " alt='"+ title +"'></a></div><div class='media-body'><a href='" + url + "'><h3 class='media-heading'>" + title + "</h3></a></div></div><br><br>";
    return articleThumbnail;
}
// insert article thumbnails into page
function addThumbnailsToDOM(tag, thumbnailsJSON){
    $(tag).append(generateThumbnailFor(thumbnailsJSON));
}
// display original 4 articles
function displayArticles(){
    $.ajax({
      url: 'http://aplus.com/api/v1/sidebar_aplus_data.json',
      type: "GET",
      dataType: "JSONP"
      }).success(function(articleData){
        addThumbnailsToDOM('#sponsored', articleData.sponsored);        
        for ( i = 0; i < 4; i++) {
          addThumbnailsToDOM('#feed', articleData.trending[i]) ;
      }
    });
}
// on "load more" button load 3 more articles 
function addThumbnailsListener(){
    $('#loader').click(function(){
        $.ajax({
          url: 'http://aplus.com/api/v1/sidebar_aplus_data.json',
          type: "GET",
          dataType: "JSONP"
      }).success(function(articleData){
          var lastThumbnailIndex = $('.media').length - 1;
          var nextThumbnails = articleData.trending.slice(lastThumbnailIndex);
          for ( i = 0; i < 3; i++) {
            addThumbnailsToDOM('#feed',nextThumbnails[i]);
        }
      });
  });
}
