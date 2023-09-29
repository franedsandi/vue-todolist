const {createApp}= Vue ;

createApp({
  data(){
    return{
      tasks:[
        "fare la spesa",
        "studiare"
      ],
      newTask:"",
      isError:false
    }
  },
  methods:{
    addNewTask(){
      if(this.newTask.length < 5){
        this.isError=true;
        setTimeout(() => {
          this.isError = false;
        }, 1500);
      }else{
      this.tasks.unshift(this.newTask)
      this.newTask="";
      this.isError=false
      }
    },
    removeTask(index){
      this.tasks.splice(index,1)
    }
  }
}).mount ('#app')