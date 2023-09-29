const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      isError: false,
      completedTasks: [] // Nueva propiedad para el seguimiento de tareas completadas
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
      this.tasks.splice(index, 1);
      // Si la tarea se elimina, también la eliminamos de la lista de completadas
      const taskIndex = this.completedTasks.indexOf(index);
      if (taskIndex !== -1) {
        this.completedTasks.splice(taskIndex, 1);
      }
    },
    toggleTask(index) {
      if (this.completedTasks.includes(index)) {
        // Si la tarea ya está marcada como completada, la eliminamos de la lista de completadas
        const taskIndex = this.completedTasks.indexOf(index);
        this.completedTasks.splice(taskIndex, 1);
      } else {
        // Si la tarea no está marcada como completada, la agregamos a la lista de completadas
        this.completedTasks.push(index);
      }
    }
  }
}).mount("#app");
