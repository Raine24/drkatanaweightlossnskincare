import React from "react";

// Add your own YouTube Video IDs here!
// You can find the Video ID in the URL of your YouTube video:
// e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ -> The ID is dQw4w9WgXcQ
const youtube_data = [
  { id: "UDTWJ3sM9BE" },
  { id: "-3751XmhFmc" },
  { id: "rCcGu_DUtbw" },
  { id: "B4z_amKws4U" },
  { id: "CFYT2GD8yPI" },
  { id: "aguXGzQK9wk" },
];

const InstagramAreaThree = () => {
  return (
    <>
      <style>{`
        .tp-youtube-area {
          padding: 80px 0;
          background-color: #faf7f9;
        }
        .tp-youtube-title {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 50px;
          color: #111;
          letter-spacing: -1px;
        }
        
        /* YouTube Video Container */
        .youtube-item-wrapper {
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.4s ease;
          /* 16:9 Aspect Ratio */
          width: 100%;
          padding-bottom: 56.25%; 
        }
        
        .youtube-item-wrapper:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(194, 24, 91, 0.15);
        }

        .youtube-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>

      <section className="tp-youtube-area">
        <h2 className="tp-youtube-title">Follow Us on YouTube</h2>
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gx-4 gy-4">
            {youtube_data.map((item, index) => (
              <div className="col" key={index}>
                <div className="youtube-item-wrapper">
                  <iframe 
                    className="youtube-iframe"
                    src={`https://www.youtube.com/embed/${item.id}?rel=0`} 
                    title={`YouTube Video ${index + 1}`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramAreaThree;
