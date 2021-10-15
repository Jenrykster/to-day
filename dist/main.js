/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sweetalert2/src/SweetAlert.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/SweetAlert.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _staticMethods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticMethods.js */ "./node_modules/sweetalert2/src/staticMethods.js");
/* harmony import */ var _instanceMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceMethods.js */ "./node_modules/sweetalert2/src/instanceMethods.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





let currentInstance

class SweetAlert {
  constructor (...args) {
    // Prevent run in Node env
    if (typeof window === 'undefined') {
      return
    }

    currentInstance = this

    const outerParams = Object.freeze(this.constructor.argsToParams(args))

    Object.defineProperties(this, {
      params: {
        value: outerParams,
        writable: false,
        enumerable: true,
        configurable: true
      }
    })

    const promise = this._main(this.params)
    _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].promise.set(this, promise)
  }

  // `catch` cannot be the name of a module export, so we define our thenable methods here instead
  then (onFulfilled) {
    const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].promise.get(this)
    return promise.then(onFulfilled)
  }

  finally (onFinally) {
    const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].promise.get(this)
    return promise.finally(onFinally)
  }
}

// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype, _instanceMethods_js__WEBPACK_IMPORTED_MODULE_2__)

// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, _staticMethods_js__WEBPACK_IMPORTED_MODULE_1__)

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(_instanceMethods_js__WEBPACK_IMPORTED_MODULE_2__).forEach(key => {
  SweetAlert[key] = function (...args) {
    if (currentInstance) {
      return currentInstance[key](...args)
    }
  }
})

SweetAlert.DismissReason = _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_0__.DismissReason

SweetAlert.version = '11.1.7'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SweetAlert);


/***/ }),

/***/ "./node_modules/sweetalert2/src/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/sweetalert2/src/constants.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESTORE_FOCUS_TIMEOUT": () => (/* binding */ RESTORE_FOCUS_TIMEOUT)
/* harmony export */ });
const RESTORE_FOCUS_TIMEOUT = 100


/***/ }),

/***/ "./node_modules/sweetalert2/src/globalState.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/globalState.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "restoreActiveElement": () => (/* binding */ restoreActiveElement)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/sweetalert2/src/constants.js");


const globalState = {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalState);

const focusPreviousActiveElement = () => {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus()
    globalState.previousActiveElement = null
  } else if (document.body) {
    document.body.focus()
  }
}

// Restore previous active (focused) element
const restoreActiveElement = (returnFocus) => {
  return new Promise(resolve => {
    if (!returnFocus) {
      return resolve()
    }
    const x = window.scrollX
    const y = window.scrollY

    globalState.restoreFocusTimeout = setTimeout(() => {
      focusPreviousActiveElement()
      resolve()
    }, _constants_js__WEBPACK_IMPORTED_MODULE_0__.RESTORE_FOCUS_TIMEOUT) // issues/900

    window.scrollTo(x, y)
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableLoading": () => (/* reexport safe */ _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__.disableLoading),
/* harmony export */   "hideLoading": () => (/* reexport safe */ _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__.hideLoading),
/* harmony export */   "getInput": () => (/* reexport safe */ _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__.getInput),
/* harmony export */   "close": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.close),
/* harmony export */   "closeModal": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closeModal),
/* harmony export */   "closePopup": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closePopup),
/* harmony export */   "closeToast": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closeToast),
/* harmony export */   "disableButtons": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.disableButtons),
/* harmony export */   "disableInput": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.disableInput),
/* harmony export */   "enableButtons": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.enableButtons),
/* harmony export */   "enableInput": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.enableInput),
/* harmony export */   "resetValidationMessage": () => (/* reexport safe */ _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__.resetValidationMessage),
/* harmony export */   "showValidationMessage": () => (/* reexport safe */ _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__.showValidationMessage),
/* harmony export */   "getProgressSteps": () => (/* reexport safe */ _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__.getProgressSteps),
/* harmony export */   "_main": () => (/* reexport safe */ _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__._main),
/* harmony export */   "update": () => (/* reexport safe */ _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__.update),
/* harmony export */   "_destroy": () => (/* reexport safe */ _instanceMethods_destroy_js__WEBPACK_IMPORTED_MODULE_8__._destroy)
/* harmony export */ });
/* harmony import */ var _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceMethods/hideLoading.js */ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js");
/* harmony import */ var _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceMethods/getInput.js */ "./node_modules/sweetalert2/src/instanceMethods/getInput.js");
/* harmony import */ var _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceMethods/close.js */ "./node_modules/sweetalert2/src/instanceMethods/close.js");
/* harmony import */ var _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceMethods/enable-disable-elements.js */ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js");
/* harmony import */ var _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceMethods/validation-message.js */ "./node_modules/sweetalert2/src/instanceMethods/validation-message.js");
/* harmony import */ var _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instanceMethods/progress-steps.js */ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js");
/* harmony import */ var _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instanceMethods/_main.js */ "./node_modules/sweetalert2/src/instanceMethods/_main.js");
/* harmony import */ var _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceMethods/update.js */ "./node_modules/sweetalert2/src/instanceMethods/update.js");
/* harmony import */ var _instanceMethods_destroy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instanceMethods/_destroy.js */ "./node_modules/sweetalert2/src/instanceMethods/_destroy.js");











/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/_destroy.js":
/*!******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/_destroy.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_destroy": () => (/* binding */ _destroy)
/* harmony export */ });
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");




function _destroy () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].domCache.get(this)
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].innerParams.get(this)

  if (!innerParams) {
    return // This instance has already been destroyed
  }

  // Check if there is another Swal closing
  if (domCache.popup && _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].swalCloseEventFinishedCallback) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].swalCloseEventFinishedCallback()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].swalCloseEventFinishedCallback
  }

  // Check if there is a swal disposal defer timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].deferDisposalTimer) {
    clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].deferDisposalTimer)
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].deferDisposalTimer
  }

  if (typeof innerParams.didDestroy === 'function') {
    innerParams.didDestroy()
  }

  disposeSwal(this)
}

const disposeSwal = (instance) => {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params
  // Unset globalState props so GC will dispose globalState (#1569)
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].keydownHandler
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].keydownTarget
  // Unset WeakMaps so GC will be able to dispose them (#1569)
  unsetWeakMaps(_privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  unsetWeakMaps(_privateMethods_js__WEBPACK_IMPORTED_MODULE_2__["default"])
  // Unset currentInstance
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentInstance
}

const unsetWeakMaps = (obj) => {
  for (const i in obj) {
    obj[i] = new WeakMap()
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/_main.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/_main.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_main": () => (/* binding */ _main)
/* harmony export */ });
/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_Timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Timer.js */ "./node_modules/sweetalert2/src/utils/Timer.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_setParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/setParameters.js */ "./node_modules/sweetalert2/src/utils/setParameters.js");
/* harmony import */ var _utils_getTemplateParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTemplateParams.js */ "./node_modules/sweetalert2/src/utils/getTemplateParams.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _utils_openPopup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/openPopup.js */ "./node_modules/sweetalert2/src/utils/openPopup.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");
/* harmony import */ var _utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/dom/inputUtils.js */ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js");
/* harmony import */ var _buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buttons-handlers.js */ "./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js");
/* harmony import */ var _keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keydown-handler.js */ "./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js");
/* harmony import */ var _popup_click_handler_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popup-click-handler.js */ "./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _utils_aria_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");

















function _main (userParams, mixinParams = {}) {
  (0,_utils_params_js__WEBPACK_IMPORTED_MODULE_0__.showWarningsForParams)(Object.assign({}, mixinParams, userParams))

  if (_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].currentInstance) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].currentInstance._destroy()
    if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isModal()) {
      (0,_utils_aria_js__WEBPACK_IMPORTED_MODULE_15__.unsetAriaHidden)()
    }
  }
  _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].currentInstance = this

  const innerParams = prepareParams(userParams, mixinParams)
  ;(0,_utils_setParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"])(innerParams)
  Object.freeze(innerParams)

  // clear the previous timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout.stop()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout
  }

  // clear the restore focus timeout
  clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].restoreFocusTimeout)

  const domCache = populateDomCache(this)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.render(this, innerParams)

  _privateProps_js__WEBPACK_IMPORTED_MODULE_8__["default"].innerParams.set(this, innerParams)

  return swalPromise(this, domCache, innerParams)
}

const prepareParams = (userParams, mixinParams) => {
  const templateParams = (0,_utils_getTemplateParams_js__WEBPACK_IMPORTED_MODULE_5__.getTemplateParams)(userParams)
  const params = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"], mixinParams, templateParams, userParams) // precedence is described in #2131
  params.showClass = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"].showClass, params.showClass)
  params.hideClass = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideClass, params.hideClass)
  return params
}

const swalPromise = (instance, domCache, innerParams) => {
  return new Promise((resolve) => {
    // functions to handle all closings/dismissals
    const dismissWith = (dismiss) => {
      instance.closePopup({ isDismissed: true, dismiss })
    }

    _privateMethods_js__WEBPACK_IMPORTED_MODULE_9__["default"].swalPromiseResolve.set(instance, resolve)

    domCache.confirmButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__.handleConfirmButtonClick)(instance)
    domCache.denyButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__.handleDenyButtonClick)(instance)
    domCache.cancelButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__.handleCancelButtonClick)(instance, dismissWith)

    domCache.closeButton.onclick = () => dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_14__.DismissReason.close)

    ;(0,_popup_click_handler_js__WEBPACK_IMPORTED_MODULE_13__.handlePopupClick)(instance, domCache, dismissWith)

    ;(0,_keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__.addKeydownHandler)(instance, _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"], innerParams, dismissWith)

    ;(0,_utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_10__.handleInputOptionsAndValue)(instance, innerParams)

    ;(0,_utils_openPopup_js__WEBPACK_IMPORTED_MODULE_7__.openPopup)(innerParams)

    setupTimer(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"], innerParams, dismissWith)

    initFocus(domCache, innerParams)

    // Scroll container to top on open (#1247, #1946)
    setTimeout(() => {
      domCache.container.scrollTop = 0
    })
  })
}

const populateDomCache = (instance) => {
  const domCache = {
    popup: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getPopup(),
    container: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getContainer(),
    actions: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getActions(),
    confirmButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton(),
    denyButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton(),
    cancelButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton(),
    loader: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getLoader(),
    closeButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCloseButton(),
    validationMessage: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage(),
    progressSteps: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getProgressSteps()
  }
  _privateProps_js__WEBPACK_IMPORTED_MODULE_8__["default"].domCache.set(instance, domCache)

  return domCache
}

const setupTimer = (globalState, innerParams, dismissWith) => {
  const timerProgressBar = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getTimerProgressBar()
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(timerProgressBar)
  if (innerParams.timer) {
    globalState.timeout = new _utils_Timer_js__WEBPACK_IMPORTED_MODULE_2__["default"](() => {
      dismissWith('timer')
      delete globalState.timeout
    }, innerParams.timer)
    if (innerParams.timerProgressBar) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.show(timerProgressBar)
      setTimeout(() => {
        if (globalState.timeout && globalState.timeout.running) { // timer can be already stopped or unset at this point
          _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.animateTimerProgressBar(innerParams.timer)
        }
      })
    }
  }
}

const initFocus = (domCache, innerParams) => {
  if (innerParams.toast) {
    return
  }

  if (!(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.callIfFunction)(innerParams.allowEnterKey)) {
    return blurActiveElement()
  }

  if (!focusButton(domCache, innerParams)) {
    (0,_keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__.setFocus)(innerParams, -1, 1)
  }
}

const focusButton = (domCache, innerParams) => {
  if (innerParams.focusDeny && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.denyButton)) {
    domCache.denyButton.focus()
    return true
  }

  if (innerParams.focusCancel && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.cancelButton)) {
    domCache.cancelButton.focus()
    return true
  }

  if (innerParams.focusConfirm && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.confirmButton)) {
    domCache.confirmButton.focus()
    return true
  }

  return false
}

const blurActiveElement = () => {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur()
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleConfirmButtonClick": () => (/* binding */ handleConfirmButtonClick),
/* harmony export */   "handleDenyButtonClick": () => (/* binding */ handleDenyButtonClick),
/* harmony export */   "handleCancelButtonClick": () => (/* binding */ handleCancelButtonClick)
/* harmony export */ });
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/inputUtils.js */ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js");
/* harmony import */ var _utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");








const handleConfirmButtonClick = (instance) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance)
  instance.disableButtons()
  if (innerParams.input) {
    handleConfirmOrDenyWithInput(instance, 'confirm')
  } else {
    confirm(instance, true)
  }
}

const handleDenyButtonClick = (instance) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance)
  instance.disableButtons()
  if (innerParams.returnInputValueOnDeny) {
    handleConfirmOrDenyWithInput(instance, 'deny')
  } else {
    deny(instance, false)
  }
}

const handleCancelButtonClick = (instance, dismissWith) => {
  instance.disableButtons()
  dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_5__.DismissReason.cancel)
}

const handleConfirmOrDenyWithInput = (instance, type /* 'confirm' | 'deny' */) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance)
  const inputValue = (0,_utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_1__.getInputValue)(instance, innerParams)
  if (innerParams.inputValidator) {
    handleInputValidator(instance, inputValue, type)
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons()
    instance.showValidationMessage(innerParams.validationMessage)
  } else if (type === 'deny') {
    deny(instance, inputValue)
  } else {
    confirm(instance, inputValue)
  }
}

const handleInputValidator = (instance, inputValue, type /* 'confirm' | 'deny' */) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance)
  instance.disableInput()
  const validationPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
    innerParams.inputValidator(inputValue, innerParams.validationMessage))
  )
  validationPromise.then(
    (validationMessage) => {
      instance.enableButtons()
      instance.enableInput()
      if (validationMessage) {
        instance.showValidationMessage(validationMessage)
      } else if (type === 'deny') {
        deny(instance, inputValue)
      } else {
        confirm(instance, inputValue)
      }
    }
  )
}

const deny = (instance, value) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance || undefined)

  if (innerParams.showLoaderOnDeny) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)((0,_utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__.getDenyButton)())
  }

  if (innerParams.preDeny) {
    const preDenyPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
      innerParams.preDeny(value, innerParams.validationMessage))
    )
    preDenyPromise.then(
      (preDenyValue) => {
        if (preDenyValue === false) {
          instance.hideLoading()
        } else {
          instance.closePopup({ isDenied: true, value: typeof preDenyValue === 'undefined' ? value : preDenyValue })
        }
      }
    )
  } else {
    instance.closePopup({ isDenied: true, value })
  }
}

const succeedWith = (instance, value) => {
  instance.closePopup({ isConfirmed: true, value })
}

const confirm = (instance, value) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance || undefined)

  if (innerParams.showLoaderOnConfirm) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)()
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage()
    const preConfirmPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
      innerParams.preConfirm(value, innerParams.validationMessage))
    )
    preConfirmPromise.then(
      (preConfirmValue) => {
        if ((0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isVisible)((0,_utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__.getValidationMessage)()) || preConfirmValue === false) {
          instance.hideLoading()
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue)
        }
      }
    )
  } else {
    succeedWith(instance, value)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/close.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/close.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "close": () => (/* binding */ close),
/* harmony export */   "closePopup": () => (/* binding */ close),
/* harmony export */   "closeModal": () => (/* binding */ close),
/* harmony export */   "closeToast": () => (/* binding */ close)
/* harmony export */ });
/* harmony import */ var _utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _utils_aria_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");









/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState (instance, container, returnFocus, didClose) {
  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.isToast()) {
    triggerDidCloseAndDispose(instance, didClose)
  } else {
    (0,_globalState_js__WEBPACK_IMPORTED_MODULE_5__.restoreActiveElement)(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose))
    _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].keydownTarget.removeEventListener('keydown', _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].keydownHandler, { capture: _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].keydownListenerCapture })
    _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].keydownHandlerAdded = false
  }

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  // workaround for #2088
  // for some reason removing the container in Safari will scroll the document to bottom
  if (isSafari) {
    container.setAttribute('style', 'display:none !important')
    container.removeAttribute('class')
    container.innerHTML = ''
  } else {
    container.remove()
  }

  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.isModal()) {
    (0,_utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__.undoScrollbar)()
    ;(0,_utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__.undoIOSfix)()
    ;(0,_utils_aria_js__WEBPACK_IMPORTED_MODULE_2__.unsetAriaHidden)()
  }

  removeBodyClasses()
}

function removeBodyClasses () {
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.removeClass(
    [document.documentElement, document.body],
    [
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__.swalClasses.shown,
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__.swalClasses["height-auto"],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__.swalClasses["no-backdrop"],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__.swalClasses["toast-shown"],
    ]
  )
}

function close (resolveValue) {
  const popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.getPopup()

  if (!popup) {
    return
  }

  resolveValue = prepareResolveValue(resolveValue)

  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(this)
  if (!innerParams || _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.hasClass(popup, innerParams.hideClass.popup)) {
    return
  }
  const swalPromiseResolve = _privateMethods_js__WEBPACK_IMPORTED_MODULE_7__["default"].swalPromiseResolve.get(this)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.removeClass(popup, innerParams.showClass.popup)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.addClass(popup, innerParams.hideClass.popup)

  const backdrop = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.getContainer()
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.removeClass(backdrop, innerParams.showClass.backdrop)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.addClass(backdrop, innerParams.hideClass.backdrop)

  handlePopupAnimation(this, popup, innerParams)

  // Resolve Swal promise
  swalPromiseResolve(resolveValue)
}

const prepareResolveValue = (resolveValue) => {
  // When user calls Swal.close()
  if (typeof resolveValue === 'undefined') {
    return {
      isConfirmed: false,
      isDenied: false,
      isDismissed: true,
    }
  }

  return Object.assign({
    isConfirmed: false,
    isDenied: false,
    isDismissed: false,
  }, resolveValue)
}

const handlePopupAnimation = (instance, popup, innerParams) => {
  const container = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.getContainer()
  // If animation is supported, animate
  const animationIsSupported = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.animationEndEvent && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.hasCssAnimation(popup)

  if (typeof innerParams.willClose === 'function') {
    innerParams.willClose(popup)
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose)
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose)
  }
}

const animatePopup = (instance, popup, container, returnFocus, didClose) => {
  _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose)
  popup.addEventListener(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.animationEndEvent, function (e) {
    if (e.target === popup) {
      _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].swalCloseEventFinishedCallback()
      delete _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].swalCloseEventFinishedCallback
    }
  })
}

const triggerDidCloseAndDispose = (instance, didClose) => {
  setTimeout(() => {
    if (typeof didClose === 'function') {
      didClose.bind(instance.params)()
    }
    instance._destroy()
  })
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableButtons": () => (/* binding */ enableButtons),
/* harmony export */   "disableButtons": () => (/* binding */ disableButtons),
/* harmony export */   "enableInput": () => (/* binding */ enableInput),
/* harmony export */   "disableInput": () => (/* binding */ disableInput)
/* harmony export */ });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function setButtonsDisabled (instance, buttons, disabled) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(instance)
  buttons.forEach(button => {
    domCache[button].disabled = disabled
  })
}

function setInputDisabled (input, disabled) {
  if (!input) {
    return false
  }
  if (input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode
    const radios = radiosContainer.querySelectorAll('input')
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled
    }
  } else {
    input.disabled = disabled
  }
}

function enableButtons () {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false)
}

function disableButtons () {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true)
}

function enableInput () {
  return setInputDisabled(this.getInput(), false)
}

function disableInput () {
  return setInputDisabled(this.getInput(), true)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/getInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/getInput.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInput": () => (/* binding */ getInput)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");



// Get input element by specified type or, if type isn't specified, by params.input
function getInput (instance) {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].innerParams.get(instance || this)
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].domCache.get(instance || this)
  if (!domCache) {
    return null
  }
  return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getInput(domCache.popup, innerParams.input)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/hideLoading.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideLoading": () => (/* binding */ hideLoading),
/* harmony export */   "disableLoading": () => (/* binding */ hideLoading)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




/**
 * Hides loader and shows back the button which was hidden by .showLoading()
 */
function hideLoading () {
  // do nothing if popup is closed
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(this)
  if (!innerParams) {
    return
  }
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.loader)
  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isToast()) {
    if (innerParams.icon) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getIcon())
    }
  } else {
    showRelatedButton(domCache)
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass([domCache.popup, domCache.actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.loading)
  domCache.popup.removeAttribute('aria-busy')
  domCache.popup.removeAttribute('data-loading')
  domCache.confirmButton.disabled = false
  domCache.denyButton.disabled = false
  domCache.cancelButton.disabled = false
}

const showRelatedButton = (domCache) => {
  const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'))
  if (buttonToReplace.length) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(buttonToReplace[0], 'inline-block')
  } else if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.allButtonsAreHidden()) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.actions)
  }
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addKeydownHandler": () => (/* binding */ addKeydownHandler),
/* harmony export */   "setFocus": () => (/* binding */ setFocus)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");






const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture })
    globalState.keydownHandlerAdded = false
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = (e) => keydownHandler(instance, e, dismissWith)
    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture })
    globalState.keydownHandlerAdded = true
  }
}

// Focus handling
const setFocus = (innerParams, index, increment) => {
  const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements()
  // search for visible elements and select the next possible match
  if (focusableElements.length) {
    index = index + increment

    // rollover to first item
    if (index === focusableElements.length) {
      index = 0

      // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1
    }

    return focusableElements[index].focus()
  }
  // no visible focusable elements, focus the popup
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup().focus()
}

const arrowKeysNextButton = [
  'ArrowRight', 'ArrowDown',
]

const arrowKeysPreviousButton = [
  'ArrowLeft', 'ArrowUp',
]

const keydownHandler = (instance, e, dismissWith) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__["default"].innerParams.get(instance)

  if (!innerParams) {
    return // This instance has already been destroyed
  }

  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation()
  }

  // ENTER
  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams)

  // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams)

  // ARROWS - switch focus between buttons
  } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
    handleArrows(e.key)

  // ESC
  } else if (e.key === 'Escape') {
    handleEsc(e, innerParams, dismissWith)
  }
}

const handleEnter = (instance, e, innerParams) => {
  // #720 #721
  if (e.isComposing) {
    return
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].includes(innerParams.input)) {
      return // do not submit
    }

    (0,_staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_3__.clickConfirm)()
    e.preventDefault()
  }
}

const handleTab = (e, innerParams) => {
  const targetElement = e.target

  const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements()
  let btnIndex = -1
  for (let i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i
      break
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1)
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1)
  }
  e.stopPropagation()
  e.preventDefault()
}

const handleArrows = (key) => {
  const confirmButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton()
  const denyButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton()
  const cancelButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton()
  if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
    return
  }
  const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling'
  const buttonToFocus = document.activeElement[sibling]
  if (buttonToFocus) {
    buttonToFocus.focus()
  }
}

const handleEsc = (e, innerParams, dismissWith) => {
  if ((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.callIfFunction)(innerParams.allowEscapeKey)) {
    e.preventDefault()
    dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.esc)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlePopupClick": () => (/* binding */ handlePopupClick)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




const handlePopupClick = (instance, domCache, dismissWith) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(instance)
  if (innerParams.toast) {
    handleToastClick(instance, domCache, dismissWith)
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache)

    // Ignore click events that had mousedown on the container but mouseup on the popup
    handleContainerMousedown(domCache)

    handleModalClick(instance, domCache, dismissWith)
  }
}

const handleToastClick = (instance, domCache, dismissWith) => {
  // Closing toast by internal click
  domCache.popup.onclick = () => {
    const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(instance)
    if (
      innerParams.showConfirmButton ||
      innerParams.showDenyButton ||
      innerParams.showCancelButton ||
      innerParams.showCloseButton ||
      innerParams.timer ||
      innerParams.input
    ) {
      return
    }
    dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.close)
  }
}

let ignoreOutsideClick = false

const handleModalMousedown = (domCache) => {
  domCache.popup.onmousedown = () => {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined
      // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup
      if (e.target === domCache.container) {
        ignoreOutsideClick = true
      }
    }
  }
}

const handleContainerMousedown = (domCache) => {
  domCache.container.onmousedown = () => {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined
      // We also need to check if the mouseup target is a child of the popup
      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true
      }
    }
  }
}

const handleModalClick = (instance, domCache, dismissWith) => {
  domCache.container.onclick = (e) => {
    const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(instance)
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false
      return
    }
    if (e.target === domCache.container && (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.callIfFunction)(innerParams.allowOutsideClick)) {
      dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.backdrop)
    }
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/progress-steps.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProgressSteps": () => (/* binding */ getProgressSteps)
/* harmony export */ });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function getProgressSteps () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(this)
  return domCache.progressSteps
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/update.js":
/*!****************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/update.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





/**
 * Updates popup parameters.
 */
function update (params) {
  const popup = _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(this)

  if (!popup || _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(popup, innerParams.hideClass.popup)) {
    return (0,_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`)
  }

  const validUpdatableParams = {}

  // assign valid params from `params` to `defaults`
  Object.keys(params).forEach(param => {
    if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param]
    } else {
      (0,_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Invalid parameter to update: "${param}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)
    }
  })

  const updatedParams = Object.assign({}, innerParams, validUpdatableParams)

  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.render(this, updatedParams)

  _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.set(this, updatedParams)
  Object.defineProperties(this, {
    params: {
      value: Object.assign({}, this.params, params),
      writable: false,
      enumerable: true
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/validation-message.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/validation-message.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showValidationMessage": () => (/* binding */ showValidationMessage),
/* harmony export */   "resetValidationMessage": () => (/* binding */ resetValidationMessage)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




// Show block with validation message
function showValidationMessage (error) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  const params = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(this)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(domCache.validationMessage, error)
  domCache.validationMessage.className = _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["validation-message"]
  if (params.customClass && params.customClass.validationMessage) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(domCache.validationMessage, params.customClass.validationMessage)
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(domCache.validationMessage)

  const input = this.getInput()
  if (input) {
    input.setAttribute('aria-invalid', true)
    input.setAttribute('aria-describedby', _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["validation-message"])
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.focusInput(input)
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.inputerror)
  }
}

// Hide block with validation message
function resetValidationMessage () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  if (domCache.validationMessage) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.validationMessage)
  }

  const input = this.getInput()
  if (input) {
    input.removeAttribute('aria-invalid')
    input.removeAttribute('aria-describedby')
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.inputerror)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateMethods.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateMethods.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  swalPromiseResolve: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateProps.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateProps.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsToParams": () => (/* reexport safe */ _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__.argsToParams),
/* harmony export */   "clickCancel": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickCancel),
/* harmony export */   "clickConfirm": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickConfirm),
/* harmony export */   "clickDeny": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickDeny),
/* harmony export */   "getActions": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getActions),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getCloseButton),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton),
/* harmony export */   "getContainer": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getContainer),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements),
/* harmony export */   "getFooter": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getFooter),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getHtmlContainer),
/* harmony export */   "getIcon": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getIcon),
/* harmony export */   "getImage": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getImage),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getInputLabel),
/* harmony export */   "getLoader": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getLoader),
/* harmony export */   "getPopup": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getPopup),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getTimerProgressBar),
/* harmony export */   "getTitle": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getTitle),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.isLoading),
/* harmony export */   "isVisible": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.isVisible),
/* harmony export */   "fire": () => (/* reexport safe */ _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__.fire),
/* harmony export */   "mixin": () => (/* reexport safe */ _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__.mixin),
/* harmony export */   "enableLoading": () => (/* reexport safe */ _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.enableLoading),
/* harmony export */   "showLoading": () => (/* reexport safe */ _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading),
/* harmony export */   "getTimerLeft": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.getTimerLeft),
/* harmony export */   "increaseTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.increaseTimer),
/* harmony export */   "isTimerRunning": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.isTimerRunning),
/* harmony export */   "resumeTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.resumeTimer),
/* harmony export */   "stopTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.stopTimer),
/* harmony export */   "toggleTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.toggleTimer),
/* harmony export */   "bindClickHandler": () => (/* reexport safe */ _staticMethods_bindClickHandler_js__WEBPACK_IMPORTED_MODULE_6__.bindClickHandler),
/* harmony export */   "isValidParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_7__.isValidParameter),
/* harmony export */   "isUpdatableParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_7__.isUpdatableParameter),
/* harmony export */   "isDeprecatedParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_7__.isDeprecatedParameter)
/* harmony export */ });
/* harmony import */ var _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticMethods/argsToParams.js */ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js");
/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");
/* harmony import */ var _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticMethods/fire.js */ "./node_modules/sweetalert2/src/staticMethods/fire.js");
/* harmony import */ var _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticMethods/mixin.js */ "./node_modules/sweetalert2/src/staticMethods/mixin.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony import */ var _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staticMethods/timer.js */ "./node_modules/sweetalert2/src/staticMethods/timer.js");
/* harmony import */ var _staticMethods_bindClickHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staticMethods/bindClickHandler.js */ "./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js");
/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");










/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/argsToParams.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsToParams": () => (/* binding */ argsToParams)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const isJqueryElement = (elem) => typeof elem === 'object' && elem.jquery
const isElement = (elem) => elem instanceof Element || isJqueryElement(elem)

const argsToParams = (args) => {
  const params = {}
  if (typeof args[0] === 'object' && !isElement(args[0])) {
    Object.assign(params, args[0])
  } else {
    ['title', 'html', 'icon'].forEach((name, index) => {
      const arg = args[index]
      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg
      } else if (arg !== undefined) {
        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.error)(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`)
      }
    })
  }
  return params
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindClickHandler": () => (/* binding */ bindClickHandler)
/* harmony export */ });
let bodyClickListenerAdded = false
const clickHandlers = {}

function bindClickHandler (attr = 'data-swal-template') {
  clickHandlers[attr] = this

  if (!bodyClickListenerAdded) {
    document.body.addEventListener('click', bodyClickListener)
    bodyClickListenerAdded = true
  }
}

const bodyClickListener = (event) => {
  for (let el = event.target; el && el !== document; el = el.parentNode) {
    for (const attr in clickHandlers) {
      const template = el.getAttribute(attr)
      if (template) {
        clickHandlers[attr].fire({ template })
        return
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/dom.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContainer": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer),
/* harmony export */   "getPopup": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup),
/* harmony export */   "getTitle": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTitle),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer),
/* harmony export */   "getImage": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getImage),
/* harmony export */   "getIcon": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getIcon),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getInputLabel),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCloseButton),
/* harmony export */   "getActions": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getActions),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton),
/* harmony export */   "getLoader": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getLoader),
/* harmony export */   "getFooter": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFooter),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isLoading),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "clickConfirm": () => (/* binding */ clickConfirm),
/* harmony export */   "clickDeny": () => (/* binding */ clickDeny),
/* harmony export */   "clickCancel": () => (/* binding */ clickCancel)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");





/*
 * Global function to determine if SweetAlert2 popup is shown
 */
const isVisible = () => {
  return _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup())
}

/*
 * Global function to click 'Confirm' button
 */
const clickConfirm = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton().click()

/*
 * Global function to click 'Deny' button
 */
const clickDeny = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton().click()

/*
 * Global function to click 'Cancel' button
 */
const clickCancel = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton().click()


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/fire.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/fire.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fire": () => (/* binding */ fire)
/* harmony export */ });
function fire (...args) {
  const Swal = this
  return new Swal(...args)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/mixin.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/mixin.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixin": () => (/* binding */ mixin)
/* harmony export */ });
/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin (mixinParams) {
  class MixinSwal extends this {
    _main (params, priorityMixinParams) {
      return super._main(params, Object.assign({}, mixinParams, priorityMixinParams))
    }
  }

  return MixinSwal
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/showLoading.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/showLoading.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showLoading": () => (/* binding */ showLoading),
/* harmony export */   "enableLoading": () => (/* binding */ showLoading)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");




/**
 * Shows loader (spinner), this is useful with AJAX requests.
 * By default the loader be shown instead of the "Confirm" button.
 */
const showLoading = (buttonToReplace) => {
  let popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  if (!popup) {
    _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__["default"].fire()
  }
  popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  const loader = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getLoader()

  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isToast()) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getIcon())
  } else {
    replaceButton(popup, buttonToReplace)
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(loader)

  popup.setAttribute('data-loading', true)
  popup.setAttribute('aria-busy', true)
  popup.focus()
}

const replaceButton = (popup, buttonToReplace) => {
  const actions = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getActions()
  const loader = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getLoader()

  if (!buttonToReplace && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isVisible(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton())) {
    buttonToReplace = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton()
  }

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(actions)
  if (buttonToReplace) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(buttonToReplace)
    loader.setAttribute('data-button-to-replace', buttonToReplace.className)
  }
  loader.parentNode.insertBefore(loader, buttonToReplace)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([popup, actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__.swalClasses.loading)
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/timer.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/timer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimerLeft": () => (/* binding */ getTimerLeft),
/* harmony export */   "stopTimer": () => (/* binding */ stopTimer),
/* harmony export */   "resumeTimer": () => (/* binding */ resumeTimer),
/* harmony export */   "toggleTimer": () => (/* binding */ toggleTimer),
/* harmony export */   "increaseTimer": () => (/* binding */ increaseTimer),
/* harmony export */   "isTimerRunning": () => (/* binding */ isTimerRunning)
/* harmony export */ });
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");



/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */
const getTimerLeft = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.getTimerLeft()
}

/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const stopTimer = () => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    (0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.stopTimerProgressBar)()
    return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.stop()
  }
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const resumeTimer = () => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    const remaining = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.start()
    ;(0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar)(remaining)
    return remaining
  }
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const toggleTimer = () => {
  const timer = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout
  return timer && (timer.running ? stopTimer() : resumeTimer())
}

/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */
const increaseTimer = (n) => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    const remaining = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.increase(n)
    ;(0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar)(remaining, true)
    return remaining
  }
}

/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */
const isTimerRunning = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.isRunning()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlert.js */ "./node_modules/sweetalert2/src/SweetAlert.js");


const Swal = _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__["default"]
Swal.default = Swal

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swal);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/DismissReason.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/DismissReason.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DismissReason": () => (/* binding */ DismissReason)
/* harmony export */ });
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
})


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/Timer.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/Timer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
class Timer {
  constructor (callback, delay) {
    this.callback = callback
    this.remaining = delay
    this.running = false

    this.start()
  }

  start () {
    if (!this.running) {
      this.running = true
      this.started = new Date()
      this.id = setTimeout(this.callback, this.remaining)
    }
    return this.remaining
  }

  stop () {
    if (this.running) {
      this.running = false
      clearTimeout(this.id)
      this.remaining -= new Date() - this.started
    }
    return this.remaining
  }

  increase (n) {
    const running = this.running
    if (running) {
      this.stop()
    }
    this.remaining += n
    if (running) {
      this.start()
    }
    return this.remaining
  }

  getTimerLeft () {
    if (this.running) {
      this.stop()
      this.start()
    }
    return this.remaining
  }

  isRunning () {
    return this.running
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/aria.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/aria.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAriaHidden": () => (/* binding */ setAriaHidden),
/* harmony export */   "unsetAriaHidden": () => (/* binding */ unsetAriaHidden)
/* harmony export */ });
/* harmony import */ var _dom_getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");



// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

const setAriaHidden = () => {
  const bodyChildren = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.body.children)
  bodyChildren.forEach(el => {
    if (el === (0,_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__.getContainer)() || el.contains((0,_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__.getContainer)())) {
      return
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'))
    }
    el.setAttribute('aria-hidden', 'true')
  })
}

const unsetAriaHidden = () => {
  const bodyChildren = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.body.children)
  bodyChildren.forEach(el => {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'))
      el.removeAttribute('data-previous-aria-hidden')
    } else {
      el.removeAttribute('aria-hidden')
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/classes.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/classes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swalPrefix": () => (/* binding */ swalPrefix),
/* harmony export */   "prefix": () => (/* binding */ prefix),
/* harmony export */   "swalClasses": () => (/* binding */ swalClasses),
/* harmony export */   "iconTypes": () => (/* binding */ iconTypes)
/* harmony export */ });
const swalPrefix = 'swal2-'

const prefix = (items) => {
  const result = {}
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i]
  }
  return result
}

const swalClasses = prefix([
  'container',
  'shown',
  'height-auto',
  'iosfix',
  'popup',
  'modal',
  'no-backdrop',
  'no-transition',
  'toast',
  'toast-shown',
  'show',
  'hide',
  'close',
  'title',
  'html-container',
  'actions',
  'confirm',
  'deny',
  'cancel',
  'default-outline',
  'footer',
  'icon',
  'icon-content',
  'image',
  'input',
  'file',
  'range',
  'select',
  'radio',
  'checkbox',
  'label',
  'textarea',
  'inputerror',
  'input-label',
  'validation-message',
  'progress-steps',
  'active-progress-step',
  'progress-step',
  'progress-step-line',
  'loader',
  'loading',
  'styled',
  'top',
  'top-start',
  'top-end',
  'top-left',
  'top-right',
  'center',
  'center-start',
  'center-end',
  'center-left',
  'center-right',
  'bottom',
  'bottom-start',
  'bottom-end',
  'bottom-left',
  'bottom-right',
  'grow-row',
  'grow-column',
  'grow-fullscreen',
  'rtl',
  'timer-progress-bar',
  'timer-progress-bar-container',
  'scrollbar-measure',
  'icon-success',
  'icon-warning',
  'icon-info',
  'icon-question',
  'icon-error',
])

const iconTypes = prefix([
  'success',
  'warning',
  'info',
  'question',
  'error'
])


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/defaultInputValidators.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage || 'Invalid email address')
  },
  url: (string, validationMessage) => {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage || 'Invalid URL')
  }
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationEndEvent": () => (/* binding */ animationEndEvent)
/* harmony export */ });
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");


const animationEndEvent = (() => {
  // Prevent run in Node env
  /* istanbul ignore if */
  if ((0,_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__.isNodeEnv)()) {
    return false
  }

  const testEl = document.createElement('div')
  const transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  }
  for (const i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i]
    }
  }

  return false
})()


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/domUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/domUtils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "states": () => (/* binding */ states),
/* harmony export */   "setInnerHtml": () => (/* binding */ setInnerHtml),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "applyCustomClass": () => (/* binding */ applyCustomClass),
/* harmony export */   "getInput": () => (/* binding */ getInput),
/* harmony export */   "focusInput": () => (/* binding */ focusInput),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "getChildByClass": () => (/* binding */ getChildByClass),
/* harmony export */   "applyNumericalStyle": () => (/* binding */ applyNumericalStyle),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "setStyle": () => (/* binding */ setStyle),
/* harmony export */   "toggle": () => (/* binding */ toggle),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "allButtonsAreHidden": () => (/* binding */ allButtonsAreHidden),
/* harmony export */   "isScrollable": () => (/* binding */ isScrollable),
/* harmony export */   "hasCssAnimation": () => (/* binding */ hasCssAnimation),
/* harmony export */   "animateTimerProgressBar": () => (/* binding */ animateTimerProgressBar),
/* harmony export */   "stopTimerProgressBar": () => (/* binding */ stopTimerProgressBar)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




// Remember state in cases where opening and handling a modal will fiddle with it.
const states = {
  previousBodyPadding: null
}

const setInnerHtml = (elem, html) => { // #1926
  elem.textContent = ''
  if (html) {
    const parser = new DOMParser()
    const parsed = parser.parseFromString(html, `text/html`)
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(parsed.querySelector('head').childNodes).forEach((child) => {
      elem.appendChild(child)
    })
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(parsed.querySelector('body').childNodes).forEach((child) => {
      elem.appendChild(child)
    })
  }
}

const hasClass = (elem, className) => {
  if (!className) {
    return false
  }
  const classList = className.split(/\s+/)
  for (let i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false
    }
  }
  return true
}

const removeCustomClasses = (elem, params) => {
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(elem.classList).forEach(className => {
    if (
      !Object.values(_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses).includes(className) &&
      !Object.values(_classes_js__WEBPACK_IMPORTED_MODULE_1__.iconTypes).includes(className) &&
      !Object.values(params.showClass).includes(className)
    ) {
      elem.classList.remove(className)
    }
  })
}

const applyCustomClass = (elem, params, className) => {
  removeCustomClasses(elem, params)

  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`)
    }

    addClass(elem, params.customClass[className])
  }
}

const getInput = (popup, inputType) => {
  if (!inputType) {
    return null
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses[inputType])
    case 'checkbox':
      return popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.checkbox} input`)
    case 'radio':
      return popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio} input:checked`) ||
        popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio} input:first-child`)
    case 'range':
      return popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.range} input`)
    default:
      return getChildByClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.input)
  }
}

const focusInput = (input) => {
  input.focus()

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    const val = input.value
    input.value = ''
    input.value = val
  }
}

const toggleClass = (target, classList, condition) => {
  if (!target || !classList) {
    return
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean)
  }
  classList.forEach((className) => {
    if (target.forEach) {
      target.forEach((elem) => {
        condition ? elem.classList.add(className) : elem.classList.remove(className)
      })
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className)
    }
  })
}

const addClass = (target, classList) => {
  toggleClass(target, classList, true)
}

const removeClass = (target, classList) => {
  toggleClass(target, classList, false)
}

const getChildByClass = (elem, className) => {
  for (let i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i]
    }
  }
}

const applyNumericalStyle = (elem, property, value) => {
  if (value === `${parseInt(value)}`) {
    value = parseInt(value)
  }
  if (value || parseInt(value) === 0) {
    elem.style[property] = (typeof value === 'number') ? `${value}px` : value
  } else {
    elem.style.removeProperty(property)
  }
}

const show = (elem, display = 'flex') => {
  elem.style.display = display
}

const hide = (elem) => {
  elem.style.display = 'none'
}

const setStyle = (parent, selector, property, value) => {
  const el = parent.querySelector(selector)
  if (el) {
    el.style[property] = value
  }
}

const toggle = (elem, condition, display) => {
  condition ? show(elem, display) : hide(elem)
}

// borrowed from jquery $(elem).is(':visible') implementation
const isVisible = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length))

const allButtonsAreHidden = () => !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton)()) && !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton)()) && !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton)())

const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight)

// borrowed from https://stackoverflow.com/a/46352119
const hasCssAnimation = (elem) => {
  const style = window.getComputedStyle(elem)

  const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0')
  const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0')

  return animDuration > 0 || transDuration > 0
}

const animateTimerProgressBar = (timer, reset = false) => {
  const timerProgressBar = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar)()
  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none'
      timerProgressBar.style.width = '100%'
    }
    setTimeout(() => {
      timerProgressBar.style.transition = `width ${timer / 1000}s linear`
      timerProgressBar.style.width = '0%'
    }, 10)
  }
}

const stopTimerProgressBar = () => {
  const timerProgressBar = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar)()
  const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width)
  timerProgressBar.style.removeProperty('transition')
  timerProgressBar.style.width = '100%'
  const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width)
  const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100)
  timerProgressBar.style.removeProperty('transition')
  timerProgressBar.style.width = `${timerProgressBarPercent}%`
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/getters.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/getters.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContainer": () => (/* binding */ getContainer),
/* harmony export */   "elementBySelector": () => (/* binding */ elementBySelector),
/* harmony export */   "getPopup": () => (/* binding */ getPopup),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "getTitle": () => (/* binding */ getTitle),
/* harmony export */   "getHtmlContainer": () => (/* binding */ getHtmlContainer),
/* harmony export */   "getImage": () => (/* binding */ getImage),
/* harmony export */   "getProgressSteps": () => (/* binding */ getProgressSteps),
/* harmony export */   "getValidationMessage": () => (/* binding */ getValidationMessage),
/* harmony export */   "getConfirmButton": () => (/* binding */ getConfirmButton),
/* harmony export */   "getDenyButton": () => (/* binding */ getDenyButton),
/* harmony export */   "getInputLabel": () => (/* binding */ getInputLabel),
/* harmony export */   "getLoader": () => (/* binding */ getLoader),
/* harmony export */   "getCancelButton": () => (/* binding */ getCancelButton),
/* harmony export */   "getActions": () => (/* binding */ getActions),
/* harmony export */   "getFooter": () => (/* binding */ getFooter),
/* harmony export */   "getTimerProgressBar": () => (/* binding */ getTimerProgressBar),
/* harmony export */   "getCloseButton": () => (/* binding */ getCloseButton),
/* harmony export */   "getFocusableElements": () => (/* binding */ getFocusableElements),
/* harmony export */   "isModal": () => (/* binding */ isModal),
/* harmony export */   "isToast": () => (/* binding */ isToast),
/* harmony export */   "isLoading": () => (/* binding */ isLoading)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");




const getContainer = () => document.body.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.container}`)

const elementBySelector = (selectorString) => {
  const container = getContainer()
  return container ? container.querySelector(selectorString) : null
}

const elementByClass = (className) => {
  return elementBySelector(`.${className}`)
}

const getPopup = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup)

const getIcon = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.icon)

const getTitle = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title)

const getHtmlContainer = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"])

const getImage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image)

const getProgressSteps = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-steps"])

const getValidationMessage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"])

const getConfirmButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.confirm}`)

const getDenyButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.deny}`)

const getInputLabel = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["input-label"])

const getLoader = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.loader}`)

const getCancelButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.cancel}`)

const getActions = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions)

const getFooter = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.footer)

const getTimerProgressBar = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar"])

const getCloseButton = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.close)

// https://github.com/jkup/focusable/blob/master/index.js
const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`

const getFocusableElements = () => {
  const focusableElementsWithTabindex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(
    getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
  )
  // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'))
      b = parseInt(b.getAttribute('tabindex'))
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    })

  const otherFocusableElements = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(
    getPopup().querySelectorAll(focusable)
  ).filter(el => el.getAttribute('tabindex') !== '-1')

  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.uniqueArray)(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.isVisible)(el))
}

const isModal = () => {
  return !isToast() && !document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"])
}

const isToast = () => {
  return document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"])
}

const isLoading = () => {
  return getPopup().hasAttribute('data-loading')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.addClass),
/* harmony export */   "allButtonsAreHidden": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.allButtonsAreHidden),
/* harmony export */   "animateTimerProgressBar": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar),
/* harmony export */   "applyCustomClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass),
/* harmony export */   "applyNumericalStyle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.applyNumericalStyle),
/* harmony export */   "focusInput": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.focusInput),
/* harmony export */   "getChildByClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.getChildByClass),
/* harmony export */   "getInput": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.getInput),
/* harmony export */   "hasClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasClass),
/* harmony export */   "hasCssAnimation": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasCssAnimation),
/* harmony export */   "hide": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hide),
/* harmony export */   "isScrollable": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable),
/* harmony export */   "isVisible": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isVisible),
/* harmony export */   "removeClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeClass),
/* harmony export */   "setInnerHtml": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml),
/* harmony export */   "setStyle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setStyle),
/* harmony export */   "show": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.show),
/* harmony export */   "states": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.states),
/* harmony export */   "stopTimerProgressBar": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.stopTimerProgressBar),
/* harmony export */   "toggle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggle),
/* harmony export */   "toggleClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass),
/* harmony export */   "init": () => (/* reexport safe */ _init_js__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   "elementBySelector": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.elementBySelector),
/* harmony export */   "getActions": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getActions),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getCancelButton),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getCloseButton),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getConfirmButton),
/* harmony export */   "getContainer": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getContainer),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getDenyButton),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getFocusableElements),
/* harmony export */   "getFooter": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getFooter),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getHtmlContainer),
/* harmony export */   "getIcon": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getIcon),
/* harmony export */   "getImage": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getImage),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getInputLabel),
/* harmony export */   "getLoader": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getLoader),
/* harmony export */   "getPopup": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getPopup),
/* harmony export */   "getProgressSteps": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getProgressSteps),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getTimerProgressBar),
/* harmony export */   "getTitle": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getTitle),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isLoading),
/* harmony export */   "isModal": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isModal),
/* harmony export */   "isToast": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isToast),
/* harmony export */   "parseHtmlToContainer": () => (/* reexport safe */ _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__.parseHtmlToContainer),
/* harmony export */   "animationEndEvent": () => (/* reexport safe */ _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__.animationEndEvent),
/* harmony export */   "measureScrollbar": () => (/* reexport safe */ _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__.measureScrollbar),
/* harmony export */   "render": () => (/* reexport safe */ _renderers_render_js__WEBPACK_IMPORTED_MODULE_6__.render)
/* harmony export */ });
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/sweetalert2/src/utils/dom/init.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseHtmlToContainer.js */ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js");
/* harmony import */ var _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animationEndEvent.js */ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js");
/* harmony import */ var _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measureScrollbar.js */ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js");
/* harmony import */ var _renderers_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderers/render.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/render.js");









/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/init.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/init.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");







const sweetHTML = `
 <div aria-labelledby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}" aria-describedby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"]}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup}" tabindex="-1">
   <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.close}"></button>
   <ul class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-steps"]}"></ul>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.icon}"></div>
   <img class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image}" />
   <h2 class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}"></h2>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"]}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"]}"></div>
   <input class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input}" />
   <input type="file" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.file}" />
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.select}"></select>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.radio}"></div>
   <label for="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.label}"></span>
   </label>
   <textarea class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.textarea}"></textarea>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"]}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"]}"></div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions}">
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.loader}"></div>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.confirm}"></button>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.deny}"></button>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.cancel}"></button>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.footer}"></div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar-container"]}">
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '')

const resetOldContainer = () => {
  const oldContainer = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getContainer)()
  if (!oldContainer) {
    return false
  }

  oldContainer.remove()
  ;(0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.removeClass)(
    [document.documentElement, document.body],
    [
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"],
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"],
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["has-column"]
    ]
  )

  return true
}

const resetValidationMessage = () => {
  if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__["default"].isVisible()) {
    _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__["default"].resetValidationMessage()
  }
}

const addInputChangeListeners = () => {
  const popup = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getPopup)()

  const input = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input)
  const file = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.file)
  const range = popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range} input`)
  const rangeOutput = popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range} output`)
  const select = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.select)
  const checkbox = popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox} input`)
  const textarea = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.textarea)

  input.oninput = resetValidationMessage
  file.onchange = resetValidationMessage
  select.onchange = resetValidationMessage
  checkbox.onchange = resetValidationMessage
  textarea.oninput = resetValidationMessage

  range.oninput = () => {
    resetValidationMessage()
    rangeOutput.value = range.value
  }

  range.onchange = () => {
    resetValidationMessage()
    range.nextSibling.value = range.value
  }
}

const getTarget = (target) => typeof target === 'string' ? document.querySelector(target) : target

const setupAccessibility = (params) => {
  const popup = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getPopup)()

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog')
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive')
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true')
  }
}

const setupRTL = (targetElement) => {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.addClass)((0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getContainer)(), _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.rtl)
  }
}

/*
 * Add modal + backdrop to DOM
 */
const init = (params) => {
  // Clean up the old popup container if it exists
  const oldContainerExisted = resetOldContainer()

  /* istanbul ignore if */
  if ((0,_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__.isNodeEnv)()) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.error)('SweetAlert2 requires document to initialize')
    return
  }

  const container = document.createElement('div')
  container.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.container
  if (oldContainerExisted) {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-transition"])
  }
  (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml)(container, sweetHTML)

  const targetElement = getTarget(params.target)
  targetElement.appendChild(container)

  setupAccessibility(params)
  setupRTL(targetElement)
  addInputChangeListeners()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js":
/*!**************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/inputUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleInputOptionsAndValue": () => (/* binding */ handleInputOptionsAndValue),
/* harmony export */   "getInputValue": () => (/* binding */ getInputValue)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");






const handleInputOptionsAndValue = (instance, params) => {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params)
  } else if (
    ['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) &&
    ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hasToPromiseFn)(params.inputValue) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isPromise)(params.inputValue))
  ) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)(_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton())
    handleInputValue(instance, params)
  }
}

const getInputValue = (instance, innerParams) => {
  const input = instance.getInput()
  if (!input) {
    return null
  }
  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input)
    case 'radio':
      return getRadioValue(input)
    case 'file':
      return getFileValue(input)
    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value
  }
}

const getCheckboxValue = (input) => input.checked ? 1 : 0

const getRadioValue = (input) => input.checked ? input.value : null

const getFileValue = (input) => input.files.length ? (input.getAttribute('multiple') !== null ? input.files : input.files[0]) : null

const handleInputOptions = (instance, params) => {
  const popup = _index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  const processInputOptions = (inputOptions) => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params)
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hasToPromiseFn)(params.inputOptions) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isPromise)(params.inputOptions)) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)(_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton())
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(params.inputOptions).then((inputOptions) => {
      instance.hideLoading()
      processInputOptions(inputOptions)
    })
  } else if (typeof params.inputOptions === 'object') {
    processInputOptions(params.inputOptions)
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.error)(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`)
  }
}

const handleInputValue = (instance, params) => {
  const input = instance.getInput()
  _index_js__WEBPACK_IMPORTED_MODULE_0__.hide(input)
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(params.inputValue).then((inputValue) => {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : `${inputValue}`
    _index_js__WEBPACK_IMPORTED_MODULE_0__.show(input)
    input.focus()
    instance.hideLoading()
  })
    .catch((err) => {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.error)(`Error in inputValue promise: ${err}`)
      input.value = ''
      _index_js__WEBPACK_IMPORTED_MODULE_0__.show(input)
      input.focus()
      instance.hideLoading()
    })
}

const populateInputOptions = {
  select: (popup, inputOptions, params) => {
    const select = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.select)
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option')
      option.value = optionValue
      _index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(option, optionLabel)
      option.selected = isSelected(optionValue, params.inputValue)
      parent.appendChild(option)
    }
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0]
      const optionLabel = inputOption[1]
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) { // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup')
        optgroup.label = optionValue
        optgroup.disabled = false // not configurable for now
        select.appendChild(optgroup)
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]))
      } else { // case of <option>
        renderOption(select, optionLabel, optionValue)
      }
    })
    select.focus()
  },

  radio: (popup, inputOptions, params) => {
    const radio = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio)
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0]
      const radioLabel = inputOption[1]
      const radioInput = document.createElement('input')
      const radioLabelElement = document.createElement('label')
      radioInput.type = 'radio'
      radioInput.name = _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio
      radioInput.value = radioValue
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true
      }
      const label = document.createElement('span')
      _index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(label, radioLabel)
      label.className = _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.label
      radioLabelElement.appendChild(radioInput)
      radioLabelElement.appendChild(label)
      radio.appendChild(radioLabelElement)
    })
    const radios = radio.querySelectorAll('input')
    if (radios.length) {
      radios[0].focus()
    }
  }
}

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
const formatInputOptions = (inputOptions) => {
  const result = []
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      let valueFormatted = value
      if (typeof valueFormatted === 'object') { // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted)
      }
      result.push([key, valueFormatted])
    })
  } else {
    Object.keys(inputOptions).forEach(key => {
      let valueFormatted = inputOptions[key]
      if (typeof valueFormatted === 'object') { // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted)
      }
      result.push([key, valueFormatted])
    })
  }
  return result
}

const isSelected = (optionValue, inputValue) => {
  return inputValue && inputValue.toString() === optionValue.toString()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "measureScrollbar": () => (/* binding */ measureScrollbar)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");


// Measure scrollbar width for padding body during modal show/hide
// https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
const measureScrollbar = () => {
  const scrollDiv = document.createElement('div')
  scrollDiv.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["scrollbar-measure"]
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseHtmlToContainer": () => (/* binding */ parseHtmlToContainer)
/* harmony export */ });
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");


const parseHtmlToContainer = (param, target) => {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param)

  // Object
  } else if (typeof param === 'object') {
    handleObject(param, target)

  // Plain string
  } else if (param) {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml)(target, param)
  }
}

const handleObject = (param, target) => {
  // JQuery element(s)
  if (param.jquery) {
    handleJqueryElem(target, param)

  // For other objects use their string representation
  } else {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml)(target, param.toString())
  }
}

const handleJqueryElem = (target, elem) => {
  target.textContent = ''
  if (0 in elem) {
    for (let i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true))
    }
  } else {
    target.appendChild(elem.cloneNode(true))
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/render.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/render.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _renderActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderActions.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js");
/* harmony import */ var _renderContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderContainer.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js");
/* harmony import */ var _renderContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderContent.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js");
/* harmony import */ var _renderFooter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderFooter.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js");
/* harmony import */ var _renderCloseButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderCloseButton.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js");
/* harmony import */ var _renderIcon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderIcon.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js");
/* harmony import */ var _renderImage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderImage.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js");
/* harmony import */ var _renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderProgressSteps.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js");
/* harmony import */ var _renderTitle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./renderTitle.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js");
/* harmony import */ var _renderPopup_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderPopup.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js");












const render = (instance, params) => {
  (0,_renderPopup_js__WEBPACK_IMPORTED_MODULE_10__.renderPopup)(instance, params)
  ;(0,_renderContainer_js__WEBPACK_IMPORTED_MODULE_2__.renderContainer)(instance, params)

  ;(0,_renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_8__.renderProgressSteps)(instance, params)
  ;(0,_renderIcon_js__WEBPACK_IMPORTED_MODULE_6__.renderIcon)(instance, params)
  ;(0,_renderImage_js__WEBPACK_IMPORTED_MODULE_7__.renderImage)(instance, params)
  ;(0,_renderTitle_js__WEBPACK_IMPORTED_MODULE_9__.renderTitle)(instance, params)
  ;(0,_renderCloseButton_js__WEBPACK_IMPORTED_MODULE_5__.renderCloseButton)(instance, params)

  ;(0,_renderContent_js__WEBPACK_IMPORTED_MODULE_3__.renderContent)(instance, params)
  ;(0,_renderActions_js__WEBPACK_IMPORTED_MODULE_1__.renderActions)(instance, params)
  ;(0,_renderFooter_js__WEBPACK_IMPORTED_MODULE_4__.renderFooter)(instance, params)

  if (typeof params.didRender === 'function') {
    params.didRender((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getPopup)())
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderActions": () => (/* binding */ renderActions)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




const renderActions = (instance, params) => {
  const actions = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getActions()
  const loader = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getLoader()
  const confirmButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton()
  const denyButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton()
  const cancelButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton()

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(actions)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.show(actions)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(actions, params, 'actions')

  // Render buttons
  renderButton(confirmButton, 'confirm', params)
  renderButton(denyButton, 'deny', params)
  renderButton(cancelButton, 'cancel', params)
  handleButtonsStyling(confirmButton, denyButton, cancelButton, params)

  if (params.reverseButtons) {
    actions.insertBefore(cancelButton, loader)
    actions.insertBefore(denyButton, loader)
    actions.insertBefore(confirmButton, loader)
  }

  // Loader
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.setInnerHtml(loader, params.loaderHtml)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(loader, params, 'loader')
}

function handleButtonsStyling (confirmButton, denyButton, cancelButton, params) {
  if (!params.buttonsStyling) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.removeClass([confirmButton, denyButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.styled)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass([confirmButton, denyButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.styled)

  // Buttons background colors
  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(confirmButton, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["default-outline"])
  }
  if (params.denyButtonColor) {
    denyButton.style.backgroundColor = params.denyButtonColor
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(denyButton, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["default-outline"])
  }
  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(cancelButton, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["default-outline"])
  }
}

function renderButton (button, buttonType, params) {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.toggle(button, params[`show${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(buttonType)}Button`], 'inline-block')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.setInnerHtml(button, params[`${buttonType}ButtonText`]) // Set caption text
  button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]) // ARIA label

  // Add buttons custom classes
  button.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[buttonType]
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(button, params, `${buttonType}Button`)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(button, params[`${buttonType}ButtonClass`])
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCloseButton": () => (/* binding */ renderCloseButton)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderCloseButton = (instance, params) => {
  const closeButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCloseButton()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(closeButton, params.closeButtonHtml)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(closeButton, params, 'closeButton')

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(closeButton, params.showCloseButton)
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContainer": () => (/* binding */ renderContainer)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");




function handleBackdropParam (container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop
  } else if (!backdrop) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"])
  }
}

function handlePositionParam (container, position) {
  if (position in _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[position])
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)('The "position" parameter is not valid, defaulting to "center"')
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.center)
  }
}

function handleGrowParam (container, grow) {
  if (grow && typeof grow === 'string') {
    const growClass = `grow-${grow}`
    if (growClass in _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[growClass])
    }
  }
}

const renderContainer = (instance, params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getContainer()

  if (!container) {
    return
  }

  handleBackdropParam(container, params.backdrop)

  handlePositionParam(container, params.position)
  handleGrowParam(container, params.grow)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.applyCustomClass(container, params, 'container')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContent": () => (/* binding */ renderContent)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _renderInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderInput.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js");



const renderContent = (instance, params) => {
  const htmlContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(htmlContainer, params, 'htmlContainer')

  // Content as HTML
  if (params.html) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.html, htmlContainer)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(htmlContainer, 'block')

  // Content as plain text
  } else if (params.text) {
    htmlContainer.textContent = params.text
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(htmlContainer, 'block')

  // No content
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(htmlContainer)
  }

  (0,_renderInput_js__WEBPACK_IMPORTED_MODULE_1__.renderInput)(instance, params)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderFooter = (instance, params) => {
  const footer = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFooter()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(footer, params.footer)

  if (params.footer) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.footer, footer)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(footer, params, 'footer')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderIcon": () => (/* binding */ renderIcon)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





const renderIcon = (instance, params) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(instance)
  const icon = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getIcon()

  // if the given icon already rendered, apply the styling without re-rendering the icon
  if (innerParams && params.icon === innerParams.icon) {
    // Custom or default content
    setContent(icon, params)

    applyStyles(icon, params)
    return
  }

  if (!params.icon && !params.iconHtml) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(icon)
  }

  if (params.icon && Object.keys(_classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes).indexOf(params.icon) === -1) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.error)(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`)
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(icon)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(icon)

  // Custom or default content
  setContent(icon, params)

  applyStyles(icon, params)

  // Animate icon
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(icon, params.showClass.icon)
}

const applyStyles = (icon, params) => {
  for (const iconType in _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes) {
    if (params.icon !== iconType) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.removeClass(icon, _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes[iconType])
    }
  }
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(icon, _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes[params.icon])

  // Icon color
  setColor(icon, params)

  // Success icon background color
  adjustSuccessIconBackgoundColor()

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.applyCustomClass(icon, params, 'icon')
}

// Adjust success icon background color to match the popup background color
const adjustSuccessIconBackgoundColor = () => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color')
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix')
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor
  }
}

const setContent = (icon, params) => {
  icon.textContent = ''

  if (params.iconHtml) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, iconContent(params.iconHtml))
  } else if (params.icon === 'success') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, `
      <div class="swal2-success-circular-line-left"></div>
      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
      <div class="swal2-success-circular-line-right"></div>
    `)
  } else if (params.icon === 'error') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, `
      <span class="swal2-x-mark">
        <span class="swal2-x-mark-line-left"></span>
        <span class="swal2-x-mark-line-right"></span>
      </span>
    `)
  } else {
    const defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    }
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]))
  }
}

const setColor = (icon, params) => {
  if (!params.iconColor) {
    return
  }
  icon.style.color = params.iconColor
  icon.style.borderColor = params.iconColor
  for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setStyle(icon, sel, 'backgroundColor', params.iconColor)
  }
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor)
}

const iconContent = (content) => `<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["icon-content"]}">${content}</div>`


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderImage": () => (/* binding */ renderImage)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderImage = (instance, params) => {
  const image = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getImage()

  if (!params.imageUrl) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(image)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.show(image, '')

  // Src, alt
  image.setAttribute('src', params.imageUrl)
  image.setAttribute('alt', params.imageAlt)

  // Width, height
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(image, 'width', params.imageWidth)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(image, 'height', params.imageHeight)

  // Class
  image.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(image, params, 'image')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderInput": () => (/* binding */ renderInput)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']

const renderInput = (instance, params) => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(instance)
  const rerender = !innerParams || params.input !== innerParams.input

  inputTypes.forEach((inputType) => {
    const inputClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType]
    const inputContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass(popup, inputClass)

    // set attributes
    setAttributes(inputType, params.inputAttributes)

    // set class
    inputContainer.className = inputClass

    if (rerender) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(inputContainer)
    }
  })

  if (params.input) {
    if (rerender) {
      showInput(params)
    }
    // set custom class
    setCustomClass(params)
  }
}

const showInput = (params) => {
  if (!renderInputType[params.input]) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.error)(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`)
  }

  const inputContainer = getInputContainer(params.input)
  const input = renderInputType[params.input](inputContainer, params)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(input)

  // input autofocus
  setTimeout(() => {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.focusInput(input)
  })
}

const removeAttributes = (input) => {
  for (let i = 0; i < input.attributes.length; i++) {
    const attrName = input.attributes[i].name
    if (!['type', 'value', 'style'].includes(attrName)) {
      input.removeAttribute(attrName)
    }
  }
}

const setAttributes = (inputType, inputAttributes) => {
  const input = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getInput(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup(), inputType)
  if (!input) {
    return
  }

  removeAttributes(input)

  for (const attr in inputAttributes) {
    input.setAttribute(attr, inputAttributes[attr])
  }
}

const setCustomClass = (params) => {
  const inputContainer = getInputContainer(params.input)
  if (params.customClass) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(inputContainer, params.customClass.input)
  }
}

const setInputPlaceholder = (input, params) => {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder
  }
}

const setInputLabel = (input, prependTo, params) => {
  if (params.inputLabel) {
    input.id = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input
    const label = document.createElement('label')
    const labelClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["input-label"]
    label.setAttribute('for', input.id)
    label.className = labelClass
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(label, params.customClass.inputLabel)
    label.innerText = params.inputLabel
    prependTo.insertAdjacentElement('beforebegin', label)
  }
}

const getInputContainer = (inputType) => {
  const inputClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType] ? _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType] : _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input
  return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup(), inputClass)
}

const renderInputType = {}

renderInputType.text =
renderInputType.email =
renderInputType.password =
renderInputType.number =
renderInputType.tel =
renderInputType.url = (input, params) => {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue
  } else if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPromise)(params.inputValue)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof params.inputValue}"`)
  }
  setInputLabel(input, input, params)
  setInputPlaceholder(input, params)
  input.type = params.input
  return input
}

renderInputType.file = (input, params) => {
  setInputLabel(input, input, params)
  setInputPlaceholder(input, params)
  return input
}

renderInputType.range = (range, params) => {
  const rangeInput = range.querySelector('input')
  const rangeOutput = range.querySelector('output')
  rangeInput.value = params.inputValue
  rangeInput.type = params.input
  rangeOutput.value = params.inputValue
  setInputLabel(rangeInput, range, params)
  return range
}

renderInputType.select = (select, params) => {
  select.textContent = ''
  if (params.inputPlaceholder) {
    const placeholder = document.createElement('option')
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(placeholder, params.inputPlaceholder)
    placeholder.value = ''
    placeholder.disabled = true
    placeholder.selected = true
    select.appendChild(placeholder)
  }
  setInputLabel(select, select, params)
  return select
}

renderInputType.radio = (radio) => {
  radio.textContent = ''
  return radio
}

renderInputType.checkbox = (checkboxContainer, params) => {
  const checkbox = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getInput(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup(), 'checkbox')
  checkbox.value = 1
  checkbox.id = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox
  checkbox.checked = Boolean(params.inputValue)
  const label = checkboxContainer.querySelector('span')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(label, params.inputPlaceholder)
  return checkboxContainer
}

renderInputType.textarea = (textarea, params) => {
  textarea.value = params.inputValue
  setInputPlaceholder(textarea, params)
  setInputLabel(textarea, textarea, params)

  const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight)

  setTimeout(() => { // #2291
    if ('MutationObserver' in window) { // #1699
      const initialPopupWidth = parseInt(window.getComputedStyle(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()).width)
      const textareaResizeHandler = () => {
        const textareaWidth = textarea.offsetWidth + getMargin(textarea)
        if (textareaWidth > initialPopupWidth) {
          _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup().style.width = `${textareaWidth}px`
        } else {
          _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup().style.width = null
        }
      }
      new MutationObserver(textareaResizeHandler).observe(textarea, {
        attributes: true, attributeFilter: ['style']
      })
    }
  })

  return textarea
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPopup": () => (/* binding */ renderPopup)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderPopup = (instance, params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getContainer()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getPopup()

  // Width
  if (params.toast) { // #2170
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(container, 'width', params.width)
    popup.style.width = '100%'
    popup.insertBefore(_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getLoader(), _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getIcon())
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(popup, 'width', params.width)
  }

  // Padding
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(popup, 'padding', params.padding)

  // Background
  if (params.background) {
    popup.style.background = params.background
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage())

  // Classes
  addClasses(popup, params)
}

const addClasses = (popup, params) => {
  // Default Class + showClass when updating Swal.update({})
  popup.className = `${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup} ${_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(popup) ? params.showClass.popup : ''}`

  if (params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"])
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.toast)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.modal)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(popup, params, 'popup')
  if (typeof params.customClass === 'string') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, params.customClass)
  }

  // Icon class (#1842)
  if (params.icon) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[`icon-${params.icon}`])
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProgressSteps": () => (/* binding */ renderProgressSteps)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");




const createStepElement = (step) => {
  const stepEl = document.createElement('li')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(stepEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-step"])
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(stepEl, step)
  return stepEl
}

const createLineElement = (params) => {
  const lineEl = document.createElement('li')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(lineEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-step-line"])
  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance
  }
  return lineEl
}

const renderProgressSteps = (instance, params) => {
  const progressStepsContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getProgressSteps()
  if (!params.progressSteps || params.progressSteps.length === 0) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(progressStepsContainer)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(progressStepsContainer)
  progressStepsContainer.textContent = ''
  if (params.currentProgressStep >= params.progressSteps.length) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(
      'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
      '(currentProgressStep like JS arrays starts from 0)'
    )
  }

  params.progressSteps.forEach((step, index) => {
    const stepEl = createStepElement(step)
    progressStepsContainer.appendChild(stepEl)
    if (index === params.currentProgressStep) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(stepEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["active-progress-step"])
    }

    if (index !== params.progressSteps.length - 1) {
      const lineEl = createLineElement(params)
      progressStepsContainer.appendChild(lineEl)
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTitle": () => (/* binding */ renderTitle)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderTitle = (instance, params) => {
  const title = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTitle()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(title, params.title || params.titleText, 'block')

  if (params.title) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.title, title)
  }

  if (params.titleText) {
    title.innerText = params.titleText
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(title, params, 'title')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/getTemplateParams.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/getTemplateParams.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplateParams": () => (/* binding */ getTemplateParams)
/* harmony export */ });
/* harmony import */ var _params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");



const swalStringParams = ['swal-title', 'swal-html', 'swal-footer']

const getTemplateParams = (params) => {
  const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template
  if (!template) {
    return {}
  }
  const templateContent = template.content

  showWarningsForElements(templateContent)

  const result = Object.assign(
    getSwalParams(templateContent),
    getSwalButtons(templateContent),
    getSwalImage(templateContent),
    getSwalIcon(templateContent),
    getSwalInput(templateContent),
    getSwalStringParams(templateContent, swalStringParams),
  )
  return result
}

const getSwalParams = (templateContent) => {
  const result = {}
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(templateContent.querySelectorAll('swal-param')).forEach((param) => {
    showWarningsForAttributes(param, ['name', 'value'])
    const paramName = param.getAttribute('name')
    let value = param.getAttribute('value')
    if (typeof _params_js__WEBPACK_IMPORTED_MODULE_0__["default"][paramName] === 'boolean' && value === 'false') {
      value = false
    }
    if (typeof _params_js__WEBPACK_IMPORTED_MODULE_0__["default"][paramName] === 'object') {
      value = JSON.parse(value)
    }
    result[paramName] = value
  })
  return result
}

const getSwalButtons = (templateContent) => {
  const result = {}
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(templateContent.querySelectorAll('swal-button')).forEach((button) => {
    showWarningsForAttributes(button, ['type', 'color', 'aria-label'])
    const type = button.getAttribute('type')
    result[`${type}ButtonText`] = button.innerHTML
    result[`show${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(type)}Button`] = true
    if (button.hasAttribute('color')) {
      result[`${type}ButtonColor`] = button.getAttribute('color')
    }
    if (button.hasAttribute('aria-label')) {
      result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label')
    }
  })
  return result
}

const getSwalImage = (templateContent) => {
  const result = {}
  const image = templateContent.querySelector('swal-image')
  if (image) {
    showWarningsForAttributes(image, ['src', 'width', 'height', 'alt'])
    if (image.hasAttribute('src')) {
      result.imageUrl = image.getAttribute('src')
    }
    if (image.hasAttribute('width')) {
      result.imageWidth = image.getAttribute('width')
    }
    if (image.hasAttribute('height')) {
      result.imageHeight = image.getAttribute('height')
    }
    if (image.hasAttribute('alt')) {
      result.imageAlt = image.getAttribute('alt')
    }
  }
  return result
}

const getSwalIcon = (templateContent) => {
  const result = {}
  const icon = templateContent.querySelector('swal-icon')
  if (icon) {
    showWarningsForAttributes(icon, ['type', 'color'])
    if (icon.hasAttribute('type')) {
      result.icon = icon.getAttribute('type')
    }
    if (icon.hasAttribute('color')) {
      result.iconColor = icon.getAttribute('color')
    }
    result.iconHtml = icon.innerHTML
  }
  return result
}

const getSwalInput = (templateContent) => {
  const result = {}
  const input = templateContent.querySelector('swal-input')
  if (input) {
    showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value'])
    result.input = input.getAttribute('type') || 'text'
    if (input.hasAttribute('label')) {
      result.inputLabel = input.getAttribute('label')
    }
    if (input.hasAttribute('placeholder')) {
      result.inputPlaceholder = input.getAttribute('placeholder')
    }
    if (input.hasAttribute('value')) {
      result.inputValue = input.getAttribute('value')
    }
  }
  const inputOptions = templateContent.querySelectorAll('swal-input-option')
  if (inputOptions.length) {
    result.inputOptions = {}
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(inputOptions).forEach((option) => {
      showWarningsForAttributes(option, ['value'])
      const optionValue = option.getAttribute('value')
      const optionName = option.innerHTML
      result.inputOptions[optionValue] = optionName
    })
  }
  return result
}

const getSwalStringParams = (templateContent, paramNames) => {
  const result = {}
  for (const i in paramNames) {
    const paramName = paramNames[i]
    const tag = templateContent.querySelector(paramName)
    if (tag) {
      showWarningsForAttributes(tag, [])
      result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim()
    }
  }
  return result
}

const showWarningsForElements = (template) => {
  const allowedElements = swalStringParams.concat([
    'swal-param',
    'swal-button',
    'swal-image',
    'swal-icon',
    'swal-input',
    'swal-input-option',
  ])
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(template.children).forEach((el) => {
    const tagName = el.tagName.toLowerCase()
    if (allowedElements.indexOf(tagName) === -1) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Unrecognized element <${tagName}>`)
    }
  })
}

const showWarningsForAttributes = (el, allowedAttributes) => {
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(el.attributes).forEach((attribute) => {
    if (allowedAttributes.indexOf(attribute.name) === -1) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)([
        `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
        `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`
      ])
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/iosFix.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/iosFix.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iOSfix": () => (/* binding */ iOSfix),
/* harmony export */   "undoIOSfix": () => (/* binding */ undoIOSfix)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* istanbul ignore file */



// Fix iOS scrolling http://stackoverflow.com/q/39626302

const iOSfix = () => {
  const iOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  if (iOS && !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)) {
    const offset = document.body.scrollTop
    document.body.style.top = `${offset * -1}px`
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)
    lockBodyScroll()
    addBottomPaddingForTallPopups() // #1948
  }
}

const addBottomPaddingForTallPopups = () => {
  const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)
  if (safari) {
    const bottomPanelHeight = 44
    if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer().style.paddingBottom = `${bottomPanelHeight}px`
    }
  }
}

const lockBodyScroll = () => { // #1246
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  let preventTouchMove
  container.ontouchstart = (e) => {
    preventTouchMove = shouldPreventTouchMove(e)
  }
  container.ontouchmove = (e) => {
    if (preventTouchMove) {
      e.preventDefault()
      e.stopPropagation()
    }
  }
}

const shouldPreventTouchMove = (event) => {
  const target = event.target
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  if (isStylys(event) || isZoom(event)) {
    return false
  }
  if (target === container) {
    return true
  }
  if (
    !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable(container) &&
    target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer()) && // #1944
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer().contains(target)
    )
  ) {
    return true
  }
  return false
}

const isStylys = (event) => { // #1786
  return event.touches && event.touches.length && event.touches[0].touchType === 'stylus'
}

const isZoom = (event) => { // #1891
  return event.touches && event.touches.length > 1
}

const undoIOSfix = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)) {
    const offset = parseInt(document.body.style.top, 10)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)
    document.body.style.top = ''
    document.body.scrollTop = (offset * -1)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/isNodeEnv.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/isNodeEnv.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeEnv": () => (/* binding */ isNodeEnv)
/* harmony export */ });
// Detect Node env
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined'


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/openPopup.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/openPopup.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHOW_CLASS_TIMEOUT": () => (/* binding */ SHOW_CLASS_TIMEOUT),
/* harmony export */   "openPopup": () => (/* binding */ openPopup)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _iosFix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _aria_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");







const SHOW_CLASS_TIMEOUT = 10

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param params
 */
const openPopup = (params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()

  if (typeof params.willOpen === 'function') {
    params.willOpen(popup)
  }

  const bodyStyles = window.getComputedStyle(document.body)
  const initialBodyOverflow = bodyStyles.overflowY
  addClasses(container, popup, params)

  // scrolling is 'hidden' until animation is done, after that 'auto'
  setTimeout(() => {
    setScrollingVisibility(container, popup)
  }, SHOW_CLASS_TIMEOUT)

  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isModal()) {
    fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow)
    ;(0,_aria_js__WEBPACK_IMPORTED_MODULE_4__.setAriaHidden)()
  }

  if (!_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isToast() && !_globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].previousActiveElement) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].previousActiveElement = document.activeElement
  }

  if (typeof params.didOpen === 'function') {
    setTimeout(() => params.didOpen(popup))
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["no-transition"])
}

const swalOpenAnimationFinished = (event) => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  if (event.target !== popup) {
    return
  }
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  popup.removeEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent, swalOpenAnimationFinished)
  container.style.overflowY = 'auto'
}

const setScrollingVisibility = (container, popup) => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent && _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden'
    popup.addEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent, swalOpenAnimationFinished)
  } else {
    container.style.overflowY = 'auto'
  }
}

const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
  ;(0,_iosFix_js__WEBPACK_IMPORTED_MODULE_3__.iOSfix)()

  if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
    (0,_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__.fixScrollbar)()
  }

  // sweetalert2/issues/1247
  setTimeout(() => {
    container.scrollTop = 0
  })
}

const addClasses = (container, popup, params) => {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(container, params.showClass.backdrop)
  // the workaround with setting/unsetting opacity is needed for #2019 and 2059
  popup.style.setProperty('opacity', '0', 'important')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(popup, 'grid')
  setTimeout(() => {
    // Animate popup right after showing it
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(popup, params.showClass.popup)
    // and remove the opacity workaround
    popup.style.removeProperty('opacity')
  }, SHOW_CLASS_TIMEOUT) // 10ms in order to fix #2062

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.shown)
  if (params.heightAuto && params.backdrop && !params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["height-auto"])
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/params.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/params.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultParams": () => (/* binding */ defaultParams),
/* harmony export */   "updatableParams": () => (/* binding */ updatableParams),
/* harmony export */   "deprecatedParams": () => (/* binding */ deprecatedParams),
/* harmony export */   "isValidParameter": () => (/* binding */ isValidParameter),
/* harmony export */   "isUpdatableParameter": () => (/* binding */ isUpdatableParameter),
/* harmony export */   "isDeprecatedParameter": () => (/* binding */ isDeprecatedParameter),
/* harmony export */   "showWarningsForParams": () => (/* binding */ showWarningsForParams),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconColor: undefined,
  iconHtml: undefined,
  template: undefined,
  toast: false,
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show',
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide',
  },
  customClass: {},
  target: 'body',
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showDenyButton: false,
  showCancelButton: false,
  preConfirm: undefined,
  preDeny: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  denyButtonText: 'No',
  denyButtonAriaLabel: '',
  denyButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusDeny: false,
  focusCancel: false,
  returnFocus: true,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  loaderHtml: '',
  showLoaderOnConfirm: false,
  showLoaderOnDeny: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputLabel: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  returnInputValueOnDeny: false,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  willOpen: undefined,
  didOpen: undefined,
  didRender: undefined,
  willClose: undefined,
  didClose: undefined,
  didDestroy: undefined,
  scrollbarPadding: true
}

const updatableParams = [
  'allowEscapeKey',
  'allowOutsideClick',
  'background',
  'buttonsStyling',
  'cancelButtonAriaLabel',
  'cancelButtonColor',
  'cancelButtonText',
  'closeButtonAriaLabel',
  'closeButtonHtml',
  'confirmButtonAriaLabel',
  'confirmButtonColor',
  'confirmButtonText',
  'currentProgressStep',
  'customClass',
  'denyButtonAriaLabel',
  'denyButtonColor',
  'denyButtonText',
  'didClose',
  'didDestroy',
  'footer',
  'hideClass',
  'html',
  'icon',
  'iconColor',
  'iconHtml',
  'imageAlt',
  'imageHeight',
  'imageUrl',
  'imageWidth',
  'preConfirm',
  'preDeny',
  'progressSteps',
  'returnFocus',
  'reverseButtons',
  'showCancelButton',
  'showCloseButton',
  'showConfirmButton',
  'showDenyButton',
  'text',
  'title',
  'titleText',
  'willClose',
]

const deprecatedParams = {}

const toastIncompatibleParams = [
  'allowOutsideClick',
  'allowEnterKey',
  'backdrop',
  'focusConfirm',
  'focusDeny',
  'focusCancel',
  'returnFocus',
  'heightAuto',
  'keydownListenerCapture'
]

/**
 * Is valid parameter
 * @param {String} paramName
 */
const isValidParameter = (paramName) => {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName)
}

/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */
const isUpdatableParameter = (paramName) => {
  return updatableParams.indexOf(paramName) !== -1
}

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
const isDeprecatedParameter = (paramName) => {
  return deprecatedParams[paramName]
}

const checkIfParamIsValid = (param) => {
  if (!isValidParameter(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(`Unknown parameter "${param}"`)
  }
}

const checkIfToastParamIsValid = (param) => {
  if (toastIncompatibleParams.includes(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(`The parameter "${param}" is incompatible with toasts`)
  }
}

const checkIfParamIsDeprecated = (param) => {
  if (isDeprecatedParameter(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warnAboutDeprecation)(param, isDeprecatedParameter(param))
  }
}

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
const showWarningsForParams = (params) => {
  if (!params.backdrop && params.allowOutsideClick) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`')
  }

  for (const param in params) {
    checkIfParamIsValid(param)

    if (params.toast) {
      checkIfToastParamIsValid(param)
    }

    checkIfParamIsDeprecated(param)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultParams);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/scrollbarFix.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/scrollbarFix.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixScrollbar": () => (/* binding */ fixScrollbar),
/* harmony export */   "undoScrollbar": () => (/* binding */ undoScrollbar)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const fixScrollbar = () => {
  // for queues, do not do this more than once
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding !== null) {
    return
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'))
    document.body.style.paddingRight = `${_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding + _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.measureScrollbar()}px`
  }
}

const undoScrollbar = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding !== null) {
    document.body.style.paddingRight = `${_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding}px`
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding = null
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/setParameters.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/setParameters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setParameters)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultInputValidators.js */ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js");




function setDefaultInputValidators (params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(_defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__["default"]).forEach((key) => {
      if (params.input === key) {
        params.inputValidator = _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__["default"][key]
      }
    })
  }
}

function validateCustomTargetElement (params) {
  // Determine if the custom target element is valid
  if (
    !params.target ||
    (typeof params.target === 'string' && !document.querySelector(params.target)) ||
    (typeof params.target !== 'string' && !params.target.appendChild)
  ) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)('Target parameter is not valid, defaulting to "body"')
    params.target = 'body'
  }
}

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters (params) {
  setDefaultInputValidators(params)

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(
      'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
      'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
      'https://sweetalert2.github.io/#ajax-request'
    )
  }

  validateCustomTargetElement(params)

  // Replace newlines with <br> in title
  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />')
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.init(params)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "consolePrefix": () => (/* binding */ consolePrefix),
/* harmony export */   "uniqueArray": () => (/* binding */ uniqueArray),
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce),
/* harmony export */   "warnAboutDeprecation": () => (/* binding */ warnAboutDeprecation),
/* harmony export */   "callIfFunction": () => (/* binding */ callIfFunction),
/* harmony export */   "hasToPromiseFn": () => (/* binding */ hasToPromiseFn),
/* harmony export */   "asPromise": () => (/* binding */ asPromise),
/* harmony export */   "isPromise": () => (/* binding */ isPromise)
/* harmony export */ });
const consolePrefix = 'SweetAlert2:'

/**
 * Filter the unique values into a new array
 * @param arr
 */
const uniqueArray = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}

/**
 * Capitalize the first letter of a string
 * @param str
 */
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Convert NodeList to Array
 * @param nodeList
 */
const toArray = (nodeList) => Array.prototype.slice.call(nodeList)

/**
 * Standardise console warnings
 * @param message
 */
const warn = (message) => {
  console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`)
}

/**
 * Standardise console errors
 * @param message
 */
const error = (message) => {
  console.error(`${consolePrefix} ${message}`)
}

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
const previousWarnOnceMessages = []

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
const warnOnce = (message) => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message)
    warn(message)
  }
}

/**
 * Show a one-time console warning about deprecated params/methods
 */
const warnAboutDeprecation = (deprecatedParam, useInstead) => {
  warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`)
}

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
const callIfFunction = (arg) => typeof arg === 'function' ? arg() : arg

const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === 'function'

const asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg)

const isPromise = (arg) => arg && Promise.resolve(arg) === arg


/***/ }),

/***/ "./src/Modules/domManager.js":
/*!***********************************!*\
  !*** ./src/Modules/domManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formModule */ "./src/Modules/formModule.js");
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFactory */ "./src/Modules/projectFactory.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ "./src/Modules/projectManager.js");
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskFactory */ "./src/Modules/taskFactory.js");





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
    const createAddTaskButton = (pos) => {
        let newTaskButtonElement = document.createElement('div');
        newTaskButtonElement.innerHTML = `
        <div class="add-task-button">
            <h2>Add task</h2>
        </div>
        `;
        newTaskButtonElement.addEventListener('click', addTaskToProject.bind(null, pos));
        return newTaskButtonElement;
    }
    const createAddProjectButton = () => {
        let newProjectButtonElement = document.createElement('div');
        newProjectButtonElement.innerHTML = `
        <div class="add-task-button">
            <h2>Add project<h2>
        </div>
        `;
        newProjectButtonElement.addEventListener('click', addNewProject);
        return newProjectButtonElement;
    }
    const addProjectsToSidebar = (projects) => {
        projects.forEach(project => {
            let newProject = createProjectElement(project);
            sideBar.appendChild(newProject);
        })
        sideBar.appendChild(createAddProjectButton());
    }
    const addTasklistContents = () => {
        let title = document.createElement('h1');
        title.innerHTML = selectedProject.name;
        taskList.appendChild(title);
        taskList.appendChild(createAddTaskButton('start'));
        selectedProject.tasks.forEach(task =>{
            let newTask = createTaskElement(task);
            taskList.appendChild(newTask);
        })
        if(selectedProject.tasks.length > 0){
            taskList.appendChild(createAddTaskButton('end'));
        }
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
        render(display, projects);
    }  
    const addTaskToProject = (pos, e) => {
        _formModule__WEBPACK_IMPORTED_MODULE_0__["default"].askTaskInfo().then((taskData)=>{
            if(taskData){
                let newTaskData = JSON.parse(taskData);
                selectedProject.addTask((0,_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(newTaskData.title, newTaskData.description, '20/20/2000',1), pos);
                scrollPosition = taskList.scrollTop;
                render(display, projects);  
            }else{
                console.log('No task was created');
                return
            }
        });
    }
    const addNewProject = (e) => {
            _formModule__WEBPACK_IMPORTED_MODULE_0__["default"].askProjectInfo().then((projectName)=>{
                if(projectName){
                    let isDuplicate = _projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].addProject((0,_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName));
                    if(isDuplicate){
                        _formModule__WEBPACK_IMPORTED_MODULE_0__["default"].showDuplicateMessage();
                    }
                    render(display, projects);
                }
        })
    }
    return {
        render
    } 
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManager);

/***/ }),

/***/ "./src/Modules/formModule.js":
/*!***********************************!*\
  !*** ./src/Modules/formModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");


const formModule = (function(){
    const askTaskInfo =async()=> {
        const {value: formValues } = await sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__["default"].fire({
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
                sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__["default"].showValidationMessage('You must provide a title');
              }
            }
          })
          
          if (formValues) {
            return(JSON.stringify(formValues));
          }
    }
    const askProjectInfo = async() => {
      const { value: projectName } = await sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__["default"].fire({
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
      sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__["default"].fire("Error", 'Can\'t add duplicate projects', 'error');
    }
    return {
        askTaskInfo,
        askProjectInfo,
        showDuplicateMessage
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formModule);

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

    project.addTask = (task, position = 'end') => {
        if(position == 'start'){
            project.tasks.unshift(task)
        }else{
            project.tasks.push(task);
        }
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
    const addProject = (newProject) => {  //Returns true if project is a duplicate
        let isDuplicate = projects.some((project)=>{
            return project.name == newProject.name;
        })
        if(isDuplicate){
            return true; 
        }else{
            projects.push(newProject);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUMzQjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ2JmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDUTtBQUNBO0FBQ047QUFDaEQ7QUFDQTtBQUNBLGlCQUFpQixtRUFBYztBQUMvQixpQkFBaUIsbUVBQWM7QUFDL0IsMEVBQXlCO0FBQ3pCLDBFQUF5QjtBQUN6QixpQkFBaUIsZ0VBQVc7QUFDNUIsaUJBQWlCLGdFQUFXO0FBQzVCLGlCQUFpQixnRUFBVztBQUM1QixpQkFBaUIsZ0VBQVc7QUFDNUIsaUJBQWlCLGdFQUFXO0FBQzVCLGlCQUFpQixnRUFBVztBQUM1QjtBQUNBLGtFQUFpQixVQUFVLDJFQUEwQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9Td2VldEFsZXJ0LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvZ2xvYmFsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvX2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvX21haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvYnV0dG9ucy1oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9jbG9zZS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9lbmFibGUtZGlzYWJsZS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9nZXRJbnB1dC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9oaWRlTG9hZGluZy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9rZXlkb3duLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvcG9wdXAtY2xpY2staGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9wcm9ncmVzcy1zdGVwcy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9pbnN0YW5jZU1ldGhvZHMvdmFsaWRhdGlvbi1tZXNzYWdlLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvcHJpdmF0ZU1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9wcml2YXRlUHJvcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3RhdGljTWV0aG9kcy9hcmdzVG9QYXJhbXMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzL2JpbmRDbGlja0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N0YXRpY01ldGhvZHMvZmlyZS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N0YXRpY01ldGhvZHMvbWl4aW4uanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzL3Nob3dMb2FkaW5nLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3RhdGljTWV0aG9kcy90aW1lci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N3ZWV0YWxlcnQyLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvRGlzbWlzc1JlYXNvbi5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL1RpbWVyLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvYXJpYS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kZWZhdWx0SW5wdXRWYWxpZGF0b3JzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL2FuaW1hdGlvbkVuZEV2ZW50LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL2RvbVV0aWxzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL2dldHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vaW5pdC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9pbnB1dFV0aWxzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL21lYXN1cmVTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcGFyc2VIdG1sVG9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyQ2xvc2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyRm9vdGVyLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJJY29uLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJJbWFnZS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVySW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlclBvcHVwLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJQcm9ncmVzc1N0ZXBzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJUaXRsZS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2dldFRlbXBsYXRlUGFyYW1zLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvaW9zRml4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvaXNOb2RlRW52LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvb3BlblBvcHVwLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvcGFyYW1zLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvc2Nyb2xsYmFyRml4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvc2V0UGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3RvLWRheS8uL3NyYy9Nb2R1bGVzL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vc3JjL01vZHVsZXMvZm9ybU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9zcmMvTW9kdWxlcy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9zcmMvTW9kdWxlcy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9zcmMvTW9kdWxlcy90YXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kYXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZGF5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kYXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kYXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kYXkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzbWlzc1JlYXNvbiB9IGZyb20gJy4vdXRpbHMvRGlzbWlzc1JlYXNvbi5qcydcbmltcG9ydCAqIGFzIHN0YXRpY01ldGhvZHMgZnJvbSAnLi9zdGF0aWNNZXRob2RzLmpzJ1xuaW1wb3J0ICogYXMgaW5zdGFuY2VNZXRob2RzIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuL3ByaXZhdGVQcm9wcy5qcydcblxubGV0IGN1cnJlbnRJbnN0YW5jZVxuXG5jbGFzcyBTd2VldEFsZXJ0IHtcbiAgY29uc3RydWN0b3IgKC4uLmFyZ3MpIHtcbiAgICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY3VycmVudEluc3RhbmNlID0gdGhpc1xuXG4gICAgY29uc3Qgb3V0ZXJQYXJhbXMgPSBPYmplY3QuZnJlZXplKHRoaXMuY29uc3RydWN0b3IuYXJnc1RvUGFyYW1zKGFyZ3MpKVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHZhbHVlOiBvdXRlclBhcmFtcyxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpXG4gICAgcHJpdmF0ZVByb3BzLnByb21pc2Uuc2V0KHRoaXMsIHByb21pc2UpXG4gIH1cblxuICAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcbiAgdGhlbiAob25GdWxmaWxsZWQpIHtcbiAgICBjb25zdCBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZClcbiAgfVxuXG4gIGZpbmFsbHkgKG9uRmluYWxseSkge1xuICAgIGNvbnN0IHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcylcbiAgICByZXR1cm4gcHJvbWlzZS5maW5hbGx5KG9uRmluYWxseSlcbiAgfVxufVxuXG4vLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcbk9iamVjdC5hc3NpZ24oU3dlZXRBbGVydC5wcm90b3R5cGUsIGluc3RhbmNlTWV0aG9kcylcblxuLy8gQXNzaWduIHN0YXRpYyBtZXRob2RzIGZyb20gc3JjL3N0YXRpY01ldGhvZHMvKi5qcyB0byBjb25zdHJ1Y3RvclxuT2JqZWN0LmFzc2lnbihTd2VldEFsZXJ0LCBzdGF0aWNNZXRob2RzKVxuXG4vLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbk9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChrZXkgPT4ge1xuICBTd2VldEFsZXJ0W2tleV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGlmIChjdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBjdXJyZW50SW5zdGFuY2Vba2V5XSguLi5hcmdzKVxuICAgIH1cbiAgfVxufSlcblxuU3dlZXRBbGVydC5EaXNtaXNzUmVhc29uID0gRGlzbWlzc1JlYXNvblxuXG5Td2VldEFsZXJ0LnZlcnNpb24gPSAnMTEuMS43J1xuXG5leHBvcnQgZGVmYXVsdCBTd2VldEFsZXJ0XG4iLCJleHBvcnQgY29uc3QgUkVTVE9SRV9GT0NVU19USU1FT1VUID0gMTAwXG4iLCJpbXBvcnQgeyBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQgfSBmcm9tICcuL2NvbnN0YW50cy5qcydcblxuY29uc3QgZ2xvYmFsU3RhdGUgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxTdGF0ZVxuXG5jb25zdCBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCA9ICgpID0+IHtcbiAgaWYgKGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCAmJiBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKVxuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IG51bGxcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gIH1cbn1cblxuLy8gUmVzdG9yZSBwcmV2aW91cyBhY3RpdmUgKGZvY3VzZWQpIGVsZW1lbnRcbmV4cG9ydCBjb25zdCByZXN0b3JlQWN0aXZlRWxlbWVudCA9IChyZXR1cm5Gb2N1cykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKCFyZXR1cm5Gb2N1cykge1xuICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgIH1cbiAgICBjb25zdCB4ID0gd2luZG93LnNjcm9sbFhcbiAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFlcblxuICAgIGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KClcbiAgICAgIHJlc29sdmUoKVxuICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCkgLy8gaXNzdWVzLzkwMFxuXG4gICAgd2luZG93LnNjcm9sbFRvKHgsIHkpXG4gIH0pXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2luc3RhbmNlTWV0aG9kcy9oaWRlTG9hZGluZy5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL2dldElucHV0LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMvY2xvc2UuanMnXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlTWV0aG9kcy9lbmFibGUtZGlzYWJsZS1lbGVtZW50cy5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL3ZhbGlkYXRpb24tbWVzc2FnZS5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL3Byb2dyZXNzLXN0ZXBzLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMvX21haW4uanMnXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlTWV0aG9kcy91cGRhdGUuanMnXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlTWV0aG9kcy9fZGVzdHJveS5qcydcbiIsImltcG9ydCBnbG9iYWxTdGF0ZSBmcm9tICcuLi9nbG9iYWxTdGF0ZS5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuaW1wb3J0IHByaXZhdGVNZXRob2RzIGZyb20gJy4uL3ByaXZhdGVNZXRob2RzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2Rlc3Ryb3kgKCkge1xuICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcylcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpXG5cbiAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgIHJldHVybiAvLyBUaGlzIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkXG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbm90aGVyIFN3YWwgY2xvc2luZ1xuICBpZiAoZG9tQ2FjaGUucG9wdXAgJiYgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKSB7XG4gICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKClcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrXG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHN3YWwgZGlzcG9zYWwgZGVmZXIgdGltZXJcbiAgaWYgKGdsb2JhbFN0YXRlLmRlZmVyRGlzcG9zYWxUaW1lcikge1xuICAgIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5kZWZlckRpc3Bvc2FsVGltZXIpXG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmRlZmVyRGlzcG9zYWxUaW1lclxuICB9XG5cbiAgaWYgKHR5cGVvZiBpbm5lclBhcmFtcy5kaWREZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaW5uZXJQYXJhbXMuZGlkRGVzdHJveSgpXG4gIH1cblxuICBkaXNwb3NlU3dhbCh0aGlzKVxufVxuXG5jb25zdCBkaXNwb3NlU3dhbCA9IChpbnN0YW5jZSkgPT4ge1xuICAvLyBVbnNldCB0aGlzLnBhcmFtcyBzbyBHQyB3aWxsIGRpc3Bvc2UgaXQgKCMxNTY5KVxuICBkZWxldGUgaW5zdGFuY2UucGFyYW1zXG4gIC8vIFVuc2V0IGdsb2JhbFN0YXRlIHByb3BzIHNvIEdDIHdpbGwgZGlzcG9zZSBnbG9iYWxTdGF0ZSAoIzE1NjkpXG4gIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlclxuICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldFxuICAvLyBVbnNldCBXZWFrTWFwcyBzbyBHQyB3aWxsIGJlIGFibGUgdG8gZGlzcG9zZSB0aGVtICgjMTU2OSlcbiAgdW5zZXRXZWFrTWFwcyhwcml2YXRlUHJvcHMpXG4gIHVuc2V0V2Vha01hcHMocHJpdmF0ZU1ldGhvZHMpXG4gIC8vIFVuc2V0IGN1cnJlbnRJbnN0YW5jZVxuICBkZWxldGUgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlXG59XG5cbmNvbnN0IHVuc2V0V2Vha01hcHMgPSAob2JqKSA9PiB7XG4gIGZvciAoY29uc3QgaSBpbiBvYmopIHtcbiAgICBvYmpbaV0gPSBuZXcgV2Vha01hcCgpXG4gIH1cbn1cbiIsImltcG9ydCBkZWZhdWx0UGFyYW1zLCB7IHNob3dXYXJuaW5nc0ZvclBhcmFtcyB9IGZyb20gJy4uL3V0aWxzL3BhcmFtcy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgVGltZXIgZnJvbSAnLi4vdXRpbHMvVGltZXIuanMnXG5pbXBvcnQgeyBjYWxsSWZGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuaW1wb3J0IHNldFBhcmFtZXRlcnMgZnJvbSAnLi4vdXRpbHMvc2V0UGFyYW1ldGVycy5qcydcbmltcG9ydCB7IGdldFRlbXBsYXRlUGFyYW1zIH0gZnJvbSAnLi4vdXRpbHMvZ2V0VGVtcGxhdGVQYXJhbXMuanMnXG5pbXBvcnQgZ2xvYmFsU3RhdGUgZnJvbSAnLi4vZ2xvYmFsU3RhdGUuanMnXG5pbXBvcnQgeyBvcGVuUG9wdXAgfSBmcm9tICcuLi91dGlscy9vcGVuUG9wdXAuanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcbmltcG9ydCBwcml2YXRlTWV0aG9kcyBmcm9tICcuLi9wcml2YXRlTWV0aG9kcy5qcydcbmltcG9ydCB7IGhhbmRsZUlucHV0T3B0aW9uc0FuZFZhbHVlIH0gZnJvbSAnLi4vdXRpbHMvZG9tL2lucHV0VXRpbHMuanMnXG5pbXBvcnQgeyBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2ssIGhhbmRsZURlbnlCdXR0b25DbGljaywgaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2sgfSBmcm9tICcuL2J1dHRvbnMtaGFuZGxlcnMuanMnXG5pbXBvcnQgeyBhZGRLZXlkb3duSGFuZGxlciwgc2V0Rm9jdXMgfSBmcm9tICcuL2tleWRvd24taGFuZGxlci5qcydcbmltcG9ydCB7IGhhbmRsZVBvcHVwQ2xpY2sgfSBmcm9tICcuL3BvcHVwLWNsaWNrLWhhbmRsZXIuanMnXG5pbXBvcnQgeyBEaXNtaXNzUmVhc29uIH0gZnJvbSAnLi4vdXRpbHMvRGlzbWlzc1JlYXNvbi5qcydcbmltcG9ydCB7IHVuc2V0QXJpYUhpZGRlbiB9IGZyb20gJy4uL3V0aWxzL2FyaWEuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBfbWFpbiAodXNlclBhcmFtcywgbWl4aW5QYXJhbXMgPSB7fSkge1xuICBzaG93V2FybmluZ3NGb3JQYXJhbXMoT2JqZWN0LmFzc2lnbih7fSwgbWl4aW5QYXJhbXMsIHVzZXJQYXJhbXMpKVxuXG4gIGlmIChnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UpIHtcbiAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKVxuICAgIGlmIChkb20uaXNNb2RhbCgpKSB7XG4gICAgICB1bnNldEFyaWFIaWRkZW4oKVxuICAgIH1cbiAgfVxuICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UgPSB0aGlzXG5cbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcmVwYXJlUGFyYW1zKHVzZXJQYXJhbXMsIG1peGluUGFyYW1zKVxuICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKVxuICBPYmplY3QuZnJlZXplKGlubmVyUGFyYW1zKVxuXG4gIC8vIGNsZWFyIHRoZSBwcmV2aW91cyB0aW1lclxuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpXG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXRcbiAgfVxuXG4gIC8vIGNsZWFyIHRoZSByZXN0b3JlIGZvY3VzIHRpbWVvdXRcbiAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpXG5cbiAgY29uc3QgZG9tQ2FjaGUgPSBwb3B1bGF0ZURvbUNhY2hlKHRoaXMpXG5cbiAgZG9tLnJlbmRlcih0aGlzLCBpbm5lclBhcmFtcylcblxuICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIGlubmVyUGFyYW1zKVxuXG4gIHJldHVybiBzd2FsUHJvbWlzZSh0aGlzLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpXG59XG5cbmNvbnN0IHByZXBhcmVQYXJhbXMgPSAodXNlclBhcmFtcywgbWl4aW5QYXJhbXMpID0+IHtcbiAgY29uc3QgdGVtcGxhdGVQYXJhbXMgPSBnZXRUZW1wbGF0ZVBhcmFtcyh1c2VyUGFyYW1zKVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLCBtaXhpblBhcmFtcywgdGVtcGxhdGVQYXJhbXMsIHVzZXJQYXJhbXMpIC8vIHByZWNlZGVuY2UgaXMgZGVzY3JpYmVkIGluICMyMTMxXG4gIHBhcmFtcy5zaG93Q2xhc3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLnNob3dDbGFzcywgcGFyYW1zLnNob3dDbGFzcylcbiAgcGFyYW1zLmhpZGVDbGFzcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMuaGlkZUNsYXNzLCBwYXJhbXMuaGlkZUNsYXNzKVxuICByZXR1cm4gcGFyYW1zXG59XG5cbmNvbnN0IHN3YWxQcm9taXNlID0gKGluc3RhbmNlLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgY2xvc2luZ3MvZGlzbWlzc2Fsc1xuICAgIGNvbnN0IGRpc21pc3NXaXRoID0gKGRpc21pc3MpID0+IHtcbiAgICAgIGluc3RhbmNlLmNsb3NlUG9wdXAoeyBpc0Rpc21pc3NlZDogdHJ1ZSwgZGlzbWlzcyB9KVxuICAgIH1cblxuICAgIHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQoaW5zdGFuY2UsIHJlc29sdmUpXG5cbiAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2soaW5zdGFuY2UpXG4gICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gaGFuZGxlRGVueUJ1dHRvbkNsaWNrKGluc3RhbmNlKVxuICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2soaW5zdGFuY2UsIGRpc21pc3NXaXRoKVxuXG4gICAgZG9tQ2FjaGUuY2xvc2VCdXR0b24ub25jbGljayA9ICgpID0+IGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2xvc2UpXG5cbiAgICBoYW5kbGVQb3B1cENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpXG5cbiAgICBhZGRLZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aClcblxuICAgIGhhbmRsZUlucHV0T3B0aW9uc0FuZFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcylcblxuICAgIG9wZW5Qb3B1cChpbm5lclBhcmFtcylcblxuICAgIHNldHVwVGltZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aClcblxuICAgIGluaXRGb2N1cyhkb21DYWNoZSwgaW5uZXJQYXJhbXMpXG5cbiAgICAvLyBTY3JvbGwgY29udGFpbmVyIHRvIHRvcCBvbiBvcGVuICgjMTI0NywgIzE5NDYpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb21DYWNoZS5jb250YWluZXIuc2Nyb2xsVG9wID0gMFxuICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IHBvcHVsYXRlRG9tQ2FjaGUgPSAoaW5zdGFuY2UpID0+IHtcbiAgY29uc3QgZG9tQ2FjaGUgPSB7XG4gICAgcG9wdXA6IGRvbS5nZXRQb3B1cCgpLFxuICAgIGNvbnRhaW5lcjogZG9tLmdldENvbnRhaW5lcigpLFxuICAgIGFjdGlvbnM6IGRvbS5nZXRBY3Rpb25zKCksXG4gICAgY29uZmlybUJ1dHRvbjogZG9tLmdldENvbmZpcm1CdXR0b24oKSxcbiAgICBkZW55QnV0dG9uOiBkb20uZ2V0RGVueUJ1dHRvbigpLFxuICAgIGNhbmNlbEJ1dHRvbjogZG9tLmdldENhbmNlbEJ1dHRvbigpLFxuICAgIGxvYWRlcjogZG9tLmdldExvYWRlcigpLFxuICAgIGNsb3NlQnV0dG9uOiBkb20uZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogZG9tLmdldFZhbGlkYXRpb25NZXNzYWdlKCksXG4gICAgcHJvZ3Jlc3NTdGVwczogZG9tLmdldFByb2dyZXNzU3RlcHMoKVxuICB9XG4gIHByaXZhdGVQcm9wcy5kb21DYWNoZS5zZXQoaW5zdGFuY2UsIGRvbUNhY2hlKVxuXG4gIHJldHVybiBkb21DYWNoZVxufVxuXG5jb25zdCBzZXR1cFRpbWVyID0gKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpID0+IHtcbiAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGRvbS5nZXRUaW1lclByb2dyZXNzQmFyKClcbiAgZG9tLmhpZGUodGltZXJQcm9ncmVzc0JhcilcbiAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgZ2xvYmFsU3RhdGUudGltZW91dCA9IG5ldyBUaW1lcigoKSA9PiB7XG4gICAgICBkaXNtaXNzV2l0aCgndGltZXInKVxuICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXRcbiAgICB9LCBpbm5lclBhcmFtcy50aW1lcilcbiAgICBpZiAoaW5uZXJQYXJhbXMudGltZXJQcm9ncmVzc0Jhcikge1xuICAgICAgZG9tLnNob3codGltZXJQcm9ncmVzc0JhcilcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LnJ1bm5pbmcpIHsgLy8gdGltZXIgY2FuIGJlIGFscmVhZHkgc3RvcHBlZCBvciB1bnNldCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgZG9tLmFuaW1hdGVUaW1lclByb2dyZXNzQmFyKGlubmVyUGFyYW1zLnRpbWVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBpbml0Rm9jdXMgPSAoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSA9PiB7XG4gIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgIHJldHVybiBibHVyQWN0aXZlRWxlbWVudCgpXG4gIH1cblxuICBpZiAoIWZvY3VzQnV0dG9uKGRvbUNhY2hlLCBpbm5lclBhcmFtcykpIHtcbiAgICBzZXRGb2N1cyhpbm5lclBhcmFtcywgLTEsIDEpXG4gIH1cbn1cblxuY29uc3QgZm9jdXNCdXR0b24gPSAoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSA9PiB7XG4gIGlmIChpbm5lclBhcmFtcy5mb2N1c0RlbnkgJiYgZG9tLmlzVmlzaWJsZShkb21DYWNoZS5kZW55QnV0dG9uKSkge1xuICAgIGRvbUNhY2hlLmRlbnlCdXR0b24uZm9jdXMoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwgJiYgZG9tLmlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ29uZmlybSAmJiBkb20uaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBibHVyQWN0aXZlRWxlbWVudCA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gIH1cbn1cbiIsImltcG9ydCB7IGlzVmlzaWJsZSB9IGZyb20gJy4uL3V0aWxzL2RvbS9kb21VdGlscy5qcydcbmltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tICcuLi91dGlscy9kb20vaW5wdXRVdGlscy5qcydcbmltcG9ydCB7IGdldERlbnlCdXR0b24sIGdldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbHMvZG9tL2dldHRlcnMuanMnXG5pbXBvcnQgeyBhc1Byb21pc2UgfSBmcm9tICcuLi91dGlscy91dGlscy5qcydcbmltcG9ydCB7IHNob3dMb2FkaW5nIH0gZnJvbSAnLi4vc3RhdGljTWV0aG9kcy9zaG93TG9hZGluZy5qcydcbmltcG9ydCB7IERpc21pc3NSZWFzb24gfSBmcm9tICcuLi91dGlscy9EaXNtaXNzUmVhc29uLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2sgPSAoaW5zdGFuY2UpID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpXG4gIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsICdjb25maXJtJylcbiAgfSBlbHNlIHtcbiAgICBjb25maXJtKGluc3RhbmNlLCB0cnVlKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEZW55QnV0dG9uQ2xpY2sgPSAoaW5zdGFuY2UpID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpXG4gIGlmIChpbm5lclBhcmFtcy5yZXR1cm5JbnB1dFZhbHVlT25EZW55KSB7XG4gICAgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgJ2RlbnknKVxuICB9IGVsc2Uge1xuICAgIGRlbnkoaW5zdGFuY2UsIGZhbHNlKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDYW5jZWxCdXR0b25DbGljayA9IChpbnN0YW5jZSwgZGlzbWlzc1dpdGgpID0+IHtcbiAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKVxuICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNhbmNlbClcbn1cblxuY29uc3QgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dCA9IChpbnN0YW5jZSwgdHlwZSAvKiAnY29uZmlybScgfCAnZGVueScgKi8pID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICBjb25zdCBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpXG4gIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgIGhhbmRsZUlucHV0VmFsaWRhdG9yKGluc3RhbmNlLCBpbnB1dFZhbHVlLCB0eXBlKVxuICB9IGVsc2UgaWYgKCFpbnN0YW5jZS5nZXRJbnB1dCgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKVxuICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZShpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSlcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVueScpIHtcbiAgICBkZW55KGluc3RhbmNlLCBpbnB1dFZhbHVlKVxuICB9IGVsc2Uge1xuICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlucHV0VmFsdWUpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlSW5wdXRWYWxpZGF0b3IgPSAoaW5zdGFuY2UsIGlucHV0VmFsdWUsIHR5cGUgLyogJ2NvbmZpcm0nIHwgJ2RlbnknICovKSA9PiB7XG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSlcbiAgaW5zdGFuY2UuZGlzYWJsZUlucHV0KClcbiAgY29uc3QgdmFsaWRhdGlvblByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IGFzUHJvbWlzZShcbiAgICBpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcihpbnB1dFZhbHVlLCBpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSkpXG4gIClcbiAgdmFsaWRhdGlvblByb21pc2UudGhlbihcbiAgICAodmFsaWRhdGlvbk1lc3NhZ2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKVxuICAgICAgaW5zdGFuY2UuZW5hYmxlSW5wdXQoKVxuICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RlbnknKSB7XG4gICAgICAgIGRlbnkoaW5zdGFuY2UsIGlucHV0VmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maXJtKGluc3RhbmNlLCBpbnB1dFZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5jb25zdCBkZW55ID0gKGluc3RhbmNlLCB2YWx1ZSkgPT4ge1xuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgdGhpcylcblxuICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uRGVueSkge1xuICAgIHNob3dMb2FkaW5nKGdldERlbnlCdXR0b24oKSlcbiAgfVxuXG4gIGlmIChpbm5lclBhcmFtcy5wcmVEZW55KSB7XG4gICAgY29uc3QgcHJlRGVueVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IGFzUHJvbWlzZShcbiAgICAgIGlubmVyUGFyYW1zLnByZURlbnkodmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSlcbiAgICApXG4gICAgcHJlRGVueVByb21pc2UudGhlbihcbiAgICAgIChwcmVEZW55VmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHByZURlbnlWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7IGlzRGVuaWVkOiB0cnVlLCB2YWx1ZTogdHlwZW9mIHByZURlbnlWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6IHByZURlbnlWYWx1ZSB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGluc3RhbmNlLmNsb3NlUG9wdXAoeyBpc0RlbmllZDogdHJ1ZSwgdmFsdWUgfSlcbiAgfVxufVxuXG5jb25zdCBzdWNjZWVkV2l0aCA9IChpbnN0YW5jZSwgdmFsdWUpID0+IHtcbiAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7IGlzQ29uZmlybWVkOiB0cnVlLCB2YWx1ZSB9KVxufVxuXG5jb25zdCBjb25maXJtID0gKGluc3RhbmNlLCB2YWx1ZSkgPT4ge1xuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgdGhpcylcblxuICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgIHNob3dMb2FkaW5nKClcbiAgfVxuXG4gIGlmIChpbm5lclBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgaW5zdGFuY2UucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpXG4gICAgY29uc3QgcHJlQ29uZmlybVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IGFzUHJvbWlzZShcbiAgICAgIGlubmVyUGFyYW1zLnByZUNvbmZpcm0odmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSlcbiAgICApXG4gICAgcHJlQ29uZmlybVByb21pc2UudGhlbihcbiAgICAgIChwcmVDb25maXJtVmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGlzVmlzaWJsZShnZXRWYWxpZGF0aW9uTWVzc2FnZSgpKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB0eXBlb2YgcHJlQ29uZmlybVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlQ29uZmlybVZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB2YWx1ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgdW5kb1Njcm9sbGJhciB9IGZyb20gJy4uL3V0aWxzL3Njcm9sbGJhckZpeC5qcydcbmltcG9ydCB7IHVuZG9JT1NmaXggfSBmcm9tICcuLi91dGlscy9pb3NGaXguanMnXG5pbXBvcnQgeyB1bnNldEFyaWFIaWRkZW4gfSBmcm9tICcuLi91dGlscy9hcmlhLmpzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL3V0aWxzL2RvbS9pbmRleC5qcydcbmltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vdXRpbHMvY2xhc3Nlcy5qcydcbmltcG9ydCBnbG9iYWxTdGF0ZSwgeyByZXN0b3JlQWN0aXZlRWxlbWVudCB9IGZyb20gJy4uL2dsb2JhbFN0YXRlLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5pbXBvcnQgcHJpdmF0ZU1ldGhvZHMgZnJvbSAnLi4vcHJpdmF0ZU1ldGhvZHMuanMnXG5cbi8qXG4gKiBJbnN0YW5jZSBtZXRob2QgdG8gY2xvc2Ugc3dlZXRBbGVydFxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSAoaW5zdGFuY2UsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKSB7XG4gIGlmIChkb20uaXNUb2FzdCgpKSB7XG4gICAgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpXG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZUFjdGl2ZUVsZW1lbnQocmV0dXJuRm9jdXMpLnRoZW4oKCkgPT4gdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpKVxuICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7IGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgfSlcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuICAvLyB3b3JrYXJvdW5kIGZvciAjMjA4OFxuICAvLyBmb3Igc29tZSByZWFzb24gcmVtb3ZpbmcgdGhlIGNvbnRhaW5lciBpbiBTYWZhcmkgd2lsbCBzY3JvbGwgdGhlIGRvY3VtZW50IHRvIGJvdHRvbVxuICBpZiAoaXNTYWZhcmkpIHtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmUgIWltcG9ydGFudCcpXG4gICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKVxuICB9XG5cbiAgaWYgKGRvbS5pc01vZGFsKCkpIHtcbiAgICB1bmRvU2Nyb2xsYmFyKClcbiAgICB1bmRvSU9TZml4KClcbiAgICB1bnNldEFyaWFIaWRkZW4oKVxuICB9XG5cbiAgcmVtb3ZlQm9keUNsYXNzZXMoKVxufVxuXG5mdW5jdGlvbiByZW1vdmVCb2R5Q2xhc3NlcyAoKSB7XG4gIGRvbS5yZW1vdmVDbGFzcyhcbiAgICBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSxcbiAgICBbXG4gICAgICBzd2FsQ2xhc3Nlcy5zaG93bixcbiAgICAgIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLFxuICAgICAgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sXG4gICAgICBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSxcbiAgICBdXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlIChyZXNvbHZlVmFsdWUpIHtcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuXG4gIGlmICghcG9wdXApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJlc29sdmVWYWx1ZSA9IHByZXBhcmVSZXNvbHZlVmFsdWUocmVzb2x2ZVZhbHVlKVxuXG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKVxuICBpZiAoIWlubmVyUGFyYW1zIHx8IGRvbS5oYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHN3YWxQcm9taXNlUmVzb2x2ZSA9IHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcylcblxuICBkb20ucmVtb3ZlQ2xhc3MocG9wdXAsIGlubmVyUGFyYW1zLnNob3dDbGFzcy5wb3B1cClcbiAgZG9tLmFkZENsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApXG5cbiAgY29uc3QgYmFja2Ryb3AgPSBkb20uZ2V0Q29udGFpbmVyKClcbiAgZG9tLnJlbW92ZUNsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApXG4gIGRvbS5hZGRDbGFzcyhiYWNrZHJvcCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLmJhY2tkcm9wKVxuXG4gIGhhbmRsZVBvcHVwQW5pbWF0aW9uKHRoaXMsIHBvcHVwLCBpbm5lclBhcmFtcylcblxuICAvLyBSZXNvbHZlIFN3YWwgcHJvbWlzZVxuICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlKVxufVxuXG5jb25zdCBwcmVwYXJlUmVzb2x2ZVZhbHVlID0gKHJlc29sdmVWYWx1ZSkgPT4ge1xuICAvLyBXaGVuIHVzZXIgY2FsbHMgU3dhbC5jbG9zZSgpXG4gIGlmICh0eXBlb2YgcmVzb2x2ZVZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICBpc0Rpc21pc3NlZDogdHJ1ZSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgaXNDb25maXJtZWQ6IGZhbHNlLFxuICAgIGlzRGVuaWVkOiBmYWxzZSxcbiAgICBpc0Rpc21pc3NlZDogZmFsc2UsXG4gIH0sIHJlc29sdmVWYWx1ZSlcbn1cblxuY29uc3QgaGFuZGxlUG9wdXBBbmltYXRpb24gPSAoaW5zdGFuY2UsIHBvcHVwLCBpbm5lclBhcmFtcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKClcbiAgLy8gSWYgYW5pbWF0aW9uIGlzIHN1cHBvcnRlZCwgYW5pbWF0ZVxuICBjb25zdCBhbmltYXRpb25Jc1N1cHBvcnRlZCA9IGRvbS5hbmltYXRpb25FbmRFdmVudCAmJiBkb20uaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKVxuXG4gIGlmICh0eXBlb2YgaW5uZXJQYXJhbXMud2lsbENsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaW5uZXJQYXJhbXMud2lsbENsb3NlKHBvcHVwKVxuICB9XG5cbiAgaWYgKGFuaW1hdGlvbklzU3VwcG9ydGVkKSB7XG4gICAgYW5pbWF0ZVBvcHVwKGluc3RhbmNlLCBwb3B1cCwgY29udGFpbmVyLCBpbm5lclBhcmFtcy5yZXR1cm5Gb2N1cywgaW5uZXJQYXJhbXMuZGlkQ2xvc2UpXG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgaW5uZXJQYXJhbXMucmV0dXJuRm9jdXMsIGlubmVyUGFyYW1zLmRpZENsb3NlKVxuICB9XG59XG5cbmNvbnN0IGFuaW1hdGVQb3B1cCA9IChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKSA9PiB7XG4gIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayA9IHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZS5iaW5kKG51bGwsIGluc3RhbmNlLCBjb250YWluZXIsIHJldHVybkZvY3VzLCBkaWRDbG9zZSlcbiAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihkb20uYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCkge1xuICAgICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKClcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2tcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UgPSAoaW5zdGFuY2UsIGRpZENsb3NlKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGlkQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRpZENsb3NlLmJpbmQoaW5zdGFuY2UucGFyYW1zKSgpXG4gICAgfVxuICAgIGluc3RhbmNlLl9kZXN0cm95KClcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgY2xvc2UgYXMgY2xvc2VQb3B1cCxcbiAgY2xvc2UgYXMgY2xvc2VNb2RhbCxcbiAgY2xvc2UgYXMgY2xvc2VUb2FzdFxufVxuIiwiaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbmZ1bmN0aW9uIHNldEJ1dHRvbnNEaXNhYmxlZCAoaW5zdGFuY2UsIGJ1dHRvbnMsIGRpc2FibGVkKSB7XG4gIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSlcbiAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgZG9tQ2FjaGVbYnV0dG9uXS5kaXNhYmxlZCA9IGRpc2FibGVkXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNldElucHV0RGlzYWJsZWQgKGlucHV0LCBkaXNhYmxlZCkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICBjb25zdCByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICBjb25zdCByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYWRpb3NbaV0uZGlzYWJsZWQgPSBkaXNhYmxlZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5kaXNhYmxlZCA9IGRpc2FibGVkXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMgKCkge1xuICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIGZhbHNlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMgKCkge1xuICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIHRydWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVJbnB1dCAoKSB7XG4gIHJldHVybiBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgZmFsc2UpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlSW5wdXQgKCkge1xuICByZXR1cm4gc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIHRydWUpXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbi8vIEdldCBpbnB1dCBlbGVtZW50IGJ5IHNwZWNpZmllZCB0eXBlIG9yLCBpZiB0eXBlIGlzbid0IHNwZWNpZmllZCwgYnkgcGFyYW1zLmlucHV0XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXQgKGluc3RhbmNlKSB7XG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCB0aGlzKVxuICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQoaW5zdGFuY2UgfHwgdGhpcylcbiAgaWYgKCFkb21DYWNoZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGRvbS5nZXRJbnB1dChkb21DYWNoZS5wb3B1cCwgaW5uZXJQYXJhbXMuaW5wdXQpXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi91dGlscy9jbGFzc2VzLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbi8qKlxuICogSGlkZXMgbG9hZGVyIGFuZCBzaG93cyBiYWNrIHRoZSBidXR0b24gd2hpY2ggd2FzIGhpZGRlbiBieSAuc2hvd0xvYWRpbmcoKVxuICovXG5mdW5jdGlvbiBoaWRlTG9hZGluZyAoKSB7XG4gIC8vIGRvIG5vdGhpbmcgaWYgcG9wdXAgaXMgY2xvc2VkXG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKVxuICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpXG4gIGRvbS5oaWRlKGRvbUNhY2hlLmxvYWRlcilcbiAgaWYgKGRvbS5pc1RvYXN0KCkpIHtcbiAgICBpZiAoaW5uZXJQYXJhbXMuaWNvbikge1xuICAgICAgZG9tLnNob3coZG9tLmdldEljb24oKSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2hvd1JlbGF0ZWRCdXR0b24oZG9tQ2FjaGUpXG4gIH1cbiAgZG9tLnJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpXG4gIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5JylcbiAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKVxuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG59XG5cbmNvbnN0IHNob3dSZWxhdGVkQnV0dG9uID0gKGRvbUNhY2hlKSA9PiB7XG4gIGNvbnN0IGJ1dHRvblRvUmVwbGFjZSA9IGRvbUNhY2hlLnBvcHVwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZG9tQ2FjaGUubG9hZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24tdG8tcmVwbGFjZScpKVxuICBpZiAoYnV0dG9uVG9SZXBsYWNlLmxlbmd0aCkge1xuICAgIGRvbS5zaG93KGJ1dHRvblRvUmVwbGFjZVswXSwgJ2lubGluZS1ibG9jaycpXG4gIH0gZWxzZSBpZiAoZG9tLmFsbEJ1dHRvbnNBcmVIaWRkZW4oKSkge1xuICAgIGRvbS5oaWRlKGRvbUNhY2hlLmFjdGlvbnMpXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgaGlkZUxvYWRpbmcsXG4gIGhpZGVMb2FkaW5nIGFzIGRpc2FibGVMb2FkaW5nXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgRGlzbWlzc1JlYXNvbiB9IGZyb20gJy4uL3V0aWxzL0Rpc21pc3NSZWFzb24uanMnXG5pbXBvcnQgeyBjYWxsSWZGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgY2xpY2tDb25maXJtIH0gZnJvbSAnLi4vc3RhdGljTWV0aG9kcy9kb20uanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuZXhwb3J0IGNvbnN0IGFkZEtleWRvd25IYW5kbGVyID0gKGluc3RhbmNlLCBnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSA9PiB7XG4gIGlmIChnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0ICYmIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQpIHtcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwgeyBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlIH0pXG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlXG4gIH1cblxuICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIgPSAoZSkgPT4ga2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGUsIGRpc21pc3NXaXRoKVxuICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID8gd2luZG93IDogZG9tLmdldFBvcHVwKClcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID0gaW5uZXJQYXJhbXMua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7IGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgfSlcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gdHJ1ZVxuICB9XG59XG5cbi8vIEZvY3VzIGhhbmRsaW5nXG5leHBvcnQgY29uc3Qgc2V0Rm9jdXMgPSAoaW5uZXJQYXJhbXMsIGluZGV4LCBpbmNyZW1lbnQpID0+IHtcbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBkb20uZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKVxuICAvLyBzZWFyY2ggZm9yIHZpc2libGUgZWxlbWVudHMgYW5kIHNlbGVjdCB0aGUgbmV4dCBwb3NzaWJsZSBtYXRjaFxuICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudFxuXG4gICAgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IDBcblxuICAgICAgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMVxuICAgIH1cblxuICAgIHJldHVybiBmb2N1c2FibGVFbGVtZW50c1tpbmRleF0uZm9jdXMoKVxuICB9XG4gIC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcbiAgZG9tLmdldFBvcHVwKCkuZm9jdXMoKVxufVxuXG5jb25zdCBhcnJvd0tleXNOZXh0QnV0dG9uID0gW1xuICAnQXJyb3dSaWdodCcsICdBcnJvd0Rvd24nLFxuXVxuXG5jb25zdCBhcnJvd0tleXNQcmV2aW91c0J1dHRvbiA9IFtcbiAgJ0Fycm93TGVmdCcsICdBcnJvd1VwJyxcbl1cblxuY29uc3Qga2V5ZG93bkhhbmRsZXIgPSAoaW5zdGFuY2UsIGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSlcblxuICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgcmV0dXJuIC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgfVxuXG4gIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgLy8gRU5URVJcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgaGFuZGxlRW50ZXIoaW5zdGFuY2UsIGUsIGlubmVyUGFyYW1zKVxuXG4gIC8vIFRBQlxuICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgIGhhbmRsZVRhYihlLCBpbm5lclBhcmFtcylcblxuICAvLyBBUlJPV1MgLSBzd2l0Y2ggZm9jdXMgYmV0d2VlbiBidXR0b25zXG4gIH0gZWxzZSBpZiAoWy4uLmFycm93S2V5c05leHRCdXR0b24sIC4uLmFycm93S2V5c1ByZXZpb3VzQnV0dG9uXS5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICBoYW5kbGVBcnJvd3MoZS5rZXkpXG5cbiAgLy8gRVNDXG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgaGFuZGxlRXNjKGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVFbnRlciA9IChpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgLy8gIzcyMCAjNzIxXG4gIGlmIChlLmlzQ29tcG9zaW5nKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoZS50YXJnZXQgJiYgaW5zdGFuY2UuZ2V0SW5wdXQoKSAmJiBlLnRhcmdldC5vdXRlckhUTUwgPT09IGluc3RhbmNlLmdldElucHV0KCkub3V0ZXJIVE1MKSB7XG4gICAgaWYgKFsndGV4dGFyZWEnLCAnZmlsZSddLmluY2x1ZGVzKGlubmVyUGFyYW1zLmlucHV0KSkge1xuICAgICAgcmV0dXJuIC8vIGRvIG5vdCBzdWJtaXRcbiAgICB9XG5cbiAgICBjbGlja0NvbmZpcm0oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVRhYiA9IChlLCBpbm5lclBhcmFtcykgPT4ge1xuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXRcblxuICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IGRvbS5nZXRGb2N1c2FibGVFbGVtZW50cygpXG4gIGxldCBidG5JbmRleCA9IC0xXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFyZ2V0RWxlbWVudCA9PT0gZm9jdXNhYmxlRWxlbWVudHNbaV0pIHtcbiAgICAgIGJ0bkluZGV4ID0gaVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICBzZXRGb2N1cyhpbm5lclBhcmFtcywgYnRuSW5kZXgsIDEpXG4gIH0gZWxzZSB7XG4gICAgLy8gQ3ljbGUgdG8gdGhlIHByZXYgYnV0dG9uXG4gICAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIGJ0bkluZGV4LCAtMSlcbiAgfVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGUucHJldmVudERlZmF1bHQoKVxufVxuXG5jb25zdCBoYW5kbGVBcnJvd3MgPSAoa2V5KSA9PiB7XG4gIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb20uZ2V0Q29uZmlybUJ1dHRvbigpXG4gIGNvbnN0IGRlbnlCdXR0b24gPSBkb20uZ2V0RGVueUJ1dHRvbigpXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvbS5nZXRDYW5jZWxCdXR0b24oKVxuICBpZiAoIVtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLmluY2x1ZGVzKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgc2libGluZyA9IGFycm93S2V5c05leHRCdXR0b24uaW5jbHVkZXMoa2V5KSA/ICduZXh0RWxlbWVudFNpYmxpbmcnIDogJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnXG4gIGNvbnN0IGJ1dHRvblRvRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50W3NpYmxpbmddXG4gIGlmIChidXR0b25Ub0ZvY3VzKSB7XG4gICAgYnV0dG9uVG9Gb2N1cy5mb2N1cygpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlRXNjID0gKGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkgPT4ge1xuICBpZiAoY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFc2NhcGVLZXkpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5lc2MpXG4gIH1cbn1cbiIsImltcG9ydCB7IGNhbGxJZkZ1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnXG5pbXBvcnQgeyBEaXNtaXNzUmVhc29uIH0gZnJvbSAnLi4vdXRpbHMvRGlzbWlzc1JlYXNvbi5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9IChpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSlcbiAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgaGFuZGxlVG9hc3RDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKVxuICB9IGVsc2Uge1xuICAgIC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBzbGlkZXJcbiAgICBoYW5kbGVNb2RhbE1vdXNlZG93bihkb21DYWNoZSlcblxuICAgIC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBjb250YWluZXIgYnV0IG1vdXNldXAgb24gdGhlIHBvcHVwXG4gICAgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duKGRvbUNhY2hlKVxuXG4gICAgaGFuZGxlTW9kYWxDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVRvYXN0Q2xpY2sgPSAoaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAvLyBDbG9zaW5nIHRvYXN0IGJ5IGludGVybmFsIGNsaWNrXG4gIGRvbUNhY2hlLnBvcHVwLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICAgIGlmIChcbiAgICAgIGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8XG4gICAgICBpbm5lclBhcmFtcy5zaG93RGVueUJ1dHRvbiB8fFxuICAgICAgaW5uZXJQYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbiB8fFxuICAgICAgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uIHx8XG4gICAgICBpbm5lclBhcmFtcy50aW1lciB8fFxuICAgICAgaW5uZXJQYXJhbXMuaW5wdXRcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNsb3NlKVxuICB9XG59XG5cbmxldCBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZVxuXG5jb25zdCBoYW5kbGVNb2RhbE1vdXNlZG93biA9IChkb21DYWNoZSkgPT4ge1xuICBkb21DYWNoZS5wb3B1cC5vbm1vdXNlZG93biA9ICgpID0+IHtcbiAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSB1bmRlZmluZWRcbiAgICAgIC8vIFdlIG9ubHkgY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgYmVjYXVzZSB1c3VhbGx5IGl0IGRvZXNuJ3RcbiAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duID0gKGRvbUNhY2hlKSA9PiB7XG4gIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNlZG93biA9ICgpID0+IHtcbiAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gdW5kZWZpbmVkXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIGEgY2hpbGQgb2YgdGhlIHBvcHVwXG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLnBvcHVwIHx8IGRvbUNhY2hlLnBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZU1vZGFsQ2xpY2sgPSAoaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICBkb21DYWNoZS5jb250YWluZXIub25jbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICAgIGlmIChpZ25vcmVPdXRzaWRlQ2xpY2spIHtcbiAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5jb250YWluZXIgJiYgY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spKSB7XG4gICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmJhY2tkcm9wKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzICgpIHtcbiAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpXG4gIHJldHVybiBkb21DYWNoZS5wcm9ncmVzc1N0ZXBzXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vc3JjL3V0aWxzL2RvbS9pbmRleC5qcydcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi8uLi9zcmMvdXRpbHMvdXRpbHMuanMnXG5pbXBvcnQgc3dlZXRBbGVydCBmcm9tICcuLi9zd2VldGFsZXJ0Mi5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuXG4vKipcbiAqIFVwZGF0ZXMgcG9wdXAgcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSAocGFyYW1zKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9tLmdldFBvcHVwKClcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpXG5cbiAgaWYgKCFwb3B1cCB8fCBkb20uaGFzQ2xhc3MocG9wdXAsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5wb3B1cCkpIHtcbiAgICByZXR1cm4gd2FybihgWW91J3JlIHRyeWluZyB0byB1cGRhdGUgdGhlIGNsb3NlZCBvciBjbG9zaW5nIHBvcHVwLCB0aGF0IHdvbid0IHdvcmsuIFVzZSB0aGUgdXBkYXRlKCkgbWV0aG9kIGluIHByZUNvbmZpcm0gcGFyYW1ldGVyIG9yIHNob3cgYSBuZXcgcG9wdXAuYClcbiAgfVxuXG4gIGNvbnN0IHZhbGlkVXBkYXRhYmxlUGFyYW1zID0ge31cblxuICAvLyBhc3NpZ24gdmFsaWQgcGFyYW1zIGZyb20gYHBhcmFtc2AgdG8gYGRlZmF1bHRzYFxuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gocGFyYW0gPT4ge1xuICAgIGlmIChzd2VldEFsZXJ0LmlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgdmFsaWRVcGRhdGFibGVQYXJhbXNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKGBJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6IFwiJHtwYXJhbX1cIi4gVXBkYXRhYmxlIHBhcmFtcyBhcmUgbGlzdGVkIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9ibG9iL21hc3Rlci9zcmMvdXRpbHMvcGFyYW1zLmpzXFxuXFxuSWYgeW91IHRoaW5rIHRoaXMgcGFyYW1ldGVyIHNob3VsZCBiZSB1cGRhdGFibGUsIHJlcXVlc3QgaXQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy9uZXc/dGVtcGxhdGU9MDJfZmVhdHVyZV9yZXF1ZXN0Lm1kYClcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgdXBkYXRlZFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGlubmVyUGFyYW1zLCB2YWxpZFVwZGF0YWJsZVBhcmFtcylcblxuICBkb20ucmVuZGVyKHRoaXMsIHVwZGF0ZWRQYXJhbXMpXG5cbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wYXJhbXMsIHBhcmFtcyksXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL3V0aWxzL2RvbS9pbmRleC5qcydcbmltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vdXRpbHMvY2xhc3Nlcy5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuXG4vLyBTaG93IGJsb2NrIHdpdGggdmFsaWRhdGlvbiBtZXNzYWdlXG5leHBvcnQgZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25NZXNzYWdlIChlcnJvcikge1xuICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcylcbiAgY29uc3QgcGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKVxuICBkb20uc2V0SW5uZXJIdG1sKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLCBlcnJvcilcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgZG9tLmFkZENsYXNzKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLCBwYXJhbXMuY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UpXG4gIH1cbiAgZG9tLnNob3coZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpXG5cbiAgY29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KClcbiAgaWYgKGlucHV0KSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0cnVlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSlcbiAgICBkb20uZm9jdXNJbnB1dChpbnB1dClcbiAgICBkb20uYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpXG4gIH1cbn1cblxuLy8gSGlkZSBibG9jayB3aXRoIHZhbGlkYXRpb24gbWVzc2FnZVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UgKCkge1xuICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcylcbiAgaWYgKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgZG9tLmhpZGUoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpXG4gIH1cblxuICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKVxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpXG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICBkb20ucmVtb3ZlQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpXG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN3YWxQcm9taXNlUmVzb2x2ZTogbmV3IFdlYWtNYXAoKVxufVxuIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWludHMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBTd2FsYCBoYXMuXG4gKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvbWlzZTogbmV3IFdlYWtNYXAoKSxcbiAgaW5uZXJQYXJhbXM6IG5ldyBXZWFrTWFwKCksXG4gIGRvbUNhY2hlOiBuZXcgV2Vha01hcCgpXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3N0YXRpY01ldGhvZHMvYXJnc1RvUGFyYW1zLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0aWNNZXRob2RzL2RvbS5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGljTWV0aG9kcy9maXJlLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0aWNNZXRob2RzL21peGluLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0aWNNZXRob2RzL3Nob3dMb2FkaW5nLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0aWNNZXRob2RzL3RpbWVyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0aWNNZXRob2RzL2JpbmRDbGlja0hhbmRsZXIuanMnXG5leHBvcnQge1xuICBpc1ZhbGlkUGFyYW1ldGVyLFxuICBpc1VwZGF0YWJsZVBhcmFtZXRlcixcbiAgaXNEZXByZWNhdGVkUGFyYW1ldGVyXG59IGZyb20gJy4vdXRpbHMvcGFyYW1zLmpzJ1xuIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi91dGlscy91dGlscy5qcydcblxuY29uc3QgaXNKcXVlcnlFbGVtZW50ID0gKGVsZW0pID0+IHR5cGVvZiBlbGVtID09PSAnb2JqZWN0JyAmJiBlbGVtLmpxdWVyeVxuY29uc3QgaXNFbGVtZW50ID0gKGVsZW0pID0+IGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50IHx8IGlzSnF1ZXJ5RWxlbWVudChlbGVtKVxuXG5leHBvcnQgY29uc3QgYXJnc1RvUGFyYW1zID0gKGFyZ3MpID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge31cbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGFyZ3NbMF0pKSB7XG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIGFyZ3NbMF0pXG4gIH0gZWxzZSB7XG4gICAgWyd0aXRsZScsICdodG1sJywgJ2ljb24nXS5mb3JFYWNoKChuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYXJnID0gYXJnc1tpbmRleF1cbiAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fCBpc0VsZW1lbnQoYXJnKSkge1xuICAgICAgICBwYXJhbXNbbmFtZV0gPSBhcmdcbiAgICAgIH0gZWxzZSBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoYFVuZXhwZWN0ZWQgdHlwZSBvZiAke25hbWV9ISBFeHBlY3RlZCBcInN0cmluZ1wiIG9yIFwiRWxlbWVudFwiLCBnb3QgJHt0eXBlb2YgYXJnfWApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcGFyYW1zXG59XG4iLCJsZXQgYm9keUNsaWNrTGlzdGVuZXJBZGRlZCA9IGZhbHNlXG5jb25zdCBjbGlja0hhbmRsZXJzID0ge31cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRDbGlja0hhbmRsZXIgKGF0dHIgPSAnZGF0YS1zd2FsLXRlbXBsYXRlJykge1xuICBjbGlja0hhbmRsZXJzW2F0dHJdID0gdGhpc1xuXG4gIGlmICghYm9keUNsaWNrTGlzdGVuZXJBZGRlZCkge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib2R5Q2xpY2tMaXN0ZW5lcilcbiAgICBib2R5Q2xpY2tMaXN0ZW5lckFkZGVkID0gdHJ1ZVxuICB9XG59XG5cbmNvbnN0IGJvZHlDbGlja0xpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gIGZvciAobGV0IGVsID0gZXZlbnQudGFyZ2V0OyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSkge1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiBjbGlja0hhbmRsZXJzKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKVxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgIGNsaWNrSGFuZGxlcnNbYXR0cl0uZmlyZSh7IHRlbXBsYXRlIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL3V0aWxzL2RvbS9pbmRleC5qcydcbmltcG9ydCAqIGFzIGRvbVV0aWxzIGZyb20gJy4uL3V0aWxzL2RvbS9kb21VdGlscy5qcydcblxuZXhwb3J0IHtcbiAgZ2V0Q29udGFpbmVyLFxuICBnZXRQb3B1cCxcbiAgZ2V0VGl0bGUsXG4gIGdldEh0bWxDb250YWluZXIsXG4gIGdldEltYWdlLFxuICBnZXRJY29uLFxuICBnZXRJbnB1dExhYmVsLFxuICBnZXRDbG9zZUJ1dHRvbixcbiAgZ2V0QWN0aW9ucyxcbiAgZ2V0Q29uZmlybUJ1dHRvbixcbiAgZ2V0RGVueUJ1dHRvbixcbiAgZ2V0Q2FuY2VsQnV0dG9uLFxuICBnZXRMb2FkZXIsXG4gIGdldEZvb3RlcixcbiAgZ2V0VGltZXJQcm9ncmVzc0JhcixcbiAgZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG4gIGdldFZhbGlkYXRpb25NZXNzYWdlLFxuICBpc0xvYWRpbmdcbn0gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBTd2VldEFsZXJ0MiBwb3B1cCBpcyBzaG93blxuICovXG5leHBvcnQgY29uc3QgaXNWaXNpYmxlID0gKCkgPT4ge1xuICByZXR1cm4gZG9tVXRpbHMuaXNWaXNpYmxlKGRvbS5nZXRQb3B1cCgpKVxufVxuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDb25maXJtJyBidXR0b25cbiAqL1xuZXhwb3J0IGNvbnN0IGNsaWNrQ29uZmlybSA9ICgpID0+IGRvbS5nZXRDb25maXJtQnV0dG9uKCkgJiYgZG9tLmdldENvbmZpcm1CdXR0b24oKS5jbGljaygpXG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0RlbnknIGJ1dHRvblxuICovXG5leHBvcnQgY29uc3QgY2xpY2tEZW55ID0gKCkgPT4gZG9tLmdldERlbnlCdXR0b24oKSAmJiBkb20uZ2V0RGVueUJ1dHRvbigpLmNsaWNrKClcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAqL1xuZXhwb3J0IGNvbnN0IGNsaWNrQ2FuY2VsID0gKCkgPT4gZG9tLmdldENhbmNlbEJ1dHRvbigpICYmIGRvbS5nZXRDYW5jZWxCdXR0b24oKS5jbGljaygpXG4iLCJleHBvcnQgZnVuY3Rpb24gZmlyZSAoLi4uYXJncykge1xuICBjb25zdCBTd2FsID0gdGhpc1xuICByZXR1cm4gbmV3IFN3YWwoLi4uYXJncylcbn1cbiIsIi8qKlxuICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBCZWZvcmU6XG4gKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nIH0pXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JyB9KVxuICpcbiAqIEFmdGVyOlxuICogY29uc3QgVGV4dFByb21wdCA9IFN3YWwubWl4aW4oeyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH0pXG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nKVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycpXG4gKlxuICogQHBhcmFtIG1peGluUGFyYW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbiAobWl4aW5QYXJhbXMpIHtcbiAgY2xhc3MgTWl4aW5Td2FsIGV4dGVuZHMgdGhpcyB7XG4gICAgX21haW4gKHBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykge1xuICAgICAgcmV0dXJuIHN1cGVyLl9tYWluKHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgbWl4aW5QYXJhbXMsIHByaW9yaXR5TWl4aW5QYXJhbXMpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNaXhpblN3YWxcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgU3dhbCBmcm9tICcuLi9zd2VldGFsZXJ0Mi5qcydcbmltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vdXRpbHMvY2xhc3Nlcy5qcydcblxuLyoqXG4gKiBTaG93cyBsb2FkZXIgKHNwaW5uZXIpLCB0aGlzIGlzIHVzZWZ1bCB3aXRoIEFKQVggcmVxdWVzdHMuXG4gKiBCeSBkZWZhdWx0IHRoZSBsb2FkZXIgYmUgc2hvd24gaW5zdGVhZCBvZiB0aGUgXCJDb25maXJtXCIgYnV0dG9uLlxuICovXG5jb25zdCBzaG93TG9hZGluZyA9IChidXR0b25Ub1JlcGxhY2UpID0+IHtcbiAgbGV0IHBvcHVwID0gZG9tLmdldFBvcHVwKClcbiAgaWYgKCFwb3B1cCkge1xuICAgIFN3YWwuZmlyZSgpXG4gIH1cbiAgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuICBjb25zdCBsb2FkZXIgPSBkb20uZ2V0TG9hZGVyKClcblxuICBpZiAoZG9tLmlzVG9hc3QoKSkge1xuICAgIGRvbS5oaWRlKGRvbS5nZXRJY29uKCkpXG4gIH0gZWxzZSB7XG4gICAgcmVwbGFjZUJ1dHRvbihwb3B1cCwgYnV0dG9uVG9SZXBsYWNlKVxuICB9XG4gIGRvbS5zaG93KGxvYWRlcilcblxuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsIHRydWUpXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSlcbiAgcG9wdXAuZm9jdXMoKVxufVxuXG5jb25zdCByZXBsYWNlQnV0dG9uID0gKHBvcHVwLCBidXR0b25Ub1JlcGxhY2UpID0+IHtcbiAgY29uc3QgYWN0aW9ucyA9IGRvbS5nZXRBY3Rpb25zKClcbiAgY29uc3QgbG9hZGVyID0gZG9tLmdldExvYWRlcigpXG5cbiAgaWYgKCFidXR0b25Ub1JlcGxhY2UgJiYgZG9tLmlzVmlzaWJsZShkb20uZ2V0Q29uZmlybUJ1dHRvbigpKSkge1xuICAgIGJ1dHRvblRvUmVwbGFjZSA9IGRvbS5nZXRDb25maXJtQnV0dG9uKClcbiAgfVxuXG4gIGRvbS5zaG93KGFjdGlvbnMpXG4gIGlmIChidXR0b25Ub1JlcGxhY2UpIHtcbiAgICBkb20uaGlkZShidXR0b25Ub1JlcGxhY2UpXG4gICAgbG9hZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24tdG8tcmVwbGFjZScsIGJ1dHRvblRvUmVwbGFjZS5jbGFzc05hbWUpXG4gIH1cbiAgbG9hZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxvYWRlciwgYnV0dG9uVG9SZXBsYWNlKVxuICBkb20uYWRkQ2xhc3MoW3BvcHVwLCBhY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZylcbn1cblxuZXhwb3J0IHtcbiAgc2hvd0xvYWRpbmcsXG4gIHNob3dMb2FkaW5nIGFzIGVuYWJsZUxvYWRpbmdcbn1cbiIsImltcG9ydCB7IGFuaW1hdGVUaW1lclByb2dyZXNzQmFyLCBzdG9wVGltZXJQcm9ncmVzc0JhciB9IGZyb20gJy4uL3V0aWxzL2RvbS9kb21VdGlscy5qcydcbmltcG9ydCBnbG9iYWxTdGF0ZSBmcm9tICcuLi9nbG9iYWxTdGF0ZS5qcydcblxuLyoqXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpcyBzZXQsIHJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIE90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUaW1lckxlZnQgPSAoKSA9PiB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KClcbn1cblxuLyoqXG4gKiBTdG9wIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3Qgc3RvcFRpbWVyID0gKCkgPT4ge1xuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIHN0b3BUaW1lclByb2dyZXNzQmFyKClcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKClcbiAgfVxufVxuXG4vKipcbiAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlc3VtZVRpbWVyID0gKCkgPT4ge1xuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RhcnQoKVxuICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKHJlbWFpbmluZylcbiAgICByZXR1cm4gcmVtYWluaW5nXG4gIH1cbn1cblxuLyoqXG4gKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVUaW1lciA9ICgpID0+IHtcbiAgY29uc3QgdGltZXIgPSBnbG9iYWxTdGF0ZS50aW1lb3V0XG4gIHJldHVybiB0aW1lciAmJiAodGltZXIucnVubmluZyA/IHN0b3BUaW1lcigpIDogcmVzdW1lVGltZXIoKSlcbn1cblxuLyoqXG4gKiBJbmNyZWFzZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIGFuIHVwZGF0ZWQgdGltZXIuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgaW5jcmVhc2VUaW1lciA9IChuKSA9PiB7XG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgY29uc3QgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5pbmNyZWFzZShuKVxuICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKHJlbWFpbmluZywgdHJ1ZSlcbiAgICByZXR1cm4gcmVtYWluaW5nXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aW1lciBpcyBydW5uaW5nLiBSZXR1cm5zIHRydWUgaWYgdGltZXIgaXMgcnVubmluZ1xuICogb3IgZmFsc2UgaWYgdGltZXIgaXMgcGF1c2VkIG9yIHN0b3BwZWQuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1RpbWVyUnVubmluZyA9ICgpID0+IHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5pc1J1bm5pbmcoKVxufVxuIiwiaW1wb3J0IFN3ZWV0QWxlcnQgZnJvbSAnLi9Td2VldEFsZXJ0LmpzJ1xuXG5jb25zdCBTd2FsID0gU3dlZXRBbGVydFxuU3dhbC5kZWZhdWx0ID0gU3dhbFxuXG5leHBvcnQgZGVmYXVsdCBTd2FsXG4iLCJleHBvcnQgY29uc3QgRGlzbWlzc1JlYXNvbiA9IE9iamVjdC5mcmVlemUoe1xuICBjYW5jZWw6ICdjYW5jZWwnLFxuICBiYWNrZHJvcDogJ2JhY2tkcm9wJyxcbiAgY2xvc2U6ICdjbG9zZScsXG4gIGVzYzogJ2VzYycsXG4gIHRpbWVyOiAndGltZXInXG59KVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvciAoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgdGhpcy5yZW1haW5pbmcgPSBkZWxheVxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlXG5cbiAgICB0aGlzLnN0YXJ0KClcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGUoKVxuICAgICAgdGhpcy5pZCA9IHNldFRpbWVvdXQodGhpcy5jYWxsYmFjaywgdGhpcy5yZW1haW5pbmcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1xuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2VcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmlkKVxuICAgICAgdGhpcy5yZW1haW5pbmcgLT0gbmV3IERhdGUoKSAtIHRoaXMuc3RhcnRlZFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdcbiAgfVxuXG4gIGluY3JlYXNlIChuKSB7XG4gICAgY29uc3QgcnVubmluZyA9IHRoaXMucnVubmluZ1xuICAgIGlmIChydW5uaW5nKSB7XG4gICAgICB0aGlzLnN0b3AoKVxuICAgIH1cbiAgICB0aGlzLnJlbWFpbmluZyArPSBuXG4gICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuc3RhcnQoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdcbiAgfVxuXG4gIGdldFRpbWVyTGVmdCAoKSB7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgdGhpcy5zdG9wKClcbiAgICAgIHRoaXMuc3RhcnQoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdcbiAgfVxuXG4gIGlzUnVubmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVubmluZ1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRDb250YWluZXIgfSBmcm9tICcuL2RvbS9nZXR0ZXJzLmpzJ1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbHMuanMnXG5cbi8vIEZyb20gaHR0cHM6Ly9kZXZlbG9wZXIucGFjaWVsbG9ncm91cC5jb20vYmxvZy8yMDE4LzA2L3RoZS1jdXJyZW50LXN0YXRlLW9mLW1vZGFsLWRpYWxvZy1hY2Nlc3NpYmlsaXR5L1xuLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4vLyBlbGVtZW50cyBub3Qgd2l0aGluIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIHdpbGwgbm90IGJlIHN1cmZhY2VkIGlmIGEgdXNlciBvcGVucyBhIHNjcmVlblxuLy8gcmVhZGVy4oCZcyBsaXN0IG9mIGVsZW1lbnRzIChoZWFkaW5ncywgZm9ybSBjb250cm9scywgbGFuZG1hcmtzLCBldGMuKSBpbiB0aGUgZG9jdW1lbnQuXG5cbmV4cG9ydCBjb25zdCBzZXRBcmlhSGlkZGVuID0gKCkgPT4ge1xuICBjb25zdCBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoZWwgPT09IGdldENvbnRhaW5lcigpIHx8IGVsLmNvbnRhaW5zKGdldENvbnRhaW5lcigpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKVxuICAgIH1cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdW5zZXRBcmlhSGlkZGVuID0gKCkgPT4ge1xuICBjb25zdCBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSlcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIH1cbiAgfSlcbn1cbiIsImV4cG9ydCBjb25zdCBzd2FsUHJlZml4ID0gJ3N3YWwyLSdcblxuZXhwb3J0IGNvbnN0IHByZWZpeCA9IChpdGVtcykgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICBmb3IgKGNvbnN0IGkgaW4gaXRlbXMpIHtcbiAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgY29uc3Qgc3dhbENsYXNzZXMgPSBwcmVmaXgoW1xuICAnY29udGFpbmVyJyxcbiAgJ3Nob3duJyxcbiAgJ2hlaWdodC1hdXRvJyxcbiAgJ2lvc2ZpeCcsXG4gICdwb3B1cCcsXG4gICdtb2RhbCcsXG4gICduby1iYWNrZHJvcCcsXG4gICduby10cmFuc2l0aW9uJyxcbiAgJ3RvYXN0JyxcbiAgJ3RvYXN0LXNob3duJyxcbiAgJ3Nob3cnLFxuICAnaGlkZScsXG4gICdjbG9zZScsXG4gICd0aXRsZScsXG4gICdodG1sLWNvbnRhaW5lcicsXG4gICdhY3Rpb25zJyxcbiAgJ2NvbmZpcm0nLFxuICAnZGVueScsXG4gICdjYW5jZWwnLFxuICAnZGVmYXVsdC1vdXRsaW5lJyxcbiAgJ2Zvb3RlcicsXG4gICdpY29uJyxcbiAgJ2ljb24tY29udGVudCcsXG4gICdpbWFnZScsXG4gICdpbnB1dCcsXG4gICdmaWxlJyxcbiAgJ3JhbmdlJyxcbiAgJ3NlbGVjdCcsXG4gICdyYWRpbycsXG4gICdjaGVja2JveCcsXG4gICdsYWJlbCcsXG4gICd0ZXh0YXJlYScsXG4gICdpbnB1dGVycm9yJyxcbiAgJ2lucHV0LWxhYmVsJyxcbiAgJ3ZhbGlkYXRpb24tbWVzc2FnZScsXG4gICdwcm9ncmVzcy1zdGVwcycsXG4gICdhY3RpdmUtcHJvZ3Jlc3Mtc3RlcCcsXG4gICdwcm9ncmVzcy1zdGVwJyxcbiAgJ3Byb2dyZXNzLXN0ZXAtbGluZScsXG4gICdsb2FkZXInLFxuICAnbG9hZGluZycsXG4gICdzdHlsZWQnLFxuICAndG9wJyxcbiAgJ3RvcC1zdGFydCcsXG4gICd0b3AtZW5kJyxcbiAgJ3RvcC1sZWZ0JyxcbiAgJ3RvcC1yaWdodCcsXG4gICdjZW50ZXInLFxuICAnY2VudGVyLXN0YXJ0JyxcbiAgJ2NlbnRlci1lbmQnLFxuICAnY2VudGVyLWxlZnQnLFxuICAnY2VudGVyLXJpZ2h0JyxcbiAgJ2JvdHRvbScsXG4gICdib3R0b20tc3RhcnQnLFxuICAnYm90dG9tLWVuZCcsXG4gICdib3R0b20tbGVmdCcsXG4gICdib3R0b20tcmlnaHQnLFxuICAnZ3Jvdy1yb3cnLFxuICAnZ3Jvdy1jb2x1bW4nLFxuICAnZ3Jvdy1mdWxsc2NyZWVuJyxcbiAgJ3J0bCcsXG4gICd0aW1lci1wcm9ncmVzcy1iYXInLFxuICAndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicsXG4gICdzY3JvbGxiYXItbWVhc3VyZScsXG4gICdpY29uLXN1Y2Nlc3MnLFxuICAnaWNvbi13YXJuaW5nJyxcbiAgJ2ljb24taW5mbycsXG4gICdpY29uLXF1ZXN0aW9uJyxcbiAgJ2ljb24tZXJyb3InLFxuXSlcblxuZXhwb3J0IGNvbnN0IGljb25UeXBlcyA9IHByZWZpeChbXG4gICdzdWNjZXNzJyxcbiAgJ3dhcm5pbmcnLFxuICAnaW5mbycsXG4gICdxdWVzdGlvbicsXG4gICdlcnJvcidcbl0pXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVtYWlsOiAoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkgPT4ge1xuICAgIHJldHVybiAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHN0cmluZylcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlIHx8ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKVxuICB9LFxuICB1cmw6IChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSA9PiB7XG4gICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwOTQzNSB3aXRoIGEgc21hbGwgY2hhbmdlIGZyb20gIzEzMDYgYW5kICMyMDEzXG4gICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsxLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvPV0qKSQvLnRlc3Qoc3RyaW5nKVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgfHwgJ0ludmFsaWQgVVJMJylcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNOb2RlRW52IH0gZnJvbSAnLi4vaXNOb2RlRW52LmpzJ1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uRW5kRXZlbnQgPSAoKCkgPT4ge1xuICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kJyxcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25lbmQnXG4gIH1cbiAgZm9yIChjb25zdCBpIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodHJhbnNFbmRFdmVudE5hbWVzLCBpKSAmJiB0eXBlb2YgdGVzdEVsLnN0eWxlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufSkoKVxuIiwiaW1wb3J0IHsgZ2V0VGltZXJQcm9ncmVzc0JhciwgZ2V0Q29uZmlybUJ1dHRvbiwgZ2V0RGVueUJ1dHRvbiwgZ2V0Q2FuY2VsQnV0dG9uIH0gZnJvbSAnLi9nZXR0ZXJzLmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMsIGljb25UeXBlcyB9IGZyb20gJy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgeyB0b0FycmF5LCB3YXJuIH0gZnJvbSAnLi4vdXRpbHMuanMnXG5cbi8vIFJlbWVtYmVyIHN0YXRlIGluIGNhc2VzIHdoZXJlIG9wZW5pbmcgYW5kIGhhbmRsaW5nIGEgbW9kYWwgd2lsbCBmaWRkbGUgd2l0aCBpdC5cbmV4cG9ydCBjb25zdCBzdGF0ZXMgPSB7XG4gIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IHNldElubmVySHRtbCA9IChlbGVtLCBodG1sKSA9PiB7IC8vICMxOTI2XG4gIGVsZW0udGV4dENvbnRlbnQgPSAnJ1xuICBpZiAoaHRtbCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgYHRleHQvaHRtbGApXG4gICAgdG9BcnJheShwYXJzZWQucXVlcnlTZWxlY3RvcignaGVhZCcpLmNoaWxkTm9kZXMpLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKVxuICAgIH0pXG4gICAgdG9BcnJheShwYXJzZWQucXVlcnlTZWxlY3RvcignYm9keScpLmNoaWxkTm9kZXMpLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhc0NsYXNzID0gKGVsZW0sIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoIWNsYXNzTmFtZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IGNsYXNzTGlzdCA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuY29uc3QgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyA9IChlbGVtLCBwYXJhbXMpID0+IHtcbiAgdG9BcnJheShlbGVtLmNsYXNzTGlzdCkuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgIGlmIChcbiAgICAgICFPYmplY3QudmFsdWVzKHN3YWxDbGFzc2VzKS5pbmNsdWRlcyhjbGFzc05hbWUpICYmXG4gICAgICAhT2JqZWN0LnZhbHVlcyhpY29uVHlwZXMpLmluY2x1ZGVzKGNsYXNzTmFtZSkgJiZcbiAgICAgICFPYmplY3QudmFsdWVzKHBhcmFtcy5zaG93Q2xhc3MpLmluY2x1ZGVzKGNsYXNzTmFtZSlcbiAgICApIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYXBwbHlDdXN0b21DbGFzcyA9IChlbGVtLCBwYXJhbXMsIGNsYXNzTmFtZSkgPT4ge1xuICByZW1vdmVDdXN0b21DbGFzc2VzKGVsZW0sIHBhcmFtcylcblxuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzICYmIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdLmZvckVhY2gpIHtcbiAgICAgIHJldHVybiB3YXJuKGBJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuJHtjbGFzc05hbWV9ISBFeHBlY3RlZCBzdHJpbmcgb3IgaXRlcmFibGUgb2JqZWN0LCBnb3QgXCIke3R5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXX1cImApXG4gICAgfVxuXG4gICAgYWRkQ2xhc3MoZWxlbSwgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldElucHV0ID0gKHBvcHVwLCBpbnB1dFR5cGUpID0+IHtcbiAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgY2FzZSAnZmlsZSc6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdKVxuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5jaGVja2JveH0gaW5wdXRgKVxuICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5yYWRpb30gaW5wdXQ6Y2hlY2tlZGApIHx8XG4gICAgICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnJhZGlvfSBpbnB1dDpmaXJzdC1jaGlsZGApXG4gICAgY2FzZSAncmFuZ2UnOlxuICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnJhbmdlfSBpbnB1dGApXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmlucHV0KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmb2N1c0lucHV0ID0gKGlucHV0KSA9PiB7XG4gIGlucHV0LmZvY3VzKClcblxuICAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlXG4gICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgIGlucHV0LnZhbHVlID0gdmFsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUNsYXNzID0gKHRhcmdldCwgY2xhc3NMaXN0LCBjb25kaXRpb24pID0+IHtcbiAgaWYgKCF0YXJnZXQgfHwgIWNsYXNzTGlzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKVxuICB9XG4gIGNsYXNzTGlzdC5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgIHRhcmdldC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGNvbmRpdGlvbiA/IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmRpdGlvbiA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYWRkQ2xhc3MgPSAodGFyZ2V0LCBjbGFzc0xpc3QpID0+IHtcbiAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzcyA9ICh0YXJnZXQsIGNsYXNzTGlzdCkgPT4ge1xuICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDaGlsZEJ5Q2xhc3MgPSAoZWxlbSwgY2xhc3NOYW1lKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGhhc0NsYXNzKGVsZW0uY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2hpbGROb2Rlc1tpXVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXBwbHlOdW1lcmljYWxTdHlsZSA9IChlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlID09PSBgJHtwYXJzZUludCh2YWx1ZSl9YCkge1xuICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpXG4gIH1cbiAgaWYgKHZhbHVlIHx8IHBhcnNlSW50KHZhbHVlKSA9PT0gMCkge1xuICAgIGVsZW0uc3R5bGVbcHJvcGVydHldID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpID8gYCR7dmFsdWV9cHhgIDogdmFsdWVcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaG93ID0gKGVsZW0sIGRpc3BsYXkgPSAnZmxleCcpID0+IHtcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVxufVxuXG5leHBvcnQgY29uc3QgaGlkZSA9IChlbGVtKSA9PiB7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5leHBvcnQgY29uc3Qgc2V0U3R5bGUgPSAocGFyZW50LCBzZWxlY3RvciwgcHJvcGVydHksIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGVsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIGlmIChlbCkge1xuICAgIGVsLnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvZ2dsZSA9IChlbGVtLCBjb25kaXRpb24sIGRpc3BsYXkpID0+IHtcbiAgY29uZGl0aW9uID8gc2hvdyhlbGVtLCBkaXNwbGF5KSA6IGhpZGUoZWxlbSlcbn1cblxuLy8gYm9ycm93ZWQgZnJvbSBqcXVlcnkgJChlbGVtKS5pcygnOnZpc2libGUnKSBpbXBsZW1lbnRhdGlvblxuZXhwb3J0IGNvbnN0IGlzVmlzaWJsZSA9IChlbGVtKSA9PiAhIShlbGVtICYmIChlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpKVxuXG5leHBvcnQgY29uc3QgYWxsQnV0dG9uc0FyZUhpZGRlbiA9ICgpID0+ICFpc1Zpc2libGUoZ2V0Q29uZmlybUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlKGdldERlbnlCdXR0b24oKSkgJiYgIWlzVmlzaWJsZShnZXRDYW5jZWxCdXR0b24oKSlcblxuZXhwb3J0IGNvbnN0IGlzU2Nyb2xsYWJsZSA9IChlbGVtKSA9PiAhIShlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KVxuXG4vLyBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjM1MjExOVxuZXhwb3J0IGNvbnN0IGhhc0Nzc0FuaW1hdGlvbiA9IChlbGVtKSA9PiB7XG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlcblxuICBjb25zdCBhbmltRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1kdXJhdGlvbicpIHx8ICcwJylcbiAgY29uc3QgdHJhbnNEdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNpdGlvbi1kdXJhdGlvbicpIHx8ICcwJylcblxuICByZXR1cm4gYW5pbUR1cmF0aW9uID4gMCB8fCB0cmFuc0R1cmF0aW9uID4gMFxufVxuXG5leHBvcnQgY29uc3QgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIgPSAodGltZXIsIHJlc2V0ID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKVxuICBpZiAoaXNWaXNpYmxlKHRpbWVyUHJvZ3Jlc3NCYXIpKSB7XG4gICAgaWYgKHJlc2V0KSB7XG4gICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSBgd2lkdGggJHt0aW1lciAvIDEwMDB9cyBsaW5lYXJgXG4gICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzAlJ1xuICAgIH0sIDEwKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9wVGltZXJQcm9ncmVzc0JhciA9ICgpID0+IHtcbiAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKVxuICBjb25zdCB0aW1lclByb2dyZXNzQmFyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aClcbiAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG4gIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgY29uc3QgdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpbWVyUHJvZ3Jlc3NCYXIpLndpZHRoKVxuICBjb25zdCB0aW1lclByb2dyZXNzQmFyUGVyY2VudCA9IHBhcnNlSW50KHRpbWVyUHJvZ3Jlc3NCYXJXaWR0aCAvIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggKiAxMDApXG4gIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7dGltZXJQcm9ncmVzc0JhclBlcmNlbnR9JWBcbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHVuaXF1ZUFycmF5LCB0b0FycmF5IH0gZnJvbSAnLi4vdXRpbHMuanMnXG5pbXBvcnQgeyBpc1Zpc2libGUgfSBmcm9tICcuL2RvbVV0aWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5jb250YWluZXJ9YClcblxuZXhwb3J0IGNvbnN0IGVsZW1lbnRCeVNlbGVjdG9yID0gKHNlbGVjdG9yU3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpXG4gIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZykgOiBudWxsXG59XG5cbmNvbnN0IGVsZW1lbnRCeUNsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xuICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UG9wdXAgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cClcblxuZXhwb3J0IGNvbnN0IGdldEljb24gPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pY29uKVxuXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSlcblxuZXhwb3J0IGNvbnN0IGdldEh0bWxDb250YWluZXIgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXSlcblxuZXhwb3J0IGNvbnN0IGdldEltYWdlID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpXG5cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc1N0ZXBzID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ10pXG5cbmV4cG9ydCBjb25zdCBnZXRWYWxpZGF0aW9uTWVzc2FnZSA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSlcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpcm1CdXR0b24gPSAoKSA9PiBlbGVtZW50QnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMuYWN0aW9uc30gLiR7c3dhbENsYXNzZXMuY29uZmlybX1gKVxuXG5leHBvcnQgY29uc3QgZ2V0RGVueUJ1dHRvbiA9ICgpID0+IGVsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5kZW55fWApXG5cbmV4cG9ydCBjb25zdCBnZXRJbnB1dExhYmVsID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ2lucHV0LWxhYmVsJ10pXG5cbmV4cG9ydCBjb25zdCBnZXRMb2FkZXIgPSAoKSA9PiBlbGVtZW50QnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMubG9hZGVyfWApXG5cbmV4cG9ydCBjb25zdCBnZXRDYW5jZWxCdXR0b24gPSAoKSA9PiBlbGVtZW50QnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMuYWN0aW9uc30gLiR7c3dhbENsYXNzZXMuY2FuY2VsfWApXG5cbmV4cG9ydCBjb25zdCBnZXRBY3Rpb25zID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuYWN0aW9ucylcblxuZXhwb3J0IGNvbnN0IGdldEZvb3RlciA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmZvb3RlcilcblxuZXhwb3J0IGNvbnN0IGdldFRpbWVyUHJvZ3Jlc3NCYXIgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10pXG5cbmV4cG9ydCBjb25zdCBnZXRDbG9zZUJ1dHRvbiA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNsb3NlKVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamt1cC9mb2N1c2FibGUvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmNvbnN0IGZvY3VzYWJsZSA9IGBcbiAgYVtocmVmXSxcbiAgYXJlYVtocmVmXSxcbiAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxuICB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksXG4gIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXG4gIGlmcmFtZSxcbiAgb2JqZWN0LFxuICBlbWJlZCxcbiAgW3RhYmluZGV4PVwiMFwiXSxcbiAgW2NvbnRlbnRlZGl0YWJsZV0sXG4gIGF1ZGlvW2NvbnRyb2xzXSxcbiAgdmlkZW9bY29udHJvbHNdLFxuICBzdW1tYXJ5XG5gXG5cbmV4cG9ydCBjb25zdCBnZXRGb2N1c2FibGVFbGVtZW50cyA9ICgpID0+IHtcbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSB0b0FycmF5KFxuICAgIGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpXG4gIClcbiAgLy8gc29ydCBhY2NvcmRpbmcgdG8gdGFiaW5kZXhcbiAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKVxuICAgICAgYiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKVxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgcmV0dXJuIDBcbiAgICB9KVxuXG4gIGNvbnN0IG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSB0b0FycmF5KFxuICAgIGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGUpXG4gICkuZmlsdGVyKGVsID0+IGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAhPT0gJy0xJylcblxuICByZXR1cm4gdW5pcXVlQXJyYXkoZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXguY29uY2F0KG90aGVyRm9jdXNhYmxlRWxlbWVudHMpKS5maWx0ZXIoZWwgPT4gaXNWaXNpYmxlKGVsKSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzTW9kYWwgPSAoKSA9PiB7XG4gIHJldHVybiAhaXNUb2FzdCgpICYmICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzVG9hc3QgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIGdldFBvcHVwKCkuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kb21VdGlscy5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5pdC5qcydcbmV4cG9ydCAqIGZyb20gJy4vZ2V0dGVycy5qcydcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2VIdG1sVG9Db250YWluZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbkVuZEV2ZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9tZWFzdXJlU2Nyb2xsYmFyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcnMvcmVuZGVyLmpzJ1xuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgZ2V0Q29udGFpbmVyLCBnZXRQb3B1cCB9IGZyb20gJy4vZ2V0dGVycy5qcydcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcywgZ2V0Q2hpbGRCeUNsYXNzLCBzZXRJbm5lckh0bWwgfSBmcm9tICcuL2RvbVV0aWxzLmpzJ1xuaW1wb3J0IHsgaXNOb2RlRW52IH0gZnJvbSAnLi4vaXNOb2RlRW52LmpzJ1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi91dGlscy5qcydcbmltcG9ydCBzd2VldEFsZXJ0IGZyb20gJy4uLy4uL3N3ZWV0YWxlcnQyLmpzJ1xuXG5jb25zdCBzd2VldEhUTUwgPSBgXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XCIke3N3YWxDbGFzc2VzLnRpdGxlfVwiIGFyaWEtZGVzY3JpYmVkYnk9XCIke3N3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddfVwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5wb3B1cH1cIiB0YWJpbmRleD1cIi0xXCI+XG4gICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuY2xvc2V9XCI+PC9idXR0b24+XG4gICA8dWwgY2xhc3M9XCIke3N3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddfVwiPjwvdWw+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5pY29ufVwiPjwvZGl2PlxuICAgPGltZyBjbGFzcz1cIiR7c3dhbENsYXNzZXMuaW1hZ2V9XCIgLz5cbiAgIDxoMiBjbGFzcz1cIiR7c3dhbENsYXNzZXMudGl0bGV9XCIgaWQ9XCIke3N3YWxDbGFzc2VzLnRpdGxlfVwiPjwvaDI+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXX1cIiBpZD1cIiR7c3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ119XCI+PC9kaXY+XG4gICA8aW5wdXQgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmlucHV0fVwiIC8+XG4gICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZmlsZX1cIiAvPlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMucmFuZ2V9XCI+XG4gICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiAvPlxuICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxuICAgPC9kaXY+XG4gICA8c2VsZWN0IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5zZWxlY3R9XCI+PC9zZWxlY3Q+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5yYWRpb31cIj48L2Rpdj5cbiAgIDxsYWJlbCBmb3I9XCIke3N3YWxDbGFzc2VzLmNoZWNrYm94fVwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jaGVja2JveH1cIj5cbiAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgIDxzcGFuIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5sYWJlbH1cIj48L3NwYW4+XG4gICA8L2xhYmVsPlxuICAgPHRleHRhcmVhIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy50ZXh0YXJlYX1cIj48L3RleHRhcmVhPlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddfVwiIGlkPVwiJHtzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ119XCI+PC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfVwiPlxuICAgICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5sb2FkZXJ9XCI+PC9kaXY+XG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jb25maXJtfVwiPjwvYnV0dG9uPlxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZGVueX1cIj48L2J1dHRvbj5cbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmNhbmNlbH1cIj48L2J1dHRvbj5cbiAgIDwvZGl2PlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZm9vdGVyfVwiPjwvZGl2PlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInXX1cIj5cbiAgICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhciddfVwiPjwvZGl2PlxuICAgPC9kaXY+XG4gPC9kaXY+XG5gLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKVxuXG5jb25zdCByZXNldE9sZENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3Qgb2xkQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyKClcbiAgaWYgKCFvbGRDb250YWluZXIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG9sZENvbnRhaW5lci5yZW1vdmUoKVxuICByZW1vdmVDbGFzcyhcbiAgICBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSxcbiAgICBbXG4gICAgICBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSxcbiAgICAgIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLFxuICAgICAgc3dhbENsYXNzZXNbJ2hhcy1jb2x1bW4nXVxuICAgIF1cbiAgKVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSAoKSA9PiB7XG4gIGlmIChzd2VldEFsZXJ0LmlzVmlzaWJsZSgpKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKClcbiAgfVxufVxuXG5jb25zdCBhZGRJbnB1dENoYW5nZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpXG5cbiAgY29uc3QgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmlucHV0KVxuICBjb25zdCBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5maWxlKVxuICBjb25zdCByYW5nZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnJhbmdlfSBpbnB1dGApXG4gIGNvbnN0IHJhbmdlT3V0cHV0ID0gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucmFuZ2V9IG91dHB1dGApXG4gIGNvbnN0IHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2VsZWN0KVxuICBjb25zdCBjaGVja2JveCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLmNoZWNrYm94fSBpbnB1dGApXG4gIGNvbnN0IHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSlcblxuICBpbnB1dC5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZVxuICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZVxuICBzZWxlY3Qub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlXG4gIGNoZWNrYm94Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZVxuICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZVxuXG4gIHJhbmdlLm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpXG4gICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZVxuICB9XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpXG4gICAgcmFuZ2UubmV4dFNpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZVxuICB9XG59XG5cbmNvbnN0IGdldFRhcmdldCA9ICh0YXJnZXQpID0+IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0XG5cbmNvbnN0IHNldHVwQWNjZXNzaWJpbGl0eSA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpXG5cbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdyb2xlJywgcGFyYW1zLnRvYXN0ID8gJ2FsZXJ0JyA6ICdkaWFsb2cnKVxuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHBhcmFtcy50b2FzdCA/ICdwb2xpdGUnIDogJ2Fzc2VydGl2ZScpXG4gIGlmICghcGFyYW1zLnRvYXN0KSB7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKVxuICB9XG59XG5cbmNvbnN0IHNldHVwUlRMID0gKHRhcmdldEVsZW1lbnQpID0+IHtcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldEVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICBhZGRDbGFzcyhnZXRDb250YWluZXIoKSwgc3dhbENsYXNzZXMucnRsKVxuICB9XG59XG5cbi8qXG4gKiBBZGQgbW9kYWwgKyBiYWNrZHJvcCB0byBET01cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXQgPSAocGFyYW1zKSA9PiB7XG4gIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgY29udGFpbmVyIGlmIGl0IGV4aXN0c1xuICBjb25zdCBvbGRDb250YWluZXJFeGlzdGVkID0gcmVzZXRPbGRDb250YWluZXIoKVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29udGFpbmVyXG4gIGlmIChvbGRDb250YWluZXJFeGlzdGVkKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1snbm8tdHJhbnNpdGlvbiddKVxuICB9XG4gIHNldElubmVySHRtbChjb250YWluZXIsIHN3ZWV0SFRNTClcblxuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZ2V0VGFyZ2V0KHBhcmFtcy50YXJnZXQpXG4gIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG4gIHNldHVwQWNjZXNzaWJpbGl0eShwYXJhbXMpXG4gIHNldHVwUlRMKHRhcmdldEVsZW1lbnQpXG4gIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKClcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2luZGV4LmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgZ2V0Q2hpbGRCeUNsYXNzIH0gZnJvbSAnLi9kb21VdGlscy5qcydcbmltcG9ydCB7IGFzUHJvbWlzZSwgZXJyb3IsIGhhc1RvUHJvbWlzZUZuLCBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlscy5qcydcbmltcG9ydCB7IHNob3dMb2FkaW5nIH0gZnJvbSAnLi4vLi4vc3RhdGljTWV0aG9kcy9zaG93TG9hZGluZy5qcydcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUlucHV0T3B0aW9uc0FuZFZhbHVlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgcGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgaGFuZGxlSW5wdXRPcHRpb25zKGluc3RhbmNlLCBwYXJhbXMpXG4gIH0gZWxzZSBpZiAoXG4gICAgWyd0ZXh0JywgJ2VtYWlsJywgJ251bWJlcicsICd0ZWwnLCAndGV4dGFyZWEnXS5pbmNsdWRlcyhwYXJhbXMuaW5wdXQpICYmXG4gICAgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dFZhbHVlKSB8fCBpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKVxuICApIHtcbiAgICBzaG93TG9hZGluZyhkb20uZ2V0Q29uZmlybUJ1dHRvbigpKVxuICAgIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IChpbnN0YW5jZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpXG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHN3aXRjaCAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShpbnB1dClcbiAgICBjYXNlICdyYWRpbyc6XG4gICAgICByZXR1cm4gZ2V0UmFkaW9WYWx1ZShpbnB1dClcbiAgICBjYXNlICdmaWxlJzpcbiAgICAgIHJldHVybiBnZXRGaWxlVmFsdWUoaW5wdXQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWVcbiAgfVxufVxuXG5jb25zdCBnZXRDaGVja2JveFZhbHVlID0gKGlucHV0KSA9PiBpbnB1dC5jaGVja2VkID8gMSA6IDBcblxuY29uc3QgZ2V0UmFkaW9WYWx1ZSA9IChpbnB1dCkgPT4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbFxuXG5jb25zdCBnZXRGaWxlVmFsdWUgPSAoaW5wdXQpID0+IGlucHV0LmZpbGVzLmxlbmd0aCA/IChpbnB1dC5nZXRBdHRyaWJ1dGUoJ211bHRpcGxlJykgIT09IG51bGwgPyBpbnB1dC5maWxlcyA6IGlucHV0LmZpbGVzWzBdKSA6IG51bGxcblxuY29uc3QgaGFuZGxlSW5wdXRPcHRpb25zID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuICBjb25zdCBwcm9jZXNzSW5wdXRPcHRpb25zID0gKGlucHV0T3B0aW9ucykgPT4gcG9wdWxhdGVJbnB1dE9wdGlvbnNbcGFyYW1zLmlucHV0XShwb3B1cCwgZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyksIHBhcmFtcylcbiAgaWYgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dE9wdGlvbnMpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKSkge1xuICAgIHNob3dMb2FkaW5nKGRvbS5nZXRDb25maXJtQnV0dG9uKCkpXG4gICAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpLnRoZW4oKGlucHV0T3B0aW9ucykgPT4ge1xuICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKVxuICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpXG4gICAgfSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zLmlucHV0T3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBwcm9jZXNzSW5wdXRPcHRpb25zKHBhcmFtcy5pbnB1dE9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgZXJyb3IoYFVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCAke3R5cGVvZiBwYXJhbXMuaW5wdXRPcHRpb25zfWApXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlSW5wdXRWYWx1ZSA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gaW5zdGFuY2UuZ2V0SW5wdXQoKVxuICBkb20uaGlkZShpbnB1dClcbiAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKS50aGVuKChpbnB1dFZhbHVlKSA9PiB7XG4gICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXQgPT09ICdudW1iZXInID8gcGFyc2VGbG9hdChpbnB1dFZhbHVlKSB8fCAwIDogYCR7aW5wdXRWYWx1ZX1gXG4gICAgZG9tLnNob3coaW5wdXQpXG4gICAgaW5wdXQuZm9jdXMoKVxuICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKClcbiAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgZXJyb3IoYEVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogJHtlcnJ9YClcbiAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgIGRvbS5zaG93KGlucHV0KVxuICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKVxuICAgIH0pXG59XG5cbmNvbnN0IHBvcHVsYXRlSW5wdXRPcHRpb25zID0ge1xuICBzZWxlY3Q6IChwb3B1cCwgaW5wdXRPcHRpb25zLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNlbGVjdClcbiAgICBjb25zdCByZW5kZXJPcHRpb24gPSAocGFyZW50LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZVxuICAgICAgZG9tLnNldElubmVySHRtbChvcHRpb24sIG9wdGlvbkxhYmVsKVxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gaXNTZWxlY3RlZChvcHRpb25WYWx1ZSwgcGFyYW1zLmlucHV0VmFsdWUpXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChpbnB1dE9wdGlvbiA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IGlucHV0T3B0aW9uWzBdXG4gICAgICBjb25zdCBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdXG4gICAgICAvLyA8b3B0Z3JvdXA+IHNwZWM6XG4gICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuNlxuICAgICAgLy8gXCIuLi5hbGwgT1BUR1JPVVAgZWxlbWVudHMgbXVzdCBiZSBzcGVjaWZpZWQgZGlyZWN0bHkgd2l0aGluIGEgU0VMRUNUIGVsZW1lbnQgKGkuZS4sIGdyb3VwcyBtYXkgbm90IGJlIG5lc3RlZCkuLi5cIlxuICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGlzIGlzIGEgPG9wdGdyb3VwPlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uTGFiZWwpKSB7IC8vIGlmIGl0IGlzIGFuIGFycmF5LCB0aGVuIGl0IGlzIGFuIDxvcHRncm91cD5cbiAgICAgICAgY29uc3Qgb3B0Z3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpXG4gICAgICAgIG9wdGdyb3VwLmxhYmVsID0gb3B0aW9uVmFsdWVcbiAgICAgICAgb3B0Z3JvdXAuZGlzYWJsZWQgPSBmYWxzZSAvLyBub3QgY29uZmlndXJhYmxlIGZvciBub3dcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGdyb3VwKVxuICAgICAgICBvcHRpb25MYWJlbC5mb3JFYWNoKG8gPT4gcmVuZGVyT3B0aW9uKG9wdGdyb3VwLCBvWzFdLCBvWzBdKSlcbiAgICAgIH0gZWxzZSB7IC8vIGNhc2Ugb2YgPG9wdGlvbj5cbiAgICAgICAgcmVuZGVyT3B0aW9uKHNlbGVjdCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgc2VsZWN0LmZvY3VzKClcbiAgfSxcblxuICByYWRpbzogKHBvcHVwLCBpbnB1dE9wdGlvbnMsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHJhZGlvID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5yYWRpbylcbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChpbnB1dE9wdGlvbiA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gaW5wdXRPcHRpb25bMF1cbiAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBpbnB1dE9wdGlvblsxXVxuICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGNvbnN0IHJhZGlvTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJ1xuICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW9cbiAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlXG4gICAgICBpZiAoaXNTZWxlY3RlZChyYWRpb1ZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgcmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZVxuICAgICAgfVxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGRvbS5zZXRJbm5lckh0bWwobGFiZWwsIHJhZGlvTGFiZWwpXG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbFxuICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dClcbiAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpXG4gICAgfSlcbiAgICBjb25zdCByYWRpb3MgPSByYWRpby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG4gICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgIHJhZGlvc1swXS5mb2N1cygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgYGlucHV0T3B0aW9uc2AgaW50byBhbiBhcnJheSBvZiBgW3ZhbHVlLCBsYWJlbF1gc1xuICogQHBhcmFtIGlucHV0T3B0aW9uc1xuICovXG5jb25zdCBmb3JtYXRJbnB1dE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dE9wdGlvbnMgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgbGV0IHZhbHVlRm9ybWF0dGVkID0gdmFsdWVcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVGb3JtYXR0ZWQgPT09ICdvYmplY3QnKSB7IC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICB2YWx1ZUZvcm1hdHRlZCA9IGZvcm1hdElucHV0T3B0aW9ucyh2YWx1ZUZvcm1hdHRlZClcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKGlucHV0T3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IHZhbHVlRm9ybWF0dGVkID0gaW5wdXRPcHRpb25zW2tleV1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWVGb3JtYXR0ZWQgPT09ICdvYmplY3QnKSB7IC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICB2YWx1ZUZvcm1hdHRlZCA9IGZvcm1hdElucHV0T3B0aW9ucyh2YWx1ZUZvcm1hdHRlZClcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSlcbiAgICB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgaXNTZWxlY3RlZCA9IChvcHRpb25WYWx1ZSwgaW5wdXRWYWx1ZSkgPT4ge1xuICByZXR1cm4gaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKClcbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vY2xhc3Nlcy5qcydcblxuLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGggZm9yIHBhZGRpbmcgYm9keSBkdXJpbmcgbW9kYWwgc2hvdy9oaWRlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvanMvc3JjL21vZGFsLmpzXG5leHBvcnQgY29uc3QgbWVhc3VyZVNjcm9sbGJhciA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzWydzY3JvbGxiYXItbWVhc3VyZSddXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KVxuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG59XG4iLCJpbXBvcnQgeyBzZXRJbm5lckh0bWwgfSBmcm9tICcuL2RvbVV0aWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgcGFyc2VIdG1sVG9Db250YWluZXIgPSAocGFyYW0sIHRhcmdldCkgPT4ge1xuICAvLyBET00gZWxlbWVudFxuICBpZiAocGFyYW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbSlcblxuICAvLyBPYmplY3RcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnKSB7XG4gICAgaGFuZGxlT2JqZWN0KHBhcmFtLCB0YXJnZXQpXG5cbiAgLy8gUGxhaW4gc3RyaW5nXG4gIH0gZWxzZSBpZiAocGFyYW0pIHtcbiAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbSlcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVPYmplY3QgPSAocGFyYW0sIHRhcmdldCkgPT4ge1xuICAvLyBKUXVlcnkgZWxlbWVudChzKVxuICBpZiAocGFyYW0uanF1ZXJ5KSB7XG4gICAgaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIHBhcmFtKVxuXG4gIC8vIEZvciBvdGhlciBvYmplY3RzIHVzZSB0aGVpciBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgfSBlbHNlIHtcbiAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbS50b1N0cmluZygpKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUpxdWVyeUVsZW0gPSAodGFyZ2V0LCBlbGVtKSA9PiB7XG4gIHRhcmdldC50ZXh0Q29udGVudCA9ICcnXG4gIGlmICgwIGluIGVsZW0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSBpbiBlbGVtOyBpKyspIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbGVtW2ldLmNsb25lTm9kZSh0cnVlKSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW0uY2xvbmVOb2RlKHRydWUpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRQb3B1cCB9IGZyb20gJy4uL2dldHRlcnMuanMnXG5pbXBvcnQgeyByZW5kZXJBY3Rpb25zIH0gZnJvbSAnLi9yZW5kZXJBY3Rpb25zLmpzJ1xuaW1wb3J0IHsgcmVuZGVyQ29udGFpbmVyIH0gZnJvbSAnLi9yZW5kZXJDb250YWluZXIuanMnXG5pbXBvcnQgeyByZW5kZXJDb250ZW50IH0gZnJvbSAnLi9yZW5kZXJDb250ZW50LmpzJ1xuaW1wb3J0IHsgcmVuZGVyRm9vdGVyIH0gZnJvbSAnLi9yZW5kZXJGb290ZXIuanMnXG5pbXBvcnQgeyByZW5kZXJDbG9zZUJ1dHRvbiB9IGZyb20gJy4vcmVuZGVyQ2xvc2VCdXR0b24uanMnXG5pbXBvcnQgeyByZW5kZXJJY29uIH0gZnJvbSAnLi9yZW5kZXJJY29uLmpzJ1xuaW1wb3J0IHsgcmVuZGVySW1hZ2UgfSBmcm9tICcuL3JlbmRlckltYWdlLmpzJ1xuaW1wb3J0IHsgcmVuZGVyUHJvZ3Jlc3NTdGVwcyB9IGZyb20gJy4vcmVuZGVyUHJvZ3Jlc3NTdGVwcy5qcydcbmltcG9ydCB7IHJlbmRlclRpdGxlIH0gZnJvbSAnLi9yZW5kZXJUaXRsZS5qcydcbmltcG9ydCB7IHJlbmRlclBvcHVwIH0gZnJvbSAnLi9yZW5kZXJQb3B1cC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIHJlbmRlclBvcHVwKGluc3RhbmNlLCBwYXJhbXMpXG4gIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKVxuXG4gIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcylcbiAgcmVuZGVySWNvbihpbnN0YW5jZSwgcGFyYW1zKVxuICByZW5kZXJJbWFnZShpbnN0YW5jZSwgcGFyYW1zKVxuICByZW5kZXJUaXRsZShpbnN0YW5jZSwgcGFyYW1zKVxuICByZW5kZXJDbG9zZUJ1dHRvbihpbnN0YW5jZSwgcGFyYW1zKVxuXG4gIHJlbmRlckNvbnRlbnQoaW5zdGFuY2UsIHBhcmFtcylcbiAgcmVuZGVyQWN0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKVxuICByZW5kZXJGb290ZXIoaW5zdGFuY2UsIHBhcmFtcylcblxuICBpZiAodHlwZW9mIHBhcmFtcy5kaWRSZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMuZGlkUmVuZGVyKGdldFBvcHVwKCkpXG4gIH1cbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlckFjdGlvbnMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBhY3Rpb25zID0gZG9tLmdldEFjdGlvbnMoKVxuICBjb25zdCBsb2FkZXIgPSBkb20uZ2V0TG9hZGVyKClcbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvbS5nZXRDb25maXJtQnV0dG9uKClcbiAgY29uc3QgZGVueUJ1dHRvbiA9IGRvbS5nZXREZW55QnV0dG9uKClcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9tLmdldENhbmNlbEJ1dHRvbigpXG5cbiAgLy8gQWN0aW9ucyAoYnV0dG9ucykgd3JhcHBlclxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dEZW55QnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGRvbS5oaWRlKGFjdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgZG9tLnNob3coYWN0aW9ucylcbiAgfVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyhhY3Rpb25zLCBwYXJhbXMsICdhY3Rpb25zJylcblxuICAvLyBSZW5kZXIgYnV0dG9uc1xuICByZW5kZXJCdXR0b24oY29uZmlybUJ1dHRvbiwgJ2NvbmZpcm0nLCBwYXJhbXMpXG4gIHJlbmRlckJ1dHRvbihkZW55QnV0dG9uLCAnZGVueScsIHBhcmFtcylcbiAgcmVuZGVyQnV0dG9uKGNhbmNlbEJ1dHRvbiwgJ2NhbmNlbCcsIHBhcmFtcylcbiAgaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpXG5cbiAgaWYgKHBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgbG9hZGVyKVxuICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGRlbnlCdXR0b24sIGxvYWRlcilcbiAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjb25maXJtQnV0dG9uLCBsb2FkZXIpXG4gIH1cblxuICAvLyBMb2FkZXJcbiAgZG9tLnNldElubmVySHRtbChsb2FkZXIsIHBhcmFtcy5sb2FkZXJIdG1sKVxuICBkb20uYXBwbHlDdXN0b21DbGFzcyhsb2FkZXIsIHBhcmFtcywgJ2xvYWRlcicpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJ1dHRvbnNTdHlsaW5nIChjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIHJldHVybiBkb20ucmVtb3ZlQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZClcbiAgfVxuXG4gIGRvbS5hZGRDbGFzcyhbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKVxuXG4gIC8vIEJ1dHRvbnMgYmFja2dyb3VuZCBjb2xvcnNcbiAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3JcbiAgICBkb20uYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXNbJ2RlZmF1bHQtb3V0bGluZSddKVxuICB9XG4gIGlmIChwYXJhbXMuZGVueUJ1dHRvbkNvbG9yKSB7XG4gICAgZGVueUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuZGVueUJ1dHRvbkNvbG9yXG4gICAgZG9tLmFkZENsYXNzKGRlbnlCdXR0b24sIHN3YWxDbGFzc2VzWydkZWZhdWx0LW91dGxpbmUnXSlcbiAgfVxuICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yKSB7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvclxuICAgIGRvbS5hZGRDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzWydkZWZhdWx0LW91dGxpbmUnXSlcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJCdXR0b24gKGJ1dHRvbiwgYnV0dG9uVHlwZSwgcGFyYW1zKSB7XG4gIGRvbS50b2dnbGUoYnV0dG9uLCBwYXJhbXNbYHNob3cke2NhcGl0YWxpemVGaXJzdExldHRlcihidXR0b25UeXBlKX1CdXR0b25gXSwgJ2lubGluZS1ibG9jaycpXG4gIGRvbS5zZXRJbm5lckh0bWwoYnV0dG9uLCBwYXJhbXNbYCR7YnV0dG9uVHlwZX1CdXR0b25UZXh0YF0pIC8vIFNldCBjYXB0aW9uIHRleHRcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtc1tgJHtidXR0b25UeXBlfUJ1dHRvbkFyaWFMYWJlbGBdKSAvLyBBUklBIGxhYmVsXG5cbiAgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcbiAgYnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzW2J1dHRvblR5cGVdXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKGJ1dHRvbiwgcGFyYW1zLCBgJHtidXR0b25UeXBlfUJ1dHRvbmApXG4gIGRvbS5hZGRDbGFzcyhidXR0b24sIHBhcmFtc1tgJHtidXR0b25UeXBlfUJ1dHRvbkNsYXNzYF0pXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQ2xvc2VCdXR0b24gPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvbS5nZXRDbG9zZUJ1dHRvbigpXG5cbiAgZG9tLnNldElubmVySHRtbChjbG9zZUJ1dHRvbiwgcGFyYW1zLmNsb3NlQnV0dG9uSHRtbClcblxuICAvLyBDdXN0b20gY2xhc3NcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoY2xvc2VCdXR0b24sIHBhcmFtcywgJ2Nsb3NlQnV0dG9uJylcblxuICBkb20udG9nZ2xlKGNsb3NlQnV0dG9uLCBwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKVxuICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2xvc2VCdXR0b25BcmlhTGFiZWwpXG59XG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uLy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuXG5mdW5jdGlvbiBoYW5kbGVCYWNrZHJvcFBhcmFtIChjb250YWluZXIsIGJhY2tkcm9wKSB7XG4gIGlmICh0eXBlb2YgYmFja2Ryb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZHJvcFxuICB9IGVsc2UgaWYgKCFiYWNrZHJvcCkge1xuICAgIGRvbS5hZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9zaXRpb25QYXJhbSAoY29udGFpbmVyLCBwb3NpdGlvbikge1xuICBpZiAocG9zaXRpb24gaW4gc3dhbENsYXNzZXMpIHtcbiAgICBkb20uYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twb3NpdGlvbl0pXG4gIH0gZWxzZSB7XG4gICAgd2FybignVGhlIFwicG9zaXRpb25cIiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiY2VudGVyXCInKVxuICAgIGRvbS5hZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzLmNlbnRlcilcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVHcm93UGFyYW0gKGNvbnRhaW5lciwgZ3Jvdykge1xuICBpZiAoZ3JvdyAmJiB0eXBlb2YgZ3JvdyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBncm93Q2xhc3MgPSBgZ3Jvdy0ke2dyb3d9YFxuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJDb250YWluZXIgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKClcblxuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaGFuZGxlQmFja2Ryb3BQYXJhbShjb250YWluZXIsIHBhcmFtcy5iYWNrZHJvcClcblxuICBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLnBvc2l0aW9uKVxuICBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBwYXJhbXMuZ3JvdylcblxuICAvLyBDdXN0b20gY2xhc3NcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMsICdjb250YWluZXInKVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcbmltcG9ydCB7IHJlbmRlcklucHV0IH0gZnJvbSAnLi9yZW5kZXJJbnB1dC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBodG1sQ29udGFpbmVyID0gZG9tLmdldEh0bWxDb250YWluZXIoKVxuXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKGh0bWxDb250YWluZXIsIHBhcmFtcywgJ2h0bWxDb250YWluZXInKVxuXG4gIC8vIENvbnRlbnQgYXMgSFRNTFxuICBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICBkb20ucGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmh0bWwsIGh0bWxDb250YWluZXIpXG4gICAgZG9tLnNob3coaHRtbENvbnRhaW5lciwgJ2Jsb2NrJylcblxuICAvLyBDb250ZW50IGFzIHBsYWluIHRleHRcbiAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgIGh0bWxDb250YWluZXIudGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dFxuICAgIGRvbS5zaG93KGh0bWxDb250YWluZXIsICdibG9jaycpXG5cbiAgLy8gTm8gY29udGVudFxuICB9IGVsc2Uge1xuICAgIGRvbS5oaWRlKGh0bWxDb250YWluZXIpXG4gIH1cblxuICByZW5kZXJJbnB1dChpbnN0YW5jZSwgcGFyYW1zKVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlckZvb3RlciA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvbS5nZXRGb290ZXIoKVxuXG4gIGRvbS50b2dnbGUoZm9vdGVyLCBwYXJhbXMuZm9vdGVyKVxuXG4gIGlmIChwYXJhbXMuZm9vdGVyKSB7XG4gICAgZG9tLnBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5mb290ZXIsIGZvb3RlcilcbiAgfVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyhmb290ZXIsIHBhcmFtcywgJ2Zvb3RlcicpXG59XG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcywgaWNvblR5cGVzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi8uLi8uLi9wcml2YXRlUHJvcHMuanMnXG5cbmV4cG9ydCBjb25zdCByZW5kZXJJY29uID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICBjb25zdCBpY29uID0gZG9tLmdldEljb24oKVxuXG4gIC8vIGlmIHRoZSBnaXZlbiBpY29uIGFscmVhZHkgcmVuZGVyZWQsIGFwcGx5IHRoZSBzdHlsaW5nIHdpdGhvdXQgcmUtcmVuZGVyaW5nIHRoZSBpY29uXG4gIGlmIChpbm5lclBhcmFtcyAmJiBwYXJhbXMuaWNvbiA9PT0gaW5uZXJQYXJhbXMuaWNvbikge1xuICAgIC8vIEN1c3RvbSBvciBkZWZhdWx0IGNvbnRlbnRcbiAgICBzZXRDb250ZW50KGljb24sIHBhcmFtcylcblxuICAgIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghcGFyYW1zLmljb24gJiYgIXBhcmFtcy5pY29uSHRtbCkge1xuICAgIHJldHVybiBkb20uaGlkZShpY29uKVxuICB9XG5cbiAgaWYgKHBhcmFtcy5pY29uICYmIE9iamVjdC5rZXlzKGljb25UeXBlcykuaW5kZXhPZihwYXJhbXMuaWNvbikgPT09IC0xKSB7XG4gICAgZXJyb3IoYFVua25vd24gaWNvbiEgRXhwZWN0ZWQgXCJzdWNjZXNzXCIsIFwiZXJyb3JcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiIG9yIFwicXVlc3Rpb25cIiwgZ290IFwiJHtwYXJhbXMuaWNvbn1cImApXG4gICAgcmV0dXJuIGRvbS5oaWRlKGljb24pXG4gIH1cblxuICBkb20uc2hvdyhpY29uKVxuXG4gIC8vIEN1c3RvbSBvciBkZWZhdWx0IGNvbnRlbnRcbiAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpXG5cbiAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKVxuXG4gIC8vIEFuaW1hdGUgaWNvblxuICBkb20uYWRkQ2xhc3MoaWNvbiwgcGFyYW1zLnNob3dDbGFzcy5pY29uKVxufVxuXG5jb25zdCBhcHBseVN0eWxlcyA9IChpY29uLCBwYXJhbXMpID0+IHtcbiAgZm9yIChjb25zdCBpY29uVHlwZSBpbiBpY29uVHlwZXMpIHtcbiAgICBpZiAocGFyYW1zLmljb24gIT09IGljb25UeXBlKSB7XG4gICAgICBkb20ucmVtb3ZlQ2xhc3MoaWNvbiwgaWNvblR5cGVzW2ljb25UeXBlXSlcbiAgICB9XG4gIH1cbiAgZG9tLmFkZENsYXNzKGljb24sIGljb25UeXBlc1twYXJhbXMuaWNvbl0pXG5cbiAgLy8gSWNvbiBjb2xvclxuICBzZXRDb2xvcihpY29uLCBwYXJhbXMpXG5cbiAgLy8gU3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3JcbiAgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvcigpXG5cbiAgLy8gQ3VzdG9tIGNsYXNzXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKGljb24sIHBhcmFtcywgJ2ljb24nKVxufVxuXG4vLyBBZGp1c3Qgc3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggdGhlIHBvcHVwIGJhY2tncm91bmQgY29sb3JcbmNvbnN0IGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IgPSAoKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9tLmdldFBvcHVwKClcbiAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gIGNvbnN0IHN1Y2Nlc3NJY29uUGFydHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3VjY2Vzc0ljb25QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHN1Y2Nlc3NJY29uUGFydHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcG9wdXBCYWNrZ3JvdW5kQ29sb3JcbiAgfVxufVxuXG5jb25zdCBzZXRDb250ZW50ID0gKGljb24sIHBhcmFtcykgPT4ge1xuICBpY29uLnRleHRDb250ZW50ID0gJydcblxuICBpZiAocGFyYW1zLmljb25IdG1sKSB7XG4gICAgZG9tLnNldElubmVySHRtbChpY29uLCBpY29uQ29udGVudChwYXJhbXMuaWNvbkh0bWwpKVxuICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnc3VjY2VzcycpIHtcbiAgICBkb20uc2V0SW5uZXJIdG1sKGljb24sIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFwiPjwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtcmluZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcIj48L2Rpdj5cbiAgICBgKVxuICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnZXJyb3InKSB7XG4gICAgZG9tLnNldElubmVySHRtbChpY29uLCBgXG4gICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFya1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLWxlZnRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIj48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgYClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZWZhdWx0SWNvbkh0bWwgPSB7XG4gICAgICBxdWVzdGlvbjogJz8nLFxuICAgICAgd2FybmluZzogJyEnLFxuICAgICAgaW5mbzogJ2knXG4gICAgfVxuICAgIGRvbS5zZXRJbm5lckh0bWwoaWNvbiwgaWNvbkNvbnRlbnQoZGVmYXVsdEljb25IdG1sW3BhcmFtcy5pY29uXSkpXG4gIH1cbn1cblxuY29uc3Qgc2V0Q29sb3IgPSAoaWNvbiwgcGFyYW1zKSA9PiB7XG4gIGlmICghcGFyYW1zLmljb25Db2xvcikge1xuICAgIHJldHVyblxuICB9XG4gIGljb24uc3R5bGUuY29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yXG4gIGljb24uc3R5bGUuYm9yZGVyQ29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yXG4gIGZvciAoY29uc3Qgc2VsIG9mIFsnLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAnLCAnLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nJywgJy5zd2FsMi14LW1hcmstbGluZS1sZWZ0JywgJy5zd2FsMi14LW1hcmstbGluZS1yaWdodCddKSB7XG4gICAgZG9tLnNldFN0eWxlKGljb24sIHNlbCwgJ2JhY2tncm91bmRDb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpXG4gIH1cbiAgZG9tLnNldFN0eWxlKGljb24sICcuc3dhbDItc3VjY2Vzcy1yaW5nJywgJ2JvcmRlckNvbG9yJywgcGFyYW1zLmljb25Db2xvcilcbn1cblxuY29uc3QgaWNvbkNvbnRlbnQgPSAoY29udGVudCkgPT4gYDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzWydpY29uLWNvbnRlbnQnXX1cIj4ke2NvbnRlbnR9PC9kaXY+YFxuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi8uLi9jbGFzc2VzLmpzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlckltYWdlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgaW1hZ2UgPSBkb20uZ2V0SW1hZ2UoKVxuXG4gIGlmICghcGFyYW1zLmltYWdlVXJsKSB7XG4gICAgcmV0dXJuIGRvbS5oaWRlKGltYWdlKVxuICB9XG5cbiAgZG9tLnNob3coaW1hZ2UsICcnKVxuXG4gIC8vIFNyYywgYWx0XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcGFyYW1zLmltYWdlVXJsKVxuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBhcmFtcy5pbWFnZUFsdClcblxuICAvLyBXaWR0aCwgaGVpZ2h0XG4gIGRvbS5hcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aClcbiAgZG9tLmFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICdoZWlnaHQnLCBwYXJhbXMuaW1hZ2VIZWlnaHQpXG5cbiAgLy8gQ2xhc3NcbiAgaW1hZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuaW1hZ2VcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoaW1hZ2UsIHBhcmFtcywgJ2ltYWdlJylcbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHdhcm4sIGVycm9yLCBpc1Byb21pc2UgfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uLy4uLy4uL3ByaXZhdGVQcm9wcy5qcydcblxuY29uc3QgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXVxuXG5leHBvcnQgY29uc3QgcmVuZGVySW5wdXQgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSlcbiAgY29uc3QgcmVyZW5kZXIgPSAhaW5uZXJQYXJhbXMgfHwgcGFyYW1zLmlucHV0ICE9PSBpbm5lclBhcmFtcy5pbnB1dFxuXG4gIGlucHV0VHlwZXMuZm9yRWFjaCgoaW5wdXRUeXBlKSA9PiB7XG4gICAgY29uc3QgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZV1cbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvbS5nZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIGlucHV0Q2xhc3MpXG5cbiAgICAvLyBzZXQgYXR0cmlidXRlc1xuICAgIHNldEF0dHJpYnV0ZXMoaW5wdXRUeXBlLCBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKVxuXG4gICAgLy8gc2V0IGNsYXNzXG4gICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gaW5wdXRDbGFzc1xuXG4gICAgaWYgKHJlcmVuZGVyKSB7XG4gICAgICBkb20uaGlkZShpbnB1dENvbnRhaW5lcilcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgc2hvd0lucHV0KHBhcmFtcylcbiAgICB9XG4gICAgLy8gc2V0IGN1c3RvbSBjbGFzc1xuICAgIHNldEN1c3RvbUNsYXNzKHBhcmFtcylcbiAgfVxufVxuXG5jb25zdCBzaG93SW5wdXQgPSAocGFyYW1zKSA9PiB7XG4gIGlmICghcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0pIHtcbiAgICByZXR1cm4gZXJyb3IoYFVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXCJ0ZXh0XCIsIFwiZW1haWxcIiwgXCJwYXNzd29yZFwiLCBcIm51bWJlclwiLCBcInRlbFwiLCBcInNlbGVjdFwiLCBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiwgXCJ0ZXh0YXJlYVwiLCBcImZpbGVcIiBvciBcInVybFwiLCBnb3QgXCIke3BhcmFtcy5pbnB1dH1cImApXG4gIH1cblxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dClcbiAgY29uc3QgaW5wdXQgPSByZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XShpbnB1dENvbnRhaW5lciwgcGFyYW1zKVxuICBkb20uc2hvdyhpbnB1dClcblxuICAvLyBpbnB1dCBhdXRvZm9jdXNcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9tLmZvY3VzSW5wdXQoaW5wdXQpXG4gIH0pXG59XG5cbmNvbnN0IHJlbW92ZUF0dHJpYnV0ZXMgPSAoaW5wdXQpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2ldLm5hbWVcbiAgICBpZiAoIVsndHlwZScsICd2YWx1ZScsICdzdHlsZSddLmluY2x1ZGVzKGF0dHJOYW1lKSkge1xuICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGlucHV0VHlwZSwgaW5wdXRBdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9tLmdldElucHV0KGRvbS5nZXRQb3B1cCgpLCBpbnB1dFR5cGUpXG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZXMoaW5wdXQpXG5cbiAgZm9yIChjb25zdCBhdHRyIGluIGlucHV0QXR0cmlidXRlcykge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyLCBpbnB1dEF0dHJpYnV0ZXNbYXR0cl0pXG4gIH1cbn1cblxuY29uc3Qgc2V0Q3VzdG9tQ2xhc3MgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZ2V0SW5wdXRDb250YWluZXIocGFyYW1zLmlucHV0KVxuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzKSB7XG4gICAgZG9tLmFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXQpXG4gIH1cbn1cblxuY29uc3Qgc2V0SW5wdXRQbGFjZWhvbGRlciA9IChpbnB1dCwgcGFyYW1zKSA9PiB7XG4gIGlmICghaW5wdXQucGxhY2Vob2xkZXIgfHwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyXG4gIH1cbn1cblxuY29uc3Qgc2V0SW5wdXRMYWJlbCA9IChpbnB1dCwgcHJlcGVuZFRvLCBwYXJhbXMpID0+IHtcbiAgaWYgKHBhcmFtcy5pbnB1dExhYmVsKSB7XG4gICAgaW5wdXQuaWQgPSBzd2FsQ2xhc3Nlcy5pbnB1dFxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSBzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXQuaWQpXG4gICAgbGFiZWwuY2xhc3NOYW1lID0gbGFiZWxDbGFzc1xuICAgIGRvbS5hZGRDbGFzcyhsYWJlbCwgcGFyYW1zLmN1c3RvbUNsYXNzLmlucHV0TGFiZWwpXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gcGFyYW1zLmlucHV0TGFiZWxcbiAgICBwcmVwZW5kVG8uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGxhYmVsKVxuICB9XG59XG5cbmNvbnN0IGdldElucHV0Q29udGFpbmVyID0gKGlucHV0VHlwZSkgPT4ge1xuICBjb25zdCBpbnB1dENsYXNzID0gc3dhbENsYXNzZXNbaW5wdXRUeXBlXSA/IHN3YWxDbGFzc2VzW2lucHV0VHlwZV0gOiBzd2FsQ2xhc3Nlcy5pbnB1dFxuICByZXR1cm4gZG9tLmdldENoaWxkQnlDbGFzcyhkb20uZ2V0UG9wdXAoKSwgaW5wdXRDbGFzcylcbn1cblxuY29uc3QgcmVuZGVySW5wdXRUeXBlID0ge31cblxucmVuZGVySW5wdXRUeXBlLnRleHQgPVxucmVuZGVySW5wdXRUeXBlLmVtYWlsID1cbnJlbmRlcklucHV0VHlwZS5wYXNzd29yZCA9XG5yZW5kZXJJbnB1dFR5cGUubnVtYmVyID1cbnJlbmRlcklucHV0VHlwZS50ZWwgPVxucmVuZGVySW5wdXRUeXBlLnVybCA9IChpbnB1dCwgcGFyYW1zKSA9PiB7XG4gIGlmICh0eXBlb2YgcGFyYW1zLmlucHV0VmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlXG4gIH0gZWxzZSBpZiAoIWlzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkpIHtcbiAgICB3YXJuKGBVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRWYWx1ZSEgRXhwZWN0ZWQgXCJzdHJpbmdcIiwgXCJudW1iZXJcIiBvciBcIlByb21pc2VcIiwgZ290IFwiJHt0eXBlb2YgcGFyYW1zLmlucHV0VmFsdWV9XCJgKVxuICB9XG4gIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpXG4gIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcylcbiAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dFxuICByZXR1cm4gaW5wdXRcbn1cblxucmVuZGVySW5wdXRUeXBlLmZpbGUgPSAoaW5wdXQsIHBhcmFtcykgPT4ge1xuICBzZXRJbnB1dExhYmVsKGlucHV0LCBpbnB1dCwgcGFyYW1zKVxuICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpXG4gIHJldHVybiBpbnB1dFxufVxuXG5yZW5kZXJJbnB1dFR5cGUucmFuZ2UgPSAocmFuZ2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICBjb25zdCByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpXG4gIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZVxuICByYW5nZUlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXRcbiAgcmFuZ2VPdXRwdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZVxuICBzZXRJbnB1dExhYmVsKHJhbmdlSW5wdXQsIHJhbmdlLCBwYXJhbXMpXG4gIHJldHVybiByYW5nZVxufVxuXG5yZW5kZXJJbnB1dFR5cGUuc2VsZWN0ID0gKHNlbGVjdCwgcGFyYW1zKSA9PiB7XG4gIHNlbGVjdC50ZXh0Q29udGVudCA9ICcnXG4gIGlmIChwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBkb20uc2V0SW5uZXJIdG1sKHBsYWNlaG9sZGVyLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcilcbiAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnXG4gICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlXG4gICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKVxuICB9XG4gIHNldElucHV0TGFiZWwoc2VsZWN0LCBzZWxlY3QsIHBhcmFtcylcbiAgcmV0dXJuIHNlbGVjdFxufVxuXG5yZW5kZXJJbnB1dFR5cGUucmFkaW8gPSAocmFkaW8pID0+IHtcbiAgcmFkaW8udGV4dENvbnRlbnQgPSAnJ1xuICByZXR1cm4gcmFkaW9cbn1cblxucmVuZGVySW5wdXRUeXBlLmNoZWNrYm94ID0gKGNoZWNrYm94Q29udGFpbmVyLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb20uZ2V0SW5wdXQoZG9tLmdldFBvcHVwKCksICdjaGVja2JveCcpXG4gIGNoZWNrYm94LnZhbHVlID0gMVxuICBjaGVja2JveC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKVxuICBjb25zdCBsYWJlbCA9IGNoZWNrYm94Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICBkb20uc2V0SW5uZXJIdG1sKGxhYmVsLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcilcbiAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG59XG5cbnJlbmRlcklucHV0VHlwZS50ZXh0YXJlYSA9ICh0ZXh0YXJlYSwgcGFyYW1zKSA9PiB7XG4gIHRleHRhcmVhLnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWVcbiAgc2V0SW5wdXRQbGFjZWhvbGRlcih0ZXh0YXJlYSwgcGFyYW1zKVxuICBzZXRJbnB1dExhYmVsKHRleHRhcmVhLCB0ZXh0YXJlYSwgcGFyYW1zKVxuXG4gIGNvbnN0IGdldE1hcmdpbiA9IChlbCkgPT4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLm1hcmdpblJpZ2h0KVxuXG4gIHNldFRpbWVvdXQoKCkgPT4geyAvLyAjMjI5MVxuICAgIGlmICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7IC8vICMxNjk5XG4gICAgICBjb25zdCBpbml0aWFsUG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbS5nZXRQb3B1cCgpKS53aWR0aClcbiAgICAgIGNvbnN0IHRleHRhcmVhUmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dGFyZWFXaWR0aCA9IHRleHRhcmVhLm9mZnNldFdpZHRoICsgZ2V0TWFyZ2luKHRleHRhcmVhKVxuICAgICAgICBpZiAodGV4dGFyZWFXaWR0aCA+IGluaXRpYWxQb3B1cFdpZHRoKSB7XG4gICAgICAgICAgZG9tLmdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBgJHt0ZXh0YXJlYVdpZHRofXB4YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbS5nZXRQb3B1cCgpLnN0eWxlLndpZHRoID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcih0ZXh0YXJlYVJlc2l6ZUhhbmRsZXIpLm9ic2VydmUodGV4dGFyZWEsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ11cbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB0ZXh0YXJlYVxufVxuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi8uLi9jbGFzc2VzLmpzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBvcHVwID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcigpXG4gIGNvbnN0IHBvcHVwID0gZG9tLmdldFBvcHVwKClcblxuICAvLyBXaWR0aFxuICBpZiAocGFyYW1zLnRvYXN0KSB7IC8vICMyMTcwXG4gICAgZG9tLmFwcGx5TnVtZXJpY2FsU3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpXG4gICAgcG9wdXAuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICBwb3B1cC5pbnNlcnRCZWZvcmUoZG9tLmdldExvYWRlcigpLCBkb20uZ2V0SWNvbigpKVxuICB9IGVsc2Uge1xuICAgIGRvbS5hcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpXG4gIH1cblxuICAvLyBQYWRkaW5nXG4gIGRvbS5hcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAncGFkZGluZycsIHBhcmFtcy5wYWRkaW5nKVxuXG4gIC8vIEJhY2tncm91bmRcbiAgaWYgKHBhcmFtcy5iYWNrZ3JvdW5kKSB7XG4gICAgcG9wdXAuc3R5bGUuYmFja2dyb3VuZCA9IHBhcmFtcy5iYWNrZ3JvdW5kXG4gIH1cblxuICBkb20uaGlkZShkb20uZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSlcblxuICAvLyBDbGFzc2VzXG4gIGFkZENsYXNzZXMocG9wdXAsIHBhcmFtcylcbn1cblxuY29uc3QgYWRkQ2xhc3NlcyA9IChwb3B1cCwgcGFyYW1zKSA9PiB7XG4gIC8vIERlZmF1bHQgQ2xhc3MgKyBzaG93Q2xhc3Mgd2hlbiB1cGRhdGluZyBTd2FsLnVwZGF0ZSh7fSlcbiAgcG9wdXAuY2xhc3NOYW1lID0gYCR7c3dhbENsYXNzZXMucG9wdXB9ICR7ZG9tLmlzVmlzaWJsZShwb3B1cCkgPyBwYXJhbXMuc2hvd0NsYXNzLnBvcHVwIDogJyd9YFxuXG4gIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICBkb20uYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKVxuICAgIGRvbS5hZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpXG4gIH0gZWxzZSB7XG4gICAgZG9tLmFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbClcbiAgfVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyhwb3B1cCwgcGFyYW1zLCAncG9wdXAnKVxuICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICBkb20uYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcylcbiAgfVxuXG4gIC8vIEljb24gY2xhc3MgKCMxODQyKVxuICBpZiAocGFyYW1zLmljb24pIHtcbiAgICBkb20uYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW2BpY29uLSR7cGFyYW1zLmljb259YF0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5cbmNvbnN0IGNyZWF0ZVN0ZXBFbGVtZW50ID0gKHN0ZXApID0+IHtcbiAgY29uc3Qgc3RlcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICBkb20uYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcCddKVxuICBkb20uc2V0SW5uZXJIdG1sKHN0ZXBFbCwgc3RlcClcbiAgcmV0dXJuIHN0ZXBFbFxufVxuXG5jb25zdCBjcmVhdGVMaW5lRWxlbWVudCA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgbGluZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICBkb20uYWRkQ2xhc3MobGluZUVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcC1saW5lJ10pXG4gIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKSB7XG4gICAgbGluZUVsLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZVxuICB9XG4gIHJldHVybiBsaW5lRWxcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2dyZXNzU3RlcHMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZG9tLmdldFByb2dyZXNzU3RlcHMoKVxuICBpZiAoIXBhcmFtcy5wcm9ncmVzc1N0ZXBzIHx8IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBkb20uaGlkZShwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKVxuICB9XG5cbiAgZG9tLnNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcilcbiAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnXG4gIGlmIChwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCA+PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggJyArXG4gICAgICAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknXG4gICAgKVxuICB9XG5cbiAgcGFyYW1zLnByb2dyZXNzU3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGVwRWwgPSBjcmVhdGVTdGVwRWxlbWVudChzdGVwKVxuICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlcEVsKVxuICAgIGlmIChpbmRleCA9PT0gcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydhY3RpdmUtcHJvZ3Jlc3Mtc3RlcCddKVxuICAgIH1cblxuICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgbGluZUVsID0gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKVxuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lRWwpXG4gICAgfVxuICB9KVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRpdGxlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb20uZ2V0VGl0bGUoKVxuXG4gIGRvbS50b2dnbGUodGl0bGUsIHBhcmFtcy50aXRsZSB8fCBwYXJhbXMudGl0bGVUZXh0LCAnYmxvY2snKVxuXG4gIGlmIChwYXJhbXMudGl0bGUpIHtcbiAgICBkb20ucGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLnRpdGxlLCB0aXRsZSlcbiAgfVxuXG4gIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dFxuICB9XG5cbiAgLy8gQ3VzdG9tIGNsYXNzXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKHRpdGxlLCBwYXJhbXMsICd0aXRsZScpXG59XG4iLCJpbXBvcnQgZGVmYXVsdFBhcmFtcyBmcm9tICcuL3BhcmFtcy5qcydcbmltcG9ydCB7IHRvQXJyYXksIGNhcGl0YWxpemVGaXJzdExldHRlciwgd2FybiB9IGZyb20gJy4vdXRpbHMuanMnXG5cbmNvbnN0IHN3YWxTdHJpbmdQYXJhbXMgPSBbJ3N3YWwtdGl0bGUnLCAnc3dhbC1odG1sJywgJ3N3YWwtZm9vdGVyJ11cblxuZXhwb3J0IGNvbnN0IGdldFRlbXBsYXRlUGFyYW1zID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IHR5cGVvZiBwYXJhbXMudGVtcGxhdGUgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGVtcGxhdGUpIDogcGFyYW1zLnRlbXBsYXRlXG4gIGlmICghdGVtcGxhdGUpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCB0ZW1wbGF0ZUNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50XG5cbiAgc2hvd1dhcm5pbmdzRm9yRWxlbWVudHModGVtcGxhdGVDb250ZW50KVxuXG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZ2V0U3dhbFBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpLFxuICAgIGdldFN3YWxCdXR0b25zKHRlbXBsYXRlQ29udGVudCksXG4gICAgZ2V0U3dhbEltYWdlKHRlbXBsYXRlQ29udGVudCksXG4gICAgZ2V0U3dhbEljb24odGVtcGxhdGVDb250ZW50KSxcbiAgICBnZXRTd2FsSW5wdXQodGVtcGxhdGVDb250ZW50KSxcbiAgICBnZXRTd2FsU3RyaW5nUGFyYW1zKHRlbXBsYXRlQ29udGVudCwgc3dhbFN0cmluZ1BhcmFtcyksXG4gIClcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBnZXRTd2FsUGFyYW1zID0gKHRlbXBsYXRlQ29udGVudCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICB0b0FycmF5KHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLXBhcmFtJykpLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhwYXJhbSwgWyduYW1lJywgJ3ZhbHVlJ10pXG4gICAgY29uc3QgcGFyYW1OYW1lID0gcGFyYW0uZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICBsZXQgdmFsdWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRQYXJhbXNbcGFyYW1OYW1lXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGVmYXVsdFBhcmFtc1twYXJhbU5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH1cbiAgICByZXN1bHRbcGFyYW1OYW1lXSA9IHZhbHVlXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZ2V0U3dhbEJ1dHRvbnMgPSAodGVtcGxhdGVDb250ZW50KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHRvQXJyYXkodGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtYnV0dG9uJykpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoYnV0dG9uLCBbJ3R5cGUnLCAnY29sb3InLCAnYXJpYS1sYWJlbCddKVxuICAgIGNvbnN0IHR5cGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICByZXN1bHRbYCR7dHlwZX1CdXR0b25UZXh0YF0gPSBidXR0b24uaW5uZXJIVE1MXG4gICAgcmVzdWx0W2BzaG93JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSl9QnV0dG9uYF0gPSB0cnVlXG4gICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgIHJlc3VsdFtgJHt0eXBlfUJ1dHRvbkNvbG9yYF0gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdjb2xvcicpXG4gICAgfVxuICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgIHJlc3VsdFtgJHt0eXBlfUJ1dHRvbkFyaWFMYWJlbGBdID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGdldFN3YWxJbWFnZSA9ICh0ZW1wbGF0ZUNvbnRlbnQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgY29uc3QgaW1hZ2UgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pbWFnZScpXG4gIGlmIChpbWFnZSkge1xuICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW1hZ2UsIFsnc3JjJywgJ3dpZHRoJywgJ2hlaWdodCcsICdhbHQnXSlcbiAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdzcmMnKSkge1xuICAgICAgcmVzdWx0LmltYWdlVXJsID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgIH1cbiAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCd3aWR0aCcpKSB7XG4gICAgICByZXN1bHQuaW1hZ2VXaWR0aCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnd2lkdGgnKVxuICAgIH1cbiAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdoZWlnaHQnKSkge1xuICAgICAgcmVzdWx0LmltYWdlSGVpZ2h0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKVxuICAgIH1cbiAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdhbHQnKSkge1xuICAgICAgcmVzdWx0LmltYWdlQWx0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGdldFN3YWxJY29uID0gKHRlbXBsYXRlQ29udGVudCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICBjb25zdCBpY29uID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaWNvbicpXG4gIGlmIChpY29uKSB7XG4gICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpY29uLCBbJ3R5cGUnLCAnY29sb3InXSlcbiAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ3R5cGUnKSkge1xuICAgICAgcmVzdWx0Lmljb24gPSBpY29uLmdldEF0dHJpYnV0ZSgndHlwZScpXG4gICAgfVxuICAgIGlmIChpY29uLmhhc0F0dHJpYnV0ZSgnY29sb3InKSkge1xuICAgICAgcmVzdWx0Lmljb25Db2xvciA9IGljb24uZ2V0QXR0cmlidXRlKCdjb2xvcicpXG4gICAgfVxuICAgIHJlc3VsdC5pY29uSHRtbCA9IGljb24uaW5uZXJIVE1MXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBnZXRTd2FsSW5wdXQgPSAodGVtcGxhdGVDb250ZW50KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIGNvbnN0IGlucHV0ID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW5wdXQnKVxuICBpZiAoaW5wdXQpIHtcbiAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGlucHV0LCBbJ3R5cGUnLCAnbGFiZWwnLCAncGxhY2Vob2xkZXInLCAndmFsdWUnXSlcbiAgICByZXN1bHQuaW5wdXQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCAndGV4dCdcbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdsYWJlbCcpKSB7XG4gICAgICByZXN1bHQuaW5wdXRMYWJlbCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbGFiZWwnKVxuICAgIH1cbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICByZXN1bHQuaW5wdXRQbGFjZWhvbGRlciA9IGlucHV0LmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKVxuICAgIH1cbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICByZXN1bHQuaW5wdXRWYWx1ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgIH1cbiAgfVxuICBjb25zdCBpbnB1dE9wdGlvbnMgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1pbnB1dC1vcHRpb24nKVxuICBpZiAoaW5wdXRPcHRpb25zLmxlbmd0aCkge1xuICAgIHJlc3VsdC5pbnB1dE9wdGlvbnMgPSB7fVxuICAgIHRvQXJyYXkoaW5wdXRPcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMob3B0aW9uLCBbJ3ZhbHVlJ10pXG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBvcHRpb24uaW5uZXJIVE1MXG4gICAgICByZXN1bHQuaW5wdXRPcHRpb25zW29wdGlvblZhbHVlXSA9IG9wdGlvbk5hbWVcbiAgICB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZ2V0U3dhbFN0cmluZ1BhcmFtcyA9ICh0ZW1wbGF0ZUNvbnRlbnQsIHBhcmFtTmFtZXMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgZm9yIChjb25zdCBpIGluIHBhcmFtTmFtZXMpIHtcbiAgICBjb25zdCBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldXG4gICAgY29uc3QgdGFnID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1OYW1lKVxuICAgIGlmICh0YWcpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXModGFnLCBbXSlcbiAgICAgIHJlc3VsdFtwYXJhbU5hbWUucmVwbGFjZSgvXnN3YWwtLywgJycpXSA9IHRhZy5pbm5lckhUTUwudHJpbSgpXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3Qgc2hvd1dhcm5pbmdzRm9yRWxlbWVudHMgPSAodGVtcGxhdGUpID0+IHtcbiAgY29uc3QgYWxsb3dlZEVsZW1lbnRzID0gc3dhbFN0cmluZ1BhcmFtcy5jb25jYXQoW1xuICAgICdzd2FsLXBhcmFtJyxcbiAgICAnc3dhbC1idXR0b24nLFxuICAgICdzd2FsLWltYWdlJyxcbiAgICAnc3dhbC1pY29uJyxcbiAgICAnc3dhbC1pbnB1dCcsXG4gICAgJ3N3YWwtaW5wdXQtb3B0aW9uJyxcbiAgXSlcbiAgdG9BcnJheSh0ZW1wbGF0ZS5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGFsbG93ZWRFbGVtZW50cy5pbmRleE9mKHRhZ05hbWUpID09PSAtMSkge1xuICAgICAgd2FybihgVW5yZWNvZ25pemVkIGVsZW1lbnQgPCR7dGFnTmFtZX0+YClcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMgPSAoZWwsIGFsbG93ZWRBdHRyaWJ1dGVzKSA9PiB7XG4gIHRvQXJyYXkoZWwuYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlLm5hbWUpID09PSAtMSkge1xuICAgICAgd2FybihbXG4gICAgICAgIGBVbnJlY29nbml6ZWQgYXR0cmlidXRlIFwiJHthdHRyaWJ1dGUubmFtZX1cIiBvbiA8JHtlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9Pi5gLFxuICAgICAgICBgJHthbGxvd2VkQXR0cmlidXRlcy5sZW5ndGggPyBgQWxsb3dlZCBhdHRyaWJ1dGVzIGFyZTogJHthbGxvd2VkQXR0cmlidXRlcy5qb2luKCcsICcpfWAgOiAnVG8gc2V0IHRoZSB2YWx1ZSwgdXNlIEhUTUwgd2l0aGluIHRoZSBlbGVtZW50Lid9YFxuICAgICAgXSlcbiAgICB9XG4gIH0pXG59XG4iLCIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi91dGlscy9jbGFzc2VzLmpzJ1xuXG4vLyBGaXggaU9TIHNjcm9sbGluZyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTYyNjMwMlxuXG5leHBvcnQgY29uc3QgaU9TZml4ID0gKCkgPT4ge1xuICBjb25zdCBpT1MgPSAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSkgfHwgKG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKVxuICBpZiAoaU9TICYmICFkb20uaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIGNvbnN0IG9mZnNldCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBgJHtvZmZzZXQgKiAtMX1weGBcbiAgICBkb20uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KVxuICAgIGxvY2tCb2R5U2Nyb2xsKClcbiAgICBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcygpIC8vICMxOTQ4XG4gIH1cbn1cblxuY29uc3QgYWRkQm90dG9tUGFkZGluZ0ZvclRhbGxQb3B1cHMgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZmFyaSA9ICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oQ3JpT1N8RnhpT1N8RWRnaU9TfFlhQnJvd3NlcnxVQ0Jyb3dzZXIpL2kpXG4gIGlmIChzYWZhcmkpIHtcbiAgICBjb25zdCBib3R0b21QYW5lbEhlaWdodCA9IDQ0XG4gICAgaWYgKGRvbS5nZXRQb3B1cCgpLnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCAtIGJvdHRvbVBhbmVsSGVpZ2h0KSB7XG4gICAgICBkb20uZ2V0Q29udGFpbmVyKCkuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGAke2JvdHRvbVBhbmVsSGVpZ2h0fXB4YFxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBsb2NrQm9keVNjcm9sbCA9ICgpID0+IHsgLy8gIzEyNDZcbiAgY29uc3QgY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcigpXG4gIGxldCBwcmV2ZW50VG91Y2hNb3ZlXG4gIGNvbnRhaW5lci5vbnRvdWNoc3RhcnQgPSAoZSkgPT4ge1xuICAgIHByZXZlbnRUb3VjaE1vdmUgPSBzaG91bGRQcmV2ZW50VG91Y2hNb3ZlKGUpXG4gIH1cbiAgY29udGFpbmVyLm9udG91Y2htb3ZlID0gKGUpID0+IHtcbiAgICBpZiAocHJldmVudFRvdWNoTW92ZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNob3VsZFByZXZlbnRUb3VjaE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIoKVxuICBpZiAoaXNTdHlseXMoZXZlbnQpIHx8IGlzWm9vbShldmVudCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAodGFyZ2V0ID09PSBjb250YWluZXIpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChcbiAgICAhZG9tLmlzU2Nyb2xsYWJsZShjb250YWluZXIpICYmXG4gICAgdGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgLy8gIzE2MDNcbiAgICB0YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyAmJiAvLyAjMjI2NlxuICAgICEoXG4gICAgICBkb20uaXNTY3JvbGxhYmxlKGRvbS5nZXRIdG1sQ29udGFpbmVyKCkpICYmIC8vICMxOTQ0XG4gICAgICBkb20uZ2V0SHRtbENvbnRhaW5lcigpLmNvbnRhaW5zKHRhcmdldClcbiAgICApXG4gICkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IGlzU3R5bHlzID0gKGV2ZW50KSA9PiB7IC8vICMxNzg2XG4gIHJldHVybiBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoICYmIGV2ZW50LnRvdWNoZXNbMF0udG91Y2hUeXBlID09PSAnc3R5bHVzJ1xufVxuXG5jb25zdCBpc1pvb20gPSAoZXZlbnQpID0+IHsgLy8gIzE4OTFcbiAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxXG59XG5cbmV4cG9ydCBjb25zdCB1bmRvSU9TZml4ID0gKCkgPT4ge1xuICBpZiAoZG9tLmhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApXG4gICAgZG9tLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeClcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAob2Zmc2V0ICogLTEpXG4gIH1cbn1cbiIsIi8vIERldGVjdCBOb2RlIGVudlxuZXhwb3J0IGNvbnN0IGlzTm9kZUVudiA9ICgpID0+IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbS9pbmRleC5qcydcbmltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgZml4U2Nyb2xsYmFyIH0gZnJvbSAnLi9zY3JvbGxiYXJGaXguanMnXG5pbXBvcnQgeyBpT1NmaXggfSBmcm9tICcuL2lvc0ZpeC5qcydcbmltcG9ydCB7IHNldEFyaWFIaWRkZW4gfSBmcm9tICcuL2FyaWEuanMnXG5pbXBvcnQgZ2xvYmFsU3RhdGUgZnJvbSAnLi4vZ2xvYmFsU3RhdGUuanMnXG5cbmV4cG9ydCBjb25zdCBTSE9XX0NMQVNTX1RJTUVPVVQgPSAxMFxuXG4vKipcbiAqIE9wZW4gcG9wdXAsIGFkZCBuZWNlc3NhcnkgY2xhc3NlcyBhbmQgc3R5bGVzLCBmaXggc2Nyb2xsYmFyXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICovXG5leHBvcnQgY29uc3Qgb3BlblBvcHVwID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKClcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuXG4gIGlmICh0eXBlb2YgcGFyYW1zLndpbGxPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFyYW1zLndpbGxPcGVuKHBvcHVwKVxuICB9XG5cbiAgY29uc3QgYm9keVN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpXG4gIGNvbnN0IGluaXRpYWxCb2R5T3ZlcmZsb3cgPSBib2R5U3R5bGVzLm92ZXJmbG93WVxuICBhZGRDbGFzc2VzKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcylcblxuICAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNldFNjcm9sbGluZ1Zpc2liaWxpdHkoY29udGFpbmVyLCBwb3B1cClcbiAgfSwgU0hPV19DTEFTU19USU1FT1VUKVxuXG4gIGlmIChkb20uaXNNb2RhbCgpKSB7XG4gICAgZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgcGFyYW1zLnNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpXG4gICAgc2V0QXJpYUhpZGRlbigpXG4gIH1cblxuICBpZiAoIWRvbS5pc1RvYXN0KCkgJiYgIWdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmRpZE9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHBhcmFtcy5kaWRPcGVuKHBvcHVwKSlcbiAgfVxuXG4gIGRvbS5yZW1vdmVDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pXG59XG5cbmNvbnN0IHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBwb3B1cCkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIoKVxuICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGRvbS5hbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZClcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJ1xufVxuXG5jb25zdCBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5ID0gKGNvbnRhaW5lciwgcG9wdXApID0+IHtcbiAgaWYgKGRvbS5hbmltYXRpb25FbmRFdmVudCAmJiBkb20uaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKSkge1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoZG9tLmFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKVxuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0bydcbiAgfVxufVxuXG5jb25zdCBmaXhTY3JvbGxDb250YWluZXIgPSAoY29udGFpbmVyLCBzY3JvbGxiYXJQYWRkaW5nLCBpbml0aWFsQm9keU92ZXJmbG93KSA9PiB7XG4gIGlPU2ZpeCgpXG5cbiAgaWYgKHNjcm9sbGJhclBhZGRpbmcgJiYgaW5pdGlhbEJvZHlPdmVyZmxvdyAhPT0gJ2hpZGRlbicpIHtcbiAgICBmaXhTY3JvbGxiYXIoKVxuICB9XG5cbiAgLy8gc3dlZXRhbGVydDIvaXNzdWVzLzEyNDdcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IDBcbiAgfSlcbn1cblxuY29uc3QgYWRkQ2xhc3NlcyA9IChjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpID0+IHtcbiAgZG9tLmFkZENsYXNzKGNvbnRhaW5lciwgcGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcClcbiAgLy8gdGhlIHdvcmthcm91bmQgd2l0aCBzZXR0aW5nL3Vuc2V0dGluZyBvcGFjaXR5IGlzIG5lZWRlZCBmb3IgIzIwMTkgYW5kIDIwNTlcbiAgcG9wdXAuc3R5bGUuc2V0UHJvcGVydHkoJ29wYWNpdHknLCAnMCcsICdpbXBvcnRhbnQnKVxuICBkb20uc2hvdyhwb3B1cCwgJ2dyaWQnKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyBBbmltYXRlIHBvcHVwIHJpZ2h0IGFmdGVyIHNob3dpbmcgaXRcbiAgICBkb20uYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5zaG93Q2xhc3MucG9wdXApXG4gICAgLy8gYW5kIHJlbW92ZSB0aGUgb3BhY2l0eSB3b3JrYXJvdW5kXG4gICAgcG9wdXAuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKVxuICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpIC8vIDEwbXMgaW4gb3JkZXIgdG8gZml4ICMyMDYyXG5cbiAgZG9tLmFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlcy5zaG93bilcbiAgaWYgKHBhcmFtcy5oZWlnaHRBdXRvICYmIHBhcmFtcy5iYWNrZHJvcCAmJiAhcGFyYW1zLnRvYXN0KSB7XG4gICAgZG9tLmFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgd2Fybiwgd2FybkFib3V0RGVwcmVjYXRpb24gfSBmcm9tICcuLi91dGlscy91dGlscy5qcydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGl0bGVUZXh0OiAnJyxcbiAgdGV4dDogJycsXG4gIGh0bWw6ICcnLFxuICBmb290ZXI6ICcnLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIGljb25Db2xvcjogdW5kZWZpbmVkLFxuICBpY29uSHRtbDogdW5kZWZpbmVkLFxuICB0ZW1wbGF0ZTogdW5kZWZpbmVkLFxuICB0b2FzdDogZmFsc2UsXG4gIHNob3dDbGFzczoge1xuICAgIHBvcHVwOiAnc3dhbDItc2hvdycsXG4gICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1zaG93JyxcbiAgICBpY29uOiAnc3dhbDItaWNvbi1zaG93JyxcbiAgfSxcbiAgaGlkZUNsYXNzOiB7XG4gICAgcG9wdXA6ICdzd2FsMi1oaWRlJyxcbiAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLWhpZGUnLFxuICAgIGljb246ICdzd2FsMi1pY29uLWhpZGUnLFxuICB9LFxuICBjdXN0b21DbGFzczoge30sXG4gIHRhcmdldDogJ2JvZHknLFxuICBiYWNrZHJvcDogdHJ1ZSxcbiAgaGVpZ2h0QXV0bzogdHJ1ZSxcbiAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICBhbGxvd0VudGVyS2V5OiB0cnVlLFxuICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICBrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiBmYWxzZSxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dEZW55QnV0dG9uOiBmYWxzZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIHByZUNvbmZpcm06IHVuZGVmaW5lZCxcbiAgcHJlRGVueTogdW5kZWZpbmVkLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICBkZW55QnV0dG9uVGV4dDogJ05vJyxcbiAgZGVueUJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGRlbnlCdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY2FuY2VsQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gIHJldmVyc2VCdXR0b25zOiBmYWxzZSxcbiAgZm9jdXNDb25maXJtOiB0cnVlLFxuICBmb2N1c0Rlbnk6IGZhbHNlLFxuICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gIHJldHVybkZvY3VzOiB0cnVlLFxuICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuICBjbG9zZUJ1dHRvbkh0bWw6ICcmdGltZXM7JyxcbiAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gIGxvYWRlckh0bWw6ICcnLFxuICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgc2hvd0xvYWRlck9uRGVueTogZmFsc2UsXG4gIGltYWdlVXJsOiB1bmRlZmluZWQsXG4gIGltYWdlV2lkdGg6IHVuZGVmaW5lZCxcbiAgaW1hZ2VIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaW1hZ2VBbHQ6ICcnLFxuICB0aW1lcjogdW5kZWZpbmVkLFxuICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgcGFkZGluZzogdW5kZWZpbmVkLFxuICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXG4gIGlucHV0OiB1bmRlZmluZWQsXG4gIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICBpbnB1dExhYmVsOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIGlucHV0T3B0aW9uczoge30sXG4gIGlucHV0QXV0b1RyaW06IHRydWUsXG4gIGlucHV0QXR0cmlidXRlczoge30sXG4gIGlucHV0VmFsaWRhdG9yOiB1bmRlZmluZWQsXG4gIHJldHVybklucHV0VmFsdWVPbkRlbnk6IGZhbHNlLFxuICB2YWxpZGF0aW9uTWVzc2FnZTogdW5kZWZpbmVkLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogdW5kZWZpbmVkLFxuICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IHVuZGVmaW5lZCxcbiAgd2lsbE9wZW46IHVuZGVmaW5lZCxcbiAgZGlkT3BlbjogdW5kZWZpbmVkLFxuICBkaWRSZW5kZXI6IHVuZGVmaW5lZCxcbiAgd2lsbENsb3NlOiB1bmRlZmluZWQsXG4gIGRpZENsb3NlOiB1bmRlZmluZWQsXG4gIGRpZERlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgc2Nyb2xsYmFyUGFkZGluZzogdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRhYmxlUGFyYW1zID0gW1xuICAnYWxsb3dFc2NhcGVLZXknLFxuICAnYWxsb3dPdXRzaWRlQ2xpY2snLFxuICAnYmFja2dyb3VuZCcsXG4gICdidXR0b25zU3R5bGluZycsXG4gICdjYW5jZWxCdXR0b25BcmlhTGFiZWwnLFxuICAnY2FuY2VsQnV0dG9uQ29sb3InLFxuICAnY2FuY2VsQnV0dG9uVGV4dCcsXG4gICdjbG9zZUJ1dHRvbkFyaWFMYWJlbCcsXG4gICdjbG9zZUJ1dHRvbkh0bWwnLFxuICAnY29uZmlybUJ1dHRvbkFyaWFMYWJlbCcsXG4gICdjb25maXJtQnV0dG9uQ29sb3InLFxuICAnY29uZmlybUJ1dHRvblRleHQnLFxuICAnY3VycmVudFByb2dyZXNzU3RlcCcsXG4gICdjdXN0b21DbGFzcycsXG4gICdkZW55QnV0dG9uQXJpYUxhYmVsJyxcbiAgJ2RlbnlCdXR0b25Db2xvcicsXG4gICdkZW55QnV0dG9uVGV4dCcsXG4gICdkaWRDbG9zZScsXG4gICdkaWREZXN0cm95JyxcbiAgJ2Zvb3RlcicsXG4gICdoaWRlQ2xhc3MnLFxuICAnaHRtbCcsXG4gICdpY29uJyxcbiAgJ2ljb25Db2xvcicsXG4gICdpY29uSHRtbCcsXG4gICdpbWFnZUFsdCcsXG4gICdpbWFnZUhlaWdodCcsXG4gICdpbWFnZVVybCcsXG4gICdpbWFnZVdpZHRoJyxcbiAgJ3ByZUNvbmZpcm0nLFxuICAncHJlRGVueScsXG4gICdwcm9ncmVzc1N0ZXBzJyxcbiAgJ3JldHVybkZvY3VzJyxcbiAgJ3JldmVyc2VCdXR0b25zJyxcbiAgJ3Nob3dDYW5jZWxCdXR0b24nLFxuICAnc2hvd0Nsb3NlQnV0dG9uJyxcbiAgJ3Nob3dDb25maXJtQnV0dG9uJyxcbiAgJ3Nob3dEZW55QnV0dG9uJyxcbiAgJ3RleHQnLFxuICAndGl0bGUnLFxuICAndGl0bGVUZXh0JyxcbiAgJ3dpbGxDbG9zZScsXG5dXG5cbmV4cG9ydCBjb25zdCBkZXByZWNhdGVkUGFyYW1zID0ge31cblxuY29uc3QgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMgPSBbXG4gICdhbGxvd091dHNpZGVDbGljaycsXG4gICdhbGxvd0VudGVyS2V5JyxcbiAgJ2JhY2tkcm9wJyxcbiAgJ2ZvY3VzQ29uZmlybScsXG4gICdmb2N1c0RlbnknLFxuICAnZm9jdXNDYW5jZWwnLFxuICAncmV0dXJuRm9jdXMnLFxuICAnaGVpZ2h0QXV0bycsXG4gICdrZXlkb3duTGlzdGVuZXJDYXB0dXJlJ1xuXVxuXG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZFBhcmFtZXRlciA9IChwYXJhbU5hbWUpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0UGFyYW1zLCBwYXJhbU5hbWUpXG59XG5cbi8qKlxuICogSXMgdmFsaWQgcGFyYW1ldGVyIGZvciBTd2FsLnVwZGF0ZSgpIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5leHBvcnQgY29uc3QgaXNVcGRhdGFibGVQYXJhbWV0ZXIgPSAocGFyYW1OYW1lKSA9PiB7XG4gIHJldHVybiB1cGRhdGFibGVQYXJhbXMuaW5kZXhPZihwYXJhbU5hbWUpICE9PSAtMVxufVxuXG4vKipcbiAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cbmV4cG9ydCBjb25zdCBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIgPSAocGFyYW1OYW1lKSA9PiB7XG4gIHJldHVybiBkZXByZWNhdGVkUGFyYW1zW3BhcmFtTmFtZV1cbn1cblxuY29uc3QgY2hlY2tJZlBhcmFtSXNWYWxpZCA9IChwYXJhbSkgPT4ge1xuICBpZiAoIWlzVmFsaWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgd2FybihgVW5rbm93biBwYXJhbWV0ZXIgXCIke3BhcmFtfVwiYClcbiAgfVxufVxuXG5jb25zdCBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQgPSAocGFyYW0pID0+IHtcbiAgaWYgKHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zLmluY2x1ZGVzKHBhcmFtKSkge1xuICAgIHdhcm4oYFRoZSBwYXJhbWV0ZXIgXCIke3BhcmFtfVwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c2ApXG4gIH1cbn1cblxuY29uc3QgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkID0gKHBhcmFtKSA9PiB7XG4gIGlmIChpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgd2FybkFib3V0RGVwcmVjYXRpb24ocGFyYW0sIGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpXG4gIH1cbn1cblxuLyoqXG4gKiBTaG93IHJlbGV2YW50IHdhcm5pbmdzIGZvciBnaXZlbiBwYXJhbXNcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKi9cbmV4cG9ydCBjb25zdCBzaG93V2FybmluZ3NGb3JQYXJhbXMgPSAocGFyYW1zKSA9PiB7XG4gIGlmICghcGFyYW1zLmJhY2tkcm9wICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpXG4gIH1cblxuICBmb3IgKGNvbnN0IHBhcmFtIGluIHBhcmFtcykge1xuICAgIGNoZWNrSWZQYXJhbUlzVmFsaWQocGFyYW0pXG5cbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQocGFyYW0pXG4gICAgfVxuXG4gICAgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkKHBhcmFtKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRQYXJhbXNcbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbS9pbmRleC5qcydcblxuZXhwb3J0IGNvbnN0IGZpeFNjcm9sbGJhciA9ICgpID0+IHtcbiAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgaWYgKGRvbS5zdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIHJldHVyblxuICB9XG4gIC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgZG9tLnN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7ZG9tLnN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICsgZG9tLm1lYXN1cmVTY3JvbGxiYXIoKX1weGBcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdW5kb1Njcm9sbGJhciA9ICgpID0+IHtcbiAgaWYgKGRvbS5zdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7ZG9tLnN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nfXB4YFxuICAgIGRvbS5zdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHsgd2FybiB9IGZyb20gJy4vdXRpbHMuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20vaW5kZXguanMnXG5pbXBvcnQgZGVmYXVsdElucHV0VmFsaWRhdG9ycyBmcm9tICcuL2RlZmF1bHRJbnB1dFZhbGlkYXRvcnMuanMnXG5cbmZ1bmN0aW9uIHNldERlZmF1bHRJbnB1dFZhbGlkYXRvcnMgKHBhcmFtcykge1xuICAvLyBVc2UgZGVmYXVsdCBgaW5wdXRWYWxpZGF0b3JgIGZvciBzdXBwb3J0ZWQgaW5wdXQgdHlwZXMgaWYgbm90IHByb3ZpZGVkXG4gIGlmICghcGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgT2JqZWN0LmtleXMoZGVmYXVsdElucHV0VmFsaWRhdG9ycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSBrZXkpIHtcbiAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gZGVmYXVsdElucHV0VmFsaWRhdG9yc1trZXldXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUN1c3RvbVRhcmdldEVsZW1lbnQgKHBhcmFtcykge1xuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGN1c3RvbSB0YXJnZXQgZWxlbWVudCBpcyB2YWxpZFxuICBpZiAoXG4gICAgIXBhcmFtcy50YXJnZXQgfHxcbiAgICAodHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpKSB8fFxuICAgICh0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpXG4gICkge1xuICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJylcbiAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBwb3B1cFxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJzIChwYXJhbXMpIHtcbiAgc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpXG5cbiAgLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG4gIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSAmJiAhcGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICB3YXJuKFxuICAgICAgJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgK1xuICAgICAgJ3Nob3dMb2FkZXJPbkNvbmZpcm0gc2hvdWxkIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBwcmVDb25maXJtLCBzZWUgdXNhZ2UgZXhhbXBsZTpcXG4nICtcbiAgICAgICdodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0J1xuICAgIClcbiAgfVxuXG4gIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudChwYXJhbXMpXG5cbiAgLy8gUmVwbGFjZSBuZXdsaW5lcyB3aXRoIDxicj4gaW4gdGl0bGVcbiAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIgLz4nKVxuICB9XG5cbiAgZG9tLmluaXQocGFyYW1zKVxufVxuIiwiZXhwb3J0IGNvbnN0IGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6J1xuXG4vKipcbiAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxdWVBcnJheSA9IChhcnIpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycltpXSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICogQHBhcmFtIHN0clxuICovXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cikgPT4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG5cbi8qKlxuICogQ29udmVydCBOb2RlTGlzdCB0byBBcnJheVxuICogQHBhcmFtIG5vZGVMaXN0XG4gKi9cbmV4cG9ydCBjb25zdCB0b0FycmF5ID0gKG5vZGVMaXN0KSA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdClcblxuLyoqXG4gKiBTdGFuZGFyZGlzZSBjb25zb2xlIHdhcm5pbmdzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5leHBvcnQgY29uc3Qgd2FybiA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnNvbGUud2FybihgJHtjb25zb2xlUHJlZml4fSAke3R5cGVvZiBtZXNzYWdlID09PSAnb2JqZWN0JyA/IG1lc3NhZ2Uuam9pbignICcpIDogbWVzc2FnZX1gKVxufVxuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5leHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICBjb25zb2xlLmVycm9yKGAke2NvbnNvbGVQcmVmaXh9ICR7bWVzc2FnZX1gKVxufVxuXG4vKipcbiAqIFByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciBgd2Fybk9uY2VgXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMgPSBbXVxuXG4vKipcbiAqIFNob3cgYSBjb25zb2xlIHdhcm5pbmcsIGJ1dCBvbmx5IGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gc2hvd25cbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjb25zdCB3YXJuT25jZSA9IChtZXNzYWdlKSA9PiB7XG4gIGlmICghcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLmluY2x1ZGVzKG1lc3NhZ2UpKSB7XG4gICAgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICB3YXJuKG1lc3NhZ2UpXG4gIH1cbn1cblxuLyoqXG4gKiBTaG93IGEgb25lLXRpbWUgY29uc29sZSB3YXJuaW5nIGFib3V0IGRlcHJlY2F0ZWQgcGFyYW1zL21ldGhvZHNcbiAqL1xuZXhwb3J0IGNvbnN0IHdhcm5BYm91dERlcHJlY2F0aW9uID0gKGRlcHJlY2F0ZWRQYXJhbSwgdXNlSW5zdGVhZCkgPT4ge1xuICB3YXJuT25jZShgXCIke2RlcHJlY2F0ZWRQYXJhbX1cIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHVzZSBcIiR7dXNlSW5zdGVhZH1cIiBpbnN0ZWFkLmApXG59XG5cbi8qKlxuICogSWYgYGFyZ2AgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCAod2l0aCBubyBhcmd1bWVudHMgb3IgY29udGV4dCkgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICogT3RoZXJ3aXNlLCBqdXN0IHBhc3MgdGhlIHZhbHVlIHRocm91Z2hcbiAqIEBwYXJhbSBhcmdcbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGxJZkZ1bmN0aW9uID0gKGFyZykgPT4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZygpIDogYXJnXG5cbmV4cG9ydCBjb25zdCBoYXNUb1Byb21pc2VGbiA9IChhcmcpID0+IGFyZyAmJiB0eXBlb2YgYXJnLnRvUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJ1xuXG5leHBvcnQgY29uc3QgYXNQcm9taXNlID0gKGFyZykgPT4gaGFzVG9Qcm9taXNlRm4oYXJnKSA/IGFyZy50b1Byb21pc2UoKSA6IFByb21pc2UucmVzb2x2ZShhcmcpXG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2UgPSAoYXJnKSA9PiBhcmcgJiYgUHJvbWlzZS5yZXNvbHZlKGFyZykgPT09IGFyZ1xuIiwiaW1wb3J0IGZvcm1Nb2R1bGUgZnJvbSBcIi4vZm9ybU1vZHVsZVwiO1xyXG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvamVjdEZhY3RvcnlcIjtcclxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi90YXNrRmFjdG9yeVwiO1xyXG5cclxuY29uc3QgZG9tTWFuYWdlciA9IChmdW5jdGlvbigpe1xyXG4gICAgbGV0IGRpc3BsYXk7IFxyXG4gICAgbGV0IHNpZGVCYXI7XHJcbiAgICBsZXQgdGFza0xpc3Q7XHJcbiAgICBsZXQgcHJvamVjdHM7XHJcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0O1xyXG4gICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gMDtcclxuICAgIGNvbnN0IHJlbmRlciA9IChkb21FbGVtZW50LCBwcm9qZWN0c0xpc3QpID0+IHtcclxuICAgICAgICBkaXNwbGF5ID0gZG9tRWxlbWVudDtcclxuICAgICAgICBkaXNwbGF5LmlubmVySFRNTCA9ICcnOyAvL0NsZWFuIHRoZSBwYWdlIGNvbnRlbnRzIFxyXG4gICAgICAgIHByb2plY3RzID0gcHJvamVjdHNMaXN0O1xyXG5cclxuICAgICAgICBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlLWJhcicpO1xyXG4gICAgICAgIGFkZFByb2plY3RzVG9TaWRlYmFyKHByb2plY3RzKTtcclxuXHJcbiAgICAgICAgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcclxuICAgICAgICBhZGRUYXNrbGlzdENvbnRlbnRzKHByb2plY3RzKTtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHNpZGVCYXIpO1xyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xyXG4gICAgICAgIHRhc2tMaXN0LnNjcm9sbFRvcCA9IHNjcm9sbFBvc2l0aW9uXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0RWxlbWVudCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcm9qZWN0XCI+PGgyPiR7cHJvamVjdC5uYW1lfTwvaDM+PC9kaXY+YDtcclxuICAgICAgICBpZihwcm9qZWN0LmlzU2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVNlbGVjdGVkUHJvamVjdC5iaW5kKG51bGwsIHByb2plY3QpKTtcclxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVUYXNrRWxlbWVudCA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1Rhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3VGFza0VsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YXNrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7dGFzay5pc0RvbmU/ICdjaGVja2VkJzonJ30+IFxyXG4gICAgICAgICAgICAgICAgPGgyPiR7dGFzay50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPiR7dGFzay5kdWVEYXRlfTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke3Rhc2suZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGlmICh0YXNrLmlzRG9uZSkgbmV3VGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgICAgIG5ld1Rhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25UYXNrQ29tcGxldGUuYmluZChudWxsLCB0YXNrKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdUYXNrRWxlbWVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZUFkZFRhc2tCdXR0b24gPSAocG9zKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1Rhc2tCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3VGFza0J1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIj5cclxuICAgICAgICAgICAgPGgyPkFkZCB0YXNrPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIG5ld1Rhc2tCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza1RvUHJvamVjdC5iaW5kKG51bGwsIHBvcykpO1xyXG4gICAgICAgIHJldHVybiBuZXdUYXNrQnV0dG9uRWxlbWVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZUFkZFByb2plY3RCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3RCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIj5cclxuICAgICAgICAgICAgPGgyPkFkZCBwcm9qZWN0PGgyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcclxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0c1RvU2lkZWJhciA9IChwcm9qZWN0cykgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCk7XHJcbiAgICAgICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2plY3RCdXR0b24oKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRUYXNrbGlzdENvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gc2VsZWN0ZWRQcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tCdXR0b24oJ3N0YXJ0JykpO1xyXG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT57XHJcbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XHJcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKG5ld1Rhc2spO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVBZGRUYXNrQnV0dG9uKCdlbmQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlU2VsZWN0ZWRQcm9qZWN0ID0gKG5ld1NlbGVjdGVkUHJvamVjdCwgZSkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgICAgIHByb2plY3QudG9nZ2xlU2VsZWN0ZWQoZmFsc2UpOyAvLyBVbnNlbGVjdCBhbGwgcHJvamVjdHNcclxuICAgICAgICB9KVxyXG4gICAgICAgIG5ld1NlbGVjdGVkUHJvamVjdC50b2dnbGVTZWxlY3RlZCh0cnVlKTsgXHJcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gbmV3U2VsZWN0ZWRQcm9qZWN0O1xyXG4gICAgICAgIHJlbmRlcihkaXNwbGF5LCBwcm9qZWN0cyk7IC8vIENsZWFuIHRoZSBwYWdlIGFuZCBkcmF3IGFnYWluXHJcbiAgICB9XHJcbiAgICBjb25zdCBvblRhc2tDb21wbGV0ZSA9IChjb21wbGV0ZWRUYXNrLCBlKSA9PiB7XHJcbiAgICAgICAgY29tcGxldGVkVGFzay5zZXRDb21wbGV0ZWQoKTtcclxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IHRhc2tMaXN0LnNjcm9sbFRvcDtcclxuICAgICAgICByZW5kZXIoZGlzcGxheSwgcHJvamVjdHMpO1xyXG4gICAgfSAgXHJcbiAgICBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKHBvcywgZSkgPT4ge1xyXG4gICAgICAgIGZvcm1Nb2R1bGUuYXNrVGFza0luZm8oKS50aGVuKCh0YXNrRGF0YSk9PntcclxuICAgICAgICAgICAgaWYodGFza0RhdGEpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2tEYXRhID0gSlNPTi5wYXJzZSh0YXNrRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2plY3QuYWRkVGFzayh0YXNrRmFjdG9yeShuZXdUYXNrRGF0YS50aXRsZSwgbmV3VGFza0RhdGEuZGVzY3JpcHRpb24sICcyMC8yMC8yMDAwJywxKSwgcG9zKTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uID0gdGFza0xpc3Quc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyKGRpc3BsYXksIHByb2plY3RzKTsgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyB0YXNrIHdhcyBjcmVhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkTmV3UHJvamVjdCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1Nb2R1bGUuYXNrUHJvamVjdEluZm8oKS50aGVuKChwcm9qZWN0TmFtZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKHByb2plY3ROYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNEdXBsaWNhdGUgPSBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNEdXBsaWNhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtTW9kdWxlLnNob3dEdXBsaWNhdGVNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcihkaXNwbGF5LCBwcm9qZWN0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVuZGVyXHJcbiAgICB9IFxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuYWdlcjsiLCJpbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDIvc3JjL3N3ZWV0YWxlcnQyLmpzXCI7XHJcblxyXG5jb25zdCBmb3JtTW9kdWxlID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBhc2tUYXNrSW5mbyA9YXN5bmMoKT0+IHtcclxuICAgICAgICBjb25zdCB7dmFsdWU6IGZvcm1WYWx1ZXMgfSA9IGF3YWl0IFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmV3IFRhc2snLFxyXG4gICAgICAgICAgICBodG1sOlxyXG4gICAgICAgICAgICAgICc8aW5wdXQgaWQ9XCJ0YXNrLXRpdGxlLWlucHV0XCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUYXNrIHRpdGxlXCIgY2xhc3M9XCJzd2FsMi1pbnB1dFwiIHJlcXVpcmVkPicgK1xyXG4gICAgICAgICAgICAgICc8aW5wdXQgaWQ9XCJ0YXNrLWRlc2MtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgZGVzY3JpcHRpb24uLi5cIiBjbGFzcz1cInN3YWwyLWlucHV0XCI+JyxcclxuICAgICAgICAgICAgZm9jdXNDb25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJlQ29uZmlybTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWlucHV0JykudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWlucHV0JykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjLWlucHV0JykudmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIFN3YWwuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKCdZb3UgbXVzdCBwcm92aWRlIGEgdGl0bGUnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChmb3JtVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybihKU09OLnN0cmluZ2lmeShmb3JtVmFsdWVzKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhc2tQcm9qZWN0SW5mbyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHZhbHVlOiBwcm9qZWN0TmFtZSB9ID0gYXdhaXQgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogJ05ldyBQcm9qZWN0JyxcclxuICAgICAgICBpbnB1dDogJ3RleHQnLFxyXG4gICAgICAgIGlucHV0TGFiZWw6ICdQcm9qZWN0IG5hbWUnLFxyXG4gICAgICAgIGlucHV0VmFsdWU6ICdNeSBwcm9qZWN0JyxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGlucHV0VmFsaWRhdG9yOiAodmFsdWUpID0+IHtcclxuICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdQcm9qZWN0IG5hbWUgY2FuXFwndCBiZSBlbXB0eSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPiAxMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAnUHJvamVjdCBuYW1lIG11c3QgYmUgdW5kZXIgMTAgY2hhcmFjdGVycyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgaWYgKHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93RHVwbGljYXRlTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgU3dhbC5maXJlKFwiRXJyb3JcIiwgJ0NhblxcJ3QgYWRkIGR1cGxpY2F0ZSBwcm9qZWN0cycsICdlcnJvcicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhc2tUYXNrSW5mbyxcclxuICAgICAgICBhc2tQcm9qZWN0SW5mbyxcclxuICAgICAgICBzaG93RHVwbGljYXRlTWVzc2FnZVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybU1vZHVsZTsiLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IHt9O1xyXG4gICAgcHJvamVjdC5uYW1lID0gbmFtZTtcclxuICAgIHByb2plY3QuaXNTZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgcHJvamVjdC50YXNrcyA9IFtdO1xyXG5cclxuICAgIHByb2plY3QuYWRkVGFzayA9ICh0YXNrLCBwb3NpdGlvbiA9ICdlbmQnKSA9PiB7XHJcbiAgICAgICAgaWYocG9zaXRpb24gPT0gJ3N0YXJ0Jyl7XHJcbiAgICAgICAgICAgIHByb2plY3QudGFza3MudW5zaGlmdCh0YXNrKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvamVjdC50b2dnbGVTZWxlY3RlZCA9IChzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbGVjdGVkICYmIHByb2plY3QuaXNTZWxlY3RlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiAvLyBEbyBub3RoaW5nIGlmIHRoZSBwcm9qZWN0IGlzIGFscmVhZHkgc2VsZWN0ZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdC5pc1NlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvamVjdDtcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGYWN0b3J5OyIsImNvbnN0IHByb2plY3RNYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbXVxyXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7ICAvL1JldHVybnMgdHJ1ZSBpZiBwcm9qZWN0IGlzIGEgZHVwbGljYXRlXHJcbiAgICAgICAgbGV0IGlzRHVwbGljYXRlID0gcHJvamVjdHMuc29tZSgocHJvamVjdCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3QubmFtZSA9PSBuZXdQcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihpc0R1cGxpY2F0ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Lm5hbWUgIT0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UHJvamVjdHMsXHJcbiAgICAgICAgYWRkUHJvamVjdCxcclxuICAgICAgICByZW1vdmVQcm9qZWN0XHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyOyIsImNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSA9IGZhbHNlKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IHt9XHJcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGFzay5pc0RvbmUgPSBpc0RvbmU7XHJcbiAgICB0YXNrLnNldENvbXBsZXRlZCA9ICgpID0+e1xyXG4gICAgICAgIHRhc2suaXNEb25lID0gIXRhc2suaXNEb25lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhc2tcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza0ZhY3RvcnkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkb21NYW5hZ2VyIGZyb20gXCIuL01vZHVsZXMvZG9tTWFuYWdlclwiO1xyXG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vTW9kdWxlcy9wcm9qZWN0RmFjdG9yeVwiO1xyXG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vTW9kdWxlcy9wcm9qZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgdGFza0ZhY3RvcnkgZnJvbSBcIi4vTW9kdWxlcy90YXNrRmFjdG9yeVwiO1xyXG5cclxubGV0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbmNvbnN0IHByb2plY3QxID0gcHJvamVjdEZhY3RvcnkoJ0xPS09LJywgdHJ1ZSk7XHJcbmNvbnN0IHByb2plY3QyID0gcHJvamVjdEZhY3RvcnkoJ0NPb0MnKTtcclxucHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0MSk7XHJcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdDIpO1xyXG5wcm9qZWN0MS5hZGRUYXNrKHRhc2tGYWN0b3J5KCdUYXNrIDEnLCAnRGVzY3JpcHRpb24gYmxhYmxibGFibGFsYScsICcxMC8xMC8xOTk5JywgMSkpO1xyXG5wcm9qZWN0MS5hZGRUYXNrKHRhc2tGYWN0b3J5KCdUYXNrIDEnLCAnRGVzY3JpcHRpb24gYmxhYmxibGFibGFsYScsICcxMC8xMC8xOTk5JywgMSkpO1xyXG5wcm9qZWN0MS5hZGRUYXNrKHRhc2tGYWN0b3J5KCdUYXNrIDEnLCAnRGVzY3JpcHRpb24gYmxhYmxibGFibGFsYScsICcxMC8xMC8xOTk5JywgMSkpO1xyXG5wcm9qZWN0MS5hZGRUYXNrKHRhc2tGYWN0b3J5KCdUYXNrIDEnLCAnRGVzY3JpcHRpb24gYmxhYmxibGFibGFsYScsICcxMC8xMC8xOTk5JywgMSkpO1xyXG5wcm9qZWN0MS5hZGRUYXNrKHRhc2tGYWN0b3J5KCdUYXNrIDEnLCAnRGVzY3JpcHRpb24gYmxhYmxibGFibGFsYScsICcxMC8xMC8xOTk5JywgMSkpO1xyXG5wcm9qZWN0Mi5hZGRUYXNrKHRhc2tGYWN0b3J5KCdUYXNrIDEnLCAnRGVzY3JpcHRpb24gYmxhYmxibGFibGFsYScsICcxMC8xMC8xOTk5JywgMSwgdHJ1ZSkpO1xyXG5cclxuZG9tTWFuYWdlci5yZW5kZXIoZGlzcGxheSwgcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9