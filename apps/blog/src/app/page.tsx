import React from "react";
import content from "../data/content-data"
import styles from "./page.module.scss";

import Image from 'next/image'

import avatar from "../../public/avatar.jpg"
import ExtremeCatch from "../../public/ExtremeCatch.png"
import Nda from "../../public/nda.png"
import LostDino from "../../public/LostDino.png"
import SpaceBac from "../../public/SpaceBac.png"
import FarmFusion from "../../public/FarmFusion.png"
import SorceryStrife from "../../public/SorceryStrife.png"

import Block from "../components/block/block";

export default async function Home() {
  return (
    <div className={styles.about}>
      <div className={styles.portfolio}>
        <div className={styles.portfolioRow}>
          <div className={styles.info}>
            <div className={styles.job}>
              <p>{content.user.job}</p>
              <p>Available for job</p>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.name}>
                <p>I'm {content.user.name}</p>
                <p>I develop video games for multiple platforms and take pride in being a self-sufficient problem solver, able to tackle challenges independently. My development approach is architecture-driven — I design systems to be flexible, maintainable, and aligned with both technical requirements and business goals.</p>
              </div>
              <div className={styles.avatar}>
                <Image src={avatar.src} alt="NeutrinoZh" width={150} height={150} />
              </div>
            </div>
          </div>
          <div className={styles.contacts}>
            <h2>Contacts</h2>
            <ul>
              <li><strong>Phone:</strong> <a href="tel:+380931883917">+380 93 188 39 17</a></li>
              <li><strong>Telegram:</strong> <a href="https://t.me/NeutrinoZh" target="_blank">@NeutrinoZh</a></li>
              <li><strong>Email:</strong> <a href="mailto:evgeniy.tertychnyi@gmail.com">evgeniy.tertychnyi@gmail.com</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/NeutrinoZh" target="_blank">NeutrinoZh</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/evgeniy-tertychniy-256403228" target="_blank">Evgeniy Tertychniy</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.title}>
          Work
        </div>
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioRow}>
            <Block
              src={"https://raw.githubusercontent.com/NeutrinoZh/blog/master/media/portfolio/the-cooking-game-vr.png"}
              title={"The Cooking Game VR"}
              href={"https://www.meta.com/ru-ru/experiences/pcvr/the-cooking-game-vr/1304948539547215/"}
              platforms={"VR (SteamVR, Meta Link PC, Meta Quest)"}
              stack={"Unity, OpenXR, Wwise, URP, Netcode for GameObjects"}
              responsibilities={[
                "Developed interactive and immersive virtual reality (VR) experiences using Unity game engine",
                "Created advanced gameplay mechanics and systems for VR project",
                "Collaborated with artists and designers to implement models, animations, and visual effects into Unity",
                "Optimized performance and ensured smooth frame rates by implementing efficient coding techniques",
                "Integrated audio with WwiseSDK.",
                "Debugged and resolved technical issues and bugs within the game"
              ]} />
            <Block
              src={ExtremeCatch.src}
              title={"Extreme Catch: Boat Crab & Fishing Simulator"}
              href={"https://www.youtube.com/watch?v=-Gb73ZnAcXI"}
              platforms={"PlayStation 4"}
              stack={"Unity, URP, Zenject, PlayStation SDK, Custom analytics services"}
              responsibilities={[
                "Developed systems for traps, bait, inventory, and environmental interactions",
                "Used Zenject for dependency injection and modular game architecture",
                "Worked with URP to configure lighting, shaders, and post-processing effects",
                "Used Unity Profiler for CPU/GPU optimization",
                "Created an intuitive and controller-friendly UI for PlayStation"
              ]} />
          </div>
          <div className={styles.portfolioRow}>
            <Block
              src={LostDino.src}
              title={"The Lost Dino: Survival Expedition"}
              href={"https://www.metacritic.com/game/the-lost-dino-survival-expedition/"}
              platforms={"PlayStation 4"}
              stack={"Unity, URP, Zenject, PlayStation SDK"}
              responsibilities={[
                "Implemented AI behaviors for dinosaurs using Unity NavMesh",
                "Optimized game performance and memory usage specifically for PS4 hardware limitations",
                "Designed and scripted player interactions with the environment",
                "Utilized Zenject for modular and maintainable code architecture",
                "Fixed platform-specific issues on PlayStation 4, including input handling, memory crashes, and rendering glitches",
                "Collaborated with QA teams to triage and reproduce reported bugs from test builds."
              ]} />
            <Block
              src={Nda.src}
              title={"NDA"}
              href={"#"}
              platforms={"PlayStation 4"}
              stack={"Unity, URP, Zenject, PlayStation SDK"}
              responsibilities={[
                "Gameplay Programming",
                "Optimized game performance and memory usage specifically for PS4 hardware limitations",
                "Used Zenject for dependency injection and modular game architecture",
                "Worked with URP to configure lighting, shaders, and post-processing effects",
                "Analytics Integration",
                "Created an intuitive and controller-friendly UI for PlayStation",
                "Collaborated with QA teams to triage and reproduce reported bugs from test builds."
              ]} />
          </div>
        </div>
        <div className={styles.title}>
          Own Projects
        </div>
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioRow}>
            <Block
              src={SpaceBac.src}
              title={"SpaceBac (Preparation for release)"}
              href={"https://neutrinozh.itch.io/spacebac"}
              platforms={"Web, Windows (Steam)"}
              stack={"Unity, SteamAPI, Zenject, PrimeTween, Input System"}
              responsibilities={
                "This game was created in 96 hours for the SpeedJam #9.  As the team lead, I developed and implemented most of the mechanics while working closely with the artists. I also assigned responsibilities and tasks within the team. My team and I really enjoyed the game we created during SpeedJam #9, so we’ve decided to continue developing it further. Right now, part of the team is working hard on setting up the game’s Steam page"
              }
            />
            <Block
              src={FarmFusion.src}
              title={"Farm Fusion (In Development)"}
              href={"#"}
              platforms={"Android"}
              stack={"Unity, Zenject, PrimeTween, Input System, Google Play Services"}
              responsibilities={[
                "Utilized Zenject for clean dependency injection and modular, testable architecture",
                "Integrated Unity's Input System to handle touch input for mobile gameplay",
                "Integrated Google Play Services: achievements, cloud save, leaderboard, and sign-in.",
                "Performed device testing on various screen sizes",
                "Ensured performance stability on low-end Android devices",
              ]}
            />
          </div>
        </div>
        <div className={styles.title}>
          Jam Entries
        </div>
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioRow}>
            <Block
              src={SorceryStrife.src}
              title={"Sorcery Strife"}
              href={"https://neutrinozh.itch.io/sorcery-strife"}
              platforms={"Windows"}
              stack={"Unity, Zenject, URP, VFX Graph, Shader Graph"}
              responsibilities={
                "This game was created in 48 hours for the Micro Jam 040: Magic. As the team lead, I developed and implemented most of the mechanics while working closely with the artists. I also assigned responsibilities and tasks within the team."
              }
            />
            <Block
              src={"https://raw.githubusercontent.com/NeutrinoZh/blog/master/media/portfolio/covid-19.png"}
              title={"COVID-19 The Beginning"}
              href={"https://neutrinozh.itch.io/covid-19-the-beginning"}
              platforms={"Web, Windows"}
              stack={"Unity, DOTween, Post-Processing Version 2, Input System"}
              responsibilities={
                "This game was created in 96 hours for the GMTK Game Jam 2024 with the theme 'Built to Scale' by a team of six. As the team lead, I developed and implemented most of the mechanics while working closely with the artists. I also assigned responsibilities and tasks within the team."
              }
            />
          </div>
        </div>
        <div className={styles.title}>
          Other
        </div>
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioRow}>
            <Block
              src={"https://raw.githubusercontent.com/NeutrinoZh/blog/master/media/portfolio/wind.png"}
              title={"Wind Engine"}
              href={"https://github.com/WindEntertainment/wind/tree/master"}
              platforms={"Windows, Linux, Mac, Web (Wasm + WebGL)"}
              stack={"C++, Boost, OpenGL, Ultralight, TypeScript, CI/CD"}
              responsibilities={
                "Written in C++, is the most complex project I have developed, a large ecosystem of various modules and tools. During the development, I encountered many different problems, which significantly increased my level as a specialist. And the most difficult challenge was to develop the right architecture for such a project, which was intended to be as flexible as possible."
              }
            />
            <Block
              src={"https://raw.githubusercontent.com/NeutrinoZh/blog/master/media/portfolio/asset-pipeline.png"}
              title={"Asset Pipeline"}
              href={"https://github.com/WindEntertainment/wind/blob/master/docs/wind/AssetPipeline.md"}
              platforms={"Windows, Linux, Mac, Web (Wasm + WebGL)"}
              stack={"C++, Boost, Zlib, CI/CD"}
              responsibilities={
                "In game development, raw resources, such as graphics, audio, and other multimedia elements, are often not initially optimized for efficient usage within games. These resources may come in high-resolution formats or sizes that can impact the game's performance, increase loading times, and consume unnecessary storage space. The Asset Pipeline module addresses this challenge by serving as a vital intermediary step in the development process. It takes raw, unoptimized resources and transforms them into a format suitable for seamless integration and optimal performance within the game."
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}