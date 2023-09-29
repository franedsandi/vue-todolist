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
      this.newTask=""
    }
  }
}).mount ('#app')