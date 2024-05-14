import { useEffect, useRef } from "react";

export default function InfiniteScroll(): JSX.Element {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollerInner = useRef<HTMLUListElement>(null);

  const addAnimation = () => {
    scroller.current?.classList.add("active-scroller");
    const scrollerItems = Array.from(scrollerInner.current?.children || []);

    scrollerItems.forEach((item) => {
      const duplicate = item.cloneNode(true);
      scrollerInner.current?.appendChild(duplicate);
    });
  };

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <section className="container mx-auto my-10">
      <div className="scroller" ref={scroller}>
        <ul className="inner-scroller" ref={scrollerInner}>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsum ratione odit temporibus iste, quidem soluta omnis id dicta
            deserunt, tempora distinctio!
          </p>
        </ul>
      </div>
    </section>
  );
}
