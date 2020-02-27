import FletchingPart from '../Materials/Parts/FletchingPart';

interface FletchingPartData {
    Name: string,
    Accuracy: number,
    Modifer: number,
    Traits: string
}

export const columns: (keyof FletchingPartData)[] = ["Name", "Accuracy", "Modifer", "Traits"];
export const dataTransformer = (part: FletchingPart) => ({
    Name: part.Material.Name,
    Accuracy: part.Accuracy,
    Modifer: part.Modifier,
    Traits: part.Traits.join(", ")
});