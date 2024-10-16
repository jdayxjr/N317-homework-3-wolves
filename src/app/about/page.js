import aboutStyles from '@/app/about/about.module.css'

export default function About() {





    return (
<main>
    <div className={aboutStyles.aboutContainer}>

<div className={aboutStyles.aboutHeading}>About US</div>

        <div className={aboutStyles.aboutmainText}>
       Welcome to Wolf Park, where the wild spirit of wolves comes to life! Our park is dedicated to the conservation, education, and appreciation of these magnificent animals. Nestled in nature's beauty, we provide a sanctuary for wolves and a unique opportunity for visitors to learn about their importance in the ecosystem.</div>
    </div>
    <div className={aboutStyles.aboutbodyHeader}>Meet the Wolves. Learn Their Story.</div>
<div className={aboutStyles.aboutbodyContainer} >
   


<div className={aboutStyles.aboutbodyContent} >

<div className={aboutStyles.aboutbodyText}>
  <div className="paragraph-spaced">
    At Wolf Park, we’re more than just a park—we are a home for wolves and a place where their stories come to life. 
    Each wolf here has a unique journey, and we’re proud to provide a sanctuary where they can thrive, safe from the threats they face in the wild.
    <br /><br />
    Our mission is to protect and preserve these majestic animals while offering you a chance to connect with them on a deeper level. 
    Through guided tours, you’ll get to meet our resident wolves, learn about their individual personalities, and hear the tales of their survival and resilience. 
    Every wolf has a story, and we’re here to share it with you.
    <br /><br />
    In addition to conservation, we are committed to education. 
    Our programs are designed to inspire a deeper understanding of wolves and their critical role in the ecosystem. 
    Visitors of all ages are encouraged to explore the rich history of wolf conservation, the challenges wolves face today, and what we can all do to help secure their future.
    <br /><br />
    Whether you’re passionate about wildlife or simply curious about the world of wolves, you’ll leave our park with a newfound respect and admiration for these incredible creatures. 
    Come, listen to the howls, and join us in celebrating and protecting wolves for generations to come.
  </div>
</div>

<div className={aboutStyles.aboutbodyImage}></div>
</div>
</div>

        </main>
    );
}
