import gsap from "gsap";

export const introAnimation = (wordsGroupRef) => {
  const tl = gsap.timeline();

  tl.to(wordsGroupRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const progressAnimation = (progressRef, progressNumRef) => {
  const tl = gsap.timeline();
  //Progress bar animation controll
  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  });
  return tl;
};
