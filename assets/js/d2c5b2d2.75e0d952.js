"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[2992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(7462),i=(n(7294),n(3905)),r=n(4996);const a={id:"gettingStarted",title:"Getting started",slug:"dapps/gettingStarted"},l=void 0,p={unversionedId:"gettingStarted",id:"gettingStarted",title:"Getting started",description:"",source:"@site/dapps/guide0-gettingstarted.md",sourceDirName:".",slug:"/dapps/gettingStarted",permalink:"/dapps/gettingStarted",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/guide0-gettingstarted.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1705092249,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{id:"gettingStarted",title:"Getting started",slug:"dapps/gettingStarted"},sidebar:"dapps",previous:{title:"Intro to Giveth.io",permalink:"/dapps/givethIO"},next:{title:"Making a Donation",permalink:"/dapps/projectdonating"}},s={},c=[{value:"Sign in",id:"sign-in",level:2},{value:"Metamask Sign in",id:"metamask-sign-in",level:4},{value:"Wallet Connect",id:"wallet-connect",level:4},{value:"Gnosis Safe Sign in",id:"gnosis-safe-sign-in",level:4},{value:"Fill in your profile info",id:"fill-in-your-profile-info",level:2},{value:"Donate",id:"donate",level:3},{value:"Create project",id:"create-project",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Giveth.io is a platform where you can easily support projects both with cryptocurrency and fiat that you \u2764\ufe0f. Or create your own project and accept funding from a worldwide audience."),(0,i.kt)("p",null,"New to crypto? Visit our ",(0,i.kt)("a",{parentName:"p",href:"https://giveth.io/faq"},"FAQ")," where you can find more information or check out our ",(0,i.kt)("a",{parentName:"p",href:"https://giveth.io/onboarding"},"Onboarding guide")," to learn how to use Giveth like a pro! "),(0,i.kt)("h2",{id:"sign-in"},"Sign in"),(0,i.kt)("p",null,"In the top right corner you will see the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign In")," button, click that to start. You will see a pop-up with the available wallets to sign in with."),(0,i.kt)("img",{alt:"sign in button",src:(0,r.Z)("/img/signIn.png")}),(0,i.kt)("h4",{id:"metamask-sign-in"},"Metamask Sign in"),(0,i.kt)("p",null,"If you're unfamiliar with Metamask or don't already have a wallet, head on over to (",(0,i.kt)("a",{parentName:"p",href:"https://metamask.io/"},"https://metamask.io/"),"), and get yourself set up with one! Once your wallet is setup, make sure your Metamask browser extension is enabled and up to date. Then click on the Metamask icon in the pop-up window and follow the prompts to sign in."),(0,i.kt)("h4",{id:"wallet-connect"},"Wallet Connect"),(0,i.kt)("p",null,"Click on the Wallet Connect icon and scan the QR code with a Wallet Connect compatible wallet or copy to your clipboard. "),(0,i.kt)("h4",{id:"gnosis-safe-sign-in"},"Gnosis Safe Sign in"),(0,i.kt)("p",null,"To sign in with Gnosis you must access Giveth from your Gnosis safe. Check out the article for signing in with a ",(0,i.kt)("a",{parentName:"p",href:"./multisigs"},"Gnosis Safe Multisig Wallet")," for instructions on how to sign in & more information."),(0,i.kt)("h2",{id:"fill-in-your-profile-info"},"Fill in your profile info"),(0,i.kt)("p",null,"Once you've logged in, it's recommended you fill in some info about yourself. Transparency is a two-way street! In the top right corner you should find now the thumbnail of your account. Click on it, and then click on ",(0,i.kt)("inlineCode",{parentName:"p"},"My Account"),", you can either sign in(note: this is necessary to donate to projects) or click skip for now."),(0,i.kt)("p",null,"Once you sign in, you will see an overview of your profile with tabs named: ",(0,i.kt)("strong",{parentName:"p"},"Overview, My GIVpower, My Projects, My Donations and Liked Projects"),'. If you haven\'t completed your profile you will see a warning message across the top "Your profile is incomplete" click on "Let\'s do it" and a pop ip will appear with instructions. Alternately, scroll to the bottom of the page and click on the button ',(0,i.kt)("inlineCode",{parentName:"p"},"Complete profile"),". Follow the prompts and fill in the fields given, and hit ",(0,i.kt)("inlineCode",{parentName:"p"},"SAVE"),"."),(0,i.kt)("h1",{id:"tutorials"},"Tutorials"),(0,i.kt)("p",null,"If you would like to get a basic overview of Giveth and watch more video tutorials, check out our onboarding page ",(0,i.kt)("a",{parentName:"p",href:"https://giveth.io/onboarding"},"here"),"."),(0,i.kt)("h3",{id:"donate"},"Donate"),(0,i.kt)("p",null,"More info on donating to a project are in the ",(0,i.kt)("a",{parentName:"p",href:"./projectdonating"},"user guide.")),(0,i.kt)("h3",{id:"create-project"},"Create project"),(0,i.kt)("p",null,"Our User Guide page for creating a project can be found ",(0,i.kt)("a",{parentName:"p",href:"./createproject"},"here.")))}d.isMDXComponent=!0}}]);