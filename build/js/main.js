function initializeMainAnimations() {
    const filmTitle = "DESERT FLOWERS<THE RISE<OF<ABOLISH<ICE";

    const elements = [
        { id: 'film-title', text: filmTitle, delay: 75 },
        { id: 'top-menu', delay: 0 },
        { id: 'view-film', delay: 0 }
    ];
    let currentIndex = 0;

    function revealNextElement() {
        if (currentIndex < elements.length) {
            const element = elements[currentIndex];
            const domElement = document.getElementById(element.id);
            
            if (element.text) {
                // Typewriter effect for text elements
                let i = 0;
                function typeWriter() {
                    if (i < element.text.length) {
                        if (element.text.charAt(i) === "<") {
                            domElement.innerHTML += "<br>";
                            i++;
                        } else {
                            domElement.innerHTML += element.text.charAt(i);
                            i++;
                        }
                        setTimeout(typeWriter, element.delay);
                    } else {
                        //domElement.classList.add('reveal');
                        currentIndex++;
                        setTimeout(revealNextElement, element.delay);
                    }
                }
                setTimeout(typeWriter, element.delay);
            } else {
                // Simple revelation for non-text elements
                domElement.classList.remove('hidden-item');
                domElement.classList.add('reveal');
                currentIndex++;
                setTimeout(revealNextElement, element.delay);
            }
        }
    }

    // Reset elements to their initial state
    elements.forEach(element => {
        const domElement = document.getElementById(element.id);
        if (domElement) {
            if (element.text) {
                domElement.innerHTML = '';
            }
        }
    });

    // Start the revelation sequence
    revealNextElement();
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize animations when the page loads
    initializeMainAnimations();

    // Manage hamburger menu
    const menu = document.getElementById('hamburger-menu');
    const panel = document.getElementById('menu-panel');
    menu.addEventListener('click', () => {
        menu.classList.toggle('change');
        panel.classList.toggle('translate-x-full');
        panel.classList.toggle('menu-open');
    });

    // Manage mute button
    const volumeButton = document.getElementById('volumeButton');
    let isMuted = true;

    const volumeOffSVG = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#e8eaed"
            ><path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/></svg>
    `;

    const volumeOnSVG = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#e8eaed"
            >
                <path
                    d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"
                />
            </svg>
    `;

    volumeButton.addEventListener('click', () => {
        console.log('Volume button clicked');
        isMuted = !isMuted;
        volumeButton.innerHTML = isMuted ? volumeOffSVG : volumeOnSVG;
        //volumeButton.style.color = isMuted ? 'red' : 'green';
    });
});