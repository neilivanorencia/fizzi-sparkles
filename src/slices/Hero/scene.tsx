"use client";

import { useGSAP } from "@gsap/react";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Group } from "three";

import FloatingCan from "@/components/floating-can";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

export default function Scene({}: Props) {
  const firstCanRef = useRef<Group>(null);
  const secondCanRef = useRef<Group>(null);
  const thirdCanRef = useRef<Group>(null);
  const fourthCanRef = useRef<Group>(null);
  const fifthCanRef = useRef<Group>(null);

  const firstCanGroupRef = useRef<Group>(null);
  const secondCanGroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);
  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if (
      !firstCanRef.current ||
      !secondCanRef.current ||
      !thirdCanRef.current ||
      !fourthCanRef.current ||
      !fifthCanRef.current ||
      !firstCanGroupRef.current ||
      !secondCanGroupRef.current ||
      !groupRef.current
    )
      return;

    gsap.set(firstCanRef.current.position, { x: -1.5 });
    gsap.set(firstCanRef.current.rotation, { z: -0.5 });

    gsap.set(secondCanRef.current.position, { x: 1.5 });
    gsap.set(secondCanRef.current.rotation, { z: 0.5 });

    gsap.set(thirdCanRef.current.position, { y: 5, z: 2 });
    gsap.set(fourthCanRef.current.position, { x: 2, y: 4, z: 2 });
    gsap.set(fifthCanRef.current.position, { y: -5 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    if (window.scrollY < 20) {
      introTl
        .from(firstCanGroupRef.current.position, { y: -5, x: 1 }, 0)
        .from(firstCanGroupRef.current.rotation, { z: 3 }, 0)
        .from(secondCanGroupRef.current.position, { y: 5, x: 1 }, 0)
        .from(secondCanGroupRef.current.rotation, { z: 3 }, 0);
    }

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      .to(firstCanRef.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(firstCanRef.current.rotation, { z: 0.3 }, 0)

      .to(secondCanRef.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      .to(secondCanRef.current.rotation, { z: 0 }, 0)

      .to(thirdCanRef.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(thirdCanRef.current.rotation, { z: -0.1 }, 0)

      .to(fourthCanRef.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
      .to(fourthCanRef.current.rotation, { z: 0.3 }, 0)

      .to(fifthCanRef.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      .to(fifthCanRef.current.rotation, { z: -0.25 }, 0)

      .to(groupRef.current.position, { x: 1, duration: 3, ease: "sine.inOut" }, 1.3);
  });

  return (
    <group ref={groupRef}>
      <group ref={firstCanGroupRef}>
        <FloatingCan ref={firstCanRef} flavor="blackCherry" floatSpeed={FLOAT_SPEED} />
      </group>
      <group ref={secondCanGroupRef}>
        <FloatingCan ref={secondCanRef} flavor="strawberryLemonade" floatSpeed={FLOAT_SPEED} />
      </group>
      <FloatingCan ref={thirdCanRef} flavor="lemonLime" floatSpeed={FLOAT_SPEED} />
      <FloatingCan ref={fourthCanRef} flavor="watermelon" floatSpeed={FLOAT_SPEED} />
      <FloatingCan ref={fifthCanRef} flavor="grape" floatSpeed={FLOAT_SPEED} />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
