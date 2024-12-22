// Display a dynamic greeting based on the time of day
window.onload = function() {
    const greetingMessage = document.getElementById("greetingMessage");
    const hours = new Date().getHours();
    
    if (hours < 12) {
        greetingMessage.innerText = "Good Morning! Start your earning journey!";
    } else if (hours < 18) {
        greetingMessage.innerText = "Good Afternoon! Ready to earn?";
    } else {
        greetingMessage.innerText = "Good Evening! It's time to start earning!";
    }
    
    // Modal popup for special offers
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    modal.style.display = "block"; // Show the modal when the page loads

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Back to top button functionality
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    backToTopButton.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

// Form Submission (For Sign-Up)
function handleFormSubmit(event) {
    event.preventDefault();
    alert("Thank you for signing up!");
}.