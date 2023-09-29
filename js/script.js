const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      isError: false,
      completedTasks: [],
      showRemoveError: false
    };
  },
  methods: {
    addNewTask() {
      if (this.newTask.length < 5) {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 1500);
      } else {
        this.tasks.unshift(this.newTask);
        this.newTask = "";
        this.isError = false;
      }
    },
    removeTask(index) {
      const taskElement = document.querySelector(`.task-container ul li:nth-child(${index + 1}) .task`);
    if (taskElement) {
      if (taskElement.classList.contains('task-done')) {
        this.tasks.splice(index, 1);
        const taskIndex = this.completedTasks.indexOf(index);
        if (taskIndex !== -1) {
          this.completedTasks.splice(taskIndex, 1);
        }
        } else {
          this.showRemoveError = true;
          setTimeout(() => {
            this.showRemoveError = false;
          }, 1500);
        }
      }
    },
    toggleTask(index) {
      if (this.completedTasks.includes(index)) {
        const taskIndex = this.completedTasks.indexOf(index);
        this.completedTasks.splice(taskIndex, 1);
      } else {
        this.completedTasks.push(index);
      }
    }
  }
}).mount("#app");
