console.log("top-page")

if(window.innerWidth > 880){
  let products_title = document.getElementsByClassName("grid-product__title");
  for(var i=0;i < products_title.length; i++){
    let e = products_title[i];
    if(e.textContent.indexOf("【") > -1){
      let new_word = e.textContent.split("【")[0] + "<br>【" + e.textContent.split("【")[1];
      e.innerHTML = new_word;
    }
  }
}
const CustomHTML_AboutUs = `
  <div class="display-pc top_page--about_us">
    <img src="https://cdn.shopify.com/s/files/1/0530/1947/6163/files/2021-04-08_21.30.15.png?v=1617885050"> 

    <p class="text-center">
      <a href="/about-us" class="btn">VIEW ALL</a>
    </p>
    <br>
    <br>
  </div>
  <div class="display-sp text-center top_page--about_us">
    <br>
    <br>
    <strong>たくさんの人に楽しんでもらえる、<br>安心で美味しい商品を届けられないだろうか？</strong>
    <br>
    <br>
    <img src="https://cdn.shopify.com/s/files/1/0530/1947/6163/files/2021-04-17_19.18.03.png?v=1618655355">
    <br>
    <img src="https://cdn.shopify.com/s/files/1/0530/1947/6163/files/top_page--about_us-detail2.svg?v=1618656401" style="width:90%;">
    <br>
    <br>
    <p class="text-center">
      <a href="/about-us" class="btn">VIEW ALL</a>
    </p>
    <br>
    <br>
    </small>
  </div>

`;
const TopPage_FirstView = `
  <div class="display-pc">
    <img src="https://cdn.shopify.com/s/files/1/0530/1947/6163/files/Mainvisual.png?v=1618636377"> 
  </div>
  <div class="display-sp">
    <img src="https://cdn.shopify.com/s/files/1/0530/1947/6163/files/2.png?v=1618658816"> 
  </div>
`;

function insertAboutUs(CustomHTML_AboutUs){
  console.log("insert");
  document.getElementById("custom_html--about_us").innerHTML = CustomHTML_AboutUs;
}
function h2AddClassName(className){
  let h2_element = document.getElementsByTagName("h2");
  for(var i=0;i < h2_element.length; i++){
    h2_element[i].classList.add(className);
  }
}
function firstviewImage(){
  document.getElementById("firstview_image").innerHTML = TopPage_FirstView;
}
document.addEventListener("load", insertAboutUs(CustomHTML_AboutUs));
document.addEventListener("load", h2AddClassName("subtitle"));
document.addEventListener("load", firstviewImage());
