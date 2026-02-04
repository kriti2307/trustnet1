export default function ImageSlider() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",

  ];

  return (
    <div style={{ overflow: "hidden", width: "100%", padding: "40px 0" }}>
      <div className="force-slider">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            style={{
              width: "280px",
              height: "200px",
              flexShrink: 0,
              borderRadius: "16px",
              overflow: "hidden",
              marginRight: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={src}
              alt="gallery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
