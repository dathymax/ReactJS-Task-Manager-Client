import React from "react";

export interface MenuItemType {
    label?: string | React.ReactNode,
    key: string,
    icon?: React.ReactNode,
    children?: MenuItemType[]
}