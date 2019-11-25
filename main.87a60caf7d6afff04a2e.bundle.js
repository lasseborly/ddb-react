(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(module,__webpack_exports__,__webpack_require__){"use strict";var _token_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(84);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var MaterialList=function(){function MaterialList(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MaterialList),this.token=Object(_token_js__WEBPACK_IMPORTED_MODULE_0__.b)(),this.baseUrl="https://test.materiallist.dandigbib.org"}var _deleteListMaterial,_addListMaterial,_checkListMaterial,_getList;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(MaterialList,[{key:"getList",value:(_getList=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var listId,rawResponse,response,_args=arguments;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return listId=_args.length>0&&void 0!==_args[0]?_args[0]:"default",_context.next=3,fetch("".concat(this.baseUrl,"/list/").concat(listId),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(this.token)}});case 3:return rawResponse=_context.sent,_context.next=6,rawResponse.json();case 6:return response=_context.sent,_context.abrupt("return",response.materials);case 8:case"end":return _context.stop()}}),_callee,this)}))),function getList(){return _getList.apply(this,arguments)})},{key:"checkListMaterial",value:(_checkListMaterial=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){var _ref,_ref$listId,listId,materialId,rawResponse,response,_args2=arguments;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(_ref=_args2.length>0&&void 0!==_args2[0]?_args2[0]:{},_ref$listId=_ref.listId,listId=void 0===_ref$listId?"default":_ref$listId,materialId=_ref.materialId){_context2.next=4;break}return console.warn("materialId was not specified."),_context2.abrupt("return");case 4:return _context2.next=6,fetch("".concat(this.baseUrl,"/list/").concat(listId,"/").concat(materialId),{method:"HEAD",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(this.token)}});case 6:return rawResponse=_context2.sent,_context2.next=9,rawResponse.json();case 9:return response=_context2.sent,_context2.abrupt("return",Boolean(204===response.status));case 11:case"end":return _context2.stop()}}),_callee2,this)}))),function checkListMaterial(){return _checkListMaterial.apply(this,arguments)})},{key:"addListMaterial",value:(_addListMaterial=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(){var _ref2,_ref2$listId,listId,materialId,response,_args3=arguments;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(_ref2=_args3.length>0&&void 0!==_args3[0]?_args3[0]:{},_ref2$listId=_ref2.listId,listId=void 0===_ref2$listId?"default":_ref2$listId,materialId=_ref2.materialId){_context3.next=4;break}return console.warn("materialId was not specified."),_context3.abrupt("return");case 4:return _context3.next=6,fetch("".concat(this.baseUrl,"/list/").concat(listId,"/").concat(materialId),{method:"PUT",headers:{Authorization:"Bearer ".concat(this.token)}});case 6:return response=_context3.sent,_context3.abrupt("return",Boolean(204===response.status));case 8:case"end":return _context3.stop()}}),_callee3,this)}))),function addListMaterial(){return _addListMaterial.apply(this,arguments)})},{key:"deleteListMaterial",value:(_deleteListMaterial=_asyncToGenerator(regeneratorRuntime.mark((function _callee4(){var _ref3,_ref3$listId,listId,materialId,response,_args4=arguments;return regeneratorRuntime.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:if(_ref3=_args4.length>0&&void 0!==_args4[0]?_args4[0]:{},_ref3$listId=_ref3.listId,listId=void 0===_ref3$listId?"default":_ref3$listId,materialId=_ref3.materialId){_context4.next=4;break}return console.warn("materialId was not specified."),_context4.abrupt("return");case 4:return _context4.next=6,fetch("".concat(this.baseUrl,"/list/").concat(listId,"/").concat(materialId),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(this.token)}});case 6:return response=_context4.sent,_context4.abrupt("return",Boolean(204===response.status));case 8:case"end":return _context4.stop()}}),_callee4,this)}))),function deleteListMaterial(){return _deleteListMaterial.apply(this,arguments)})}]),MaterialList}();__webpack_exports__.a=MaterialList},265:function(module,exports,__webpack_require__){__webpack_require__(266),__webpack_require__(379),module.exports=__webpack_require__(380)},287:function(module,exports){},36:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(12);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.a=function Skeleton(_ref){var _ref$component=_ref.component,Component=void 0===_ref$component?"div":_ref$component,_ref$height=_ref.height,height=void 0===_ref$height?"16px":_ref$height,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,_ref$borderRadius=_ref.borderRadius,borderRadius=void 0===_ref$borderRadius?"5%":_ref$borderRadius,_ref$mt=_ref.mt,mt=void 0===_ref$mt?"5px":_ref$mt,_ref$mb=_ref.mb,mb=void 0===_ref$mb?"5px":_ref$mb,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,rest=_objectWithoutProperties(_ref,["component","height","width","borderRadius","mt","mb","style"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component,_extends({className:"ddb-skeleton",style:_objectSpread({width:width,height:height,borderRadius:borderRadius,marginTop:mt,marginBottom:mb},style)},rest))}},380:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(259),_src_core_token_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(560),__webpack_require__(84)),token=Object(_src_core_token_js__WEBPACK_IMPORTED_MODULE_2__.a)();token||(token=window.prompt("Do you have a token for Adgangsplatformen? Input it here.")),Object(_src_core_token_js__WEBPACK_IMPORTED_MODULE_2__.c)(token||void 0),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(563),module)}.call(this,__webpack_require__(381)(module))},560:function(module,exports,__webpack_require__){var content=__webpack_require__(561);"string"==typeof content&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};__webpack_require__(562)(content,options);content.locals&&(module.exports=content.locals)},561:function(module,exports){module.exports=".ddb-btn,.ddb-error,.ddb-reset{animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;word-spacing:normal;z-index:auto;all:initial}.ddb-btn{background:#e5e5e5;border-radius:5px;color:rgba(38,38,38,.8);cursor:pointer;font-family:inherit;font-size:16px;padding:16px 24px;transition:background .11s cubic-bezier(.2,0,.38,.9)}.ddb-btn:hover{color:#262626}.ddb-btn--secondary:hover{background:#f66d70;color:#fffff2}.ddb-btn--charcoal{background:#262626;color:#fff}.ddb-btn--charcoal:hover{background:#808285;color:#fff}@keyframes ddb-skeleton{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.ddb-skeleton{display:block;background-color:#cbcbcb;animation:ddb-skeleton .7s cubic-bezier(.4,.14,.3,1) infinite}.ddb-error{display:block;height:100%;background-color:#e5e5e5;color:#808285;padding:16px;text-align:center;border-radius:5px}"},563:function(module,exports,__webpack_require__){var map={"./apps/add-to-checklist/add-to-checklist.dev.js":578,"./apps/add-to-searchlist/add-to-searchlist.dev.js":579,"./apps/checklist/checklist.dev.js":580,"./apps/searchlist/searchlist.dev.js":581,"./components/atoms/button/button.dev.js":575,"./components/atoms/dialog/dialog.dev.js":582,"./components/atoms/list/list.dev.js":583,"./components/atoms/skeleton/skeleton.dev.js":576,"./components/error/error.dev.js":584};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=563},575:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"withText",(function(){return withText}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_button_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(62);function withText(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_1__.a,null,"Tryk her")}__webpack_exports__.default={title:"Atoms|Button"}},576:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"single",(function(){return single})),__webpack_require__.d(__webpack_exports__,"mediaExample",(function(){return mediaExample}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_skeleton_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36);function single(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_skeleton_js__WEBPACK_IMPORTED_MODULE_1__.a,null)}function mediaExample(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_skeleton_js__WEBPACK_IMPORTED_MODULE_1__.a,{mb:"10px",height:"120px",width:"160px"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_skeleton_js__WEBPACK_IMPORTED_MODULE_1__.a,{width:"160px"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_skeleton_js__WEBPACK_IMPORTED_MODULE_1__.a,{width:"120px"}))}__webpack_exports__.default={title:"Atoms|Skeleton"}},578:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(118),button_button=(__webpack_require__(12),__webpack_require__(62));function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AddToChecklist(_ref){var loading=_ref.loading,onClick=_ref.onClick,rest=_objectWithoutProperties(_ref,["loading","onClick"]);return"active"===loading?react_default.a.createElement("div",null,"Tilføjet"):"failed"===loading?react_default.a.createElement("div",null,"Noget gik galt"):react_default.a.createElement("div",{className:"ddb-container"},react_default.a.createElement(button_button.a,{className:"ddb-btn--charcoal",onClick:onClick},rest["ddb-text"]))}AddToChecklist.defaultProps={ddbText:"Tilføj til min huskeliste",loading:"inactive"};var add_to_checklist=AddToChecklist;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var client=new(__webpack_require__(117).a);var add_to_checklist_entry=function AddToChecklistEntry(props){var _useState2=_slicedToArray(Object(react.useState)("inactive"),2),loading=_useState2[0],setLoading=_useState2[1];return console.log(props["ddb-text"]),react_default.a.createElement(add_to_checklist,{"ddb-text":props["ddb-text"],loading:loading,onClick:function addToList(){setLoading("active"),client.addListMaterial({materialId:props["ddb-id"]}).then((function onResult(result){console.log(result)})).catch((function onError(){setLoading("failed"),setTimeout((function onRestore(){setLoading("inactive")}),2e3)})).finally((function onEnd(){setLoading("finished")}))}})};__webpack_require__.d(__webpack_exports__,"entry",(function(){return entry}));__webpack_exports__.default={title:"Apps|Add to Checklist",decorators:[dist.withKnobs]};function entry(){return react_default.a.createElement(add_to_checklist_entry,{"ddb-text":Object(dist.text)("Text","Tilføj til den bedste huskeliste"),"ddb-id":Object(dist.text)("Material ID","870970-basis:54172613")})}},579:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),button_button=(__webpack_require__(12),__webpack_require__(62));function AddToSearchlist(_ref){var children=_ref.children;return react_default.a.createElement(button_button.a,null,children)}AddToSearchlist.defaultProps={children:"Tilføj til mine søgninger"};var add_to_searchlist=AddToSearchlist;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var add_to_searchlist_entry=function AddToSearchlistEntry(){var _useState2=_slicedToArray(Object(react.useState)(!1),2),clicked=_useState2[0],setClicked=_useState2[1];return react_default.a.createElement(add_to_searchlist,{clicked:clicked,onClick:function onClick(){setClicked(!0)}})};__webpack_require__.d(__webpack_exports__,"entry",(function(){return entry}));__webpack_exports__.default={title:"Apps|Add to Searchlist"};function entry(){return react_default.a.createElement(add_to_searchlist_entry,null)}},580:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),skeleton=(__webpack_require__(12),__webpack_require__(36));function Checklist(_ref){var loading=_ref.loading,items=_ref.items,onRemove=_ref.onRemove;return"active"===loading?react_default.a.createElement("div",null,react_default.a.createElement(skeleton.a,{width:"50px"}),react_default.a.createElement(skeleton.a,{width:"30px"}),react_default.a.createElement(skeleton.a,{width:"80px"}),react_default.a.createElement(skeleton.a,{width:"40px"})):"finished"===loading&&0===items.length?react_default.a.createElement("div",null,"No items on the list!"):react_default.a.createElement("ul",{className:"list"},items.map((function(item){return react_default.a.createElement("li",{key:item},item," ",react_default.a.createElement("button",{onClick:function onClick(){return onRemove(item)}},"remove"))})))}Checklist.defaultProps={items:[],loading:"inactive"};var checklist=Checklist;function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var client=new(__webpack_require__(117).a);var checklist_entry=function ChecklistEntry(){var _useState2=_slicedToArray(Object(react.useState)([]),2),list=_useState2[0],setList=_useState2[1],_useState4=_slicedToArray(Object(react.useState)("inactive"),2),loading=_useState4[0],setLoading=_useState4[1];return Object(react.useEffect)((function getList(){setLoading("active"),client.getList().then((function onResult(result){setList(result)})).catch((function onError(err){console.error(err),setList([])})).finally((function onEnd(){setLoading("finished")}))}),[]),react_default.a.createElement(checklist,{loading:loading,items:list,onRemove:function onRemove(materialId){var fallbackList=_toConsumableArray(list);setList(list.filter((function removeMaterial(item){return item!==materialId}))),client.deleteListMaterial({materialId:materialId}).catch((function onError(err){console.error(err),setTimeout((function onRestore(){setList(fallbackList)}),2e3)}))}})};__webpack_require__.d(__webpack_exports__,"entry",(function(){return entry}));__webpack_exports__.default={title:"Apps|Checklist"};function entry(){return react_default.a.createElement(checklist_entry,null)}},581:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react);__webpack_require__(12);function Searchlist(_ref){var items=_ref.items;return react_default.a.createElement("ul",{className:"list"},items.map((function(item){return react_default.a.createElement("li",{key:item.id},item.text)})))}Searchlist.defaultProps={items:[{id:1,text:"Harry Potter"},{id:2,text:"Tolkien"}]};var searchlist=Searchlist;var searchlist_entry=function SearchlistEntry(){return react_default.a.createElement(searchlist,null)};__webpack_require__.d(__webpack_exports__,"entry",(function(){return entry}));__webpack_exports__.default={title:"Apps|Searchlist"};function entry(){return react_default.a.createElement(searchlist_entry,null)}},582:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),es=__webpack_require__(260);var dialog=function Dialog(props){return react_default.a.createElement(es.a,props)};function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}__webpack_require__.d(__webpack_exports__,"simple",(function(){return simple}));__webpack_exports__.default={title:"Atoms|Dialog"};function simple(){var _useState2=_slicedToArray(Object(react.useState)(!1),2),showDialog=_useState2[0],setShowDialog=_useState2[1],close=function close(){return setShowDialog(!1)};return react_default.a.createElement("div",null,react_default.a.createElement("button",{onClick:function open(){return setShowDialog(!0)}},"Open Dialog"),react_default.a.createElement(dialog,{isOpen:showDialog,onDismiss:close},react_default.a.createElement("button",{className:"close-button",onClick:close},"Close"),react_default.a.createElement("p",null,"Hello there. I am a dialog")))}},583:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var list=function UnorderedList(props){return react_default.a.createElement("ul",_extends({className:"list"},props))};__webpack_require__.d(__webpack_exports__,"withItems",(function(){return withItems}));__webpack_exports__.default={title:"Atoms|Unordered list"};function withItems(){return react_default.a.createElement(list,null,react_default.a.createElement("li",null,"Agurk"))}},584:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),es=(__webpack_require__(12),__webpack_require__(261));function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Error(_ref){var className=_ref.className,message=_ref.message,rest=_objectWithoutProperties(_ref,["className","message"]);return react_default.a.createElement(es.a,_extends({className:"ddb-error ".concat(className||"")},rest),message)}Error.defaultProps={message:"Hov, der opstod en fejl!",type:"polite"};var error=Error;__webpack_require__.d(__webpack_exports__,"simple",(function(){return simple}));__webpack_exports__.default={title:"Component|Error"};function simple(){return react_default.a.createElement(error,null)}},62:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(12);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.a=function Button(_ref){var className=_ref.className,rest=_objectWithoutProperties(_ref,["className"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",_extends({className:"ddb-btn ".concat(className||"")},rest))}},84:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return setToken})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getToken}));var TOKEN_KEY="ddb-token";function setToken(token){!localStorage.getItem(TOKEN_KEY)&&token&&localStorage.setItem(TOKEN_KEY,token)}var getToken=function initToken(){return function getToken(){return localStorage.getItem(TOKEN_KEY)}}();__webpack_exports__.a=getToken}},[[265,1,2]]]);
//# sourceMappingURL=main.87a60caf7d6afff04a2e.bundle.js.map