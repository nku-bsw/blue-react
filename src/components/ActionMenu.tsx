import React, { useState, ReactNode, useEffect } from "react";

import Utilities from "./Utilities.js";
import ActionMenuItem from "./ActionMenuItem.js";

export interface IActionMenuProps {
    /**
     * Versteckt die drei Punkte in mobiler Ansicht.
     * Das kann nützlich sein, wenn mehrere ActionMenus genutzt werden, aber nicht überall der Toggle angezeigt werden soll.
     */
    hideToggleAction?: boolean;

    children?: ReactNode;
}

/**
 * <span class="badge badge-secondary">Info</span> You can also use <strong>Actions</strong> instead.<br>
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
function ActionMenu({ hideToggleAction = false, children }: IActionMenuProps) {
    const [actionsToggledIn, setActionsToggledIn] = useState<boolean>(false);
    const [didMount, setDidMount] = useState<boolean>(false);

    useEffect(() => {
        if (didMount === false) {
            // componentDidMount();
            setDidMount(true);
        }
    }, [didMount]);

    const componentDidMount = () => {
        initToggleStatus();

        const wrapperElement = document.querySelector(".blue-app-wrapper") as HTMLElement;

        if (wrapperElement) {
            wrapperElement.onclick = toggleActions;
        }

        document.querySelectorAll(".blue-app-actions-menu .nav-link").forEach(link => {
            link.addEventListener("click", () => {
                if (actionsToggledIn) {
                    toggleActions();
                }
            });
        });
    }

    const toggleActions = () => {
        Utilities.toggleActions();
        initToggleStatus();
    }

    const initToggleStatus = () => {
        setActionsToggledIn(Utilities.hasClass(document.querySelector(".blue-app-actions"), "open"));
    };

    return (
        <ul className="blue-app-actions-menu nav navbar-nav navbar-right fluent-btn">
            <div className="fluent-btn-ball" />

            {!actionsToggledIn && !hideToggleAction ?
                <ActionMenuItem
                    className="blue-app-actions-menu-toggle p-3"
                    onClick={toggleActions}
                    icon={actionsToggledIn ? "bi-navigate_cross" : "bi-iconmonstr-menu-7"}
                />
                : ""
            }

            {children}
        </ul>
    );
}

export default ActionMenu;