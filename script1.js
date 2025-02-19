// Function to show solutions dynamically
function showSolution(id) {
    document.querySelectorAll('.solution-box').forEach(box => box.style.display = 'none');
    document.getElementById('solution-' + id).style.display = 'block';
}

// Adding a smooth scroll effect for navigation
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Floating Animation for Homepage Introduction
document.addEventListener("DOMContentLoaded", function() {
    let introText = document.querySelector(".intro-container h1");
    introText.style.animation = "slideIn 2s ease-in-out";
});
