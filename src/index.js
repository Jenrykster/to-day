import domManager from "./Modules/domManager";
import projectFactory from "./Modules/projectFactory";
import projectManager from "./Modules/projectManager";
import taskFactory from "./Modules/taskFactory";

let display = document.querySelector('main');
const defaultProject = projectFactory('ALL TASKS', true, 'all');
projectManager.addProject(defaultProject);
domManager.render(display, projectManager.getProjects());