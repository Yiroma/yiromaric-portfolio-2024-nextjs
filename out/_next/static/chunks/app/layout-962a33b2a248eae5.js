(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{218:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,340,23)),Promise.resolve().then(i.t.bind(i,347,23)),Promise.resolve().then(i.bind(i,9994))},4976:(e,t,i)=>{"use strict";function s(e){let{src:t,width:i,quality:s}=e;return"https://yiromaric.fr/pictures/".concat(t,"?w=").concat(i,"&q=").concat(s||75)}i.r(t),i.d(t,{default:()=>s})},9994:(e,t,i)=>{"use strict";i.d(t,{default:()=>R});var s=i(5155),l=i(6658),n=i(2115),r=i(9656),a=i(9234),o=i(7249);class c extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d(e){let{children:t,isPresent:i}=e,l=(0,n.useId)(),r=(0,n.useRef)(null),a=(0,n.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,n.useContext)(o.Q);return(0,n.useInsertionEffect)(()=>{let{width:e,height:t,top:s,left:n}=a.current;if(i||!r.current||!e||!t)return;r.current.dataset.motionPopId=l;let o=document.createElement("style");return d&&(o.nonce=d),document.head.appendChild(o),o.sheet&&o.sheet.insertRule('\n          [data-motion-pop-id="'.concat(l,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(s,"px !important;\n            left: ").concat(n,"px !important;\n          }\n        ")),()=>{document.head.removeChild(o)}},[i]),(0,s.jsx)(c,{isPresent:i,childRef:r,sizeRef:a,children:n.cloneElement(t,{ref:r})})}let h=e=>{let{children:t,initial:i,isPresent:l,onExitComplete:o,custom:c,presenceAffectsLayout:h,mode:f}=e,m=(0,a.M)(u),p=(0,n.useId)(),x=(0,n.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;o&&o()},[m,o]),g=(0,n.useMemo)(()=>({id:p,initial:i,isPresent:l,custom:c,onExitComplete:x,register:e=>(m.set(e,!1),()=>m.delete(e))}),h?[Math.random(),x]:[l,x]);return(0,n.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[l]),n.useEffect(()=>{l||m.size||!o||o()},[l]),"popLayout"===f&&(t=(0,s.jsx)(d,{isPresent:l,children:t})),(0,s.jsx)(r.t.Provider,{value:g,children:t})};function u(){return new Map}var f=i(4710),m=i(5749);let p=e=>e.key||"";function x(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}var g=i(5403);let v=e=>{let{children:t,exitBeforeEnter:i,custom:l,initial:r=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync"}=e;(0,m.V)(!i,"Replace exitBeforeEnter with mode='wait'");let u=(0,n.useMemo)(()=>x(t),[t]),v=u.map(p),b=(0,n.useRef)(!0),w=(0,n.useRef)(u),j=(0,a.M)(()=>new Map),[N,k]=(0,n.useState)(u),[y,P]=(0,n.useState)(u);(0,g.E)(()=>{b.current=!1,w.current=u;for(let e=0;e<y.length;e++){let t=p(y[e]);v.includes(t)?j.delete(t):!0!==j.get(t)&&j.set(t,!1)}},[y,v.length,v.join("-")]);let C=[];if(u!==N){let e=[...u];for(let t=0;t<y.length;t++){let i=y[t],s=p(i);v.includes(s)||(e.splice(t,0,i),C.push(i))}"wait"===d&&C.length&&(e=C),P(x(e)),k(u);return}let{forceRender:E}=(0,n.useContext)(f.L);return(0,s.jsx)(s.Fragment,{children:y.map(e=>{let t=p(e),i=u===y||v.includes(t);return(0,s.jsx)(h,{isPresent:i,initial:(!b.current||!!r)&&void 0,custom:i?void 0:l,presenceAffectsLayout:c,mode:d,onExitComplete:i?void 0:()=>{if(!j.has(t))return;j.set(t,!0);let e=!0;j.forEach(t=>{t||(e=!1)}),e&&(null==E||E(),P(w.current),o&&o())},children:e},t)})})};var b=i(3761),w=i(5565),j=i(7396);let N=e=>{let{link:t}=e,i=(0,l.usePathname)();return(0,s.jsx)(j.default,{className:"rounded p-1 ".concat(i===t.url&&"bg-black text-white"),href:t.url,children:t.title})},k=[{url:"/",title:"Accueil"},{url:"/profil",title:"Profil"},{url:"/portfolio",title:"Portfolio"},{url:"/contact",title:"Contact"}],y=[{id:1,title:"GitHub",url:"https://github.com/Yiroma",img:"/icons/github.svg",alt:"Lien vers GitHub"},{id:2,title:"LinkedIn",url:"https://www.linkedin.com/in/yiromaric/",img:"/icons/linkedin.svg",alt:"Lien vers LinkedIn"}],P=()=>{let[e,t]=(0,n.useState)(!1),i={closed:{x:-10,opacity:0},opened:{x:0,opacity:1}};return(0,s.jsxs)("div",{className:"h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg",children:[(0,s.jsx)("div",{className:"hidden md:flex gap-4 w-1/3 ",children:k.map(e=>(0,s.jsx)(N,{link:e},e.title))}),(0,s.jsx)("div",{className:"flex xl:w-1/3 xl:justify-center",children:(0,s.jsxs)(j.default,{href:"/",className:"flex",children:[(0,s.jsx)(w.default,{src:"/logos/logo.svg",alt:"logo Yi Romaric - D\xe9veloppeur Web",width:80,height:80}),(0,s.jsx)(w.default,{src:"/logos/logoText.svg",alt:"logo Yi Romaric - D\xe9veloppeur Web",width:120,height:80,className:"hidden sm:hidden md:hidden lg:block"})]})}),(0,s.jsx)("div",{className:"hidden md:flex justify-end gap-4 w-1/3",children:y.map(e=>(0,s.jsx)(j.default,{href:e.url,target:"_blank",children:(0,s.jsx)(w.default,{src:e.img,alt:e.alt,width:26,height:26})},e.id))}),(0,s.jsxs)("div",{className:"md:hidden",children:[(0,s.jsxs)("button",{className:"w-10 h-8 flex flex-col justify-between z-50 relative",onClick:()=>t(!e),children:[(0,s.jsx)(b.P.div,{variants:{closed:{rotate:0},opened:{rotate:45,backgroundColor:"rgb(255,255,255)"}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded origin-left"}),(0,s.jsx)(b.P.div,{variants:{closed:{opacity:1},opened:{opacity:0}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded"}),(0,s.jsx)(b.P.div,{variants:{closed:{rotate:0},opened:{rotate:-45,backgroundColor:"rgb(255,255,255)"}},animate:e?"opened":"closed",className:"w-10 h-1 bg-black rounded origin-left"})]}),e&&(0,s.jsx)(b.P.div,{variants:{closed:{x:"100vw"},opened:{x:0,transition:{when:"beforeChildren",staggerChildren:.1}}},initial:"closed",animate:"opened",className:"absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40",children:k.map(e=>(0,s.jsx)(b.P.div,{variants:i,children:(0,s.jsx)(j.default,{href:e.url,children:e.title})},e.title))})]})]})},C={src:"/_next/static/media/logo-white.5aef42d4.svg",height:64,width:64,blurWidth:0,blurHeight:0},E=()=>{let e=new Date().getFullYear();return(0,s.jsxs)("div",{className:"bg-sky-800 text-white w-full h-16 flex flex-row items-center p-4",children:[(0,s.jsx)("div",{className:"w-1/3",children:(0,s.jsx)(j.default,{href:"/",children:(0,s.jsx)(w.default,{src:C,alt:"Logo Yi Romaric, d\xe9veloppeur web Next.js, React.js, Tailwind, MySQL",width:64,height:64})})}),(0,s.jsx)(j.default,{href:"/legals",className:"w-1/3 text-center",children:"Mentions l\xe9gales"}),(0,s.jsxs)("span",{className:"w-1/3 text-right",children:["Yi Romaric \xa9 ",e," tous droits r\xe9serv\xe9s"]})]})},R=e=>{let{children:t}=e,i=(0,l.usePathname)();return(0,s.jsx)(v,{mode:"wait",children:(0,s.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-white to-sky-100",children:[(0,s.jsx)(b.P.div,{className:"h-screen w-screen fixed bg-black rounded-b-[100px] z-40",animate:{height:"0vh"},exit:{height:"100vh"},transition:{duration:.3,ease:"easeOut"}}),(0,s.jsx)(b.P.div,{className:"fixed m-auto top-0 right-0 bottom-0 left-0 text-white text-8xl cursor-default z-50 w-fit h-fit",initial:{opacity:1},animate:{opacity:0},exit:{opacity:0},transition:{duration:1,ease:"easeOut"},children:i.substring(1)}),(0,s.jsx)(b.P.div,{className:"h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40",initial:{height:"100vh"},animate:{height:"0vh",transition:{delay:.3}}}),(0,s.jsx)("nav",{className:"h-24",children:(0,s.jsx)(P,{})}),(0,s.jsx)("main",{className:"min-h-[calc(100vh-6rem)]",children:t}),(0,s.jsx)("footer",{children:(0,s.jsx)(E,{})})]},i)})}},347:()=>{},340:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[758,158,565,441,517,358],()=>t(218)),_N_E=e.O()}]);