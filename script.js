window.onscroll = function () {
    var scrollButton = document.getElementById('scroll-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

function scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' })
}
