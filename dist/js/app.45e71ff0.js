(function(){"use strict";var a={7750:function(a,e,t){var n=t(9242),r=t(3396);function o(a,e,t,n,o,s){const i=(0,r.up)("TheHeader"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(c)],64)}var s=t(7139);const i={class:"header"},c={class:"header__wrapper"},u={class:"header__title"},l={class:"button-switch-color__span"};function d(a,e,t,n,o,d){const p=(0,r.up)("router-link"),_=(0,r.up)("v-icon");return(0,r.wg)(),(0,r.iD)("header",i,[(0,r._)("div",c,[(0,r._)("div",u,[(0,r.Wm)(p,{class:"header__link",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Where in the world?")])),_:1})]),(0,r._)("div",{class:"header__button-switch-color",onClick:e[0]||(e[0]=(...a)=>d.toggleTheme&&d.toggleTheme(...a))},["light"===o.theme?((0,r.wg)(),(0,r.j4)(_,{key:0,name:"md-darkmode-outlined"})):((0,r.wg)(),(0,r.j4)(_,{key:1,name:"md-darkmode"})),(0,r._)("span",l,(0,s.zw)(o.theme)+" Mode",1)])])])}var p={name:"TheHeader",data(){return{theme:"dark"}},methods:{toggleTheme(){this.theme="light"===this.theme?"dark":"light"}},watch:{theme(){document.body.setAttribute("data-theme",this.theme)}},mounted(){this.toggleTheme()}},_=t(89);const h=(0,_.Z)(p,[["render",d]]);var m=h,g={name:"App",components:{TheHeader:m}};const v=(0,_.Z)(g,[["render",o]]);var f=v,y=t(2483);const w={class:"main"},C={key:0,class:"card__wrapper"};function b(a,e,t,n,o,s){const i=(0,r.up)("TheForm"),c=(0,r.up)("TheCard"),u=(0,r.up)("TheLoader");return(0,r.wg)(),(0,r.iD)("main",w,[(0,r.Wm)(i,{optionValue:o.selectedSort,options:o.sortOptions,onUpdateOptionValue:s.updateOptionValue,searchValue:o.searchValue,onUpdateSearchValue:s.updateSearchValue},null,8,["optionValue","options","onUpdateOptionValue","searchValue","onUpdateSearchValue"]),o.isCountriesLoading?((0,r.wg)(),(0,r.j4)(u,{key:1})):((0,r.wg)(),(0,r.iD)("div",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.searchCountries,(a=>((0,r.wg)(),(0,r.j4)(c,{key:a.name.official,country:a},null,8,["country"])))),128))]))])}const k=a=>((0,r.dD)("data-v-bf126182"),a=a(),(0,r.Cn)(),a),D={class:"form__input-wrapper"},O=["value"],L={class:"form__select-wrapper"},T=["value"],V=k((()=>(0,r._)("option",{disabled:"",value:""},"Filter by Region",-1))),S=["value"];function A(a,e,t,o,i,c){const u=(0,r.up)("v-icon");return(0,r.wg)(),(0,r.iD)("form",{class:"form",onSubmit:e[3]||(e[3]=(0,n.iM)((()=>{}),["prevent"]))},[(0,r._)("div",D,[(0,r.Wm)(u,{name:"hi-solid-search",class:"form__input-icon"}),(0,r._)("input",{class:"form__input",value:t.searchValue,onInput:e[0]||(e[0]=(...a)=>c.changeInput&&c.changeInput(...a)),type:"text",placeholder:"Search for a country..."},null,40,O)]),(0,r._)("div",L,[(0,r._)("select",{class:"form__select",value:t.optionValue,onChange:e[1]||(e[1]=(...a)=>c.changeOption&&c.changeOption(...a))},[V,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.options,(a=>((0,r.wg)(),(0,r.iD)("option",{key:a.value,value:a.value},(0,s.zw)(a.name),9,S)))),128))],40,T),(0,r._)("button",{class:"form__select-button",onClick:e[2]||(e[2]=(...a)=>c.changeOption&&c.changeOption(...a))}," ✖ ")])],32)}var j={name:"TheForm",props:{optionValue:{type:String},options:{type:Array,default:()=>[]},searchValue:{type:String}},methods:{changeOption(a=""){this.$emit("updateOptionValue",a.target.value)},changeInput(a=""){this.$emit("updateSearchValue",a.target.value)}}};const z=(0,_.Z)(j,[["render",A],["__scopeId","data-v-bf126182"]]);var I=z;t(7658),t(2087);const H=a=>((0,r.dD)("data-v-326ffe36"),a=a(),(0,r.Cn)(),a),U=["src","alt"],W={class:"card__description"},Y={class:"card__title"},Z={class:"card__population"},$=H((()=>(0,r._)("span",{class:"card__span"},"Population:",-1))),x={class:"card__region"},K=H((()=>(0,r._)("span",{class:"card__span"},"Region:",-1))),P={key:0,class:"card__capital"},E=H((()=>(0,r._)("span",{class:"card__span"},"Capital:",-1)));function F(a,e,t,n,o,i){return(0,r.wg)(),(0,r.iD)("div",{class:"card",onClick:e[0]||(e[0]=e=>a.$router.push(`/country/${t.country.name.common}`))},[(0,r._)("img",{class:"card__flag",src:t.country.flags?.svg,alt:t.country.flags?.alt},null,8,U),(0,r._)("div",W,[(0,r._)("div",Y,(0,s.zw)(t.country.name.common),1),(0,r._)("div",Z,[$,(0,r.Uk)(" "+(0,s.zw)(t.country.population),1)]),(0,r._)("div",x,[K,(0,r.Uk)(" "+(0,s.zw)(t.country.region),1)]),t.country.capital?((0,r.wg)(),(0,r.iD)("div",P,[E,(0,r.Uk)(" "+(0,s.zw)(t.country.capital[0]),1)])):(0,r.kq)("",!0)])])}var M={name:"TheCard",props:{country:{type:Object}}};const R=(0,_.Z)(M,[["render",F],["__scopeId","data-v-326ffe36"]]);var N=R;const q={class:"loader"};function B(a,e,t,n,o,s){return(0,r.wg)(),(0,r.iD)("span",q)}var G={name:"TheLoader"};const X=(0,_.Z)(G,[["render",B],["__scopeId","data-v-1b183da0"]]);var J=X,Q={name:"HomeView",components:{TheForm:I,TheCard:N,TheLoader:J},data(){return{dataCountries:"",isCountriesLoading:!1,selectedSort:"",sortOptions:[{value:"Africa",name:"Africa"},{value:"Americas",name:"America"},{value:"Asia",name:"Asia"},{value:"Europe",name:"Europe"},{value:"Oceania",name:"Oceania"}],searchValue:""}},methods:{async getDataCountries(){this.isCountriesLoading=!0;try{const a=await fetch("https://restcountries.com/v3.1/all"),e=await a.json();this.dataCountries=e}catch(a){console.error(a)}finally{this.isCountriesLoading=!1}},updateOptionValue(a){this.selectedSort=a},updateSearchValue(a){this.searchValue=a}},mounted(){this.getDataCountries()},computed:{sortedCountries(){return""===this.selectedSort?this.dataCountries:[...this.dataCountries].filter((a=>a.region===this.selectedSort))},searchCountries(){return""===this.searchValue?this.sortedCountries:this.sortedCountries.filter((a=>a.name.common.toLowerCase().includes(this.searchValue.toLowerCase())))}}};const aa=(0,_.Z)(Q,[["render",b],["__scopeId","data-v-740abfb3"]]);var ea=aa;const ta=a=>((0,r.dD)("data-v-a6626494"),a=a(),(0,r.Cn)(),a),na={class:"main"},ra={key:0,class:"card__wrapper"},oa=ta((()=>(0,r._)("button",{class:"card__button"},"Back",-1)));function sa(a,e,t,n,o,s){const i=(0,r.up)("v-icon"),c=(0,r.up)("TheCardAbout"),u=(0,r.up)("TheLoader");return(0,r.wg)(),(0,r.iD)("main",na,[o.isCountryLoading?((0,r.wg)(),(0,r.j4)(u,{key:1})):((0,r.wg)(),(0,r.iD)("div",ra,[(0,r._)("div",{class:"card__button_wrapper",onClick:e[0]||(e[0]=e=>a.$router.push("/"))},[(0,r.Wm)(i,{name:"co-arrow-left",class:"card__button_icon"}),oa]),(0,r.Wm)(c,{dataCountry:o.dataCountry},null,8,["dataCountry"])]))])}const ia=a=>((0,r.dD)("data-v-5899a507"),a=a(),(0,r.Cn)(),a),ca={class:"card"},ua=["src","alt"],la={class:"card__description"},da={class:"card__title"},pa={class:"card__container"},_a={class:"card__column"},ha={class:"card__native-name"},ma=ia((()=>(0,r._)("span",{class:"card__span"},"Native Name: ",-1))),ga={class:"card__population"},va=ia((()=>(0,r._)("span",{class:"card__span"},"Population: ",-1))),fa={class:"card__region"},ya=ia((()=>(0,r._)("span",{class:"card__span"},"Region: ",-1))),wa={class:"card__sub-region"},Ca=ia((()=>(0,r._)("span",{class:"card__span"},"Sub Region: ",-1))),ba={key:0,class:"card__capital"},ka=ia((()=>(0,r._)("span",{class:"card__span"},"Capital: ",-1))),Da={class:"card__column"},Oa={class:"card__top-Level-domain"},La=ia((()=>(0,r._)("span",{class:"card__span"},"Top Level Domain: ",-1))),Ta={class:"card__currencies:"},Va=ia((()=>(0,r._)("span",{class:"card__span"},"Currencies: ",-1))),Sa={class:"card__languages"},Aa=ia((()=>(0,r._)("span",{class:"card__span"},"Languages: ",-1))),ja={class:"card__border-countries"},za=ia((()=>(0,r._)("span",{class:"card__span"},"Border Countries: ",-1)));function Ia(a,e,t,n,o,i){return(0,r.wg)(),(0,r.iD)("div",ca,[(0,r._)("img",{class:"card__flag",src:t.dataCountry.flags?.svg,alt:t.dataCountry.flags?.alt},null,8,ua),(0,r._)("div",la,[(0,r._)("div",da,(0,s.zw)(a.$route.params.name),1),(0,r._)("div",pa,[(0,r._)("div",_a,[(0,r._)("div",ha,[ma,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.name?.nativeName,(a=>((0,r.wg)(),(0,r.iD)("span",{key:a},(0,s.zw)(a.official+" "),1)))),128))]),(0,r._)("div",ga,[va,(0,r.Uk)(" "+(0,s.zw)(t.dataCountry.population),1)]),(0,r._)("div",fa,[ya,(0,r.Uk)(" "+(0,s.zw)(t.dataCountry.region),1)]),(0,r._)("div",wa,[Ca,(0,r.Uk)((0,s.zw)(t.dataCountry.subregion),1)]),t.dataCountry.capital?((0,r.wg)(),(0,r.iD)("div",ba,[ka,(0,r.Uk)(" "+(0,s.zw)(t.dataCountry.capital[0]),1)])):(0,r.kq)("",!0)]),(0,r._)("div",Da,[(0,r._)("div",Oa,[La,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.tld,(a=>((0,r.wg)(),(0,r.iD)("span",{key:a},(0,s.zw)(a+" "),1)))),128))]),(0,r._)("div",Ta,[Va,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.currencies,(a=>((0,r.wg)(),(0,r.iD)("span",{key:a},(0,s.zw)(a.name+" "),1)))),128))]),(0,r._)("div",Sa,[Aa,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.languages,(a=>((0,r.wg)(),(0,r.iD)("span",{key:a},(0,s.zw)(a+" "),1)))),128))])])]),(0,r._)("div",ja,[za,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataCountry.borders,(a=>((0,r.wg)(),(0,r.iD)("span",{class:"card__span-border",key:a},(0,s.zw)(a),1)))),128))])])])}var Ha={name:"TheCardAbout",data(){return{}},props:{dataCountry:{type:Object,default:()=>{}}}};const Ua=(0,_.Z)(Ha,[["render",Ia],["__scopeId","data-v-5899a507"]]);var Wa=Ua,Ya={name:"AboutView",components:{TheLoader:J,TheCardAbout:Wa},data(){return{isCountryLoading:!1,dataCountry:[]}},methods:{async getDataCountry(){this.isCountryLoading=!0;try{const a=await fetch(`https://restcountries.com/v3.1/name/${this.$route.params.name}`),e=await a.json();this.dataCountry=e[0]}catch(a){console.error(a)}finally{this.isCountryLoading=!1}}},mounted(){this.getDataCountry()}};const Za=(0,_.Z)(Ya,[["render",sa],["__scopeId","data-v-a6626494"]]);var $a=Za;const xa=[{path:"/",name:"home",component:ea},{path:"/country/:name",name:"about",component:$a}],Ka=(0,y.p7)({routes:xa,history:(0,y.PO)("/wiki-countries/")});var Pa=Ka,Ea=t(65),Fa=(0,Ea.MT)({state:()=>({dataCountries:"",isLoading:!1,selectedSort:"",sortOptions:[{value:"Africa",name:"Africa"},{value:"Americas",name:"America"},{value:"Asia",name:"Asia"},{value:"Europe",name:"Europe"},{value:"Oceania",name:"Oceania"}],searchCountry:""}),getters:{sortedCountries(a){return""===a.selectedSort?a.dataCountries:[...a.dataCountries].filter((e=>e.region===a.selectedSort))},searchCountries(a,e){return""===a.searchCountry?a.sortedCountries:e.sortedCountries.filter((e=>e.name.common.toLowerCase().includes(a.searchCountry.toLowerCase())))}},mutations:{setDataCountries(a,e){a.dataCountries=e},setIsLoading(a,e){a.isLoading=e},setSelectedSort(a,e){a.selectedSort=e},setSearchCountry(a,e){a.searchCountry=e}},actions:{async getDataCountries({commit:a}){try{a("setIsLoading",!0);const e=await fetch("https://restcountries.com/v3.1/all"),t=await e.json();console.log(t),a("setDataCountries",t)}catch(e){console.error(e)}finally{a("setIsLoading",!1)}}}}),Ma=t(4463),Ra=t(1799),Na=t(1479),qa=t(2596);(0,Ma.Go)(Ra.Pge,Ra.Ire,Na.XDL,qa.gou),(0,n.ri)(f).use(Fa).use(Pa).component("v-icon",Ma.xt).mount("#app")}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return a[n].call(o.exports,o,o.exports,t),o.exports}t.m=a,function(){var a=[];t.O=function(e,n,r,o){if(!n){var s=1/0;for(l=0;l<a.length;l++){n=a[l][0],r=a[l][1],o=a[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(t.O).every((function(a){return t.O[a](n[c])}))?n.splice(c--,1):(i=!1,o<s&&(s=o));if(i){a.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=a.length;l>0&&a[l-1][2]>o;l--)a[l]=a[l-1];a[l]=[n,r,o]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,n){var r,o,s=n[0],i=n[1],c=n[2],u=0;if(s.some((function(e){return 0!==a[e]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var l=c(t)}for(e&&e(n);u<s.length;u++)o=s[u],t.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return t.O(l)},n=self["webpackChunkwiki_countries"]=self["webpackChunkwiki_countries"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(7750)}));n=t.O(n)})();
//# sourceMappingURL=app.45e71ff0.js.map