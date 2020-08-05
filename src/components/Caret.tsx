import React from "react";

export interface ICaretProps {
    /**
     * Indicates if open or not.
     */
    open?: boolean;

    /**
     * By default the caret points to the right when closed. Set mirrored and it will point to the left.
     */
    mirrored?: boolean;

    className?: string;
}

/**
 * Caret icon component.
 */
function Caret({ open = false, mirrored = false, className = "" }: ICaretProps) {
    return (
        <span
            className={
                "caret " +
                (open ? " caret-open " : "") +
                (mirrored ? " caret-mirrored " : "") +
                className
            }
        />
    );
}

export default Caret;