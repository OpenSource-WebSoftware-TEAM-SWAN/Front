// btnNaviBar 클릭 시
const body = document.querySelector('body');
const navModal = document.querySelector('.navModal');
const btnOpenPopup = document.querySelector('.btnNaviBar');

btnOpenPopup.addEventListener('click', () => {
    navModal.style.display='inline-block';
    btnOpenPopup.style.display='none';

    if (navModal.style.display='inline-block') {// 화면 고정
        body.style.overflow = 'hidden'; 
    }
});

navModal.addEventListener('click', (event) => {
    if (event.target === navModal) { // 외부 클릭 시 창닫음
        navModal.style.display='';
        btnOpenPopup.style.display='inline-block';

        if (navModal.style.display!='inline-block') {  // 화면 고정 해제
        body.style.overflow = 'auto';
        }
    }
});

var toggled=0;
$(document).ready(function () {

    $("#images-modal").load("./imagesModal.html");

    // add toogle
    $('.add-title').click(function(){
        var toggle=document.createElement("div")
        toggle.classList.add("first-toggle");
        toggle.innerHTML="SEX"
        document.getElementById("headline").appendChild(toggle);
    });
    

    // 모달 열기
    $('#images-modal').click(function(){
        $('#images-modal').addClass('slide-in');
    });
    
    // 모달 닫기
    $('#images-modal').click(function(){
        $('#images-modal').removeClass('slide-in').addClass('slide-out');
    });
    
    // 최근항목
    $('.btnRecentSeed').click(function(){
        $('.divRecentSeedOpen').slideToggle("fast");
        if(toggled==1){
            $('.imgToggle').attr("src","images/button_down.png");
            toggled=0;
        }
        else if(toggled==0){
            $('.imgToggle').attr("src","images/button_up.png");
            toggled=1;
        };
    });

    //검색
    $('.btnSearch').focus(function(){
        
    });
});
