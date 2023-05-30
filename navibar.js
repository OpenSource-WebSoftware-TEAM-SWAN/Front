// btnNaviBar 클릭 시
const body = document.querySelector('body');
const navModal = document.querySelector('.navModal');
const btnOpenPopup = document.querySelector('.btnNaviBar');
const mainNav = document.querySelector('.main-nav');

btnOpenPopup.addEventListener('click', () => {
    navModal.style.display='inline-block';
    btnOpenPopup.style.display='none';

    if (navModal.style.display='inline-block') {// 화면 고정
        body.style.overflow = 'hidden'; 
        mainNav.style.overflowY = 'auto';
    }
});

navModal.addEventListener('click', (event) => {
    if (event.target === navModal) { // 외부 클릭 시 창닫음
        navModal.style.display='';
        btnOpenPopup.style.display='inline-block';

        if (navModal.style.display!='inline-block') {  // 화면 고정 해제
            body.style.overflowX = 'hidden';
        }
    }
});

var toggled=0;
var titleCnt=0;
$(document).ready(function () {

    $("#images-modal").load("./imagesModal.html");

    // 목표 추가
    $('.add-title').click(function(){
        let str;
        if(titleCnt>0){
        str="<div class='elementGoal'>"+
                "<a class='aGoal' href='#'>새 버킷리스트("+titleCnt+")</a>"+
                "<div>"+
                    "<button>수정</button>"+
                    "<button>삭제</button>"+
                "</div>"+
                "<div class='elementSub'>"+
                    "<a href='#'>새 소제목</a>"+
                    "<div class='elementFeed'>"+
                        "<a href='#'>새 피드</a>"+
                    "</div>"+
                "</div>"+
            "</div>"
        }
        else{
        str="<div class='elementGoal'>"+
                "<a class='aGoal' href='#'>새 버킷리스트</a>"+
                "<div>"+
                    "<button>수정</button>"+
                    "<button>삭제</button>"+
                "</div>"+
                "<div class='elementSub'>"+
                    "<a href='#'>새 소제목</a>"+
                    "<div class='elementFeed'>"+
                        "<a href='#'>새 피드</a>"+
                    "</div>"+
                "</div>"+
            "</div>"
        }
        $('.headline-info').prepend(str);
        titleCnt++;
    });

    //버킷리스트 누를 시
    
    // 최근항목
    $('.divRecentSeed').click(function(){
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
    $('#searchBox').focus(function(){
        $('.divSearch').css('border','1px solid #f26322');
    });

    $('#searchBox').blur(function(){
        $('.divSearch').css('border','1px solid black');
    });
});

$(document).on('click','.aGoal',function(){
    $(this).next('div').next('div').css('display','block');
});