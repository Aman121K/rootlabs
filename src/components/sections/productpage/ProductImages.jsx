import React from "react";

function ProductImages({ images, isMobileLayout }) {
  const styles = {
    image: {
      width: "80vw",
      borderRadius: 20,
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        flexDirection: "column",
        padding: "20px 10px",
        gap: 20,
        overflowX: isMobileLayout ? "auto" : "none",
        scrollbarWidth: "none", // for Firefox
        msOverflowStyle: "none", // for Internet Explorer and Edge
      }}
    >
      {!isMobileLayout ? (
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <img
            style={{
              width: "100%",
              borderRadius: 20,
            }}
            src={images ? images[0].node.url : undefined}
          />
          <div
            style={{
              top: 0,
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {images?.slice(1).map((image, index) => (
              <img
                key={index}
                style={{
                  width: "calc(50% - 10px)",
                  borderRadius: 20,
                }}
                src={image.node.url}
              />
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            padding: "0px calc(100vw - 80vw - 70px)",
            gap: 40,
          }}
        >
          {images?.map((image, index) => (
            <img key={index} style={styles.image} src={image.node.url} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductImages;
