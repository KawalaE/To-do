import { endOfISOWeek, startOfISOWeek } from "date-fns";
import format from "date-fns/format";

export let projects = [];

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  getCurrentMonthTasks() {
    const today = new Date();
    const month = today.getMonth() + 1;
    return this.tasks.filter((task) => task.getMonth() === month);
  }

  getCurrentWeekTasks() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const start = format(startOfISOWeek(today), "dd");
    const end = format(endOfISOWeek(today), "dd");
    const currentMonthTasks = this.tasks.filter(
      (task) => task.getMonth() === month,
    );
    return currentMonthTasks.filter(
      (task) => task.getDay() >= Number(start) && task.getDay() <= Number(end),
    );
  }

  addTask(taskInstance) {
    this.tasks.push(taskInstance);
  }

  removeProject() {
    projects = projects.filter(
      (project) => project.getName() !== this.getName(),
    );
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getDescription() === taskName);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter(
      (task) => task.getDescription() !== taskName,
    );
  }
}
