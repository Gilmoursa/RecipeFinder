$(document).ready(function(){
  // hide email after submission
  toggleEmail(); 
});
function toggleEmail(){
   $('#subscribe').click(function(){
       $('.subscribe').hide();
       $('.confirmation').show();
  });
}