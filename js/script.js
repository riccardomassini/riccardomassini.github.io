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

    function encrypt(input) {
        let enc_input = '';
        let rand_key = Math.floor(Math.random() * 10000) + 1;
        rand_key = String(rand_key).repeat(Math.ceil(input.length / String(rand_key).length)).slice(0, input.length);
        
        for (let i = 0; i < input.length; i++) {
            enc_input += String.fromCharCode(((i % 2 === 0 ? input.charCodeAt(i) + 0x2f : input.charCodeAt(i) ^ 0x7f) % 128));
        }
        enc_input = enc_input.split('').map((char, i) => String.fromCharCode(char.charCodeAt(0) ^ rand_key.charCodeAt(i))).join('');

        return btoa(enc_input); // LCMgLhM9JD9bPRIgJCg+eBsQEyFbEFM7GhBvLzc6LS1bPRI9WiEjICQoPj4uexMWH3sSFi4mIy1bIRw=
    }

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
