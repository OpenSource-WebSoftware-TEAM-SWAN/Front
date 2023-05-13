    const body = document.querySelector('body');
    const writeSeed = document.querySelector('.writeSeed');
    const btnOpenPopup = document.querySelector('.btnWrite');


    btnOpenPopup.addEventListener('click', () => {
    writeSeed.style.display == 'inline-block';// 화면 고정
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
    });