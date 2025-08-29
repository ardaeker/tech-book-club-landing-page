"use client";

import gsap from "gsap";

import Image from "next/image";

import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { Badge } from "@/components/testimonial";
import { Container } from "@/components/container";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import heroBannerPhoto from "@/assets/images/hero-image.jpg";

gsap.registerPlugin(ScrollToPlugin);

export function Hero() {
  return (
    <Container as="section" pattern="light" className="bg-neutral-100 pt-6 md:pt-8">
      <Logo />
      <div className="grid place-items-center gap-16 pt-12 pb-20 md:pt-16 lg:grid-cols-2 lg:pt-20">
        <div>
          <h1 className="inline-block bg-[linear-gradient(107deg,#fea36f_-11.37%,#062630_61.84%)] bg-clip-text font-mono text-4xl leading-11 font-bold tracking-tighter text-transparent md:text-6xl md:leading-18">
            Join the ultimate tech book club
          </h1>
          <p className="mt-6 font-sans text-xl leading-7 tracking-tight text-neutral-700">
            Turn your reading time into learning time with fellow tech enthusiasts. Get curated
            recommendations, join vibrant discussions, and level up your skills one chapter at a
            time.
          </p>
          <Button
            as="a"
            href="#pricing"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault();
              gsap.to(window, { scrollTo: "#pricing", duration: 1 });
            }}
            variant="primary"
            className="mt-8"
          >
            <span>
              <span className="max-xs:hidden">REVIEW</span> MEMBERSHIP OPTIONS
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
              <path d="m3.96 14.956.72-3.12c1.224.12 2.328.504 3.264 1.2.936.696 1.584 1.512 1.896 2.496V3.676h2.76v11.856c.672-1.944 2.688-3.48 5.16-3.696l.72 3.12c-3.384.12-5.52 2.112-5.88 5.544H9.84c-.36-3.456-2.496-5.424-5.88-5.544Z" />
            </svg>
          </Button>
          <Badge className="pt-5" />
        </div>
        <Image
          src={heroBannerPhoto}
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="People learning from books during a reading session"
          className="aspect-square rounded-lg object-cover lg:max-w-135"
        />
      </div>
    </Container>
  );
}
