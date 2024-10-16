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
                        <p>Help our scouts locate all the wolves in the national park...</p>
                        <button className={exploreStyles.learnMoreButton}>Learn More</button>
                    </div>

                    <div className={exploreStyles.exploreBox}>
                        <Image
                            src="/about-wolf.jpg" // Path relative to the 'public' folder
                            alt="Explore the wild"
                            width={300}  // Set the desired width
                            height={200} // Set the desired height
                        />
                        <h3>Wolf Search</h3>
                        <p>Help our scouts locate all the wolves in the national park...</p>
                        <button className={exploreStyles.learnMoreButton}>Learn More</button>
                    </div>

                    <div className={exploreStyles.exploreBox}>
                        <Image
                            src="/about-wolf.jpg" // Path relative to the 'public' folder
                            alt="Explore the wild"
                            width={300}  // Set the desired width
                            height={200} // Set the desired height
                        />
                        <h3>Wolf Search</h3>
                        <p>Help our scouts locate all the wolves in the national park...</p>
                        <button className={exploreStyles.learnMoreButton}>Learn More</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
