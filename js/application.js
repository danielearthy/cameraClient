var currentCamera = 1 
var currentImage = 0 //most recent Image, starts here at default

getImage = function(){
  $.ajax({
    //
    //url: "https://imageAPI.com/camera/"+currentCamera+"/image/"+currentImage"
    
    //for testing purposes on localhost with dummy content
    //camera 1 for dogs, camera 2 for Ferrari's
    url: "/camera/"+currentCamera+"/image/"+currentImage+".json"
  }).done(function(data) {
    $(".image").attr('src',data.imageUrl)
  });
  
}



$(function(){
  getImage()

  $("#next").on('click',function(){
    if (currentImage == 0)
      return
    currentImage--
    getImage()
  })
  
  $("#previous").on('click',function(){
    currentImage++
    getImage()
  })

  $("#camera-select").on('change', function(){
    currentCamera = $(this).val()
    getImage()
  })
});