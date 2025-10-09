export const handleScroll = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" }); // instant smooth scroll
  } else {
    // wait until the section is actually available in DOM
    const tryScroll = () => {
      const sectionAfter = document.getElementById(id);
      if (sectionAfter) {
        const yOffset = -80;
        const y =
          sectionAfter.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        // check again in the next animation frame (very fast loop)
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
  }
};
