(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/Music.2857d6b1.jpg"},28:function(e,t,a){e.exports=a(60)},34:function(e,t,a){},35:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(34),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),d=(a(35),a(61)),h=function(e){var t=e.children,a=e.linkMain,n={doter:r.a.createElement("span",{className:"title-name__doter"},"."),class:"header__text title-name"};return a?r.a.createElement(d.a,{className:n.class,to:a},t,n.doter):r.a.createElement("div",{className:n.class},t,n.doter)},p=a(18),f=a.n(p),_=function(e){return fetch("/api/sendOrder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,message:e.message})}).then(function(e){return e.json()})},E=function(e){var t=new FormData;return t.append("file",e.image),t.append("name",e.name),t.append("price",e.price),f.a.post("/api/newProduct",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},v=function(){return f.a.get("/api/getProducts",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e})},b=function(){return f.a.get("/api/getCounters",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e})},g=function(e){return fetch("/api/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then(function(e){return e.json()})},N=function(e){return fetch("/api/updateCounters",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({arrCounts:e})}).then(function(e){return e.json()})},j=function(){return fetch("/api/logout",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()})},O=r.a.createContext(),y=O.Provider,C=O.Consumer,k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isAuthorized:!1,errorAuth:""},a.errorMessage=function(e){e?a.setState({errorAuth:e}):a.setState({isAuthorized:!0,errorAuth:""})},a.handleAutorize=function(e,t){g({email:e,password:t}).then(function(e){a.errorMessage(e.error)}).catch(function(e){console.log(e)})},a.handleLogout=function(){j().then(function(){a.setState({isAuthorized:!1,errorAuth:""})}).catch(function(e){console.log(e)})},a.setValueProvider=function(){var e=a.state;return{isAuthorized:e.isAuthorized,errorAuth:e.errorAuth,handleAutorize:a.handleAutorize,handleLogout:a.handleLogout,redirectPath:"/login"}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/authFromToken",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.errorMessage(t.error)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement(y,{value:this.setValueProvider()},e)}}]),t}(n.Component),S=function(e){return function(t){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(C,null,function(a){return r.a.createElement(e,Object.assign({},a,t.props))})}}]),a}(n.Component)},P=r.a.createContext(),A=P.Provider,w=P.Consumer,M=[{icon:"linkedin",link:"#"},{icon:"github-alt",link:"#"},{icon:"tumblr",link:"#"},{icon:"vk",link:"#"}],T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],counters:[]},a.loadProducts=function(){v().then(function(e){a.setState({products:e.data})}).catch(function(e){console.log(e)})},a.loadCounters=function(){b().then(function(e){a.setState({counters:e.data})}).catch(function(e){console.log(e)})},a.updateProducts=function(){a.loadProducts()},a.updateCount=function(){a.loadCounters()},a.setValueProvider=function(){var e=a.state,t=e.products,n=e.counters;return{socials:M,products:t,counters:n,updateProducts:a.updateProducts,updateCount:a.updateCount,loadCounters:a.loadCounters}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadCounters(),this.loadProducts()}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement(A,{value:this.setValueProvider()},e)}}]),t}(n.PureComponent),x=function(e){return function(t){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(w,null,function(a){return r.a.createElement(e,Object.assign({},a,t.props))})}}]),a}(n.PureComponent)},z=x(function(e){var t=e.socials;return r.a.createElement("ul",{className:"social"},t.map(function(e){return r.a.createElement("li",{key:e.icon,className:"social__item"},r.a.createElement("a",{className:"social__link",href:e.link},r.a.createElement("i",{className:"fa fa-".concat(e.icon)})))}))}),D=function(e){var t=e.children,a=e.linkMain;e.socials;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container header__container"},r.a.createElement("div",{className:"header__top"},r.a.createElement(h,{linkMain:a},"\u0410\u0440\u0445\u0438\u043f\u043e\u0432"),r.a.createElement("div",{className:"header__social"},r.a.createElement(z,null))),t))},F=a(26),L=a.n(F),J=function(){return r.a.createElement("section",{className:"music"},r.a.createElement("div",{className:"container music__container"},r.a.createElement("div",{className:"music__left"},r.a.createElement("img",{src:L.a,alt:""})),r.a.createElement("div",{className:"music__right about"},r.a.createElement("div",{className:"about__subtitle subtitle"},"\u041e\u0431\u043e \u043c\u043d\u0435"),r.a.createElement("h2",{className:"about__title title"},"\u042f \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"),r.a.createElement("div",{className:"about__slogan"},"\u201c\u0423 \u043c\u0443\u0437\u044b\u043a\u0438 \u043d\u0435\u0442 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u0438 \u043d\u0430\u0446\u0438\u0438\u201d"),r.a.createElement("div",{className:"about__descriptons"},"\u041a\u043e\u0433\u0434\u0430 \u043c\u043d\u0435 \u0431\u044b\u043b\u043e 11 \u043b\u0435\u0442, \u044f \u0443\u0432\u0438\u0434\u0435\u043b \u043d\u0430 \xabMTV\xbb, \u043a\u0430\u043a \u041a\u0443\u0440\u0442 \u041a\u043e\u0431\u0435\u0439\u043d \u043f\u043e\u0451\u0442 \xabHeart-Shaped Box\xbb, \u0438 \u0437\u0430\u043c\u0435\u0440 \u0432 \u0438\u0437\u0443\u043c\u043b\u0435\u043d\u0438\u0438. \u0422\u043e\u0433\u0434\u0430 \u043e\u043d \u043c\u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u0441\u0430\u043c\u044b\u043c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u043c \u0432 \u043c\u0438\u0440\u0435. \u0414\u0430\u0436\u0435 \u0432 \u0441\u0442\u043e\u043b\u044c \u044e\u043d\u043e\u043c \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0435, \u044f \u043f\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u043b \u0435\u0433\u043e \u0433\u0440\u0443\u0441\u0442\u044c."),r.a.createElement("div",{className:"about__note"},r.a.createElement("span",{className:"about__note-family"},"\u0410\u0440\u0445\u0438\u043f\u043e\u0432"),r.a.createElement("span",{className:"about__note-field"},"- \u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c \u0433\u0440\u0435\u043c\u043c\u0438 2017")))))},V=x(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.counters;return console.log(e),r.a.createElement("section",{className:"life"},r.a.createElement("div",{className:"container life__container"},r.a.createElement("h2",{className:"life__title"},"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u0435\u043b \u043c\u043e\u0435\u0439 \u0436\u0438\u0437\u043d\u0438"),r.a.createElement("div",{className:"life__slogan"},"\u0423 \u043c\u0443\u0437\u044b\u043a\u0438 \u043d\u0435\u0442 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u0438 \u043d\u0430\u0446\u0438\u0438, ",r.a.createElement("br",null),"\u043e\u0434\u043d\u0430\u0436\u0434\u044b \u043c\u044b \u0443\u0439\u0434\u0451\u043c, \u0430 \u043e\u043d\u0430 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f."),r.a.createElement("ul",{className:"life__skills"},e.map(function(e){return r.a.createElement("li",{key:e._id,className:"life__skill"},r.a.createElement("div",{className:"life__skill-number"},e.count),r.a.createElement("div",{className:"life__skill-text"},e.headSite))})),r.a.createElement("a",{className:"life__link",href:"http://"},"\u0427\u0438\u0442\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e")))}}]),t}(n.PureComponent)),B=x(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.products;return console.log(e),r.a.createElement("section",{className:"product"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"product__subtitle subtitle"},"\u0422\u043e\u0432\u0430\u0440\u044b \u043e\u0442 \u0441\u0442\u0443\u0434\u0438\u0438 \u0410\u0440\u0445\u0438\u043f\u043e\u0432\u0430"),r.a.createElement("h2",{className:"product__title title"},"\u041c\u043e\u0439 \u043b\u0438\u0447\u043d\u044b\u0439 \u0431\u0440\u0435\u043d\u0434"),r.a.createElement("ul",{className:"product__list"},e.map(function(e){return r.a.createElement("li",{key:e.id,className:"product__item"},r.a.createElement("img",{className:"product__img",src:e.image,alt:e.name}),r.a.createElement("div",{className:"product__hover"},r.a.createElement("div",{className:"product__description"},r.a.createElement("div",{className:"product__name"},e.name),r.a.createElement("div",{className:"product__price"},"$ ",e.price))))}))))}}]),t}(n.PureComponent)),R=a(12),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).el=document.createElement("div"),a.handleClose=function(){(0,a.props.onClose)()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.children&&(document.body.appendChild(this.el),this.el.id="modal")}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children,t=r.a.createElement("div",{className:"modal-form"},r.a.createElement("div",{className:"modal-form__info"},e),r.a.createElement("button",{className:"modal-form__button button",onClick:this.handleClose},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"));return c.a.createPortal(t,this.el)}}]),t}(n.PureComponent),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={errorMessage:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,l=t.message;n&&r&&l?_({name:n,email:r,message:l}).then(function(e){a.setState({errorMessage:e.maessage,name:"",email:"",message:""})}).catch(function(e){console.log(e)}):a.setState({errorMessage:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c!"})},a.handleClose=function(){a.setState({errorMessage:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.errorMessage;return r.a.createElement("section",{className:"form",id:"form-msgemail"},e&&r.a.createElement(W,{onClose:this.handleClose},e),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form__subtitle subtitle"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),r.a.createElement("h2",{className:"form__title title"},"\u041f\u0438\u0448\u0438\u0442\u0435, \u043f\u043e\u043e\u0431\u0449\u0430\u0435\u043c\u0441\u044f"),r.a.createElement("form",{className:"form-email",action:"/",method:"POST"},r.a.createElement("div",{className:"form-email__line"},r.a.createElement("label",{className:"form-email__label",htmlFor:""},"\u0418\u043c\u044f *"),r.a.createElement("input",{className:"form-email__input",type:"text",name:"name",onChange:this.handleChange,value:this.state.name})),r.a.createElement("div",{className:"form-email__line"},r.a.createElement("label",{className:"form-email__label",htmlFor:""},"Email *"),r.a.createElement("input",{className:"form-email__input",type:"email",name:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-email__line"},r.a.createElement("label",{className:"form-email__label",htmlFor:""},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),r.a.createElement("textarea",{className:"form-email__textarea",name:"message",onChange:this.handleChange,value:this.state.message})),r.a.createElement("div",{className:"form-email__line"},r.a.createElement("button",{className:"form-email__button button",type:"submit",onClick:this.handleSubmit},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))))}}]),t}(n.PureComponent),U=S(function(e){var t=e.isAuthorized;return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container footer__container"},r.a.createElement("div",{className:"footer__auth"},r.a.createElement(h,{linkMain:"/login"},t?"\u0410\u0434\u043c\u0438\u043d\u043a\u0430":"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")),r.a.createElement("div",{className:"footer__social"},r.a.createElement(z,null))))}),$=a(62),H=S(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.handleAutorize,n=a.state;t(n.email,n.password)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAuthorized,a=e.errorAuth;return t?r.a.createElement($.a,{to:"/admin"}):r.a.createElement("form",{className:"form-login",action:"/login",method:"POST"},a&&r.a.createElement("div",{className:"status"},a),r.a.createElement("div",{className:"form-login__line"},r.a.createElement("label",{className:"form-login__label",htmlFor:""},"\u041f\u0440\u0438\u0432\u0435\u0442,"),r.a.createElement("input",{className:"form-login__input",type:"email",name:"email",placeholder:"E-MAIL",onChange:this.handleChange})),r.a.createElement("div",{className:"form-login__line"},r.a.createElement("input",{className:"form-login__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:this.handleChange})),r.a.createElement("div",{className:"form-login__line"},r.a.createElement("button",{onClick:this.handleSubmit,className:"form-login__button",type:"submit"},"\u0412\u043e\u0439\u0442\u0438")))}}]),t}(n.PureComponent)),Q=S(function(e){var t=e.handleLogout;return r.a.createElement("header",{className:"admin-header"},r.a.createElement("div",{className:"container admin-header__container"},r.a.createElement("div",{className:"admin-header__title"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c"),r.a.createElement(d.a,{className:"admin-header__link",to:"/"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0430\u0439\u0442"),r.a.createElement("div",{className:"admin-header__logout",onClick:t},"\u0412\u044b\u0445\u043e\u0434")))}),q=x(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={errorMessage:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.age,r=t.concerts,l=t.cities,c=t.years,o=a.props.updateCount;n>=0&&r>=0&&l>=0&&c>=0?(a.setState({errorMessage:""}),N([{name:"age",count:n},{name:"concerts",count:r},{name:"cities",count:l},{name:"years",count:c}]).then(function(e){a.setState({errorMessage:e.maessage}),o()}).catch(function(e){console.log(e)})):a.setState({errorMessage:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c >=0!"})},a.handleClose=function(){a.setState({errorMessage:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.counters,a=this.state.errorMessage;return r.a.createElement("form",{className:"form-skill",action:"/admin/skills",method:"POST"},a&&r.a.createElement(W,{onClose:this.handleClose},a),r.a.createElement("div",{className:"form-title"},"\u0421\u0447\u0435\u0442\u0447\u0438\u043a\u0438"),t.map(function(t){return r.a.createElement("label",{key:t._id,className:"form-skill__input-line"},r.a.createElement("span",{className:"form-skill__input-title"},t.head),r.a.createElement("input",{className:"form-skill__input",name:t.name,type:"number",onChange:e.handleChange}))}),r.a.createElement("div",{className:"form__btns form-skill__input-line"},r.a.createElement("button",{className:"button",type:"submit",onClick:this.handleSubmit},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}]),t}(n.PureComponent)),G=x(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={errorMessage:""},a.myRef=r.a.createRef(),a.handleChange=function(e){e.target.files?a.setState(Object(R.a)({},e.target.name,e.target.files[0])):a.setState(Object(R.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.photo,r=t.name,l=t.price,c=a.props.updateProducts;n&&r&&l?E({name:r,price:l,image:n}).then(function(e){a.myRef.current.value="",a.setState({errorMessage:e.maessage,photo:"",name:"",price:""}),c()}).catch(function(e){console.log(e)}):a.setState({errorMessage:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c!"})},a.handleClose=function(){a.setState({errorMessage:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errorMessage,a=e.name,n=e.price;return r.a.createElement("form",{className:"form-upload",action:"/admin/upload",method:"POST",encType:"multipart/form-data"},t&&r.a.createElement(W,{onClose:this.handleClose},t),r.a.createElement("div",{className:"form-title"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"),r.a.createElement("div",{className:"form-upload__input-line"},r.a.createElement("div",{className:"form-upload__wraper"},r.a.createElement("label",{className:"form-upload__label"},r.a.createElement("input",{className:"form-upload__input-file",name:"photo",type:"file",ref:this.myRef,onChange:this.handleChange}),r.a.createElement("span",{className:"form-upload__input-file-title"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e")))),r.a.createElement("div",{className:"form-upload__input-line"},r.a.createElement("input",{className:"form-upload__input",name:"name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"form-upload__input-line"},r.a.createElement("input",{className:"form-upload__input",name:"price",type:"text",placeholder:"\u0426\u0435\u043d\u0430",value:n,onChange:this.handleChange})),r.a.createElement("div",{className:"form-upload__input-line form-upload__input-line--btn"},r.a.createElement("button",{className:"button",type:"submit",onClick:this.handleSubmit},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),t}(n.PureComponent)),K=function(){return r.a.createElement("section",{className:"admin-content"},r.a.createElement("div",{className:"container admin-content__container"},r.a.createElement("div",{className:"form-container"},r.a.createElement(q,null),r.a.createElement(G,null))))},X=a(27),Y=a(65),Z=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(Q,null),r.a.createElement(K,null))},ee=function(){return r.a.createElement(D,{linkMain:"/"},r.a.createElement("div",{className:"header__content"},r.a.createElement("h1",{className:"header__title"},"404")))},te=function(){return r.a.createElement(D,{linkMain:"/"},r.a.createElement(H,null))},ae=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(D,null,r.a.createElement("div",{className:"header__content"},r.a.createElement("h1",{className:"header__title"},"\u201c\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u2014 \u044d\u0442\u043e \u043c\u0443\u0437\u044b\u043a\u0430\u201d"),r.a.createElement("a",{className:"header__link",href:"https://www.youtube.com/watch?v=nBE85Qy_SLc",target:"_blank",rel:"noreferrer noopener"},"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0438\u0434\u0435\u043e")),r.a.createElement("div",{className:"header__scroll"},r.a.createElement("div",{className:"header__scroll-text"},"Scroll"))),r.a.createElement(J,null),r.a.createElement(V,null),r.a.createElement(B,null),r.a.createElement(I,null),r.a.createElement(U,null))},ne=a(63),re=a(64),le=S(function(e){var t=e.component,a=e.isAuthorized,n=e.redirectPath,l=Object(X.a)(e,["component","isAuthorized","redirectPath"]);return r.a.createElement(Y.a,Object.assign({},l,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement($.a,{to:n})}}))}),ce=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(T,null,r.a.createElement(k,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(Y.a,{path:"/",exact:!0,component:ae}),r.a.createElement(Y.a,{path:"/login",component:te}),r.a.createElement(le,{path:"/admin",component:Z}),r.a.createElement(Y.a,{path:"*",exact:!0,component:ee})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.b9d9360d.chunk.js.map