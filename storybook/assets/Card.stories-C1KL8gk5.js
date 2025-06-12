import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as F}from"./index-DRjF_FHU.js";import{c as p,B as a}from"./Button-uuIO5eXP.js";const E=F.forwardRef(({children:H,className:L,hoverable:q=!1,isDragging:A=!1,header:s,footer:m,actions:l,padded:V=!0,...O},_)=>e.jsxs("div",{ref:_,className:p("bg-white rounded-lg shadow",q&&"transition-shadow hover:shadow-md",A&&"shadow-lg",L),...O,children:[(s||l)&&e.jsxs("div",{className:"flex justify-between items-start p-4 border-b border-gray-200",children:[s&&e.jsx("div",{className:"flex-1",children:typeof s=="string"?e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:s}):s}),l&&e.jsx("div",{className:"flex space-x-2 ml-4",children:l})]}),e.jsx("div",{className:p(V&&"p-4"),children:H}),m&&e.jsx("div",{className:"px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-200",children:m})]}));E.__docgenInfo={description:"",methods:[],displayName:"Card",props:{hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to add hover effects",defaultValue:{value:"false",computed:!1}},isDragging:{required:!1,tsType:{name:"boolean"},description:"Whether the card is currently being dragged",defaultValue:{value:"false",computed:!1}},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional header content"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional footer content"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional actions to be displayed in the top-right corner"},padded:{required:!1,tsType:{name:"boolean"},description:"Whether to add padding to the content area",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const K={title:"Components/Card",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{hoverable:{control:"boolean"},isDragging:{control:"boolean"},padded:{control:"boolean"}}},r={args:{children:"Basic Card Content",className:"w-80"}},t={args:{header:"Card Title",children:"Card content with a header",className:"w-80"}},o={args:{header:"Card Title",children:"Card content with a header and footer",footer:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx(a,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(a,{size:"sm",children:"Save"})]}),className:"w-80"}},n={args:{header:"Card with Actions",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"ghost",size:"sm",children:"Edit"}),e.jsx(a,{variant:"danger",size:"sm",children:"Delete"})]}),children:"Card content with actions in the header",className:"w-80"}},i={args:{header:"Hoverable Card",children:"This card has hover effects",hoverable:!0,className:"w-80"}},d={args:{header:"Dragging State",children:"This card appears as if being dragged",isDragging:!0,className:"w-80"}},c={args:{header:"Complex Example",actions:e.jsx(a,{variant:"ghost",size:"sm",icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"})})}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"This is a complex card example with multiple elements."}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full",children:"Tag"}),e.jsx("span",{className:"inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full",children:"Status"})]})]}),footer:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-gray-500",children:"Last updated: 2 days ago"}),e.jsx(a,{size:"sm",children:"View Details"})]}),hoverable:!0,className:"w-80"}};var h,u,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Basic Card Content',
    className: 'w-80'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    header: 'Card Title',
    children: 'Card content with a header',
    className: 'w-80'
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,N,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    header: 'Card Title',
    children: 'Card content with a header and footer',
    footer: <div className="flex justify-end space-x-2">
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Save</Button>
      </div>,
    className: 'w-80'
  }
}`,...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,y,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    header: 'Card with Actions',
    actions: <>
        <Button variant="ghost" size="sm">Edit</Button>
        <Button variant="danger" size="sm">Delete</Button>
      </>,
    children: 'Card content with actions in the header',
    className: 'w-80'
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var T,B,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    header: 'Hoverable Card',
    children: 'This card has hover effects',
    hoverable: true,
    className: 'w-80'
  }
}`,...(z=(B=i.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var R,S,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    header: 'Dragging State',
    children: 'This card appears as if being dragged',
    isDragging: true,
    className: 'w-80'
  }
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,W,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    header: 'Complex Example',
    actions: <Button variant="ghost" size="sm" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>} />,
    children: <div className="space-y-4">
        <p>This is a complex card example with multiple elements.</p>
        <div className="flex items-center space-x-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Tag</span>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Status</span>
        </div>
      </div>,
    footer: <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Last updated: 2 days ago</span>
        <Button size="sm">View Details</Button>
      </div>,
    hoverable: true,
    className: 'w-80'
  }
}`,...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const P=["Basic","WithHeader","WithFooter","WithActions","Hoverable","Dragging","Complex"];export{r as Basic,c as Complex,d as Dragging,i as Hoverable,n as WithActions,o as WithFooter,t as WithHeader,P as __namedExportsOrder,K as default};
