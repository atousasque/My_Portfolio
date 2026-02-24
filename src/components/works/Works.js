import React, { useState } from "react";
import { Container, Typography, Modal, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Works.css';

// import LongDrive from '../../assets/recentprojects/LongDrive.mp4';
// import LongDriveSecond from '../../assets/recentprojects/LongDrive2.mp4';
// import Blender from '../../assets/recentprojects/Blender1.mp4';
// import BlenderSecond from '../../assets/recentprojects/Blender2.mp4';
// import Fishing from '../../assets/recentprojects/FishingSimulator.mp4';
// import Shooter from '../../assets/recentprojects/MultiplayerShooter.mp4';
// import AfterEffect from '../../assets/recentprojects/AFterEffect.mp4';

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: 'auto',
  },
modalBox: {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(30,30,30,0.95)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
  padding: '2rem',
  maxWidth: '600px',
  width: '90%',
  color: '#fff',
  maxHeight: '95vh',       // ✅ add max height
  overflowY: 'auto',       // ✅ enable vertical scroll
},
  showMore: {
    color: '#ec704c',
    fontSize: '0.9rem',
    marginTop: '1rem',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
}));

const projects = [
  {
    id: 1,
    title: 'LongDrive',
    description: `LongDrive is a semi-autonomous driving simulation built in Unity, based on Austria's real highway network. I co-developed the game systems and created the terrain and environment.`,
    video: "https://github.com/Atousa98/My_Portfolio/releases/download/v1.1/LongDrive.mp4",
    modal: {
      image: "https://github.com/Atousa98/My_Portfolio/releases/download/v2.0/LongDrive.jpg",  // Make sure this exists in public/images/
      content: (
        <>
          <p>
            <strong>LongDrive</strong> is a collaborative Unity simulation inspired by truck-driving games like Euro Truck Simulator.
            It was designed for testing automated driving behavior, featuring tasks like paying tolls or handling distractions
            while monitoring the vehicle’s AI.
          </p>
          <p><strong>My contributions included:</strong></p>
          <ul>
            <li>Modeling the cities</li>            
            <li>Painting and shaping the terrain using imported heightmaps</li>
            <li>Designing and placing natural environments, including trees, roadsides, and forests</li>
            <li>Adjusting the scenery to align with the handcrafted road network (EasyRoads3D)</li>
          </ul>
          <p>
            My teammate developed the UI, delivery logic, and AI behavior. 
          </p>
          <p>
            🔒 This project is part of an academic course and stored in a <strong>private repository</strong>,
            so the source code is not publicly shareable.
          </p>
          <p>
            <strong>Tech stack:</strong> Unity 2023.3, EasyRoads3D, RCC, Gley AI Traffic, Terrain Tools, custom prefabs.
          </p>
        </>
      )
    }
    
  },
  
  {
    id: 2,
    title: 'LongDrive: Extended',
    description: `LongDrive: Extended is the finalized version of our semi-autonomous highway driving simulator. It introduces infotainment-based in-car tasks and G29 steering wheel support.`,
    video: "https://github.com/Atousa98/My_Portfolio/releases/download/v1.2/LongDrive2.mp4",
    modal: {
      image: "https://github.com/Atousa98/My_Portfolio/releases/download/v2.1/Extended.jpg", // Replace with your actual modal image if any
      content: (
        <>
          <p>
            <strong>LongDrive: Extended</strong> builds on the original prototype, enhancing realism and complexity.
            Players drive on a recreated Austrian highway network while managing tasks in a fully interactive infotainment system.
          </p>
          <p><strong>Key features include:</strong></p>
          <ul>
            <li>Infotainment system with live internet radio, media player, phone, navigation, and task menus</li>
            <li>Task system requiring the player to complete road tax payments, phone calls, and text messages during autonomous driving</li>
            <li>Support for G29 steering wheel with Force Feedback and realistic controls</li>
            <li>Position selector scene for custom spawn points</li>
            <li>AI improvements for NPCs and player-car lane behavior</li>
          </ul>
          <p>
            My contributions focused on terrain and environment design, implementing internet-radio and media player, building the task system, traffic-signs and car interior, as well as designing the UI for the main menu and ensuring visual polish across the scene.
          </p>
          <p>
            <strong>Tech stack:</strong> Unity 2023.3, VLC for Unity, Gley AI Traffic, RCC, Terrain Tools, Logitech SDK.
          </p>
          <p>
            🔒 This project is part of an academic study on driver distraction and trust in automation. Repository access is private.
          </p>
        </>
      )
    }
  },

  { 
    id: 3,
    title: 'Fishing Simulator', 
    description: `A VR-ready Unity simulation recreating a peaceful fishing experience with natural terrain and immersive audio-visual design.`,
    video: "https://github.com/Atousa98/My_Portfolio/releases/download/v1.6/FishingSimulator.mp4",
    modal: {
      content: (
        <>
          <p>
            <strong>Fishing Simulator</strong> is a calm, immersive Unity-based simulation originally built for VR headsets, 
            but also playable without them for exhibition purposes. The experience focuses on sensory realism through detailed environmental design.
          </p>
          <p><strong>My contributions included:</strong></p>
          <ul>
            <li>Designing and updating the high-fidelity environment of the simulation.</li>
            <li>Helped with integrating the simulation with VR hardware (head tracking, input controls)</li>
          </ul>
          <p>
            The simulation was designed with accessibility in mind, allowing seamless transitions between VR and screen-based setups for demonstrations.
          </p>
          <p><strong>Tech stack:</strong> Unity HDRP, VR Toolkit (XR Interaction Toolkit), baked lighting, water shaders, and Gaia procedural world.</p>
          <p>🔗 <a href="https://github.com/reapphil/HGB_FishingSimulator" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
        </>
      )
    }
  },
  {
    id: 4,
    title: 'Recoil Rumble',
    description: `Recoil Rumble is a fast-paced, retro-style multiplayer FPS with powerful knockback mechanics and stylized visuals.`,
    video: "https://github.com/Atousa98/My_Portfolio/releases/download/v1.5/MultiplayerShooter.mp4",
    modal: {
      image: "https://github.com/Atousa98/My_Portfolio/releases/download/v2.3/Recoil.jpg", // Replace with your actual modal image if any
      content: (
        <>
          <p>
            <strong>Recoil Rumble</strong> is a multiplayer arena shooter built in Unreal Engine, focused on chaotic movement and tactical physics. Players battle using a unique recoil system that launches them across maps using high-knockback weapons.
          </p>
          <p><strong>Game highlights:</strong></p>
          <ul>
            <li>Fast-paced gameplay with 7 distinct weapons, including a grappling hook and remote-detonated mines</li>
            <li>3 game modes: Team Deathmatch, Free For All, Capture The Flag</li>
            <li>3 stylized, retro-inspired maps</li>
            <li>Retro PSX-style visuals using dithering shaders and minimalist lighting</li>
          </ul>
          <p><strong>My contributions included:</strong></p>
          <ul>
            <li>Design and implementation of all user interface components (menus, HUD, status elements)</li>
            <li>Ensuring UI responsiveness and styling to match the PSX aesthetic</li>
            <li>Supporting level design with layout adjustments and user feedback flow</li>
          </ul>
          <p><strong>Tech stack:</strong> Unreal Engine 5, Blueprints, custom UI widgets, multiplayer networking.</p>
          <p>
            🔒 This project is part of a university collaboration and is stored in a <strong>private repository</strong>,
            so the source code is not publicly accessible.
          </p>
        </>
      )
    }
  },  
  { 
    id: 5,
    title: 'Blender Project 1', 
    description: `Designed and modeled a detailed interior filled with books, furniture, and decor. The camera rotates around the space to reveal different angles, emphasizing depth and layout. Applied custom textures to all assets, including wood, fabric, and paper materials. Focused on composition, lighting, and scene storytelling through asset placement and animation.`,
    alter: 'Blender Project 1',
    video: "https://github.com/Atousa98/My_Portfolio/releases/download/v1.4/Blender2.mp4"
  },
  { 
    id: 6,
    title: 'Blender Project 2', 
    description: `Created a detailed snow globe scene featuring a snowy cabin, Christmas tree, and snowman. Modeled all assets from scratch, applied custom shaders, and set up lighting for a cozy winter feel. Used rigid body physics to animate falling snowballs and a collapsing tree when the globe rotates. The project involved keyframe animation, material setup, and physics simulation within Blender.`,
    alter: 'Blender Project 2',
    video: "https://github.com/Atousa98/My_Portfolio/releases/download/v1.3/Blender1.mp4"
  },
  {
    id: 7,
    title: 'Logo Animation',
    description: `Animated logo and social content for a company’s branding, covering motion graphics, reels, and Instagram strategy.`,
    video: "https://github.com/Atousa98/My_Portfolio/releases/download/v1.0/AfterEffect.mp4",
    modal: {
      image: "https://github.com/Atousa98/My_Portfolio/releases/download/v2.2/Motion.jpg", // Add this image to your public folder
      content: (
        <>
          <p>
            <strong>Logo Animation & Content Design</strong> involved creating a custom animated logo intro/outro using Adobe After Effects, designed to enhance the brand identity of a client’s video content.
          </p>
          <p><strong>My responsibilities included:</strong></p>
          <ul>
            <li>Designing and animating a professional logo motion tailored for Instagram reels and video content</li>
            <li>Managing visual branding across their Instagram page, including all post/reel layouts</li>
            <li>Editing short-form video content optimized for social media engagement</li>
          </ul>
          <p>
            I ensured consistent style, modern animation timing, and engaging visuals for content across different formats and screen sizes.
          </p>
          <p><strong>Tools used:</strong> Adobe After Effects, Premiere Pro, Photoshop.</p>
          <p>🔗 <a href="https://instagram.com/khabarchain" target="_blank" rel="noopener noreferrer">View on Instagram</a></p>
          <p>🔗 <a href="https://instagram.com/cafedeep.ir" target="_blank" rel="noopener noreferrer">View on Instagram</a></p>
         
        </>
      )
    }
  },

  ];

export const Works = () => {
  const classes = useStyles();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project, index) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <video controls src={project.video} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={`${project.id}. ${project.title}`} />
              </h3>
              <p className="description">{project.description}</p>

              {project.modal && (
                <>
                  <div className="show-more-btn" onClick={() => setOpenIndex(index)}>
                    Show more
                  </div>

                  <Modal open={openIndex === index} onClose={() => setOpenIndex(null)}>
                    <Box className={classes.modalBox}>
                      {project.modal.image && (
                        <img
                          src={project.modal.image}
                          alt={project.title}
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            margin: "1rem 0"
                          }}
                        />
                      )}
                      {project.modal.content}
                      <Typography variant="body1">{project.modal.text}</Typography>
                    </Box>
                  </Modal>
                </>
              )}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};