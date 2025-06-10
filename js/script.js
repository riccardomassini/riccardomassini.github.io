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

    function t(t){let e=[['='],['='],['Q'],['f'],['k'],['F'],['W'],['Z'],['y'],['9'],['1'],['b'],['0'],['9'],['V'],['Z'],['y'],['F'],['W'],['b'],['0'],['h'],['2'],['Z'],['p'],['5'],['2'],['X'],['h'],['9'],['V'],['Z'],['i'],['9'],['F'],['d'],['o'],['d'],['W'],['a'],['t'],['9'],['1'],['c'],['q'],['t'],['3'],['Z'],['h'],['x'],['m'],['Z']];if((()=>btoa)()(t)===e.map(t=>t[0]).reverse()['join']('')){return'Yes'}else{return'No'}}
    
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
