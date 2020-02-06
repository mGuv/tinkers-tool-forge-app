import React from "react";
import Material from '../Materials/Material';
import PageProps from "./PageProps";
import PageState from "./PageState";

abstract class Page<TProps extends PageProps, TState extends PageState> extends React.PureComponent<TProps, TState>
{
    private lastSort?:(a:Material, b:Material) => number;

    public constructor(props: TProps, materialFilter:(m:Material) => boolean) {
        const validMaterials:Material[] = props.allMaterials.filter((m:Material) => m.IsVisible).filter(materialFilter);

        super(props);
        this.state = {
            ...this.state,
            pageMaterials: validMaterials
        };
    }

    protected orderMaterials(sortFunction:(a:Material, b:Material) => number) {
        const sortedMaterials:Material[] = Array.from(this.state.pageMaterials);

        if(this.lastSort === sortFunction) {
            this.setState({
                pageMaterials: sortedMaterials.reverse()
            })
            return;
        }
        
        this.setState({
            pageMaterials: sortedMaterials.sort(sortFunction)
        });

        this.lastSort = sortFunction;
    }
}


export default Page;