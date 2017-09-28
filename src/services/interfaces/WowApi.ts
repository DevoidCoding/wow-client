declare namespace WowInterface {
    export interface ICharacter {
        lastModified: DateTimeFormat;
        name: string;
        realm: string;
        battlegroup: string;
        class: number;
        race: number;
        gender: number;
        level: number;
        achievementPoints: number;
        thumbnail: string;
        calcClass: string;
        faction: number;
        items: IItems;
        totalHonorableKills: number;
    }

    export interface IItems {
        averageItemLevel: number;
        averageItemLevelEquipped: number;
        head: IItem;
        neck: IItem;
        shoulder: IItem;
        back: IItem;
        chest: IItem;
        wrist: IItem;
        hands: IItem;
        waist: IItem;
        legs: IItem;
        feet: IItem;
        finger1: IItem;
        finger2: IItem;
        trinket1: IItem;
        trinket2: IItem;
        mainHand: IItem;
    }

    export interface IItem {
        id: number;
        name: string;
        icon: string;
        quality: number;
        itemLevel: number;
        tooltipParams: any;
        stats: any;
        armor: number;
        context: string;
        bonusLists: number[];
        artifactId: number;
        displayInfoId: number;
        artifactAppearanceId: number;
        artifactTraits: any[];
        relics: any[];
        appearance: any;
    }
}
