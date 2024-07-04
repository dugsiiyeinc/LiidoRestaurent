// Grap all variable needed
let mobile = document.querySelector('.mobile__menu');
let openMobile = document.querySelector('.modal__open');
let closeMobile = document.querySelector('.modal__close');
let playVideo =document.querySelector('.fa-circle-play');
let youtubeVideo = document.querySelector('.dugsiye__video')

closeMobile.addEventListener('click',function(e) {
  if(closeMobile) {
     mobile.style.display = 'none';
  }

})

openMobile.addEventListener('click',function(e) {
    if(openMobile) {
       mobile.style.display = 'block';
    }
  
  })

  playVideo.addEventListener('click',function(e) {
   if(playVideo) {
      youtubeVideo.style.display = 'block';
      console.log("is playing ?");
   }
 
 
 })