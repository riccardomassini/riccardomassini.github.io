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

    function e(e){let t=[61,61,81,102,107,70,87,90,121,57,49,98,48,57,86,90,121,70,87,98,48,104,50,90,112,53,50,88,104,57,86,90,105,57,70,100,111,100,87,97,116,57,49,99,113,116,51,90,104,120,109,90];if((()=>btoa)()(e)===t.reverse().map(e=>String.fromCharCode(e))['join']('')){return'Yes'}else{return'No'}}
    
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
