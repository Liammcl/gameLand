// Animation related functionality
export const initializeAnimations = () => {
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transition = 'transform 0.2s ease-in-out';
    });
};