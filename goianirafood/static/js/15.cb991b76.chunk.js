(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{151:function(e,t,a){"use strict";a.d(t,"e",function(){return s}),a.d(t,"g",function(){return c}),a.d(t,"f",function(){return i}),a.d(t,"j",function(){return u}),a.d(t,"c",function(){return m}),a.d(t,"h",function(){return p}),a.d(t,"k",function(){return g}),a.d(t,"d",function(){return d}),a.d(t,"i",function(){return f}),a.d(t,"l",function(){return h}),a.d(t,"b",function(){return v}),a.d(t,"a",function(){return y});var n=a(17),r=a(11),o=a(10),l=a.n(o),s=function(e,t,a,o,s,c,i){return function(u){l.a.post(r.N,{name:e,email:t,password:a,accessToken:o,phone:s,provider:c,address:i}).then(function(e){var t=e.data;return u({type:n.c,payload:t})}).catch(function(e){console.log(e)})}},c=function(e,t,a,o,s){return function(c){l.a.post(r.U,{name:e,email:t,phone:a,password:o,address:s}).then(function(e){var t=e.data;return c({type:n.e,payload:t})}).catch(function(e){console.log(e)})}},i=function(e){return function(t){e=[];localStorage.removeItem("userSetAddress"),localStorage.removeItem("geoLocation"),localStorage.removeItem("lastSavedNotificationToken"),t({type:n.d,payload:e}),t({type:n.f,payload:!1}),t({type:n.b,payload:[]})}},u=function(e,t,a){return function(o){return l.a.post(r.cb,{token:t,user_id:e,unique_order_id:a}).then(function(e){var t=e.data;return o({type:n.i,payload:t})}).catch(function(e){console.log(e)})}},m=function(e,t){return function(a){l.a.post(r.h,{token:t,user_id:e}).then(function(e){var t=e.data;return a({type:n.f,payload:t})}).catch(function(e){console.log(e)})}},p=function(e,t,a,o){return function(s){return l.a.post(r.Y,{email:e,phone:t,accessToken:a,provider:o}).then(function(e){var t=e.data;return s({type:n.g,payload:t})}).catch(function(e){console.log(e)})}},g=function(e,t){return function(a){l.a.post(r.db,{phone:e,otp:t}).then(function(e){var t=e.data;return a({type:n.j,payload:t})}).catch(function(e){console.log(e)})}},d=function(e,t){return function(a){l.a.post(r.L,{token:e,user_id:t}).then(function(e){var t=e.data;return a({type:n.b,payload:t})}).catch(function(e){console.log(e)})}},f=function(e){return function(t){l.a.post(r.Z,{email:e}).then(function(e){var a=e.data;return t({type:n.h,payload:a})}).catch(function(e){console.log(e)})}},h=function(e,t){return function(a){l.a.post(r.eb,{email:e,code:t}).then(function(e){var t=e.data;return a({type:n.k,payload:t})}).catch(function(e){console.log(e)})}},v=function(e,t,a){return function(o){l.a.post(r.e,{email:e,code:t,password:a}).then(function(e){var t=e.data;return o({type:n.a,payload:t})}).catch(function(e){console.log(e)})}},y=function(e,t){return function(){return l.a.post(r.d,{token:e,avatar:t}).then(function(e){return e.data}).catch(function(e){console.log(e)})}}},190:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"c",function(){return c}),a.d(t,"a",function(){return i});var n=a(45),r=a(11),o=a(10),l=a.n(o),s=function(){return function(e){l.a.post(r.u).then(function(t){var a=t.data;return e({type:n.b,payload:a})}).catch(function(e){console.log(e)})}},c=function(e){return function(t){l.a.post(r.K,{slug:e}).then(function(e){var a=e.data;return t({type:n.c,payload:a})}).catch(function(e){console.log(e)})}},i=function(){return function(e){return e({type:n.a,payload:[]})}}},309:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(6),l=a(5),s=a(7),c=a(0),i=a.n(c),u=a(69),m=a(14),p=a(151),g=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"block-content block-content-full bg-white",onClick:function(){return e.props.logoutUser(e.props.user)}},i.a.createElement("div",{className:"display-flex"},i.a.createElement("div",{className:"flex-auto logout-text"},localStorage.getItem("accountLogout")),i.a.createElement("div",{className:"flex-auto text-right"},i.a.createElement("i",{className:"si si-power logout-icon"})))))}}]),t}(c.Component),d=Object(m.b)(function(e){return{user:e.user.user}},{logoutUser:p.f})(g),f=a(25),h=a(329),v=a(319),y=a(330),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={open:!1},a.handleClose=function(){a.setState({open:!1})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){!1===e.avatarPopupOpen&&this.setState({open:!1}),!0===e.avatarPopupOpen&&this.setState({open:!0})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,{maxWidth:!1,fullWidth:!0,fullScreen:!0,open:this.state.open,onClose:this.handleClose},i.a.createElement(y.a,{id:"responsive-dialog-title"},localStorage.getItem("chooseAvatarText")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user1.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user1"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user2.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user2"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user3.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user3"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user4.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user4"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user5.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user5"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user6.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user6"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user7.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user7"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user8.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user8"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user9.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user9"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("img",{src:"/assets/img/various/avatars/user10.gif",alt:"Avatar",style:{width:"85px"},onClick:this.props.handleAvatarChange,"data-name":"user10"}))),i.a.createElement("div",{className:"d-flex justify-content-center mt-50"},i.a.createElement("button",{className:"btn btn-default btn-md",onClick:this.handleClose},localStorage.getItem("cancelGoBackBtn"))))))}}]),t}(c.Component),b=a(8),N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={avatarPopupOpen:!1,loading:!1},a.openAvatarPopup=function(){a.setState({avatarPopupOpen:!0})},a.handleAvatarChange=function(e){a.setState({loading:!0}),a.props.changeAvatar(a.props.user_info.auth_token,e.target.getAttribute("data-name")).then(function(e){e&&e.success&&(a.props.updateUserInfo(),a.setState({loading:!1}))})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({avatarPopupOpen:e.avatarPopup})}},{key:"render",value:function(){var e=this.props.user_info;return i.a.createElement(i.a.Fragment,null,this.state.loading&&i.a.createElement(b.a,null),i.a.createElement(E,{avatarPopupOpen:this.state.avatarPopupOpen,handleAvatarChange:this.handleAvatarChange}),i.a.createElement("div",{className:"block-content block-content-full bg-light"},i.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},i.a.createElement("div",null,i.a.createElement("h2",{className:"font-w600 mb-10"},e.name),i.a.createElement("p",{className:"text-muted"},e.phone," ",i.a.createElement("br",null)," ",e.email)),i.a.createElement("div",null,null==e.avatar?i.a.createElement("img",{src:"/assets/img/various/avatars/user2.gif",alt:e.name,style:{width:"100px"},onClick:this.openAvatarPopup}):i.a.createElement("img",{src:"/assets/img/various/avatars/".concat(e.avatar,".gif"),alt:e.name,style:{width:"100px"},onClick:this.openAvatarPopup})))))}}]),t}(c.Component),O=Object(m.b)(function(e){return{}},{changeAvatar:p.a})(N),k=a(185),C=a.n(k),w=a(31),S=a(177),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={open:!1},a.handlePopupOpen=function(){a.setState({open:!0})},a.handlePopupClose=function(){a.setState({open:!1})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.page;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"display-flex py-2",onClick:this.handlePopupOpen},i.a.createElement("div",{className:"flex-auto border-0"},e.name),i.a.createElement("div",{className:"flex-auto text-right"},i.a.createElement("i",{className:"si si-arrow-right"}))),i.a.createElement(S.a,{open:this.state.open,onClose:this.handlePopupClose,closeIconSize:32},i.a.createElement("div",{className:"mt-50",dangerouslySetInnerHTML:{__html:e.body}})))}}]),t}(c.Component),j=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.pages;return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{trigger:localStorage.getItem("accountMyAccount"),transitionTime:200,open:!0},i.a.createElement("div",{className:"category-list-item"},i.a.createElement(w.a,{to:"/my-addresses",delay:200},i.a.createElement("div",{className:"display-flex py-2"},i.a.createElement("div",{className:"mr-10 border-0"},i.a.createElement("i",{className:"si si-home"})),i.a.createElement("div",{className:"flex-auto border-0"},localStorage.getItem("accountManageAddress")),i.a.createElement("div",{className:"flex-auto text-right"},i.a.createElement("i",{className:"si si-arrow-right"}))))),i.a.createElement("div",{className:"category-list-item"},i.a.createElement(w.a,{to:"/my-orders",delay:200},i.a.createElement("div",{className:"display-flex py-2"},i.a.createElement("div",{className:"mr-10 border-0"},i.a.createElement("i",{className:"si si-basket-loaded"})),i.a.createElement("div",{className:"flex-auto border-0"},localStorage.getItem("accountMyOrders")),i.a.createElement("div",{className:"flex-auto text-right"},i.a.createElement("i",{className:"si si-arrow-right"}))))),i.a.createElement("div",{className:"category-list-item"},i.a.createElement(w.a,{to:"/my-wallet",delay:200},i.a.createElement("div",{className:"display-flex py-2"},i.a.createElement("div",{className:"mr-10 border-0"},i.a.createElement("i",{className:"si si-wallet"})),i.a.createElement("div",{className:"flex-auto border-0"},localStorage.getItem("accountMyWallet")),i.a.createElement("div",{className:"flex-auto text-right"},i.a.createElement("i",{className:"si si-arrow-right"})))))),i.a.createElement(C.a,{trigger:localStorage.getItem("accountHelpFaq"),transitionTime:200},e.map(function(e){return i.a.createElement("div",{key:e.id,className:"category-list-item"},i.a.createElement(x,{page:e}))})))}}]),t}(c.Component),A=a(190),I=a(18),P=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={avatarPopup:!1},a.updateUserInfo=function(){var e=a.props.user;a.props.updateUserInfo(e.data.id,e.data.auth_token).then(function(e){e&&e.payload.data.id&&a.setState({avatarPopup:!1})})},a.handleOnChange=function(e){a.props.getSingleLanguageData(e.target.value),localStorage.setItem("userPreferedLanguage",e.target.value)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user;null!==localStorage.getItem("storeColor")&&e.success&&(this.props.getPages(),this.updateUserInfo(e))}},{key:"componentWillReceiveProps",value:function(e){if(this.props.languages!==e.languages)if(localStorage.getItem("userPreferedLanguage"))this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));else if(e.languages.length){console.log("Fetching Translation Data...");var t=e.languages.filter(function(e){return 1===e.is_default})[0].id;this.props.getSingleLanguageData(t)}}},{key:"render",value:function(){if(window.innerWidth>768)return i.a.createElement(h.a,{to:"/"});if(null===localStorage.getItem("storeColor"))return i.a.createElement(h.a,{to:"/"});var e=this.props,t=e.user,a=e.pages;if(!t.success)return i.a.createElement(h.a,{to:"/login"});var n=this.props.languages;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{seotitle:localStorage.getItem("footerAccount"),seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),i.a.createElement(O,{user_info:t.data,updateUserInfo:this.updateUserInfo,avatarPopup:this.state.avatarPopup}),i.a.createElement(j,{pages:a}),i.a.createElement(d,null),i.a.createElement(u.a,{active_account:!0}),n&&n.length>1&&i.a.createElement("div",{className:"mt-4 d-flex align-items-center justify-content-center mb-100"},i.a.createElement("div",{className:"mr-2"},localStorage.getItem("changeLanguageText")),i.a.createElement("select",{onChange:this.handleOnChange,defaultValue:localStorage.getItem("userPreferedLanguage")?localStorage.getItem("userPreferedLanguage"):n.filter(function(e){return 1===e.is_default})[0].id,className:"form-control language-select"},n.map(function(e){return i.a.createElement("option",{value:e.id,key:e.id},e.language_name)}))))}}]),t}(c.Component);t.default=Object(m.b)(function(e){return{user:e.user.user,pages:e.pages.pages,languages:e.languages.languages,language:e.languages.language}},{getPages:A.b,getSingleLanguageData:I.b,updateUserInfo:p.j})(P)}}]);