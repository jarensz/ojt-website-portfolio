import { useState } from "react";
import styles from "./ReadMore.module.css";

import tintin1 from "../../assets/images/WEBSITE - TinTin The Barber/TinTin1.jpg";
import tintin2 from "../../assets/images/WEBSITE - TinTin The Barber/TinTin2.jpg";
import tintin3 from "../../assets/images/WEBSITE - TinTin The Barber/TinTin3.jpg";
import wkl1 from "../../assets/images/GAME - Whisklaws/Whisklaws1.jpg";
import wkl2 from "../../assets/images/GAME - Whisklaws/Whisklaws2.jpg";
import wkl3 from "../../assets/images/GAME - Whisklaws/Whisklaws3.jpg";
import jv1 from "../../assets/images/GAME&WEBSITE - JuanVote/JV1.jpg";
import jv2 from "../../assets/images/GAME&WEBSITE - JuanVote/JV2.jpg";
import jv3 from "../../assets/images/GAME&WEBSITE - JuanVote/JV3.jpg";
import jv4 from "../../assets/images/GAME&WEBSITE - JuanVote/JV4.jpg";
import jv5 from "../../assets/images/GAME&WEBSITE - JuanVote/JuanVote2ndRunnerUp_UMAK.jpg";
import cv from "../../assets/SACDALAN_CV.pdf";

function ReadMore() {
  const carouselItems = [
    {
      image: tintin1,
      title: "My First Website Project",
      description:
        "This was our group's project for our Web Development subject back on 2nd Year. TinTin The Barber is a growing barbershop business established by Mr. Angelo Valdez. He took the opportunity with us to increase their brand's marketing through developing a website for their bussiness.",
    },
    {
      image: tintin2,
      title: "TinTin The Barber Website",
      description:
        "The wesbite mainly shows the services and products that TinTin The Barber offer. They can also go this website to book a schedule or contact them for special haircut services. These website also includes directions on how to get their business' location.",
    },
    {
      image: tintin3,
      title: "TinTin The Barber Website",
      description:
        "The wesbite mainly shows the services and products that TinTin The Barber offer. They can also go this website to book a schedule or contact them for special haircut services. These website also includes directions on how to get their business' location.",
    },
    {
      image: wkl1,
      title: "My First Game Development Project",
      description:
        "This was our group's project for our Game Development subject back on 3rd year. Whisklaws is a RPG game where you play as a hero cat with a crane machine as a weapon that can be used to strike down your enemies with powerful weapons.",
    },
    {
      image: wkl2,
      title: "Whisklaws - Battle RPG Crane Game",
      description:
        "In the simplest form, the game mechanic is just to get weapons in the crane corresponding to the enemy's weakness. Defeat all the monster waves to clear each level. The enemy's get stronger each level which gives player the challenge to be more strategic on how to utilize weapons in their crane.",
    },
    {
      image: wkl3,
      title: "Whisklaws - Battle RPG Crane Game",
      description:
        "In the simplest form, the game mechanic is just to get weapons in the crane corresponding to the enemy's weakness. Defeat all the monster waves to clear each level. The enemy's get stronger each level which gives player the challenge to be more strategic on how to utilize weapons in their crane.",
    },
    {
      image: jv1,
      title: "Our Capstone Project, A Unity Game for Civic Education",
      description:
        "JuanVote is our research group's project for Capstone on our 4th year. This is a game which its objective is to teach the players, especially the youth, to become a smart and responsible voter. We have partnered with Parish Pastoral Council for Responsible Voting (PPCRV), a prominent organization for vote counting and civic education to develop this game.",
    },
    {
      image: jv2,
      title: "JuanVote - Civic Education Game",
      description:
        "The game's main catch is for the players to find the best candidate for the in-game's election according to their information gathered on the mediums we use in our daily lives such as the television, newspaper, social media and more! After the in-game's campaign period ends, the player can now proceed to voting the candidates they think are best.",
    },
    {
      image: jv3,
      title: "JuanVote: Halalan Tracker Website",
      description:
        "This the game's landing page website where the players can see the total votes of in-game candidates after the election.",
    },
    {
      image: jv4,
      title: "JuanVote: Halalan Tracker Website",
      description:
        "The players can also download the game here in the website's landing page and see more about the requirement's and development of the game.",
    },
    {
      image: jv5,
      title: "UMAK ITlympics Competition - JuanVote: 2nd Runner Up",
      description:
        "JuanVote also won us the 2nd Runner Up award in the University of Makati's 14th ITlympics competition under the category of Game Development. Even though our group came as underdogs on the competition, we still got a placement and I am glad and proud that our hardwork and sleepless nights wasn't for nothing.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = carouselItems[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.cardsContainer}>
      {/* LEFT — BIG CAROUSEL */}
      <article className={`${styles.profileCard} ${styles.carouselCard}`}>
        <div className={styles.media}>
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className={styles.profileImage}
          />

          {/* Carousel controls */}
          <button
            className={`${styles.carouselBtn} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            className={`${styles.carouselBtn} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className={styles.profileIntroduction}>
          <h2 className={styles.name}>{currentItem.title}</h2>
          <p className={styles.introductionText}>
            {currentItem.description}
          </p>
        </div>
      </article>

      {/* RIGHT — STACKED INFO */}
      <div className={styles.rightColumn}>
        <article className={styles.profileCard}>
          <div className={styles.profileIntroduction}>
            <h2 className={styles.name}>Basic Information</h2>
            <p><strong>Name:</strong> Jandel Clarrence Sacdalan</p>
            <p><strong>Birthdate:</strong> August 30</p>
            <p><strong>Education:</strong> Bachelor of Science in Information Technology – Pamantasan ng Lungsod ng Valenzuela</p>
            <p><strong>Interests:</strong> Web Development, UI/UX Design, Game Development and Design</p>
          </div>
        </article>

        <article className={styles.profileCard}>
          <div className={styles.profileIntroduction}>  
            <h2 className={styles.name}>My Skills</h2>
            <p><strong>Scripting:</strong> HTML, CSS, Javascript, ReactJS</p>
            <p><strong>Programming:</strong> Java, C#</p>
            <p><strong>UI/UX Design:</strong> Figma, Canva, Photoshop</p>
            <p><strong>Other Skills:</strong> Video Editing, Photo Editing, MS Office Operation</p>

            <a
              href={cv}
              download
              className={styles.readMore}
            >
              Download CV
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ReadMore;
