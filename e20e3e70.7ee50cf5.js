(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{112:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return l}));var o=t(3),r=t(7),n=(t(0),t(125)),i={id:"eps",title:"EPS - Electrical Power System",sidebar_label:"EPS"},s={unversionedId:"aurorav2/hardware/placas/eps",id:"aurorav2/hardware/placas/eps",isDocsHomePage:!1,title:"EPS - Electrical Power System",description:"Objetivo",source:"@site/docs/aurorav2/hardware/placas/eps.md",slug:"/aurorav2/hardware/placas/eps",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/placas/eps",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/aurorav2/hardware/placas/eps.md",version:"current",sidebar_label:"EPS",sidebar:"docs",previous:{title:"Reuni\xe3o 10/03/21",permalink:"/avionicsdocumentation/docs/reuniao/21/0310r"},next:{title:"CDHS - Command Data Handling System",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/placas/cdhs"}},c=[{value:"Objetivo",id:"objetivo",children:[]},{value:"Componentes",id:"componentes",children:[]},{value:"Esquem\xe1tico",id:"esquem\xe1tico",children:[]},{value:"PCB",id:"pcb",children:[{value:"Vers\xe3o do Prot\xf3tipo",id:"vers\xe3o-do-prot\xf3tipo",children:[]},{value:"Vers\xe3o Atual",id:"vers\xe3o-atual",children:[]}]},{value:"RBF",id:"rbf",children:[{value:"Circuito",id:"circuito",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Valida\xe7\xe3o do circuito",id:"valida\xe7\xe3o-do-circuito",children:[]}]},{value:"Testes no prot\xf3tipo",id:"testes-no-prot\xf3tipo",children:[{value:"Componentes soldados",id:"componentes-soldados",children:[]},{value:"Continuidade",id:"continuidade",children:[]},{value:"Linhas de pot\xeancia",id:"linhas-de-pot\xeancia",children:[]}]},{value:"Refer\xeancias",id:"refer\xeancias",children:[]}],d={toc:c};function l(e){var a=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,i,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"objetivo"},"Objetivo"),Object(n.b)("p",null,"Duas fun\xe7\xf5es s\xe3o exercidas simultaneamente nesta placa: (1) fornecimento de energia e (2) regula\xe7\xe3o desta energia. "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Duas baterias de lithium-ion (li-ion) modelo 18650 e de voltagem nominal 3.7v s\xe3o usadas em paralelo. Em conjunto, um m\xf3dulo TP4056 \xe9 usado para a recarga desse conjunto de baterias. \xc9 utilizado tamb\xe9m um m\xf3dulo sensor de corrente (INA219) para que sejam avaliadas a todo momento a corrente e a tens\xe3o geradas para o circuito."),Object(n.b)("li",{parentName:"ol"},"Tr\xeas tens\xf5es diferentes s\xe3o utilizadas por componentes da avi\xf4nica. Essas tens\xf5es s\xe3o obtidas no EPS atrav\xe9s de tr\xeas diferentes reguladores de tens\xe3o. S\xe3o utilizados o step-up regulator U3V709 para gerar 9V, o regulador de tens\xe3o LM7805 para gerar 5V e o regulador de tens\xe3o LD1117V33 para gerar 3.3V. ")),Object(n.b)("p",null,"H\xe1 tamb\xe9m um sistema com dois MOSFETs e duas chaves, uma interna ao circuito e outra externa ao foguete. \xc9 a partir desse sistema, chamado de Remove Before Flight (RBF), que a avi\xf4nica pode ser mantida desligada enquanto estiver dentro do foguete e s\xf3 seja acionada no momento do lan\xe7amento."),Object(n.b)("h2",{id:"componentes"},"Componentes"),Object(n.b)("p",null,"Os componentes da placa s\xe3o:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Componente"),Object(n.b)("th",{parentName:"tr",align:null},"Qtd"),Object(n.b)("th",{parentName:"tr",align:null},"Obs"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"40 pins flat connector"),Object(n.b)("td",{parentName:"tr",align:null},"1"),Object(n.b)("td",{parentName:"tr",align:null},"Conector do barramento")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"TP4056"),Object(n.b)("td",{parentName:"tr",align:null},"1"),Object(n.b)("td",{parentName:"tr",align:null},"Carrega baterias")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Battery Holder"),Object(n.b)("td",{parentName:"tr",align:null},"1"),Object(n.b)("td",{parentName:"tr",align:null},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"18650 Battery"),Object(n.b)("td",{parentName:"tr",align:null},"2"),Object(n.b)("td",{parentName:"tr",align:null},"3.7V")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Mini-lock connector"),Object(n.b)("td",{parentName:"tr",align:null},"2"),Object(n.b)("td",{parentName:"tr",align:null},"Para carregar baterias e RBF")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Slide switch"),Object(n.b)("td",{parentName:"tr",align:null},"1"),Object(n.b)("td",{parentName:"tr",align:null},"On/Off/RBF")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"MOSFETs"),Object(n.b)("td",{parentName:"tr",align:null},"2"),Object(n.b)("td",{parentName:"tr",align:null},"1x P55N06, 1x IRF9530")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"INA219"),Object(n.b)("td",{parentName:"tr",align:null},"1"),Object(n.b)("td",{parentName:"tr",align:null},"Mede tens\xe3o e corrente")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"U3V709"),Object(n.b)("td",{parentName:"tr",align:null},"1"),Object(n.b)("td",{parentName:"tr",align:null},"Step-up 3.7V -> 9V")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"LM7085M"),Object(n.b)("td",{parentName:"tr",align:null},"1"),Object(n.b)("td",{parentName:"tr",align:null},"Step-down 9V -> 5V")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"LD1117V33"),Object(n.b)("td",{parentName:"tr",align:null},"1"),Object(n.b)("td",{parentName:"tr",align:null},"Step-down 9V -> 3.3V")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Resistor"),Object(n.b)("td",{parentName:"tr",align:null},"4"),Object(n.b)("td",{parentName:"tr",align:null},"3x 10k\u03a9, 1x 100\u03a9")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Capacitor"),Object(n.b)("td",{parentName:"tr",align:null},"5"),Object(n.b)("td",{parentName:"tr",align:null},"1x 33uF, 1x 0.22uF, 1x 0.1uF, 1x 100uF, 1x 10uF")))),Object(n.b)("h2",{id:"esquem\xe1tico"},"Esquem\xe1tico"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(266).default})),Object(n.b)("h2",{id:"pcb"},"PCB"),Object(n.b)("h3",{id:"vers\xe3o-do-prot\xf3tipo"},"Vers\xe3o do Prot\xf3tipo"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(267).default})),Object(n.b)("h3",{id:"vers\xe3o-atual"},"Vers\xe3o Atual"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(268).default})),Object(n.b)("h2",{id:"rbf"},"RBF"),Object(n.b)("p",null,"O Remove Before Flight, tamb\xe9m chamado de RBF, \xe9 um dispositivo comum no meio da avia\xe7\xe3o cuja fun\xe7\xe3o \xe9 manter certa parte do circuito desligado enquanto a aeronave estiver no ch\xe3o. Ele \xe9 retirado apenas no \xfaltimo momento, quando o v\xf4o estiver prestes a acontecer. No caso da avi\xf4nica, n\xf3s utilizamos esse dispositivo para manter toda a eletr\xf4nica embarcada desligada antes do lan\xe7amento do foguete. Isso \xe9 necess\xe1rio porque h\xe1 um longo per\xedodo entre a montagem final do foguete e o seu lan\xe7amento, portanto devemos evitar o gasto desnecess\xe1rio das baterias e previnir quaisquer falhas de acontecerem."),Object(n.b)("p",null,"Isso \xe9 feito da seguinte maneira: a avi\xf4nica \xe9 interna ao foguete, portanto para lig\xe1-la \xe9 necess\xe1rio algum dispositivo cuja localiza\xe7\xe3o seja externa. Temos para isso uma chave que fica montada na estrutura do foguete. Isso permite ligar e desligar a eletr\xf4nica embarcada ap\xf3s o foguete j\xe1 ter sido preparado. O nome 'Remove Before Flight' indica que aquilo que chaveia o circuito \xe9 removido, e de fato muitas equipes fazem dessa maneira com algo ",Object(n.b)("a",{parentName:"p",href:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYddVzTJxSCTpANgKBw8WQMHFPr7dKNnCbQ&usqp=CAU"},"assim"),". No entanto, para o Aurora v2 n\xf3s utilizaremos uma chave comum:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(269).default})),Object(n.b)("h3",{id:"circuito"},"Circuito"),Object(n.b)("p",null,"Como visto acima no esquem\xe1tico completo, os 3v7 provenientes da bateria s\xe3o enviados para dois lugares: para o regulador de tens\xe3o de 9v e para um switch. O objetivo do RBF \xe9 usar chavear os 9v, pois eles s\xe3o usados por todo o restante do circuito: s\xe3o usados para gerar 5v, 3v3 e usados diretamente para acionar os skibs. A chave possui 3 posi\xe7\xf5es: 'on', 'off' e 'RBF'. No modo 'on' ela fecha o circuito sem ter que passar pela chave RBF externa, portanto \xe9 ideal para testes de bancada. No modo 'off' o circuito permanece desligado. No modo 'RBF' \xe9 necess\xe1rio que a chave externa seja usada para fechar o circuito. Nesse caso, um conector mini-lock foi colocado para comunicar a placa com a chave, que estar\xe1 na estrutura do foguete."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(270).default})),Object(n.b)("p",null,'O circuito possui dois MOSFETs: um tipo N (nMOS) e outro tipo P (pMOS), com o primeiro fazendo o drive do segundo. Isso foi feito porque a tens\xe3o de drive (3v7) \xe9 menor que a tens\xe3o de load (9v). Caso ela fosse maior, como 12v, poderia ter sido implementada uma configura\xe7\xe3o low-side com apenas um pMOS. Como esse n\xe3o \xe9 o caso, um segundo MOSFET teve que ser adicionado. Ambos os tipos de MOSFET conduzem quando h\xe1 um potencial grande o suficiente entre o gate e o source (chamado de Vgs). A diferen\xe7a \xe9 que no nMOS esse potencial deve ser positivo, j\xe1 no pMOS ele deve ser negativo. Portanto, podemos "desligar" os MOSFETs aplicando a mesma tens\xe3o no gate e no source. Quando o sinal l\xf3gico alto (3v7) \xe9 aplicado no gate do nMOS, ele puxa o gate do pMOS para um n\xedvel desejado. No caso, temos um divisor resistivo que nos d\xe1 4.5v. Isso fecha a chave. Quando o sinal l\xf3gico \xe9 baixo (0v), tanto o gate quando o source do pMOS s\xe3o 9v, portanto a chave fica aberta. '),Object(n.b)("p",null,"O sinal l\xf3gico desse circuito s\xe3o os 3v7 aplicados no gate do nMOS tanto no modo 'on' quanto no modo 'RBF' da chave. H\xe1 um resistor de 100\u03a9 e um de 10k\u03a9 no meio do caminho. O gate de um MOSFET atua como um pequeno capacitor, portanto utilizamos um resistor de 100\u03a9 para atenuar o pico de corrente que existe. O resistor de 10k\u03a9 atua como pull-down: como n\xf3s estamos ligando o sistema com os 3v7, \xe9 imprescind\xedvel que na aus\xeancia dessa tens\xe3o ele seja desligado. Esses dois n\xedveis devem estar bem definidos para um bom funcionamento do circuito. O resistor de pull-down \"puxa\" o input no gate para 0v quando a chave estiver aberta, assegurando que o gate do MOSFET est\xe1 recebendo n\xedvel l\xf3gico baixo."),Object(n.b)("p",null,"Entre o drain do nMOS e o gate do pMOS h\xe1 um resistor de 10k\u03a9. Tamb\xe9m nesse pino de gate h\xe1 outro resistor de 10k\u03a9, que atua como divisor resistivo e est\xe1 ligado aos 9V provenientes do regulador de tens\xe3o. Esses 9v s\xe3o aplicados no source do pMOS. J\xe1 o drain dele \xe9 a tens\xe3o de load, ou seja, os 9v utilizados na alimenta\xe7\xe3o do restante do circuito. Quando o sinal l\xf3gico \xe9 zero, a tens\xe3o de load tamb\xe9m \xe9 zero. Quando \xe9 3v7 (ou maior que a tens\xe3o de avalanche entre drain-source, que no caso do P55N06 \xe9 no m\xe1ximo 2.5v), a tens\xe3o de load \xe9 9v."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(271).default})),Object(n.b)("p",null,"O circuito completo fica dessa maneira:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(272).default})),Object(n.b)("h3",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(n.b)("p",null,"O circuito elaborado foi simulado para as situa\xe7\xf5es de sinal l\xf3gico baixo e alto. Veja abaixo os resultados de corrente, tens\xe3o e pot\xeancia."),Object(n.b)("h4",{id:"rbf-off"},"RBF off"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(273).default})),Object(n.b)("h4",{id:"rbf-on"},"RBF on"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(274).default})),Object(n.b)("h3",{id:"valida\xe7\xe3o-do-circuito"},"Valida\xe7\xe3o do circuito"),Object(n.b)("p",null,"Ap\xf3s a simula\xe7\xe3o do circuito e valida\xe7\xe3o te\xf3rica dele n\xf3s o testamos na protoboard. O circuito foi montado na protoboard da seguinte maneira:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(275).default})),Object(n.b)("p",null,"A bateria de 3v7 est\xe1 ligada \xe0 chave, que tem 3 pinos. Quando a chave est\xe1 no posi\xe7\xe3o de cima, o pino da bateria fica em curto com o pino de cima, portanto fechando o circuito. Quando a chave est\xe1 na posi\xe7\xe3o de baixo, a bateria n\xe3o se liga a nada, portanto essa posi\xe7\xe3o representa a chave aberta. Temos embaixo o MOSFET tipo n P55N06 e em cima o MOSFET tipo p IRF9540N. O fio verde representa o output do circuito. Quando a chave est\xe1 fechada, ele teoricamente deveria levar 9V. J\xe1 com a chave aberta, esse fio deveria levar aproximadamente 0V."),Object(n.b)("p",null,"Veja abaixo o resultado do circuito experimental:"),Object(n.b)("h4",{id:"chave-aberta"},"Chave aberta"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(276).default})),Object(n.b)("h4",{id:"chave-fechada"},"Chave fechada"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(277).default})),Object(n.b)("p",null,"Os fios que v\xeam da pcb s\xe3o os de 9v, 3v7 e gnd."),Object(n.b)("p",null,"Conclus\xe3o: o slide switch segue o comportamento esperado."),Object(n.b)("h2",{id:"testes-no-prot\xf3tipo"},"Testes no prot\xf3tipo"),Object(n.b)("h3",{id:"componentes-soldados"},"Componentes soldados"),Object(n.b)("p",null,"Para validar o EPS antes de mandar fabricar, n\xf3s utilizamos a fresa do laborat\xf3rio para fabricar um prot\xf3tipo. Por limita\xe7\xf5es dos tamanhos de placas que t\xednhamos e da fresadora, esse prot\xf3tipo tem dimens\xf5es 87x87. Abaixo est\xe3o imagens da placa ap\xf3s todos os componentes terem sido soldados. Obs: essa vers\xe3o do EPS ainda n\xe3o possu\xeda o RBF."),Object(n.b)("h4",{id:"frente"},"Frente"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(278).default})),Object(n.b)("h4",{id:"tr\xe1s"},"Tr\xe1s"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(279).default})),Object(n.b)("h3",{id:"continuidade"},"Continuidade"),Object(n.b)("p",null,"Testes de continuidade foram executados na EPS buscando encontrar trilhas mal-comunicadas e planos de ground isolados. Todas as trilhas est\xe3o corretas, por\xe9m a se\xe7\xe3o de ground envolvida no regulador de 3v3 n\xe3o se comunicava com o resto. Para resolver isso foi soldado um jumper. Uma via comunicando esse plano de ground foi adicionada no projeto."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(280).default})),Object(n.b)("h3",{id:"linhas-de-pot\xeancia"},"Linhas de pot\xeancia"),Object(n.b)("p",null,"Temos 3 linhas de pot\xeancia sendo geradas no EPS a partir dos reguladores de\ntens\xe3o: 3v3, 5v e 9v. Verificamos que elas est\xe3o de fato sendo geradas."),Object(n.b)("h4",{id:"3v3"},"3v3"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(281).default})),Object(n.b)("h4",{id:"5v"},"5v"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(282).default})),Object(n.b)("h4",{id:"9v"},"9v"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:t(283).default})),Object(n.b)("h2",{id:"refer\xeancias"},"Refer\xeancias"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.baldengineer.com/7-mosfet-myths-and-misconceptions-addressed.html"},"MOSFET myths and misconceptions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.baldengineer.com/low-side-vs-high-side-transistor-switch.html"},"MOSFET as a switch: low-side vs high-side"))))}l.isMDXComponent=!0},125:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var o=t(0),r=t.n(o);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=l(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),p=o,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||n;return t?r.a.createElement(m,s(s({ref:a},d),{},{components:t})):r.a.createElement(m,s({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<n;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},266:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_schem-bb037671819e30459e17147e411c2d00.jpg"},267:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_protpcb-12e6615f30212b52f440730424f6f3ac.png"},268:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_pcb-9f4cde5c2e6df57b33d97a97284efaea.png"},269:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rbfexternal-de103fb1df49d773925f4bf654dee5f0.jpg"},270:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rbf_circuit01-e3a7b238829cd3f84b6a07ea1ed8f7ce.jpg"},271:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rbf_circuit02-104fa078ae234f0c45958a4cc7d53ee5.jpg"},272:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rbf_circuit03-deb7ba770560f40e063155fda2d54b7a.jpg"},273:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_off-1cc8cafdc20f4bd082588b8d61f319e8.png"},274:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_on-4b869ce5d5763bf930e429e4be532313.png"},275:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rbfteste_proto-62379d198ef171eca68465d6d0498aca.png"},276:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rbfteste_off-712318e8d9cccf9ef09ff7201a9d67e4.jpg"},277:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rbfteste_on-e2ccda3799bc62653611f3149095cad2.jpg"},278:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_protfront-cbfa3415f75b39a2c76105e22ac73ef9.jpeg"},279:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_protback-fe85cf5f5a986945a883ae071b1455b9.jpeg"},280:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_jumper-bf02e25c031f0b904573ddf01e38d9c6.jpg"},281:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_3v3-209518ec225b1f0588a2d2cdfe177e49.jpg"},282:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_5v-3303f4d1efeb5d1f7f2375f5e53eaaca.jpg"},283:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/eps_9v-fe133c2f6842ba7b151d7ba02c58988c.jpg"}}]);