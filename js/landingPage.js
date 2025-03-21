const landingPage = {
    scrollDownbutton() {
        window.smoothScroll = function (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        const exploreButton = document.getElementById('btn--explore-problem-solution');
        if (exploreButton) {
            exploreButton.addEventListener('click', () => {
                const targetSection = document.getElementById('problem-solution');
                if (targetSection) {
                    smoothScroll(targetSection);
                }
            });
        }
    }
};

export default landingPage;