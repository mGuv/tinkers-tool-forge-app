import Handle from './Handle';
import Head from './Head';
import Bow from './Bow';
import Shaft from './Shaft';
import Extra from './Extra';
import Fletching from './Fletching';

class Material
{
    public readonly Name:string;
    public readonly Handle?:Handle;
    public readonly Head?:Head;
    public readonly Bow?:Bow;
    public readonly Shaft?:Shaft;
    public readonly Extra?:Extra;
    public readonly Fletching?:Fletching;

    public IsVisible:boolean;
    

    public constructor(name:string, handle?:Handle, head?:Head, bow?:Bow, shaft?:Shaft, extra?:Extra, fletching?:Fletching)
    {
        this.Name = name;
        this.Handle = handle;
        this.Head = head;
        this.Bow = bow;
        this.Shaft = shaft;
        this.Extra = extra;
        this.Fletching = fletching;
        this.IsVisible = true;
    }

    public GetHashCode():string
    {
        return this.Name;
    }
}

export default Material;
