import React, { ReactNode } from "react";
import cx from "classnames";

import menuItemStyles from "./MenuItem.module.scss";

export interface MenuItemProps {
    icon: any;
    label: string | ReactNode;
    sidebarIn?: boolean;
}

export const MenuItem = ({ icon, label, sidebarIn = false }: MenuItemProps) => (
    <a href="#" className={cx(menuItemStyles.menuItem, { [menuItemStyles.sidebarIn]: sidebarIn })}>
        {icon} <span className={menuItemStyles.menuItemLabel}>{label}</span>
    </a>
);