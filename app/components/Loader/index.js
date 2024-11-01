import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { gsap } from "gsap";

import styles from "./Loader.module.scss";
import { collapseWords, introAnimation, progressAnimation } from "./animations";

const Loader = ({timeline}) => {
  
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumRef = useRef(null);
  const wordsGroupRef = useRef(null);

  //Word shuffle controller
  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordsGroupRef))
        .add(progressAnimation(progressRef, progressNumRef), 0)
        .add(collapseWords(loaderRef), "-=1")
  }, [timeline])


  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumRef}>0</span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
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
