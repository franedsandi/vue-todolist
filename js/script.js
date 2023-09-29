const {createApp}= Vue ;

createApp({
  data(){
    return{
      tasks:[
        "fare la spesa",
        "studiare"
      ]
    }
  }
}).mount ('#app')