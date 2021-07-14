(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{135:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return i})),o.d(a,"metadata",(function(){return n})),o.d(a,"toc",(function(){return c})),o.d(a,"default",(function(){return l}));var t=o(3),s=o(7),r=(o(0),o(162)),i={id:"diagramadeclasses",title:"UML e Diagrama de Classes",sidebar_label:"UML e Diagrama de Classes"},n={unversionedId:"glossario/diagramadeclasses",id:"glossario/diagramadeclasses",isDocsHomePage:!1,title:"UML e Diagrama de Classes",description:"Escrito por F\xe1bio Procaci",source:"@site/docs/glossario/diagramadeclasses.md",slug:"/glossario/diagramadeclasses",permalink:"/avionicsdocumentation/docs/glossario/diagramadeclasses",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/glossario/diagramadeclasses.md",version:"current",sidebar_label:"UML e Diagrama de Classes",sidebar:"Docs",previous:{title:"UART",permalink:"/avionicsdocumentation/docs/glossario/protocolos/uart"},next:{title:"Usando o Git",permalink:"/avionicsdocumentation/docs/glossario/git"}},c=[{value:"O que \xe9 um diagrama UML?",id:"o-que-\xe9-um-diagrama-uml",children:[]},{value:"Diagrama de Classes",id:"diagrama-de-classes",children:[{value:"Principais elementos",id:"principais-elementos",children:[]},{value:"N\xedveis de complexidade",id:"n\xedveis-de-complexidade",children:[]}]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],m={toc:c};function l(e){var a=e.components,i=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},m,i,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Escrito por F\xe1bio Procaci")),Object(r.b)("h2",{id:"o-que-\xe9-um-diagrama-uml"},"O que \xe9 um diagrama UML?"),Object(r.b)("p",null,"A Linguagem de Modelagem Unificada (UML) foi criada para estabelecer uma linguagem de modelagem visual comum, semanticamente e sintaticamente rica, para arquitetura, design e implementa\xe7\xe3o de sistemas de software complexos, tanto estruturalmente quanto para comportamentos. Al\xe9m do desenvolvimento de software, a UML tem aplica\xe7\xf5es em fluxos do processo na fabrica\xe7\xe3o."),Object(r.b)("p",null,"\xc9 an\xe1loga aos modelos utilizados em outros campos, e \xe9 composta por diferentes tipos de diagramas. De modo geral, diagramas UML descrevem o limite, a estrutura e o comportamento do sistema e os objetos nele contidos."),Object(r.b)("p",null,"A UML n\xe3o \xe9 uma linguagem de programa\xe7\xe3o, mas existem ferramentas que podem ser usadas para gerar c\xf3digo em v\xe1rias linguagens por meio de diagramas UML (StarUML, por exemplo). A UML tem uma rela\xe7\xe3o direta com a an\xe1lise e o design orientados a objetos."),Object(r.b)("p",null,"A UML usa elementos e os associa de diferentes maneiras para formar diagramas que representam aspectos est\xe1ticos ou estruturais de um sistema, al\xe9m de formar diagramas comportamentais, que registram os aspectos din\xe2micos de um sistema."),Object(r.b)("h2",{id:"diagrama-de-classes"},"Diagrama de Classes"),Object(r.b)("p",null,"O diagrama que nos interessa \xe9 o Diagrama de Classes. \xc9 o diagrama UML mais usado, e a principal base de qualquer solu\xe7\xe3o orientada a objetos. Classes dentro de um sistema, atributos e opera\xe7\xf5es, e a rela\xe7\xe3o entre cada classe. Classes s\xe3o agrupadas para criar diagramas de classes quando h\xe1 uma diagrama\xe7\xe3o de grandes sistemas."),Object(r.b)("p",null,"Uma classe num Diagrama de Classes (ou at\xe9 mesmo no c\xf3digo fonte) \xe9 apenas um conceito. Um conceito em forma de desenho (se num diagrama) ou texto (se em c\xf3digo fonte).\nQuando a Classe \xe9 materializada atrav\xe9s de um software, (quando o software est\xe1 \u201crodando\u201d) torna-se um objeto (isso se d\xe1 quando \xe9 alocado um ponteiro de mem\xf3ria para esta classe)."),Object(r.b)("p",null,"O diagrama de classes ilustra graficamente como ser\xe1 a estrutura do software (em n\xedvel micro ou macro), e como cada um dos componentes da sua estrutura estar\xe3o interligados."),Object(r.b)("h3",{id:"principais-elementos"},"Principais elementos"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(274).default})),Object(r.b)("h4",{id:"class-classe"},"Class (Classe)"),Object(r.b)("p",null,"\xc9 a classe propriamente dita. Usamos este elemento quando queremos demonstrar visualmente a classe no diagrama "),Object(r.b)("h4",{id:"association-associa\xe7\xe3o--conector-sem-pontas"},"Association (Associa\xe7\xe3o \u2013 conector sem pontas)"),Object(r.b)("p",null,"\xc9 um tipo de relacionamento usado entre classes. Aplic\xe1vel a classes que s\xe3o independentes (vivem sem depend\xeancia umas das outras), mas que em algum momento no ciclo de vida do software (enquanto ele est\xe1 em execu\xe7\xe3o) podem ter alguma rela\xe7\xe3o conceitual."),Object(r.b)("h4",{id:"generalization-heran\xe7a--conector-com-seta-em-uma-das-pontas"},"Generalization (Heran\xe7a \u2013 conector com seta em uma das pontas)"),Object(r.b)("p",null,"\xc9 um tipo de relacionamento onde a classe generalizada (onde a \u201cponta da seta\u201d do conector fica) fornece recursos para a classe especializada (herdeira). Excetuando conceitos mais avan\xe7ados (como padr\xf5es de projeto, interfaces, visibilidades espec\xedficas etc.), tudo que a classe m\xe3e (generalizada) tem, a filha (especializada) ter\xe1."),Object(r.b)("h4",{id:"compose-composi\xe7\xe3o--conector-com-um-diamante-hachurado-na-ponta"},"Compose (Composi\xe7\xe3o \u2013 conector com um \u201cdiamante\u201d hachurado na ponta)"),Object(r.b)("p",null,"\xc9 um tipo de relacionamento onde a classe composta depende de outras classes para \u201cexistir\u201d. Por exemplo, a classe \u201cCorpoHumano\u201d possui um composi\xe7\xe3o com a classe \u201cCoracao\u201d. Sem a classe \u201cCoracao\u201d, a classe \u201cCorpoHumano\u201d n\xe3o pode existir."),Object(r.b)("h4",{id:"aggregate-agrega\xe7\xe3o--conector-com-um-diamante-vazado-na-ponta"},"Aggregate (Agrega\xe7\xe3o \u2013 conector com um \u201cdiamante\u201d vazado na ponta)"),Object(r.b)("p",null,"\xc9 um tipo de relacionamento onde a classe agregada usa outra classes para \u201cexistir\u201d, mas pode viver sem ela. Por exemplo, a classe \u201cCorpoHumano\u201d possui uma agrega\xe7\xe3o com a classe \u201cMao\u201d. Sem a \u201cMao\u201d a classe \u201cCorpoHumano\u201d pode existir."),Object(r.b)("p",null,"Exemplo de uso:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(275).default})),Object(r.b)("p",null,"Uma classe, na UML (e na Orienta\xe7\xe3o a Objetos tamb\xe9m) possui tr\xeas compartimentos, sendo para: Nome (primeiro), Atributos (segundo) e Opera\xe7\xf5es (terceiro)."),Object(r.b)("h3",{id:"n\xedveis-de-complexidade"},"N\xedveis de complexidade"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(276).default})),Object(r.b)("p",null,"No diagrama acima temos relacionamentos de Associa\xe7\xe3o, Agrega\xe7\xe3o, Composi\xe7\xe3o e Generaliza\xe7\xe3o (Heran\xe7a). A explica\xe7\xe3o a seguir aplica-se a todos os tr\xeas exemplos, pois foca apenas nos relacionamentos:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Cozinha pode ter ou n\xe3o uma PortaCozinha, podendo existir se n\xe3o tiver (Agrega\xe7\xe3o)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"PortaCozinha generaliza Porta, possuindo todas as caracter\xedsticas que Porta t\xeam, al\xe9m das suas espec\xedficas (Generaliza\xe7\xe3o)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Quarto deve ter PortaQuarto, n\xe3o podendo existir se n\xe3o tiver (Composi\xe7\xe3o)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"PortaQuarto generaliza Porta, que tem todas as caracter\xedsticas que Porta t\xeam, al\xe9m das suas espec\xedficas (Generaliza\xe7\xe3o)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Sala deve ter PortaSala, n\xe3o podendo existir se n\xe3o tiver (Composi\xe7\xe3o)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"PortaSala generaliza Porta, que tem todas as caracter\xedsticas que Porta t\xeam, al\xe9m das suas espec\xedficas (Generaliza\xe7\xe3o)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Sala pode ter ou n\xe3o uma Porta que n\xe3o seja uma PortaSala, mas se tiver ou n\xe3o isso n\xe3o far\xe1 diferen\xe7a, pois Porta pode existir sem Sala, e Sala pode existir sem Porta (Associa\xe7\xe3o)."))),Object(r.b)("p",null,"Mas o mesmo diagrama de classes pode ser representado com mais detalhes , aumentando o seu n\xedvel de complexidade:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(277).default})),Object(r.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(r.b)("p",null,"O diagrama de classes UML \xe9 uma ferramenta espetacular para auxiliar os profissionais de produ\xe7\xe3o de software no entendimento sobre o que  deve ser feito e como deve ser feito.\nSaber utiliz\xe1-lo da maneira correta e com bom senso auxilia em qualquer tipo de projeto."))}l.isMDXComponent=!0},162:function(e,a,o){"use strict";o.d(a,"a",(function(){return u})),o.d(a,"b",(function(){return p}));var t=o(0),s=o.n(t);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,t,s=function(e,a){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(s[o]=e[o]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var m=s.a.createContext({}),l=function(e){var a=s.a.useContext(m),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},u=function(e){var a=l(e.components);return s.a.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},A=s.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(o),A=t,p=u["".concat(i,".").concat(A)]||u[A]||d[A]||r;return o?s.a.createElement(p,n(n({ref:a},m),{},{components:o})):s.a.createElement(p,n({ref:a},m))}));function p(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=A;var n={};for(var c in a)hasOwnProperty.call(a,c)&&(n[c]=a[c]);n.originalType=e,n.mdxType="string"==typeof e?e:t,i[1]=n;for(var m=2;m<r;m++)i[m]=o[m];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,o)}A.displayName="MDXCreateElement"},274:function(e,a,o){"use strict";o.r(a),a.default="data:image/png;base64,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"},275:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/diagclas2-e261c2bbfa6941ca3d9cf2c277e25444.png"},276:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/diagclas3-414fc1315045f5498b4eb84ab8d06ec9.png"},277:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/diagclas4-f6c9e3a07284a9ab57f6bae6ad200608.png"}}]);