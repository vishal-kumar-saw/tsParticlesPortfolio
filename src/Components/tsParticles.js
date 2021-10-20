import React, { Component } from "react";
import Particles from "react-tsparticles";
import duck from "./icons/outline-duck.png"

class ParticleBG extends Component {
  render() {
    return (
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          backgroundMode: {
            enable: true,
            zIndex: -1,
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 0.4,
                opacity: 0.8,
                size: 30,
              },
              push: {
                quantity: 4,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
            },
          },
          particles: {
            color: {
              value: "random",
            },
            links: {
              distance: 100,
              color: {
                value: "random",
              },
              enable: false,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            // shape: {
            //   type: "circle",
            // },
            shape: {
              image: {
                height: 128,
                src: duck,
                width: 128,
              },
              type: "image",
            },
            size: {
              value: 15,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default ParticleBG;