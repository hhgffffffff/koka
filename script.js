

  function openNav(){
    document.getElementById('cart').style.width="450px";
    document.getElementById('cart').style.height="100%"
  }
  function closeNav(){
    document.getElementById('cart').style.width="0px"
  };


  function openSearch(){
    document.getElementById('search').style.display="block"
  }
  function closeSearch(){
    document.getElementById('search').style.display="none"
  };


  function getPrice(){
    document.getElementById('cart').innerHTML+= document.getElementById('cart')
    document.getElementById('cart').style.width="100%"
  }
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
