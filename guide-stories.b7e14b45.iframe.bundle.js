"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7081],{"./packages/components/src/modal/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return src_modal}});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_focus_on_mount=__webpack_require__("./packages/compose/build-module/hooks/use-focus-on-mount/index.js"),use_constrained_tabbing=__webpack_require__("./packages/compose/build-module/hooks/use-constrained-tabbing/index.js"),use_focus_return=__webpack_require__("./packages/compose/build-module/hooks/use-focus-return/index.js"),use_focus_outside=__webpack_require__("./packages/compose/build-module/hooks/use-focus-outside/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),library_close=__webpack_require__("./packages/icons/build-module/library/close.js"),get_scroll_container=__webpack_require__("./packages/dom/build-module/dom/get-scroll-container.js");const LIVE_REGION_ARIA_ROLES=new Set(["alert","status","log","marquee","timer"]);let hiddenElements=[],isHidden=!1;function hideApp(unhiddenElement){if(isHidden)return;Array.from(document.body.children).forEach((element=>{element!==unhiddenElement&&function elementShouldBeHidden(element){const role=element.getAttribute("role");return!("SCRIPT"===element.tagName||element.hasAttribute("aria-hidden")||element.hasAttribute("aria-live")||role&&LIVE_REGION_ARIA_ROLES.has(role))}(element)&&(element.setAttribute("aria-hidden","true"),hiddenElements.push(element))})),isHidden=!0}var src_button=__webpack_require__("./packages/components/src/button/index.tsx"),style_provider=__webpack_require__("./packages/components/src/style-provider/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let openModalCount=0;const Modal=(0,react.forwardRef)((function UnforwardedModal(props,forwardedRef){const{bodyOpenClassName:bodyOpenClassName="modal-open",role:role="dialog",title:title=null,focusOnMount:focusOnMount=!0,shouldCloseOnEsc:shouldCloseOnEsc=!0,shouldCloseOnClickOutside:shouldCloseOnClickOutside=!0,isDismissible:isDismissible=!0,aria:aria={labelledby:void 0,describedby:void 0},onRequestClose:onRequestClose,icon:icon,closeButtonLabel:closeButtonLabel,children:children,style:style,overlayClassName:overlayClassName,className:className,contentLabel:contentLabel,onKeyDown:onKeyDown,isFullScreen:isFullScreen=!1,__experimentalHideHeader:__experimentalHideHeader=!1}=props,ref=(0,react.useRef)(),instanceId=(0,use_instance_id.Z)(Modal),headingId=title?`components-modal-header-${instanceId}`:aria.labelledby,focusOnMountRef=(0,use_focus_on_mount.Z)(focusOnMount),constrainedTabbingRef=(0,use_constrained_tabbing.Z)(),focusReturnRef=(0,use_focus_return.Z)(),focusOutsideProps=(0,use_focus_outside.Z)(onRequestClose),contentRef=(0,react.useRef)(null),childrenContainerRef=(0,react.useRef)(null),[hasScrolledContent,setHasScrolledContent]=(0,react.useState)(!1),[hasScrollableContent,setHasScrollableContent]=(0,react.useState)(!1),isContentScrollable=(0,react.useCallback)((()=>{if(!contentRef.current)return;const closestScrollContainer=(0,get_scroll_container.Z)(contentRef.current);contentRef.current===closestScrollContainer?setHasScrollableContent(!0):setHasScrollableContent(!1)}),[contentRef]);(0,react.useEffect)((()=>(openModalCount++,1===openModalCount&&(hideApp(ref.current),document.body.classList.add(bodyOpenClassName)),()=>{openModalCount--,0===openModalCount&&(document.body.classList.remove(bodyOpenClassName),function showApp(){isHidden&&(hiddenElements.forEach((element=>{element.removeAttribute("aria-hidden")})),hiddenElements=[],isHidden=!1)}())})),[bodyOpenClassName]),(0,react.useLayoutEffect)((()=>{if(!window.ResizeObserver||!childrenContainerRef.current)return;const resizeObserver=new ResizeObserver(isContentScrollable);return resizeObserver.observe(childrenContainerRef.current),isContentScrollable(),()=>{resizeObserver.disconnect()}}),[isContentScrollable,childrenContainerRef]);const onContentContainerScroll=(0,react.useCallback)((e=>{var _e$currentTarget$scro,_e$currentTarget;const scrollY=null!==(_e$currentTarget$scro=null==e||null===(_e$currentTarget=e.currentTarget)||void 0===_e$currentTarget?void 0:_e$currentTarget.scrollTop)&&void 0!==_e$currentTarget$scro?_e$currentTarget$scro:-1;!hasScrolledContent&&scrollY>0?setHasScrolledContent(!0):hasScrolledContent&&scrollY<=0&&setHasScrolledContent(!1)}),[hasScrolledContent]);return(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{ref:(0,use_merge_refs.Z)([ref,forwardedRef]),className:classnames_default()("components-modal__screen-overlay",overlayClassName),onKeyDown:function handleEscapeKeyDown(event){event.nativeEvent.isComposing||229===event.keyCode||shouldCloseOnEsc&&"Escape"===event.code&&!event.defaultPrevented&&(event.preventDefault(),onRequestClose&&onRequestClose(event))},children:(0,jsx_runtime.jsx)(style_provider.Z,{document:document,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()("components-modal__frame",className,{"is-full-screen":isFullScreen}),style:style,ref:(0,use_merge_refs.Z)([constrainedTabbingRef,focusReturnRef,focusOnMountRef]),role:role,"aria-label":contentLabel,"aria-labelledby":contentLabel?void 0:headingId,"aria-describedby":aria.describedby,tabIndex:-1,...shouldCloseOnClickOutside?focusOutsideProps:{},onKeyDown:onKeyDown,children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("components-modal__content",{"hide-header":__experimentalHideHeader,"is-scrollable":hasScrollableContent,"has-scrolled-content":hasScrolledContent}),role:"document",onScroll:onContentContainerScroll,ref:contentRef,"aria-label":hasScrollableContent?(0,build_module.__)("Scrollable section"):void 0,tabIndex:hasScrollableContent?0:void 0,children:[!__experimentalHideHeader&&(0,jsx_runtime.jsxs)("div",{className:"components-modal__header",children:[(0,jsx_runtime.jsxs)("div",{className:"components-modal__header-heading-container",children:[icon&&(0,jsx_runtime.jsx)("span",{className:"components-modal__icon-container","aria-hidden":!0,children:icon}),title&&(0,jsx_runtime.jsx)("h1",{id:headingId,className:"components-modal__header-heading",children:title})]}),isDismissible&&(0,jsx_runtime.jsx)(src_button.ZP,{onClick:onRequestClose,icon:library_close.Z,label:closeButtonLabel||(0,build_module.__)("Close")})]}),(0,jsx_runtime.jsx)("div",{ref:childrenContainerRef,children:children})]})})})}),document.body)}));var src_modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:'Modals give users information and choices related to a task they’re trying to\naccomplish. They can contain critical information, require decisions, or\ninvolve multiple tasks.\n\n```jsx\nimport { Button, Modal } from \'@wordpress/components\';\nimport { useState } from \'@wordpress/element\';\n\nconst MyModal = () => {\n  const [ isOpen, setOpen ] = useState( false );\n  const openModal = () => setOpen( true );\n  const closeModal = () => setOpen( false );\n\n  return (\n    <>\n      <Button variant="secondary" onClick={ openModal }>\n        Open Modal\n      </Button>\n      { isOpen && (\n        <Modal title="This is my modal" onRequestClose={ closeModal }>\n          <Button variant="secondary" onClick={ closeModal }>\n            My custom close button\n          </Button>\n        </Modal>\n      ) }\n    </>\n  );\n};\n```',displayName:"Modal",props:{aria:{defaultValue:null,description:"",name:"aria",required:!1,type:{name:"{ describedby?: string; labelledby?: string; }"}},bodyOpenClassName:{defaultValue:{value:"'modal-open'"},description:"Class name added to the body element when the modal is open.",name:"bodyOpenClassName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\ncontent `div`.",name:"className",required:!1,type:{name:"string"}},closeButtonLabel:{defaultValue:{value:"`__( 'Close' )`"},description:"Label on the close button.",name:"closeButtonLabel",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"If this property is added, it will be added to the modal content `div` as\n`aria-label`.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`title` for other ways to provide a title.",name:"contentLabel",required:!1,type:{name:"string"}},focusOnMount:{defaultValue:{value:"true"},description:"If this property is true, it will focus the first tabbable element\nrendered in the modal.",name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement"'}},icon:{defaultValue:null,description:"If this property is added, an icon will be added before the title.",name:"icon",required:!1,type:{name:"Element"}},isDismissible:{defaultValue:{value:"true"},description:"If this property is set to false, the modal will not display a close icon\nand cannot be dismissed.",name:"isDismissible",required:!1,type:{name:"boolean"}},isFullScreen:{defaultValue:{value:"false"},description:"This property when set to `true` will render a full screen modal.",name:"isFullScreen",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handle the key down on the modal frame `div`.",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onRequestClose:{defaultValue:null,description:"This function is called to indicate that the modal should be closed.",name:"onRequestClose",required:!0,type:{name:"(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event>) => void"}},overlayClassName:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\noverlay `div`.",name:"overlayClassName",required:!1,type:{name:"string"}},role:{defaultValue:{value:"'dialog'"},description:"If this property is added, it will override the default role of the\nmodal.",name:"role",required:!1,type:{name:"AriaRole"}},shouldCloseOnClickOutside:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when a mouse click occurs outside of the modal content.",name:"shouldCloseOnClickOutside",required:!1,type:{name:"boolean"}},shouldCloseOnEsc:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when the escape key is pressed.",name:"shouldCloseOnEsc",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"If this property is added, it will be added to the modal frame `div`.",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"This property is used as the modal header's title.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`contentLabel` for other ways to provide a title.",name:"title",required:!1,type:{name:"string"}},__experimentalHideHeader:{defaultValue:{value:"false"},description:"When set to `true`, the Modal's header (including the icon, title and\nclose button) will not be rendered.\n\n_Warning_: This property is still experimental. “Experimental” means this\nis an early implementation subject to drastic and breaking changes.",name:"__experimentalHideHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"packages/components/src/modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{modal.displayName="modal",modal.__docgenInfo={description:'Modals give users information and choices related to a task they’re trying to\naccomplish. They can contain critical information, require decisions, or\ninvolve multiple tasks.\n\n```jsx\nimport { Button, Modal } from \'@wordpress/components\';\nimport { useState } from \'@wordpress/element\';\n\nconst MyModal = () => {\n  const [ isOpen, setOpen ] = useState( false );\n  const openModal = () => setOpen( true );\n  const closeModal = () => setOpen( false );\n\n  return (\n    <>\n      <Button variant="secondary" onClick={ openModal }>\n        Open Modal\n      </Button>\n      { isOpen && (\n        <Modal title="This is my modal" onRequestClose={ closeModal }>\n          <Button variant="secondary" onClick={ closeModal }>\n            My custom close button\n          </Button>\n        </Modal>\n      ) }\n    </>\n  );\n};\n```',displayName:"modal",props:{aria:{defaultValue:null,description:"",name:"aria",required:!1,type:{name:"{ describedby?: string; labelledby?: string; }"}},bodyOpenClassName:{defaultValue:{value:"'modal-open'"},description:"Class name added to the body element when the modal is open.",name:"bodyOpenClassName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\ncontent `div`.",name:"className",required:!1,type:{name:"string"}},closeButtonLabel:{defaultValue:{value:"`__( 'Close' )`"},description:"Label on the close button.",name:"closeButtonLabel",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"If this property is added, it will be added to the modal content `div` as\n`aria-label`.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`title` for other ways to provide a title.",name:"contentLabel",required:!1,type:{name:"string"}},focusOnMount:{defaultValue:{value:"true"},description:"If this property is true, it will focus the first tabbable element\nrendered in the modal.",name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement"'}},icon:{defaultValue:null,description:"If this property is added, an icon will be added before the title.",name:"icon",required:!1,type:{name:"Element"}},isDismissible:{defaultValue:{value:"true"},description:"If this property is set to false, the modal will not display a close icon\nand cannot be dismissed.",name:"isDismissible",required:!1,type:{name:"boolean"}},isFullScreen:{defaultValue:{value:"false"},description:"This property when set to `true` will render a full screen modal.",name:"isFullScreen",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handle the key down on the modal frame `div`.",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onRequestClose:{defaultValue:null,description:"This function is called to indicate that the modal should be closed.",name:"onRequestClose",required:!0,type:{name:"(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event>) => void"}},overlayClassName:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\noverlay `div`.",name:"overlayClassName",required:!1,type:{name:"string"}},role:{defaultValue:{value:"'dialog'"},description:"If this property is added, it will override the default role of the\nmodal.",name:"role",required:!1,type:{name:"AriaRole"}},shouldCloseOnClickOutside:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when a mouse click occurs outside of the modal content.",name:"shouldCloseOnClickOutside",required:!1,type:{name:"boolean"}},shouldCloseOnEsc:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when the escape key is pressed.",name:"shouldCloseOnEsc",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"If this property is added, it will be added to the modal frame `div`.",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"This property is used as the modal header's title.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`contentLabel` for other ways to provide a title.",name:"title",required:!1,type:{name:"string"}},__experimentalHideHeader:{defaultValue:{value:"false"},description:"When set to `true`, the Modal's header (including the icon, title and\nclose button) will not be rendered.\n\n_Warning_: This property is still experimental. “Experimental” means this\nis an early implementation subject to drastic and breaking changes.",name:"__experimentalHideHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/modal/index.tsx#modal"]={docgenInfo:modal.__docgenInfo,name:"modal",path:"packages/components/src/modal/index.tsx#modal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/ui/context/constants.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{cT:function(){return COMPONENT_NAMESPACE},_3:function(){return CONNECTED_NAMESPACE},rE:function(){return CONNECT_STATIC_NAMESPACE}});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Iq:function(){return contextConnect},H:function(){return hasConnectNamespace}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),process=__webpack_require__("./node_modules/process/browser.js");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function _contextConnect(Component,namespace,options){const WrappedComponent=null!=options&&options.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&void 0!==process&&process.env;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{eb:function(){return useComponentsContext},G8:function(){return ContextSystemProvider}});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=_ref2=>{let{children:children,value:value}=_ref2;const contextValue=function useContextSystemBridge(_ref){let{value:value}=_ref;const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&void 0!==process&&process.env}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_5__.P})),[parentContext,value])}({value:value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children:children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/context/context-system-provider.js"]={name:"BaseContextSystemProvider",docgenInfo:BaseContextSystemProvider.__docgenInfo,path:"packages/components/src/ui/context/context-system-provider.js"})},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return getStyledClassNameFromKey}});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),memize__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/memize/index.js");const getStyledClassNameFromKey=__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_1__)()((function getStyledClassName(namespace){return`components-${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return useContextSystem}});var context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),process=__webpack_require__("./node_modules/process/browser.js");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&void 0!==process&&process.env;const contextProps=(null==contextSystemProps?void 0:contextSystemProps[namespace])||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View",__webpack_exports__.Z=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.",displayName:"View",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/guide/stories/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return stories}});var react=__webpack_require__("./node_modules/react/index.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),dom_build_module=__webpack_require__("./packages/dom/build-module/index.js"),modal=__webpack_require__("./packages/components/src/modal/index.tsx"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PageControlIcon=_ref=>{let{isSelected:isSelected}=_ref;return(0,jsx_runtime.jsx)(svg.Wj,{width:"8",height:"8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)(svg.Cd,{cx:"4",cy:"4",r:"4",fill:isSelected?"#419ECD":"#E1E3E6"})})};function PageControl(_ref){let{currentPage:currentPage,numberOfPages:numberOfPages,setCurrentPage:setCurrentPage}=_ref;return(0,jsx_runtime.jsx)("ul",{className:"components-guide__page-control","aria-label":(0,i18n_build_module.__)("Guide controls"),children:Array.from({length:numberOfPages}).map(((_,page)=>(0,jsx_runtime.jsx)("li",{"aria-current":page===currentPage?"step":void 0,children:(0,jsx_runtime.jsx)(src_button.ZP,{icon:(0,jsx_runtime.jsx)(PageControlIcon,{isSelected:page===currentPage}),"aria-label":(0,i18n_build_module.gB)((0,i18n_build_module.__)("Page %1$d of %2$d"),page+1,numberOfPages),onClick:()=>setCurrentPage(page)},page)},page)))})}function Guide(_ref){let{children:children,className:className,contentLabel:contentLabel,finishButtonText:finishButtonText,onFinish:onFinish,pages:pages=[]}=_ref;const guideContainer=(0,react.useRef)(),[currentPage,setCurrentPage]=(0,react.useState)(0);(0,react.useEffect)((()=>{react.Children.count(children)&&(0,build_module.Z)("Passing children to <Guide>",{since:"5.5",alternative:"the `pages` prop"})}),[children]),(0,react.useEffect)((()=>{var _focus$tabbable$find,_focus$tabbable$find$;guideContainer.current&&(null===(_focus$tabbable$find=dom_build_module.T_.tabbable.find(guideContainer.current))||void 0===_focus$tabbable$find||null===(_focus$tabbable$find$=_focus$tabbable$find[0])||void 0===_focus$tabbable$find$||_focus$tabbable$find$.focus())}),[currentPage]),react.Children.count(children)&&(pages=react.Children.map(children,(child=>({content:child}))));const canGoBack=currentPage>0,canGoForward=currentPage<pages.length-1,goBack=()=>{canGoBack&&setCurrentPage(currentPage-1)},goForward=()=>{canGoForward&&setCurrentPage(currentPage+1)};return 0===pages.length?null:(0,jsx_runtime.jsx)(modal.Z,{className:classnames_default()("components-guide",className),contentLabel:contentLabel,onRequestClose:onFinish,onKeyDown:event=>{"ArrowLeft"===event.code?(goBack(),event.preventDefault()):"ArrowRight"===event.code&&(goForward(),event.preventDefault())},ref:guideContainer,children:(0,jsx_runtime.jsxs)("div",{className:"components-guide__container",children:[(0,jsx_runtime.jsxs)("div",{className:"components-guide__page",children:[pages[currentPage].image,pages.length>1&&(0,jsx_runtime.jsx)(PageControl,{currentPage:currentPage,numberOfPages:pages.length,setCurrentPage:setCurrentPage}),pages[currentPage].content]}),(0,jsx_runtime.jsxs)("div",{className:"components-guide__footer",children:[canGoBack&&(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-guide__back-button",onClick:goBack,children:(0,i18n_build_module.__)("Previous")}),canGoForward&&(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-guide__forward-button",onClick:goForward,children:(0,i18n_build_module.__)("Next")}),!canGoForward&&(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-guide__finish-button",onClick:onFinish,children:finishButtonText||(0,i18n_build_module.__)("Finish")})]})]})})}PageControlIcon.displayName="PageControlIcon",PageControlIcon.__docgenInfo={description:"",methods:[],displayName:"PageControlIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/guide/icons.js"]={name:"PageControlIcon",docgenInfo:PageControlIcon.__docgenInfo,path:"packages/components/src/guide/icons.js"}),PageControl.displayName="PageControl",PageControl.__docgenInfo={description:"",methods:[],displayName:"PageControl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/guide/page-control.js"]={name:"PageControl",docgenInfo:PageControl.__docgenInfo,path:"packages/components/src/guide/page-control.js"}),Guide.displayName="Guide",Guide.__docgenInfo={description:"",methods:[],displayName:"Guide",props:{pages:{defaultValue:{value:"[]",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/guide/index.js"]={name:"Guide",docgenInfo:Guide.__docgenInfo,path:"packages/components/src/guide/index.js"});var stories={parameters:{sourceLink:"packages/components/src/guide",storySource:{source:"/**\n * WordPress dependencies\n */\nimport { useState } from '@wordpress/element';\n\n/**\n * Internal dependencies\n */\nimport Button from '../../button';\nimport Guide from '../';\n\nexport default {\n\ttitle: 'Components/Guide',\n\tcomponent: Guide,\n\targTypes: {\n\t\tcontentLabel: { control: 'text' },\n\t\tfinishButtonText: { control: 'text' },\n\t\tonFinish: { action: 'onFinish' },\n\t},\n};\n\nconst Template = ( { onFinish, ...props } ) => {\n\tconst [ isOpen, setOpen ] = useState( false );\n\n\tconst openGuide = () => setOpen( true );\n\tconst closeGuide = () => setOpen( false );\n\n\treturn (\n\t\t<>\n\t\t\t<Button variant=\"secondary\" onClick={ openGuide }>\n\t\t\t\tOpen Guide\n\t\t\t</Button>\n\t\t\t{ isOpen && (\n\t\t\t\t<Guide\n\t\t\t\t\t{ ...props }\n\t\t\t\t\tonFinish={ ( ...finishArgs ) => {\n\t\t\t\t\t\tcloseGuide( ...finishArgs );\n\t\t\t\t\t\tonFinish( ...finishArgs );\n\t\t\t\t\t} }\n\t\t\t\t/>\n\t\t\t) }\n\t\t</>\n\t);\n};\n\nexport const Default = Template.bind( {} );\nDefault.args = {\n\tpages: Array.from( { length: 3 } ).map( ( _, page ) => ( {\n\t\tcontent: <p>{ `Page ${ page + 1 }` }</p>,\n\t} ) ),\n};\n",locationsMap:{default:{startLoc:{col:17,line:22},endLoc:{col:1,line:44},startBody:{col:17,line:22},endBody:{col:1,line:44}}}}},title:"Components/Guide",component:Guide,argTypes:{contentLabel:{control:"text"},finishButtonText:{control:"text"},onFinish:{action:"onFinish"}}};const Default=(_ref=>{let{onFinish:onFinish,...props}=_ref;const[isOpen,setOpen]=(0,react.useState)(!1),closeGuide=()=>setOpen(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_button.ZP,{variant:"secondary",onClick:()=>setOpen(!0),children:"Open Guide"}),isOpen&&(0,jsx_runtime.jsx)(Guide,{...props,onFinish:function(){closeGuide(...arguments),onFinish(...arguments)}})]})}).bind({});Default.args={pages:Array.from({length:3}).map(((_,page)=>({content:(0,jsx_runtime.jsx)("p",{children:`Page ${page+1}`})})))}}}]);