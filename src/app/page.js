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
    </main>
  );
}
