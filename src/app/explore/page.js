import exploreStyles from './explore.module.css';
import Image from 'next/image';
export default function Explore() {
    return (
        <main>
            <div className={exploreStyles.imageBanner}>
                <div className={exploreStyles.bannerText}><h1>Wolf Wild Life</h1>
                    <h2>exlpore the wilderness among us...</h2>
                </div>
            </div>
            <div>


                <div className={exploreStyles.ExploreEventsText}>
                    <h2>Upcoming Events</h2>
                </div>
                <div className={exploreStyles.exploreBoxWrapper}>


                    <div className={exploreStyles.exploreBox}>
                        <Image
                            src="/about-wolf.jpg" // Path relative to the 'public' folder
                            alt="Explore the wild"
                            width={300}  // Set the desired width
                            height={200} // Set the desired height
                        />
                        <h3>Wolf Search</h3>
                        <p>The Wolf Search initiative aims to monitor and protect the wolf populations in national parks. Our dedicated team of scouts employs advanced tracking techniques to locate these majestic creatures in their natural habitats. By studying their behavior and interactions, we gather crucial data that informs conservation efforts.
                        </p>
                        <button className={exploreStyles.learnMoreButton}>Learn More</button>
                    </div>

                    <div className={exploreStyles.exploreBox}>
                        <Image
                            src="/three-wolves.jpg" // Path relative to the 'public' folder
                            alt="Explore the wild"
                            width={300}  // Set the desired width
                            height={200} // Set the desired height
                        />
                        <h3>Wolf Awareness Month</h3>
                        <p>Wolf Awareness Month celebrates these incredible animals and their role in ecosystems. We host educational events and outreach programs to raise awareness about the challenges wolves face. Join us in promoting conservation efforts and ensuring a future where wolves can thrive.

                        </p>
                        <button className={exploreStyles.learnMoreButton}>Learn More</button>
                    </div>

                    <div className={exploreStyles.exploreBox}>
                        <Image
                            src="/wolves-on-log.jpg" // Path relative to the 'public' folder
                            alt="Explore the wild"
                            width={300}  // Set the desired width
                            height={200} // Set the desired height
                        />
                        <h3>Wolf Recuse & Adapt</h3>
                        <p>The Wolf Rescue & Adapt program rehabilitates injured or orphaned wolves and prepares them for life in the wild. Our team provides medical care and behavioral training tailored to each wolf's needs, enhancing their chances of survival.</p>
                        <button className={exploreStyles.learnMoreButton}>Learn More</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
