import { useState } from "react";
import styles from "./OJTExperience.module.css";

// Images
import june1 from "../../assets/images/Documentation Photos for Website/06-23.jpg";
import june2 from "../../assets/images/Documentation Photos for Website/06-24.jpg";
import june3 from "../../assets/images/Documentation Photos for Website/06-25.jpg";
import june4 from "../../assets/images/Documentation Photos for Website/06-27.jpg";
import june5 from "../../assets/images/Documentation Photos for Website/06-30.jpg";
import july1 from "../../assets/images/Documentation Photos for Website/07-02.jpg";
import july2 from "../../assets/images/Documentation Photos for Website/07-07.jpg";
import july3 from "../../assets/images/Documentation Photos for Website/07-09.jpg";
import july4 from "../../assets/images/Documentation Photos for Website/07-11.jpg";
import july5 from "../../assets/images/Documentation Photos for Website/07-15.jpg";
import august1 from "../../assets/images/Documentation Photos for Website/08-01.jpg";
import august2 from "../../assets/images/Documentation Photos for Website/08-06.jpg";
import august3 from "../../assets/images/Documentation Photos for Website/08-14.jpg";
import august4 from "../../assets/images/Documentation Photos for Website/08-20.jpg";
import august5 from "../../assets/images/Documentation Photos for Website/08-28.jpg";
import sept1 from "../../assets/images/Documentation Photos for Website/09-08.jpg";
import sept2 from "../../assets/images/Documentation Photos for Website/09-29.jpg";
import sept3 from "../../assets/images/Documentation Photos for Website/09-30.jpg";
import oct1 from "../../assets/images/Documentation Photos for Website/10-01-1.jpg";
import oct2 from "../../assets/images/Documentation Photos for Website/10-01.jpg";
import oct3 from "../../assets/images/Documentation Photos for Website/10-14.jpg";
import oct4 from "../../assets/images/Documentation Photos for Website/10-15.jpg";
import oct5 from "../../assets/images/Documentation Photos for Website/10-16.jpg";

function MyOJTExperience() {
  const experiencesByMonth = {
    June: {
      images: [june1, june2, june3, june4, june5],
      entries: [
        { description: "June marked the beginning of my OJT, and it immediately immersed me in real technical work such as troubleshooting internet connectivity issues, managing cables, and setting up computers in the library. Starting with hands-on tasks helped me quickly adjust to the work environment and understand the importance of network stability in daily operations. This month built my confidence and set a strong foundation for my technical and professional growth." },
      ]
    },
    July: {
      images: [july1, july2, july3, july4, july5],
      entries: [
        { description: "In July, I handled more varied and challenging tasks, including desktop hardware repairs, printer maintenance, computer laboratory setups, ETDR troubleshooting, and Ethernet cable crimping. I became more efficient in diagnosing problems and learned how to work systematically under supervision. This month helped strengthen my problem-solving skills and made me more comfortable working independently on technical issues." }
      ]
    },
    August: {
      images: [august1, august2, august3, august4, august5],
      entries: [
        { description: "August focused heavily on computer deployment, inventory management, operating system installation, and network troubleshooting across offices and laboratories. I learned the importance of documentation, organization, and preventive maintenance while preparing systems for deployment. This month taught me that proper planning and record-keeping are just as important as technical skills in IT operations." }
      ]
    },
    September: {
      images: [sept1, sept2, sept3],
      entries: [
        { description: "September was a balance between technical work and academic responsibilities, as I handled internet troubleshooting, hardware diagnostics, server-related issues, and system formatting while also managing capstone requirements. Observing office operations during quieter days helped me understand workflow management and workplace dynamics. This month emphasized adaptability, time management, and the ability to prioritize responsibilities effectively." }
      ]
    },
    October: {
      images: [oct1, oct2, oct3, oct4, oct5],
      entries: [
        { description: "October served as the culmination of my OJT experience, where I performed advanced tasks such as power supply replacement, system upgrades, server support, event technical assistance, and final inventory inspections. As my last month, it allowed me to apply everything I learned with confidence and minimal supervision. Finishing the program made me feel accomplished, prepared, and more confident in pursuing future IT-related roles." }
      ]
    }
  };

  const months = Object.keys(experiencesByMonth);

  const [selectedMonth, setSelectedMonth] = useState("June");
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMonthData = experiencesByMonth[selectedMonth];

  const currentImage =
    currentMonthData.images[currentIndex % currentMonthData.images.length];

  const currentEntry =
    currentMonthData.entries[currentIndex % currentMonthData.entries.length];

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? currentMonthData.images.length - 1
        : prev - 1
    );
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setCurrentIndex(0);
  };

  return (
    <section className={styles.container}>
      <article className={styles.card}>
        {/* HEADER */}
        <header className={styles.cardHeader}>
          <h2 className={styles.title}>Internship Experiences</h2>

          <select
            className={styles.dropdown}
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </header>

        {/* MEDIA */}
        <div className={styles.media}>
          <img
            src={currentImage}
            alt={`${selectedMonth} internship`}
            className={styles.image}
          />

          <button
            className={`${styles.carouselBtn} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            className={`${styles.carouselBtn} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* TEXT */}
        <div className={styles.body}>
          <p className={styles.description}>
            {currentEntry.description}
          </p>
        </div>
      </article>
    </section>
  );
}

export default MyOJTExperience;
