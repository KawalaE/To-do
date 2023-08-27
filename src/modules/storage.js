import DOM from "./DOM";
import Project from "./project";
import Task from "./task";

export default class Storage {
  static saveProjectsList(data) {
    localStorage.setItem("projects", JSON.stringify(data));
  }

  static getProjectsList() {
    const storageProjectsList = [];
    const storageProjects = JSON.parse(localStorage.getItem("projects"));
    if (storageProjects !== null) {
      storageProjects.forEach((project) => {
        const projectStorage = new Project(project.name);
        project.tasks.forEach((task) => {
          const taskStorage = new Task(
            task.description,
            task.dueDate,
            task.priority,
            task.status,
          );
          projectStorage.tasks.push(taskStorage);
        });
        const projectDOM = DOM.projectInstanceDOM(projectStorage);
        DOM.addProject(projectDOM, projectStorage);
        DOM.addSwitchListener(projectDOM);
        storageProjectsList.push(projectStorage);
      });
      return storageProjectsList;
    }
  }
}
