"use strict";(self.webpackChunkdjoser_backend=self.webpackChunkdjoser_backend||[]).push([[7201],{60665:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(88972),l=n(91554),i=n(60468),r=(e=>e&&e.__esModule?e:{default:e})(s),a={color:!0,cursor:!0,height:!0,width:!0},c=r.default.div.withConfig({shouldForwardProp:(e,t)=>!a[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>i.extractStyleFromTheme(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>i.extractStyleFromTheme(e.colors,t,t)};
  color: ${({theme:e,color:t})=>i.extractStyleFromTheme(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>l("padding",t,e)}
  ${({theme:e,paddingTop:t})=>l("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>l("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>l("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>l("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>l("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>l("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>l("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>l("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:h})=>t?e.borderRadius:h};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>i.extractStyleFromTheme(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:h,borderWidth:y})=>{if(t&&!h&&typeof y>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>i.extractStyleFromTheme(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>i.extractStyleFromTheme(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>i.extractStyleFromTheme(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`;o.Box=c},58674:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(85893),l=n(67294),i=n(44158),u=n(24414),r=n(60665),a=l.forwardRef(({children:c,name:e,error:t,hint:h,id:y,required:$=!1,...m},d)=>{const f=u.useId(y),g=l.useMemo(()=>({name:e,id:f,error:t,hint:h,required:$}),[t,f,h,e,$]);return s.jsx(r.Box,{ref:d,...m,children:s.jsx(i.FieldContext.Provider,{value:g,children:c})})});o.Field=a},44158:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(67294),l=s.createContext({id:"",required:!1}),i=()=>s.useContext(l);o.FieldContext=l,o.useField=i},73582:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(85893),l=n(44158),i=n(4583),u=()=>{const{id:r,error:a}=l.useField();return!a||typeof a!="string"?null:s.jsx(i.Typography,{variant:"pi",as:"p",id:`${r}-error`,textColor:"danger600","data-strapi-field-error":!0,children:a})};o.FieldError=u},92298:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(85893),l=n(44158),i=n(4583),u=()=>{const{id:r,hint:a,error:c}=l.useField();return!a||c?null:s.jsx(i.Typography,{variant:"pi",as:"p",id:`${r}-hint`,textColor:"neutral600",children:a})};o.FieldHint=u},30969:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(85893),l=n(67294),i=n(88972),u=n(44158),r=n(69186),a=n(60665),c=n(90291),t=(d=>d&&d.__esModule?d:{default:d})(i),h={S:6.5,M:10.5},y=l.forwardRef(({endAction:d,startAction:f,disabled:g=!1,onChange:b,size:F="M",...T},j)=>{const{id:S,error:x,hint:v,name:M,required:A}=u.useField();let w;x?w=`${S}-error`:v&&(w=`${S}-hint`);const P=Boolean(x),O=R=>{!g&&b&&b(R)};return s.jsxs(m,{justifyContent:"space-between",hasError:P,disabled:g,children:[f?s.jsx(a.Box,{paddingLeft:3,paddingRight:2,children:f}):null,s.jsx($,{id:S,name:M,ref:j,"aria-describedby":w,"aria-invalid":P,"aria-disabled":g,disabled:g,"data-disabled":g?"":void 0,hasLeftAction:Boolean(f),hasRightAction:Boolean(d),onChange:O,"aria-required":A,$size:F,...T}),d?s.jsx(a.Box,{paddingLeft:2,paddingRight:3,children:d}):null]})}),$=t.default.input`
  border: none;
  border-radius: ${({theme:d})=>d.borderRadius};
  padding-bottom: ${({$size:d})=>`${h[d]/16}rem`};
  padding-left: ${({theme:d,hasLeftAction:f})=>f?0:d.spaces[4]};
  padding-right: ${({theme:d,hasRightAction:f})=>f?0:d.spaces[4]};
  padding-top: ${({$size:d})=>`${h[d]/16}rem`};
  cursor: ${d=>d["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:d})=>d.colors.neutral800};
  font-weight: 400;
  font-size: ${d=>d.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:d})=>d.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,m=t.default(c.Flex)`
  border: 1px solid ${({theme:d,hasError:f})=>f?d.colors.danger600:d.colors.neutral200};
  border-radius: ${({theme:d})=>d.borderRadius};
  background: ${({theme:d})=>d.colors.neutral0};
  ${r.inputFocusStyle()}

  ${({theme:d,disabled:f})=>f?i.css`
          color: ${d.colors.neutral600};
          background: ${d.colors.neutral150};
        `:void 0}
`;o.FieldInput=y,o.InputWrapper=m},64919:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(85893),l=n(67294),i=n(88972),u=n(44158),r=n(52075),a=n(4583),c=n(90291),t=(f=>f&&f.__esModule?f:{default:f})(i),h=r.once(console.warn),y=l.forwardRef(({children:f,action:g,required:b,...F},T)=>{const{id:j,required:S}=u.useField(),x=S||b;return b!==void 0&&h('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),s.jsxs($,{ref:T,variant:"pi",textColor:"neutral800",htmlFor:j,fontWeight:"bold",as:"label",...F,children:[f,x&&s.jsx(m,{textColor:"danger600",children:"*"}),g&&s.jsx(d,{marginLeft:1,children:g})]})}),$=t.default(a.Typography)`
  display: flex;
  align-items: center;
`,m=t.default(a.Typography)`
  line-height: 0;
`,d=t.default(c.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:f})=>f.colors.neutral500};
  }
`;o.FieldLabel=y},90291:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(88972),l=n(91554),i=n(60665),r=(e=>e&&e.__esModule?e:{default:e})(s),a={direction:!0},c=r.default(i.Box).withConfig({shouldForwardProp:(e,t)=>!a[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>l("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`;o.Flex=c},4583:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(88972),l=n(50933),i=n(60468),r=(e=>e&&e.__esModule?e:{default:e})(s),a={fontSize:!0,fontWeight:!0},c=r.default.span.withConfig({shouldForwardProp:(e,t)=>!a[e]&&t(e)})`
  ${l.variantStyle}
  ${l.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>i.extractStyleFromTheme(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>i.extractStyleFromTheme(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>i.extractStyleFromTheme(e.lineHeights,t,t)};
  color: ${({theme:e,textColor:t})=>e.colors[t||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`;o.Typography=c},24866:(p,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const n="alpha",s="beta",l="delta",i="epsilon",u="omega",r="pi",a="sigma",c=[n,s,l,i,u,r,a];o.ALPHA=n,o.BETA=s,o.DELTA=l,o.EPSILON=i,o.OMEGA=u,o.PI=r,o.SIGMA=a,o.TEXT_VARIANTS=c},50933:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(24866),l=({ellipsis:u=!1})=>u&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,i=({variant:u=s.OMEGA,theme:r})=>{switch(u){case s.ALPHA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[5]};
        line-height: ${r.lineHeights[2]};
      `;case s.BETA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[4]};
        line-height: ${r.lineHeights[1]};
      `;case s.DELTA:return`
        font-weight: ${r.fontWeights.semiBold};
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[2]};
      `;case s.EPSILON:return`
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[6]};
      `;case s.OMEGA:return`
        font-size: ${r.fontSizes[2]};
        line-height: ${r.lineHeights[4]};
      `;case s.PI:return`
        font-size: ${r.fontSizes[1]};
        line-height: ${r.lineHeights[3]};
      `;case s.SIGMA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[0]};
        line-height: ${r.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${r.fontSizes[2]};
      `}};o.ellipsisStyle=l,o.variantStyle=i},98365:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(88972),u=(r=>r&&r.__esModule?r:{default:r})(s).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;o.VisuallyHidden=u},52075:(p,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const n="[@strapi/design-system]:",s=l=>{const i=l;let u=!1;if(typeof i!="function")throw new TypeError(`${n} once requires a function parameter`);return(...r)=>{u||(i(...r),u=!0)}};o.PREFIX=n,o.once=s},91554:p=>{const o=(n,s,l)=>{if(!s)return;let i=Array.isArray(s)?s:[];if(!Array.isArray(s)&&typeof s=="object"&&(i=[s?.desktop,s?.tablet,s?.mobile]),i.length>0)return i.reduce((a,c,e)=>{if(c)switch(e){case 0:return`${a}${n}: ${l.spaces[c]};`;case 1:return`${a}${l.mediaQueries.tablet}{${n}: ${l.spaces[c]};}`;case 2:return`${a}${l.mediaQueries.mobile}{${n}: ${l.spaces[c]};}`;default:return a}return a},"");const u=l.spaces[s]||s;return`${n}: ${u};`};p.exports=o},79511:(p,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});function n(l,i){return typeof l=="string"?!1:i in l}function s(l){return l&&typeof l=="object"&&!Array.isArray(l)}o.isKeyOf=n,o.isObject=s},60468:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(79511);function l(i,u,r){return u&&s.isKeyOf(i,u)?i[u]:r}o.extractStyleFromTheme=l},24414:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(67294),u=(c=>c&&c.__esModule?c:{default:c})(s).default["useId".toString()]||(()=>{});let r=0;const a=c=>{const[e,t]=s.useState(u());return s.useLayoutEffect(()=>{c||t(h=>h??String(r++))},[c]),c?.toString()??(e||"")};o.useId=a},69186:(p,o,n)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const s=n(88972),l=r=>({theme:a,size:c})=>a.sizes[r][c],i=(r="&")=>({theme:a,hasError:c=!1})=>s.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${r}:focus-within {
      border: 1px solid ${c?a.colors.danger600:a.colors.primary600};
      box-shadow: ${c?a.colors.danger600:a.colors.primary600} 0px 0px 0px 2px;
    }
  `,u=({theme:r})=>s.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${r.colors.primary600};
    }
  }
`;o.buttonFocusStyle=u,o.getThemeSize=l,o.inputFocusStyle=i}}]);
