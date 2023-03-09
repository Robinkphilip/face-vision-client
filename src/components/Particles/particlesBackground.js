import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container) => {
    await container;
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: false,
        fpsLimit: 150,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onDiv: {
              elementId: "repulse-div",
              enable: false,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 2,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            slow: {
              active: false,
              radius: 0,
              factor: 1,
            },
          },
        },
        particles: {
          color: {
            value: ["#1d64f3","#cbd3e4","#76acfb","#a3cafa","#bfc4d3","#779cec","#6494ec","#c4ccd4","#b4cef4"],
          },
          lineLinked: {
            blink: false,
            color: "random",
            consent: false,
            distance: 60,
            enable: true,
            opacity: 2,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 2000,
            },
            limit: 0,
            value: 200,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 2,
              sync: false,
            },
            random: false,
            value: 0.4,
          },
          shape: {
            type: "circle",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 30,
              sync: false,
            },
            random: true,
            value: 1,
          },
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: "rgba(255,255,255,0.2)",
            lineWidth: 0.5,
          },
          enable: true,
          move: {
            radius: 10,
          },
          position: {
            x: 30,
            y: 10,
          },
          inline: {
            arrangement: "equidistant",
          },
          scale: 1,
          type: "inline",
          url: "https://particles.js.org/images/google.svg",
        },
        background: {
          color: "##2596be",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};
export default particlesBackground;
