let currentPage = 0;
const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length) {
        pages[currentPage].style.transform = "rotateY(-180deg)";
        pages[currentPage].style.zIndex = -currentPage;
        currentPage++;
    }
});