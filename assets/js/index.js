function showSidebar() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}

const observer = new IntersectionObserver((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    
},{
    threshold: 0.5
});

const aboutElement = document.querySelector(".about")
observer.observe(aboutElement)