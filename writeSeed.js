$(document).ready(function(){
    $('img').on("error",function(){
        $(this).attr("src","./images/이지형.png");
    })
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