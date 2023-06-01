$(document).ready(function () {
  // Masonry 초기화
  var $grid = $(".row").masonry({
    itemSelector: ".col",
    percentPosition: true,
    // 필요한 Masonry 옵션들을 설정해주세요
  });

  // 탭 변경 이벤트 핸들러
  $(".nav-link").on("shown.bs.tab", function () {
    // 현재 탭의 컨텐츠에 있는 이미지들을 로드
    var $currentTabContent = $($(this).attr("data-bs-target")).find(".row");
    $currentTabContent.imagesLoaded(function () {
      // 이미지 로드 완료 후 Masonry 업데이트
      $grid.masonry("layout");

      // 스크롤 초기화
      $currentTabContent.closest(".tab-content").scrollTop(0);
    });
  });
});
