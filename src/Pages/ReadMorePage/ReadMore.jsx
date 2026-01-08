import { useState } from "react";
import styles from "./ReadMore.module.css";

import work1 from "../../assets/images/anaxaProfile.jpg";
import work2 from "../../assets/images/cyreneBackground.jpg";
import work3 from "../../assets/images/dogBackground.jpg";

function ReadMore() {
  const carouselItems = [
    {
      image: work1,
      title: "IT Support Internship",
      description:
        "During my internship, I assisted in troubleshooting hardware issues, maintaining computer systems, and supporting staff with technical concerns.",
    },
    {
      image: work2,
      title: "Network Setup & Maintenance",
      description:
        "I helped set up local networks, configured routers, and ensured stable connections across multiple departments.",
    },
    {
      image: work3,
      title: "Technical Documentation",
      description:
        "I created simple documentation and reports to help track system issues and solutions for future reference.",
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
              href="/files/Jandel_Sacdalan_CV.pdf"
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
