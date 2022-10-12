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

export * from "./generated/keys";
export * from "./generated/tags";
export * from "./generated/types";
export * from "./util/interface";
