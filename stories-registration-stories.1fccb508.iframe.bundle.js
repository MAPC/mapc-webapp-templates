"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[238],{"./src/stories/registration.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RegistrationFuschia:function(){return RegistrationFuschia},RegistrationGreen:function(){return RegistrationGreen},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return registration_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regeneratorRuntime=(__webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.min.css"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js")),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Form=__webpack_require__("./node_modules/react-bootstrap/esm/Form.js"),Button=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeroDiv=(styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.default)(["\n  width: 100vw;\n  height: 100%;\n  background-color: ",";\n"])),(function(props){return void 0!==props.theme.tertiaryColor?props.theme.tertiaryColor:"rgb(33, 154, 241)"})),styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.default)(["\n  width: 100vw;\n  /* height: 49rem; */\n  display: flex;\n  flex-direction: column;\n"])))),LoginContainer=styled_components_browser_esm.zo.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.default)(["\n  position: absolute;\n  width: 100vw;\n  height: 100%;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  margin-top: 2.75rem;\n"])),(function(props){return void 0!==props.theme.tertiaryColor?props.theme.tertiaryColor:"#fbfffe"})),LoginFormDiv=styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.default)(["\n  width: 30vw;\n  height: 85%;\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 12.5px;\n  padding: 2rem 2rem 3rem;\n  background-color: ",";\n  color: #635c7b;\n  box-shadow: 0px 0px 10px 3px #2b3b5e;\n\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n"])),(function(props){return void 0!==props.theme.backgroundColor?props.theme.backgroundColor:"#fbfffe"}));function Registration(_ref){_ref.loggedIn;var theme=_ref.theme,_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.default)(_useState,2),email=_useState2[0],setEmail=_useState2[1],_useState3=(0,react.useState)(null),_useState4=(0,slicedToArray.default)(_useState3,2),password=_useState4[0],setPassword=_useState4[1],_useState5=(0,react.useState)(null),_useState6=(0,slicedToArray.default)(_useState5,2),passwordConfirmation=_useState6[0],setPasswordConfirmation=_useState6[1],_useState7=(0,react.useState)(null),_useState8=(0,slicedToArray.default)(_useState7,2),_useState9=(_useState8[0],_useState8[1],(0,react.useState)(!1)),_useState10=(0,slicedToArray.default)(_useState9,2),passwordValidity=_useState10[0],setPasswordValidity=_useState10[1];function _handleSubmit(){return(_handleSubmit=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(e){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(e.preventDefault(),password===passwordConfirmation){_context.next=6;break}return setPasswordValidity(!1),_context.abrupt("return");case 6:setPasswordValidity(!0);case 7:return _context.next=9,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:email,password:password})}).then((function(res){void 0!==res&&res.ok})).catch((function(err){console.log(err)}));case 9:_context.sent;case 10:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}return(0,jsx_runtime.jsxs)(HeroDiv,{children:[(0,jsx_runtime.jsx)(HeroDiv,{}),(0,jsx_runtime.jsx)(LoginContainer,{theme:theme,children:(0,jsx_runtime.jsx)(LoginFormDiv,{theme:theme,children:(0,jsx_runtime.jsxs)(Form.Z,{style:{width:"100%"},onSubmit:function handleSubmit(_x){return _handleSubmit.apply(this,arguments)},children:[(0,jsx_runtime.jsx)(Form.Z.Label,{className:"mb-1",style:{width:"100%"},children:(0,jsx_runtime.jsx)("h4",{className:"mb-0",style:{width:"100%",textAlign:"center"},children:(0,jsx_runtime.jsx)("strong",{style:{color:null==theme?void 0:theme.tertiaryColor},children:"REGISTRATION"})})}),(0,jsx_runtime.jsxs)(Form.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,jsx_runtime.jsx)(Form.Z.Label,{children:(0,jsx_runtime.jsx)("strong",{style:{color:null==theme?void 0:theme.tertiaryColor},children:"Email address"})}),(0,jsx_runtime.jsx)(Form.Z.Control,{required:!0,type:"email",placeholder:"Enter email",onChange:function onChange(e){setEmail(e.target.value)}})]}),(0,jsx_runtime.jsxs)(Form.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,jsx_runtime.jsx)(Form.Z.Label,{children:(0,jsx_runtime.jsx)("strong",{style:{color:null==theme?void 0:theme.tertiaryColor},children:"Password"})}),(0,jsx_runtime.jsx)(Form.Z.Control,{required:!0,isValid:passwordValidity,className:"mb-3",type:"password",placeholder:"Password",onChange:function onChange(e){setPassword(e.target.value)}}),(0,jsx_runtime.jsx)(Form.Z.Label,{children:(0,jsx_runtime.jsx)("strong",{style:{color:null==theme?void 0:theme.tertiaryColor},children:"Confirm Password"})}),(0,jsx_runtime.jsx)(Form.Z.Control,{required:!0,isValid:passwordValidity,type:"password",placeholder:"Password",onChange:function onChange(e){setPasswordConfirmation(e.target.value)}})]}),(0,jsx_runtime.jsx)(Button.Z,{variant:"primary",type:"submit",className:"mb-2",style:{width:"100%",background:null==theme?void 0:theme.primaryColor,color:null==theme?void 0:theme.tertiaryColor},children:(0,jsx_runtime.jsx)("strong",{children:"Register"})})]})})})]})}try{Registration.displayName="Registration",Registration.__docgenInfo={description:"",displayName:"Registration",props:{loggedIn:{defaultValue:null,description:"",name:"loggedIn",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/templates/registration-page/Registration.tsx#Registration"]={docgenInfo:Registration.__docgenInfo,name:"Registration",path:"src/templates/registration-page/Registration.tsx#Registration"})}catch(__react_docgen_typescript_loader_error){}var _RegistrationGreen$pa,_RegistrationGreen$pa2,_RegistrationGreen$pa3,_RegistrationFuschia$,_RegistrationFuschia$2,_RegistrationFuschia$3,themes=__webpack_require__("./src/constants/themes.tsx"),registration_stories={title:"components/Registration",component:Registration},RegistrationGreen={args:{loggedIn:!1,theme:themes.rU}},RegistrationFuschia={args:{loggedIn:!1,theme:themes._E}};RegistrationGreen.parameters=(0,objectSpread2.default)((0,objectSpread2.default)({},RegistrationGreen.parameters),{},{docs:(0,objectSpread2.default)((0,objectSpread2.default)({},null===(_RegistrationGreen$pa=RegistrationGreen.parameters)||void 0===_RegistrationGreen$pa?void 0:_RegistrationGreen$pa.docs),{},{source:(0,objectSpread2.default)({originalSource:"{\n  args: {\n    loggedIn: false,\n    theme: greenTheme\n  }\n}"},null===(_RegistrationGreen$pa2=RegistrationGreen.parameters)||void 0===_RegistrationGreen$pa2||null===(_RegistrationGreen$pa3=_RegistrationGreen$pa2.docs)||void 0===_RegistrationGreen$pa3?void 0:_RegistrationGreen$pa3.source)})}),RegistrationFuschia.parameters=(0,objectSpread2.default)((0,objectSpread2.default)({},RegistrationFuschia.parameters),{},{docs:(0,objectSpread2.default)((0,objectSpread2.default)({},null===(_RegistrationFuschia$=RegistrationFuschia.parameters)||void 0===_RegistrationFuschia$?void 0:_RegistrationFuschia$.docs),{},{source:(0,objectSpread2.default)({originalSource:"{\n  args: {\n    loggedIn: false,\n    theme: fuchsiaTheme\n  }\n}"},null===(_RegistrationFuschia$2=RegistrationFuschia.parameters)||void 0===_RegistrationFuschia$2||null===(_RegistrationFuschia$3=_RegistrationFuschia$2.docs)||void 0===_RegistrationFuschia$3?void 0:_RegistrationFuschia$3.source)})});var __namedExportsOrder=["RegistrationGreen","RegistrationFuschia"]},"./src/constants/themes.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{IR:function(){return skyTheme},_E:function(){return fuchsiaTheme},nH:function(){return sunTheme},rU:function(){return greenTheme}});var sunTheme={backgroundColor:"#FCF8ED",primaryColor:"#FFB624",secondaryColor:"#DB9E00",tertiaryColor:"#3D2A08"},skyTheme={backgroundColor:"#F2F5FF",primaryColor:"#8ACCFF",secondaryColor:"#0063E6",tertiaryColor:"#00256E"},greenTheme={backgroundColor:"#ECFFFA",primaryColor:"#00F099",secondaryColor:"#00BF64",tertiaryColor:"#006E47"},fuchsiaTheme={backgroundColor:"#FCF2FB",primaryColor:"#C7004E",secondaryColor:"#700025",tertiaryColor:"#4D001A"}}}]);