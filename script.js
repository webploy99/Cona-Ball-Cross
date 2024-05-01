
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/cona-ball-cross/id6499462648";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ab/97/71/ab9771c8-ca26-17ea-997e-fe3e4de4fcc2/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ce/44/5e/ce445e24-6571-875d-311c-aea78d568391/ea718536-6619-40f4-bf06-d4255eeaad0c_1__U00281_U0029.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/22/02/44/22024446-c4ae-3ad6-ca08-940ccf3c382b/0ac094aa-f0cf-4406-ae42-5e22f8be8660_1__U00282_U0029.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0b/2c/0d/0b2c0d20-5b81-a66a-9b97-71d153ff8f56/df6de3b9-0dac-4488-ac50-a956066955c2_1__U00283_U0029.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

