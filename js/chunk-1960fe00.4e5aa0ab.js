(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1960fe00"],{3061:function(t,e,a){"use strict";a("6900")},6900:function(t,e,a){},a8da:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"deposit-borrow-block"},["borrow"===t.actionType?e("h3",[t._v("Deposit ETC")]):t._e(),"repay"===t.actionType?e("h3",[t._v("Withdraw ETC")]):t._e(),e("div",{staticClass:"input-wrap"},[e("ValueInput",{attrs:{max:t.maxMainValue,parentValue:t.mainValue,error:t.mainValueError,valueName:t.mainValueTokenName},on:{onchange:t.updateMainValue}})],1),e("div",{staticClass:"action-wrap"},[e("button",{staticClass:"btn action-btn",attrs:{disabled:"Nothing to do"===t.actionBtnText},on:{click:t.actionHandler}},[t._v(" "+t._s(t.actionBtnText)+" ")])])])},r=[];const s=()=>a.e("chunk-6bc0cf3f").then(a.bind(null,"6618"));var n={props:{balance:{required:!0},pairBalance:{require:!0},tokenName:{type:String,required:!0},tokenToUsd:{type:Number,default:1},tokenPairToUsd:{type:Number,default:1},tokenPairName:{type:String,required:!0},userTotalCollateral:{required:!0},userTotalBorrowed:{required:!0},actionType:{type:String,required:!0},tokenDecimals:{type:Number,required:!0},tokenPairDecimals:{type:Number,required:!0},ltv:{type:Number,required:!0},isUpdatePrice:{type:Boolean}},data(){return{userBalance:null,mainValue:"",mainValueError:"",pairValue:"",pairValueError:"",percentValue:"",updatePrice:!1,multiplier:1,slipage:1,showLeverage:!1}},watch:{actionType(){this.clearData()}},computed:{maxMainValue(){return"repay"===this.actionType?this.userBalance:(this.actionType,0)},mainValueTokenName(){return"borrow"===this.actionType?"ETC":"repay"===this.actionType?"WETC":"XX"},pairValueDecimals(){return"borrow"===this.actionType?this.tokenPairDecimals:"repay"===this.actionType?this.tokenDecimals:18},mainValueDecimals(){return"borrow"===this.actionType?this.tokenDecimals:"repay"===this.actionType?this.tokenPairDecimals:18},parsedPairBalance(){return this.$ethers.utils.formatUnits(this.pairBalance.toString(),this.tokenPairDecimals)},maxPairValue(){if("borrow"===this.actionType){let t,e;return this.mainValue?(t=this.mainValue/this.tokenToUsd,e=t/100*(this.ltv-1)):(t=this.userTotalCollateral/this.tokenToUsd,e=t/100*(this.ltv-1)-this.userTotalBorrowed),e}if("repay"===this.actionType){const t=parseFloat(+this.userTotalCollateral).toFixed(20);let e=new RegExp("^-?\\d+(?:.\\d{0,"+(this.pairValueDecimals||-1)+"})?");return t.toString().match(e)[0]}return 0},signer(){return this.$store.getters.getSigner},actionBtnText(){return this.mainValueError?"Nothing to do":"borrow"===this.actionType&&this.mainValue?"ETC to WETC":"repay"===this.actionType&&this.mainValue?"WETC to ETC":"Nothing to do"}},methods:{toFixed(t,e){let a=new RegExp("^-?\\d+(?:.\\d{0,"+(e||-1)+"})?");return t.toString().match(a)[0]},actionHandler(){if(this.mainValue){if("borrow"===this.actionType){const t=this.$ethers.utils.parseUnits(this.mainValue.toString(),this.mainValueDecimals),e={amount:t,updatePrice:this.updatePrice};this.$emit("depositeEtc",e)}if("repay"===this.actionType){const t=this.$ethers.utils.parseUnits(this.toFixed(this.mainValue,6),this.mainValueDecimals),e={amount:t,updatePrice:this.updatePrice};this.$emit("withdrawEtc",e)}return!1}if(this.pairValue){if("borrow"===this.actionType){const t=this.$ethers.utils.parseUnits(this.toFixed(this.pairValue,6),this.pairValueDecimals),e={amount:t,updatePrice:this.updatePrice};if(this.multiplier>1)return e.amount=this.toFixed(this.pairValue,6),this.multiplierHandle(e,"borrowMultiple"),!1;this.$emit("borrow",e)}if("repay"===this.actionType){const t=this.$ethers.utils.parseUnits(this.pairValue.toString(),this.pairValueDecimals),e={amount:t,updatePrice:this.updatePrice};this.$emit("removeCollateral",e)}return!1}},multiplierHandle(t,e){const a=parseFloat(this.percentValue);if(!a)return!1;const i=(100-this.slipage)/100,r=a/100;let s=.995*t.amount,n=0;for(let c=this.multiplier;c>0;c--)n+=+s,s*=r;const o=this.$ethers.utils.parseUnits(this.toFixed(n,this.pairValueDecimals),this.pairValueDecimals),l=n*this.tokenToUsd*i,u=this.$ethers.utils.parseUnits(this.toFixed(l,this.mainValueDecimals),this.mainValueDecimals),h={...t,amount:o,minExpected:u};this.$emit(e,h)},clearData(){this.mainValue="",this.mainValueError="",this.pairValue="",this.pairValueError="",this.percentValue=""},updateMainValue(t){if(this.mainValue=t,"borrow"===this.actionType&&parseFloat(t)>1e4)return this.mainValueError="The value ETC cannot be greater than 10000, take care of your assets",!1;if("repay"===this.actionType&&parseFloat(t)>parseFloat(this.maxMainValue))return this.mainValueError="The value cannot be greater than "+this.maxMainValue,!1;if(this.mainValueError="","repay"===this.actionType){const e=this.pairValue/this.maxPairValue*100,a=t/this.userTotalBorrowed*100,i=this.userTotalBorrowed/this.tokenPairToUsd,r=this.userTotalCollateral/this.tokenToUsd,s=r-i,n=s/r*100;return e<=a&&e<n?(this.pairValueError="",!1):(this.pairValueError="You have insufficient collateral. Please enter a smaller amount or repay more.",!1)}},async getUserBalance(){const t=this.$ethers.utils.formatUnits(this.balance.toString(),this.tokenDecimals);this.userBalance=t}},async created(){await this.getUserBalance()},components:{ValueInput:s}},o=n,l=(a("3061"),a("2877")),u=Object(l["a"])(o,i,r,!1,null,"5ee7afc0",null);e["default"]=u.exports}}]);