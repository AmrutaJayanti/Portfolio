import React, { useRef, useEffect } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shapes = [];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < 50; i++) {
      shapes.push({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        size: random(20, 60),
        speedX: random(-0.5, 0.5),
        speedY: random(-0.5, 0.5),
        type: Math.random() > 0.5 ? "circle" : "rect",
        color: `hsl(${random(0, 360)}, 70%, 70%)`,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const shape of shapes) {
        ctx.fillStyle = shape.color;
        if (shape.type === "circle") {
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(shape.x, shape.y, shape.size, shape.size);
        }

        shape.x += shape.speedX;
        shape.y += shape.speedY;

        if (shape.x < 0 || shape.x > canvas.width) shape.speedX *= -1;
        if (shape.y < 0 || shape.y > canvas.height) shape.speedY *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        background: "#f2ead0",
      }}
    />
  );
};

export default Background;
