const {createApp}= Vue ;

createApp({
  data(){
    return{
      tasks:[
        "fare la spesa",
        "studiare"
      ],
      newTask:""
    }
  },
  methods:{
    addNewTask(){
      this.tasks.unshift(this.newTask)
    }
  }
}).mount ('#app')