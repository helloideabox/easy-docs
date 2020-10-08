!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=18)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,o){var n=o(11),a=o(12),r=o(7),c=o(13);e.exports=function(e,t){return n(e)||a(e,t)||r(e,t)||c()}},function(e,t){!function(){e.exports=this.wp.coreData}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,o){var n=o(8);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}},function(e,t,o){var n=o(14),a=o(15),r=o(7),c=o(16);e.exports=function(e){return n(e)||a(e)||r(e)||c()}},function(e,t,o){},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,a=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(o.push(c.value),!t||o.length!==t);n=!0);}catch(e){a=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return o}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,o){var n=o(8);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){!function(){e.exports=this.wp.notices}()},function(e,t,o){"use strict";o.r(t);var n=o(0),a=(o(10),o(5));function r(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{id:"sd-setting-header",className:" mx-auto flex justify-center justify-items-center p-10 mb-8 shadow bg-white "},Object(n.createElement)("h2",{className:"text-5xl"},"Smart Docs"),Object(n.createElement)("sup",{className:"text-sm text-gray-500"},"v ",sd_vars.version)))}var c=o(1),s=o(2),i=o.n(s),l=o(3),u=o(4);function m(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,r=Object(l.useEntityProp)("root","site","sd_archive_page_title"),s=i()(r,2),m=s[0],b=s[1],d=Object(l.useEntityProp)("root","site","sd_archive_page_slug"),_=i()(d,2),g=_[0],p=_[1],h=Object(l.useEntityProp)("root","site","sd_category_slug"),f=i()(h,2),j=f[0],y=f[1],O=Object(l.useEntityProp)("root","site","sd_tag_slug"),E=i()(O,2),v=E[0],x=E[1],C=Object(n.useState)(!1),S=i()(C,2),N=S[0],k=S[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.BaseControl,{id:"textarea-1",label:"Documentation Page Title",help:"Edit to change the default title for the documentation page.",className:"mb-3"},Object(n.createElement)(c.TextControl,{id:"sd_option-doc_homepage_title",className:"mt-2 block mb-2",value:m,placeholder:Object(a.__)("Documentation"),onChange:b})),Object(n.createElement)(c.BaseControl,{id:"textarea-2",label:"Documentation Archive Slug",help:"Edit to change the default slug for the documentation page.",className:"mb-3"},Object(n.createElement)(c.TextControl,{id:"sd_option-doc_homepage_slug",className:"mt-2 block mb-2",value:g,placeholder:Object(a.__)("Add documentation archive/home page slug"),onChange:p})),Object(n.createElement)(c.BaseControl,{id:"textarea-3",label:"Documentation Category Slug",help:"Edit to change the default slug for the documentation category.",className:"mb-3"},Object(n.createElement)(c.TextControl,{id:"sd_option-doc_category_slug",className:"mt-2 block mb-2",value:j,placeholder:Object(a.__)("Add custom category slug"),onChange:y})),Object(n.createElement)(c.BaseControl,{id:"textarea-3",label:"Documentation Tag Slug",help:"Edit to change the default slug for the documentation tag."},Object(n.createElement)(c.TextControl,{id:"sd_option-doc_tag_slug",className:"mt-2 block mb-2",value:v,placeholder:Object(a.__)("Add custom tag slug"),onChange:x})),Object(n.createElement)(c.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:N,onClick:function(){k(!0),wp.data.dispatch("core").saveSite({sd_archive_page_title:m,sd_archive_page_slug:g,sd_category_slug:j,sd_tag_slug:v}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),k(!1)}},"Save Changes"))}function b(){var e=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_icon"),t=i()(e,2),o=t[0],a=t[1],r=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_columns"),s=i()(r,2),u=s[0],m=s[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("hr",{className:"my-5"}),Object(n.createElement)("h3",{className:"my-3 font-semibold"},"List Layout Settings"),Object(n.createElement)(c.BaseControl,{label:"List Columns",className:"inline-number-control"},Object(n.createElement)(c.__experimentalNumberControl,{className:"my-3 w-16 ml-4",isShiftStepEnabled:!0,onChange:m,shiftStep:1,value:u})),Object(n.createElement)(c.ToggleControl,{className:"my-3",label:"Show or Hide Doc Category Icon",checked:o,onChange:a}))}function d(){var e=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_icon"),t=i()(e,2),o=t[0],a=t[1],r=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_columns"),s=i()(r,2),u=s[0],m=s[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("hr",{className:"my-5"}),Object(n.createElement)("h3",{className:"my-3 font-semibold"},"Grid Layout Settings"),Object(n.createElement)(c.BaseControl,{label:"Grid Columns",className:"inline-number-control"},Object(n.createElement)(c.__experimentalNumberControl,{className:"my-3 w-16 ml-4",isShiftStepEnabled:!0,onChange:m,shiftStep:1,value:u})),Object(n.createElement)(c.ToggleControl,{className:"my-3",label:"Show or Hide Doc Category Icon",checked:o,onChange:a}))}function _(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_layout"),r=i()(a,2),s=r[0],m=r[1],_=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_count"),g=i()(_,2),p=g[0],h=g[1],f=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_authors"),j=i()(f,2),y=j[0],O=j[1],E=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_search"),v=i()(E,2),x=v[0],C=v[1],S=Object(n.useState)(!1),N=i()(S,2),k=N[0],P=N[1],w=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_icon"),T=i()(w,1)[0],D=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_columns"),B=i()(D,1)[0],L=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_icon"),A=i()(L,1)[0],H=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_columns"),F=i()(H,1)[0];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.BaseControl,{label:"Documentation Page Layout"},Object(n.createElement)(c.__experimentalRadioGroup,{id:"sd_option-doc-homepage-layout",className:"ml-5",label:"Documentation Page Layout",checked:s,onChange:m},Object(n.createElement)(c.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(c.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Count",checked:p,onChange:h}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Authors",checked:y,onChange:O}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Docs Authors",checked:x,onChange:C}),Object(n.createElement)("div",null,"list"===s?Object(n.createElement)(b,null):null),Object(n.createElement)("div",null,"grid"===s?Object(n.createElement)(d,null):null),Object(n.createElement)(c.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:k,onClick:function(){P(!0);var e={ibx_sd_doc_page_layout:s,ibx_sd_doc_page_authors:y,ibx_sd_doc_page_search:x,ibx_sd_doc_page_count:p,ibx_sd_doc_page_list_layout_icon:T,ibx_sd_doc_page_list_layout_columns:B,ibx_sd_doc_page_grid_layout_icon:A,ibx_sd_doc_page_grid_layout_columns:F};wp.data.dispatch("core").saveSite(e).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),P(!1)}},"Save Changes"))}function g(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(l.useEntityProp)("root","site","ibx_sd_single_page_sidebar"),r=i()(a,2),s=r[0],m=r[1],b=Object(l.useEntityProp)("root","site","ibx_sd_single_page_permalink"),d=i()(b,2),_=d[0],g=d[1],p=Object(l.useEntityProp)("root","site","ibx_sd_single_page_breadcrumbs"),h=i()(p,2),f=h[0],j=h[1],y=Object(l.useEntityProp)("root","site","ibx_sd_single_page_comments"),O=i()(y,2),E=O[0],v=O[1],x=Object(l.useEntityProp)("root","site","ibx_sd_single_page_social_share_options"),C=i()(x,2),S=C[0],N=C[1],k=Object(l.useEntityProp)("root","site","ibx_sd_single_ratings"),P=i()(k,2),w=P[0],T=P[1],D=Object(n.useState)(!1),B=i()(D,2),L=B[0],A=B[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Sidebar",checked:s,onChange:m}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Doc Title Permalink Copy Icon",checked:_,onChange:g}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Breadcrumbs",checked:f,onChange:j}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Comments",checked:E,onChange:v}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Social Share options",checked:S,onChange:N}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Ratings Buttons",checked:w,onChange:T}),Object(n.createElement)(c.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:L,onClick:function(){A(!0),wp.data.dispatch("core").saveSite({ibx_sd_single_page_sidebar:s,ibx_sd_single_page_permalink:_,ibx_sd_single_page_breadcrumbs:f,ibx_sd_single_page_comments:E,ibx_sd_single_page_social_share_options:S,ibx_sd_single_ratings:w}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),A(!1)}},"Save Changes"))}function p(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(l.useEntityProp)("root","site","ibx_sd_archive_sidebar"),r=i()(a,2),s=r[0],m=r[1],b=Object(l.useEntityProp)("root","site","ibx_sd_archive_layout"),d=i()(b,2),_=d[0],g=d[1],p=Object(l.useEntityProp)("root","site","ibx_sd_archive_search"),h=i()(p,2),f=h[0],j=h[1],y=Object(l.useEntityProp)("root","site","ibx_sd_archive_suggested"),O=i()(y,2),E=O[0],v=O[1],x=Object(n.useState)(!1),C=i()(x,2),S=C[0],N=C[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.BaseControl,{label:"Archive Page Layout"},Object(n.createElement)(c.__experimentalRadioGroup,{id:"sd_option-doc-archive-layout",className:"ml-5",label:"Documentation Archive Page Layout",checked:_,onChange:g},Object(n.createElement)(c.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(c.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Sidebar",checked:s,onChange:m}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Search Bar",checked:f,onChange:j}),Object(n.createElement)(c.ToggleControl,{label:"Show or Hide Suggested Articles",checked:E,onChange:v}),Object(n.createElement)(c.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:S,onClick:function(){N(!0),wp.data.dispatch("core").saveSite({ibx_sd_archive_sidebar:s,ibx_sd_archive_layout:_,ibx_sd_archive_search:f,ibx_sd_archive_suggested:E}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),N(!1)}},"Save Changes"))}function h(){var e="py-3 px-4 text-sl duration-200";return Object(n.createElement)(c.TabPanel,{className:"sd-layout-settings-tabs flex",activeClass:"is-active",orientation:"vertical",tabs:[{name:"documentation_page",title:"Doc Page",className:e},{name:"single_page",title:"Single Page",className:e},{name:"archive_page",title:"Archive Page",className:e}]},(function(e){return"documentation_page"===e.name?Object(n.createElement)(_,null):"single_page"===e.name?Object(n.createElement)(g,null):"archive_page"===e.name?Object(n.createElement)(p,null):void 0}))}var f=o(9),j=o.n(f);function y(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(l.useEntityProp)("root","site","ibx_sd_search_post_types"),r=i()(a,2),s=r[0],m=r[1],b=Object(n.useState)(!1),d=i()(b,2),_=d[0],g=d[1],p=Object(n.useState)(s),h=i()(p,2),f=h[0],y=h[1];return f!==s&&m(f),Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.BaseControl,{id:"textarea-1",label:"Select Post Types",help:"Select post types to search in.",className:"mb-3"},Object(n.createElement)("ul",null,Object.keys(sd_vars.post_types).map((function(e,t){return Object(n.createElement)("li",{key:t},Object(n.createElement)(c.CheckboxControl,{label:sd_vars.post_types[e],checked:f.some((function(t){return t===e})),onChange:function(t){if(t)y((function(t){return[].concat(j()(t),[e])}));else{var o;o=f.filter((function(t){return t!==e})),y(o)}}}))})))),Object(n.createElement)(c.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:_,onClick:function(){g(!0),wp.data.dispatch("core").saveSite({ibx_sd_search_post_types:s}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),g(!1)}},"Save Changes"))}function O(){var e="sd-setting-primary-tab px-4 text-sm";return Object(n.createElement)(c.TabPanel,{className:"sd-settings-tabs m-5 col-span-2 row-span-2 bg-white",activeClass:"is-active",tabs:[{name:"general",title:"General",className:e},{name:"layout",title:"Layout",className:e},{name:"search",title:"Search",className:e}]},(function(e){return"general"===e.name?Object(n.createElement)(m,null):"layout"===e.name?Object(n.createElement)(h,null):"search"===e.name?Object(n.createElement)(y,null):void 0}))}function E(){return Object(n.createElement)(c.Card,{isElevated:"true",className:"smart-docs-side-card col-span-1 m-5 h-fit-content"},Object(n.createElement)(c.CardHeader,{className:"smart-docs-card-header font-bold text-xl pl-5 pt-4 pb-3"},"Help/Support"),Object(n.createElement)(c.CardBody,null,"Found a issue? or Have a suggestion? ",Object(n.createElement)("br",null),Object(n.createElement)("br",null),"We use Github to track issues and suggestions. Click the link below to go to our Github Page and post issue/suggestion."),Object(n.createElement)(c.CardFooter,{className:"smart-docs-card-footer pt-4 pb-4"},Object(n.createElement)(c.ExternalLink,{className:"w-full inline-flex font-medium text-sm",href:"https://github.com/helloideabox/smart-docs/issues"},"Raise a Ticket")))}var v=o(6);o(17);function x(){var e=Object(u.useDispatch)("core/notices").removeNotice,t=Object(u.useSelect)((function(e){return e("core/notices").getNotices()}),[]),o=Object(v.filter)(t,{isDismissible:!0,type:"default"}),a=Object(v.filter)(t,{isDismissible:!1,type:"default"}),r=Object(v.filter)(t,{type:"snackbar"});return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.NoticeList,{notices:a,className:"components-notice-list components-editor-notices__pinned"}),Object(n.createElement)(c.NoticeList,{notices:o,className:"components-notice-list components-editor-notices__dismissible",onRemove:e}),Object(n.createElement)(c.SnackbarList,{notices:r,className:"components-snackbar-list components-editor-notices__snackbar",onRemove:e}))}var C=document.querySelector(".loader"),S=function(){return C.classList.remove("loader--hide")},N=function(){return C.classList.add("loader--hide")},k=function(e){var t=e.hideLoader;return Object(n.useEffect)(t,[]),Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r,null),Object(n.createElement)("div",{className:"grid grid-cols-3 grid-rows-2 container mx-auto"},Object(n.createElement)(O,null),Object(n.createElement)(E,null)),Object(n.createElement)(x,null))};setTimeout((function(){Object(n.render)(Object(n.createElement)(k,{hideLoader:N,showLoader:S}),document.getElementById("sd-setting-root"))}),0)}]);