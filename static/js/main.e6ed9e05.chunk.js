(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(n,e,t){var r=t(66);"string"===typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(34)(r,a);r.locals&&(n.exports=r.locals)},58:function(n,e,t){n.exports=t(92)},63:function(n,e,t){var r=t(64);"string"===typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(34)(r,a);r.locals&&(n.exports=r.locals)},64:function(n,e,t){(e=n.exports=t(33)(!1)).push([n.i,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  \n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n#_1YYU_vdtEoCzbtmk8tBvTU {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n',""]),e.locals={root:"_1YYU_vdtEoCzbtmk8tBvTU"}},66:function(n,e,t){(e=n.exports=t(33)(!1)).push([n.i,"._3Ge-CIdMbROGJFA06DTnds {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;  \n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  position: absolute;\n  \n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n\n  color: #02283B;\n  color: #125271;\n}",""]),e.locals={App:"_3Ge-CIdMbROGJFA06DTnds"}},92:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(22),o=t.n(i),c=t(11),u=(t(63),t(44)),s=t(45),l=t(55),f=t(46),d=t(56),m=t(47),b=t(1),p=t(2);function g(){var n=Object(b.a)(["\n    color: inherit;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor: pointer;\n    background: white;\n    padding: 20px 50px;    \n    border-radius: 25px;\n    font-weight: bold;\n    font-size: 2rem;\n    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.25);\n    transition: transform 0.25s;\n    margin: 2rem;\n    :hover {\n        transform: scale(1.2,1.2);    \n    }\n"]);return g=function(){return n},n}function h(){var n=Object(b.a)(["\n    color: #B3D8E9;\n    color: #5B99B7;\n"]);return h=function(){return n},n}function E(){var n=Object(b.a)(["\n    margin: 20px 0;\n    font-size: 6rem;\n    animation: "," 0.4s 0.5s ease-out forwards;\n    background: none;\n    color: #125271;\n    transform: scale(0, 0);\n"]);return E=function(){return n},n}function v(){var n=Object(b.a)(["\n    0% {\n        transform: scale(0, 0) rotate(0deg);\n    }\n    60% {\n        transform: scale(1.25, 1.25) rotate(360deg) skew(-15deg);\n    }\n    100% {\n        transform: scale(1.15, 1.25) rotate(355deg) skew(-10deg);\n    }\n"]);return v=function(){return n},n}function y(){var n=Object(b.a)(["\n    margin: 50px 0;\n    display: flex;    \n    width: 100%;\n"]);return y=function(){return n},n}function O(){var n=Object(b.a)(["\n    width: 100%;\n    background: white;\n"]);return O=function(){return n},n}function j(){var n=Object(b.a)(["\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    align-self: center;\n    height: 50%;\n    width: 100%;\n"]);return j=function(){return n},n}var x=p.a.div(j()),w=p.a.div(O()),C=p.a.div(y()),S=Object(p.b)(v()),T=p.a.h1(E(),S),_=p.a.div(h()),A=Object(p.a)(c.b)(g()),k=t(8);function q(){var n=Object(b.a)(["\n"]);return q=function(){return n},n}function R(){var n=Object(b.a)(["\n    text-align: center;\n"]);return R=function(){return n},n}function U(){var n=Object(b.a)(["\n    cursor: pointer;\n    width: 80%;\n    text-align: center;\n    color:inherit;\n    border-radius: 5px;\n    :focus{\n        outline: 0;\n    }\n"]);return U=function(){return n},n}function I(){var n=Object(b.a)(["\n    flex: 1;\n"]);return I=function(){return n},n}var F=p.a.div(I()),z=p.a.select(U()),Q=p.a.option(R()),L=p.a.div(q()),N=function(n){return a.a.createElement(F,null,a.a.createElement(L,null,n.label),a.a.createElement(z,{onChange:function(e){n.onChange(n.name,e.target.value)}},n.options.map(function(n){return a.a.createElement(Q,{key:n,value:n},n)})))},G=t(23),H=t.n(G),D=function(){return function(n,e){var t=e().startPage.settings.apiURL;n(K()),n(P()),H.a.get(t).then(function(e){n(B(e.data.results))}).then(function(){n(Z()),n(J())}).catch(function(e){n(M(e))})}},P=function(){return{type:"FETCH_QUESTIONS_START"}},B=function(n){return{type:"FETCH_QUESTIONS_SUCCESS",questions:n}},M=function(n){return{type:"FETCH_QUESTIONS_FAIL",error:n}},Z=function(){return{type:"SHUFFLE_ANSWERS"}},J=function(){return{type:"QUIZ_STARTED"}},W=function(){return{type:"QUIZ_ENDED"}},Y=function(){return{type:"CALCULATE_SCORE"}},K=function(){return{type:"RESET_QUIZ"}},V=function(){return{type:"FETCH_CATEGORIES_START"}},X=function(n){return{type:"FETCH_CATEGORIES_SUCCESS",categories:n}},$=function(n){return{type:"FETCH_CATEGORIES_FAIL",error:n}},nn=function(){return{type:"RESET_START_PAGE"}};function en(){var n=Object(b.a)(['\n  display: flex;\n  width: 64px;\n  height: 64px;\n  margin: 36px auto;\n  \n  :after {\n    content: " ";\n    display: block;\n    width: 46px;\n    height: 46px;\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid #125271;\n    border-color: #125271 transparent #125271 transparent;\n    animation: '," 1.2s linear infinite;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(b.a)(["\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n"]);return tn=function(){return n},n}var rn=Object(p.b)(tn()),an=p.a.div(en(),rn),on=function(){return a.a.createElement(an,null)},cn=Object(k.b)(function(n){var e=n.startPage;return{settings:e.settings.available,loading:e.loading,apiURL:e.settings.apiURL}},function(n){return{init:function(){return n(function(n){n(nn()),n(V()),H.a.get("https://opentdb.com/api_category.php").then(function(e){n(X(e.data.trivia_categories))}).catch(function(e){n($(e))})})},generateURL:function(){return n({type:"GENERATE_URL"})},initQuiz:function(){return n(D())},changeSetting:function(e,t){return n(function(n,e){return{type:"SET_SETTING",setting:n,value:e}}(e,t))}}})(function(n){var e=n.init,t=n.settings,i=n.loading,o=n.changeSetting,c=n.generateURL,u=n.initQuiz,s=!0===i?a.a.createElement(on,null):a.a.createElement(C,null,a.a.createElement(N,{name:"amount",label:"Question count",options:t.amount,onChange:o}),a.a.createElement(N,{name:"category",label:"Category",options:t.category.map(function(n){return n.name}),onChange:o}),a.a.createElement(N,{name:"type",label:"Type",options:t.type,onChange:o}),a.a.createElement(N,{name:"difficulty",label:"Dificulity",options:t.difficulty,onChange:o}));Object(r.useEffect)(function(){e()},[e]);return a.a.createElement(x,null,a.a.createElement(w,null,a.a.createElement(T,null,"Quizer"),a.a.createElement(_,null,a.a.createElement("p",null,"Quiz generator with use of Trivia API opentdb.com"),a.a.createElement("p",null,"created by Jacek Smetek")),s),a.a.createElement(A,{to:"/quiz",onClick:function(){c(),u()}},"Start"))}),un=t(19);function sn(){var n=Object(b.a)(["\n    font-size: 2rem;\n    margin: 1rem;\n    color: #125271;\n"]);return sn=function(){return n},n}function ln(){var n=Object(b.a)(["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(-135deg, #FF9579,#FFCEC1);    \n    text-align: left;\n"]);return ln=function(){return n},n}var fn=p.a.div(ln()),dn=Object(p.a)(un.a)(sn()),mn=t(13),bn=Object(k.b)(null,function(n){return{quit:function(){return n({type:"QUIZ_QUIT"})}}})(function(n){var e=n.quit;return a.a.createElement(fn,null,a.a.createElement(c.b,{to:"/",onClick:e},a.a.createElement(dn,{icon:mn.d})))}),pn=t(15),gn=t(54);function hn(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 80%;\n"]);return hn=function(){return n},n}function En(){var n=Object(b.a)(["\n    position: relative;\n    align-self: center;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]);return En=function(){return n},n}var vn=p.a.div(En()),yn=p.a.div(hn()),On=t(21);function jn(){var n=Object(b.a)(["\n    display: block;\n    font-size: 1.5rem;\n    font-weight: bold;\n    margin: 1rem;\n"]);return jn=function(){return n},n}function xn(){var n=Object(b.a)(["\n    display: flex;\n"]);return xn=function(){return n},n}function wn(){var n=Object(b.a)(["\n    font-size: 1rem;\n    padding: 0.5rem;\n    padding-bottom: 2rem;   \n    font-style: italic; \n"]);return wn=function(){return n},n}function Cn(){var n=Object(b.a)(["\n   padding: 1.5rem;\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(b.a)(["\n    position: relative;\n    height: 40vh;\n    background: white;\n    border-radius: 50px;\n    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.25);\n    flex: 6;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    overflow: hidden;\n"]);return Sn=function(){return n},n}var Tn=p.a.div(Sn()),_n=p.a.h1(Cn()),An=p.a.h3(wn()),kn=p.a.div(xn()),qn=p.a.div(jn());function Rn(){var n=Object(b.a)(["\n    display: inline-block;\n    width: 50%;\n    padding: 15px;\n    cursor: pointer;\n    color: ",";\n    background: ",";\n    :hover {\n        background: #b3d8e9;\n    }\n"]);return Rn=function(){return n},n}var Un=p.a.div(Rn(),function(n){return n.isSelected||n.showAnswer&&n.isCorrect?"white":"inherit"},function(n){return n.isSelected?n.showAnswer?n.isCorrect?"green":"red":"#125271":n.showAnswer&&n.isCorrect?"green":"inherit"}),In=function(n){var e=n.selected,t=n.onClick,r=n.answer,i=n.correct,o=n.ended;return a.a.createElement(Un,{children:r,isSelected:e,isCorrect:i,showAnswer:o,onClick:function(){o||t()}})},Fn=t(24),zn=t.n(Fn),Qn=Object(k.b)(function(n){var e=n.quiz;return{questions:Object(On.a)(e.questions.all),totalQuestions:e.questions.amount,correctAnswers:Object(On.a)(e.answers.correct),questionsPicked:Object(On.a)(e.answers.picked),ended:e.finished}},function(n){return{pickAnswer:function(e,t){return n(function(n,e){return{type:"PICK_ANSWER",index:n,answer:e}}(e,t))}}})(function(n){var e=n.totalQuestions,t=n.questions,r=n.questionsPicked,i=n.correctAnswers,o=n.ended,c=n.id-1,u=t[c],s=i[c],l=r[c],f=Object(On.a)(u.incorrect_answers);f.splice(s,0,u.correct_answer);var d="Question ".concat(c+1,"/").concat(e),m="Category: ".concat(u.category),b=s===l?"GREAT!":"BAD LUCK";return a.a.createElement(Tn,null,a.a.createElement(_n,null,d),a.a.createElement(An,null,m),a.a.createElement("p",null,zn()(u.question)),a.a.createElement(kn,null,f.map(function(e,t){return a.a.createElement(In,{key:t,answer:zn()(e),selected:l===t,onClick:(r=t,function(){return n.pickAnswer(c,r)}),ended:o,correct:s===t});var r})),o?a.a.createElement(qn,null,b):null)});function Ln(){var n=Object(b.a)(["\n    color: ",";\n    font-size: 4rem;\n    flex: 1;\n    cursor: ",";\n"]);return Ln=function(){return n},n}var Nn,Gn=p.a.div(Ln(),function(n){return n.disable?"rgba(80,80,80,0.2)":"inherit"},function(n){return n.disable?"not-allowed":"pointer"});!function(n){n[n.Left=0]="Left",n[n.Right=1]="Right"}(Nn||(Nn={}));var Hn=function(n){var e=n.direction,t=n.disable,r=n.onClick,i=e===Nn.Left?mn.b:mn.c;return a.a.createElement(Gn,{onClick:function(){t||r()},disable:t},a.a.createElement(un.a,{icon:i}))};function Dn(){var n=Object(b.a)(["\n    color: inherit;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor: pointer;\n    background: white;\n    padding: 20px 50px;    \n    border-radius: 25px;\n    font-weight: bold;\n    font-size: 2rem;\n    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.25);\n    transition: transform 0.25s;\n    margin: 2rem;\n    :hover {\n        transform: scale(1.2,1.2);    \n    }\n"]);return Dn=function(){return n},n}var Pn=p.a.div(Dn()),Bn=function(n){return a.a.createElement(Pn,{children:n.label,onClick:n.onClick})};function Mn(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return Mn=function(){return n},n}function Zn(){var n=Object(b.a)(["\n    margin-bottom: 1rem;\n"]);return Zn=function(){return n},n}function Jn(){var n=Object(b.a)(["\n    font-size: 6rem;\n    margin: 0;\n    padding: 0;\n    animation: "," 0.5s cubic-bezier(0, 0, 0.35, 2.41) forwards;\n"]);return Jn=function(){return n},n}function Wn(){var n=Object(b.a)(["\n    0%{\n        transform: scale(0,0);\n    }\n    100%{\n        transform: scale(1,1)\n    }\n"]);return Wn=function(){return n},n}function Yn(){var n=Object(b.a)(["\n    padding: 1rem;\n    border-radius: 3rem; \n    background: white;\n    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.25);\n"]);return Yn=function(){return n},n}function Kn(){var n=Object(b.a)(["\n    position: absolute;\n    display: flex;\n    height: 100vh;\n    width: 80%;\n    align-items: center; \n    flex-direction: column;\n    justify-content: center;\n"]);return Kn=function(){return n},n}var Vn=p.a.div(Kn()),Xn=p.a.div(Yn()),$n=Object(p.b)(Wn()),ne=p.a.h1(Jn(),$n),ee=p.a.h2(Zn()),te=p.a.div(Mn());function re(){var n=Object(b.a)(["\n    font-size: 2rem;\n    margin-top: 1rem;\n"]);return re=function(){return n},n}function ae(){var n=Object(b.a)(["\n    padding: 0 2rem;\n    text-decoration: none;\n    color: inherit;\n    :hover {\n        color:red;\n    }\n"]);return ae=function(){return n},n}var ie=Object(p.a)(c.b)(ae()),oe=Object(p.a)(un.a)(re()),ce=function(n){var e=n.icon,t=n.link,r=n.label,i=n.onClick;return a.a.createElement(ie,{to:t,onClick:i},a.a.createElement(oe,{icon:e}),a.a.createElement("h3",null," ",r," "))},ue=Object(k.b)(function(n){var e=n.quiz;return{finished:e.finished,percentage:e.score.percentage,score:e.score.correct,max:e.questions.amount}},function(n){return{quit:function(){return n({type:"QUIZ_QUIT"})},initQuiz:function(){return n(D())}}})(function(n){return a.a.createElement(Vn,null,a.a.createElement(Xn,null,a.a.createElement(ne,null,n.percentage,"%"),a.a.createElement(ee,null,n.score,"/",n.max),a.a.createElement(te,null,a.a.createElement(ce,{link:"/quiz",icon:mn.a,label:"Review"}),a.a.createElement(ce,{link:"/quiz",icon:mn.e,label:"Try again",onClick:function(){n.initQuiz()}}),a.a.createElement(ce,{link:"/",icon:mn.d,label:"Home",onClick:function(){n.quit()}}))))}),se=Object(k.b)(function(n){var e=n.quiz,t=n.startPage;return{questionsAmount:e.questions.amount,quizStarted:e.started,quizFinished:e.finished,ended:e.finished,dataLoading:e.questions.fetching,isDataAvailable:t.dataFetched}},function(n){return{end:function(){return n(function(n){n(Y()),n(W())})}}})(function(n){var e=Object(r.useState)(1),t=Object(gn.a)(e,2),i=t[0],o=t[1],c=!(n.quizStarted||n.quizFinished)||n.dataLoading,u=n.ended?"View score":"Submit";return a.a.createElement(vn,null,n.isDataAvailable?null:a.a.createElement(pn.a,{to:"/"}),n.ended?a.a.createElement(ue,null):a.a.createElement(yn,null,a.a.createElement(Hn,{disable:i<=1,direction:Nn.Left,onClick:function(){o(i-1),console.log("questionNumber",i)}}),c?a.a.createElement(on,null):a.a.createElement(Qn,{id:i}),a.a.createElement(Hn,{disable:i>=n.questionsAmount,direction:Nn.Right,onClick:function(){o(i+1),console.log("questionNumber",i)}})),a.a.createElement(Bn,{label:u,onClick:function(){n.ended||n.end()}}))}),le=function(n){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=a.a.createElement(pn.d,null,a.a.createElement(pn.b,{path:"/quiz",exact:!0,component:se}),a.a.createElement(pn.b,{path:"/",exact:!0,component:cn}),a.a.createElement(pn.a,{to:"/"}));return a.a.createElement("div",{className:m.App},a.a.createElement(bn,null),n)}}]),e}(r.Component),fe=t(17),de=t(53),me=t(4),be={started:!1,finished:!1,questions:{all:[{category:"Entertainment: Board Games",type:"multiple",difficulty:"easy",question:"How many pieces are there on the board at the start of a game of chess?",correct_answer:"32",incorrect_answers:["16","20","36"]}],amount:1,fetching:!0},answers:{correct:[1],picked:[-1]},score:{percentage:-1,correct:0}},pe=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_QUESTIONS_START":return function(n,e){return Object(me.a)({},n,{questions:Object(me.a)({},n.questions,{fetching:!0})})}(n);case"FETCH_QUESTIONS_SUCCESS":return function(n,e){return Object(me.a)({},n,{questions:Object(me.a)({},n.questions,{all:e.questions,fetching:!1,amount:e.questions.length})})}(n,e);case"FETCH_QUESTIONS_FAIL":return function(n,e){return console.log(e.error),Object(me.a)({},n,{questions:Object(me.a)({},n.questions,{fetching:!1})})}(n,e);case"QUIZ_STARTED":return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be;return arguments.length>1&&arguments[1],Object(me.a)({},n,{questions:Object(me.a)({},n.questions),started:!0,score:{percentage:-1,correct:0}})}(n,e);case"SHUFFLE_ANSWERS":return function(n,e){var t=n.questions,r=[];for(var a in t.all){var i=t.all[a],o=i.incorrect_answers.length+1;2===o?r.push("True"===i.correct_answer?0:1):r.push(Math.floor(Math.random()*o))}return Object(me.a)({},n,{answers:{correct:r,picked:r.map(function(){return-1})}})}(n);case"PICK_ANSWER":return function(n,e){return n.answers.picked[e.index]=e.answer,Object(me.a)({},n)}(n,e);case"QUIZ_ENDED":return function(n,e){return Object(me.a)({},n,{finished:!0,started:!1,questions:Object(me.a)({},n.questions)})}(n);case"QUIZ_QUIT":return function(n,e){return Object(me.a)({},n,{finished:!1,started:!1})}(n);case"CALCULATE_SCORE":return function(n,e){var t=n.answers.correct.reduce(function(e,t,r){return t===n.answers.picked[r]?e+1:e},0),r=Math.round(t/n.questions.amount*100);return Object(me.a)({},n,{score:{percentage:r,correct:t}})}(n);case"RESET_QUIZ":return be;default:return n}},ge=t(25),he={loading:!1,dataFetched:!1,settings:{available:{amount:["5","10","15","20","50"],category:[{name:"Any Category",id:0}],difficulty:["Any Dificulity","Easy","Medium","Hard"],type:["Any Type","Multiple Choice","True / False"]},selected:{amount:"5",category:"Any Category",difficulty:"Any Dificulity",type:"Any Type"},apiURL:"https://opentdb.com/api.php?amount=5&category=0&type=0&dificulty=0"}},Ee=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_CATEGORIES_START":return function(n,e){return Object(me.a)({},n,{loading:!0})}(n);case"FETCH_CATEGORIES_SUCCESS":return function(n,e){var t={settings:Object(me.a)({},n.settings,{available:Object(me.a)({},n.settings.available,{category:[{name:"Any Category",id:0}].concat(e.categories)})})};return Object(me.a)({},n,{loading:!1},t,{dataFetched:!0})}(n,e);case"FETCH_CATEGORIES_FAIL":return function(n,e){return console.log("Something went wrong"),console.log(e.error),Object(me.a)({},n,{loading:!1})}(n,e);case"SET_SETTING":return function(n,e){var t=Object(me.a)({},n.settings.selected,Object(ge.a)({},e.setting,e.value));return Object(me.a)({},n,{settings:Object(me.a)({},n.settings,{selected:Object(me.a)({},t)})})}(n,e);case"GENERATE_URL":return function(n,e){var t=n.settings.available.category.find(function(e){return e.name===n.settings.selected.category}).id,r=n.settings.selected.amount,a=["0","easy","medium","hard"][n.settings.available.difficulty.indexOf(n.settings.selected.difficulty)],i=["0","multiple","boolean"][n.settings.available.type.indexOf(n.settings.selected.type)],o="https://opentdb.com/api.php?amount=".concat(r,"&category=").concat(t,"&type=").concat(i,"&dificulty=").concat(a);return Object(me.a)({},n,{settings:Object(me.a)({},n.settings,{apiURL:o})})}(n);case"RESET_START_PAGE":return he;default:return n}},ve=fe.d,ye=Object(fe.c)({quiz:pe,startPage:Ee}),Oe=Object(fe.e)(ye,ve(Object(fe.a)(de.a))),je=a.a.createElement(k.a,{store:Oe},a.a.createElement(c.a,null,a.a.createElement(le,null)));o.a.render(je,document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.e6ed9e05.chunk.js.map