(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,n,t){e.exports=t(94)},64:function(e,n,t){var r=t(65);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(67)(r,a);r.locals&&(e.exports=r.locals)},65:function(e,n,t){(n=e.exports=t(66)(!1)).push([e.i,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  \n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n#_1YYU_vdtEoCzbtmk8tBvTU {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n',""]),n.locals={root:"_1YYU_vdtEoCzbtmk8tBvTU"}},94:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(12),i=t.n(c),o=t(14),u=(t(64),t(47)),l=t(48),s=t(57),d=t(49),f=t(58),p=t(1),g=t(2);function b(){var e=Object(p.a)(["\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;  \n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    position: absolute;\n    \n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n  \n    color: #02283B;\n    color: #125271;\n\n    background: white;\n"]);return b=function(){return e},e}var m=g.a.div(b());function v(){var e=Object(p.a)(["\n    color: inherit;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor: pointer;\n    background: white;\n    padding: 20px 50px;    \n    border-radius: 25px;\n    font-weight: bold;\n    font-size: 2rem;\n    box-shadow: 1px 1px 0px 3px rgba(0, 0, 0, 0.5);\n    transition: transform 0.25s;\n    margin: 2rem;\n    :hover {\n        transform: scale(1.2,1.2);    \n    }\n"]);return v=function(){return e},e}function E(){var e=Object(p.a)(["\n    color: #5B99B7;\n"]);return E=function(){return e},e}function O(){var e=Object(p.a)(["\n    margin: 20px 0;\n    font-size: 6rem;\n    animation: "," 0.4s 0.5s ease-out forwards;\n    background: none;\n    color: #125271;\n    transform: scale(0, 0);\n"]);return O=function(){return e},e}function h(){var e=Object(p.a)(["\n    0% {\n        transform: scale(0, 0) rotate(0deg);\n    }\n    60% {\n        transform: scale(1.25, 1.25) rotate(360deg) skew(-15deg);\n    }\n    100% {\n        transform: scale(1.15, 1.25) rotate(355deg) skew(-10deg);\n    }\n"]);return h=function(){return e},e}function x(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    max-width: 650px;\n"]);return x=function(){return e},e}function y(){var e=Object(p.a)(["\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    align-self: center;\n    height: 50%;\n    width: 100%;\n"]);return y=function(){return e},e}var j=g.a.div(y()),S=g.a.div(x()),C=Object(g.b)(h()),T=g.a.h1(O(),C),w=g.a.div(E()),_=Object(g.a)(o.b)(v()),A=t(15),I=t(27),U=t.n(I),k=function(){return function(e,n){var t=n().startPage.settings.apiURL;e(D()),e(N()),U.a.get(t).then(function(n){e(Q(n.data.results))}).then(function(){e(R()),e(z())}).catch(function(n){e(F(n))})}},N=function(){return{type:"FETCH_QUESTIONS_START"}},Q=function(e){return{type:"FETCH_QUESTIONS_SUCCESS",questions:e}},F=function(e){return{type:"FETCH_QUESTIONS_FAIL",error:e}},R=function(){return{type:"SHUFFLE_ANSWERS"}},z=function(){return{type:"QUIZ_STARTED"}},q=function(){return{type:"QUIZ_ENDED"}},D=function(){return{type:"RESET_QUIZ"}},L=function(){return{type:"FETCH_CATEGORIES_START"}},B=function(e){return{type:"FETCH_CATEGORIES_SUCCESS",categories:e}},H=function(e){return{type:"FETCH_CATEGORIES_FAIL",error:e}},M=function(){return{type:"RESET_START_PAGE"}};function P(){var e=Object(p.a)(['\n  display: flex;\n  width: 64px;\n  height: 64px;\n  margin: 36px auto;\n  \n  :after {\n    content: " ";\n    display: block;\n    width: 46px;\n    height: 46px;\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid #125271;\n    border-color: #125271 transparent #125271 transparent;\n    animation: '," 1.2s linear infinite;\n  }\n"]);return P=function(){return e},e}function G(){var e=Object(p.a)(["\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n"]);return G=function(){return e},e}var Y=Object(g.b)(G()),Z=g.a.div(P(),Y),J=function(){return a.a.createElement(Z,null)};function W(){var e=Object(p.a)(["\n    width: 100%;\n    max-width: 900px;\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n"]);return W=function(){return e},e}var K=g.a.div(W());function V(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    flex: 4;\n    flex-wrap: wrap;\n"]);return V=function(){return e},e}function X(){var e=Object(p.a)(["\n    text-align: end;\n    flex: 1;\n    font-size: 1.5rem;\n    padding: 0 20px;\n    border-right: 1px solid #D3D3D3;\n"]);return X=function(){return e},e}function $(){var e=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    margin: 5px 0px;\n"]);return $=function(){return e},e}var ee,ne,te=g.a.div($()),re=g.a.div(X()),ae=g.a.div(V()),ce=t(5),ie="#125271",oe="#46C28E",ue="#E9F7F1",le="#EC5252",se="#FAEBEB",de="#D3D3D3",fe="#F2F2F2",pe=t(28);function ge(){var e=Object(p.a)(["\n    color: ",";\n    font-size: 2rem;\n    :hover {\n        color: inherit;\n    }\n    \n"]);return ge=function(){return e},e}function be(){var e=Object(p.a)(["\n    white-space: nowrap;\n"]);return be=function(){return e},e}function me(){var e=Object(p.a)(["\n    width: 82px;\n    height: 82px;\n    border-width: ",";\n    border-style: solid;\n    border-color: ",";\n    border-radius: 15px;\n    margin: 5px;\n    font-size: ",";\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-direction: column;\n    /* overflow: hidden; */\n    cursor: pointer;\n    :hover {\n        color: ",";\n    }\n    background: ",";\n"]);return me=function(){return e},e}!function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Big=2]="Big"}(ne||(ne={}));var ve,Ee,Oe=(ee={},Object(ce.a)(ee,ne.Small,"0.75rem"),Object(ce.a)(ee,ne.Medium,"1rem"),Object(ce.a)(ee,ne.Big,"1.75rem"),ee),he=g.a.div(me(),function(e){return e.selected?"2px":"1px"},function(e){return e.selected?oe:de},function(e){return Oe[e.fontSize]},fe,function(e){return e.selected?ue:null}),xe=g.a.div(be()),ye=Object(g.a)(pe.a)(ge(),function(e){return e.selected?oe:de}),je=t(7);!function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Big=2]="Big"}(ve||(ve={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Big=2]="Big"}(Ee||(Ee={}));var Se=function(e){return a.a.createElement(he,{fontSize:null!=e.fontSize?e.fontSize:Ee.Medium,selected:e.selected,onClick:e.onClick},a.a.createElement(ye,{selected:e.selected,icon:e.icon||je.g}),a.a.createElement(xe,null,e.header))},Ce={Any:je.g,ABCD:je.f,"True/False":je.b,Easy:je.a,Medium:je.d,Hard:je.c},Te=(je.g,je.f,je.b,je.a,je.d,je.c,function(e){return Ce[e]||je.g}),we=function(e){var n=e.label,t=e.options,r=e.selected,c=e.onChange;return a.a.createElement(te,null,a.a.createElement(re,null,n),a.a.createElement(ae,null,t.map(function(e){return a.a.createElement(Se,{icon:Te(e),header:e,selected:e===r,onClick:function(){return c(e)}})})))},_e=t(56);function Ae(){var e=Object(p.a)(["\n    &.reactSelect {\n        width: 100%;\n        max-width: 400px;\n        color: ",";\n        & .rSelect__control--is-focused {\n            border: 1px solid lightgray;\n            box-shadow: none;\n        }\n        & .rSelect__option--is-focused {\n            background: lightgray;\n        }\n        & .rSelect__option--is-selected {\n            background: ",";\n        }\n        & .rSelect__single-value {\n            color: inherit;\n        }\n    }\n"]);return Ae=function(){return e},e}function Ie(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    flex: 4;\n"]);return Ie=function(){return e},e}function Ue(){var e=Object(p.a)(["\n    text-align: end;\n    flex: 1;\n    font-size: 1.5rem;\n    padding: 0 20px;\n    border-right: 1px solid ",";\n"]);return Ue=function(){return e},e}function ke(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 10px 0px;\n"]);return ke=function(){return e},e}var Ne=g.a.div(ke()),Qe=g.a.div(Ue(),de),Fe=g.a.div(Ie()),Re=Object(g.a)(_e.a)(Ae(),ie,ie),ze=function(e){var n=e.options.map(function(e){return{value:e.id,label:e.name}}),t=n.filter(function(n){return n.value===e.selected.id}).pop();return a.a.createElement(Ne,null,a.a.createElement(Qe,null,e.label),a.a.createElement(Fe,null,a.a.createElement(Re,{classNamePrefix:"rSelect",className:"reactSelect",value:t,options:n,onChange:function(n){e.onChange({id:+n,name:n.label})}})))};function qe(){var e=Object(p.a)(["\n    flex: 3;\n    padding-right: 50px;\n"]);return qe=function(){return e},e}function De(){var e=Object(p.a)(["\n    width: 100%;\n    flex: 4;\n    display: flex;\n    align-items: center;\n"]);return De=function(){return e},e}function Le(){var e=Object(p.a)(["\n    width: 100%;\n    flex: 1;\n    text-align: end;\n    font-size: 1.5rem;\n    padding: 0 20px;\n    border-right: 1px solid ",";\n"]);return Le=function(){return e},e}function Be(){var e=Object(p.a)(["\n    font-size: 1.5rem;\n    flex: 1;\n"]);return Be=function(){return e},e}function He(){var e=Object(p.a)(["\n    display: flex;\n    margin: 10px 0px;\n"]);return He=function(){return e},e}var Me=g.a.div(He()),Pe=g.a.div(Be()),Ge=g.a.div(Le(),de),Ye=g.a.div(De()),Ze=g.a.div(qe());function Je(){var e=Object(p.a)(["\n    -webkit-appearance: none;\n    width: 100%;\n    height: 8px;\n    background: lightgrey;\n    outline: none;\n    border-radius: 16px;\n\n    ::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 20px;\n        height: 20px;\n        background: ",";\n        border-radius: 50%;\n        cursor: pointer;\n    }\n"]);return Je=function(){return e},e}var We=g.a.input.attrs(function(e){return{type:"range",min:e.min,max:e.max,step:5}})(Je(),ie),Ke=function(e){return a.a.createElement(We,{min:e.min,max:e.max,value:e.value,onChange:function(n){e.onChange(n.target.value)}})},Ve=function(e){var n=e.label,t=e.selected,r=e.options,c=e.onChange;return a.a.createElement(Me,null,a.a.createElement(Ge,null,n),a.a.createElement(Ye,null,a.a.createElement(Pe,null,t),a.a.createElement(Ze,null,a.a.createElement(Ke,{value:t,min:+r[0],max:+r[1],onChange:c}))))},Xe=function(e){var n=e.amount,t=e.category,r=e.difficulty,c=e.type,i=e.onAmountChange,o=e.onCategoryChange,u=e.onDifficultyChange,l=e.onTypeChange;return a.a.createElement(K,null,a.a.createElement(Ve,{label:"Quantity",options:["5","30"],selected:n.selected,onChange:i}),a.a.createElement(ze,{label:"Cateogry",options:t.values,selected:t.selected,onChange:o}),a.a.createElement(we,{label:"Type",options:c.values,selected:c.selected,onChange:l}),a.a.createElement(we,{label:"Difficulty",options:r.values,selected:r.selected,onChange:u}))},$e=Object(A.b)(function(e){var n=e.startPage;return{settings:n.settings,loading:n.loading,apiURL:n.settings.apiURL}},function(e){return{init:function(){return e(function(e){e(M()),e(L()),U.a.get("https://opentdb.com/api_category.php").then(function(n){e(B(n.data.trivia_categories))}).catch(function(n){e(H(n))})})},generateURL:function(){return e({type:"GENERATE_URL"})},initQuiz:function(){return e(k())},setQuestionAmount:function(n){return e({type:"SET_QUESTION_AMOUNT",value:n})},setQuestionCategory:function(n){return e({type:"SET_QUESTION_CATEGORY",value:n})},setQuestionType:function(n){return e({type:"SET_QUESTION_TYPE",value:n})},setQuestionDifficulty:function(n){return e({type:"SET_QUESTION_DIFFICULTY",value:n})}}})(function(e){var n=e.init,t=e.settings,c=e.loading,i=e.generateURL,o=e.initQuiz,u=e.setQuestionAmount,l=e.setQuestionCategory,s=e.setQuestionType,d=e.setQuestionDifficulty,f=t.amount,p=t.category,g=t.difficulty,b=t.type;Object(r.useEffect)(function(){n()},[n]);return a.a.createElement(j,null,a.a.createElement(S,null,a.a.createElement(T,null,"Quizer"),a.a.createElement(w,null,a.a.createElement("p",null,"Quiz generator with use of Trivia API opentdb.com"),a.a.createElement("p",null,"created by Jacek Smetek")),!0===c?a.a.createElement(J,null):a.a.createElement(Xe,{amount:f,onAmountChange:u,category:p,onCategoryChange:l,difficulty:g,onDifficultyChange:d,type:b,onTypeChange:s})),c?null:a.a.createElement(_,{to:"/quiz",onClick:function(){i(),o()}}," Start "))}),en=t(17),nn=t(23),tn=t(22);function rn(){var e=Object(p.a)(["\n    align-self: center;\n    width: 80%;\n    max-width: 700px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]);return rn=function(){return e},e}var an=g.a.div(rn());function cn(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return cn=function(){return e},e}function on(){var e=Object(p.a)([" \n    font-style: italic;\n    display: flex;\n"]);return on=function(){return e},e}function un(){var e=Object(p.a)(["\n    display: flex;\n    margin: 15px 0;\n"]);return un=function(){return e},e}function ln(){var e=Object(p.a)(["\n   display: flex;\n"]);return ln=function(){return e},e}function sn(){var e=Object(p.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    overflow: hidden;\n"]);return sn=function(){return e},e}var dn,fn,pn,gn,bn,mn=g.a.div(sn()),vn=(g.a.div(ln()),g.a.h3(un())),En=g.a.p(on()),On=g.a.div(cn());function hn(){var e=Object(p.a)(["\n    width: 20px;\n    height: 20px;\n    border-width: ",";\n    border-style: solid;\n    border-color: ",";\n    margin: 0 10px;\n    border-radius: 50%;\n"]);return hn=function(){return e},e}function xn(){var e=Object(p.a)(["\n    display: flex;\n    width: 100%;\n    padding: 15px 0;\n    cursor: pointer;\n    background-color: ",";\n    :hover {\n        background: ",";\n    }\n    border-width: 1px;\n    border-style: solid;\n    border-color: ",";\n    margin: 5px 0;\n    border-radius: 5px;\n"]);return xn=function(){return e},e}!function(e){e[e.CorrectSelected=0]="CorrectSelected",e[e.IncorrectSelected=1]="IncorrectSelected",e[e.Selected=2]="Selected",e[e.CorrectNotSelected=3]="CorrectNotSelected",e[e.Notselected=4]="Notselected"}(bn||(bn={}));var yn=function(e){var n=e.isSelected,t=e.showAnswer,r=e.isCorrect;return n?t?r?bn.CorrectSelected:bn.IncorrectSelected:bn.Selected:t&&r?bn.CorrectNotSelected:bn.Notselected},jn=(dn={},Object(ce.a)(dn,bn.CorrectSelected,ue),Object(ce.a)(dn,bn.IncorrectSelected,se),Object(ce.a)(dn,bn.Selected,"transparent"),Object(ce.a)(dn,bn.CorrectNotSelected,ue),Object(ce.a)(dn,bn.Notselected,"transparent"),dn),Sn=(fn={},Object(ce.a)(fn,bn.CorrectSelected,oe),Object(ce.a)(fn,bn.IncorrectSelected,le),Object(ce.a)(fn,bn.Selected,de),Object(ce.a)(fn,bn.CorrectNotSelected,de),Object(ce.a)(fn,bn.Notselected,de),fn),Cn=g.a.div(xn(),function(e){return jn[yn(e)]},fe,function(e){return Sn[yn(e)]}),Tn=(pn={},Object(ce.a)(pn,bn.CorrectSelected,oe),Object(ce.a)(pn,bn.IncorrectSelected,le),Object(ce.a)(pn,bn.Selected,ie),Object(ce.a)(pn,bn.CorrectNotSelected,oe),Object(ce.a)(pn,bn.Notselected,de),pn),wn=(gn={},Object(ce.a)(gn,bn.CorrectSelected,"10px"),Object(ce.a)(gn,bn.IncorrectSelected,"6px"),Object(ce.a)(gn,bn.Selected,"6px"),Object(ce.a)(gn,bn.CorrectNotSelected,"10px"),Object(ce.a)(gn,bn.Notselected,"1px"),gn),_n=g.a.div(hn(),function(e){return wn[yn(e)]},function(e){return Tn[yn(e)]}),An=function(e){var n=e.isSelected,t=e.onClick,r=e.answer,c=e.isCorrect,i=e.reveal;return a.a.createElement(Cn,{isSelected:n,isCorrect:c,showAnswer:i,onClick:i?void 0:t},a.a.createElement(_n,{showAnswer:i,isCorrect:c,isSelected:n}),r)},In=t(29),Un=t.n(In),kn=function(e){var n=e.question,t=e.answers,r=e.correctId,c=e.reveal,i=e.onAnswerPicked,o=e.selectedId,u="Category: ".concat(n.category);return a.a.createElement(mn,null,a.a.createElement(En,null,u),a.a.createElement(vn,null,Un()(n.question)),a.a.createElement(On,null,t.map(function(e,n){return a.a.createElement(An,{key:n,answer:Un()(e),isSelected:o===n,isCorrect:r===n,reveal:c,onClick:function(){return i(n)}})})))};function Nn(){var e=Object(p.a)(["\n\n"]);return Nn=function(){return e},e}function Qn(){var e=Object(p.a)(["\n\n"]);return Qn=function(){return e},e}function Fn(){var e=Object(p.a)(["\n    font-size: 2rem;\n    margin: 15px;\n    color: #125271;\n"]);return Fn=function(){return e},e}function Rn(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    text-align: left;\n    background: #F2F2F2;\n    width: 100%;\n    bottom: 0;\n    padding: 0 15px;\n"]);return Rn=function(){return e},e}var zn=g.a.div(Rn()),qn=Object(g.a)(pe.a)(Fn()),Dn=g.a.div(Qn()),Ln=g.a.div(Nn()),Bn=Object(A.b)(function(e){e.quiz,e.startPage;return{}},function(e){return{quit:function(){return e({type:"QUIZ_QUIT"})}}})(function(e){var n=e.quit,t=e.currentQuestionNumber,r=e.questionsAmount,c=e.loading,i=e.finished?null:c?"Loading...":"Question ".concat(t," of ").concat(r);return a.a.createElement(zn,null,a.a.createElement(Dn,null,i),a.a.createElement(Ln,null,a.a.createElement(o.b,{to:"/",onClick:n}," ",a.a.createElement(qn,{icon:je.e})," ")))});function Hn(){var e=Object(p.a)(["\n    color: white;\n    text-decoration: none;\n    cursor: pointer;\n    background: #EC5252;\n    padding: 15px 25px;\n    font-size: 1.25rem;\n    margin: 2rem;\n    :hover {\n        background: #992337;\n    }\n"]);return Hn=function(){return e},e}var Mn=g.a.div(Hn()),Pn=function(e){return a.a.createElement(Mn,{children:e.label,onClick:e.onClick})};function Gn(){var e=Object(p.a)(["\n    width: 20%;\n    text-align: left;\n    border-left: 1px solid lightgray;\n    display: flex;\n    padding: 0 15px;\n    align-items: center;\n"]);return Gn=function(){return e},e}function Yn(){var e=Object(p.a)(["\n    text-align: left;\n    width: 80%;\n    padding: 0 15px;\n"]);return Yn=function(){return e},e}function Zn(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 0;\n    margin: 5px;\n    background-color: ",";\n    border-width: 1px;\n    border-style: solid;\n    border-color: ",";\n    border-radius: 5px;\n"]);return Zn=function(){return e},e}function Jn(){var e=Object(p.a)(["\n"]);return Jn=function(){return e},e}var Wn=g.a.div(Jn()),Kn=g.a.div(Zn(),function(e){return e.isCorrect?ue:se},function(e){return e.isCorrect?oe:le}),Vn=g.a.div(Yn()),Xn=g.a.div(Gn()),$n=function(e){var n=e.questions,t=e.correctAnswers;return a.a.createElement(Wn,null,n.map(function(e,n){return a.a.createElement(Kn,{key:n,isCorrect:t[n]},a.a.createElement(Vn,null,e.question),a.a.createElement(Xn,null,e.correct_answer))}))},et=Object(A.b)(function(e){var n=e.quiz,t=e.startPage;return{questions:n.questions,quizStarted:n.started,dataLoading:n.fetching,isDataAvailable:t.dataFetched}},function(e){return{end:function(){return e(function(e){e(q())})},initQuiz:function(){return e(k())}}})(function(e){var n=Object(r.useState)(!1),t=Object(tn.a)(n,2),c=t[0],i=t[1],o=Object(r.useState)(1),u=Object(tn.a)(o,2),l=u[0],s=u[1],d=Object(r.useState)([]),f=Object(tn.a)(d,2),p=f[0],g=f[1],b=l-1,m=Object(r.useState)(-1),v=Object(tn.a)(m,2),E=v[0],O=v[1],h=e.questions[b],x=[],y=e.questions.length,j=null===h||void 0===h?void 0:h.correctAnswerId,S=Object(r.useState)(!1),C=Object(tn.a)(S,2),T=C[0],w=C[1],_=c?"Try Again!":T?"Next":"Check",A=!(e.quizStarted||c)||e.dataLoading;if(!e.isDataAvailable)return a.a.createElement(en.a,{to:"/"});h&&(x=Object(nn.a)(h.incorrect_answers)).splice(j,0,h.correct_answer);return a.a.createElement(an,null,A?a.a.createElement(J,null):c?a.a.createElement($n,{questions:e.questions,correctAnswers:p}):a.a.createElement(kn,{question:e.questions[b],reveal:T,answers:x,correctId:j,onAnswerPicked:function(e){O(e)},selectedId:E}),a.a.createElement(Pn,{label:_,onClick:function(){if(c)s(1),g([]),i(!1),w(!1),e.initQuiz();else if(T)O(-1),l===e.questions.length?i(!0):(s(l+1),w(!1));else{var n=E===j;g([].concat(Object(nn.a)(p),[n])),w(!0)}}}),a.a.createElement(Bn,{currentQuestionNumber:l,questionsAmount:y,loading:e.dataLoading,finished:c}))}),nt=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=a.a.createElement(en.d,null,a.a.createElement(en.b,{path:"/quiz",exact:!0,component:et}),a.a.createElement(en.b,{path:"/",exact:!0,component:$e}),a.a.createElement(en.a,{to:"/"}));return a.a.createElement(m,null,e)}}]),n}(r.Component),tt=t(19),rt=t(55),at=t(4),ct={started:!1,fetching:!0,questions:[]},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_QUESTIONS_START":return function(e,n){return Object(at.a)({},e,{fetching:!0})}(e);case"FETCH_QUESTIONS_SUCCESS":return function(e,n){return Object(at.a)({},e,{questions:n.questions,fetching:!1})}(e,n);case"FETCH_QUESTIONS_FAIL":return function(e,n){return console.log(n.error),Object(at.a)({},e,{fetching:!1})}(e,n);case"QUIZ_STARTED":return function(e,n){return Object(at.a)({},e,{started:!0})}(e);case"SHUFFLE_ANSWERS":return function(e,n){var t=e.questions,r=Object(nn.a)(t);return t.forEach(function(e,n){var t=-1,a=e.incorrect_answers.length+1;t=2===a?"True"===e.correct_answer?0:1:Math.floor(Math.random()*a),r[n].correctAnswerId=t}),Object(at.a)({},e,{questions:r})}(e);case"QUIZ_ENDED":case"QUIZ_QUIT":return function(e,n){return Object(at.a)({},e,{started:!1})}(e);case"RESET_QUIZ":return ct;default:return e}},ot={loading:!1,dataFetched:!1,settings:{amount:{values:["5","10","15","20","50"],selected:"5"},category:{values:[{name:"Any Category",id:0}],selected:{name:"Any Category",id:0}},difficulty:{values:["Easy","Medium","Hard","Any"],selected:"Any"},type:{values:["ABCD","True/False","Any"],selected:"Any"},apiURL:"https://opentdb.com/api.php?amount=5&category=0&type=0&dificulty=0"}},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_CATEGORIES_START":return function(e,n){return Object(at.a)({},e,{loading:!0})}(e);case"FETCH_CATEGORIES_SUCCESS":return function(e,n){var t=Object(at.a)({},e.settings,{category:Object(at.a)({},e.settings.category,{values:[{name:"Any Category",id:0}].concat(n.categories)})});return Object(at.a)({},e,{loading:!1,settings:t,dataFetched:!0})}(e,n);case"FETCH_CATEGORIES_FAIL":return function(e,n){return console.log("Something went wrong"),console.log(n.error),Object(at.a)({},e,{loading:!1})}(e,n);case"SET_QUESTION_AMOUNT":return function(e,n){return Object(at.a)({},e,{settings:Object(at.a)({},e.settings,{amount:Object(at.a)({},e.settings.amount,{selected:n.value})})})}(e,n);case"SET_QUESTION_CATEGORY":return function(e,n){return Object(at.a)({},e,{settings:Object(at.a)({},e.settings,{category:Object(at.a)({},e.settings.category,{selected:n.value})})})}(e,n);case"SET_QUESTION_TYPE":return function(e,n){return Object(at.a)({},e,{settings:Object(at.a)({},e.settings,{type:Object(at.a)({},e.settings.type,{selected:n.value})})})}(e,n);case"SET_QUESTION_DIFFICULTY":return function(e,n){return Object(at.a)({},e,{settings:Object(at.a)({},e.settings,{difficulty:Object(at.a)({},e.settings.difficulty,{selected:n.value})})})}(e,n);case"GENERATE_URL":return function(e,n){var t=e.settings,r=t.category,a=t.amount,c=t.difficulty,i=t.type,o=r.values.filter(function(e){return e.name===r.selected.name})[0].id,u=a.selected,l=["easy","medium","hard","0"][c.values.indexOf(c.selected)],s=["multiple","boolean","0"][i.values.indexOf(i.selected)],d="https://opentdb.com/api.php?amount=".concat(u,"&category=").concat(o,"&type=").concat(s,"&dificulty=").concat(l);return Object(at.a)({},e,{settings:Object(at.a)({},e.settings,{apiURL:d})})}(e);case"RESET_START_PAGE":return ot;default:return e}},lt=tt.d,st=Object(tt.c)({quiz:it,startPage:ut}),dt=Object(tt.e)(st,lt(Object(tt.a)(rt.a))),ft=a.a.createElement(A.a,{store:dt},a.a.createElement(o.a,null,a.a.createElement(nt,null)));i.a.render(ft,document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.7b0f601f.chunk.js.map