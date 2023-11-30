"use strict";(self.webpackChunkdjoser_backend=self.webpackChunkdjoser_backend||[]).push([[6394],{84409:(L,o,e)=>{e.d(o,{p:()=>d});var t=e(67294),u=e(94149),_=e(88767);const d=(c={})=>{const{get:E}=(0,u.kY)(),{data:a,isLoading:n}=(0,_.useQuery)(["ee","providers"],async()=>{const{data:m}=await E("/admin/providers");return m},c);return{providers:t.useMemo(()=>a??[],[a]),isLoading:n}}},76394:(L,o,e)=>{e.r(o),e.d(o,{LoginEE:()=>l});var t=e(67294),u=e(26910),_=e(16607),d=e(96987),c=e(10574),E=e(45697),a=e.n(E),n=e(86896),D=e(88972),m=e(50745),O=e(31640),M=e(84409),v=e(80090);const i=(0,D.default)(u.i)`
  flex: 1;
`,l=P=>{const{formatMessage:s}=(0,n.Z)(),{isLoading:g,providers:p}=(0,M.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&p.length===0?t.createElement(m.ZP,null,t.createElement(O.Z,{...P})):t.createElement(m.ZP,null,t.createElement(O.Z,{...P},t.createElement(_.x,{paddingTop:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.k,null,t.createElement(i,null),t.createElement(_.x,{paddingLeft:3,paddingRight:3},t.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Auth.login.sso.divider"}))),t.createElement(i,null)),t.createElement(v.Z,{providers:p,displayAllProviders:!1})))))};l.defaultProps={onSubmit:P=>P.preventDefault(),requestError:null},l.propTypes={formErrors:a().object.isRequired,modifiedData:a().object.isRequired,onChange:a().func.isRequired,onSubmit:a().func,requestError:a().object}},80090:(L,o,e)=>{e.d(o,{Z:()=>P});var t=e(67294),u=e(96987),_=e(81315),d=e(10574),c=e(31988),E=e(6498),a=e(45697),n=e.n(a),D=e(86896),m=e(73727),O=e(88972);const M=O.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,v=(0,O.default)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,i=({provider:s})=>t.createElement(_.u,{label:s.displayName},t.createElement(M,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?t.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.Z,null,s.displayName)));i.propTypes={provider:n().shape({icon:n().string,displayName:n().string.isRequired,uid:n().string.isRequired}).isRequired};const l=({providers:s,displayAllProviders:g})=>{const{formatMessage:p}=(0,D.Z)();return g?t.createElement(c.r,{gap:4},s.map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(i,{provider:r})))):s.length>2&&!g?t.createElement(c.r,{gap:4},s.slice(0,2).map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(E.P,{col:4},t.createElement(_.u,{label:p({id:"global.see-more"})},t.createElement(M,{as:m.Link,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(v,{justifyContent:"center"},s.map(r=>t.createElement(i,{key:r.uid,provider:r})))};l.defaultProps={displayAllProviders:!0},l.propTypes={providers:n().arrayOf(n().object).isRequired,displayAllProviders:n().bool};const P=l}}]);
