import React from 'react';
import { PartRequirement } from './Tool/AbstractTool';
import HeadPart from '../Materials/Parts/HeadPart';
import Part from '../Materials/Parts/Part';
import ToolPart from './ToolPart';
import HandlePart from '../Materials/Parts/HandlePart';
import ExtraPart from '../Materials/Parts/ExtraPart';

export interface ContentItemProps {
  label: string
  value: JSX.Element
}

const ContentItem: React.FunctionComponent<ContentItemProps> = ({label, value}) =>
  <div style={{gridColumn: "span 1"}}>{label}: {value}</div>

const RenderPartListContent = (c: PartRequirement) => (p: Part) => {
  switch (c.type) {
      case "head":
          const headPart = p as HeadPart;
          return (<>
              <ContentItem label="Attack" value={<span>{headPart.Attack}</span>}/>
              <ContentItem label="Durability" value={<span>{headPart.Durability}</span>}/>
              <ContentItem label="Preview" value={<ToolPart partName={c.partTexture} materialColor={p.Material.Color} />}/>
          </>);
      case "handle":
          const handlePart = p as HandlePart;
          return (<>
              <ContentItem label="Modifier" value={<span>{handlePart.Modifier}</span>}/>
              <ContentItem label="Durability" value={<span>{handlePart.Durability}</span>}/>
              <ContentItem label="Preview" value={<ToolPart partName={c.partTexture} materialColor={p.Material.Color} />}/>
          </>)
      case "extra":
          const extraPart = p as ExtraPart;
          return (<>
              <ContentItem label="Durability" value={<span>{extraPart.ExtraDurability}</span>}/>
              <ContentItem label="Preview" value={<ToolPart partName={c.partTexture} materialColor={p.Material.Color} />}/>
          </>)
      default:
          return (<>
              <ContentItem label="Preview" value={<ToolPart partName={c.partTexture} materialColor={p.Material.Color} />}/>
          </>);
  }
}

export default RenderPartListContent;