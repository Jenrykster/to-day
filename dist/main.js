/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/domManager.js":
/*!***********************************!*\
  !*** ./src/Modules/domManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domManager = (function(){
    let display; 
    let sideBar;
    let taskList;
    let projects;
    let selectedProject;
    let scrollPosition = 0;
    const render = (domElement, projectsList) => {
        display = domElement;
        display.innerHTML = ''; //Clean the page contents 
        projects = projectsList;

        sideBar = document.createElement('div');
        sideBar.classList.add('side-bar');
        addProjectsToSidebar(projects);

        taskList = document.createElement('div');
        taskList.classList.add('task-list');
        addTasklistContents(projects);
        
        display.appendChild(sideBar);
        display.appendChild(taskList);
        taskList.scrollTop = scrollPosition
    }
    const createProjectElement = (project) => {
        let newProjectElement = document.createElement('div');
        newProjectElement.innerHTML = `<div class="project"><h2>${project.name}</h3></div>`;
        if(project.isSelected){
            newProjectElement.classList.add('selected');
            selectedProject = project;
        }
        newProjectElement.addEventListener('click', changeSelectedProject.bind(null, project));
        return newProjectElement;
    }
    const createTaskElement = (task) => {
        let newTaskElement = document.createElement('div');
        newTaskElement.innerHTML = `<div class="task">
        <div class="task-header">
        <input type="checkbox" ${task.isDone? 'checked':''}> 
                <h2>${task.title}</h2>
                <h3>${task.dueDate}</h3>
            </div>
            <p>${task.description}</p>
        </div>`;

        if (task.isDone) newTaskElement.classList.add('done');
        newTaskElement.querySelector('input').addEventListener('change', onTaskComplete.bind(null, task));

        return newTaskElement;
    }
    const addProjectsToSidebar = (projects) => {
        projects.forEach(project => {
            let newProject = createProjectElement(project);
            sideBar.appendChild(newProject);
        })
    }
    const addTasklistContents = (projects) => {
        let title = document.createElement('h1');
        title.innerHTML = selectedProject.name;
        taskList.appendChild(title);
        selectedProject.tasks.forEach(task =>{
            let newTask = createTaskElement(task);
            taskList.appendChild(newTask);
        })
    }
    const changeSelectedProject = (newSelectedProject, e) => {
        projects.forEach((project)=>{
            project.toggleSelected(false); // Unselect all projects
        })
        newSelectedProject.toggleSelected(true); 
        selectedProject = newSelectedProject;
        render(display, projects); // Clean the page and draw again
    }
    const onTaskComplete = (completedTask, e) => {
        completedTask.setCompleted();
        scrollPosition = taskList.scrollTop;
        console.log(scrollPosition);
        render(display, projects);
    }  
    return {
        render
    } 
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManager);

/***/ }),

/***/ "./src/Modules/projectFactory.js":
/*!***************************************!*\
  !*** ./src/Modules/projectFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectFactory = (name, selected = false) => {
    let project = {};
    project.name = name;
    project.isSelected = selected;
    project.tasks = [];

    project.addTask = (task) => {
        project.tasks.push(task);
    }
    project.toggleSelected = (selected) => {
        if(selected && project.isSelected){
            return // Do nothing if the project is already selected
        }
        project.isSelected = selected;
    }
    return project;
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);

/***/ }),

/***/ "./src/Modules/projectManager.js":
/*!***************************************!*\
  !*** ./src/Modules/projectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectManager = (function(){
    let projects = []
    const getProjects = () => {
        return projects;
    }
    const addProject = (newProject) => {
        projects.push(newProject);
    }
    const removeProject = (projectName) => {
        projects = projects.filter((project)=>{
            return project.name != projectName;
        })
    }
    return {
        getProjects,
        addProject,
        removeProject
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);

/***/ }),

/***/ "./src/Modules/taskFactory.js":
/*!************************************!*\
  !*** ./src/Modules/taskFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskFactory = (title, description, dueDate, priority, isDone = false) => {
    let task = {}
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.isDone = isDone;
    task.setCompleted = () =>{
        task.isDone = !task.isDone;
    }
    return task
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_domManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/domManager */ "./src/Modules/domManager.js");
/* harmony import */ var _Modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/projectFactory */ "./src/Modules/projectFactory.js");
/* harmony import */ var _Modules_projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/projectManager */ "./src/Modules/projectManager.js");
/* harmony import */ var _Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/taskFactory */ "./src/Modules/taskFactory.js");





let display = document.querySelector('main');
const project1 = (0,_Modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('LOKOK', true);
const project2 = (0,_Modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('COoC');
_Modules_projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(project1);
_Modules_projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(project2);
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project2.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1, true));

_Modules_domManager__WEBPACK_IMPORTED_MODULE_0__["default"].render(display, _Modules_projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxhQUFhO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMEJBQTBCO0FBQzNELHNCQUFzQixXQUFXO0FBQ2pDLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNwRnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDbEI3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDcEI3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7VUNiZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ1E7QUFDQTtBQUNOO0FBQ2hEO0FBQ0E7QUFDQSxpQkFBaUIsbUVBQWM7QUFDL0IsaUJBQWlCLG1FQUFjO0FBQy9CLDBFQUF5QjtBQUN6QiwwRUFBeUI7QUFDekIsaUJBQWlCLGdFQUFXO0FBQzVCLGlCQUFpQixnRUFBVztBQUM1QixpQkFBaUIsZ0VBQVc7QUFDNUIsaUJBQWlCLGdFQUFXO0FBQzVCLGlCQUFpQixnRUFBVztBQUM1QixpQkFBaUIsZ0VBQVc7QUFDNUI7QUFDQSxrRUFBaUIsVUFBVSwyRUFBMEIsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRheS8uL3NyYy9Nb2R1bGVzL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vc3JjL01vZHVsZXMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vc3JjL01vZHVsZXMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vc3JjL01vZHVsZXMvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRheS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZGF5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZGF5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbU1hbmFnZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGxldCBkaXNwbGF5OyBcclxuICAgIGxldCBzaWRlQmFyO1xyXG4gICAgbGV0IHRhc2tMaXN0O1xyXG4gICAgbGV0IHByb2plY3RzO1xyXG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdDtcclxuICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IDA7XHJcbiAgICBjb25zdCByZW5kZXIgPSAoZG9tRWxlbWVudCwgcHJvamVjdHNMaXN0KSA9PiB7XHJcbiAgICAgICAgZGlzcGxheSA9IGRvbUVsZW1lbnQ7XHJcbiAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnJzsgLy9DbGVhbiB0aGUgcGFnZSBjb250ZW50cyBcclxuICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzTGlzdDtcclxuXHJcbiAgICAgICAgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1iYXInKTtcclxuICAgICAgICBhZGRQcm9qZWN0c1RvU2lkZWJhcihwcm9qZWN0cyk7XHJcblxyXG4gICAgICAgIHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XHJcbiAgICAgICAgYWRkVGFza2xpc3RDb250ZW50cyhwcm9qZWN0cyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChzaWRlQmFyKTtcclxuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcclxuICAgICAgICB0YXNrTGlzdC5zY3JvbGxUb3AgPSBzY3JvbGxQb3NpdGlvblxyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdEVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPjxoMj4ke3Byb2plY3QubmFtZX08L2gzPjwvZGl2PmA7XHJcbiAgICAgICAgaWYocHJvamVjdC5pc1NlbGVjdGVkKXtcclxuICAgICAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VTZWxlY3RlZFByb2plY3QuYmluZChudWxsLCBwcm9qZWN0KSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3RFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlVGFza0VsZW1lbnQgPSAodGFzaykgPT4ge1xyXG4gICAgICAgIGxldCBuZXdUYXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld1Rhc2tFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGFza1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3Rhc2suaXNEb25lPyAnY2hlY2tlZCc6Jyd9PiBcclxuICAgICAgICAgICAgICAgIDxoMj4ke3Rhc2sudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz4ke3Rhc2suZHVlRGF0ZX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHt0YXNrLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBpZiAodGFzay5pc0RvbmUpIG5ld1Rhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICAgICAgICBuZXdUYXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uVGFza0NvbXBsZXRlLmJpbmQobnVsbCwgdGFzaykpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VGFza0VsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0c1RvU2lkZWJhciA9IChwcm9qZWN0cykgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCk7XHJcbiAgICAgICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRhc2tsaXN0Q29udGVudHMgPSAocHJvamVjdHMpID0+IHtcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHNlbGVjdGVkUHJvamVjdC5uYW1lO1xyXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBzZWxlY3RlZFByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spO1xyXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChuZXdUYXNrKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlU2VsZWN0ZWRQcm9qZWN0ID0gKG5ld1NlbGVjdGVkUHJvamVjdCwgZSkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgICAgIHByb2plY3QudG9nZ2xlU2VsZWN0ZWQoZmFsc2UpOyAvLyBVbnNlbGVjdCBhbGwgcHJvamVjdHNcclxuICAgICAgICB9KVxyXG4gICAgICAgIG5ld1NlbGVjdGVkUHJvamVjdC50b2dnbGVTZWxlY3RlZCh0cnVlKTsgXHJcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gbmV3U2VsZWN0ZWRQcm9qZWN0O1xyXG4gICAgICAgIHJlbmRlcihkaXNwbGF5LCBwcm9qZWN0cyk7IC8vIENsZWFuIHRoZSBwYWdlIGFuZCBkcmF3IGFnYWluXHJcbiAgICB9XHJcbiAgICBjb25zdCBvblRhc2tDb21wbGV0ZSA9IChjb21wbGV0ZWRUYXNrLCBlKSA9PiB7XHJcbiAgICAgICAgY29tcGxldGVkVGFzay5zZXRDb21wbGV0ZWQoKTtcclxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IHRhc2tMaXN0LnNjcm9sbFRvcDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxQb3NpdGlvbik7XHJcbiAgICAgICAgcmVuZGVyKGRpc3BsYXksIHByb2plY3RzKTtcclxuICAgIH0gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW5kZXJcclxuICAgIH0gXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb21NYW5hZ2VyOyIsImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUsIHNlbGVjdGVkID0gZmFsc2UpID0+IHtcclxuICAgIGxldCBwcm9qZWN0ID0ge307XHJcbiAgICBwcm9qZWN0Lm5hbWUgPSBuYW1lO1xyXG4gICAgcHJvamVjdC5pc1NlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICBwcm9qZWN0LnRhc2tzID0gW107XHJcblxyXG4gICAgcHJvamVjdC5hZGRUYXNrID0gKHRhc2spID0+IHtcclxuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0LnRvZ2dsZVNlbGVjdGVkID0gKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQgJiYgcHJvamVjdC5pc1NlbGVjdGVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIC8vIERvIG5vdGhpbmcgaWYgdGhlIHByb2plY3QgaXMgYWxyZWFkeSBzZWxlY3RlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0LmlzU2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9qZWN0O1xyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3Rvcnk7IiwiY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdC5uYW1lICE9IHByb2plY3ROYW1lO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFByb2plY3RzLFxyXG4gICAgICAgIGFkZFByb2plY3QsXHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWFuYWdlcjsiLCJjb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUgPSBmYWxzZSkgPT4ge1xyXG4gICAgbGV0IHRhc2sgPSB7fVxyXG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRhc2suaXNEb25lID0gaXNEb25lO1xyXG4gICAgdGFzay5zZXRDb21wbGV0ZWQgPSAoKSA9PntcclxuICAgICAgICB0YXNrLmlzRG9uZSA9ICF0YXNrLmlzRG9uZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXNrXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tGYWN0b3J5IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tTWFuYWdlciBmcm9tIFwiLi9Nb2R1bGVzL2RvbU1hbmFnZXJcIjtcclxuaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gXCIuL01vZHVsZXMvcHJvamVjdEZhY3RvcnlcIjtcclxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL01vZHVsZXMvcHJvamVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuL01vZHVsZXMvdGFza0ZhY3RvcnlcIjtcclxuXHJcbmxldCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5jb25zdCBwcm9qZWN0MSA9IHByb2plY3RGYWN0b3J5KCdMT0tPSycsIHRydWUpO1xyXG5jb25zdCBwcm9qZWN0MiA9IHByb2plY3RGYWN0b3J5KCdDT29DJyk7XHJcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdDEpO1xyXG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3QyKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDIuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEsIHRydWUpKTtcclxuXHJcbmRvbU1hbmFnZXIucmVuZGVyKGRpc3BsYXksIHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==