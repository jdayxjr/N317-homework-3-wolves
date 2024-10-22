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
                src={imageUrl} 
                alt="Explore the wild"
                width={300}
                height={200}
            />
            <h3>{title}</h3>
            <p>{description}</p>

           
            {isExpanded && (
                <p className={exploreStyles.extraInfo}>{extraInfo}</p>
            )}

            
            <button onClick={handleToggle} className={exploreStyles.learnMoreButton}>
                {isExpanded ? "Show Less" : "Learn More"}
            </button>
        </div>



    );
}