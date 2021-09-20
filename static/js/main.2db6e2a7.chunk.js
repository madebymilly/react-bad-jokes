(this["webpackJsonpreact-bad-jokes"]=this["webpackJsonpreact-bad-jokes"]||[]).push([[0],{28:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var o=s(3),c=s.n(o),n=s(21),a=s.n(n),i=(s(28),s(11)),r=s.n(i),j=s(8),h=s(22),l=s(12),k=s(4),d=s(5),u=s(2),p=s(7),b=s(6),m=s(23),f=s.n(m),O=s(54),g=(s(49),s(50),s(0)),v=function(e){Object(p.a)(s,e);var t=Object(b.a)(s);function s(e){var o;return Object(k.a)(this,s),(o=t.call(this,e)).handleScoreUp=o.handleScoreUp.bind(Object(u.a)(o)),o.handleScoreDown=o.handleScoreDown.bind(Object(u.a)(o)),o.getColor=o.getColor.bind(Object(u.a)(o)),o.getEmoticon=o.getEmoticon.bind(Object(u.a)(o)),o}return Object(d.a)(s,[{key:"handleScoreUp",value:function(){this.props.changeScore(this.props.joke.id,1)}},{key:"handleScoreDown",value:function(){this.props.changeScore(this.props.joke.id,-1)}},{key:"getColor",value:function(){return this.props.joke.score>=15?"#4CAF50":this.props.joke.score>=12?"#8BC34A":this.props.joke.score>=9?"#CDDC39":this.props.joke.score>=6?"#FFEB3B":this.props.joke.score>=3?"#FFC107":this.props.joke.score>=0?"#FF9800":"#f44336"}},{key:"getEmoticon",value:function(){return this.props.joke.score>=15?"em em-rolling_on_the_floor_laughing":this.props.joke.score>=12?"em em-laughing":this.props.joke.score>=9?"em em-smiley":this.props.joke.score>=6?"em em-slightly_smiling_face":this.props.joke.score>=3?"em em-neutral_face":this.props.joke.score>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){var e=this.props.joke;return Object(g.jsxs)("div",{className:"Joke",children:[Object(g.jsxs)("div",{className:"Joke-buttons",children:[Object(g.jsx)("i",{className:"Joke-score-up far fa-thumbs-up",onClick:this.handleScoreUp}),Object(g.jsx)("div",{className:"Joke-score",style:{borderColor:this.getColor()},children:e.score}),Object(g.jsx)("i",{className:"Joke-score-down far fa-thumbs-down",onClick:this.handleScoreDown})]}),Object(g.jsx)("div",{className:"Joke-text",children:e.joke}),Object(g.jsx)("div",{className:"Joke-emoticon",children:Object(g.jsx)("i",{className:this.getEmoticon()})})]})}}]),s}(o.Component);function J(e,t){window.localStorage.setItem(e,JSON.stringify(t))}var x=function(e){Object(p.a)(s,e);var t=Object(b.a)(s);function s(e){var o;return Object(k.a)(this,s),(o=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},o.seenJokes=new Set(o.state.jokes.map((function(e){return e.joke}))),o.changeScore=o.changeScore.bind(Object(u.a)(o)),o.handleClick=o.handleClick.bind(Object(u.a)(o)),o.fetchJokes=o.fetchJokes.bind(Object(u.a)(o)),o}return Object(d.a)(s,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.setState({loading:!0},this.fetchJokes)}},{key:"changeScore",value:function(e,t){var s=this,o=this.state.jokes.map((function(s){return s.id===e?Object(l.a)(Object(l.a)({},s),{},{score:s.score+t}):s}));this.setState({jokes:o},(function(){return J("jokes",s.state.jokes)}))}},{key:"handleClick",value:function(){this.setState({loading:!0},this.fetchJokes)}},{key:"fetchJokes",value:function(){var e=Object(h.a)(r.a.mark((function e(){var t,s,o,c,n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokesToGet)){e.next=10;break}return e.next=5,f.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:s=e.sent,o=s.data.joke,this.seenJokes.has(o)||(c={id:Object(O.a)(),joke:o,score:0},t=[].concat(Object(j.a)(t),[c]),this.seenJokes.add(c.joke)),e.next=2;break;case 10:this.setState((function(e){return{jokes:[].concat(Object(j.a)(e.jokes),Object(j.a)(t)),loading:!1}}),(function(){J("jokes",n.state.jokes),J("seenJokes",n.seenJokes)})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0),this.setState({loading:!1});case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.loading)return Object(g.jsxs)("div",{className:"JokeList-spinner",children:[Object(g.jsx)("i",{className:"far fa-8x fa-laugh fa-spin"}),Object(g.jsx)("h1",{className:"JokeList-title",children:"Loading..."})]});var t=this.state.jokes;return Object(g.jsxs)("div",{className:"JokeList",children:[Object(g.jsxs)("div",{className:"JokeList-sidebar",children:[Object(g.jsxs)("h1",{className:"JokeList-title",children:[Object(g.jsx)("span",{children:"Bad"})," Jokes"]}),Object(g.jsx)("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"smiley"}),Object(g.jsx)("button",{className:"JokeList-getmore",onClick:this.handleClick,children:"Fetch More Jokes"})]}),Object(g.jsx)("div",{className:"JokeList-jokes",children:t.map((function(t){return Object(g.jsx)(v,{joke:t,changeScore:e.changeScore},t.id)}))})]})}}]),s}(o.Component);x.defaultProps={numJokesToGet:10};var S=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(x,{})})};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.2db6e2a7.chunk.js.map