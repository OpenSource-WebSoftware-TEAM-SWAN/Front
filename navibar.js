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
        let str1 = "fa-solid fa-pencil";
        let str2 = "fa-solid fa-trash";
        let str=
        "<ul class='elementGoal'>"+
            "<li><a class='aGoal'>New goal</a></li>"+
            "<li class='exception'><div style='float:right;'>"+
                "<button class='editGoal'>Edit</button>"+"&nbsp;"+
                "<button class='delGoal'>Delete</button></button>"+
            "</div></li>"+
        "</ul>"
        $('.headline-info').prepend(str);
        titleCnt++;

        // 마우스 호버 시 버튼 뜨게
        $('.elementGoal').hover(function(){
            $(this).children('.exception').children('div').children('.editGoal').css('display','inline-block');
            $(this).children('.exception').children('div').children('.delGoal').css('display','inline-block');
        }, function(){
            $(this).children('.exception').children('div').children('.editGoal').css('display','none');
            $(this).children('.exception').children('div').children('.delGoal').css('display','none');
        });

        
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

//수정하기
$(document).on('click', '.editGoal', function() {
    const editGoalElement = $(this).parent().parent().prev().children();
    editGoalElement.replaceWith(function() {
        let changeGoalElement = $(this).text();
        return $("<input class='aGoal' "+"value='"+changeGoalElement+"'"+" style='width: 100%; outline:#f26322 1px solid; border:0;'>", {
        }).on('keypress', function(e) {
        if (e.keyCode === 13) {
            $(this).css('display','inline-block');
            $(this).next().css('display','inline-block');
            let newGoalElement = $(this).val();
            $(this).replaceWith(function() {
            return $("<a class='aGoal' href='#' style='width: 10em'>" + newGoalElement + "</a>");
            
            });
        }
        }).on('blur', function(){
            $(this).css('display','inline-block');
            $(this).next().css('display','inline-block');
            let newGoalElement = $(this).val();
            $(this).replaceWith(function() {
            return $("<a class='aGoal' href='#' style='width: 10em'>" + newGoalElement + "</a>");
            
            });
        });
    });
    $('.aGoal').focus();
    $('.aGoal').select();
});

//삭제하기
$(document).on('click', '.delGoal', function() {
    // $(this).css('display','none'); 수정 시 버튼들 사라지기
    $(this).parent().parent().parent().remove();
});

$('.elementGoal').hover(function(){
    $(this).children('.exception').children('div').children('.editGoal').css('display','inline-block');
    $(this).children('.exception').children('div').children('.delGoal').css('display','inline-block');
}, function(){
    $(this).children('.exception').children('div').children('.editGoal').css('display','none');
    $(this).children('.exception').children('div').children('.delGoal').css('display','none');
});