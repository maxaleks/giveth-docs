"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[5762],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3391:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=a(4996),o=["components"],p={id:"givethioinstallation",title:"Installing Giveth.io for Local Development",slug:"dapps/givethioinstallation"},s=void 0,u={unversionedId:"givethioinstallation",id:"givethioinstallation",title:"Installing Giveth.io for Local Development",description:"This guide will document the steps to set up and run Giveth.io locally for the purposes of development. The setup process was documented using Ubuntu 20.04 LTS.",source:"@site/dapps/givethioinstallation.md",sourceDirName:".",slug:"/dapps/givethioinstallation",permalink:"/dapps/givethioinstallation",editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/givethioinstallation.md",tags:[],version:"current",lastUpdatedBy:"Suga",lastUpdatedAt:1644231838,formattedLastUpdatedAt:"2/7/2022",frontMatter:{id:"givethioinstallation",title:"Installing Giveth.io for Local Development",slug:"dapps/givethioinstallation"},sidebar:"dapps",previous:{title:"Contributing to Giveth Development",permalink:"/dapps/contributors"},next:{title:"Giveth.io Testing Guidelines",permalink:"/dapps/testing-guidelines"}},d={},c=[{value:"<strong>You&#39;ll need a couple prerequisites to get started.</strong>",id:"youll-need-a-couple-prerequisites-to-get-started",level:4},{value:"<strong>Giveth IO leverages notable packages, applications and architectures including:</strong>",id:"giveth-io-leverages-notable-packages-applications-and-architectures-including",level:4},{value:"Install the back-end (impact-graph) from GitHub",id:"install-the-back-end-impact-graph-from-github",level:3},{value:"Create a Database and User in Postgres using psql",id:"create-a-database-and-user-in-postgres-using-psql",level:3},{value:"Clone and Install the Frontend",id:"clone-and-install-the-frontend",level:3},{value:"Get the Environment Variables",id:"get-the-environment-variables",level:3},{value:"Launch the Development Server and Environment",id:"launch-the-development-server-and-environment",level:3},{value:"Run the Migrations to Setup the Database",id:"run-the-migrations-to-setup-the-database",level:3},{value:"Deploy the Front-end",id:"deploy-the-front-end",level:3},{value:"Start Editing!",id:"start-editing",level:3}],h={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will document the steps to set up and run Giveth.io locally for the purposes of development. The setup process was documented using Ubuntu 20.04 LTS."),(0,i.kt)("h4",{id:"youll-need-a-couple-prerequisites-to-get-started"},(0,i.kt)("strong",{parentName:"h4"},"You'll need a couple prerequisites to get started.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/topics/quickstart"},"Redis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download"},"Postgres")),(0,i.kt)("li",{parentName:"ul"},"Node 14+"),(0,i.kt)("li",{parentName:"ul"},"yarn"),(0,i.kt)("li",{parentName:"ul"},"npm"),(0,i.kt)("li",{parentName:"ul"},"Your favourite Code Editor (VScode for linting presets)")),(0,i.kt)("h4",{id:"giveth-io-leverages-notable-packages-applications-and-architectures-including"},(0,i.kt)("strong",{parentName:"h4"},"Giveth IO leverages notable packages, applications and architectures including:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ethereum"),(0,i.kt)("li",{parentName:"ul"},"React"),(0,i.kt)("li",{parentName:"ul"},"NextJS"),(0,i.kt)("li",{parentName:"ul"},"Apollo GraphQL"),(0,i.kt)("li",{parentName:"ul"},"Tor.us"),(0,i.kt)("li",{parentName:"ul"},"theme-ui")),(0,i.kt)("h3",{id:"install-the-back-end-impact-graph-from-github"},"Install the back-end (impact-graph) from GitHub"),(0,i.kt)("p",null,"In order to develop locally you need to clone the back-end server. We are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Giveth/impact-graph"},"https://github.com/Giveth/impact-graph")," for this."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"via SSH on the CLI:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    git clone git@github.com:Giveth/impact-graph.git\n    cd impact-graph\n    npm i\n    cp .env.example .env\n")),(0,i.kt)("h3",{id:"create-a-database-and-user-in-postgres-using-psql"},"Create a Database and User in Postgres using psql"),(0,i.kt)("p",null,"Follow this tutorial on PSQL to setup your username and create the database.\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"},"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TL;DR")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres psql\npostgres=# create database <databaseName>;\npostgres=# create user <userName> with encrypted password '<passwordHere>';\npostgres=# grant all privileges on database <databaseName> to <userName>;\n")),(0,i.kt)("h3",{id:"clone-and-install-the-frontend"},"Clone and Install the Frontend"),(0,i.kt)("p",null,"  Head on over to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giveth-next"},"https://github.com/Giveth/giveth-next"),", and clone the repo.  "),(0,i.kt)("p",null,"  ",(0,i.kt)("em",{parentName:"p"},"via SSH on the CLI:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Giveth/giveth-next.git\ncd giveth-next\nyarn install\n")),(0,i.kt)("h3",{id:"get-the-environment-variables"},"Get the Environment Variables"),(0,i.kt)("p",null," In order to run the local build for Giveth.io you'll need to ask for the environment variables. Head on over to our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.giveth.io"},"Contributors Discord"),", say Hi and get in touch with our product manager, @MoeNick or one of the developers."),(0,i.kt)("h3",{id:"launch-the-development-server-and-environment"},"Launch the Development Server and Environment"),(0,i.kt)("p",null," Start up the ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-graph")," backend server and redis."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run redis by using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-server"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"From the impact-graph repo start with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"using-the-staging-database-for-development"},"Using the Staging Database for Development"),(0,i.kt)("p",{parentName:"div"},"If you don't need to setup a local database for your development purposes you can use the staging database instead. Set ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_APOLLO_SERVER")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://serve.giveth.io/graphql")," (this uses the same database you see on ",(0,i.kt)("a",{parentName:"p",href:"https://next.giveth.io"},"https://next.giveth.io"),")."))))),(0,i.kt)("h3",{id:"run-the-migrations-to-setup-the-database"},"Run the Migrations to Setup the Database"),(0,i.kt)("p",null,"In a separate terminal ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-graph"),"\nrun this command in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run typeorm:cli -- migration:run\n")),(0,i.kt)("h3",{id:"deploy-the-front-end"},"Deploy the Front-end"),(0,i.kt)("p",null," To take advantage of linting presets, please use ",(0,i.kt)("strong",{parentName:"p"},"VSCODE"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("em",{parentName:"p"},"File -> Open Workspace"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Navigate into the giveth-next directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open the workspace file ",(0,i.kt)("inlineCode",{parentName:"p"},"giveth2-full-stack.code-workspace"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install recommended extensions (Prettier and StandardJS plugins).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then fire up the front-end locally."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,i.kt)("h3",{id:"start-editing"},"Start Editing!"),(0,i.kt)("p",null,"Open up the giveth-next repo on your code editor."),(0,i.kt)("p",null,"Giveth.io is now running locally at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"!"),(0,i.kt)("img",{id:"contentimg",alt:"Giveth Running Locally",src:(0,l.Z)("img/content/givethlocalresized.png")}),(0,i.kt)("p",null,"You can also expiremnt with querying your data via GraphQL. You'll find it at this link here: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/___graphql"),"\nLearn more about using this tool in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql"},"Gatsby tutorial"),"."),(0,i.kt)("p",null,"  Save your changes, and the browser will update in real time!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Current Build Statuses")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://giveth.io"},"master")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.netlify.com/sites/giveth2/deploys"},(0,i.kt)("img",{parentName:"a",src:"https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status",alt:"Netlify Status"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://next.giveth.io"},"staging")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.netlify.com/sites/giveth-website-staging/deploys"},(0,i.kt)("img",{parentName:"a",src:"https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status",alt:"Netlify Status"}))),(0,i.kt)("br",null))}m.isMDXComponent=!0}}]);