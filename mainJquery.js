$(document).ready(function () {
    // nav-btn 클릭 시 main-nav 슬라이드 애니메이션 효과
    $(".nav-btn").click(function () {
        $(".main-nav").addClass("slide-in active");
        $(".headline").addClass("slide-in active")
    });

    // 메인 네비게이션 외 다른 부분 클릭 시 메인 네비게이션 닫기
    $(document).mouseup(function (e) {
        var container = $(".main-nav");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".main-nav").removeClass("active");
        }
    });

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
    
});
