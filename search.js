const projects = [
    { id: 1, name: 'Project 1', description: 'Description of Project 1' },
    { id: 2, name: 'Project 2', description: 'Description of Project 2' },
    { id: 3, name: 'Project 3', description: 'Description of Project 3' }
    // Додайте інші проекти за потребою
];

const searchInput = document.getElementById('searchInput');
const projectList = document.getElementById('projectList');

function displayProjects(projectsToShow) {
    projectList.innerHTML = ''; // Очищаємо список перед відображенням нових проектів
    projectsToShow.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectItem);
    });
}

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase(); // Отримуємо текст пошуку в нижньому регістрі
    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm) || project.description.toLowerCase().includes(searchTerm)
    );
    displayProjects(filteredProjects); // Відображаємо відфільтровані проекти
});

// Відображаємо всі проекти при завантаженні сторінки
displayProjects(projects);
