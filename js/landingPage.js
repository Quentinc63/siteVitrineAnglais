const landingPage = {
    scrollDownbutton() {
        window.smoothScroll = function (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        const exploreButton = document.getElementById('btn--explore-services');
        if (exploreButton) {
            exploreButton.addEventListener('click', () => {
                const targetSection = document.getElementById('services');
                if (targetSection) {
                    smoothScroll(targetSection);
                }
            });
        }
    }
};

export default landingPage;