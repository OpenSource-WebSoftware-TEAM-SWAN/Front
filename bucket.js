var nav_cnt=0;
let tmpNav='nav-'+nav_cnt;
$(document).ready(function () {
  // Masonry 초기화
  var $grid = $(".row").masonry({
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
    // 버튼 이동

  });
});

//탭 클릭 시 버튼
function onTab(){
  let tmpHeight = $('.editSub').outerHeight();
  $('.editSub').css('display','inline-block');
  $('.delSub').css('display','inline-block');
  let pos=$(".nav-link:focus").offset();
  pos=({left:pos.left,top:pos.top-tmpHeight});
  let currentTab=$(".nav-link:focus");
  $('.editSub').offset(pos).click(function(){
    let currentVal=$(currentTab).text();
    $('.editSub').css('display','none'); 
    $('.delSub').css('display','none');
    currentTab.css('display','none');

    let str=
    "<input value='"+currentVal+"'"+" style='width: 10em; border: 0;'>";
    currentTab.after(str);
    currentTab.next().focus();
    currentTab.next().select();
    
    //탭 수정 버튼
    currentTab.next().on('keypress',function(e){
      if(e.keyCode===13){
        currentTab.html(currentTab.next().val());
        currentTab.css('display','inline-block');
        currentTab.next().remove();
      }
      }).on('blur',function(){
        currentTab.html(currentTab.next().val());
        currentTab.css('display','inline-block');
        currentTab.next().remove();
      });
    });

    //탭 삭제 버튼
    let tmpWidth = $('.editSub').outerWidth();
    pos=({left:pos.left+tmpWidth,top:pos.top})
    $('.delSub').offset(pos).click(function(){
      currentTab.remove();
      $('.editSub').css('display','none'); 
      $('.delSub').css('display','none');
    });

    // blur
    currentTab.blur(function(){
      $('.editSub').css('display','none'); 
      $('.delSub').css('display','none');
    });
}

// 탭 추가 버튼
$('.linkPlus').click(function(){
  let str;
  str=
  '<button class="nav-link custom-button" '+
  'data-bs-toggle="tab" data-bs-target="#'+tmpNav+'" type="button" '+
  'role="tab" aria-controls="'+tmpNav+'" aria-selected="false">New Subgoal</button>';
  let tmp=$(this);
  $('#nav-tab').remove('linkPlus');
  $('#nav-tab').append(str);
  $('#nav-tab').append(tmp);
  tmp.prev().replaceWith(function(){
    let changeGoalElement=$(this).text();
    return $("<input value='"+changeGoalElement+"'"+" style='width: 10em; border: 0;'>", {
    }).on('keypress', function(e) {
    if (e.keyCode === 13) {
        let newGoalElement = $(this).val();
        $(this).replaceWith(function() {
          $(this).focus();
          let tmpMasonry='{"percentPosition": true}';
          let tmpStr=
          '<div class="tab-pane fade " id="'+tmpNav+'" role="tabpanel" aria-labelledby="'+tmpNav+'-tab">'+
          '<div class="container-fluid">'+
          '<div class="row" data-masonry='+tmpMasonry+'>'+
          '</div></div></div>'
          let tmpdiv = $('#nav-tabContent').append(tmpStr);
          tmpdiv.focus();
          nav_cnt++;
        return $('<button class="nav-link custom-button" data-bs-toggle="tab" data-bs-target="#'+tmpNav+'" type="button" '+
          'role="tab" aria-controls="'+tmpNav+'" aria-selected="false" onclick="onTab();">'+newGoalElement+'</button>');
        });
    }
  }).on('blur', function(){
    let newGoalElement = $(this).val();
      $(this).replaceWith(function() {
        $(this).focus();
        let tmpMasonry='{"percentPosition": true}';
        let tmpStr=
        '<div class="tab-pane fade " id="'+tmpNav+'" role="tabpanel" aria-labelledby="'+tmpNav+'-tab">'+
        '<div class="container-fluid">'+
        '<div class="row" data-masonry='+tmpMasonry+'>'+
        '</div></div></div>'
        let tmpdiv = $('#nav-tabContent').append(tmpStr);
        tmpdiv.focus();
        nav_cnt++;
      return $('<button class="nav-link custom-button" data-bs-toggle="tab" data-bs-target="#'+tmpNav+'" type="button" '+
        'role="tab" aria-controls="'+tmpNav+'" aria-selected="false" onclick="onTab();">'+newGoalElement+'</button>');
      });
    });
  });
  $('.linkPlus').prev().focus();
  $('.linkPlus').prev().select();
});