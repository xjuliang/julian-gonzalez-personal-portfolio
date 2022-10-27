import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { Children } from "react";

import { useCallback } from "react";
import ParticlesComponent from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesColor = useColorModeValue("#000", "#fff");

  return (
    <ParticlesComponent
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particlesColor,
          },
          links: {
            color: particlesColor,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 6 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particles;
