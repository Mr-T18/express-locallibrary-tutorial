document.addEventListener('DOMContentLoaded', function() {
  // id="mySidebarWrapper" は div(class='col-sm-2 sidebar-wrapper') に付けたID
  const sidebarWrapper = document.getElementById('mySidebarWrapper');
  // id="sidebarToggle" はトグルボタンに付けたID
  const toggleBtn = document.getElementById('sidebarToggle');
  // content-wrapper はメインコンテンツの div(class='col-sm-10') に付けたクラス
  const contentWrapper = document.querySelector('.content-wrapper');

  if (sidebarWrapper && toggleBtn && contentWrapper) {
    toggleBtn.addEventListener('click', function() {
      console.log('Toggle button clicked! sidebarWrapper:', sidebarWrapper);
      sidebarWrapper.classList.toggle('collapsed');
      // contentWrapper のマージンも連動して切り替える
      contentWrapper.classList.toggle('collapsed-margin');
    });
  }

  // 初回ロード時の状態調整（任意）
  // サイドバーが閉じている状態で始まる場合、
  // sidebarWrapper.classList.add('collapsed');
  // contentWrapper.classList.add('collapsed-margin');
  // をここに記述できます。
});