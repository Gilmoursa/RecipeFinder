$(document).ready(function(){
  displayRecipes();
  $('#search').click(function(e){ 
    e.preventDefault(); 
    clearFeed();
    displayRecipes();
  })
 });

  function clearFeed(){
    $('#feed').html(' ');
  };

  function link(keyword){
      return 'http://api.yummly.com/v1/api/recipes?_app_id=e117b611&_app_key=41a3c4bb5d793a1d5733392e96218eab&q=' + keyword;
  };

  function keyword(){
    return $('#keyword').val();
  };

  function generateThumbnailFor(recipe){
    var imageUrl = recipe.imageUrlsBySize[90]; 
    var title = recipe.sourceDisplayName;
    var id = recipe.id;
    var imageTag =  "<img src='" + imageUrl +"'>";
    var yumUrl = "http://www.yummly.com/recipe/" + id +"";
    var recipeThumbnail = "<div class='col-sm-6 col-md-4'><div class='thumbnail'>" + imageTag + "<div class='caption'><a href='"+ yumUrl +  "'><h4>" + title + "</h4></a></div></div></div>"
    $('#feed').append(recipeThumbnail);
  };

  function displayRecipes(){
    $.ajax({
      url: link(keyword()),
      type: "GET",
      dataType: "JSON"
      }).success(function(yumData){
        yumData.matches.forEach(function(recipe){
          generateThumbnailFor(recipe);
      });
    });
  };
  //http://api.yummly.com/v1/api/recipe/French-Onion-Soup-The-Pioneer-Woman-Cooks-_-Ree-Drummond-41364?_app_id=e117b611&_app_key=41a3c4bb5d793a1d5733392e96218eab