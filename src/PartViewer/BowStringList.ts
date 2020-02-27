import BowStringPart from '../Materials/Parts/BowStringPart';

interface BowStringPartsData {
    Name: string,
    Modifier: number,
    Traits: string,
}

export const columns: (keyof BowStringPartsData)[] = ["Name", "Modifier", "Traits"];
export const dataTransformer = (part: BowStringPart) => ({
    Name: part.Material.Name,
    Modifier: part.Modifier,
    Traits: part.Traits.join(", ")
});