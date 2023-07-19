"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[3686],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>p});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=i.createContext({}),c=function(t){var e=i.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=c(t.components);return i.createElement(d.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=c(a),p=n,m=h["".concat(d,".").concat(p)]||h[p]||l[p]||o;return a?i.createElement(m,r(r({ref:e},u),{},{components:a})):i.createElement(m,r({ref:e},u))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s.mdxType="string"==typeof t?t:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},872:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var i=a(7462),n=(a(7294),a(3905)),o=a(4996);const r={id:"quadraticfunding",title:"Quadratic Funding",slug:"quadraticfunding"},s="Quadratic Funding",d={unversionedId:"quadraticfunding",id:"quadraticfunding",title:"Quadratic Funding",description:"What is Quadratic Funding?",source:"@site/dapps/quadraticfunding.md",sourceDirName:".",slug:"/quadraticfunding",permalink:"/es/quadraticfunding",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/quadraticfunding.md",tags:[],version:"current",lastUpdatedBy:"Griff Green",lastUpdatedAt:1689795054,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{id:"quadraticfunding",title:"Quadratic Funding",slug:"quadraticfunding"},sidebar:"dapps",previous:{title:"Giveth Referral Program",permalink:"/es/giveconomy/referral"},next:{title:"Contribuyendo al desarrollo de Giveth",permalink:"/es/dapps/contributors"}},c={},u=[{value:"What is Quadratic Funding?",id:"what-is-quadratic-funding",level:2},{value:"Giveth Quadratic Funding",id:"giveth-quadratic-funding",level:2},{value:"Fraud protection",id:"fraud-protection",level:2},{value:"Gitcoin Passport",id:"gitcoin-passport",level:3},{value:"Trustalabs",id:"trustalabs",level:3},{value:"Quadratic Force",id:"quadratic-force",level:2},{value:"Giveth Alpha QF Round",id:"giveth-alpha-qf-round",level:2},{value:"Round dates",id:"round-dates",level:3},{value:"Matching pool",id:"matching-pool",level:3},{value:"Project eligibility",id:"project-eligibility",level:3},{value:"Estimated matching",id:"estimated-matching",level:2},{value:"<em>Source: https://blog.woodstockfund.com/2021/05/20/quadratic-funding-a-better-way-to-fund-public-goods/</em>",id:"source-httpsblogwoodstockfundcom20210520quadratic-funding-a-better-way-to-fund-public-goods",level:5},{value:"Payout",id:"payout",level:2}],l={toc:u};function h(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quadratic-funding"},"Quadratic Funding"),(0,n.kt)("h2",{id:"what-is-quadratic-funding"},"What is Quadratic Funding?"),(0,n.kt)("p",null,'Quadratic Funding (QF) is a funding mechanism designed to distribute a matching pool among multiple projects based on the number of unique contributors. In quadratic funding, matched amounts are calculated by using the quadratic formula, where "the amount received by the project is proportional to the square of the sum of the square roots of contributions received". ',(0,n.kt)("a",{parentName:"p",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243656"},"(Reference: Liberal Radicalism: A Flexible Design for Philanthropic Matching Funds)")),(0,n.kt)("p",null,"With Quadratic Funding, the matching rate decreases as the size of the contribution increases. The goal is to bring the most funding to projects that have the largest community supporting them, rather than supporting only projects with a few large donations from a small number of people. This helps to create a more democratic and inclusive system for funding projects."),(0,n.kt)("p",null,"For more information, details, and even a helpful simulator, visit ",(0,n.kt)("a",{parentName:"p",href:"https://wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000"},"\u201cWTF is QF?\u201d")," or check out ",(0,n.kt)("a",{parentName:"p",href:"https://finematics.com/quadratic-funding-explained/"},"this explanation by Finematics.")),(0,n.kt)("h2",{id:"giveth-quadratic-funding"},"Giveth Quadratic Funding"),(0,n.kt)("p",null,"Giveth has integrated quadratic funding into ",(0,n.kt)("a",{parentName:"p",href:"https://giveth.io/"},"our existing donation platform")," to help drive more donations to amazing public goods projects!"),(0,n.kt)("p",null,"QF on Giveth operates in rounds. Only donations made during an active QF round are eligible to be matched, any donations made before or after the round dates will not be matched. Rounds can vary in length but generally will last between 2-3 weeks. Other restrictions may apply such as ",(0,n.kt)("a",{parentName:"p",href:"#project-eligibility"},"project eligibility"),", fraud detection and the donor\u2019s Gitcoin passport score, more on that below in this article."),(0,n.kt)("p",null,"Our quadratic funding rounds allow for donations on any of our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.giveth.io/dapps/projectdonating/#swictching-networks"},"supported chains")," (Mainnet, Gnosis, Optimism, Polygon and Celo, as of July 2023). Projects participating in active rounds are sorted on the ",(0,n.kt)("a",{parentName:"p",href:"https://giveth.io/qf"},"QF project page")," by default according to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.giveth.io/giveconomy/givpower"},"GIVpower")," and donations to these ",(0,n.kt)("a",{parentName:"p",href:"https://docs.giveth.io/dapps/projectVerification"},"verified projects")," are also eligible for ",(0,n.kt)("a",{parentName:"p",href:"https://docs.giveth.io/giveconomy/givbacks"},"GIVbacks"),"."),(0,n.kt)("p",null,"Donations on Giveth are direct, peer-to-peer with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.giveth.io/whatisgiveth/zero-fees"},"zero fees")," and intermediaries."),(0,n.kt)("h2",{id:"fraud-protection"},"Fraud protection"),(0,n.kt)("h3",{id:"gitcoin-passport"},"Gitcoin Passport"),(0,n.kt)("p",null,"Gitcoin Passport is an identity verification application that enables anyone to collect ",(0,n.kt)("a",{parentName:"p",href:"https://decentralized-id.com/web-standards/w3c/wg/vc/verifiable-credentials/"},"verifiable credentials")," that prove your identity and trustworthiness without exposing personally identifying information."),(0,n.kt)("p",null,"Anyone can donate on Giveth, but in order for a donation to be eligible to be matched during quadratic funding rounds, the donor must verify their ",(0,n.kt)("a",{parentName:"p",href:"https://passport.gitcoin.co/"},"Gitcoin Passport")," ",(0,n.kt)("strong",{parentName:"p"},"before the end of the round"),". They don\u2019t need to verify their passport right away, but they must have a Passport score above the ",(0,n.kt)("a",{parentName:"p",href:"https://giveth.io/passport"},"specified threshold")," before the round ends in order for any of their in-round donations to count towards the matching. "),(0,n.kt)("p",null,"You can learn more about Gitcoin Passport in their ",(0,n.kt)("a",{parentName:"p",href:"https://docs.passport.gitcoin.co/"},"documentation.")),(0,n.kt)("img",{alt:"passport",src:(0,o.Z)("img/passport.png")}),(0,n.kt)("h3",{id:"trustalabs"},"Trustalabs"),(0,n.kt)("p",null,"For post-round sybil analysis, we will be supported by our partners ",(0,n.kt)("a",{parentName:"p",href:"https://www.trustalabs.ai/"},"Trustalabs")," who have synthesized multiple algorithmic sybil-detection approaches into one single tool."),(0,n.kt)("h2",{id:"quadratic-force"},"Quadratic Force"),(0,n.kt)("p",null,"Quadratic Force is the name given to the launch partners that make Giveth quadratic funding rounds possible by donating to the matching pool."),(0,n.kt)("p",null,"Anyone can become a member of the Quadratic Force by donating $1000 USD or more to our ",(0,n.kt)("a",{parentName:"p",href:"https://giveth.io/project/Giveth-Matching-Pool-0"},"matching pool verified project"),". Members of the Quadratic Force benefit from brand exposure, project nominations, GIVbacks and more! To learn more about the Quadratic Force, reach out to our fundraising team by sending a message in our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/gsZDyx3Mdc"},"Discord support channel"),"."),(0,n.kt)("p",null,"To remain sustainable Giveth will use 10% of the pool funds for the operation and management of the round, and 5% will be given to our partner ",(0,n.kt)("a",{parentName:"p",href:"https://www.trustalabs.ai/"},"Trustalabs")," for sybil detection."),(0,n.kt)("h2",{id:"giveth-alpha-qf-round"},"Giveth Alpha QF Round"),(0,n.kt)("p",null,"The goal of the Giveth Alpha QF round is to test this new product live with existing verified projects who are familiar with our platform so that we can iron out any kinks with our trusted community! Following the alpha round, we will address any issues that emerge and work towards launching bigger and better QF rounds in the near future."),(0,n.kt)("h3",{id:"round-dates"},"Round dates"),(0,n.kt)("p",null,"Our Alpha runs from July 18th to August 1st."),(0,n.kt)("h3",{id:"matching-pool"},"Matching pool"),(0,n.kt)("p",null,"A matching pool of $10,000 USD equivalent is available to be distributed via the alpha round on Gnosis Chain. This pool will be used to match donations made to participating projects during the funding period according to QF. The matching funds will be distributed some weeks after the round ends, when post-round sybil analysis is completed."),(0,n.kt)("h3",{id:"project-eligibility"},"Project eligibility"),(0,n.kt)("p",null,"We contacted 55 verified projects who had raised over $900 USD equivalent on Giveth by July 1st, 2023 to apply to enter. In order for those projects to become eligible for the round, projects needed to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.giveth.io/dapps/projectUpdates/"},"provide an update")," by Friday July 14. A maximum of 50 verified projects will be accepted into the alpha round."),(0,n.kt)("p",null,"In addition to these initial projects, each member of the ",(0,n.kt)("a",{parentName:"p",href:"#quadratic-force"},"quadratic force")," (large donors to the matching pool) were able to select 1-3 verified projects to be included in the round, depending on the size of their contribution to the matching pool."),(0,n.kt)("p",null,"We will limit the total number of projects allowed in this alpha round to 50."),(0,n.kt)("h2",{id:"estimated-matching"},"Estimated matching"),(0,n.kt)("p",null,"Estimated matching amounts are calculated by using the ",(0,n.kt)("a",{parentName:"p",href:"https://www.wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000"},"quadratic funding formula"),", to understand how this formula works, check out this infographic below:"),(0,n.kt)("img",{id:"qfinfographic",alt:"infographic",width:"50%",heigh:"auto",src:(0,o.Z)("img/qfinfographic.png")}),(0,n.kt)("h5",{id:"source-httpsblogwoodstockfundcom20210520quadratic-funding-a-better-way-to-fund-public-goods"},(0,n.kt)("em",{parentName:"h5"},"Source: ",(0,n.kt)("a",{parentName:"em",href:"https://blog.woodstockfund.com/2021/05/20/quadratic-funding-a-better-way-to-fund-public-goods/"},"https://blog.woodstockfund.com/2021/05/20/quadratic-funding-a-better-way-to-fund-public-goods/"))),(0,n.kt)("p",null,"The estimated matching calculations do not consider the donors' ",(0,n.kt)("a",{parentName:"p",href:"#gitcoin-passport"},"Passport scores"),", or post-round fraud analysis. They are rough estimations calculated by assuming that the entire matching pool would be distributed according to the donations made in the round to date. This means that the estimated matching amounts are more accurate towards the end of the round, when there is more donation data being used in the calculations. "),(0,n.kt)("p",null,"The maximum amount that any one project will be able to receive is equal to 20% of the total matching funds for the round."),(0,n.kt)("p",null,"During an active round, the estimated matching will be shown on several pages:"),(0,n.kt)("img",{id:"projectcard",alt:"estimatedmatchingprojectcard",width:"30%",heigh:"auto",src:(0,o.Z)("img/estimatedmatchingprojectcard.png")}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On the ",(0,n.kt)("a",{parentName:"li",href:"https://giveth.io/qf"},"Projects page"),', the "project card" corresponding to projects in an active QF shows the amount raised during the round, the number of donors so far that round, and the estimated matching. The estimated matching on the project card is determined using the total amount of matching funds, and the total contributions to each QF project to date in that round. This calculation assumes that every unique address is a unique donor, which may lead to discrepancies in estimated matching and actual matching received by the project post-round.')),(0,n.kt)("img",{id:"matchingtable",alt:"estimatedmatchingcard",width:"30%",heigh:"auto",src:(0,o.Z)("img/estimatedmatchingcard.png")}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On each QF eligible project page, you will see the current estimated matching for that project. This number is the same as the estimated matching on the project card ",(0,n.kt)("a",{parentName:"p",href:"#projectcard"},"(above)"),". ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'The project page also has a "contribution matching table" that shows an estimated matching amount from a new donation of a given amount. These values are calculated by assuming that a new donation of ',(0,n.kt)("em",{parentName:"p"},"x")," (in the column on the left) is made to this project in the round. The estimated matching amount (on the right) is calculated by determining the total matching amount that would be allocated to that project if donation ",(0,n.kt)("em",{parentName:"p"},"x")," were included, and then determining what amount of the total matching to that project would be associated with the new donation."))),(0,n.kt)("img",{alt:"estimatedmatchingtab",width:"80%",heigh:"auto",src:(0,o.Z)("img/estimatedmatchingtab.png")}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"While on the \u201cDonations\u201d tab on the project page, you can filter all donations to see which are associated with a particular QF round. If the particular QF round is \u201cactive\u201d, you\u2019ll be able to see an estimated matching amount associated with that project for the round. This is calculated using the same logic as the \u201cproject card\u201d ",(0,n.kt)("a",{parentName:"li",href:"#projectcard"},"(above)"),".")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},'After a QF round ends, the fraud analysis is completed, and the real matching funds are distributed, you will see the actual matching funds corresponding to that project and that round on the "Donations" tab in place of estimated matching. ')),(0,n.kt)("img",{alt:"estimatedmatchingdonate",width:"70%",heigh:"auto",src:(0,o.Z)("img/estimatedmatchingdonate.png")}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When you are making a donation to a project, an estimated matching amount corresponding to your donation will be shown. This is calculated using the same logic as the \u201ccontribution matching table\u201d ",(0,n.kt)("a",{parentName:"li",href:"#matchingtable"},"(above)"),".")),(0,n.kt)("h2",{id:"payout"},"Payout"),(0,n.kt)("p",null,"Once the round is finished and the sybil analysis is complete, the final matching funds will be distributed from our ",(0,n.kt)("a",{parentName:"p",href:"https://app.safe.global/home?safe=gno:0x6e8873085530406995170Da467010565968C7C62"},(0,n.kt)("inlineCode",{parentName:"a"},"donation.eth")),' multisig account and distributed to the project\'s registered addresses. The actual matching amount sent to each project post-round will be shown on the project\u2019s "Donations" tab, under the corresponding round filter.'),(0,n.kt)("img",{alt:"roundfinal",src:(0,o.Z)("img/roundfinal.png")}))}h.isMDXComponent=!0}}]);