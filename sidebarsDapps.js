module.exports = {
  dapps: [
    {
      type: 'category',
      label: 'DApps Documentation',
      link: {
        type: 'generated-index',
        title: 'Dapps Documentation',
        description: 'Learn more about how the Giveth Dapp works. We have a variety of articles tailored for Users and Developers for Giveth.io, Giveth TRACE and the GIVeconomy.',
        slug: 'dapps/'
      },
      items:[
    {
      type: 'category',
      label: 'User Guides',
      collapsed: true,
      items: [{
        type: 'category',
        label: 'Giveth.io',
        collapsed: true,
        link: {type: 'doc', id: 'givethIO'},
        items: ['gettingStarted','createproject','listedUnlisted','projectVerification', 'projectUpdates', 'projectdonating', 'multisigs' ,{
           type: 'category',
           label: 'Wallets',
           items: ['torusUserGuide', 'torusonramp','importTorusMM', 'donatingmetamask'],
         },
          'troubleshooting','faq'],
       },
        { type: 'category',
          label: 'GIVeconomy',
          link: {type: 'doc', id: 'giveconomy'},
          items: [ 'givdrop', 'givbacks', 'givstream',
          {
            type: 'category',
            label: 'GIVgarden',
            link: {type: 'doc', id: 'givgarden'},
            items:['termsForProposals']
          },
          {
            type: 'category',
            label: 'GIVfarm',
            link: {type: 'doc', id: 'givfarm'},
            items:['regenFarms', 'angelVault']
          }
          ,'givpower', 'niceToken', 
]
          },
          'quadraticfunding','giverspfp', 'referral'
        ]

    },
    {
     type: 'category',
     label: "Developer Guides",
     items: [ 'contributors','givethioinstallation' , {
       type: 'category',
       label: "Giveth TRACE (Deprecated)",
       items: ['TRACEinstallation','bridgeSecurity', 'developmentProcess']
     },
     'regenFarmContracts'
  ]
   },
   {
    type: 'category',
    label: "Security",
    items: [ 'disclosure']
  },{
    type: 'category',
    label: 'Giveth TRACE (Deprecated)',
    link: {type: 'doc', id:'introTrace'},
    items: [ 'entitiesAndRoles','makeTraceableProject','leavingTraces', 'technicalWhitePaper', 'exchangeRates', 'traceContracts' ]
     },
  
   ],

 },
]
 }
