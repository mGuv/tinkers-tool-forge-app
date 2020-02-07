import BowPart from './Parts/BowPart';
import BowStringPart from './Parts/BowStringPart';
import ExtraPart from './Parts/ExtraPart';
import FletchingPart from './Parts/FletchingPart';
import HandlePart from './Parts/HandlePart';
import HeadPart from './Parts/HeadPart';
import ShaftPart from './Parts/ShaftPart';
class Material {
    public readonly Name: string;
    public readonly Color: string;

    public BowPart?: BowPart;
    public BowStringPart?: BowStringPart;
    public ExtraPart?: ExtraPart;
    public FletchingPart?: FletchingPart;
    public HandlePart?: HandlePart;
    public HeadPart?: HeadPart;
    public ShaftPart?: ShaftPart;

    public constructor(name: string, color: string) {
        this.Name = name;
        this.Color = color;
    }
}

export default Material;
