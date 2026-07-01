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
// import Blender3 from '../../assets/recentprojects/Blender3.mp4';

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
    id: 0, 
    title: 'Canvas of Confinement',
    description: `An interactive VR intermedia installation transforming an obsessive physical ink artwork into an amorphous, suffocating digital cage that monitors and overstimulates the human body.`,
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v3/Video.mp4", 
    modal: {
      image: "https://github.com/atousasque/My_Portfolio/releases/download/v2.1.0/IMG_20260513_034308_540.jpg",  
      content: (
        <>
          <p>
            <strong>Canvas of Confinement</strong> is an interactive, site-specific VR installation exploring how the human body becomes engulfed and monitored by modern technology. The piece acts as an active point of entry into an overwhelming digital network, transforming psychological anxiety into a literal virtual void.
          </p>
          <p><strong>Note on Video Material:</strong></p>
          <p>
            Due to strict submission file size limits, the video preview above is a short teaser with highly compressed rendering and format limits. The full-length, high-quality walkthrough showing the complete atmosphere and spatial interaction is hosted permanently right here on this portfolio page.
          </p>
          <p><strong>Key features and focus areas include:</strong></p>
          <ul>
            <li><strong>The Analog Matrix:</strong> Built from a highly dense physical drawing using ink, fineliners (Rapidograph), and colored pencils on paper. It utilizes <em>Horror Vacui</em> (fear of empty spaces) to capture modern mental overstimulation and anxiety caused by high-speed information loops.</li>
            <li><strong>Amorphous Confinement:</strong> Instead of a stable geometric cube, the hand-drawn lines wrap around the user in a shifting, nameless spatial trap. The endless multiplying eyes represent the invasive gaze of surveillance capitalism and political systems tracking our lives.</li>
            <li><strong>Shader-Driven Tension:</strong> Built in Unity, the boundaries physically contract over time, forcing the user into anxious, disoriented head movements. A custom shader shifts the visual environment from cyberpunk neon cyan and purple veins into a heavy, deep crimson shadow.</li>
            <li><strong>Interactive Audio-Visual System:</strong> Users pull the VR trigger to shoot streams of cyan particles to illuminate the darkness. This action is synced with a raw, three-layer soundscape featuring heavy industrial drones, mechanical data-logging clicks, and static echoes.</li>
          </ul>
          <p>
            <strong>Tech stack:</strong> Unity, C#, XR Interaction Toolkit, Custom Shaders, Sound Design, Analog Media (Ink/Fineliners).
          </p>
        </>
      )
    }
  },
    
  {
    id: 1,
    title: 'VirtuArt (Master\'s Thesis)',
    description: `A conceptual VR prototype that simulates the physical constraints, friction, and tactile resistance of traditional oil painting within a minimalist virtual canvas.`,
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.10.0/Atousa_Garousian.mp4", 
    modal: {
      //image: "https://github.com/atousasque/My_Portfolio/releases/download/.../VirtuArt.jpg", 
      content: (
        <>
          <p>
            <strong>VirtuArt</strong> is my Master's Thesis project, exploring the intersection of classical physical materiality and modern interactive technologies. It translates the sensory perception and bodily constraints of traditional oil painting into the boundless realm of virtual reality.
          </p>
          <p><strong>Key features and focus areas include:</strong></p>
          <ul>
            <li>Simulating the tactile resistance and physical friction of brushstrokes on a virtual canvas</li>
            <li>Integrating modern impressionism and heavy impasto techniques into an immersive VR environment</li>
            <li>Designing a minimalist virtual space that emphasizes the physical relationship between the artist and the medium</li>
            <li>Bridging the gap between physical materiality and digital expression through sensory-rich interaction mechanics</li>
          </ul>
          <p>
            As a transdisciplinary digital artist, this project represents my core philosophy: rethinking digital experiences by embedding human senses and artistic research into XR development.
          </p>
          <p>
            <strong>Tech stack:</strong> Unity, XR Interaction Toolkit, C#, Shader Graph, 3D Modeling (Blender).
          </p>
          <p>
            🎓 This is an ongoing Master's Thesis project at FH Upper Austria. Therefore, The finished prototype will be updated soon!
          </p>
        </>
      )
    }
  },

  {
    id: 2,
    title: 'LongDrive',
    description: `LongDrive is a semi-autonomous driving simulation built in Unity, based on Austria's real highway network. I co-developed the game systems and created the terrain and environment.`,
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.0.0/LongDrive.mp4",
    modal: {
      image: "https://github.com/atousasque/My_Portfolio/releases/download/v1.1.1/LongDrive.jpg",  // Make sure this exists in public/images/
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
    id: 3,
    title: 'LongDrive: Extended',
    description: `LongDrive: Extended is the finalized version of our semi-autonomous highway driving simulator. It introduces infotainment-based in-car tasks and G29 steering wheel support.`,
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.1.0/LongDrive2.mp4",
    modal: {
      image: "https://github.com/atousasque/My_Portfolio/releases/download/v1.2.1/Extended.jpg", // Replace with your actual modal image if any
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
    id: 4,
    title: 'ReWild - Mixed Reality Ecosystem',
    description: `An interactive MR experience for the Ars Electronica Festival, allowing users to grow and nurture a digital ecosystem into physical space.`,
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.9.0/ReWild.mp4",
modal: {
    //image: "https://github.com/atousasque/My_Portfolio/releases/download/v1.0.0/ReWild_Modal.jpg", // Replace with your actual modal image if any
    content: (
      <>
        <p>
          <strong>🌿ReWild</strong> is an immersive Mixed Reality (MR) experience showcased at the prestigious Ars Electronica Center festival. 
          The project empowers users to become digital gardeners, transforming physical spaces into thriving, interactive ecosystems.
        </p>
        <p><strong>Key features include:</strong></p>
        <ul>
          <li>Interactive MR mechanics allowing users to plant seeds and physically simulate watering them</li>
          <li>Dynamic environmental growth, evolving from bare ground into lush meadows or dense jungles based on user choices</li>
          <li>An ecosystem simulation where various animals dynamically populate the environments as they grow</li>
          <li>Seamless blending of digital flora and fauna with the real-world exhibition space</li>
        </ul>
        <p>
          As the Unreal Engine Developer, my core contributions focused on co-engineering the gameplay loop and interaction mechanics. I helped programming the complex growth logic for the environments and managed the Mixed Reality integration to ensure a smooth user experience, while collaborating with team members who handled the 3D animation and sound design.
        </p>
        <p>
          <strong>Tech stack:</strong> Unreal Engine, Mixed Reality (MR/XR) Frameworks, Blueprints / C++.
        </p>
        <p>
            🔒 This project is part of an academic study on driver distraction and trust in automation. Repository access is private.
        </p>
      </>
    )
  }
  },

  { 
    id: 5,
    title: 'Fishing Simulator', 
    description: `A VR-ready Unity simulation recreating a peaceful fishing experience with natural terrain and immersive audio-visual design.`,
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.2.0/FishingSimulator.mp4",
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
    id: 6,
    title: 'Recoil Rumble',
    description: `Recoil Rumble is a fast-paced, retro-style multiplayer FPS with powerful knockback mechanics and stylized visuals.`,
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.3.0/MultiplayerShooter.mp4",
    modal: {
      image: "https://github.com/atousasque/My_Portfolio/releases/download/v1.3.1/Recoil.jpg", // Replace with your actual modal image if any
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
            <li>Helped with the Design and implementation of all user interface components (menus, HUD, status elements)</li>
            <li>Ensuring UI responsiveness and styling to match the PSX aesthetic</li>
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
    id: 7,
    title: 'Blender Project 1', 
    description: `Designed and modeled a detailed interior filled with books, furniture, and decor. The camera rotates around the space to reveal different angles, emphasizing depth and layout. Applied custom textures to all assets, including wood, fabric, and paper materials. Focused on composition, lighting, and scene storytelling through asset placement and animation.`,
    alter: 'Blender Project 1',
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.4.0/Blender2.mp4"
  },
  { 
    id: 8,
    title: 'Blender Project 2', 
    description: `Created a detailed snow globe scene featuring a snowy cabin, Christmas tree, and snowman. Modeled all assets from scratch, applied custom shaders, and set up lighting for a cozy winter feel. Used rigid body physics to animate falling snowballs and a collapsing tree when the globe rotates. The project involved keyframe animation, material setup, and physics simulation within Blender.`,
    alter: 'Blender Project 2',
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.5.0/Blender1.mp4"
  },
  { 
    id: 9,
    title: 'Houdini Project 1', 
    description: `Simulated and rendered a dynamic 3D scene centered around a detailed glass jar. Animated the mechanical opening and closing of the jar's lid, and utilized rigid body physics to simulate the natural fall and accumulation of raspberries inside. Set up dynamic camera movements that shift angles depending on the ongoing action to optimally frame the interacting objects. The project involved a combination of keyframe animation, physics simulation, realistic transparent material setup, and studio lighting to emphasize depth and reflections.`,
    alter: 'Houdini Project 1',
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.7.0/Blender3.mp4"
  },
  { 
    id: 10,
    title: 'Houdini Project 2', 
    description: `Designed and modeled a festive Christmas-themed 3D scene featuring a gingerbread man character, a stack of cookies, and a pine tree. Implemented a dynamic lighting system for the tree lights to alternate and cycle every second, creating a vibrant holiday atmosphere. Animated a subtle blinking effect for the gingerbread man to bring the character to life. The project involved realistic material setup for the biscuit texture and icing, parametric control of emissive materials within Houdini, and a warm composition to capture the festive mood.`,
    alter: 'Houdini Project 2',
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.8.0/Blender4.mp4"
  },
  {
    id: 11,
    title: 'Logo Animation',
    description: `Animated logo and social content for a company’s branding, covering motion graphics, reels, and Instagram strategy.`,
    video: "https://github.com/atousasque/My_Portfolio/releases/download/v1.6.0/AFterEffect.mp4",
    modal: {
      image: "https://github.com/atousasque/My_Portfolio/releases/download/v1.6.1/Motion.jpg", // Add this image to your public folder
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
{
    id: 11,
    title: 'In the Shackles of Suffocation',
    description: `A psychedelic, biomorphic illustration mapping the psychological impact of digital overstimulation and surveillance—core analog foundation and visual matrix for the VR installation "Canvas of Confinement".`,
    image: "https://github.com/atousasque/My_Portfolio/releases/download/v2.1.0/IMG_20260513_034308_540.jpg", 
    modal: {
      image: "https://github.com/atousasque/My_Portfolio/releases/download/v2.1.0/IMG_20260513_034308_540.jpg", 
      content: (
        <>
          <p>
            <strong>In the Shackles of Suffocation</strong> serves as the complete analog blueprint and visual infrastructure for the interactive VR installation, <em>Canvas of Confinement</em>. This piece maps the physical and psychological impact of severe data overstimulation, digital surveillance, and the modern commodification of human identity.
          </p>
          <p><strong>Artistic & Conceptual Highlights for MFRU:</strong></p>
          <ul>
            <li>Utilizes the <em>Horror Vacui</em> (fear of empty space) technique to visually represent perfectionism, chronic mental anxiety, and the suffocating flood of high-speed digital information today.</li>
            <li>Features an overwhelming matrix of interwoven biomorphic textures and multiplying eyes, symbolizing the invasive, constant gaze of surveillance capitalism and modern economic control.</li>
            <li>Contrasts chaotic, dense ink linework with vibrant, cyberpunk neon hues of cyan and purple. In the VR adaptation, these cold digital veins actively shift to represent the system processing and altering the human presence.</li>
          </ul>
          <p><strong>Medium:</strong> Ink, Fineliners (Rapidograph), and Colored Pencils on Paper.</p>
          <p>
            🌐 <strong>VR Implementation:</strong> The intricate lines and eyes of this physical paper have been completely mapped onto the deconstructed, amorphous virtual canvases of <strong>Canvas of Confinement</strong>, expanding this traditional illustration into a fully immersive, hostile digital environment.
          </p>
        </>
      )
    }
  },

  {
    id: 12,
    title: 'Bloody Winter',
    description: `A contemporary impressionist oil painting capturing the heavy, suffocating atmosphere of collective trauma during the "Woman, Life, Freedom" movement in Iran.`,
    //video: "", 
    image: "https://github.com/atousasque/My_Portfolio/releases/download/v2.2.0/IMG_20250328_202440_991.jpg", 
    modal: {
      image: "https://github.com/atousasque/My_Portfolio/releases/download/v2.2.0/IMG_20250328_202440_991.jpg", 
      content: (
        <>
          <p>
            <strong>Bloody Winter</strong> is a visceral translation of collective trauma, painted during the height of the "Woman, Life, Freedom" protests in Iran. The piece intentionally subverts the traditional tranquility and purity of a snow-covered winter landscape into a political and emotional metaphor.
          </p>
          <p><strong>Artistic & Conceptual Highlights:</strong></p>
          <ul>
            <li>Employs a contemporary impressionist style with heavy, textured impasto brushstrokes.</li>
            <li>Contrasts the stark, freezing white of the trees with a deep, bleeding crimson sky and river.</li>
            <li>Captures the heavy, chilling atmosphere of oppression and the undeniable reality of bloodshed that permanently altered our perception of safety and nature.</li>
            <li>Explores the psychological weight of a historical turning point through dramatic color contrasts and atmospheric tension.</li>
          </ul>
          <p><strong>Medium:</strong> Oil on Canvas.</p>
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
            <div className="__img_wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {project.video ? (
                <video controls src={project.video} />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    maxHeight: '450px', 
                    objectFit: 'contain', 
                    borderRadius: '8px' 
                  }} 
                />
              )}
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