"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,r,n){n.r(r);var t,s=n(861),a=n(439),c=n(168),i=n(757),o=n.n(i),l=n(924),v=n(87),h=n(689),d=n(791),u=n(984),p=n(184),x=(0,l.ZP)(v.OL)(t||(t=(0,c.Z)(["\n  color: black;\n\n  &.active {\n    color: orange;\n  }\n"])));r.default=function(){var e,r,n=(0,d.useState)({genres:[]}),t=(0,a.Z)(n,2),c=t[0],i=t[1],l=(0,h.UO)().movieId,j=(0,h.TH)(),f=(0,d.useRef)(null!==(e=null===(r=j.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies");(0,d.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Uh)(l);case 3:r=e.sent,i({poster:r.backdrop_path,genres:r.genres,title:r.original_title,overview:r.overview,score:r.vote_average,date:r.release_date}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]);var w=c.poster,m=c.title,g=c.overview,k=c.score,_=c.genres,b=c.date,U=new Date(b),Z=_.map((function(e){return e.name}));return Z=Z.join(", "),(0,p.jsxs)("div",{children:[(0,p.jsx)(v.rU,{to:f.current,children:"Get Back"}),(0,p.jsx)("h2",{children:"MovieDetails"}),(0,p.jsxs)("h3",{children:[m," (",U=U?new Date(U).getFullYear():"",")"]}),(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(w),alt:"movie"}),(0,p.jsxs)("p",{children:["User Score: ",Math.ceil(k)]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:g}),(0,p.jsx)("h3",{children:"Genres:"}),_.length?(0,p.jsx)("p",{children:Z}):null,(0,p.jsxs)("nav",{children:[(0,p.jsx)(x,{to:"cast",children:(0,p.jsx)("div",{children:"Cast"})}),(0,p.jsx)(x,{to:"reviews",children:"Reviews"})]}),(0,p.jsx)(d.Suspense,{fallback:(0,p.jsx)("div",{children:"...Loading"}),children:(0,p.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=884.dcb94ac0.chunk.js.map