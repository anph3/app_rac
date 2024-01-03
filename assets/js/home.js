var homePage = document.getElementById('home');
var signInPage = document.getElementById('login');
var signUpPage = document.getElementById('sign-up');

function displayPage(pageName) {
    var pages = ['home', 'login', 'sign-up'];
    for (var i = 0; i < pages.length; i++) {
        var page = document.getElementById(pages[i]);
        if (pages[i] === pageName) {
            if (pageName === 'home')
                page.style.display = "contents";
            else
                page.style.display = "block";
            page.classList.add('page-transition'); // Thêm lớp page-transition khi hiển thị trang
        } else {
            page.style.display = "none";
            page.classList.remove('page-transition'); // Xóa lớp page-transition khi ẩn trang
        }
    }

    setTimeout(function() {
        var currentPage = document.getElementById(pageName);
        currentPage.classList.remove('page-transition'); // Loại bỏ lớp page-transition sau 500ms
    }, 500);
}
