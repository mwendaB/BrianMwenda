"use client"
import "./About.scss";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { bios } from "@/app/Data";
import createGlobe from "cobe";

const About = () => {
  const canvasRef = useRef();
  const mobileCanvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 500 * 2,
      height: 500 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        // { location: [37.7595, -122.4367], size: 0.03 },
        // { location: [40.7128, -74.006], size: 0.1 },
        { location: [-2.286389, 36.817223], size: 0.05 },

      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(mobileCanvasRef.current, {
      devicePixelRatio: 2,
      width: 250 * 2,
      height: 250 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [-2.286389, 36.817223], size: 0.05 },

      ],
      onRender: (state) => {

        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hidden w-full place-items-center lg:grid">
            <canvas
              ref={canvasRef}
              className="-mt-16"
              style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            />
          </div>
          <div className="grid w-full place-items-center lg:hidden">
            <canvas ref={mobileCanvasRef}
              style={{ width: 250, height: 250, aspectRatio: 1 }} />
          </div>

        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
<p>
  Accomplished Software Developer with 5+ years of expertise crafting scalable, user-centric applications across web and mobile platforms. Specialized in modern frontend frameworks (Next.js, Nuxt.js, React) alongside robust backend technologies (Node.js, Python). Demonstrated success integrating advanced AI solutions including DeepSeek, Gemini, and OpenAI.
  <ul>
    <li>Successfully deployed 15+ production-grade applications</li>
    <li>Improved website performance metrics by 30%</li>
    <li>Seamlessly integrated diverse third-party APIs to expand functionality</li>
  </ul>
  Driven by a commitment to solve complex technical challenges and develop innovative solutions that deliver measurable business impact. Combines technical excellence with a focus on creating meaningful user experiences that drive growth and efficiency.
</p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
      href="/BrianMwenda.pdf"
            download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};


export default About;
