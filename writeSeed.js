$(document).ready(function(){
    $('img').on("error",function(){
        $(this).attr("src","./images/이지형.png");
    })
    let $grid2 = $(".row").masonry({
        percentPosition:true,
    });
    $grid2.masonry('reloadItems');
    $grid2.masonry('layout');
})

// 이미지 추가
$('.writeSeed_body_imgPlus').click(function(e){
    e.preventDefault();
    $('#uploadImg').click();
});
function changeValue(obj){
    let tmp=$('.writeSeed_body_imgPlus');   
    let str='<img src="'+obj.value+'" alt="">';
    $('.writeSeed_body_img').remove($('.writeSeed_body_imgPlus'));
    $('.writeSeed_body_img').append(str);
    $('.writeSeed_body_img').append(tmp);
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
        '<div class="card">'+
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
        $('.writeSeed').click();
    }
});