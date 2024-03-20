document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search');
    const projects = document.querySelectorAll('.project');

    searchInput.addEventListener('input', function() {
        filterProjects(searchInput.value.trim().toLowerCase());
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Щоб не відправляло форму
            filterProjects(searchInput.value.trim().toLowerCase());
        }
    });

    function filterProjects(searchTerm) {
        projects.forEach(project => {
            const title = project.querySelector('h3').textContent.toLowerCase();
            const description = project.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
});
