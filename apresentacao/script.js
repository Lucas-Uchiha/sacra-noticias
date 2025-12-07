const features = document.querySelectorAll('.feature');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            if (entry.boundingClientRect.y < 0) {
                entry.target.classList.add('hidden-up');
                entry.target.classList.remove('hidden-down');
            }
            else {
                entry.target.classList.add('hidden-down');
                entry.target.classList.remove('hidden-up');
            }
            entry.target.classList.remove('visible');
        }
        else {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden-up', 'hidden-down');
        }
    });
}, {
    threshold: 0.1
});

features.forEach(feature => {
    feature.classList.add('hidden-down');
    observer.observe(feature);
});
