function animate(element, number = 0.25) {
    const observer = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide_in');
                o.unobserve(entry.target);
            }
        })
    }, { threshold: number })
    return observer.observe(element);
}

const h1 = document.querySelector('h1');
animate(h1);
const grid_child = document.querySelectorAll('.grid_child');
grid_child.forEach((item) => {
    animate(item, 0.50);
})

const section_5 = document.querySelector('.section_5');
animate(section_5, 0.60);

const section_6Child = document.querySelectorAll('.section_6>div');
const section_7Child = document.querySelectorAll('.section_7>div');

section_6Child.forEach((item) => {
    animate(item, 0.50);
})
section_7Child.forEach((item) => {
    animate(item, 0.50)
})