(self.webpackChunkdjoser_backend=self.webpackChunkdjoser_backend||[]).push([[5833],{75021:(E,e,t)=>{"use strict";t.d(e,{q:()=>l});var s=t(67294),r=t(94149),o=t(88767);function l({enabled:d}={enabled:!0}){const{get:M}=(0,r.kY)(),{data:i,isError:u,isLoading:D}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:a}}=await M("/admin/license-limit-information");return a},{enabled:d}),n=s.useMemo(()=>i??{},[i]),O=s.useCallback(a=>(n?.features??[]).find(_=>_.name===a)?.options??{},[n?.features]);return{license:n,getFeature:O,isError:u,isLoading:D}}},85833:(E,e,t)=>{"use strict";t.r(e),t.d(e,{CreateActionEE:()=>_});var s=t(67294),r=t(96987),o=t(81315),l=t(85200),d=t(12473),M=t(94417),i=t(24116),u=t(14293),D=t.n(u),n=t(45697),O=t.n(n),a=t(86896),P=t(75021);const _=({onClick:C})=>{const{formatMessage:c}=(0,a.Z)(),{license:{permittedSeats:L,shouldStopCreate:m},isError:f,isLoading:A}=(0,P.q)();return f||A?null:s.createElement(r.k,{gap:2},!D()(L)&&m&&s.createElement(o.u,{description:c({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},s.createElement(l.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:M.Z})),s.createElement(d.z,{"data-testid":"create-user-button",onClick:C,startIcon:s.createElement(i.Z,null),size:"S",disabled:m},c({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};_.propTypes={onClick:O().func.isRequired}},14293:E=>{function e(t){return t==null}E.exports=e}}]);
