(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{146:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),c=a(5),s=a(7),i=a(0),l=a.n(i),u=a(15),m=a.n(u),p=a(150),h=a.n(p),d=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},l.a.createElement("div",{className:"block m-0"},l.a.createElement("div",{className:"block-content p-0"},l.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&l.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&l.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},l.a.createElement("i",{className:"si si-arrow-left"}),l.a.createElement(m.a,{duration:"500"})),this.props.goto_orders_page&&l.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-orders")},200)}},l.a.createElement("i",{className:"si si-arrow-left"}),l.a.createElement(m.a,{duration:"500"})),this.props.goto_accounts_page&&l.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-account")},200)}},l.a.createElement("i",{className:"si si-arrow-left"}),l.a.createElement(m.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&l.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.goBack()},200)}},l.a.createElement("i",{className:"si si-arrow-left"}),l.a.createElement(m.a,{duration:"500"}))),l.a.createElement("p",{className:"form-control search-input"},this.props.logo&&l.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?l.a.createElement("span",{className:"nav-page-title"},this.props.title):null,this.props.has_delivery_icon&&l.a.createElement(h.a,{left:!0},l.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?l.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},l.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),l.a.createElement("br",null),l.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},l.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,l.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&l.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},l.a.createElement("i",{className:"si si-magnifier"}),l.a.createElement(m.a,{duration:"500"}))))))))}}]),t}(i.Component);d.contextTypes={router:function(){return null}},t.a=d},151:function(e,t,a){"use strict";a.d(t,"e",function(){return s}),a.d(t,"g",function(){return i}),a.d(t,"f",function(){return l}),a.d(t,"j",function(){return u}),a.d(t,"c",function(){return m}),a.d(t,"h",function(){return p}),a.d(t,"k",function(){return h}),a.d(t,"d",function(){return d}),a.d(t,"i",function(){return f}),a.d(t,"l",function(){return g}),a.d(t,"b",function(){return y}),a.d(t,"a",function(){return b});var n=a(17),r=a(11),o=a(10),c=a.n(o),s=function(e,t,a,o,s,i,l){return function(u){c.a.post(r.N,{name:e,email:t,password:a,accessToken:o,phone:s,provider:i,address:l}).then(function(e){var t=e.data;return u({type:n.c,payload:t})}).catch(function(e){console.log(e)})}},i=function(e,t,a,o,s){return function(i){c.a.post(r.U,{name:e,email:t,phone:a,password:o,address:s}).then(function(e){var t=e.data;return i({type:n.e,payload:t})}).catch(function(e){console.log(e)})}},l=function(e){return function(t){e=[];localStorage.removeItem("userSetAddress"),localStorage.removeItem("geoLocation"),localStorage.removeItem("lastSavedNotificationToken"),t({type:n.d,payload:e}),t({type:n.f,payload:!1}),t({type:n.b,payload:[]})}},u=function(e,t,a){return function(o){return c.a.post(r.cb,{token:t,user_id:e,unique_order_id:a}).then(function(e){var t=e.data;return o({type:n.i,payload:t})}).catch(function(e){console.log(e)})}},m=function(e,t){return function(a){c.a.post(r.h,{token:t,user_id:e}).then(function(e){var t=e.data;return a({type:n.f,payload:t})}).catch(function(e){console.log(e)})}},p=function(e,t,a,o){return function(s){return c.a.post(r.Y,{email:e,phone:t,accessToken:a,provider:o}).then(function(e){var t=e.data;return s({type:n.g,payload:t})}).catch(function(e){console.log(e)})}},h=function(e,t){return function(a){c.a.post(r.db,{phone:e,otp:t}).then(function(e){var t=e.data;return a({type:n.j,payload:t})}).catch(function(e){console.log(e)})}},d=function(e,t){return function(a){c.a.post(r.L,{token:e,user_id:t}).then(function(e){var t=e.data;return a({type:n.b,payload:t})}).catch(function(e){console.log(e)})}},f=function(e){return function(t){c.a.post(r.Z,{email:e}).then(function(e){var a=e.data;return t({type:n.h,payload:a})}).catch(function(e){console.log(e)})}},g=function(e,t){return function(a){c.a.post(r.eb,{email:e,code:t}).then(function(e){var t=e.data;return a({type:n.k,payload:t})}).catch(function(e){console.log(e)})}},y=function(e,t,a){return function(o){c.a.post(r.e,{email:e,code:t,password:a}).then(function(e){var t=e.data;return o({type:n.a,payload:t})}).catch(function(e){console.log(e)})}},b=function(e,t){return function(){return c.a.post(r.d,{token:e,avatar:t}).then(function(e){return e.data}).catch(function(e){console.log(e)})}}},192:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(6),c=a(5),s=a(7),i=a(0),l=a.n(i),u=a(161),m=a.n(u),p=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.transaction;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"slider-wrapper transaction-wrapper"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"mr-4"},"deposit"===e.type&&l.a.createElement("span",{className:"btn btn-square btn-sm btn-outline-success min-width-125"},localStorage.getItem("walletDepositText")),"withdraw"===e.type&&l.a.createElement("span",{className:"btn btn-square btn-sm btn-outline-danger min-width-125"},localStorage.getItem("walletWithdrawText"))),l.a.createElement("div",{className:"mr-4 font-w700"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),e.amount/100,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")),l.a.createElement("div",{className:"mr-4"},e.meta.description),l.a.createElement("div",{className:"mr-4"},"true"===localStorage.getItem("showFromNowDate")?l.a.createElement(m.a,{fromNow:!0},e.created_at):l.a.createElement(m.a,{format:"DD/MM/YYYY hh:mma"},e.created_at)))))}}]),t}(i.Component);t.a=p},301:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(6),c=a(5),s=a(7),i=a(0),l=a.n(i),u=a(146),m=a(30),p=a(329),h=a(192),d=a(14),f=a(151),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={no_transactions:!1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user;e.success&&this.props.getWalletTransactions(e.data.auth_token,e.data.id)}},{key:"componentWillReceiveProps",value:function(e){0===e.wallet.transactions.length&&this.setState({no_transactions:!0})}},{key:"render",value:function(){if(window.innerWidth>768)return l.a.createElement(p.a,{to:"/"});var e=this.props,t=e.user,a=e.wallet;return null===localStorage.getItem("storeColor")?l.a.createElement(p.a,{to:"/"}):t.success?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{boxshadow:!0,has_title:!0,title:localStorage.getItem("accountMyWallet"),disable_search:!0,goto_accounts_page:!0}),l.a.createElement("div",{className:"block-content block-content-full pt-80 pb-80 height-100-percent px-15"},l.a.createElement("h3",{className:"btn btn-lg btn-outline-secondary btn-square d-block",style:{borderColor:"#eee"}},localStorage.getItem("walletName")," ",l.a.createElement("span",{style:{color:localStorage.getItem("storeColor")}},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.balance,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))),a.transactions&&0===a.transactions.length&&!this.state.no_transactions&&l.a.createElement(m.a,{height:600,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"75",height:"22"}),l.a.createElement("rect",{x:"0",y:"30",rx:"0",ry:"0",width:"350",height:"18"}),l.a.createElement("rect",{x:"0",y:"60",rx:"0",ry:"0",width:"300",height:"18"}),l.a.createElement("rect",{x:"0",y:"90",rx:"0",ry:"0",width:"100",height:"18"}),l.a.createElement("rect",{x:"0",y:170,rx:"0",ry:"0",width:"75",height:"22"}),l.a.createElement("rect",{x:"0",y:200,rx:"0",ry:"0",width:"350",height:"18"}),l.a.createElement("rect",{x:"0",y:230,rx:"0",ry:"0",width:"300",height:"18"}),l.a.createElement("rect",{x:"0",y:260,rx:"0",ry:"0",width:"100",height:"18"}),l.a.createElement("rect",{x:"0",y:340,rx:"0",ry:"0",width:"75",height:"22"}),l.a.createElement("rect",{x:"0",y:370,rx:"0",ry:"0",width:"350",height:"18"}),l.a.createElement("rect",{x:"0",y:400,rx:"0",ry:"0",width:"300",height:"18"}),l.a.createElement("rect",{x:"0",y:430,rx:"0",ry:"0",width:"100",height:"18"})),a.transactions&&0===a.transactions.length&&l.a.createElement("div",{className:"text-center mt-50 font-w600 text-muted"},localStorage.getItem("noWalletTransactionsText")),a.transactions&&a.transactions.map(function(e){return l.a.createElement(h.a,{key:e.id,transaction:e})}))):l.a.createElement(p.a,{to:"/login"})}}]),t}(i.Component);t.default=Object(d.b)(function(e){return{user:e.user.user,wallet:e.user.wallet}},{getWalletTransactions:f.d})(g)}}]);