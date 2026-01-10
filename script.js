// Toggle answer visibility for math problems
function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    if (answerElement.classList.contains('hidden')) {
        answerElement.classList.remove('hidden');
        // Change button text to "Hide Answer"
        const button = answerElement.previousElementSibling;
        if (button && button.tagName === 'BUTTON') {
            button.textContent = 'Hide Answer';
            button.onclick = function() { toggleAnswer(answerId); };
        }
    } else {
        answerElement.classList.add('hidden');
        // Change button text back to "Reveal Answer"
        const button = answerElement.previousElementSibling;
        if (button && button.tagName === 'BUTTON') {
            button.textContent = 'Reveal Answer';
            button.onclick = function() { toggleAnswer(answerId); };
        }
    }
}

// Toggle hint visibility for coding challenges
function toggleHint(hintId) {
    const hintElement = document.getElementById(hintId);
    if (hintElement.classList.contains('hidden')) {
        hintElement.classList.remove('hidden');
        // Change button text to "Hide Hint"
        const button = hintElement.previousElementSibling;
        if (button && button.tagName === 'BUTTON') {
            button.textContent = 'Hide Hint';
            button.onclick = function() { toggleHint(hintId); };
        }
    } else {
        hintElement.classList.add('hidden');
        // Change button text back to "Reveal Hint"
        const button = hintElement.previousElementSibling;
        if (button && button.tagName === 'BUTTON') {
            button.textContent = 'Reveal Hint';
            button.onclick = function() { toggleHint(hintId); };
        }
    }
}

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const bar1 = hamburger.querySelector('.bar:nth-child(1)');
            const bar2 = hamburger.querySelector('.bar:nth-child(2)');
            const bar3 = hamburger.querySelector('.bar:nth-child(3)');
            
            if (navMenu.classList.contains('active')) {
                bar1.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bar2.style.opacity = '0';
                bar3.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar1.style.transform = 'none';
                bar2.style.opacity = '1';
                bar3.style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                
                // Reset hamburger animation
                const bar1 = hamburger.querySelector('.bar:nth-child(1)');
                const bar2 = hamburger.querySelector('.bar:nth-child(2)');
                const bar3 = hamburger.querySelector('.bar:nth-child(3)');
                
                bar1.style.transform = 'none';
                bar2.style.opacity = '1';
                bar3.style.transform = 'none';
            });
        });
    }
});

// Social sharing functionality
function shareOnSocial(platform) {
    const url = window.location.href;
    const title = document.title;
    
    switch(platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
            break;
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
            break;
    }
}

// Handle dynamic problem loading based on URL parameters (for problem detail page)
function loadProblemDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const id = urlParams.get('id');
    
    if (type && id) {
        // In a real application, you would fetch the problem details based on type and id
        // For this static site, we'll just update the page content based on the params
        console.log(`Loading ${type} problem with id ${id}`);
    }
}