import React, { useEffect } from "react";
import Grid from "../../components/Grid";
import List from "../icons/List";
import House from "../icons/House";
import CodeSquare from "../icons/CodeSquare";
import Puzzle from "../icons/Puzzle";
import Receipt from "../icons/Receipt";
import Tools from "../icons/Tools";
import SidebarMenu from "../../components/SidebarMenu";
import MenuItem from "../../components/MenuItem";
import { NavLink, Switch, Route } from "react-router-dom";
import IntroductionPage from "../pages/IntroductionPage";
import UtilitiesPage from "../pages/UtilitiesPage";
import { ComponentPage } from "../pages/ComponentPage";
import { IntroDemoPage } from "../pages/IntroDemoPage";
import { HomePage } from "../pages/HomePage";

// import "../docs.scss";

export const V6 = () => {
    useEffect(() => {
        require("../docs.scss");
    });

    return (
        <Grid
            pages={[]}
            unrouteable
            expandSidebar
            sidebarToggleIconComponent={<List />}
        >
            <SidebarMenu
                bottomContent={
                    <>
                        <MenuItem
                            href="https://github.com/bruegmann/blue-react"
                            icon={<CodeSquare />}
                            label="Code on GitHub"
                            target="_blank" rel="noopener noreferrer"
                        />
                    </>
                }
            >
                <NavLink to="/v6/" exact className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                    <House /> <span className="blue-app-sidebar-label">Start</span>
                </NavLink>
                <NavLink to="/v6/introduction" className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                    <Receipt /> <span className="blue-app-sidebar-label">Introduction</span>
                </NavLink>
                <NavLink to="/v6/utilities" className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                    <Tools /> <span className="blue-app-sidebar-label">Utilities</span>
                </NavLink>
                <NavLink to="/v6/component" className="blue-app-toggle-page blue-app-sidebar-btn btn" activeClassName="active">
                    <Puzzle /> <span className="blue-app-sidebar-label">React Components</span>
                </NavLink>
            </SidebarMenu>

            <div className="router-page active">
                <Switch>
                    <Route path="/v6/introduction">
                        <IntroductionPage />
                    </Route>
                    <Route path="/v6/utilities">
                        <UtilitiesPage />
                    </Route>
                    <Route path="/v6/component/:selectedComponent?">
                        <ComponentPage />
                    </Route>

                    <Route path="/v6/intro-demo">
                        <IntroDemoPage />
                    </Route>

                    <Route path="/v6/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Grid>
    );
};