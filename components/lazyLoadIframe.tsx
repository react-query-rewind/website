"use client";
import React, { useState, useRef, useEffect } from "react";

type LazyLoadIframeProps = {
  src: string;
  title: string;
};

const LazyLoadIframe: React.FC<LazyLoadIframeProps> = ({ src, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Loads when 10% of the frame is visible
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    // disconnect the observer when component is unmounted to prevent memory leaks
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative w-full h-auto overflow-hidden rounded-lg"
      // data-aos="zoom-out"
      ref={iframeRef}
      style={{ aspectRatio: `1920/1072` }}
    >
      { isVisible &&
        <iframe
          src={src}
          frameBorder="0"
          // allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          // allowFullScreen
          title={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "90%",
            // seems like height adjusts the size
            margin: "0",
            filter: "drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.5))",
          }}
          className="shadow-lg"
        ></iframe>
      }
    </div>
  );
};

export default LazyLoadIframe;
