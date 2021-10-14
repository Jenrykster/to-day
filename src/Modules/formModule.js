import Swal from "sweetalert2/src/sweetalert2.js";

const formModule = (function(){
    const askTaskInfo =async()=> {
        const {value: formValues } = await Swal.fire({
            title: 'New Task',
            html:
              '<input id="task-title-input" name="title" placeholder="Task title" class="swal2-input" required>' +
              '<input id="task-desc-input" placeholder="Task description..." class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
              if(document.getElementById('task-title-input').value){
                return {
                  title: document.getElementById('task-title-input').value,
                  description: document.getElementById('task-desc-input').value
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