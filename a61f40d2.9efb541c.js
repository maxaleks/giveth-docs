(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},109:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(22),r=n(111);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},111:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(107)),o=n(109),l={id:"givethioinstallation",title:"Installing Giveth.io for Local development",slug:"/"},c={unversionedId:"givethioinstallation",id:"givethioinstallation",isDocsHomePage:!1,title:"Installing Giveth.io for Local development",description:"This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS.",source:"@site/docs/givethioinstallation.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/giveth/giveth-docs/edit/master/docs/givethioinstallation.md",version:"current",sidebar:"docsSidebar",next:{title:"Contributor Guide",permalink:"/docs/contributors"}},s=[{value:"Install impact-graph from GitHub",id:"install-impact-graph-from-github",children:[]},{value:"Create a Database and User in Postgres using psql",id:"create-a-database-and-user-in-postgres-using-psql",children:[]},{value:"Clone and Install the Frontend",id:"clone-and-install-the-frontend",children:[]},{value:"Get the Environment Variables",id:"get-the-environment-variables",children:[]},{value:"Launch the Development Server and Environment",id:"launch-the-development-server-and-environment",children:[]},{value:"Start Editing!",id:"start-editing",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"You'll need a couple prerequisites to get started.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.io/topics/quickstart"}),"Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/download"}),"Postgres")),Object(i.b)("li",{parentName:"ul"},"Bash CLI"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.gatsbyjs.com/docs/reference/gatsby-cli/"}),"Gatsby CLI")),Object(i.b)("li",{parentName:"ul"},"Configure NodeJS",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-linux/"}),"For Linux")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/"}),"For Windows")))),Object(i.b)("li",{parentName:"ul"},"Your Favourite Code Editor (VScode for linting presets)")),Object(i.b)("h3",{id:"install-impact-graph-from-github"},"Install impact-graph from GitHub"),Object(i.b)("p",null,"In order to develop locally you need to clone the backend server as well. We are using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Giveth/impact-graph"}),"https://github.com/Giveth/impact-graph")," for this."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"via SSH on the CLI:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:Giveth/impact-graph.git\ncd impact-graph\nnpm i\ncp .env.example .env\n")))),Object(i.b)("h3",{id:"create-a-database-and-user-in-postgres-using-psql"},"Create a Database and User in Postgres using psql"),Object(i.b)("p",null,"Follow this tutorial on PSQL to setup your username and create the database.\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"}),"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"),")"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TL;DR")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo -u postgres psql\npostgres=# create database <databaseName>;\npostgres=# create user <userName> with encrypted password '<passwordHere>';\npostgres=# grant all privileges on database <databaseName> to <userName>;\n")),Object(i.b)("h3",{id:"clone-and-install-the-frontend"},"Clone and Install the Frontend"),Object(i.b)("p",null,"  Head on over to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Giveth/giveth-2"}),"https://github.com/Giveth/giveth-2")," and clone the repo."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"via the CLI:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:Giveth/giveth-2.git\ncd giveth-2\nnpm i\n")))),Object(i.b)("h3",{id:"get-the-environment-variables"},"Get the Environment Variables"),Object(i.b)("p",null," In order to run the local build for Giveth.io you'll need to ask for the environment variables. Head on over to our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/EndTUw9955"}),"Contributors Discord")," say Hi and get in touch with one of the developers."),Object(i.b)("h3",{id:"launch-the-development-server-and-environment"},"Launch the Development Server and Environment"),Object(i.b)("p",null," Start up the ",Object(i.b)("inlineCode",{parentName:"p"},"impact-graph")," backend server and redis."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run redis by using the command ",Object(i.b)("inlineCode",{parentName:"p"},"redis-server"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"From the impact-graph repo start with ",Object(i.b)("inlineCode",{parentName:"p"},"npm start")),Object(i.b)("p",{parentName:"li"},"To take advantage of linting presets, please use ",Object(i.b)("strong",{parentName:"p"},"VSCODE"),":"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("em",{parentName:"p"},"File -> Open Workspace"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigate into the giveth-2 directory")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the workspace file ",Object(i.b)("inlineCode",{parentName:"p"},"giveth2-full-stack.code-workspace"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install recommended extensions (Prettier and StandardJS plugins)"),Object(i.b)("p",{parentName:"li"},"Then fire up the local development server."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"gatsby develop\n")))),Object(i.b)("h3",{id:"start-editing"},"Start Editing!"),Object(i.b)("p",null,"Open up the giveth2 repo on your code editor."),Object(i.b)("p",null,"Giveth.io is now running locally at ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:8000"),"!"),Object(i.b)("img",{alt:"Giveth Running Locally",src:Object(o.a)("img/content/givethlocalresized.png")}),Object(i.b)("p",null,"You can also expiremnt with querying your data via GraphQL - you'll find it at this link here - ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:8000/___graphql"),"\nLearn more about using this tool in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql"}),"Gatsby tutorial"),"."),Object(i.b)("p",null,"  Save your changes and the browser will update in real time!"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Current Build Statuses")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.giveth.io"}),"master")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.netlify.com/sites/giveth2/deploys"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status",alt:"Netlify Status"})))),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://staging.giveth.io"}),"staging")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.netlify.com/sites/giveth-website-staging/deploys"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status",alt:"Netlify Status"})))),Object(i.b)("br",null))}p.isMDXComponent=!0}}]);