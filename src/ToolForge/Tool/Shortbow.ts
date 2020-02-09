import AbstractTool from "./AbstractTool";

export default class Shortbow extends AbstractTool {
    public constructor() {
        super('Shortbow',
            {
                part: 'shortbow/limb_bottom',
                component: 'shortbow/limb_bottom',
                materialType: 'bow',
            },
            {
                part: 'shortbow/limb_bottom',
                component: 'shortbow/limb_top',
                materialType: 'bow',
            },
            {
                part: 'bowstring',
                component: 'shortbow/bowstring',
                materialType: 'bowstring',
            }
        );
    }
}
