import Swal from 'sweetalert2/src/sweetalert2.js';
import {format, parse, parseISO} from 'date-fns'
import settings from './settings';
const formModule = (function(){
    const askTaskInfo =async()=> {
        const {value: formValues } = await Swal.fire({
            title: 'New Task',
            html:
              `<div class="form-container"> 
                <input id="task-title-input" name="title" placeholder="Task title" class="swal2-input" required>
                <input id="task-date-input" class="swal2-input" value="${format(new Date(),'yyyy-MM-dd')}" type="date">   
              </div>
                <input id="task-desc-input" placeholder="Task description..." class="swal2-input">
                <h2>Priority</h2> 
              <ul style="display:flex">
                <li>
                <input type="radio" id="priorityChoice1" name="priority" value="1">
                <label style="color: ${settings.priorityColors[1]}" for="priorityChoice1">High</label>
                </li>

                <li>
                <input type="radio" id="priorityChoice2" name="priority" value="2">
                <label style="color: ${settings.priorityColors[2]}" for="priorityChoice2">Medium</label>
                </li>

                <li>
                <input type="radio" id="priorityChoice3" name="priority" value="3" checked>
                <label style="color: ${settings.priorityColors[3]}" for="priorityChoice3">Low</label>
                </li>
              </ul>`,
            focusConfirm: false,
            preConfirm: () => {
              if(document.getElementById('task-title-input').value){
                let dateString = document.getElementById('task-date-input').value;
                return {
                  title: document.getElementById('task-title-input').value,
                  description: document.getElementById('task-desc-input').value,
                  date: format(parseISO(dateString), 'dd/MM/yyyy'),
                  priority: document.querySelector('input[type="radio"]:checked').value,
                }
              }else{
                Swal.showValidationMessage('You must provide a title');
              }
            }
          })
          
          if (formValues) {
            return(JSON.stringify(formValues));
          }
    }
    const askProjectInfo = async() => {
      const { value: projectName } = await Swal.fire({
        title: 'New Project',
        input: 'text',
        inputLabel: 'Project name',
        inputValue: 'My project',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Project name can\'t be empty';
          }
          if(value.length > 10){
            return 'Project name must be under 10 characters';
          }
        }
      })
      
      if (projectName) {
        return projectName;
      }
    }
    const showDuplicateMessage = () => {
      Swal.fire("Error", 'Can\'t add duplicate projects', 'error');
    }
    return {
        askTaskInfo,
        askProjectInfo,
        showDuplicateMessage
    }
})();

export default formModule;