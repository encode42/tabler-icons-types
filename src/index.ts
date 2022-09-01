import * as tablerIcons from "@tabler/icons";
import { TablerIcon } from "@tabler/icons";
import { TablerIconsType } from "./generated/types";

/**
 * Represents the type for the Tabler Icons object.
 */
export type TypedTablerIcons = {
    /**
     * A Tabler Icon.
     */
    [key in TablerIconsType]: TablerIcon
}

/**
 * Get a Tabler Icon from its name.
 *
 * @param icon Icon to get
 */
export function getIcon(icon: TablerIconsType) {
    return (tablerIcons as TypedTablerIcons)[icon];
}

export * from "./generated/keys";
export * from "./generated/tags";
export * from "./generated/types";
export * from "./util/interface";
