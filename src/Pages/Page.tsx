import React from "react";
import Material from '../Materials/Material';
import PageProps from "./PageProps";
import PageState from "./PageState";

abstract class Page<TProps extends PageProps, TState extends PageState> extends React.PureComponent<TProps, TState>
{
    public constructor(props: TProps, materialFilter:(m:Material) => boolean) {
        const validMaterials:Material[] = props.allMaterials.filter((m:Material) => m.IsVisible).filter(materialFilter);

        super(props);
        this.state = {
            ...this.state,
            pageMaterials: validMaterials
        };
    }
}


export default Page;