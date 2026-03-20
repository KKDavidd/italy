document.querySelectorAll('.pop-out').forEach(img => {
    img.style.transition = 'transform 0.3s ease';
    
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});