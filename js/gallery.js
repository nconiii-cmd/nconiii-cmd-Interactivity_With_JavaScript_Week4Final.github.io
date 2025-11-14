/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    
     console.log('upDate triggered for:', previewPic && previewPic.alt);
     
     var image = previewPic.src;
      document.getElementById("image").style.backgroundImage = "url('" + image +"')";
     
      var text = previewPic.alt;
     document.getElementById("image").innerHTML = text;
     
     
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       function unDo(){
       console.log('unDo triggered');
       // clear the inline background so the CSS/default applies
       document.getElementById("image").style.backgroundImage = "";
       document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
           
       }
       document.addEventListener('DOMContentLoaded', function () {
        var previews = document.querySelectorAll('img.preview');
        for (var i = 0; i < previews.length; i++) { // added for loop
         var img = previews[i];
         img.setAttribute('tabindex', '0'); // add tabindex attribute

        // attach mouse and keyboard friendly events
        img.addEventListener('mouseover', function () { upDate(this); });
        img.addEventListener('mouseout', function () { unDo(); });
        img.addEventListener('focus', function () { upDate(this); });
        img.addEventListener('blur', function () { unDo(); });
    }
});