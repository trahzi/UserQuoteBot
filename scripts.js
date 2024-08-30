function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(div => {
        div.classList.remove('show');
    });
    document.getElementById(pageId).classList.add('show');
}

// Optional: Auto-show home page on load
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
