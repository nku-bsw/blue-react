import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities";
import MenuItem from "./MenuItem";

/**
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            value: "",
            focus: false
        };

        this.SearchControlId = "blue-app-search-control-" + Utilities.guid();
    }

    static get defaultProps() {
        return {
            autoFocus: false,
            body: false,
            className: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" ></path> <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" ></path> </svg>,
            onChange: (event) => { },
            onSubmit: (event) => { },
            placeholder: "",
            reset: false,
            resetIcon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" ></path> <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" ></path> </svg>,
            sidebar: false,
            value: ""
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    }

    toggleSidebar() {
        if (this.props.sidebar) {
            document.dispatchEvent(window.toggleSidebarEvent);
        }
    }

    render() {
        return (
            <form
                className={
                    "blue-app-search " +
                    (this.props.body ? "blue-app-search-body " : "") +
                    (this.state.focus ? "focus " : "") +
                    this.props.className
                }
                onSubmit={event => {
                    event.preventDefault();
                    this.toggleSidebar();
                    this.props.onSubmit(event);
                }}
            >
                <div className="blue-app-search-input-group input-group">
                    <div
                        className="input-group-prepend"
                        onClick={() => document.getElementById(this.SearchControlId).focus()}
                    >
                        <span className="input-group-text">
                            {this.props.icon}
                        </span>
                    </div>

                    <input
                        type="search"
                        value={this.state.value}
                        onChange={event => {
                            this.setState({ value: event.target.value });
                            this.props.onChange(event);
                        }}
                        id={this.SearchControlId}
                        className="blue-app-search-control form-control default input-lg"
                        placeholder={this.props.placeholder}
                        autoFocus={this.props.autoFocus}
                        style={{
                            zIndex: (this.props.body ? "0" : "")
                        }}
                        onFocus={() => this.setState({ focus: true })}
                        onBlur={() => this.setState({ focus: false })}
                    />

                    {this.props.reset && this.state.value.length > 0 &&
                        <div className="input-group-btn">
                            <button
                                type="button"
                                className="blue-app-search-reset-btn btn btn-link btn-lg"
                                onClick={() => {
                                    this.setState({ value: "" }, () => {
                                        document.getElementById(this.SearchControlId).focus();
                                    });
                                    this.props.onChange({
                                        target: {
                                            value: ""
                                        }
                                    });
                                }}
                            >
                                {this.props.resetIcon}
                            </button>
                        </div>
                    }
                </div>


                {
                    this.props.sidebar &&
                    <MenuItem
                        href="javascript:void(0)"
                        className="blue-app-search-btn"
                        icon="bi-magnifying_glass blue-app-search-btn-icon"
                        onClick={() => {
                            this.toggleSidebar();
                            setTimeout(() => {
                                document.querySelector(".blue-app-search-control").select();
                            }, 200);
                        }}
                    />
                }

            </form>
        );
    }
}

Search.propTypes = {
    autoFocus: PropTypes.bool,

    /**
     * Wird Komponente im Body genutzt?
     */
    body: PropTypes.bool,

    className: PropTypes.string,
    icon: PropTypes.any,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,

    /**
     * Erlaube Zurücksetzen?
     */
    reset: PropTypes.bool,
    resetIcon: PropTypes.any,

    /**
     * Wird Komponente in der Sidebar genutzt?
     */
    sidebar: PropTypes.bool,

    value: PropTypes.string
};

export default Search;