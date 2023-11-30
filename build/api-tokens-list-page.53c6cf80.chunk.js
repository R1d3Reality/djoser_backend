"use strict";(self.webpackChunkdjoser_backend=self.webpackChunkdjoser_backend||[]).push([[8056],{92668:(K,E,t)=>{t.d(E,{Z:()=>p});var e=t(67294),a=t(35752),Z=t(29299),m=t(69398),k=t(10574),V=t(96987),r=t(94149),I=t(45697),n=t.n(I),S=t(86896),P=t(16550),D=t(16607),O=t(96208),h=t(54425);const N=({tokenName:s,onClickDelete:i,tokenType:y})=>{const{formatMessage:g}=(0,S.Z)(),{trackUsage:T}=(0,r.rS)(),[f,c]=(0,e.useState)(!1),C=()=>{c(!1),T("willDeleteToken",{tokenType:y}),i()};return e.createElement(D.x,{paddingLeft:1,onClick:d=>d.stopPropagation()},e.createElement(O.h,{onClick:()=>{c(!0)},label:g({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${s}`}),name:"delete",noBorder:!0,icon:e.createElement(h.Z,null)}),e.createElement(r.QH,{onToggleDialog:()=>c(!1),onConfirm:C,isOpen:f}))};N.propTypes={tokenName:n().string.isRequired,onClickDelete:n().func.isRequired,tokenType:n().string.isRequired};const w=N;var Q=t(81851),J=t(88972);const $={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},z=(0,J.default)(r.rU)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:s})=>s.colors.neutral800};
      }
    }
  }
`,L=({tokenName:s,tokenId:i,buttonType:y,children:g})=>{const{formatMessage:T}=(0,S.Z)(),{location:{pathname:f}}=(0,P.k6)();return e.createElement(z,{to:`${f}/${i}`,title:T($[y],{target:s})},g)};L.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired,buttonType:n().string,children:n().node.isRequired},L.defaultProps={buttonType:"edit"};const v=L,u=({tokenName:s,tokenId:i})=>e.createElement(v,{tokenName:s,tokenId:i,buttonType:"read"},e.createElement(Q.Z,null));u.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const U=u;var j=t(2382);const A=({tokenName:s,tokenId:i})=>e.createElement(v,{tokenName:s,tokenId:i},e.createElement(j.Z,null));A.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const F=A,R=({permissions:s,headers:i,contentType:y,isLoading:g,tokens:T,onConfirmDelete:f,tokenType:c})=>{const{canDelete:C,canUpdate:d,canRead:B}=s,M=C||d||B,[{query:x}]=(0,r.Kx)(),{formatMessage:b}=(0,S.Z)(),[,H]=x?x.sort.split(":"):"ASC",{push:W,location:{pathname:Y}}=(0,P.k6)(),{trackUsage:o}=(0,r.rS)(),X=T.sort((l,q)=>{const G=l.name.localeCompare(q.name);return H==="DESC"?-G:G});return e.createElement(r.tM,{headers:i,contentType:y,rows:T,withBulkActions:M,isLoading:g,onConfirmDelete:f},e.createElement(a.p,null,X.map(l=>e.createElement(Z.Tr,{key:l.id,...(0,r.X7)({fn(){o("willEditTokenFromList",{tokenType:c}),W(`${Y}/${l.id}`)},condition:d})},e.createElement(m.Td,{maxWidth:(0,r.Q1)(250)},e.createElement(k.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},l.name)),e.createElement(m.Td,{maxWidth:(0,r.Q1)(250)},e.createElement(k.Z,{textColor:"neutral800",ellipsis:!0},l.description)),e.createElement(m.Td,null,e.createElement(k.Z,{textColor:"neutral800"},e.createElement(r.ij,{timestamp:new Date(l.createdAt)}))),e.createElement(m.Td,null,l.lastUsedAt&&e.createElement(k.Z,{textColor:"neutral800"},e.createElement(r.ij,{timestamp:new Date(l.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:b({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]}))),M&&e.createElement(m.Td,null,e.createElement(V.k,{justifyContent:"end"},d&&e.createElement(F,{tokenName:l.name,tokenId:l.id}),!d&&B&&e.createElement(U,{tokenName:l.name,tokenId:l.id}),C&&e.createElement(w,{tokenName:l.name,onClickDelete:()=>f(l.id),tokenType:c})))))))};R.propTypes={tokens:n().array,permissions:n().shape({canRead:n().bool,canDelete:n().bool,canUpdate:n().bool}).isRequired,headers:n().arrayOf(n().shape({cellFormatter:n().func,key:n().string.isRequired,metadatas:n().shape({label:n().string.isRequired,sortable:n().bool}).isRequired,name:n().string.isRequired})),contentType:n().string.isRequired,isLoading:n().bool,onConfirmDelete:n().func,tokenType:n().string.isRequired},R.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const p=R},81966:(K,E,t)=>{t.d(E,{Z:()=>e,f:()=>a});const e="api-token",a="transfer-token"},71362:(K,E,t)=>{t.r(E),t.d(E,{default:()=>L});var e=t(67294),a=t(94149),Z=t(86706),m=t(36364),k=t(40720),V=t(90731),r=t(34726),I=t(83598),n=t(80129),S=t.n(n),P=t(86896),D=t(88767),O=t(16550),h=t(81966),N=t(92668);const Q=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],$=()=>{(0,a.go)();const v=(0,D.useQueryClient)(),{formatMessage:u}=(0,P.Z)(),U=(0,a.lm)(),j=(0,Z.v9)(m._),{allowedActions:{canCreate:A,canDelete:F,canUpdate:R,canRead:p}}=(0,a.ss)(j.settings["api-tokens"]),{push:s}=(0,O.k6)(),{trackUsage:i}=(0,a.rS)(),{startSection:y}=(0,a.c1)(),g=e.useRef(y),{get:T,del:f}=(0,a.kY)(),{formatAPIError:c}=(0,a.So)();e.useEffect(()=>{g.current&&g.current("apiTokens")},[]),e.useEffect(()=>{s({search:S().stringify({sort:"name:ASC"},{encode:!1})})},[s]);const C=Q.map(o=>({...o,metadatas:{...o.metadatas,label:u(o.metadatas.label)}})),{data:d,isLoading:B}=(0,D.useQuery)(["api-tokens"],async()=>{i("willAccessTokenList",{tokenType:h.Z});const{data:{data:o}}=await T("/admin/api-tokens");return i("didAccessTokenList",{number:o.length,tokenType:h.Z}),o},{cacheTime:0,enabled:p,onError(o){U({type:"warning",message:c(o)})}}),M=B,x=(0,D.useMutation)(async o=>{await f(`/admin/api-tokens/${o}`)},{async onSuccess(){await v.invalidateQueries(["api-tokens"]),i("didDeleteToken")},onError(o){U({type:"warning",message:c(o)})}}),b=d&&d.length>0,H=p&&b,W=p&&!b&&!A,Y=p&&!b&&A;return e.createElement(k.o,{"aria-busy":M},e.createElement(a.SL,{name:"API Tokens"}),e.createElement(V.T,{title:u({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:u({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:A&&e.createElement(a.Qj,{"data-testid":"create-api-token-button",startIcon:e.createElement(I.Z,null),size:"S",onClick:()=>i("willAddTokenFromList",{tokenType:h.Z}),to:"/settings/api-tokens/create"},u({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"}))}),e.createElement(r.D,null,!p&&e.createElement(a.ZF,null),H&&e.createElement(N.Z,{permissions:{canRead:p,canDelete:F,canUpdate:R},headers:C,contentType:"api-tokens",rows:d,isLoading:M,onConfirmDelete:o=>x.mutateAsync(o),tokens:d,tokenType:h.Z}),Y&&e.createElement(a.dJ,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:e.createElement(a.Qj,{variant:"secondary",startIcon:e.createElement(I.Z,null),to:"/settings/api-tokens/create"},u({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),W&&e.createElement(a.dJ,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},L=()=>{const v=(0,Z.v9)(m._);return e.createElement(a.O4,{permissions:v.settings["api-tokens"].main},e.createElement($,null))}}}]);
