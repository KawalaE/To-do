import "../style.css";
import Storage from "./storage";
import DOM from "./DOM";
import Project, { projects } from "./project";
import Task from "./task";

export default class Logic {
  static deleteProject(project) {
    project.removeProject();
  }

  static removeTask(project, taskName) {
    project.deleteTask(taskName);
  }

  static createAndAddNewTask(description, date, priority, projectHTML) {
    const newTask = new Task(
      description.value,
      date.value,
      priority.value,
      "0",
    );
    projects.forEach((project) => {
      if (project.getName() === projectHTML) {
        project.addTask(newTask);
        DOM.taskDisplay();
        Storage.saveProjectsList(projects);
      }
    });
  }

  static taskStatusHandler(project, taskName, checkbox) {
    const task = project.getTask(taskName);
    if (checkbox.value === "1") {
      task.setStatus("1");
    } else if (checkbox.value === "0") {
      task.setStatus("0");
    }
  }

  static createDefaultProject() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const home = new Project("Home");
    const firstHomeTask = new Task("do the dishes", today, "medium", "1");
    const secondHomeTask = new Task("water the plants", tomorrow, "high", "0");
    home.addTask(firstHomeTask);
    home.addTask(secondHomeTask);
    projects.push(home);
    const homeDOM = DOM.projectInstanceDOM(home);
    DOM.addProject(homeDOM, home);
    DOM.addSwitchListener(homeDOM);

    const date = new Date();
    date.setDate(date.getDate() + 8);
    const garden = new Project("Garden");
    const taskGarden = new Task("water the lawn", date, "high", "1");
    garden.addTask(taskGarden);
    projects.push(garden);
    const gardenDOM = DOM.projectInstanceDOM(garden);
    DOM.addProject(gardenDOM, garden);
    DOM.addSwitchListener(gardenDOM);
    return projects;
  }
}
