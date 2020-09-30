!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=13)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,o){var n=o(8),a=o(9),r=o(10),c=o(12);e.exports=function(e,t){return n(e)||a(e,t)||r(e,t)||c()}},function(e,t){!function(){e.exports=this.wp.coreData}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,o){},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,a=!1,r=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(o.push(c.value),!t||o.length!==t);n=!0);}catch(e){a=!0,r=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return o}}},function(e,t,o){var n=o(11);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,o){"use strict";o.r(t);var n=o(0),a=(o(7),o(4));function r(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{id:"sd-setting-header",class:"container mx-auto flex justify-center justify-items-center p-10 mb-8 shadow bg-white "},Object(n.createElement)("h2",{class:"text-5xl"},"Smart Docs"),Object(n.createElement)("sup",{class:"text-sm text-gray-500"},"v ",sd_vars.version)))}var c=o(1),l=o(2),i=o.n(l),s=o(3),u=o(5);function m(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,r=Object(s.useEntityProp)("root","site","sd_archive_page_title"),l=i()(r,2),m=l[0],b=l[1],d=Object(s.useEntityProp)("root","site","sd_archive_page_slug"),g=i()(d,2),_=g[0],p=g[1],h=Object(s.useEntityProp)("root","site","sd_category_slug"),j=i()(h,2),O=j[0],f=j[1],E=Object(s.useEntityProp)("root","site","sd_tag_slug"),y=i()(E,2),v=y[0],x=y[1],C=Object(n.useState)(!1),S=i()(C,2),N=S[0],w=S[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.BaseControl,{id:"textarea-1",label:"Documentation Page Title",help:"Edit to change the default title for the documentation page.",className:"mb-3"},Object(n.createElement)(c.TextControl,{id:"sd_option-doc_homepage_title",className:"mt-3 block mb-3",value:m,placeholder:Object(a.__)("Documentation"),onChange:b})),Object(n.createElement)(c.BaseControl,{id:"textarea-2",label:"Documentation Archive Slug",help:"Edit to change the default slug for the documentation page.",className:"mb-3"},Object(n.createElement)(c.TextControl,{id:"sd_option-doc_homepage_slug",className:"mt-3 block mb-3",value:_,placeholder:Object(a.__)("Add documentation archive/home page slug"),onChange:p})),Object(n.createElement)(c.BaseControl,{id:"textarea-3",label:"Documentation Category Slug",help:"Edit to change the default slug for the documentation category.",className:"mb-3"},Object(n.createElement)(c.TextControl,{id:"sd_option-doc_category_slug",className:"mt-3 block mb-3",value:O,placeholder:Object(a.__)("Add custom category slug"),onChange:f})),Object(n.createElement)(c.BaseControl,{id:"textarea-3",label:"Documentation Tag Slug",help:"Edit to change the default slug for the documentation tag."},Object(n.createElement)(c.TextControl,{id:"sd_option-doc_tag_slug",className:"mt-3 block mb-3",value:v,placeholder:Object(a.__)("Add custom tag slug"),onChange:x})),Object(n.createElement)(c.Button,{isPrimary:"true",isBusy:N,onClick:function(){w(!0),wp.data.dispatch("core").saveSite({sd_archive_page_title:m,sd_archive_page_slug:_,sd_category_slug:O,sd_tag_slug:v}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),w(!1)}},"Save Changes"))}function b(){var e=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_icon"),t=i()(e,2),o=t[0],a=t[1],r=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_columns"),l=i()(r,2),u=l[0],m=l[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("hr",{className:"my-5"}),Object(n.createElement)("h3",{className:"my-3 font-semibold"},"List Layout Settings"),Object(n.createElement)(c.__experimentalNumberControl,{className:"my-3",isShiftStepEnabled:!0,onChange:m,shiftStep:1,value:u}),Object(n.createElement)(c.ToggleControl,{className:"my-3",label:"Show or Hide Doc Category Icon",checked:o,onChange:a}))}function d(){var e=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_icon"),t=i()(e,2),o=t[0],a=t[1],r=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_columns"),l=i()(r,2),u=l[0],m=l[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("hr",{className:"my-5"}),Object(n.createElement)("h3",{className:"my-3 font-semibold"},"Column Layout Settings"),Object(n.createElement)(c.__experimentalNumberControl,{className:"my-3",isShiftStepEnabled:!0,onChange:m,shiftStep:1,value:u}),Object(n.createElement)(c.ToggleControl,{className:"my-3",label:"Show or Hide Doc Category Icon",checked:o,onChange:a}))}function g(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_layout"),r=i()(a,2),l=r[0],m=r[1],g=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_count"),_=i()(g,2),p=_[0],h=_[1],j=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_authors"),O=i()(j,2),f=O[0],E=O[1],y=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_search"),v=i()(y,2),x=v[0],C=v[1],S=Object(n.useState)(!1),N=i()(S,2),w=N[0],P=N[1],T=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_icon"),k=i()(T,1)[0],D=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_columns"),H=i()(D,1)[0],L=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_icon"),A=i()(L,1)[0],B=Object(s.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_columns"),F=i()(B,1)[0];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.BaseControl,{label:"Documentation Page Layout"},Object(n.createElement)(c.__experimentalRadioGroup,{id:"sd_option-doc-homepage-layout",className:"m-5",label:"Documentation Page Layout",checked:l,onChange:m},Object(n.createElement)(c.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(c.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Count",checked:p,onChange:h}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Authors",checked:f,onChange:E}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Authors",checked:x,onChange:C}),Object(n.createElement)("div",null,"list"===l?Object(n.createElement)(b,null):null),Object(n.createElement)("div",null,"grid"===l?Object(n.createElement)(d,null):null),Object(n.createElement)(c.Button,{isPrimary:"true",isBusy:w,onClick:function(){P(!0);var e={ibx_sd_doc_page_layout:l,ibx_sd_doc_page_authors:f,ibx_sd_doc_page_search:x,ibx_sd_doc_page_count:p,ibx_sd_doc_page_list_layout_icon:k,ibx_sd_doc_page_list_layout_columns:H,ibx_sd_doc_page_grid_layout_icon:A,ibx_sd_doc_page_grid_layout_columns:F};wp.data.dispatch("core").saveSite(e).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),P(!1)}},"Save Changes"))}function _(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Sidebar"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Doc Title Permalink Copy Icon"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Breadcrumbs"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Comments"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Social Share options"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Ratings Buttons"}))}function p(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.BaseControl,{label:"Number of docs to show per page"},Object(n.createElement)(c.__experimentalNumberControl,null)),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Sidebar"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Search Bar"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Suggested Articles"}))}function h(){var e="py-3 px-4 text-sl duration-200";return Object(n.createElement)(c.TabPanel,{className:"sd-layout-settings-tabs flex",activeClass:"is-active",orientation:"vertical",tabs:[{name:"documentation_page",title:"Doc Page",className:e},{name:"single_page",title:"Single Page",className:e},{name:"archive_page",title:"Archive Page",className:e}]},(function(e){return"documentation_page"===e.name?Object(n.createElement)(g,null):"single_page"===e.name?Object(n.createElement)(_,null):"archive_page"===e.name?Object(n.createElement)(p,null):void 0}))}function j(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.BaseControl,{label:"Documentation Page Layout"},Object(n.createElement)(c.__experimentalRadioGroup,{label:"Width",defaultchecked:"50",className:"block"},Object(n.createElement)(c.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(c.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Count"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Authors"}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Authors"}))}var O=function(e){return"general"===e?Object(n.createElement)(m,null):"layout"===e?Object(n.createElement)(h,null):void 0};function f(){var e="py-3 px-4 text-base duration-200";return Object(n.createElement)(c.TabPanel,{className:"sd-settings-tabs m-5 col-span-2 bg-white",activeClass:"is-active",onSelect:O,tabs:[{name:"general",title:"General",className:e},{name:"layout",title:"Layout",className:e},{name:"search",title:"Search",className:e}]},(function(e){return"general"===e.name?Object(n.createElement)(m,null):"layout"===e.name?Object(n.createElement)(h,null):"search"===e.name?Object(n.createElement)(j,null):void 0}))}function E(){return Object(n.createElement)(c.Card,{isElevated:"true",className:"col-span-1 m-5 h-64"},Object(n.createElement)(c.CardHeader,{className:"font-bold text-xl"},"Help/Support"),Object(n.createElement)(c.CardBody,null,"Found a issue? or Have a suggestion? ",Object(n.createElement)("br",null),Object(n.createElement)("br",null),"We use Github to track issues and suggestions. Click the link below to go to our Github Page and post issue/suggestion."),Object(n.createElement)(c.CardFooter,null,Object(n.createElement)(c.ExternalLink,{href:"https://github.com/helloideabox/smart-docs/issues"},"Raise a Ticket")))}var y=o(6);function v(){var e=Object(u.useDispatch)("core/notices").removeNotice,t=Object(u.useSelect)((function(e){return e("core/notices").getNotices()}),[]),o=Object(y.filter)(t,{isDismissible:!0,type:"default"}),a=Object(y.filter)(t,{isDismissible:!1,type:"default"}),r=Object(y.filter)(t,{type:"snackbar"});return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.NoticeList,{notices:a,className:"components-notice-list components-editor-notices__pinned"}),Object(n.createElement)(c.NoticeList,{notices:o,className:"components-notice-list components-editor-notices__dismissible",onRemove:e}),Object(n.createElement)(c.SnackbarList,{notices:r,className:"components-snackbar-list components-editor-notices__snackbar",onRemove:e}))}var x=document.querySelector(".loader"),C=function(){return x.classList.remove("loader--hide")},S=function(){return x.classList.add("loader--hide")},N=function(e){var t=e.hideLoader;return Object(n.useEffect)(t,[]),Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r,null),Object(n.createElement)("div",{className:"grid grid-cols-3 container mx-auto"},Object(n.createElement)(f,null),Object(n.createElement)(E,null)),Object(n.createElement)(v,null))};setTimeout((function(){Object(n.render)(Object(n.createElement)(N,{hideLoader:S,showLoader:C}),document.getElementById("sd-setting-root"))}),0)}]);