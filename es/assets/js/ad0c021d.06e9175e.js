"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[8478],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?n.createElement(k,l(l({ref:a},p),{},{components:t})):n.createElement(k,l({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8948:(e,a,t)=>{t.d(a,{ZP:()=>l});var n=t(7462),r=(t(7294),t(3905));const o={toc:[]};function l(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Giveth TRACE ha quedado oficialmente en desuso. Despu\xe9s de 5 fieles a\xf1os de servicio, la plataforma, servicios y productos de Giveth han sido completamente trasladados e incorporados a ",(0,r.kt)("a",{parentName:"em",href:"https://giveth.io/"},"https://giveth.io/"),". Con el cierre de la red Rinkeby y el bajo n\xfamero de usuarios que la utilizan, la Giveth DAO decidi\xf3 dar fin a la dApp original en el tercer trimestre de 2022. El c\xf3digo fue y siempre ser\xe1 open-source y se puede encontrar en los ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/Giveth"},"repositorios p\xfablicos de Giveth en Github"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Esta documentaci\xf3n quedar\xe1 disponible con el fin de tener una referencia hist\xf3rica de la primera etapa de Giveth."))),(0,r.kt)("hr",null))}l.isMDXComponent=!0},524:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905)),o=t(8948);const l={id:"developmentProcess",title:"Proceso de Desarrollo",slug:"dapps/developmentProcess"},i=void 0,s={unversionedId:"developmentProcess",id:"developmentProcess",title:"Proceso de Desarrollo",description:"",source:"@site/i18n/es/docusaurus-plugin-content-docs-dapps/current/developmentProcess.md",sourceDirName:".",slug:"/dapps/developmentProcess",permalink:"/es/dapps/developmentProcess",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/developmentProcess.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1667574492,formattedLastUpdatedAt:"4 nov 2022",frontMatter:{id:"developmentProcess",title:"Proceso de Desarrollo",slug:"dapps/developmentProcess"},sidebar:"dapps",previous:{title:"Implementaci\xf3n de seguridad del puente Giveth",permalink:"/es/dapps/bridgeSecurity"},next:{title:"Regen Farm Smart Contract Guide",permalink:"/es/dapps/regenFarmContracts"}},d={},p=[{value:"Planificaci\xf3n del desarrollo, Sprints y d\xf3nde involucrarse.",id:"planificaci\xf3n-del-desarrollo-sprints-y-d\xf3nde-involucrarse",level:2},{value:"Implementac\xedon y Organizaci\xf3n de Branchs",id:"implementac\xedon-y-organizaci\xf3n-de-branchs",level:2},{value:"Uso de tableros Zenhub",id:"uso-de-tableros-zenhub",level:2},{value:"Hacer un Pull request (PR)",id:"hacer-un-pull-request-pr",level:3},{value:"Pruebas de integraci\xf3n",id:"pruebas-de-integraci\xf3n",level:2},{value:"Pruebas de control de calidad",id:"pruebas-de-control-de-calidad",level:2},{value:"Implementaci\xf3n de producci\xf3n",id:"implementaci\xf3n-de-producci\xf3n",level:2},{value:"Documentaci\xf3n de servicios web back-end",id:"documentaci\xf3n-de-servicios-web-back-end",level:2},{value:"PREGUNTAS M\xc1S FRECUENTES",id:"preguntas-m\xe1s-frecuentes",level:2}],c={toc:p};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"TraceDeprecated"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Esta secci\xf3n detalla el proceso de desarrollo de Giveth TRACE, las implementaciones y c\xf3mo se manejan las fusiones y las pruebas.")),(0,r.kt)("h2",{id:"planificaci\xf3n-del-desarrollo-sprints-y-d\xf3nde-involucrarse"},"Planificaci\xf3n del desarrollo, Sprints y d\xf3nde involucrarse."),(0,r.kt)("p",null,"Ejecutamos un ciclo de sprint de 2 semanas con reuniones semanales de desarrolladores para planificar sprints y evaluar el progreso. Puede pagar cuando el pr\xf3ximo est\xe9 en nuestro ",(0,r.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/embed?src=givethdotio%40gmail.com"},"Google Calendar")," y tambi\xe9n puede comunicarse con ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/XhN7eGmcCK"},"Giveth Discord")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"@moenick")," el gerente del proyecto Giveth TRACE. Puede encontrar el ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giveth-dapp"},"repositorio Giveth TRACE actual en Github"),"."),(0,r.kt)("h2",{id:"implementac\xedon-y-organizaci\xf3n-de-branchs"},"Implementac\xedon y Organizaci\xf3n de Branchs"),(0,r.kt)("p",null,"Giveth TRACE ha pasado del desarrollo pasivo al activo para el lanzamiento posterior a la beta pr\xf3ximamente. Actualmente se utilizan dos implementaciones para el proceso de desarrollo."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockchain"),(0,r.kt)("th",{parentName:"tr",align:null},"Branch desplegada"),(0,r.kt)("th",{parentName:"tr",align:null},"Implementaci\xf3n autom\xe1tica"),(0,r.kt)("th",{parentName:"tr",align:null},"Uso"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://trace.giveth.io"},"beta")),(0,r.kt)("td",{parentName:"tr",align:null},"Mainnter/Rinkeby"),(0,r.kt)("td",{parentName:"tr",align:null},"master"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Implementaci\xf3n en puente; Rinkeby para interacciones de contratos internos, Mainnet para enviar y recibir fondos reales.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://develop.giveth.io"},"develop")),(0,r.kt)("td",{parentName:"tr",align:null},"Ropsten Test Network"),(0,r.kt)("td",{parentName:"tr",align:null},"develop"),(0,r.kt)("td",{parentName:"tr",align:null},"si"),(0,r.kt)("td",{parentName:"tr",align:null},"Entorno de desarrollo para integrar y probar nuevas funcionalidades. Las ramificaciones de funciones y solicitudes de incorporaci\xf3n de cambios se implementan en este entorno.")))),(0,r.kt)("p",null,"Las dos ramas siguientes se utilizan en el gitflow."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master"),(0,r.kt)("td",{parentName:"tr",align:null},"La rama maestra solo rastrea el c\xf3digo liberado. Los compromisos se realizan para dominar a mediados de cada mes para no interferir con los procesos de pago que ocurren cerca del final y el comienzo de estos meses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"develop"),(0,r.kt)("td",{parentName:"tr",align:null},"Las implementaciones realizadas para desarrollar provienen de compilaciones locales e incluyen nuevas funciones y correcciones de errores.")))),(0,r.kt)("h2",{id:"uso-de-tableros-zenhub"},"Uso de tableros Zenhub"),(0,r.kt)("p",null,"Actualmente, usamos la extensi\xf3n Zenhub Boards para Github para realizar un seguimiento del progreso de las funciones y las correcciones. Puede obtener la ",(0,r.kt)("a",{parentName:"p",href:"https://www.zenhub.com/extension"},"extensi\xf3n de Zenhub aqu\xed"),"."),(0,r.kt)("p",null,"El flujo de problemas de Github actual es el siguiente:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:null},"Uso"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New Issues"),(0,r.kt)("td",{parentName:"tr",align:null},"Cree un nuevo problema para una nueva solicitud de funci\xf3n o para informar un error. Etiqueta a un desarrollador o ",(0,r.kt)("inlineCode",{parentName:"td"},"@moenick")," para asegurarte de que se note. Use etiquetas para agregar contexto a su problema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icebox"),(0,r.kt)("td",{parentName:"tr",align:null},"Caracter\xedsticas e ideas a considerar para el desarrollo futuro, que el equipo de Giveth evaluar\xe1 solo cuando el ancho de banda del desarrollador lo permita.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Product Backlog"),(0,r.kt)("td",{parentName:"tr",align:null},"Cuestiones que necesitan ser tratadas o aprobadas nuevas funcionalidades para su desarrollo. Estos se pondr\xe1n en cola en el siguiente sprint progresivamente.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Epics"),(0,r.kt)("td",{parentName:"tr",align:null},"Grandes tareas que se han dividido en problemas m\xe1s peque\xf1os.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Needs Clarification"),(0,r.kt)("td",{parentName:"tr",align:null},"Problemas que requieren m\xe1s aclaraciones por parte del creador del problema para poder avanzar.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sprint Backlog"),(0,r.kt)("td",{parentName:"tr",align:null},"Problemas en los que se est\xe1 trabajando en el sprint actual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bugs & Ops"),(0,r.kt)("td",{parentName:"tr",align:null},"Tareas urgentes que necesitan ser priorizadas. El ancho de banda se reserva en el cronograma de sprint para que los desarrolladores aborden cualquier problema aqu\xed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In Progress"),(0,r.kt)("td",{parentName:"tr",align:null},"Problemas que ha detectado un desarrollador para el sprint actual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code Review"),(0,r.kt)("td",{parentName:"tr",align:null},"Los desarrolladores deben revisar el c\xf3digo al que se hace referencia en estos problemas para garantizar la calidad y solucionar posibles problemas antes de pasar a las pruebas de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UAT (Pruebas de Aceptaci\xf3n del Usuario)"),(0,r.kt)("td",{parentName:"tr",align:null},"Funciones o correcciones listas para ser probadas por el usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"Incidencias listas para fusionarse con ",(0,r.kt)("inlineCode",{parentName:"td"},"master")," de acuerdo con el ciclo de confirmaci\xf3n.")))),(0,r.kt)("h3",{id:"hacer-un-pull-request-pr"},"Hacer un Pull request (PR)"),(0,r.kt)("p",null,"Antes de realizar un nuevo Pull request, aseg\xfarese de que su c\xf3digo no tenga problemas de linter y se pueda implementar. Solo se fusionar\xe1n los PR que se implementen correctamente y no tengan ning\xfan conflicto de fusi\xf3n. Tambi\xe9n puede verificar f\xe1cilmente la vista previa de implementaci\xf3n en la integraci\xf3n de implementaci\xf3n autom\xe1tica de Github Netlify.\n",(0,r.kt)("img",{parentName:"p",src:"https://d33wubrfki0l68.cloudfront.net/cfa6124f4e0bf556de850f40e97c6b4cc66231f9/d42f0/images/product-development/deploy-preview.png",alt:"Integraci\xf3n de Autodeploy"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Vista previa de implementaci\xf3n.")," Cada solicitud de ",(0,r.kt)("strong",{parentName:"p"},"PR")," al repositorio de DApp tiene una vista previa de implementaci\xf3n de Netlify. Puede acceder a ella en la parte inferior de la pesta\xf1a Conversaci\xf3n despu\xe9s de hacer clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Mostrar todas las comprobaciones")," y ",(0,r.kt)("strong",{parentName:"p"},"Detalles"),"."),(0,r.kt)("h2",{id:"pruebas-de-integraci\xf3n"},"Pruebas de integraci\xf3n"),(0,r.kt)("p",null,"El ",(0,r.kt)("strong",{parentName:"p"},"equipo de desarrollo")," realiza la integraci\xf3n de nuevas funciones despu\xe9s de una reuni\xf3n de desarrollo de DApp donde se revisan las relaciones p\xfablicas. Una vez que se revisan y corrigen los PR, se fusionan con la rama de desarrollo. Las pruebas de las nuevas funciones se realizan en el entorno ",(0,r.kt)("a",{parentName:"p",href:"https://develop.giveth.io"},(0,r.kt)("inlineCode",{parentName:"a"},"develop"))," para garantizar que las funciones hagan lo que dicen y funcionen bien con el resto de la DApp."),(0,r.kt)("h2",{id:"pruebas-de-control-de-calidad"},"Pruebas de control de calidad"),(0,r.kt)("p",null,"Despu\xe9s de que las nuevas funciones se integren y se prueben en el entorno ",(0,r.kt)("a",{parentName:"p",href:"https://develop.giveth.io"},(0,r.kt)("inlineCode",{parentName:"a"},"develop")),", los desarrolladores har\xe1n ping a los evaluadores con solicitudes o actualizaciones en el ","[Canal de desarrollo de Giveth TRACE]","(https://discord .gg/79uUbyVCtE) en Discord. Las pruebas no deben ser realizadas por desarrolladores y est\xe1n abiertas a cualquiera que desee contribuir."),(0,r.kt)("h2",{id:"implementaci\xf3n-de-producci\xf3n"},"Implementaci\xf3n de producci\xf3n"),(0,r.kt)("p",null,'Solo una vez que se eliminan todos los errores reci\xe9n introducidos en la rama "desarrollar", se pueden fusionar para dominar y pasar a producci\xf3n. Lo hace manualmente el equipo de desarrollo de DApp (por ',(0,r.kt)("inlineCode",{parentName:"p"},"@aminlatifi")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"@MohammadPCh"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Para implementar la versi\xf3n m\xe1s reciente de Feathers-Giveth")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ssh usuario@feathers.alpha.giveth.io\n\n$ cd /home/deploy/feathers-giveth/\n$ sudo -u deploy bash\n\n$ git pull\n\n$ yarn install --pure-lockfile\n$ yarn serve\n")),(0,r.kt)("p",null,"A continuaci\xf3n, compruebe el estado de despliegue de las feathers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ pm2 logs\n")),(0,r.kt)("p",null,"Si los registros est\xe1n limpios, el \xfaltimo paso es implementar la \xfaltima confirmaci\xf3n de rama maestra en ",(0,r.kt)("a",{parentName:"p",href:"http://netlify.com/"},"Netlify")," y bloquear la implementaci\xf3n."),(0,r.kt)("h2",{id:"documentaci\xf3n-de-servicios-web-back-end"},"Documentaci\xf3n de servicios web back-end"),(0,r.kt)("p",null,"Si es un colaborador nuevo y desea documentaci\xf3n t\xe9cnica m\xe1s detallada sobre todos los servicios web aprovechados desde el back-end (feathers-giveth) hasta el front-end (giveth-dapp), consulte nuestras p\xe1ginas en *",(0,r.kt)("em",{parentName:"p"},"Swagger")," * para implementaciones de producci\xf3n y ensayo:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://feathers.beta.giveth.io/docs/?url=/docs#/"},"Producci\xf3n de feathers-giveth"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://feathers.develop.giveth.io/docs"},"feathers-giveth Staging")),(0,r.kt)("h2",{id:"preguntas-m\xe1s-frecuentes"},"PREGUNTAS M\xc1S FRECUENTES"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\xbfCu\xe1l es la definici\xf3n de una funci\xf3n?")),(0,r.kt)("p",null,"Una funci\xf3n es cualquier mejora no trivial (menos de 10 l\xedneas de c\xf3digo). La mayor\xeda de las funciones tienen problemas en el repositorio de Github correspondiente."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\xbfQu\xe9 pasa con las correcciones?")),(0,r.kt)("p",null," Las grandes correcciones no cr\xedticas se tratan como cualquier otra funci\xf3n. Si una correcci\xf3n es cr\xedtica en el tiempo, se crea como una nueva rama con el prefijo ",(0,r.kt)("inlineCode",{parentName:"p"},"hotfix/")," como un fork de la rama ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),'. Dicha revisi\xf3n se prueba como m\xednimo por 2 personas del equipo de desarrollo antes de fusionarse con las ramas "master" y "develop".'),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\xbfD\xf3nde comunicamos lo que necesita pruebas?")),(0,r.kt)("p",null,"La prueba de control de calidad se anuncia en el canal ",(0,r.kt)("inlineCode",{parentName:"p"},"Giveth-1 Dev")," en ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/79uUbyVCtE"},"Discord"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\xbfC\xf3mo priorizamos cuando fallan las pruebas/correcciones de errores?")),(0,r.kt)("p",null,"Las correcciones de errores se realizan ad-hoc tan pronto como se descubren durante el proceso de prueba. Los errores pueden ser abordados por el equipo de desarrollo de DApp o se puede pedir ayuda a colaboradores externos. La correcci\xf3n de errores tiene prioridad sobre el nuevo desarrollo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\xbfQui\xe9n realiza las implementaciones y c\xf3mo se implementan?")),(0,r.kt)("p",null,"La rama ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," se implementa autom\xe1ticamente en su entorno. La rama ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," es implementada por el equipo de desarrollo (",(0,r.kt)("inlineCode",{parentName:"p"},"@aminlatifi"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@RamRamez")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"@MohammadPCh"),") una vez que no hay nuevos errores conocidos en la rama ",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),". El proceso es manual y existe un procedimiento de despliegue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\xbfCu\xe1l es la frecuencia del ciclo de lanzamiento?")),(0,r.kt)("p",null," Hay un nuevo lanzamiento cada 2 semanas, como se muestra en el ",(0,r.kt)("a",{parentName:"p",href:"#product-development-cycle-gant-chart."},"product development cycle gant chart."),"."))}u.isMDXComponent=!0}}]);