document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
    const matrixBackground = document.querySelector('.matrix-background');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
            section.removeAttribute('data-animated');
        });

        const activeSection = document.querySelector(id);
        if (activeSection) {
            activeSection.classList.add('active');
            setTimeout(() => {
                activeSection.setAttribute('data-animated', 'true');
            }, 50);
        }
    }

    function e(e){let t="don't guess, look carefully";if((()=>btoa)()(e)===t.split('46').map(e=>String.fromCharCode(e)).reverse()['join']('').toString()){return'Yes'}else{return'No'}}
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            showSection(targetId);

            navLinks.forEach(link => link.classList.remove('active-nav'));
            this.classList.add('active-nav');
        });
    });

    const initialSection = document.querySelector('#about');
    if (initialSection) {
        initialSection.classList.add('active');
        setTimeout(() => {
            initialSection.setAttribute('data-animated', 'true');
        }, 50);
    }
    document.querySelector('nav a[href="#about"]').classList.add('active-nav');

    if (matrixBackground) {
        const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789';
        const characterCount = 100;

        for (let i = 0; i < characterCount; i++) {
            const charSpan = document.createElement('span');
            charSpan.textContent = characters[Math.floor(Math.random() * characters.length)];
            charSpan.style.left = `${Math.random() * 100}%`;
            charSpan.style.top = `${Math.random() * 100}%`;
            charSpan.style.animationDelay = `${Math.random() * 5}s`;
            charSpan.style.animationDuration = `${Math.random() * 8 + 3}s`;
            matrixBackground.appendChild(charSpan);
        }
    }
});
