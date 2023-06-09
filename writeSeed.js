$(document).ready(function(){
    $('img').on("error",function(){
        $(this).attr("src","./images/이지형.png");
    })
    let $grid2 = $(".row").masonry({
        percentPosition:true,
    });
    $grid2.masonry('reloadItems');
    $grid2.masonry('layout');

});

// 이미지 추가
$('.writeSeed_body_imgPlus').click(function(e){
    e.preventDefault();
    $('#uploadImg').click();
});
function changeValue(obj){
    var fReader=new FileReader();
    fReader.readAsDataURL(obj.files[0]);
    fReader.onloadend=function(event){
        let tmp=$('.writeSeed_body_imgPlus');   
        let str='<img src="'+event.target.result+'" alt="">';
        $('.writeSeed_body_img').remove($('.writeSeed_body_imgPlus'));
        $('.writeSeed_body_img').append(str);
        $('.writeSeed_body_img').append(tmp);
    }
    changeValue(0);
}

// 게시하기
$('.writeSeed_body_btn').click(function(e){
    e.preventDefault(); // DB 연결 시 삭제
    if($('#seedGoal').val()!=0){
        let selectedTab = $('#nav-tabContent .tab-pane.active');
        let putArea = selectedTab.children('div').children('div');
        let h=new Date().getHours()+':';
        let m=new Date().getMinutes()+' ';
        let date=new Date().getDate()+'/';
        let month=parseInt(new Date().getMonth()+1)+'/';
        let year=new Date().getFullYear();
        let time=''+h+m+date+month+year;
        let str=
        '<div class="col-6 col-md-4 col-lg-3">'+
        '<div class="card" onclick="showSeed();">'+
        '<img src="./images/sameple_image.jpeg" class="card-img-top">'+ // 내부 이미지의 첫 번째
        '<div class="card-body">'+
        '<div class="card-text">'+
        '<h3>'+$('#seedGoal').val()+'</h3>'+ // 피드 제목
        '<p>'+$('#seedMemo').val()+'</p>'+ // 피드 메모
        '<p style="text-align:right;">'+time+'</p>'+ // 게시 시간
        '</div></div></div></div>'
        putArea.append(str);
        let $grid2 = $(".row").masonry({
            percentPosition:true,
        });
        $grid2.masonry('reloadItems');
        $grid2.masonry('layout');
        $('#seedGoal').val('');
        $('#seedMemo').val('');
        $('.writeSeed_body_img').children('img').remove();
        $('.writeSeed').css('display','none');
    }

    // 값 불러오기
    $('.card').click(function(){
        let currentPeed = $(this);
        let pos=$(this).children('div').children('div');

        // 이미지 불러오기
        let src=$(this).children('img').attr('src');
        $('.seedView_imgs').children('img').attr('src',src);

        // 텍스트 불러오기
        $('.seedView_goal').text(pos.children('h3').text());
        $('.seedView_memo').text(pos.children('p:eq(0)').text());
        $('.seedView_time').text(pos.children('p:eq(1)').text());

        $('.delPeed').click(function(){
            $('.seedViewBg').click();
            currentPeed.remove();
            let $grid2 = $(".row").masonry({
                percentPosition:true,
            });
            $grid2.masonry('reloadItems');
            $grid2.masonry('layout');
        });
    })
});

/*피드 추가버튼*********************************************************************/
const bodyBucket = document.querySelector('body');
const writeSeed = document.querySelector('.writeSeed');
const writeSeedClose = document.querySelector('.writeSeedClose');
const btnWrite = document.querySelector('.btnWrite');

btnWrite.addEventListener('click', () => {
    writeSeed.style.display = 'inline-block';// 화면 고정
    bodyBucket.style.overflow = 'hidden';
});

writeSeedClose.addEventListener('click', (event) => {
    if (event.target === writeSeedClose) { // 외부 클릭 시 창닫음
        writeSeed.style.display = '';
        if (writeSeed.style.display != 'inline-block') {  // 화면 고정 해제
            bodyBucket.style.overflow = 'auto';
        }
    }
});