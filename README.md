**Vue To Do List**
===
**Descrizione:**
Rifare l’esercizio della to do list fatto in classe.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
===
**MILESTONE 1**
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
===
**MILESTONE 2**
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
===
**MILESTONE 3**
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
===
**Bonus:**
1- se il todo ha meno di 5 caratteri esporre un messaggio di errore
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3- eliminare il todo solo se è stato svolto, altrimenti esporre un messaggio di errore
===
**step by step:**
1. recreate the page with html and css making a template to work with vue
2. create an array of "tasks" with more than one task to do "just for example"
3. create the function add task in order to add the task that have been written in the input 
4. give the funtion to the button add me and to the keyup enter
5. create a funtion remove task , in order to eliminate the task when the x button is pressed
6. give a condition to add task that if the text is shorter than 5 words the task would not be taken and display a error message
7. give the error message a timer that it will last 1.5 second on display
8. use trim to delete the " " in the input in order to avoid empti tasks errors
9. make a funtion toogletask that will add the class task done to the clicked task ( it will line through the text)
10. fit a condition in remove task that if the task does not have the class task done it will display an error message and will not remove the task
11. add another timer to that error message so it will disapear after 1.5 seconds
===
**extra**
if there is no task to display a messaage with v-if