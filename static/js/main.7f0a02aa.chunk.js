(this.webpackJsonpminttoken=this.webpackJsonpminttoken||[]).push([[0],{263:function(e,t,a){},306:function(e,t,a){"use strict";(function(e){var n=a(38),i=a(39),s=a(32),r=a(41),l=a(40),o=a(0),c=a.n(o),u=a(23),p=a.n(u),m=a(24),y=a.n(m),d=a(22),f=a.n(d),b=a(73),h=a.n(b),v=(a(615),a(309)),E=a(308),T=a.n(E),g=a(50),C=a(44),k=function(t){Object(r.a)(o,t);var a=Object(l.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e)).theIPFS=null,t.theJson=null,t.state={ipfsPath:"",balance:0,name:"",description:""},t.onSubmit=t.onSubmit.bind(Object(s.a)(t)),t.onChangeInput=t.onChangeInput.bind(Object(s.a)(t)),t}return Object(i.a)(o,[{key:"componentDidMount",value:function(){this.theIPFS=T()({host:C.a.ipfsURL,port:C.a.ipfsPort,protocol:C.a.ipfsScheme})}},{key:"uploadImage",value:function(e){var t=this,a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var e=a.result;t.theIPFS.add(e).then((function(e){t.setState({ipfsPath:e.path})}))},a.readAsArrayBuffer(e[0])}},{key:"onSubmit",value:function(){var t=this,a=e(JSON.stringify(this.theJson),"utf-8");this.theIPFS.add(a).then((function(e){e&&e.path&&g.a.mint721(t.props.address,e.path,(function(e){t.state.nfts.push(e),setTimeout((function(){t.getBalance()}),15e3)}))}))}},{key:"getBalance",value:function(){var e=this;return g.a.get721BalanceOf(this.props.address,(function(t){e.setState({balance:t})})),0}},{key:"onChangeInput",value:function(e){switch(e.target.id){case"name":this.setState({name:e.target.value});break;case"description":this.setState({description:e.target.value})}}},{key:"makeJson",value:function(){return this.theJson={name:this.state.name,description:this.state.description,image:this.state.ipfsPath},JSON.stringify(this.theJson)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"tableContainer"},c.a.createElement("div",{style:{marginBottom:"1rem"}},c.a.createElement(p.a,{animate:!0,className:"description"},"YOUR CONTRACT")),c.a.createElement("div",null,c.a.createElement(f.a,{animate:!0,level:3,corners:4,layer:"primary"},c.a.createElement(p.a,{animate:!0,className:"label"},this.props.address))),c.a.createElement("div",{className:"block"},c.a.createElement(h.a,{animate:!0,layer:"success"}),c.a.createElement("div",{className:"full"},c.a.createElement(f.a,{animate:!0,level:3,corners:4,layer:"primary"},c.a.createElement("input",{id:"name",className:"input",type:"text",placeholder:"Token Name",onChange:this.onChangeInput}))),c.a.createElement("div",{className:"full"},c.a.createElement(f.a,{animate:!0,level:3,corners:4,layer:"primary"},c.a.createElement("input",{id:"description",className:"input",type:"text",placeholder:"Description",onChange:this.onChangeInput}))),c.a.createElement("div",null,c.a.createElement(f.a,{animate:!0,level:3,corners:4,layer:"primary"},c.a.createElement(v.a,{onDrop:function(t){e.uploadImage(t)}},(function(e){var t=e.getRootProps,a=e.getInputProps;return c.a.createElement("section",null,c.a.createElement("div",Object.assign({style:{fontSize:"small",padding:"5rem"}},t()),c.a.createElement("input",a()),c.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))})))),c.a.createElement("div",{className:"label"},"IPFS Path: ",this.state.ipfsPath),c.a.createElement("div",{className:"full"},c.a.createElement(f.a,{animate:!0,level:3,corners:4,layer:"primary"},c.a.createElement("div",{className:"output"},this.makeJson()))),c.a.createElement("div",{className:"buttons"},c.a.createElement(y.a,{onClick:this.props.onCancel,animate:!0,layer:"success"},"Cancel"),c.a.createElement(y.a,{disabled:""===this.state.ipfsPath,onClick:this.onSubmit,animate:!0,layer:"success"},"Save")),c.a.createElement(h.a,{animate:!0,layer:"success"})),0!=this.props.address?c.a.createElement("div",{style:{marginTop:"2rem"}},c.a.createElement("div",{className:"label"},"YOUR NFT ASSETS"),c.a.createElement(f.a,{animate:!0,level:3,corners:4,layer:"primary"},c.a.createElement("div",{className:"label"},this.state.balance))):null))}}]),o}(c.a.Component);t.a=k}).call(this,a(7).Buffer)},310:function(e,t,a){e.exports=a(831)},315:function(e,t,a){},316:function(e,t,a){},44:function(e,t,a){"use strict";var n={abi:JSON.parse('[{ "inputs": [ { "internalType": "uint256", "name": "initialSupply", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }]'),abi721:JSON.parse('[ { "inputs": [ { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "baseURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "player", "type": "address" }, { "internalType": "string", "name": "tokenURI", "type": "string" } ], "name": "awardItem", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]'),rpcURL:"http://api.testnet.iotex.one:80",ipfsURL:"localhost",ipfsPort:"5001",ipfsScheme:"http"};t.a=n},452:function(e,t){},453:function(e,t){},485:function(e,t){},487:function(e,t){},499:function(e,t){},50:function(e,t,a){"use strict";var n=a(1),i=a.n(n),s=a(304),r=a(305),l=a.n(r),o=a(162),c=a(44),u={antenna:null,countRetry:0,limitRetry:20,init:function(){this.antenna=new l.a(c.a.rpcURL,{signer:new o.WsSignerPlugin})},getAccounts:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.antenna.iotx.accounts;case 2:if(0!==(null===(t=e.sent)||void 0===t?void 0:t.length)){e.next=6;break}return setTimeout((function(){a.getAccounts()}),1e4),e.abrupt("return");case 6:return e.abrupt("return",t[0]);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),deployContract:function(e,t,a,n,i){var s=this;this.antenna.iotx.deployContract({from:this.getAccounts().address,amount:"0",abi:c.a.abi,data:null,gasLimit:"1000000",gasPrice:"1000000000000"},n,e,t,a).then((function(e){e?s.getReceipt(e,i):(window.alert("No transaction ID."),i("ERROR"))})).catch((function(e){console.error("\u90e8\u7f72\u5931\u8d25\uff1a",e)}))},deployERC721Contract:function(e,t,a){var n=this;this.antenna.iotx.deployContract({from:this.getAccounts().address,amount:"0",abi:c.a.abi721,data:null,gasLimit:"1000000",gasPrice:"1000000000000"},t,e).then((function(e){e?n.getReceipt(e,a):(window.alert("No transaction ID."),a("ERROR"))})).catch((function(e){console.error("\u90e8\u7f72\u5931\u8d25\uff1a",e)}))},mint721:function(e,t,a){this.antenna.iotx.executeContract({contractAddress:e,amount:"0",abi:c.a.abi721,method:"awardItem",gasLimit:"1000000",gasPrice:"1000000000000",from:this.antenna.iotx.accounts[0].address},this.antenna.iotx.accounts[0].address,t).then((function(e){a(e)})).catch((function(e){console.error("\u751f\u6210NTF\u5931\u8d25\uff1a",e)}))},getBalanceOf:function(e,t){this.antenna.iotx.executeContract({contractAddress:e,amount:"0",abi:c.a.abi,method:"balanceOf",gasLimit:"1000000",gasPrice:"1000000000000",from:this.antenna.iotx.accounts[0].address},this.antenna.iotx.accounts[0].address).then((function(e){t(e)}))},get721BalanceOf:function(e,t){this.antenna.iotx.executeContract({contractAddress:e,amount:"0",abi:c.a.abi721,method:"balanceOf",gasLimit:"1000000",gasPrice:"1000000000000",from:this.antenna.iotx.accounts[0].address},this.antenna.iotx.accounts[0].address).then((function(e){t(e)}))},getReceipt:function(e,t){var a=this;this.countRetry>=this.limitRetry&&(this.countRetry=0,window.alert("Cannot get a receipt of the transaction "+e),t("ERROR")),this.countRetry+=1,this.antenna.iotx.getReceiptByAction({actionHash:e}).then((function(n){n&&n.receiptInfo&&n.receiptInfo.receipt&&n.receiptInfo.receipt.contractAddress?(a.countRetry=0,t(n.receiptInfo.receipt.contractAddress)):(console.warn("\u83b7\u53d6\u7684\u4ea4\u6613\u8be6\u60c5\u6570\u636e\u5f02\u5e38\uff1a",n),setTimeout((function(){a.getReceipt(e,t)}),3e3))})).catch((function(n){console.error("\u83b7\u53d6\u4ea4\u6613\u8be6\u60c5\u5931\u8d25\uff1a",n),setTimeout((function(){a.getReceipt(e,t)}),3e3)}))}};t.a=u},501:function(e,t){},554:function(e,t){},556:function(e,t){},562:function(e,t){},613:function(e,t,a){},614:function(e,t,a){},615:function(e,t,a){},636:function(e,t){},831:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(112),r=a.n(s),l=(a(315),a(165)),o=(a(316),a(163)),c=a(161),u=a.n(c),p=a(24),m=a.n(p),y=a(50),d=a(38),f=a(39),b=a(32),h=a(41),v=a(40),E=a(23),T=a.n(E),g=a(22),C=a.n(g),k=(a(263),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:"",symbol:"",decimals:"18",supply:""},n.onChangeInput=n.onChangeInput.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n}return Object(f.a)(a,[{key:"checkInput",value:function(){return""!=this.state.name&&""!=this.state.symbol&&""!=this.state.decimals&&""!=this.state.supply}},{key:"onChangeInput",value:function(e){var t=0;switch(e.target.id){case"name":this.setState({name:e.target.value});break;case"symbol":this.setState({symbol:e.target.value});break;case"decimals":(t=parseInt(e.target.value))?this.setState({decimals:String(t)}):this.setState({decimals:"18"});break;case"supply":(t=parseInt(e.target.value))?this.setState({supply:String(t)}):this.setState({supply:"1000000000000000"})}}},{key:"onSubmit",value:function(){this.props.onSubmit(this.state.name,this.state.symbol,this.state.decimals,this.state.supply)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(T.a,{animate:!0,className:"h2"},"Welcome to Token Creation Wizard"),i.a.createElement("div",{className:"tableContainer"},i.a.createElement("table",{className:"table"},i.a.createElement("tr",null,i.a.createElement("td",{width:"40%",className:"tr"},i.a.createElement(C.a,{animate:!0,level:3,corners:4,layer:"primary"},i.a.createElement("input",{id:"name",className:"input",type:"text",placeholder:"Token Name",onChange:this.onChangeInput}))),i.a.createElement("td",{className:"tr"},i.a.createElement(T.a,{animate:!0,className:"description"},"The name of the token. 3-25 symbols. Alphanumerical characters, space, and hyphen are accepted."))),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%",className:"tr"},i.a.createElement(C.a,{animate:!0,level:3,corners:4,layer:"primary"},i.a.createElement("input",{id:"symbol",className:"input",type:"text",placeholder:"Token Symbol",onChange:this.onChangeInput}))),i.a.createElement("td",{className:"tr"},i.a.createElement(T.a,{animate:!0,className:"description"},"3-4 characters (example ETH, BTC, BAT, etc.). No spaces. Only alphanumerical characters."))),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%",className:"tr"},i.a.createElement(C.a,{animate:!0,level:3,corners:4,layer:"primary"},i.a.createElement("input",{id:"decimals",className:"input",type:"number",onChange:this.onChangeInput,min:0,max:18,step:1,placeholder:"Decimals"}))),i.a.createElement("td",{className:"tr"},i.a.createElement(T.a,{animate:!0,className:"description"},"Defines the number of decimals for the token. 0-18 numerals are accepted. 18 is common practice."))),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%",className:"tr"},i.a.createElement(C.a,{animate:!0,level:3,corners:4,layer:"primary"},i.a.createElement("input",{id:"supply",className:"input",type:"number",onChange:this.onChangeInput,min:1,max:1e15,step:1,placeholder:"Total Supply"}))),i.a.createElement("td",{className:"tr"},i.a.createElement(T.a,{animate:!0,className:"description"},"Total amount of tokens to be generated. Minimum value is 1, and maximum 1000000000000000."))))),i.a.createElement("div",{className:"buttonPanel"},i.a.createElement(m.a,{onClick:this.props.onCancel,animate:!0,layer:"success"},"Cancel"),i.a.createElement(m.a,{disabled:!this.checkInput(),onClick:this.onSubmit,animate:!0,layer:"success"},"Submit")))}}]),a}(i.a.Component)),N=a(73),w=a.n(N),O=(a(613),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={balance:0},n}return Object(f.a)(a,[{key:"getBalance",value:function(){var e=this;return y.a.getBalanceOf(this.props.address,(function(t){e.setState({balance:t})})),0}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(w.a,{animate:!0,layer:"success"}),i.a.createElement("div",{className:"tableContainer"},i.a.createElement("div",{style:{marginBottom:"1rem"}},i.a.createElement(T.a,{animate:!0,className:"description"},"YOUR CONTRACT")),i.a.createElement("div",null,i.a.createElement(C.a,{animate:!0,level:3,corners:4,layer:"primary"},i.a.createElement(T.a,{animate:!0,className:"label"},this.props.address))),""!=this.props.address?i.a.createElement("div",null,i.a.createElement("div",{className:"block"},i.a.createElement(T.a,{animate:!0,className:"description"},"YOUR XRC20 ASSETS")),i.a.createElement("div",null,i.a.createElement(C.a,{animate:!0,level:3,corners:4,layer:"primary"},i.a.createElement(T.a,{animate:!0,className:"label"},String(this.state.balance))))):null))}}]),a}(i.a.Component)),S=(a(614),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"buttonBlockHomepage"},i.a.createElement(m.a,{animate:!0,className:"button",onClick:this.props.onClickERC20},"XRC 20"),i.a.createElement(m.a,{animate:!0,className:"button",onClick:this.props.onClickERC721},"XRC 721"))}}]),a}(i.a.Component)),I=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:"",symbol:""},n.onChangeInput=n.onChangeInput.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n}return Object(f.a)(a,[{key:"checkInput",value:function(){return""!==this.state.name&&""!==this.state.symbol}},{key:"onChangeInput",value:function(e){switch(e.target.id){case"name":this.setState({name:e.target.value});break;case"symbol":this.setState({symbol:e.target.value})}}},{key:"onSubmit",value:function(){this.props.onSubmit(this.state.name,this.state.symbol)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(T.a,{animate:!0,className:"h2"},"Welcome to Token Creation Wizard"),i.a.createElement("div",{className:"tableContainer"},i.a.createElement("table",{className:"table"},i.a.createElement("tr",null,i.a.createElement("td",{width:"40%",className:"tr"},i.a.createElement(C.a,{animate:!0,level:3,corners:4,layer:"primary"},i.a.createElement("input",{id:"name",className:"input",type:"text",placeholder:"Token Name",onChange:this.onChangeInput}))),i.a.createElement("td",{className:"tr"},i.a.createElement(T.a,{animate:!0,className:"description"},"The name of the token. 3-25 symbols. Alphanumerical characters, space, and hyphen are accepted."))),i.a.createElement("tr",null,i.a.createElement("td",{width:"40%",className:"tr"},i.a.createElement(C.a,{animate:!0,level:3,corners:4,layer:"primary"},i.a.createElement("input",{id:"symbol",className:"input",type:"text",placeholder:"Token Symbol",onChange:this.onChangeInput}))),i.a.createElement("td",{className:"tr"},i.a.createElement(T.a,{animate:!0,className:"description"},"3-4 characters (example ETH, BTC, BAT, etc.). No spaces. Only alphanumerical characters."))))),i.a.createElement("div",{className:"buttonPanel"},i.a.createElement(m.a,{onClick:this.props.onCancel,animate:!0,layer:"success"},"Cancel"),i.a.createElement(m.a,{disabled:!this.checkInput(),onClick:this.onSubmit,animate:!0,layer:"success"},"Submit")))}}]),a}(i.a.Component),R=a(306),x=a(113),j=a.n(x),M=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={cacelable:!1},n.confirm=n.confirm.bind(Object(b.a)(n)),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({cacelable:!0})}),15e3)}},{key:"confirm",value:function(){window.confirm("Would you like to stop this transaction?")&&this.props.onCancel()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:{position:"relative",width:"100%",height:200}},i.a.createElement(j.a,{animate:!0,full:!0})),this.state.cacelable?i.a.createElement(m.a,{onClick:this.confirm,animate:!0,layer:"success"},"Cancel"):null)}}]),a}(i.a.Component);var A=function(){var e=function(){w(i.a.createElement(k,{onCancel:p,onSubmit:r}))},t=function(){w(i.a.createElement(I,{onCancel:p,onSubmit:c}))},a=function(){return i.a.createElement(S,{onClickERC20:e,onClickERC721:t})},s=function(){return i.a.createElement(M,{onCancel:function(){w(a)}})},r=function e(t,a,n,r){w(s),y.a.deployContract(t,a,n,r,(function(t){w(t&&"ERROR"!==t?i.a.createElement(O,{address:t}):i.a.createElement(k,{onCancel:p,onSubmit:e}))}))},c=function e(t,a){w(s),y.a.deployERC721Contract(t,a,(function(t){w(t&&"ERROR"!==t?i.a.createElement(R.a,{onCancel:p,address:t}):i.a.createElement(I,{onCancel:p,onSubmit:e}))}))},p=function(){w(a)},d=function(){window.location.reload()},f=function(e){y.a.getAccounts().then((function(t){t?(T("ioPay connected: ",t.address),w(a)):w(e?i.a.createElement(m.a,{onClick:d},"Reconnect"):i.a.createElement(m.a,{onClick:b},"Open ioPay (Desktop)"))}))},b=function(){window.location.replace("iopay://"),setTimeout((function(){f(!0)}),1e4)},h=Object(n.useState)("initializing..."),v=Object(l.a)(h,2),E=v[0],T=v[1],g=Object(n.useState)(null),C=Object(l.a)(g,2),N=C[0],w=C[1];return Object(n.useEffect)((function(){T("Connecting wallet..."),y.a.init(),setTimeout((function(){f(!1)}),5e3)}),[]),i.a.createElement(o.ThemeProvider,{theme:Object(o.createTheme)()},i.a.createElement(u.a,{animate:!0,show:!0,className:"App"},i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,"MINTTOKEN")),i.a.createElement("div",{className:"status"},E),i.a.createElement("div",{className:"mainView"},N)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[310,1,2]]]);
//# sourceMappingURL=main.7f0a02aa.chunk.js.map