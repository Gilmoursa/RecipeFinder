$(document).ready(function(){
    $('#search').click(function(e){ 
      e.preventDefault(); 
      clearFeed();
      var keyword = getKeyword();
      debugger;
      $.ajax({
        url: "http://food2fork.com/api/search",
        type: "GET",
        data: { q: keyword, key: '4f5a06d7e318f0826d16847dec546eb3' },
        dataType: "JSON"
      }).done(function(yumData){
        debugger;
            yumData.recipes.forEach(function(recipe){
                $('#feed').append(recipe.publisher);
            });
      }); 
    })
 });
  function clearFeed(){
    $('#feed').html(' ');
  };
  function getKeyword(){
    return $('#keyword').val();
  };
  // function getImageTag(image){
  //   $('#feed').append(image_tag);
  // };