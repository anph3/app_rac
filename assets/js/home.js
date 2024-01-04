var homePage = document.getElementById('home');
var signInPage = document.getElementById('login');
var signUpPage = document.getElementById('sign-up');

function displayPage(pageName) {
    var pages = ['home', 'login', 'sign-up', 'forgot-password', 'otp'];
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

var digitGroups = document.querySelectorAll('.digit-group');

digitGroups.forEach(function(group) {
    var inputs = group.querySelectorAll('input');

    inputs.forEach(function(input, index) {
        input.setAttribute('maxlength', '1');
        input.addEventListener('keyup', function(e) {
            var parent = this.parentElement;
            var nextIndex = index + 1;
            var prevIndex = index - 1;
            if ((e.keyCode === 8 || e.keyCode === 37) && input.value === '') {
                if (prevIndex >= 0) {
                    inputs[prevIndex].removeAttribute('disabled');
                    inputs[prevIndex].focus();
                }
            } else{
                if (nextIndex < inputs.length && !(e.keyCode === 8 || e.keyCode === 37)) {
                    inputs[nextIndex].removeAttribute('disabled');
                    inputs[nextIndex].focus();
                    inputs[nextIndex].value = null; // Xóa giá trị của input tiếp theo
                } else {
                    var autoSubmit = parent.getAttribute('data-autosubmit');
                    if (autoSubmit) {
                        parent.submit();
                    }
                }
            }
            if (!(input.value === '' && nextIndex=='1'))
                input.setAttribute('disabled', 'disabled');
        });
    });
});




