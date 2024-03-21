document.addEventListener('DOMContentLoaded', function () {
    loadRecentProjects();
});

function loadRecentProjects() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './pages/projects.html', true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var htmlText = xhr.responseText; // Получаем текстовый ответ
            var parser = new DOMParser();
            var doc = parser.parseFromString(htmlText, 'text/html');

            var projects = doc.querySelectorAll('.project');
            var recentProjects = Array.from(projects).slice(-5); // Получаем последние 5 проектов
            var projectList = document.getElementById('projectList');

            projectList.innerHTML = ''; // Очищаем предыдущее содержимое

            recentProjects.forEach(function (project) {
                projectList.appendChild(project.cloneNode(true));
            });
        }
    };
    xhr.send();
}