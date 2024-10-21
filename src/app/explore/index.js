import Image from 'next/image';
import exploreStyles from './explore.module.css';

export default function ExploreImage({ title, description, imageUrl }) {
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
            <button className={exploreStyles.learnMoreButton}>Learn More</button>
        </div>
    );
}