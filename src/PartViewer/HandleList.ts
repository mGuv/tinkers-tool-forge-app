import HandlePart from '../Materials/Parts/HandlePart';

interface HandlePartData {
    Name: string,
    Durability: number,
    Modifier: number,
    Traits: string
}

export const columns: (keyof HandlePartData)[] = ["Name", "Durability", "Modifier", "Traits"]
export const dataTransformer = (part: HandlePart) => ({
    Name: part.Material.Name,
    Durability: part.Durability,
    Modifier: part.Modifier,
    Traits: part.Traits.join(", ")
});
