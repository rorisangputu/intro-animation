import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { gsap } from "gsap";

import styles from "./Loader.module.scss";

const Loader = () => {
  
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumRef = useRef(null);
  const wordsGroupRef = useRef(null);

  //Word shuffle controller
  useEffect(() => {
    gsap.to(wordsGroupRef.current, {
      yPercent: -80,
      duration: 5,
      ease: "power3.inOut",
    });
      //Progress bar animation controll
  gsap.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: 'power3.inOut'
  })
  }, [])


  return (
    <div className={styles.loader__wrapper} ref={loaderRef}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumRef}>0</span>
      </div>
      <div className={styles.loader}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordsGroupRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
