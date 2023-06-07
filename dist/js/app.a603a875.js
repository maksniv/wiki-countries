(function(){"use strict";var e={6153:function(e,a,t){var n=t(9242),r=t(3396);function o(e,a,t,n,o,s){const i=(0,r.up)("TheHeader"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(c)],64)}var s=t(7139);const i={class:"header"},c={class:"header__wrapper"},u={class:"header__title"},d={class:"button-switch-color__span"};function l(e,a,t,n,o,l){const p=(0,r.up)("router-link"),_=(0,r.up)("v-icon");return(0,r.wg)(),(0,r.iD)("header",i,[(0,r._)("div",c,[(0,r._)("div",u,[(0,r.Wm)(p,{class:"header__link",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Where in the world?")])),_:1})]),(0,r._)("div",{class:"header__button-switch-color",onClick:a[0]||(a[0]=(...e)=>l.toggleTheme&&l.toggleTheme(...e))},["light"===o.theme?((0,r.wg)(),(0,r.j4)(_,{key:0,name:"md-darkmode-outlined"})):((0,r.wg)(),(0,r.j4)(_,{key:1,name:"md-darkmode"})),(0,r._)("span",d,(0,s.zw)(o.theme)+" Mode",1)])])])}var p={name:"TheHeader",data(){return{theme:"dark"}},methods:{toggleTheme(){this.theme="light"===this.theme?"dark":"light"}},watch:{theme(){document.body.setAttribute("data-theme",this.theme)}},mounted(){this.toggleTheme()}},_=t(89);const h=(0,_.Z)(p,[["render",l]]);var m=h,g={name:"App",components:{TheHeader:m}};const y=(0,_.Z)(g,[["render",o]]);var v=y,C=t(2483);const f={class:"main"},w={key:0,class:"card__wrapper"};function k(e,a,t,n,o,s){const i=(0,r.up)("TheForm"),c=(0,r.up)("TheCard"),u=(0,r.up)("TheLoader");return(0,r.wg)(),(0,r.iD)("main",f,[(0,r.Wm)(i,{optionValue:o.selectedSort,options:o.sortOptions,onUpdateOptionValue:s.updateOptionValue,searchValue:o.searchValue,onUpdateSearchValue:s.updateSearchValue},null,8,["optionValue","options","onUpdateOptionValue","searchValue","onUpdateSearchValue"]),o.isCountriesLoading?((0,r.wg)(),(0,r.j4)(u,{key:1})):((0,r.wg)(),(0,r.iD)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.searchCountries,(e=>((0,r.wg)(),(0,r.j4)(c,{key:e.name.official,country:e},null,8,["country"])))),128))]))])}const b=e=>((0,r.dD)("data-v-bf126182"),e=e(),(0,r.Cn)(),e),D={class:"form__input-wrapper"},O=["value"],T={class:"form__select-wrapper"},L=["value"],V=b((()=>(0,r._)("option",{disabled:"",value:""},"Filter by Region",-1))),S=["value"];function A(e,a,t,o,i,c){const u=(0,r.up)("v-icon");return(0,r.wg)(),(0,r.iD)("form",{class:"form",onSubmit:a[3]||(a[3]=(0,n.iM)((()=>{}),["prevent"]))},[(0,r._)("div",D,[(0,r.Wm)(u,{name:"hi-solid-search",class:"form__input-icon"}),(0,r._)("input",{class:"form__input",value:t.searchValue,onInput:a[0]||(a[0]=(...e)=>c.changeInput&&c.changeInput(...e)),type:"text",placeholder:"Search for a country..."},null,40,O)]),(0,r._)("div",T,[(0,r._)("select",{class:"form__select",value:t.optionValue,onChange:a[1]||(a[1]=(...e)=>c.changeOption&&c.changeOption(...e))},[V,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.options,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.value,value:e.value},(0,s.zw)(e.name),9,S)))),128))],40,L),(0,r._)("button",{class:"form__select-button",onClick:a[2]||(a[2]=(...e)=>c.changeOption&&c.changeOption(...e))}," ✖ ")])],32)}var j={name:"TheForm",props:{optionValue:{type:String},options:{type:Array,default:()=>[]},searchValue:{type:String}},methods:{changeOption(e=""){this.$emit("updateOptionValue",e.target.value)},changeInput(e=""){this.$emit("updateSearchValue",e.target.value)}}};const z=(0,_.Z)(j,[["render",A],["__scopeId","data-v-bf126182"]]);var B=z;t(7658),t(2087);const I=e=>((0,r.dD)("data-v-326ffe36"),e=e(),(0,r.Cn)(),e),$=["src","alt"],H={class:"card__description"},U={class:"card__title"},Z={class:"card__population"},q=I((()=>(0,r._)("span",{class:"card__span"},"Population:",-1))),W={class:"card__region"},Y=I((()=>(0,r._)("span",{class:"card__span"},"Region:",-1))),x={key:0,class:"card__capital"},K=I((()=>(0,r._)("span",{class:"card__span"},"Capital:",-1)));function P(e,a,t,n,o,i){return(0,r.wg)(),(0,r.iD)("div",{class:"card",onClick:a[0]||(a[0]=a=>e.$router.push(`/country/${t.country.name.common}`))},[(0,r._)("img",{class:"card__flag",src:t.country.flags?.svg,alt:t.country.flags?.alt},null,8,$),(0,r._)("div",H,[(0,r._)("div",U,(0,s.zw)(t.country.name.common),1),(0,r._)("div",Z,[q,(0,r.Uk)(" "+(0,s.zw)(t.country.population),1)]),(0,r._)("div",W,[Y,(0,r.Uk)(" "+(0,s.zw)(t.country.region),1)]),t.country.capital?((0,r.wg)(),(0,r.iD)("div",x,[K,(0,r.Uk)(" "+(0,s.zw)(t.country.capital[0]),1)])):(0,r.kq)("",!0)])])}var E={name:"TheCard",props:{country:{type:Object}}};const F=(0,_.Z)(E,[["render",P],["__scopeId","data-v-326ffe36"]]);var N=F;const M={class:"loader"};function R(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("span",M)}var G={name:"TheLoader"};const X=(0,_.Z)(G,[["render",R],["__scopeId","data-v-1b183da0"]]);var J=X,Q={name:"HomeView",components:{TheForm:B,TheCard:N,TheLoader:J},data(){return{dataCountries:"",isCountriesLoading:!1,selectedSort:"",sortOptions:[{value:"Africa",name:"Africa"},{value:"Americas",name:"America"},{value:"Asia",name:"Asia"},{value:"Europe",name:"Europe"},{value:"Oceania",name:"Oceania"}],searchValue:""}},methods:{async getDataCountries(){this.isCountriesLoading=!0;try{const e=await fetch("https://restcountries.com/v3.1/all"),a=await e.json();this.dataCountries=a}catch(e){console.error(e)}finally{this.isCountriesLoading=!1}},updateOptionValue(e){this.selectedSort=e},updateSearchValue(e){this.searchValue=e}},mounted(){this.getDataCountries()},computed:{sortedCountries(){return""===this.selectedSort?this.dataCountries:[...this.dataCountries].filter((e=>e.region===this.selectedSort))},searchCountries(){return""===this.searchValue?this.sortedCountries:this.sortedCountries.filter((e=>e.name.common.toLowerCase().includes(this.searchValue.toLowerCase())))}}};const ee=(0,_.Z)(Q,[["render",k],["__scopeId","data-v-740abfb3"]]);var ae=ee;const te=e=>((0,r.dD)("data-v-6ee9b1c2"),e=e(),(0,r.Cn)(),e),ne={class:"main"},re={key:0,class:"card__wrapper"},oe=te((()=>(0,r._)("button",{class:"card__button"},"Back",-1)));function se(e,a,t,n,o,s){const i=(0,r.up)("v-icon"),c=(0,r.up)("TheCardAbout"),u=(0,r.up)("TheLoader");return(0,r.wg)(),(0,r.iD)("main",ne,[o.isCountryLoading?((0,r.wg)(),(0,r.j4)(u,{key:1})):((0,r.wg)(),(0,r.iD)("div",re,[(0,r._)("div",{class:"card__button_wrapper",onClick:a[0]||(a[0]=a=>e.$router.go(-1))},[(0,r.Wm)(i,{name:"co-arrow-left",class:"card__button_icon"}),oe]),(0,r.Wm)(c,{dataCountry:o.dataCountry},null,8,["dataCountry"])]))])}const ie=e=>((0,r.dD)("data-v-ccbf0f8c"),e=e(),(0,r.Cn)(),e),ce={class:"card"},ue=["src","alt"],de={class:"card__description"},le={class:"card__title"},pe={class:"card__container"},_e={class:"card__column"},he={key:0,class:"card__native-name"},me=ie((()=>(0,r._)("span",{class:"card__span"},"Native Name: ",-1))),ge={class:"card__population"},ye=ie((()=>(0,r._)("span",{class:"card__span"},"Population: ",-1))),ve={class:"card__region"},Ce=ie((()=>(0,r._)("span",{class:"card__span"},"Region: ",-1))),fe={key:1,class:"card__sub-region"},we=ie((()=>(0,r._)("span",{class:"card__span"},"Sub Region: ",-1))),ke={key:2,class:"card__capital"},be=ie((()=>(0,r._)("span",{class:"card__span"},"Capital: ",-1))),De={class:"card__column"},Oe={key:0,class:"card__top-Level-domain"},Te=ie((()=>(0,r._)("span",{class:"card__span"},"Top Level Domain: ",-1))),Le={key:1,class:"card__currencies"},Ve=ie((()=>(0,r._)("span",{class:"card__span"},"Currencies: ",-1))),Se={key:2,class:"card__languages"},Ae=ie((()=>(0,r._)("span",{class:"card__span"},"Languages: ",-1))),je={class:"card__border-countries"},ze=ie((()=>(0,r._)("span",{class:"card__span"},"Border Countries: ",-1))),Be={key:0};function Ie(e,a,t,n,o,i){const c=(0,r.up)("TheBorderCountry");return(0,r.wg)(),(0,r.iD)("div",ce,[(0,r._)("img",{class:"card__flag",src:t.dataCountry.flags?.svg,alt:t.dataCountry.flags?.alt},null,8,ue),(0,r._)("div",de,[(0,r._)("div",le,(0,s.zw)(e.$route.params.name),1),(0,r._)("div",pe,[(0,r._)("div",_e,[t.dataCountry.name?.nativeName?((0,r.wg)(),(0,r.iD)("div",he,[me,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.name?.nativeName,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e},(0,s.zw)(e.official+" "),1)))),128))])):(0,r.kq)("",!0),(0,r._)("div",ge,[ye,(0,r.Uk)(" "+(0,s.zw)(t.dataCountry.population),1)]),(0,r._)("div",ve,[Ce,(0,r.Uk)(" "+(0,s.zw)(t.dataCountry.region),1)]),t.dataCountry.subregion?((0,r.wg)(),(0,r.iD)("div",fe,[we,(0,r.Uk)((0,s.zw)(t.dataCountry.subregion),1)])):(0,r.kq)("",!0),t.dataCountry.capital?((0,r.wg)(),(0,r.iD)("div",ke,[be,(0,r.Uk)(" "+(0,s.zw)(t.dataCountry.capital[0]),1)])):(0,r.kq)("",!0)]),(0,r._)("div",De,[t.dataCountry.tld?((0,r.wg)(),(0,r.iD)("div",Oe,[Te,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.tld,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e},(0,s.zw)(e+" "),1)))),128))])):(0,r.kq)("",!0),t.dataCountry.currencies?((0,r.wg)(),(0,r.iD)("div",Le,[Ve,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.currencies,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e},(0,s.zw)(e.name+" "),1)))),128))])):(0,r.kq)("",!0),t.dataCountry.languages?((0,r.wg)(),(0,r.iD)("div",Se,[Ae,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.languages,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e},(0,s.zw)(e+" "),1)))),128))])):(0,r.kq)("",!0)])]),(0,r._)("div",je,[ze,t.dataCountry.borders?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",Be,"No border country")),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.borders,(e=>((0,r.wg)(),(0,r.j4)(c,{key:e,codeBorderCountry:e},null,8,["codeBorderCountry"])))),128))])])])}function $e(e,a,t,n,o,i){return(0,r.wg)(),(0,r.iD)("span",{class:"card__span-border",onClick:a[0]||(a[0]=a=>e.$router.push(`/country/${o.nameBorderCountry}`))},(0,s.zw)(o.nameBorderCountry),1)}var He={name:"TheBorderCountry",data(){return{nameBorderCountry:""}},props:{codeBorderCountry:{type:String}},methods:{async getBorderCountry(e){try{const a=await fetch(`https://restcountries.com/v3.1/alpha/${e}`),t=await a.json();this.nameBorderCountry=t[0].name.common}catch(a){console.error(a)}}},mounted(){this.getBorderCountry(this.codeBorderCountry)}};const Ue=(0,_.Z)(He,[["render",$e],["__scopeId","data-v-102a64f6"]]);var Ze=Ue,qe={name:"TheCardAbout",components:{TheBorderCountry:Ze},data(){return{}},props:{dataCountry:{type:Object,default:()=>{}}}};const We=(0,_.Z)(qe,[["render",Ie],["__scopeId","data-v-ccbf0f8c"]]);var Ye=We,xe={name:"AboutView",components:{TheLoader:J,TheCardAbout:Ye},data(){return{isCountryLoading:!1,dataCountry:[]}},methods:{async getDataCountry(e){this.isCountryLoading=!0;try{const a=await fetch(`https://restcountries.com/v3.1/name/${e}`),t=await a.json();this.dataCountry=t[0]}catch(a){console.error(a)}finally{this.isCountryLoading=!1}}},mounted(){this.getDataCountry(this.$route.params.name)},watch:{$route(){this.getDataCountry(this.$route.params.name)}}};const Ke=(0,_.Z)(xe,[["render",se],["__scopeId","data-v-6ee9b1c2"]]);var Pe=Ke;const Ee=[{path:"/",name:"home",component:ae},{path:"/country/:name",name:"about",component:Pe}],Fe=(0,C.p7)({routes:Ee,history:(0,C.PO)("/wiki-countries/")});var Ne=Fe,Me=t(65),Re=(0,Me.MT)({state:()=>({dataCountries:"",isLoading:!1,selectedSort:"",sortOptions:[{value:"Africa",name:"Africa"},{value:"Americas",name:"America"},{value:"Asia",name:"Asia"},{value:"Europe",name:"Europe"},{value:"Oceania",name:"Oceania"}],searchCountry:""}),getters:{sortedCountries(e){return""===e.selectedSort?e.dataCountries:[...e.dataCountries].filter((a=>a.region===e.selectedSort))},searchCountries(e,a){return""===e.searchCountry?e.sortedCountries:a.sortedCountries.filter((a=>a.name.common.toLowerCase().includes(e.searchCountry.toLowerCase())))}},mutations:{setDataCountries(e,a){e.dataCountries=a},setIsLoading(e,a){e.isLoading=a},setSelectedSort(e,a){e.selectedSort=a},setSearchCountry(e,a){e.searchCountry=a}},actions:{async getDataCountries({commit:e}){try{e("setIsLoading",!0);const a=await fetch("https://restcountries.com/v3.1/all"),t=await a.json();console.log(t),e("setDataCountries",t)}catch(a){console.error(a)}finally{e("setIsLoading",!1)}}}}),Ge=t(4463),Xe=t(1799),Je=t(1479),Qe=t(2596);(0,Ge.Go)(Xe.Pge,Xe.Ire,Je.XDL,Qe.gou),(0,n.ri)(v).use(Re).use(Ne).component("v-icon",Ge.xt).mount("#app")}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var o=a[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,r,o){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var u=r();void 0!==u&&(a=u)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var r,o,s=n[0],i=n[1],c=n[2],u=0;if(s.some((function(a){return 0!==e[a]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var d=c(t)}for(a&&a(n);u<s.length;u++)o=s[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=self["webpackChunkwiki_countries"]=self["webpackChunkwiki_countries"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6153)}));n=t.O(n)})();
//# sourceMappingURL=app.a603a875.js.map