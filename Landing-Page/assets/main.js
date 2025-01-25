new Swiper('.container.swiper', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3, 
        },
        600: {
            slidesPerView: 2, 
        },
        0: {
            slidesPerView: 1, 
        },
    },
  });
new Swiper('.container1.swiper', {
    // spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        1440: {
            slidesPerView: 6, 
        },
        1024: {
            slidesPerView: 5, 
        },
        0: {
            slidesPerView: 4, 
        },
    },
});
const swiper_slide = document.querySelectorAll('.group.swiper-wrapper > .swiper-slide');
const background_img = [
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?auto=format&amp;fit=fill&amp;q=80&amp;w=656",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fab36e5433f9457968d5f4e5c2ebed38fdd4b17c-656x657.png?auto=format&fit=fill&q=80&w=656",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b5fc531af3d3e8ef47d72cbf5a2ccdddd7912276-656x657.png?auto=format&fit=fill&q=80&w=656",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/e5282eb187f0a06c879fe6996c9831ff2d7752a3-656x657.svg?auto=format&fit=fill&q=80&w=656",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a2d0a92f82549cafa4006bc47e8d7287505a3c40-656x657.png?auto=format&fit=fill&q=80&w=656",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ac80f85e9c522cb59b932c1b95caf3fa1ef81a13-656x657.png?auto=format&fit=fill&q=80&w=656"
]
const champion_img = [
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&amp;fit=fill&amp;q=80&amp;w=619",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=568",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=568",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=568",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=568",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=568"
]
const champion_name = [
  "Akali",
  "Yasuo",
  "Lux",
  "Jinx",
  "Thresh",
  "Leona"
]
const champion_description = [
  "Sát Thủ Đơn Độc",
  "Kẻ Bất Dung Thứ",
  "Tiểu Thư Ánh Sáng",
  "Khẩu Pháo Nổi Loạn",
  "Cai Ngục Xiềng Xích",
  "Bình Minh Rực Rỡ"
]
function switchChampion(item, index){
  const background = document.querySelector('.background-champions img');
  const championImg = document.querySelector('.champions-img-text img');
  const championNameElement = document.querySelector('.champions-text .text1');
  const championDescriptionElement = document.querySelector('.champions-text .text2'); 
  swiper_slide.forEach(slide => {
    slide.style.backgroundColor = "";
  });
  item.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  item.style.borderRadius = "10px";

  background.src = background_img[index];
  championImg.src = champion_img[index];
  championNameElement.textContent = champion_name[index];
  championDescriptionElement.textContent = champion_description[index];
}
swiper_slide.forEach((item, index) => {
    item.addEventListener('click', () => {
      switchChampion(item, index);
    });
});
const background_VIDEO = [
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0eb5bc3bbb7794eceea3a5e7948906e1cbcd027f-5120x1810.png?auto=format&fit=fill&q=80&w=1315",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/de076d7f25b6472f2a6f72a5795fc182d9413962-5120x1810.png?auto=format&fit=fill&q=80&w=1315",
  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/973e16ef8399297ebf1856cde64444d9a18631a0-5120x1810.png?auto=format&fit=fill&q=80&w=1315"
]
const VIDEO = [
  "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",
  "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4",
  "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4"
]
const HEADER = [
  "CHẾ ĐỘ CHƠI PHỔ BIẾN NHẤT",
  "TẤT CẢ NGẪU NHIÊN, CHỈ ĐI ĐƯỜNG GIỮA",
  "MỘT TRẬN HỖN CHIẾN ĐỂ GIÀNH NGÔI VỊ BÁ CHỦ"
]
const DESCRIPTION = [
  "Dọn đường, tham gia giao tranh tổng, phá hủy Nhà Chính của địch trước khi Nhà Chính của bạn bị phá hủy.",
  "Chiến đấu trên một cây cầu băng giá với những vị tướng ngẫu nhiên để xông thẳng tới Nhà Chính của địch trong chế độ 5v5 vui nhộn và hỗn loạn.",
  "Tập hợp những vị tướng để chiến đấu cho bạn. Vượt qua 7 đối thủ khác để trở thành người sống sót cuối cùng."
]
function switchPlayMode(index){
  const playModeVideo = document.querySelector('.circle-video-border video');
  const background_ = document.querySelector('.background-3 img');
  const text1 = document.querySelector('.circle-video-text .text1');
  const text2 = document.querySelector('.circle-video-text .text2');
  background_.src = background_VIDEO[index];
  playModeVideo.src = VIDEO[index]
  text1.textContent = HEADER[index];
  text2.textContent = DESCRIPTION[index];
  const playModeOption = document.querySelectorAll('.play-mode-option');
  playModeOption.forEach((item, i) => {
    const textDiv = item.querySelector('div')
    if(i == index)
      textDiv.style.color = "white";
    else
      textDiv.style.color = "gray";
  });
}

function openMenu(){
  const BUTTON = document.querySelector('.menu-icon');
  const MENU = document.querySelector('.menu');
  const BLUR = document.querySelector('.overlay');
  MENU.style.visibility = "visible";
  MENU.style.opacity = "1";
  MENU.style.transform = "translateX(0)";
  BLUR.style.visibility = "visible";
  BLUR.style.opacity = "1";
  console.log("open");
}
function closeMenu(){
  const CLOSE = document.querySelector('.menu-close');
  const MENU = document.querySelector('.menu');
  const BLUR = document.querySelector('.overlay');
  MENU.style.visibility = "hidden";
  MENU.style.opacity = "0";
  MENU.style.transform = "translateX(100%)";
  BLUR.style.visibility = "hidden";
  BLUR.style.opacity = "0";
  console.log("close");
}
function arrowMenu(){
  const LIST = document.querySelectorAll('.hidden-content');
  const ARROW = document.querySelector('.menu-icon-arrow');
  if(ARROW.style.transform == "rotate(270deg)"){
    ARROW.style.transform = "rotate(90deg)";
  }
  else
    ARROW.style.transform = "rotate(270deg)";
  LIST.forEach(item => {
    if(item.style.display == "flex")
      item.style.display = "none";
    else
      item.style.display = "flex";
  })
}
function openMenu2(){
  const LOGO = document.querySelector('.logo');
  const MENU = document.querySelector('.sub-menu');
  const BLUR = document.querySelector('.overlay');
  if(MENU.style.visibility === "visible")
  {
    MENU.style.visibility = "hidden";
    MENU.style.opacity = "0";
    MENU.style.transform = "translateY(-100%)";
    BLUR.style.visibility = "hidden";
    BLUR.style.opacity = "0";
  }
  else{
    MENU.style.visibility = "visible";
    MENU.style.opacity = "1";
    MENU.style.transform = "translateY(0)";
    BLUR.style.visibility = "visible";
    BLUR.style.opacity = "1";
  }

  console.log("open");
}
function closeMenu2(){
  const BLUR = document.querySelector('.overlay');
  const MENU = document.querySelector('.sub-menu');
  MENU.style.visibility = "hidden";
  MENU.style.opacity = "0";
  MENU.style.transform = "translateY(-100%)";
  BLUR.style.visibility = "hidden";
  BLUR.style.opacity = "0";

  console.log("Menu closed");
}
