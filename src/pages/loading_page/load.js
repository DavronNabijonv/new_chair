import React, { useEffect, useState } from "react";
import "./load.scss";
import m1 from '../../images/loading_images/img1.jpg'
import m2 from '../../images/loading_images/img2.jpg'
import m3 from '../../images/loading_images/img3.jpg'
import m4 from '../../images/loading_images/img4.jpg'
import m5 from '../../images/loading_images/img5.jpg'
import m6 from '../../images/loading_images/img6.png'
import m7 from '../../images/loading_images/img7.jpg'
import m8 from '../../images/loading_images/img8.jpg'
import m9 from '../../images/loading_images/img9.jpg'
import m10 from '../../images/loading_images/img10.jpg'

export default function Load() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading for 3 seconds
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      // Cleanup the timeout when the component unmounts
      return () => {
        clearTimeout(loadingTimeout);
      };
    }, []);
  return (
    <>
      {isLoading && (
        <div className="load">
            <img src={m1} className="m1" alt="load chair images" />
            <img src={m2} className="m2"  alt="load chair images" />
            <img src={m5} className="m5"  alt="load chair images" />
            <img src={m6} className="m6"  alt="load chair images" />
            <img src={m7} className="m7"  alt="load chair images" />
            <img src={m9} className="m9"  alt="load chair images" />
          <div className="load_txt">
            <p>stol-stullar.uz</p>
          </div>
        </div>
      )}
    </>
  );
}
