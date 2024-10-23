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



    </main>
  );
}
