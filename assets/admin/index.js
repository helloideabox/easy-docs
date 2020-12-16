!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=18)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,o){var n=o(11),a=o(12),c=o(7),r=o(13);e.exports=function(e,t){return n(e)||a(e,t)||c(e,t)||r()}},function(e,t){!function(){e.exports=this.wp.coreData}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,o){var n=o(8);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}},function(e,t,o){var n=o(14),a=o(15),c=o(7),r=o(16);e.exports=function(e){return n(e)||a(e)||c(e)||r()}},function(e,t,o){},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,a=!1,c=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw c}}return o}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,o){var n=o(8);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){!function(){e.exports=this.wp.notices}()},function(e,t,o){"use strict";o.r(t);var n=o(0),a=(o(10),o(4));function c(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{id:"smartdocs-setting-header",className:" mx-auto flex justify-center justify-items-center p-10 mb-8 shadow bg-white "},Object(n.createElement)("h2",{className:"text-5xl"},"Smart Docs"),Object(n.createElement)("sup",{className:"text-sm text-gray-500"},"v ",sd_vars.version)))}var r=o(1),s=o(2),i=o.n(s),l=o(3),u=o(5);function m(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,c=Object(l.useEntityProp)("root","site","ibx_sd_archive_page_title"),s=i()(c,2),m=s[0],b=s[1],d=Object(l.useEntityProp)("root","site","ibx_sd_archive_page_slug"),_=i()(d,2),g=_[0],p=_[1],h=Object(l.useEntityProp)("root","site","ibx_sd_category_slug"),j=i()(h,2),f=j[0],O=j[1],y=Object(l.useEntityProp)("root","site","ibx_sd_tag_slug"),E=i()(y,2),v=E[0],x=E[1],C=Object(l.useEntityProp)("root","site","ibx_sd_enable_single_template"),S=i()(C,2),N=S[0],k=S[1],P=Object(l.useEntityProp)("root","site","ibx_sd_enable_category_and_tag_template"),w=i()(P,2),T=w[0],D=w[1],B=Object(l.useEntityProp)("root","site","smartdocs_custom_doc_page"),L=i()(B,2),A=L[0],H=L[1],F=Object(l.useEntityProp)("root","site","smartdocs_custom_doc_page_enable"),R=i()(F,2),G=R[0],I=R[1],M=Object(n.useState)([{label:"Select docs page from the list",value:null}]),U=i()(M,2),q=U[0],Q=U[1],W=[{label:"Select docs page from the list",value:null}];wp.apiFetch({path:"/wp/v2/pages"}).then((function(e){jQuery.each(e,(function(e,t){W.push({label:t.title.rendered,value:t.id})})),Q(W)})).catch((function(e){console.log(e)}));var $=Object(n.useState)(!1),z=i()($,2),J=z[0],K=z[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.ToggleControl,{className:"mt-2 mb-2",label:Object(a.__)("Use built-in Doc archive"),help:Object(a.__)("Note: if you disable built-in documentation archive, you can use shortcode or page builder widgets to design your documentation page."),checked:G,onChange:I}),Object(n.createElement)(n.Fragment,null,!G&&Object(n.createElement)(r.SelectControl,{label:Object(a.__)("Select Custom Doc Page"),labelPosition:"top",id:"smartdocs-option_select-custom-doc-page",options:q,value:A,onChange:H})),Object(n.createElement)(r.BaseControl,{label:"Documentation Page Title",help:"Edit to change the default title for the documentation page.",className:"mb-3"},Object(n.createElement)(r.TextControl,{id:"sd_option-doc_homepage_title",className:"mt-2 block mb-2",value:m,placeholder:Object(a.__)("Documentation"),onChange:b})),Object(n.createElement)(r.BaseControl,{label:"Documentation Archive Slug",help:"Edit to change the default slug for the documentation page.",className:"mb-3"},Object(n.createElement)(r.TextControl,{id:"sd_option-doc_homepage_slug",className:"mt-2 block mb-2",value:g,placeholder:Object(a.__)("Add documentation archive/home page slug"),onChange:p})),Object(n.createElement)(r.BaseControl,{label:"Documentation Category Slug",help:"Edit to change the default slug for the documentation category.",className:"mb-3"},Object(n.createElement)(r.TextControl,{id:"sd_option-doc_category_slug",className:"mt-2 block mb-2",value:f,placeholder:Object(a.__)("Add custom category slug"),onChange:O})),Object(n.createElement)(r.BaseControl,{label:"Documentation Tag Slug",help:"Edit to change the default slug for the documentation tag."},Object(n.createElement)(r.TextControl,{id:"sd_option-doc_tag_slug",className:"mt-2 block mb-2",value:v,placeholder:Object(a.__)("Add custom tag slug"),onChange:x})),Object(n.createElement)(r.BaseControl,{className:"mt-3 mb-3",id:"smartdocs-custom-templates",label:Object(a.__)("Custom Templates")},Object(n.createElement)(r.ToggleControl,{className:"mt-2 mb-2",label:Object(a.__)("Use built-in template for Docs single page"),checked:N,onChange:k}),Object(n.createElement)(r.ToggleControl,{className:"mt-2 mb-2",label:Object(a.__)("Use built-in template for Docs archive page"),checked:T,onChange:D})),Object(n.createElement)(r.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:J,onClick:function(){K(!0),wp.data.dispatch("core").saveSite({ibx_sd_archive_page_title:m,ibx_sd_archive_page_slug:g,ibx_sd_category_slug:f,ibx_sd_tag_slug:v,ibx_sd_enable_single_template:N,ibx_sd_enable_category_and_tag_template:T,smartdocs_custom_doc_page_enable:G,smartdocs_custom_doc_page:A}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),K(!1)}},"Save Changes"))}function b(){var e=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_icon"),t=i()(e,2),o=t[0],a=t[1],c=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_columns"),s=i()(c,2),u=s[0],m=s[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("hr",{className:"my-5"}),Object(n.createElement)("h3",{className:"my-3 font-semibold"},"List Layout Settings"),Object(n.createElement)(r.BaseControl,{label:"List Columns",className:"inline-number-control"},Object(n.createElement)(r.__experimentalNumberControl,{className:"my-3 w-16 ml-4",isShiftStepEnabled:!0,onChange:m,shiftStep:1,value:u})),Object(n.createElement)(r.ToggleControl,{className:"my-3",label:"Show or Hide Doc Category Icon",checked:o,onChange:a}))}function d(){var e=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_icon"),t=i()(e,2),o=t[0],a=t[1],c=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_columns"),s=i()(c,2),u=s[0],m=s[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("hr",{className:"my-5"}),Object(n.createElement)("h3",{className:"my-3 font-semibold"},"Grid Layout Settings"),Object(n.createElement)(r.BaseControl,{label:"Grid Columns",className:"inline-number-control"},Object(n.createElement)(r.__experimentalNumberControl,{className:"my-3 w-16 ml-4",isShiftStepEnabled:!0,onChange:m,shiftStep:1,value:u})),Object(n.createElement)(r.ToggleControl,{className:"my-3",label:"Show or Hide Doc Category Icon",checked:o,onChange:a}))}function _(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_layout"),c=i()(a,2),s=c[0],m=c[1],_=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_count"),g=i()(_,2),p=g[0],h=g[1],j=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_authors"),f=i()(j,2),O=f[0],y=f[1],E=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_search"),v=i()(E,2),x=v[0],C=v[1],S=Object(n.useState)(!1),N=i()(S,2),k=N[0],P=N[1],w=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_icon"),T=i()(w,1)[0],D=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_columns"),B=i()(D,1)[0],L=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_icon"),A=i()(L,1)[0],H=Object(l.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_columns"),F=i()(H,1)[0];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.BaseControl,{label:"Documentation Page Layout"},Object(n.createElement)(r.__experimentalRadioGroup,{id:"sd_option-doc-homepage-layout",className:"ml-5",label:"Documentation Page Layout",checked:s,onChange:m},Object(n.createElement)(r.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(r.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Count",checked:p,onChange:h}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Authors",checked:O,onChange:y}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Authors",checked:x,onChange:C}),Object(n.createElement)("div",null,"list"===s?Object(n.createElement)(b,null):null),Object(n.createElement)("div",null,"grid"===s?Object(n.createElement)(d,null):null),Object(n.createElement)(r.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:k,onClick:function(){P(!0);var e={ibx_sd_doc_page_layout:s,ibx_sd_doc_page_authors:O,ibx_sd_doc_page_search:x,ibx_sd_doc_page_count:p,ibx_sd_doc_page_list_layout_icon:T,ibx_sd_doc_page_list_layout_columns:B,ibx_sd_doc_page_grid_layout_icon:A,ibx_sd_doc_page_grid_layout_columns:F};wp.data.dispatch("core").saveSite(e).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),P(!1)}},"Save Changes"))}function g(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(l.useEntityProp)("root","site","ibx_sd_single_page_sidebar"),c=i()(a,2),s=c[0],m=c[1],b=Object(l.useEntityProp)("root","site","ibx_sd_single_page_permalink"),d=i()(b,2),_=d[0],g=d[1],p=Object(l.useEntityProp)("root","site","ibx_sd_single_page_breadcrumbs"),h=i()(p,2),j=h[0],f=h[1],O=Object(l.useEntityProp)("root","site","ibx_sd_single_page_comments"),y=i()(O,2),E=y[0],v=y[1],x=Object(l.useEntityProp)("root","site","ibx_sd_single_page_social_share_options"),C=i()(x,2),S=C[0],N=C[1],k=Object(l.useEntityProp)("root","site","ibx_sd_single_ratings"),P=i()(k,2),w=P[0],T=P[1],D=Object(n.useState)(!1),B=i()(D,2),L=B[0],A=B[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Sidebar",checked:s,onChange:m}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Doc Title Permalink Copy Icon",checked:_,onChange:g}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Breadcrumbs",checked:j,onChange:f}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Comments",checked:E,onChange:v}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Social Share options",checked:S,onChange:N}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Ratings Buttons",checked:w,onChange:T}),Object(n.createElement)(r.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:L,onClick:function(){A(!0),wp.data.dispatch("core").saveSite({ibx_sd_single_page_sidebar:s,ibx_sd_single_page_permalink:_,ibx_sd_single_page_breadcrumbs:j,ibx_sd_single_page_comments:E,ibx_sd_single_page_social_share_options:S,ibx_sd_single_ratings:w}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),A(!1)}},"Save Changes"))}function p(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(l.useEntityProp)("root","site","ibx_sd_archive_sidebar"),c=i()(a,2),s=c[0],m=c[1],b=Object(l.useEntityProp)("root","site","ibx_sd_archive_layout"),d=i()(b,2),_=d[0],g=d[1],p=Object(l.useEntityProp)("root","site","ibx_sd_archive_search"),h=i()(p,2),j=h[0],f=h[1],O=Object(l.useEntityProp)("root","site","ibx_sd_archive_suggested"),y=i()(O,2),E=y[0],v=y[1],x=Object(n.useState)(!1),C=i()(x,2),S=C[0],N=C[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.BaseControl,{label:"Archive Page Layout"},Object(n.createElement)(r.__experimentalRadioGroup,{id:"sd_option-doc-archive-layout",className:"ml-5",label:"Documentation Archive Page Layout",checked:_,onChange:g},Object(n.createElement)(r.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(r.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Sidebar",checked:s,onChange:m}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Search Bar",checked:j,onChange:f}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Suggested Articles",checked:E,onChange:v}),Object(n.createElement)(r.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:S,onClick:function(){N(!0),wp.data.dispatch("core").saveSite({ibx_sd_archive_sidebar:s,ibx_sd_archive_layout:_,ibx_sd_archive_search:j,ibx_sd_archive_suggested:E}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),N(!1)}},"Save Changes"))}function h(){var e="py-3 px-4 text-sl duration-200";return Object(n.createElement)(r.TabPanel,{className:"smartdocs-layout-settings-tabs flex",activeClass:"is-active",orientation:"vertical",tabs:[{name:"documentation_page",title:"Doc Page",className:e},{name:"single_page",title:"Single Page",className:e},{name:"archive_page",title:"Archive Page",className:e}]},(function(e){return"documentation_page"===e.name?Object(n.createElement)(_,null):"single_page"===e.name?Object(n.createElement)(g,null):"archive_page"===e.name?Object(n.createElement)(p,null):void 0}))}var j=o(9),f=o.n(j);function O(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(l.useEntityProp)("root","site","ibx_sd_search_post_types"),c=i()(a,2),s=c[0],m=c[1],b=Object(n.useState)(!1),d=i()(b,2),_=d[0],g=d[1],p=Object(n.useState)(s),h=i()(p,2),j=h[0],O=h[1];j!==s&&m(j);return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.BaseControl,{id:"textarea-1",label:"Select Post Types",help:"Select post types to search in.",className:"mb-3"},Object(n.createElement)("ul",null,Object.keys(sd_vars.post_types).map((function(e,t){return Object(n.createElement)("li",{key:t},Object(n.createElement)(r.CheckboxControl,{label:sd_vars.post_types[e],checked:j.some((function(t){return t===e})),onChange:function(t){if(t)O((function(t){return[].concat(f()(t),[e])}));else{var o;o=j.filter((function(t){return t!==e})),O(o)}}}))})))),Object(n.createElement)(r.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:_,onClick:function(){g(!0),wp.data.dispatch("core").saveSite({ibx_sd_search_post_types:s}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),g(!1)}},"Save Changes"))}function y(){var e="smartdocs-setting-primary-tab px-4 text-sm";return Object(n.createElement)(r.TabPanel,{className:"smartdocs-settings-tabs m-5 col-span-2 row-span-2 bg-white",activeClass:"is-active",tabs:[{name:"general",title:"General",className:e},{name:"layout",title:"Layout",className:e},{name:"search",title:"Search",className:e}]},(function(e){return"general"===e.name?Object(n.createElement)(m,null):"layout"===e.name?Object(n.createElement)(h,null):"search"===e.name?Object(n.createElement)(O,null):void 0}))}function E(){return Object(n.createElement)(r.Card,{isElevated:"true",className:"smart-docs-side-card col-span-1 m-5 h-fit-content"},Object(n.createElement)(r.CardHeader,{className:"smart-docs-card-header font-bold text-xl pl-5 pt-4 pb-3"},"Help/Support"),Object(n.createElement)(r.CardBody,null,"Found a issue? or Have a suggestion? ",Object(n.createElement)("br",null),Object(n.createElement)("br",null),"We use Github to track issues and suggestions. Click the link below to go to our Github Page and post issue/suggestion."),Object(n.createElement)(r.CardFooter,{className:"smart-docs-card-footer pt-4 pb-4"},Object(n.createElement)(r.ExternalLink,{className:"w-full inline-flex font-medium text-sm",href:"https://github.com/helloideabox/smart-docs/issues"},"Raise a Ticket")))}var v=o(6);o(17);function x(){var e=Object(u.useDispatch)("core/notices").removeNotice,t=Object(u.useSelect)((function(e){return e("core/notices").getNotices()}),[]),o=Object(v.filter)(t,{isDismissible:!0,type:"default"}),a=Object(v.filter)(t,{isDismissible:!1,type:"default"}),c=Object(v.filter)(t,{type:"snackbar"});return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.NoticeList,{notices:a,className:"components-notice-list components-editor-notices__pinned"}),Object(n.createElement)(r.NoticeList,{notices:o,className:"components-notice-list components-editor-notices__dismissible",onRemove:e}),Object(n.createElement)(r.SnackbarList,{notices:c,className:"components-snackbar-list components-editor-notices__snackbar",onRemove:e}))}var C=document.querySelector(".loader"),S=function(){return C.classList.remove("loader--hide")},N=function(){return C.classList.add("loader--hide")},k=function(e){var t=e.hideLoader;return Object(n.useEffect)(t,[]),Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c,null),Object(n.createElement)("div",{className:"grid grid-cols-3 grid-rows-2 container mx-auto"},Object(n.createElement)(y,null),Object(n.createElement)(E,null)),Object(n.createElement)(x,null))};setTimeout((function(){Object(n.render)(Object(n.createElement)(k,{hideLoader:N,showLoader:S}),document.getElementById("smartdocs-setting-root"))}),0)}]);
