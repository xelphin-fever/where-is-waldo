(this["webpackJsonpwhere-is-waldo"]=this["webpackJsonpwhere-is-waldo"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(27),s=c.n(i),r=(c(34),c(35),c(5)),o=c(14),l=c(19);c(36),c(48);l.a.initializeApp({apiKey:"AIzaSyDFMDA7lTqwZUKyZ96rzBZ8tK8R3ERLAMk",authDomain:"where-is-waldo-2b09a.firebaseapp.com",projectId:"where-is-waldo-2b09a",storageBucket:"where-is-waldo-2b09a.appspot.com",messagingSenderId:"192340184477",appId:"1:192340184477:web:e6ece0defdafe7f9a2f374"});l.a.firestore(),l.a.auth();var u=l.a,d=c(1),j=function(e){var t=Object(n.useState)("guest"),c=Object(r.a)(t,2),a=(c[0],c[1],Object(n.useState)("main")),i=Object(r.a)(a,2),s=i[0],o=i[1];return"main"===s?Object(d.jsxs)("div",{className:"sign-in",children:[Object(d.jsx)("div",{className:"signIn-sideBar",children:Object(d.jsx)("button",{className:"signIn-special",onClick:e.hide,children:"\u274c"})}),Object(d.jsx)("button",{className:"sign-in-button",onClick:function(){if(!u.auth().currentUser.isAnonymous){u.auth().signOut(),console.log("not logged in -> Sign in as Guest (from SignIn)");var e=u.auth().signInAnonymously();e.then((function(e){return console.log("made a user!"),e.user.updateProfile({displayName:"Guest"})})),e.catch((function(e){return console.log(e)}))}},children:"Continue as Guest"}),Object(d.jsx)("button",{className:"sign-in-button",onClick:function(){return o("signUp")},children:"Sign Up"}),Object(d.jsx)("button",{className:"sign-in-button",onClick:function(){return o("logIn")},children:"Log In"})]}):"signUp"===s?Object(d.jsxs)("div",{className:"sign-in",children:[Object(d.jsxs)("div",{className:"signIn-sideBar",children:[Object(d.jsx)("button",{className:"signIn-special",onClick:e.hide,children:"\u274c"}),Object(d.jsx)("button",{className:"signIn-special",onClick:function(){return o("main")},children:"\ud83d\udd19"})]}),Object(d.jsx)("input",{type:"text",placeholder:"username",id:"signUp-username",maxLength:"14"}),Object(d.jsx)("input",{type:"email",placeholder:"fake-email@site.com",id:"signUp-email",maxLength:"20"}),Object(d.jsx)("input",{type:"password",placeholder:"password",id:"signUp-password",maxLength:"14"}),Object(d.jsx)("button",{className:"sign-in-button",onClick:function(){var e=document.querySelector("#signUp-username"),t=document.querySelector("#signUp-email"),c=document.querySelector("#signUp-password"),n=u.auth().createUserWithEmailAndPassword(t.value,c.value);n.then((function(t){return t.user.updateProfile({displayName:e.value})})),n.catch((function(e){return alert(e)}))},children:"Create Account"})]}):Object(d.jsxs)("div",{className:"sign-in",children:[Object(d.jsxs)("div",{className:"signIn-sideBar",children:[Object(d.jsx)("button",{className:"signIn-special",onClick:e.hide,children:"\u274c"}),Object(d.jsx)("button",{className:"signIn-special",onClick:function(){return o("main")},children:"\ud83d\udd19"})]}),Object(d.jsx)("input",{type:"email",placeholder:"your-email@site.com",id:"logIn-email"}),Object(d.jsx)("input",{type:"password",placeholder:"password",id:"logIn-password"}),Object(d.jsx)("button",{className:"sign-in-button",onClick:function(){var e=document.querySelector("#logIn-email"),t=document.querySelector("#logIn-password");u.auth().signInWithEmailAndPassword(e.value,t.value).catch((function(e){return alert(e)}))},children:"Log In"})]})},b=function(e){var t=Object(n.useState)("Guest"),c=Object(r.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)(!1),l=Object(r.a)(s,2),b=l[0],h=l[1],m=function(){h(!b)};return u.auth().onAuthStateChanged((function(e){e&&i(u.auth().currentUser.displayName)})),Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsxs)("div",{className:"navbar-group",children:[Object(d.jsx)("h2",{children:a}),Object(d.jsx)("button",{className:"nav-sign navbar-element",onClick:m,children:"Sign In"})]}),Object(d.jsxs)("div",{className:"navbar-group",children:[Object(d.jsx)(o.b,{to:"/where-is-waldo/leaderboard",children:Object(d.jsx)("h2",{className:"navbar-element",children:"\ud83c\udfc6"})}),Object(d.jsx)(o.b,{to:"/where-is-waldo/",children:Object(d.jsx)("h2",{className:"navbar-element",children:"\ud83c\udfe0"})})]}),!0===b?Object(d.jsx)(j,{hide:m,setUser:function(e){return i(e)}}):null]})},h=c(6),m=(c(44),function(e){return Object(d.jsxs)("div",{className:"levelBar",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h2",{className:"levelBar-title",children:e.title})}),Object(d.jsx)("div",{className:"levelBar-images",children:e.images.map((function(t,c){return Object(d.jsx)(o.b,{to:"game/".concat(e.title,"-").concat(c),children:Object(d.jsx)("img",{src:t,alt:e.title+"-"+c,id:"thumbnail-"+e.title+"-"+c},c)},c)}))})]})}),g=c.p+"static/media/waldo-0.16820e8e.jpg",O=c.p+"static/media/waldo-1.3f1472be.jpg",p=c.p+"static/media/waldo-2.5c12dff6.jpg",f=c.p+"static/media/waldo-3.08c0df13.jpg",x=c.p+"static/media/waldo-4.ea746537.jpg",v=c.p+"static/media/pokemon-0.fa9ae241.jpg",w=c.p+"static/media/ghibli-0.58f2fa63.jpg",N=[g,O,p,f,x],S=[v],y=[w],k={waldo:{0:g,1:O,2:p,3:f,4:x},pokemon:{0:v},ghibli:{0:w}},I=function(e){return"waldo"===e?N:"pokemon"===e?S:"ghibli"===e?y:void 0},C=function(){return k},U=function(e){return Object(d.jsxs)("div",{className:"page-home",children:[Object(d.jsx)(m,{title:"waldo",images:I("waldo")}),Object(d.jsx)(m,{title:"pokemon",images:I("pokemon")}),Object(d.jsx)(m,{title:"ghibli",images:I("ghibli")})]})},E=c(29),A=(c(45),{waldo:c.p+"static/media/icon-waldo.1cc63b52.png",wilma:c.p+"static/media/icon-wilma.5aea612d.jpg",odlaw:c.p+"static/media/icon-odlaw.f34b5260.jpg",azumarill:c.p+"static/media/icon-azumarill.ce9151d2.png",charizard:c.p+"static/media/icon-charizard.8ce84303.png",dodou:c.p+"static/media/icon-dodou.63a4d88e.png",electivire:c.p+"static/media/icon-electivire.74d6f67b.png",gardevoir:c.p+"static/media/icon-gardevoir.12f93062.jpg",howl:c.p+"static/media/icon-howl.986a1e42.png",ponyo:c.p+"static/media/icon-ponyo.4d2cdab1.png"}),B=function(){return A},M=function(e){var t=Object(n.useState)({left:"0",top:"0"}),c=Object(r.a)(t,2),a=c[0],i=c[1],s=B();Object(n.useEffect)((function(){i({left:"".concat(e.coordinates[0],"px"),top:"".concat(e.coordinates[1],"px"),visibility:"visible"})}),[e]);var o=function(t){console.log(t.currentTarget.getAttribute("data-char")),e.sendClick(t.currentTarget.getAttribute("data-char"))};return Object(d.jsx)("div",{className:"dropdown",style:a,children:e.char.map((function(e){return Object(d.jsxs)("div",{"data-char":e,onClick:o,children:[Object(d.jsx)("img",{src:s[e],alt:e})," ",Object(d.jsx)("h3",{children:e})]},e)}))})},L=function(e){var t=Object(n.useState)("00"),c=Object(r.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)("00"),o=Object(r.a)(s,2),l=o[0],u=o[1],j=Object(n.useState)(!0),b=Object(r.a)(j,2),h=b[0],m=b[1],g=Object(n.useState)(0),O=Object(r.a)(g,2),p=O[0],f=O[1];return Object(n.useEffect)((function(){var e;return h&&(e=setInterval((function(){var e=p%60,t=Math.floor(p/60),c=1===String(e).length?"0".concat(e):e,n=1===String(t).length?"0".concat(t):t;i(c),u(n),f((function(e){return e+1}))}),1e3)),function(){return clearInterval(e)}}),[h,p]),Object(n.useEffect)((function(){!0===e.gameOver?(e.sendCounter(p),m(!1)):m(!0)}),[e]),Object(d.jsxs)("div",{className:"timer",children:[Object(d.jsx)("span",{className:"minute",children:l}),Object(d.jsx)("span",{children:":"}),Object(d.jsx)("span",{className:"second",children:a})]})},P=function(e){var t=Object(h.f)("/where-is-waldo/game/:id").url.split("/"),c=(t=t[t.length-1]).split("-"),a=Object(r.a)(c,2),i=a[0],s=a[1],o=C()[i][s],l=Object(n.useState)([]),j=Object(r.a)(l,2),b=j[0],m=j[1],g=Object(n.useState)([]),O=Object(r.a)(g,2),p=O[0],f=O[1],x=Object(n.useState)([0,0]),v=Object(r.a)(x,2),w=v[0],N=v[1],S=Object(n.useState)([0,0]),y=Object(r.a)(S,2),k=y[0],I=y[1],U=Object(n.useState)(!1),A=Object(r.a)(U,2),B=A[0],P=A[1],z=Object(n.useState)(!1),T=Object(r.a)(z,2),q=T[0],G=T[1],F=Object(n.useState)(0),Y=Object(r.a)(F,2),D=Y[0],K=Y[1];Object(n.useEffect)((function(){u.firestore().collection("gameCoordinates").doc(t).get().then((function(e){m(e.data()),f(Object.keys(e.data())),P(!0)})),setTimeout((function(){G(!0)}),354e4)}),[]),Object(n.useEffect)((function(){0===p.length&&!0===B&&G(!0)}),[p,B]);return Object(d.jsxs)("div",{className:"page-game",children:[Object(d.jsx)("div",{className:"space-div"}),Object(d.jsx)("img",{className:"game-image",src:o,alt:"game",onClick:function(e){var t=e.nativeEvent.offsetX,c=e.nativeEvent.offsetY,n=e.target.clientWidth,a=e.target.clientHeight;N([Math.round(100*t/n),Math.round(100*c/a)]),I([e.pageX,e.pageY])}}),0!==p.length?Object(d.jsx)(M,{coordinates:k,char:p,sendClick:function(e){if(function(e){return"waldo"===i?Math.abs(w[0]-e[0])<3.5&&Math.abs(w[1]-e[1])<3.5:Math.abs(w[0]-e[0])<4&&Math.abs(w[1]-e[1])<4}(b[e])){console.log("Yay! You found ",e);var t=Object(E.a)(p);t=t.filter((function(t){return t!==e})),f(t)}}}):null,Object(d.jsx)(L,{gameOver:q,sendCounter:function(e){0===D&&(K(e),u.firestore().collection("scores").doc(t).collection("playerScores").add({username:u.auth().currentUser.displayName,time:e,uid:u.auth().currentUser.uid}).then((function(e){console.log("High score saved ",e)})).catch((function(e){console.error("Error writing in score",e)})))}})]})},z=(c(46),function(e){var t=Object.keys(C()),c=Object(n.useState)("waldo"),a=Object(r.a)(c,2),i=a[0],s=a[1],o=Object(n.useState)("0"),l=Object(r.a)(o,2),j=l[0],b=l[1],h=Object(n.useState)(C().waldo),m=Object(r.a)(h,2),g=m[0],O=m[1],p=Object(n.useState)([]),f=Object(r.a)(p,2),x=f[0],v=f[1],w=Object(n.useState)([]),N=Object(r.a)(w,2),S=N[0],y=N[1],k=Object(n.useState)([-1,-1]),I=Object(r.a)(k,2),U=I[0],E=I[1];return Object(n.useEffect)((function(){var e=[],t=function(t){var c=Object(d.jsx)("img",{src:g[t],alt:"".concat(i,"-").concat(t),"data-level":"".concat(i,"-").concat(t),onClick:function(){b(t)}},t);e.push(c)};for(var c in g)t(c);v(e)}),[g,i]),Object(n.useEffect)((function(){var e=[];u.firestore().collection("scores").doc("".concat(i,"-").concat(j)).collection("playerScores").get().then((function(t){t.forEach((function(t){e.push(t.data())})),e=e.sort((function(e,t){return e.time>t.time?1:-1})),y(e)}))}),[j,i]),Object(n.useEffect)((function(){for(var e=-1,t=-1,c=0;c<S.length&&-1===e;c++)S[c].uid&&S[c].uid===u.auth().currentUser.uid&&(e=S[c].time,t=c);E([e,t])}),[S]),Object(d.jsxs)("div",{className:"page-leaderboard",children:[Object(d.jsx)("div",{className:"space-div"}),Object(d.jsx)("div",{className:"leaderboard-types",children:t.map((function(e){return Object(d.jsx)("button",{"data-type":e,onClick:function(){s(e),b("0"),O(C()[e])},children:e},e)}))}),Object(d.jsx)("div",{className:"leaderboard-levels",children:x.map((function(e){return e}))}),Object(d.jsxs)("div",{className:"leaderboard-board",children:[Object(d.jsx)("h2",{children:"".concat(i,"-").concat(j)}),-1!==U[0]?Object(d.jsx)("h3",{children:"Your high score: ".concat(U[0],". Place: #").concat(U[1]+1)}):null,Object(d.jsx)("br",{}),Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"leaderboad-left",children:"Name"}),Object(d.jsx)("th",{className:"leaderboad-right",children:"Score"})]}),S.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"leaderboad-left",children:e.username}),Object(d.jsx)("td",{className:"leaderboad-right",children:e.time})]},t)}))]})})]})]})});var T=function(){return Object(n.useEffect)((function(){console.log("my user at start: ",u.auth().currentUser),setTimeout((function(){if(console.log("my user at start -2: ",u.auth().currentUser),u.auth().currentUser)console.log("I am already logged in");else{console.log("not logged in -> Sign in as Guest");var e=u.auth().signInAnonymously();e.then((function(e){return console.log("made a user!"),e.user.updateProfile({displayName:"Guest"})})),e.catch((function(e){return console.log(e)}))}}),1e3)}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{exact:!0,path:"/where-is-waldo/",component:U}),Object(d.jsx)(h.a,{exact:!0,path:"/where-is-waldo/game/:id",component:function(){return Object(d.jsx)(P,{})}}),Object(d.jsx)(h.a,{exact:!0,path:"/where-is-waldo/leaderboard",component:z})]})]})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),q()}},[[47,1,2]]]);
//# sourceMappingURL=main.890bdea2.chunk.js.map