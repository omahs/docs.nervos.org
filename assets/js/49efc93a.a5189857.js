"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,p=d["".concat(c,".").concat(m)]||d[m]||k[m]||i;return n?a.createElement(p,o(o({ref:t},s),{},{components:n})):a.createElement(p,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4241:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>s,default:()=>d});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"run-ckb-with-docker",title:"Run a CKB Mainnet Node and Testnet Node with Docker"},c=void 0,u={unversionedId:"basics/guides/run-ckb-with-docker",id:"basics/guides/run-ckb-with-docker",title:"Run a CKB Mainnet Node and Testnet Node with Docker",description:"We have introduced Run a CKB Mainnet Node & Run a CKB Testnet Node.If you want to run CKB node or miner process quickly for testing, it is recommended to use Docker. Before follow the instructions below, you need to Install Docker first.",source:"@site/docs/basics/guides/run-ckb-with-docker.md",sourceDirName:"basics/guides",slug:"/basics/guides/run-ckb-with-docker",permalink:"/docs/basics/guides/run-ckb-with-docker",tags:[],version:"current",lastUpdatedBy:"xying21",lastUpdatedAt:1650935474,formattedLastUpdatedAt:"4/26/2022",frontMatter:{id:"run-ckb-with-docker",title:"Run a CKB Mainnet Node and Testnet Node with Docker"},sidebar:"Basics",previous:{title:"Neuron Wallet Guide",permalink:"/docs/basics/guides/neuron"},next:{title:"Get CKB Binary",permalink:"/docs/basics/guides/get-ckb"}},s=[{value:"Run a CKB Mainnet Node",id:"run-a-ckb-mainnet-node",children:[{value:"Get CKB image",id:"get-ckb-image",children:[],level:3},{value:"Mount the configuration file and Run a CKB Mainnet node",id:"mount-the-configuration-file-and-run-a-ckb-mainnet-node",children:[],level:3}],level:2},{value:"Run a CKB Testnet node",id:"run-a-ckb-testnet-node",children:[{value:"Get the CKB image",id:"get-the-ckb-image",children:[],level:3},{value:"Mount the configuration file and Run a CKB Testnet node",id:"mount-the-configuration-file-and-run-a-ckb-testnet-node",children:[],level:3}],level:2}],k={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have introduced ",(0,i.kt)("a",{parentName:"p",href:"/docs/basics/guides/mainnet"},"Run a CKB Mainnet Node")," & ",(0,i.kt)("a",{parentName:"p",href:"/docs/basics/guides/testnet"},"Run a CKB Testnet Node"),".If you want to run CKB node or miner process quickly for testing, it is recommended to use Docker. Before follow the instructions below, you need to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Install Docker")," first."),(0,i.kt)("h2",{id:"run-a-ckb-mainnet-node"},"Run a CKB Mainnet Node"),(0,i.kt)("h3",{id:"get-ckb-image"},"Get CKB image"),(0,i.kt)("p",null,"The docker container connects to mainnet by default and will run the latest release version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it nervos/ckb:latest run\n")),(0,i.kt)("p",null,"Let me introduce ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nervos/ckb/tags"},"tags")," listed in DockerHub."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tag ",(0,i.kt)("inlineCode",{parentName:"li"},"latest")," means that the image is built from the latest master branch of ckb."),(0,i.kt)("li",{parentName:"ul"},"Tags ",(0,i.kt)("inlineCode",{parentName:"li"},"vx.y.z")," means that the image is built from the historical release version."),(0,i.kt)("li",{parentName:"ul"},"Tags ",(0,i.kt)("inlineCode",{parentName:"li"},"vx.y.z-rc")," means that the image is built from the preview release version.")),(0,i.kt)("h3",{id:"mount-the-configuration-file-and-run-a-ckb-mainnet-node"},"Mount the configuration file and Run a CKB Mainnet node"),(0,i.kt)("p",null,"It is recommended to mount a volume at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/ckb")," in the container.There is an example to mount a volume, generate config files in the volume\nand start CKB from it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a volume")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create ckb-mainnet\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initialize the directory with mainnet chain spec.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -v ckb-mainnet:/var/lib/ckb \\\n  nervos/ckb:latest init --chain mainnet --force\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a container ",(0,i.kt)("inlineCode",{parentName:"li"},"ckb-mainnet-node")," to run a node:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker create -it \\\n  -v ckb-mainnet:/var/lib/ckb \\\n  --name ckb-mainnet-node \\\n  nervos/ckb:latest run\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the generated config files from the container:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp ckb-mainnet-node:/var/lib/ckb/ckb.toml .\ndocker cp ckb-mainnet-node:/var/lib/ckb/ckb-miner.toml .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit the config files.\nIf you want to run a miner, remember to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"[block_assembler]")," section in ",(0,i.kt)("inlineCode",{parentName:"p"},"ckb.toml"),". you can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/basics/guides/devchain#3-configure-the-block-assembler"},"Configure the Block Assembler"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy back the edited config files back to container:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tar --owner=1000 --group=1000 -cf - ckb.toml ckb-miner.toml | \\\n  docker cp - ckb-mainnet-node:/var/lib/ckb/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start the node:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker start -i ckb-mainnet-node\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"And start the miner in the same container")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec ckb-mainnet-node ckb miner\n")),(0,i.kt)("h2",{id:"run-a-ckb-testnet-node"},"Run a CKB Testnet node"),(0,i.kt)("h3",{id:"get-the-ckb-image"},"Get the CKB image"),(0,i.kt)("p",null,"After the release of ckb v0.26.1, by modifying the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"CKB_CHAIN"),", you can run CKB Testnet node with default configuration\uff0csuch as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e CKB_CHAIN=testnet --rm -it nervos/ckb:latest run\n")),(0,i.kt)("h3",{id:"mount-the-configuration-file-and-run-a-ckb-testnet-node"},"Mount the configuration file and Run a CKB Testnet node"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a volume")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create ckb-testnet\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initialize the directory with testnet chain spec.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -v ckb-testnet:/var/lib/ckb \\\n  nervos/ckb:latest init --spec testnet --force\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a container ",(0,i.kt)("inlineCode",{parentName:"li"},"ckb-testnet-node")," to run a node:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker create -it \\\n  -v ckb-testnet:/var/lib/ckb \\\n  --name ckb-testnet-node \\\n  nervos/ckb:latest run\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the generated config files from the container:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp ckb-testnet-node:/var/lib/ckb/ckb.toml .\ndocker cp ckb-testnet-node:/var/lib/ckb/ckb-miner.toml .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Edit the config files.\nIf you want to run a miner, remember to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"[block_assembler]")," section in ",(0,i.kt)("inlineCode",{parentName:"p"},"ckb.toml"),". you can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/basics/guides/devchain#3-configure-the-block-assembler"},"Configure the Block Assembler"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy back the edited config files back to container:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp ckb-testnet-node:/var/lib/ckb/ckb.toml .\ndocker cp ckb-testnet-node:/var/lib/ckb/ckb-miner.toml .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start the node:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker start -i ckb-testnet-node\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"And start the miner in the same container")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec ckb-testnet-node ckb miner\n")))}d.isMDXComponent=!0}}]);