    const body = document.querySelector('body');
    const writeSeed = document.querySelector('.writeSeed');
    const btnOpenPopup = document.querySelector('.btnWrite');


    btnOpenPopup.addEventListener('click', () => {
    writeSeed.style.display = 'inline-block';// 화면 고정
    body.style.overflow = 'hidden';
    });

    writeSeed.addEventListener('click', (event) => {
      if (event.target === writeSeed) { // 외부 클릭 시 창닫음
        writeSeed.style.display = '';

        if (writeSeed.style.display != 'inline-block') {  // 화면 고정 해제
            body.style.overflow = 'auto';
        }
    }
    });

    $(document).ready(function () {
        $("#btn1").click(function () {
        $("#so1").remove();
    });

    // nav-btn 클릭 시 main-nav 슬라이드 애니메이션 효과
    $(".nav-btn").click(function () {
        $(".main-nav").addClass("slide-in active");
        $("#Article2").addClass("slide-in active");
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
    });

