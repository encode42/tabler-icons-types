import { TablerIconsType } from "../../generated/types";

/**
 * Tag structure for icons.
 */
export interface Tag {
    /**
     * Category of the icon.
     */
    "category": string,

    /**
     * Tags of the icon.
     */
    "tags": string[]
}

/**
 * An object containing icon tags.
 */
export type Tags = {
    [key in TablerIconsType]: Tag
}
