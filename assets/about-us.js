// document.addEventListener('DOMContentLoaded', function(){
//   // タブに対してクリックイベントを適用
//   const tabs = document.getElementsByClassName('tab');
//   for(let i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener('click', tabSwitch);
//   }

//   // タブをクリックすると実行する関数
//   function tabSwitch(){
//     // タブのclassの値を変更
//     document.getElementsByClassName('is-active')[0].classList.remove('is-active');
//     this.classList.add('is-active');
//     // コンテンツのclassの値を変更
//     document.getElementsByClassName('is-show')[0].classList.remove('is-show');
//     const arrayTabs = Array.prototype.slice.call(tabs);
//     const index = arrayTabs.indexOf(this);
//     document.getElementsByClassName('panel')[index].classList.add('is-show');
//   };
// });

  function tabSwitch(selectTab) {
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    
    if (selectTab == "syrup") {
      document.getElementById('syrup-tab').classList.add('is-active');
      document.getElementById('syrup').classList.add('is-show');
    } else if (selectTab == "curry") {
      document.getElementById('curry-tab').classList.add('is-active');
      document.getElementById('curry').classList.add('is-show');
    };
  };
