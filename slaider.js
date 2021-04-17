let images =  [
  "https://i1.wallbox.ru/wallpapers/main2/201716/kotenok-seryj.jpg",
"https://i.artfile.ru/2560x1600_269738_[www.ArtFile.ru].jpg",
  "http://s1.fotokto.ru/photo/full/262/2625540.jpg"
];
let active = 0;
function next (){
  let slide = document.getElementById("slider");
  active ++;
  if (active >= images.Length) {
    active = 0;
  }
  slide.src = images [active];
}

function prev (){
  let slide = document.getElementById("slider");
  active --;
  if (active < 0) {
    active = images.Length-1;
    }
    slide.src = images [active];
}
