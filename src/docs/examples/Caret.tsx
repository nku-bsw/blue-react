import React, { useState } from "react";
import Caret from "../../components/Caret";

function CaretExample() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <div>
            <button
                className="btn btn-secondary"
                onClick={toggleIsOpen}
            >
                <Caret
                    open={isOpen}
                />
                {" "}<span>Click to toggle the caret</span>
            </button>
        </div>
    );
}

export default CaretExample;