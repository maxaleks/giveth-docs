"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[7543],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},848:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));o(4996);const a={id:"governanceProcess",title:"Governance Process"},i=void 0,s={unversionedId:"governanceProcess",id:"governanceProcess",title:"Governance Process",description:"Giveth Governance benefits from a robust design and utilizes several platforms to aggregrate and foster advice, consensus, signalling, voting and all the other wonderful actions enabled by Web3 decision-making systems.",source:"@site/whatisgiveth/governanceProcess.md",sourceDirName:".",slug:"/governanceProcess",permalink:"/whatisgiveth/governanceProcess",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/whatisgiveth/governanceProcess.md",tags:[],version:"current",lastUpdatedBy:"Mitch",lastUpdatedAt:1675707074,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{id:"governanceProcess",title:"Governance Process"},sidebar:"whatisgiveth",previous:{title:"DAO Structure",permalink:"/whatisgiveth/daoStructure"},next:{title:"Community Communications Guide",permalink:"/whatisgiveth/communityCommsGuide"}},l={},p=[{value:'(Or skip to the <a href="#TLDR"><strong>TL;DR</strong></a>)',id:"or-skip-to-the-tldr",level:4},{value:"The Community",id:"the-community",level:2},{value:"GIV Token Holder",id:"giv-token-holder",level:2},{value:"Snapshot Voting",id:"snapshot-voting",level:3},{value:"Single Choice Voting OR Basic Voting",id:"single-choice-voting-or-basic-voting",level:4},{value:"Ranked Choice Voting",id:"ranked-choice-voting",level:4},{value:"Tokenlog",id:"tokenlog",level:3},{value:"nrGIV Token Holder",id:"nrgiv-token-holder",level:2},{value:"Role Proposals",id:"role-proposals",level:3},{value:"Informal Decisions",id:"informal-decisions",level:2}],c={toc:p};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Giveth Governance benefits from a robust design and utilizes several platforms to aggregrate and foster advice, consensus, signalling, voting and all the other wonderful actions enabled by Web3 decision-making systems."),(0,r.kt)("p",null,"We can divide governance participants into three categories based on their possible actions and the platforms they can use to participate. They are ",(0,r.kt)("strong",{parentName:"p"},"GIV token holders"),", ",(0,r.kt)("strong",{parentName:"p"},"rDAO members"),", and ",(0,r.kt)("strong",{parentName:"p"},"the greater community")," (or simply, the community)."),(0,r.kt)("h4",{id:"or-skip-to-the-tldr"},"(Or skip to the ",(0,r.kt)("a",{href:"#TLDR"},(0,r.kt)("strong",{parentName:"h4"},"TL;DR")),")"),(0,r.kt)("h2",{id:"the-community"},"The Community"),(0,r.kt)("p",null,"Being part of the community has no requirements. If you know about Giveth and want to get engaged then we welcome you openly with our highest of vibes and spiciest of memes."),(0,r.kt)("p",null,"The best place for formal conversations around Giveth take place on our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.giveth.io/"},"Discourse forum"),". Our forum invites a wide variety of topics for anyone to introduce in-depth discussion, however more importantly, this is the quintessential launchpad where any legitimate governance proposal must start from."),(0,r.kt)("p",null,"Anyone in the community can create a proposal, however there are some considerations to make:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{id:"proposal"},"Proposals")," ideally have a clearly defined intention that outlines actions to be taken, potential consequences and funds requested (if applicable)."),(0,r.kt)("li",{parentName:"ul"},"We adhere to a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.giveth.io/whatisgiveth/covenant"},(0,r.kt)("strong",{parentName:"a"},"Community Covenant"))," which is our main reference point for any disputes or contentions."),(0,r.kt)("li",{parentName:"ul"},"We use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.giveth.io/whatisgiveth/adviceProcess/"},(0,r.kt)("strong",{parentName:"a"},"Advice Process"))," to gather feedback and refine proposals."),(0,r.kt)("li",{parentName:"ul"},"Proposals must remain on the forum, open for Advice Process, for a ",(0,r.kt)("strong",{parentName:"li"},"minimum of 5 days"),".")),(0,r.kt)("p",null,"If all conditions have been met, including time requirements for Advice Process, proposals can move on into either the GIVgarden or the rDAO DApps for voting.  In order to participate in these DApps you must hold either GIV or nrGIV, respectively. All Giveth Governance DApps are deployed on Gnosis Chain (formerly xDai Network)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If a proposal desires to skip or shorten the Advice Process,")," in the case of financial urgency for example, they may do so while providing a written disclaimer and a reason for doing so on their proposal. Skipping or shortening the Advice Process decreases the chances of a proposal passing, ",(0,r.kt)("strong",{parentName:"p"},"do so with great discretion!")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"soft-consensus"},"Soft-Consensus"),(0,r.kt)("p",{parentName:"admonition"}," We often use polls inside the forum or on Discord to get soft-consensus for preferred outcomes. It's acceptable to use these same methods for ",(0,r.kt)("a",{parentName:"p",href:"#informal-decisions"},"informal or low-impact decisions"),". However, for formal proposals they must indicate a clear intended outcome to keep objectives as clear as possible. The on-chain voting systems we use do not support multiple-choice voting.*")),(0,r.kt)("h2",{id:"giv-token-holder"},"GIV Token Holder"),(0,r.kt)("p",null,"GIV token holders can get involved in decision making via the ",(0,r.kt)("a",{href:"https://gardens.1hive.org/#/xdai/garden/0xb25f0ee2d26461e2b5b3d3ddafe197a0da677b98",target:"_blank"},"GIVgarden"),". It leverages ",(0,r.kt)("a",{parentName:"p",href:"https://forum.giveth.io/t/conviction-voting/154"},"Conviction Voting")," and ",(0,r.kt)("a",{parentName:"p",href:"https://forum.giveth.io/t/tao-voting-explained/155"},"Tao Voting")," systems to allow GIV token holders to create, signal and vote on proposals using their GIV tokens. Decisions made in here revolve around community funding requests and suggestions as well as any metagovernance modifications. To learn more ",(0,r.kt)("a",{parentName:"p",href:"../giveconomy/givgarden"},"visit our documentation regarding the GIVgarden"),"."),(0,r.kt)("h3",{id:"snapshot-voting"},"Snapshot Voting"),(0,r.kt)("p",null,"Snapshot allows all of a users GIV holdings, including GIV staked in GIVfarms or the GIVgarden to be counted and calculated towards their total voting power used on the ",(0,r.kt)("a",{parentName:"p",href:"https://snapshot.org/#/giv.eth"},"Giveth Snapshot")," Snapshot is gasless and chain-agnostic and is a magnificient tool to capture community sentiment on proposals and issues that do not directly request funds from Giveth."),(0,r.kt)("p",null,"Giveth has whitelisted three types of votes that can be used for proposals on Snapshot: ",(0,r.kt)("strong",{parentName:"p"},"Basic Voting"),", ",(0,r.kt)("strong",{parentName:"p"},"Single Choice Voting")," and ",(0,r.kt)("strong",{parentName:"p"},"Ranked Choice Voting"),". Any other types of voting methods are considered invalid at this time."),(0,r.kt)("h4",{id:"single-choice-voting-or-basic-voting"},"Single Choice Voting OR Basic Voting"),(0,r.kt)("p",null,"This is a simple Single choice voting strategy. You'll have a range of options and you can only pick one. In Basic Voting you'll be able to choose between For (Yes), Against (No) or Abstain (Undecided/No Opinion)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A single choice or YES option needs to receive 88% support in order to pass.")," To arrive at the YES % we remove the abstain votes and divide the YES votes against the total amount of YES and NO votes. "),(0,r.kt)("p",null,"Our Quorum is the total amount of GIV tokens that need to particiapte in a vote in order for it to be considered valid. ",(0,r.kt)("strong",{parentName:"p"},"The Quorum will be set to 1 Million GIV")),(0,r.kt)("h4",{id:"ranked-choice-voting"},"Ranked Choice Voting"),(0,r.kt)("p",null,"This voting method allows you to select multiple options, signalling your most preferred outcome and then your 2nd favourite option, 3rd, 4th and so on.. (depending on how many options there are)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"There are no required support percentages for Ranked Choice voting.")," Snapshot will calculate which option received the most support and we will choose the top result as the winner. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Quorum, will be set to 1 Million GIV"),"."),(0,r.kt)("h3",{id:"tokenlog"},"Tokenlog"),(0,r.kt)("p",null,"Tokenlog is a voting tool for token-weighted backlog planning. Giveth uses it for decentralized roadmap planning and ",(0,r.kt)("strong",{parentName:"p"},"allows GIV holders to have a say in what Giveth prioritizes building"),". Features, improvements and core roadmap items for Giveth and it's products are captured in github issues and can be voted on using the ",(0,r.kt)("a",{parentName:"p",href:"https://tokenlog.generalmagic.io/Giveth/Roadmap"},"Tokenlog interface"),". New ideas and proposals are reviewed by our product managers, if they make sense and align with Giveth's values they will be added to the Tokenlog for voting. "),(0,r.kt)("p",null,"Currently your Tokenlog voting power is calculated from your address' GIV and ",(0,r.kt)("a",{parentName:"p",href:"../giveconomy/GIVgarden#wrapping-giv--earning-rewards"},"wrapped GIV (gGIV)")," balances on Gnosis Chain. Your voting power is calculated from the sum of both aforementioned token balances where one token is equal to one vote."),(0,r.kt)("p",null,"You can access the ",(0,r.kt)("a",{parentName:"p",href:"https://tokenlog.generalmagic.io/Giveth/Roadmap"},(0,r.kt)("strong",{parentName:"a"},"Giveth Tokenlog")," here"),". If you have an idea for a feature or improvement for Giveth you can jump into our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.giveth.io"},"discord")," or drop your idea on the ",(0,r.kt)("a",{parentName:"p",href:"https://forum.giveth.io/"},"forum"),"."),(0,r.kt)("h2",{id:"nrgiv-token-holder"},"nrGIV Token Holder"),(0,r.kt)("p",null,"This is a form of executive council held for trusted Giveth contributors. nrGIV DAO members hold nrGIV and use an ",(0,r.kt)("a",{parentName:"p",href:"https://aragon.1hive.org/#/nrgiv/"},"Aragon DAO deployment")," to create and vote on proposals using simple Yes/No voting mechanics. Only nrGIV holders can vote or make proposals. Proposals will remain open for voting for 5 days and must adhere to the Quorum and Support Required percentages or else it will fail."),(0,r.kt)("p",null," In order to get nrGIV you must be a regular contributor to Giveth for at least 3 months and have an approved role proposal. If you're an eligible contributor and it's your first time, then you must request a current nrGIV holder to propose minting nrGIV tokens for you on your behalf, only during the quarterly minting periods. Forum posts will be made for each quarterly distribution and will be announced on our weekly Governance and Community calls."),(0,r.kt)("h3",{id:"role-proposals"},"Role Proposals"),(0,r.kt)("p",null,"Role proposals are our way of keeping everyone in touch with what are the roles each contributor is filling. This takes the form of a document and a short description in a topic posted on ",(0,r.kt)("a",{parentName:"p",href:"https://forum.giveth.io"},"our forum"),", which is then left open for comment and approval via ",(0,r.kt)("a",{parentName:"p",href:"/whatisgiveth/adviceProcess"},"advice process"),". Only contributors who have finished their trial period can move to create a role proposal. Once passed advice process, it is put up as a vote for on the nrGIV DAO for on-chain voting; if the vote passes, you're in as an official Giveth regular contributor!"),(0,r.kt)("p",null,"If you have a work agreement and work casually for Giveth, usually there is no explicit need to go through the entire role proposal process. However if you record 30 or over hours monthly for 3 consecutive months then it is required for you to create a role proposal in order to continue to be paid by the Giveth DAO."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When the first tokens are minted for a quarterly nrGIV distribution, all eligible contributors have 1 month from that date to request tokens. After this period the round is closed and no more token requests will be accepted for this period. Eligible contributors will still be able to request tokens for the next token distribution.")),(0,r.kt)("p",null,"Learn how to become a contributor (and get nrGIV) in our ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/giveth/Giveth-Basics-bff76dceaec64839b73aa89ba2fb8be4"},"Giveth Basics document"),".  "),(0,r.kt)("h2",{id:"informal-decisions"},"Informal Decisions"),(0,r.kt)("p",null,"Not all decisions require formal on-chain votes. There is room for making low-impact, agile decisions via a range of platforms that Giveth's community utilizes. For the most clarity we refer to the Covenant's section on ",(0,r.kt)("a",{parentName:"p",href:"./whatisgiveth/covenant/#off-chain"},"off-chain decision making"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Giveth uses Advice Process as its primary practice for flat decision making to empower contributors with agency to move their cultural proposals forward. Advice Process is written in the Giveth documentation and promoted verbally in community calls. When a non-financial, no-code decision will likely affect a large part of the community, the use of off-chain voting using polls in the Discord or Forum is implemented. A decision is considered legitimate when it respects this covenant, is promoted to the awareness of the community and its results aren\u2019t challenged within 2 weeks.  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Giveth community spaces, including the Giveth Forum, GitHub and Discord, as well as other off-chain forums that may emerge in the future, are expected to adhere to this covenant.")),(0,r.kt)("h2",{id:"TLDR"},"TL;DR"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make a ",(0,r.kt)("a",{href:"#proposal"},"proposal")," on the Giveth ",(0,r.kt)("a",{href:"https://forum.giveth.io",target:"_blank"},"forum"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allow a minimum of 5 days for advice process."))),(0,r.kt)("li",{parentName:"ol"},"Create a proposal in the DApp for on-chain voting; this should link to your forum proposal.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gardens.1hive.org/#/xdai/garden/0xb25f0ee2d26461e2b5b3d3ddafe197a0da677b98"},"GIVgardens")," for GIV token holders requesting funds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://snapshot.org/#/giv.eth"},"Snapshot")," for GIV token holders regarding issues or proposals not directly requesting funds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aragon.1hive.org/#/nrgiv/"},"rDAO")," for nrGIV token holders"))),(0,r.kt)("li",{parentName:"ol"},"Wait for results."),(0,r.kt)("li",{parentName:"ol"},"Execute required actions.")))}h.isMDXComponent=!0}}]);