import React, { useState } from "react";

const Rate = ({
    defaultRating = 0,
    starOnClass = "star on",
    starOffClass = "star off",
}) => {
    const [rating, setRating] = useState(defaultRating);
    const [hover, setHover] = useState(0);

    const handleClick = (star) => {
        setRating(star);
    };

    return (
        <div className="rate-container">
            <div className="stars flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        type="button"
                        key={star}
                        className={star <= (hover || rating) ? starOnClass : starOffClass}
                        onClick={() => handleClick(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    >
                        ★
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Rate;
