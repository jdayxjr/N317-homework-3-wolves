"use client";  

import { useState } from 'react';
import Image from 'next/image';
import exploreStyles from './explore.module.css';

export default function ExploreImage({ title, description, imageUrl, extraInfo }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={exploreStyles.exploreBox}>
            <Image
                src={imageUrl} // Path relative to the 'public' folder
                alt="Explore the wild"
                width={300}
                height={200}
            />
            <h3>{title}</h3>
            <p>{description}</p>

            {/* Conditionally render extra information if isExpanded is true */}
            {isExpanded && (
                <p className={exploreStyles.extraInfo}>{extraInfo}</p>
            )}

            {/* Button toggles between "Learn More" and "Show Less" */}
            <button onClick={handleToggle} className={exploreStyles.learnMoreButton}>
                {isExpanded ? "Show Less" : "Learn More"}
            </button>
        </div>
    );
}