(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(e,t,a){"use strict";a.d(t,"e",function(){return s}),a.d(t,"g",function(){return i}),a.d(t,"f",function(){return c}),a.d(t,"j",function(){return d}),a.d(t,"c",function(){return u}),a.d(t,"h",function(){return m}),a.d(t,"k",function(){return g}),a.d(t,"d",function(){return p}),a.d(t,"i",function(){return h}),a.d(t,"l",function(){return f}),a.d(t,"b",function(){return S}),a.d(t,"a",function(){return v});var o=a(17),n=a(11),r=a(10),l=a.n(r),s=function(e,t,a,r,s,i,c){return function(d){l.a.post(n.N,{name:e,email:t,password:a,accessToken:r,phone:s,provider:i,address:c}).then(function(e){var t=e.data;return d({type:o.c,payload:t})}).catch(function(e){console.log(e)})}},i=function(e,t,a,r,s){return function(i){l.a.post(n.U,{name:e,email:t,phone:a,password:r,address:s}).then(function(e){var t=e.data;return i({type:o.e,payload:t})}).catch(function(e){console.log(e)})}},c=function(e){return function(t){e=[];localStorage.removeItem("userSetAddress"),localStorage.removeItem("geoLocation"),localStorage.removeItem("lastSavedNotificationToken"),t({type:o.d,payload:e}),t({type:o.f,payload:!1}),t({type:o.b,payload:[]})}},d=function(e,t,a){return function(r){return l.a.post(n.cb,{token:t,user_id:e,unique_order_id:a}).then(function(e){var t=e.data;return r({type:o.i,payload:t})}).catch(function(e){console.log(e)})}},u=function(e,t){return function(a){l.a.post(n.h,{token:t,user_id:e}).then(function(e){var t=e.data;return a({type:o.f,payload:t})}).catch(function(e){console.log(e)})}},m=function(e,t,a,r){return function(s){return l.a.post(n.Y,{email:e,phone:t,accessToken:a,provider:r}).then(function(e){var t=e.data;return s({type:o.g,payload:t})}).catch(function(e){console.log(e)})}},g=function(e,t){return function(a){l.a.post(n.db,{phone:e,otp:t}).then(function(e){var t=e.data;return a({type:o.j,payload:t})}).catch(function(e){console.log(e)})}},p=function(e,t){return function(a){l.a.post(n.L,{token:e,user_id:t}).then(function(e){var t=e.data;return a({type:o.b,payload:t})}).catch(function(e){console.log(e)})}},h=function(e){return function(t){l.a.post(n.Z,{email:e}).then(function(e){var a=e.data;return t({type:o.h,payload:a})}).catch(function(e){console.log(e)})}},f=function(e,t){return function(a){l.a.post(n.eb,{email:e,code:t}).then(function(e){var t=e.data;return a({type:o.k,payload:t})}).catch(function(e){console.log(e)})}},S=function(e,t,a){return function(r){l.a.post(n.e,{email:e,code:t,password:a}).then(function(e){var t=e.data;return r({type:o.a,payload:t})}).catch(function(e){console.log(e)})}},v=function(e,t){return function(){return l.a.post(n.d,{token:e,avatar:t}).then(function(e){return e.data}).catch(function(e){console.log(e)})}}},165:function(e,t,a){"use strict";var o=a(3),n=a(4),r=a(6),l=a(5),s=a(7),i=a(0),c=a.n(i),d=a(15),u=a.n(d),m=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:"btn search-navs-btns back-button",style:{position:"relative"},onClick:this.context.router.history.goBack},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(u.a,{duration:"500"})))}}]),t}(i.Component);m.contextTypes={router:function(){return null}},t.a=m},188:function(e,t,a){"use strict";var o=a(213),n=a(0),r=a.n(n),l=a(207),s=a.n(l);t.a=s()(function(e){var t=e.children,a=e.triggerLogin,n=Object(o.a)(e,["children","triggerLogin"]);return r.a.createElement("button",Object.assign({onClick:a},n,{className:n.className}),t)})},299:function(e,t,a){"use strict";a.r(t);var o=a(67),n=a(3),r=a(4),l=a(6),s=a(5),i=a(7),c=a(68),d=a(0),u=a.n(d),m=a(151),g=a(165),p=a(30),h=a(293),f=a(329),S=a(163),v=a.n(S),b=a(188),y=a(14),I=a(8),E=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={loading:!1,name:"",email:"",phone:"",password:"",otp:"",accessToken:"",provider:"",error:!1,email_phone_already_used:!1,invalid_otp:!1,showResendOtp:!1,countdownStart:!1,countDownSeconds:15},e.handleInputChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.handleRegister=function(t){t.preventDefault(),e.validator.fieldValid("name")&&e.validator.fieldValid("email")&&e.validator.fieldValid("phone")&&e.validator.fieldValid("password")?(e.setState({loading:!0}),"true"===localStorage.getItem("enSOV")?e.props.sendOtp(e.state.email,e.state.phone,null).then(function(t){t.payload.otp||e.setState({error:!0})}):e.props.registerUser(e.state.name,e.state.email,e.state.phone,e.state.password,JSON.parse(localStorage.getItem("userSetAddress")))):(console.log("Validation Failed"),e.validator.showMessages())},e.handleRegisterAfterSocialLogin=function(t){t.preventDefault(),e.setState({loading:!0}),e.validator.fieldValid("phone")?"true"===localStorage.getItem("enSOV")?e.props.sendOtp(e.state.email,e.state.phone,null).then(function(t){t.payload.otp||e.setState({error:!0})}):e.props.loginUser(e.state.name,e.state.email,null,e.state.accessToken,e.state.phone,e.state.provider,JSON.parse(localStorage.getItem("userSetAddress"))):(e.setState({loading:!1}),console.log("Validation Failed"),e.validator.showMessages())},e.resendOtp=function(){e.validator.fieldValid("phone")&&(e.setState({countDownSeconds:15,showResendOtp:!1}),e.props.sendOtp(e.state.email,e.state.phone,null).then(function(t){t.payload.otp||e.setState({error:!0})}))},e.handleVerifyOtp=function(t){t.preventDefault(),console.log("verify otp clicked"),e.validator.fieldValid("otp")&&(e.setState({loading:!0}),e.props.verifyOtp(e.state.phone,e.state.otp))},e.handleSocialLogin=function(t){"true"===localStorage.getItem("enSOV")?(e.setState({name:t._profile.name,email:t._profile.email,accessToken:t._token.accessToken,provider:t._provider,social_login:!0}),e.props.sendOtp(t._profile.email,null,t._token.accessToken,t._provider).then(function(t){t.payload.otp||e.setState({error:!0})})):(e.setState({name:t._profile.name,email:t._profile.email,accessToken:t._token.accessToken,provider:t._provider,social_login:!0}),e.props.loginUser(t._profile.name,t._profile.email,null,t._token.accessToken,null,t._provider,JSON.parse(localStorage.getItem("userSetAddress"))))},e.handleSocialLoginFailure=function(t){e.setState({error:!0})},e.handleCountDown=function(){setTimeout(function(){e.setState({showResendOtp:!0}),clearInterval(e.intervalID)},16e3),e.intervalID=setInterval(function(){console.log("interval going on"),e.setState({countDownSeconds:e.state.countDownSeconds-1})},1e3)},e.validator=new v.a({autoForceUpdate:Object(c.a)(Object(c.a)(e)),messages:{required:localStorage.getItem("fieldValidationMsg"),string:localStorage.getItem("nameValidationMsg"),email:localStorage.getItem("emailValidationMsg"),regex:localStorage.getItem("phoneValidationMsg"),min:localStorage.getItem("minimumLengthValidationMessage")}}),e}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;"false"===localStorage.getItem("enableFacebookLogin")&&"false"===localStorage.getItem("enableGoogleLogin")&&document.getElementById("socialLoginDiv")&&document.getElementById("socialLoginDiv").classList.add("hidden"),"true"!==localStorage.getItem("enableFacebookLogin")&&"true"!==localStorage.getItem("enableGoogleLogin")||setTimeout(function(){e.refs.socialLogin&&e.refs.socialLogin.classList.remove("hidden"),e.refs.socialLoginLoader&&e.refs.socialLoginLoader.classList.add("hidden")},500)}},{key:"componentWillReceiveProps",value:function(e){if(this.props.user!==e.user&&this.setState({loading:!1}),e.user.success){if(null!==e.user.data.default_address){var t={lat:e.user.data.default_address.latitude,lng:e.user.data.default_address.longitude,address:e.user.data.default_address.address,house:e.user.data.default_address.house,tag:e.user.data.default_address.tag};localStorage.setItem("userSetAddress",JSON.stringify(t))}this.context.router.history.goBack()}e.user.email_phone_already_used&&this.setState({email_phone_already_used:!0}),e.user.otp&&(this.setState({email_phone_already_used:!1,error:!1}),document.getElementById("registerForm").classList.add("hidden"),document.getElementById("socialLoginDiv").classList.add("hidden"),document.getElementById("phoneFormAfterSocialLogin").classList.add("hidden"),document.getElementById("otpForm").classList.remove("hidden"),this.setState({countdownStart:!0}),this.handleCountDown(),this.validator.hideMessages()),e.user.valid_otp&&(this.setState({invalid_otp:!1,error:!1,loading:!0}),this.state.social_login?this.props.loginUser(this.state.name,this.state.email,null,this.state.accessToken,this.state.phone,this.state.provider,JSON.parse(localStorage.getItem("userSetAddress"))):this.props.registerUser(this.state.name,this.state.email,this.state.phone,this.state.password,JSON.parse(localStorage.getItem("userSetAddress"))),console.log("VALID OTP, REG USER NOW")),!1===e.user.valid_otp&&(console.log("Invalid OTP"),this.setState({invalid_otp:!0})),e.user||this.setState({error:!0}),e.user.proceed_login&&(console.log("From Social : user already exists"),this.props.loginUser(this.state.name,this.state.email,null,this.state.accessToken,null,this.state.provider,JSON.parse(localStorage.getItem("userSetAddress")))),e.user.enter_phone_after_social_login&&(this.validator.hideMessages(),document.getElementById("registerForm").classList.add("hidden"),document.getElementById("socialLoginDiv").classList.add("hidden"),document.getElementById("phoneFormAfterSocialLogin").classList.remove("hidden"),console.log("ask to fill the phone number and send otp process..."))}},{key:"componentWillUnmount",value:function(){console.log("Countdown cleared"),clearInterval(this.intervalID)}},{key:"render",value:function(){return window.innerWidth>768?u.a.createElement(f.a,{to:"/"}):null===localStorage.getItem("storeColor")?u.a.createElement(f.a,{to:"/"}):this.props.user.success?u.a.createElement(f.a,{to:"/my-account"}):u.a.createElement(u.a.Fragment,null,this.state.error&&u.a.createElement("div",{className:"auth-error"},u.a.createElement("div",{className:"error-shake"},localStorage.getItem("loginErrorMessage"))),this.state.email_phone_already_used&&u.a.createElement("div",{className:"auth-error"},u.a.createElement("div",{className:"error-shake"},localStorage.getItem("emailPhoneAlreadyRegistered"))),this.state.invalid_otp&&u.a.createElement("div",{className:"auth-error"},u.a.createElement("div",{className:"error-shake"},localStorage.getItem("invalidOtpMsg"))),this.state.loading&&u.a.createElement(I.a,null),u.a.createElement("div",{style:{backgroundColor:"#f2f4f9"}},u.a.createElement("div",{className:"input-group"},u.a.createElement("div",{className:"input-group-prepend"},u.a.createElement(g.a,{history:this.props.history}))),u.a.createElement("img",{src:"/assets/img/login-header.png",className:"login-image pull-right mr-15",alt:"login-header"}),u.a.createElement("div",{className:"login-texts px-15 mt-50 pb-20"},u.a.createElement("span",{className:"login-title"},localStorage.getItem("registerRegisterTitle")),u.a.createElement("br",null),u.a.createElement("span",{className:"login-subtitle"},localStorage.getItem("registerRegisterSubTitle")))),u.a.createElement("div",{className:"bg-white"},u.a.createElement("form",{onSubmit:this.handleRegister,id:"registerForm"},u.a.createElement("div",{className:"form-group px-15 pt-30"},u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginNameLabel")," ",this.validator.message("name",this.state.name,"required|string")),u.a.createElement("div",{className:"col-md-9 pb-5"},u.a.createElement("input",{type:"text",name:"name",onChange:this.handleInputChange,className:"form-control edit-address-input"})),u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginEmailLabel")," ",this.validator.message("email",this.state.email,"required|email")),u.a.createElement("div",{className:"col-md-9 pb-5"},u.a.createElement("input",{type:"text",name:"email",onChange:this.handleInputChange,className:"form-control edit-address-input"})),u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginPhoneLabel")," ",this.validator.message("phone",this.state.phone,["required",{regex:["^\\+[1-9]\\d{1,14}$"]},{min:["8"]}])),u.a.createElement("div",{className:"col-md-9 pb-5"},u.a.createElement("input",{defaultValue:null===localStorage.getItem("phoneCountryCode")?"":localStorage.getItem("phoneCountryCode"),name:"phone",type:"tel",onChange:this.handleInputChange,className:"form-control edit-address-input"})),u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginPasswordLabel")," ",this.validator.message("password",this.state.password,"required|min:8")),u.a.createElement("div",{className:"col-md-9"},u.a.createElement("input",{type:"password",name:"password",onChange:this.handleInputChange,className:"form-control edit-address-input"}))),u.a.createElement("div",{className:"mt-20 px-15 pt-15 button-block"},u.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("registerRegisterTitle")))),u.a.createElement("form",{onSubmit:this.handleVerifyOtp,id:"otpForm",className:"hidden"},u.a.createElement("div",{className:"form-group px-15 pt-30"},u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("otpSentMsg")," ",this.state.phone,this.validator.message("otp",this.state.otp,"required|numeric|min:4|max:6")),u.a.createElement("div",{className:"col-md-9"},u.a.createElement("input",{name:"otp",type:"tel",onChange:this.handleInputChange,className:"form-control edit-address-input",required:!0})),u.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("verifyOtpBtnText")),u.a.createElement("div",{className:"mt-30 mb-10"},this.state.showResendOtp&&u.a.createElement("div",{className:"resend-otp",onClick:this.resendOtp},localStorage.getItem("resendOtpMsg")," ",this.state.phone),this.state.countDownSeconds>0&&u.a.createElement("div",{className:"resend-otp countdown"},localStorage.getItem("resendOtpCountdownMsg")," ",this.state.countDownSeconds)))),u.a.createElement("form",{onSubmit:this.handleRegisterAfterSocialLogin,id:"phoneFormAfterSocialLogin",className:"hidden"},u.a.createElement("div",{className:"form-group px-15 pt-30"},u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("socialWelcomeText")," ",this.state.name,","),u.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("enterPhoneToVerify")," ",this.validator.message("phone",this.state.phone,["required",{regex:["^\\+[1-9]\\d{1,14}$"]},{min:["8"]}])),u.a.createElement("div",{className:"col-md-9 pb-5"},u.a.createElement("input",{defaultValue:null===localStorage.getItem("phoneCountryCode")?"":localStorage.getItem("phoneCountryCode"),name:"phone",type:"tel",onChange:this.handleInputChange,className:"form-control edit-address-input"})),u.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("registerRegisterTitle")))),u.a.createElement("div",{className:"text-center mt-3 mb-20",id:"socialLoginDiv"},u.a.createElement("p",{className:"login-or mt-2"},"OR"),u.a.createElement("div",{ref:"socialLoginLoader"},u.a.createElement(p.a,{height:60,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},u.a.createElement("rect",{x:"28",y:"0",rx:"0",ry:"0",width:"165",height:"45"}),u.a.createElement("rect",{x:"210",y:"0",rx:"0",ry:"0",width:"165",height:"45"}))),u.a.createElement("div",{ref:"socialLogin",className:"hidden"},"true"===localStorage.getItem("enableFacebookLogin")&&u.a.createElement(b.a,{provider:"facebook",appId:localStorage.getItem("facebookAppId"),onLoginSuccess:this.handleSocialLogin,onLoginFailure:function(){return console.log("Failed didn't get time to init or login failed")},className:"facebook-login-button mr-2"},localStorage.getItem("facebookLoginButtonText")),"true"===localStorage.getItem("enableGoogleLogin")&&u.a.createElement(b.a,{provider:"google",appId:localStorage.getItem("googleAppId"),onLoginSuccess:this.handleSocialLogin,onLoginFailure:function(){return console.log("Failed didn't get time to init or login failed")},className:"google-login-button"},localStorage.getItem("googleLoginButtonText")))),u.a.createElement("div",{className:"text-center mt-50 mb-100"},localStorage.getItem("regsiterAlreadyHaveAccount")," ",u.a.createElement(h.a,{to:"/login",style:{color:localStorage.getItem("storeColor")}},localStorage.getItem("firstScreenLoginBtn"))),"null"!==localStorage.getItem("registrationPolicyMessage")&&u.a.createElement("div",{className:"mt-20 mb-20 d-flex align-items-center justify-content-center",dangerouslySetInnerHTML:{__html:localStorage.getItem("registrationPolicyMessage")}})))}}]),t}(d.Component);E.contextTypes={router:function(){return null}};t.default=Object(y.b)(function(e){return{user:e.user.user}},{registerUser:m.g,loginUser:m.e,sendOtp:m.h,verifyOtp:m.k})(E)}}]);