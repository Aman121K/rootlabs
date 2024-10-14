import React, { useRef, useEffect, useState } from "react";
import ball from "../../../assets/ball.png"; // Use the correct path to your image

// BouncingImage Component
const BouncingImage = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to set canvas size dynamically
    const resizeCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);

      setCanvasSize({
        width: canvas.offsetWidth,
        height: canvas.offsetHeight - 50, // Adding bottom padding for visibility
      });
    };

    // Set the initial canvas size
    resizeCanvas();

    // Listen to the window resize event and resize the canvas
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const gravity = 0.55;
    const bounceFactor = 0.6;
    const friction = 0.98;
    const images = [];
    const imageSize = 300; // Tripled the ball size
    const numBalls = 6; // Number of balls

    // Function to create the balls
    function createImages() {
      const image = new Image();
      image.src = ball;
      image.onload = () => {
        for (let i = 0; i < numBalls; i++) {
          images.push({
            img: image,
            x: Math.random() * (canvas.width / 2),
            y: Math.random() * -canvas.height,
            width: imageSize,
            height: imageSize,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 1.5 + 0.5,
            mass: 1 + Math.random() * 0.5,
          });
        }

        animate();
      };
    }

    // Check for collisions between images
    function checkCollision(image1, image2) {
      const distX = image1.x + image1.width / 4 - (image2.x + image2.width / 4);
      const distY =
        image1.y + image1.height / 4 - (image2.y + image2.height / 4);
      const distance = Math.sqrt(distX * distX + distY * distY);
      const combinedRadius = image1.width / 4 + image2.width / 4;

      return distance < combinedRadius;
    }

    // Resolve the collision by swapping velocities
    function resolveCollision(image1, image2) {
      const tempVx = image1.vx;
      const tempVy = image1.vy;
      image1.vx = image2.vx;
      image1.vy = image2.vy;
      image2.vx = tempVx;
      image2.vy = tempVy;
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      images.forEach((image, i) => {
        // Apply gravity
        image.vy += gravity;

        // Move the image
        image.x += image.vx;
        image.y += image.vy;

        // Bounce off the bottom

        if (image.y + image.height > canvas.height / 1.9) {
          image.y = canvas.height / 1.9 - image.height; // Ensures it doesn't fall below the canvas
          image.vy *= -bounceFactor;
          image.vx *= friction; // Apply friction
        }

        // Bounce off the sides
        if (image.x + image.width > canvas.width / 1.9 || image.x < 0) {
          image.vx *= -1;
        }

        // Collision detection with other images
        for (let j = i + 1; j < images.length; j++) {
          if (checkCollision(image, images[j])) {
            resolveCollision(image, images[j]);
          }
        }

        // Draw the image
        ctx.drawImage(image.img, image.x, image.y, image.width, image.height);
      });

      requestAnimationFrame(animate);
    }

    createImages();
  }, [canvasSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        width: "calc(100% - 50px)",
        height: "calc(100% - 50px)",
        // border: "1px solid black",
      }}
    />
  );
};

export default BouncingImage;
