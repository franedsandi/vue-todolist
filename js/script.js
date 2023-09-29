const { createApp } = Vue;
let taskIdCounter = 1;

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
        const newTask = {
          id: taskIdCounter++,
          text: this.newTask,
          done: false
        };
        this.tasks.unshift(newTask);
        this.newTask = "";
        this.isError = false;
      }
    },
    removeTask(id) {
      let taskIndex = -1;
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          taskIndex = i;
          break;
        }
      }

      if (taskIndex === -1) return;

      const task = this.tasks[taskIndex];
      if (task.done) {
        this.tasks.splice(taskIndex, 1);
        this.completedTasks.splice(this.completedTasks.indexOf(id), 1);
      } else {
        this.showRemoveError = true;
        setTimeout(() => {
          this.showRemoveError = false;
        }, 1500);
      }
    },
    toggleTask(id) {
      let taskIndex = -1;
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          taskIndex = i;
          break;
        }
      }

      if (taskIndex === -1) return;

      const task = this.tasks[taskIndex];
      task.done = !task.done;
      if (task.done) {
        this.completedTasks.push(id);
      } else {
        this.completedTasks.splice(this.completedTasks.indexOf(id), 1);
      }
    }
  }
}).mount("#app");
