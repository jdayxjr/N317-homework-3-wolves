import Pagestyles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={Pagestyles.homecontainerBanner}>
        <div className={Pagestyles.homeimgcontainerBanner}>
          <div className={Pagestyles.homebannerText}>
            <div> Welcome to Wolf Park</div>
            <div>Discover, protect, and celebrate wolves.</div>
          </div>
        </div>
      </div>

      <div className={Pagestyles.Firstsectioncontainer}>
        <div className={Pagestyles.homeminiImage} ></div>


        <div className={Pagestyles.hometextSection}>
          <p>Step into the wild and experience the magic of wolves up close. At Wolf Park, we provide a safe haven for these majestic animals and offer visitors a unique opportunity to witness their beauty and power. Explore our natural habitats, learn about the wolves’ role in the ecosystem, and be part of our mission to protect these incredible creatures.</p>
        </div>
      </div>
      <h1 className={Pagestyles.divtext}>Wolf Wild Life</h1>
      <div className={Pagestyles.container}>
        <div className={Pagestyles.leftDiv}>
          <img src="brown-wolves.jpg" alt="Wolf 1" />
          <p>
            Experience the serene life of wolves in their natural habitat. Learn how they
            communicate and survive in the wild, playing an essential role in maintaining
            the balance of nature.
          </p>
        </div>

        <div className={Pagestyles.rightDiv}>
          <img src="two-wolves.jpg" alt="Wolf 2" />
          <p>
            Discover the pack mentality and the intricate social dynamics that exist
            within wolf packs. Be part of a journey that helps to protect and preserve
            these incredible creatures.
          </p>
        </div>
      </div>


      <div className={Pagestyles.thirdSection}>
        <h1 h1 className={Pagestyles.divtext}>The Role of Wolves in the Ecosystem</h1>
        <p>
          Wolves play a critical role in maintaining the balance of the ecosystems in which
          they live. By controlling the population of herbivores such as deer, wolves
          help prevent overgrazing, which can lead to habitat degradation. Their predatory
          behavior indirectly supports the growth of plants and the sustainability of
          other wildlife.
        </p>
        <p>
          In areas where wolves have been reintroduced, there have been observable positive
          changes in biodiversity. For example, in Yellowstone National Park, the reintroduction
          of wolves led to a resurgence in plant life and a greater diversity of animal species.
          This phenomenon, known as a trophic cascade, demonstrates how predators like wolves
          influence the entire food chain.
        </p>
        <p>
          Additionally, wolves help control disease among prey populations by culling the
          weak, sick, and elderly animals. This natural selection process helps keep prey
          populations healthy, reducing the spread of diseases such as chronic wasting disease
          in deer. Through their actions, wolves are essential to the health of many ecosystems.
        </p>
      </div>


      {/* Fourth Section */}
      <div className={Pagestyles.fourthSection}>
        <h1 className={Pagestyles.divtext}>Communication and Howling</h1>
        <p>
          Wolves use a complex system of communication that includes vocalizations,
          body language, and scent marking. Howling is the most iconic form of wolf
          communication and serves several purposes, from calling pack members together
          to warning other wolves to stay away. Each wolf's howl is unique, and
          these vocalizations can carry over long distances.
        </p>
        <p>
          Wolves also communicate through body language, using gestures such as
          ear positioning, tail movements, and facial expressions to convey mood
          and intentions. For example, a wolf with its tail held high is displaying
          dominance, while a submissive wolf may crouch or lower its tail to avoid
          confrontation. This non-verbal communication is crucial for maintaining
          pack harmony.
        </p>
        <p>
          Scent marking is another important form of wolf communication. Wolves use
          their scent to mark territory, leaving clear signals to other wolves about
          the boundaries of their home range. This method of communication helps
          reduce conflicts between neighboring packs, allowing wolves to coexist in
          relative peace in the wild.
        </p>
      </div>


      <div className={Pagestyles.fifthSection}>
        <h1 className={Pagestyles.divtext}>Wolves as Social Animals</h1>
        <p>
          Wolves are highly social animals that live in packs with structured hierarchies.
          The alpha pair leads the pack, and all members work together to raise young and
          hunt. Social bonds within the pack are maintained through a combination of
          dominance displays, vocal communication, and mutual care.
        </p>
        <p>
          The cooperative nature of wolves is key to their success in the wild. By hunting
          in packs, wolves can take down larger prey such as elk, deer, and moose, which
          would be difficult for a single wolf to manage alone. This cooperation extends
          to raising pups, with all members of the pack contributing to their care and
          education.
        </p>
        <p>
          In addition to cooperation, wolves also engage in play, which helps strengthen
          social bonds and teach important survival skills. Play-fighting among young
          wolves helps them practice hunting techniques and learn the social dynamics of
          the pack. These playful interactions are crucial for maintaining the pack's
          cohesion and success.
        </p>
      </div>


      <div className={Pagestyles.sixthSection}>
        <h1 className={Pagestyles.divtext}>Wolves and Human Interaction</h1>
        <p>
          The relationship between wolves and humans has been complex throughout history.
          Wolves were once widely feared and hunted, leading to their near-extinction in
          many regions. However, attitudes towards wolves have shifted, and they are now
          recognized as essential contributors to healthy ecosystems.
        </p>
        <p>
          Conservation efforts across the world are aimed at protecting wolves from habitat
          loss and human conflict. Although wolves still face challenges, especially in areas
          where they come into contact with livestock, ongoing education and preservation
          initiatives are helping to reduce these conflicts. Programs that compensate ranchers
          for livestock losses due to wolves are helping to foster greater tolerance for
          wolves in regions where they are making a comeback.
        </p>
        <p>
          Wolves are also celebrated in many cultures as symbols of strength, endurance, and
          loyalty. In Native American folklore, wolves are often seen as wise teachers and
          guardians. As humans continue to learn more about these fascinating creatures,
          our relationship with them is evolving towards coexistence rather than conflict.
        </p>
      </div>


    </main>
  );
}
