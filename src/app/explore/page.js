import exploreStyles from './explore.module.css';
import ExploreImage from './index';

export default function Page() {
    return (
        <main>
            <div className={exploreStyles.imageBanner}>
                <div className={exploreStyles.bannerText}>
                    <h1>Wolf Wild Life Explore</h1>
                    <p className={exploreStyles.bannerTextP}>
                        Embark on an adventure to discover the fascinating world of wolves in their natural habitats. Learn about their behavior, tracking, and conservation efforts while immersing yourself in the beauty of the wild. Experience the wilderness like never before and join us in protecting these magnificent creatures.
                    </p>
                </div>
            </div>

            <div className={exploreStyles.ExploreEventsText}>
                <h2>Upcoming Events</h2>
            </div>

            <div className={exploreStyles.exploreBoxWrapper}>
                <ExploreImage
                    title="Wolf Search"
                    description="The Wolf Search initiative aims to monitor and protect the wolf populations in national parks."
                    extraInfo="By studying wolf behavior and interactions, we gather crucial data that informs conservation efforts."
                    imageUrl="/about-wolf.jpg"
                />
                <ExploreImage
                    title="Wolf Awareness Month"
                    description="Wolf Awareness Month celebrates these incredible animals and their role in ecosystems."
                    extraInfo="Join us for educational events and outreach programs to promote conservation and ensure wolves thrive."
                    imageUrl="/three-wolves.jpg"
                />
                <ExploreImage
                    title="Wolf Rescue & Adapt"
                    description="The Wolf Rescue & Adapt program rehabilitates injured or orphaned wolves and prepares them for life in the wild."
                    extraInfo="Our team provides medical care and behavioral training tailored to each wolf's needs."
                    imageUrl="/wolves-on-log.jpg"
                />
            </div>
        </main>
    );
}
