import React, { useState } from "react";
import cx from "classnames";

import gridStyles from "./Grid.module.scss";
import { List, Hourglass, HouseDoorFill } from "react-bootstrap-icons";
import { MenuItem } from "./MenuItem";

export interface GridProps {
    gridClassName?: string;
    headerClassName?: string;
    sidebarClassName?: string;
}

export const Grid = ({
    gridClassName = "",
    headerClassName = "bg-primary text-white",
    sidebarClassName = "bg-primary text-white"
}: GridProps) => {
    const [sidebarIn, setSidebarIn] = useState<boolean>(false);
    const toggleSidebarIn = () => setSidebarIn(!sidebarIn);

    return (
        <div data-testid="grid" className={cx(gridStyles.grid, { [gridStyles.sidebarIn]: sidebarIn }, gridClassName)}>
            <header className={cx(gridStyles.header, headerClassName)} style={{ gridArea: "header" }}>
                <button
                    data-testid="toggleButton"
                    className={gridStyles.sidebarToggleBtn}
                    onClick={toggleSidebarIn}
                >
                    <List />
                </button>
                Header
            </header>

            <aside
                data-testid="sidebar"
                className={cx(gridStyles.sidebar, sidebarClassName)}
                style={{ gridArea: "sidebar" }}
            >
                <MenuItem icon={<Hourglass />} label="Home" sidebarIn={sidebarIn} />
                <MenuItem icon={<HouseDoorFill />} label="Longer label" sidebarIn={sidebarIn} />
            </aside>

            <main style={{ gridArea: "content" }}>Main content</main>
        </div>
    );
};