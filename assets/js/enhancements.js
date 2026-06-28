/*
    Portfolio Enhancements
    - Typing effect
    - Scroll animations
    - Skill tag hover
    - Smooth scroll
    - Side navbar
*/

(function () {

    /* ── 1. TYPING EFFECT ── */
    const typingTarget = document.querySelector('#one p');
    if (typingTarget) {
        const fullText = typingTarget.textContent.trim();
        typingTarget.textContent = '';
        typingTarget.style.borderRight = '2px solid #49bf9d';
        typingTarget.style.minHeight = '1.5em';

        let i = 0;
        function type() {
            if (i < fullText.length) {
                typingTarget.textContent += fullText[i];
                i++;
                setTimeout(type, 35);
            } else {
                setTimeout(() => {
                    typingTarget.style.borderRight = 'none';
                }, 1000);
            }
        }

        setTimeout(type, 600);
    }


    /* ── 2. SCROLL ANIMATIONS ── */
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    const sections = document.querySelectorAll('#two, #skills, #three');
    sections.forEach(el => el.classList.add('fade-in-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(el => observer.observe(el));


    /* ── 3. SKILL TAG HOVER ── */
    const skillStyle = document.createElement('style');
    skillStyle.textContent = `
        .skill-tag {
            transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
            cursor: default;
        }
        .skill-tag:hover {
            background-color: #49bf9d;
            color: #fff;
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(skillStyle);


    /* ── 4. SMOOTH SCROLL ── */
    const smoothStyle = document.createElement('style');
    smoothStyle.textContent = `html { scroll-behavior: smooth; }`;
    document.head.appendChild(smoothStyle);


    /* ── 5. NAVBAR ── */
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        #side-nav {
            margin-top: 1.5em;
            display: flex;
            flex-direction: column;
            gap: 0.4em;
            border-bottom: none !important;
        }
        #side-nav a {
            color: rgba(0,0,0,0.5);
            text-decoration: none !important;
            font-size: 0.85em;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            transition: color 0.2s ease, padding-left 0.2s ease;
            padding-left: 0;
            border-bottom: none !important;
        }
        #side-nav a:hover {
            color: #49bf9d;
            padding-left: 6px;
        }
    `;
    document.head.appendChild(navStyle);

    const nav = document.createElement('nav');
    nav.id = 'side-nav';
    nav.innerHTML = `
        <a href="#two">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#three">Contact</a>
    `;

    const headerInner = document.querySelector('#header .inner');
    if (headerInner) headerInner.appendChild(nav);

})();