let popup=document.querySelector(".modal"),openPopupButton=document.querySelector(".write-us"),closePopupButton=popup.querySelector(".modal-close"),userName=popup.querySelector(".user-name"),feedbackForm=popup.querySelector(".feedback-form"),userEmail=popup.querySelector(".user-email");function initMap(){let e=new google.maps.Map(document.getElementById("map"),{zoom:17,center:{lat:59.939107,lng:30.321275},disableDefaultUI:!0,scrollwheel:!1});new google.maps.Marker({position:{lat:59.938655,lng:30.323206},map:e,icon:"img/map-marker.png"})}openPopupButton.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),userName.focus({preventScroll:!0})}),closePopupButton.addEventListener("click",function(e){popup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.remove("modal-show")});