"use client";

import gsap from "gsap";

import { Button } from "./button";
import { Container } from "./container";
import { Badge } from "./testimonial";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function Footer() {
  return (
    <Container
      as="footer"
      className="rounded-t-2xl bg-neutral-900 pt-12 md:pt-16 lg:pt-20"
      pattern="dark"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-center font-mono text-4xl leading-11 font-semibold tracking-tighter text-neutral-100 md:text-5xl md:leading-16 lg:max-w-2xl">
          Ready to debug your reading list?
        </h2>
        <Button
          as="a"
          href="#pricing"
          variant="secondary"
          className="mt-10"
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            gsap.to(window, { scrollTo: "#pricing", duration: 1 });
          }}
        >
          <span>
            <span className="max-xs:hidden">REVIEW</span> MEMBERSHIP OPTIONS
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="m3.96 8.72.72 3.12c1.224-.12 2.328-.504 3.264-1.2.936-.696 1.584-1.512 1.896-2.496V20h2.76V8.144c.672 1.944 2.688 3.48 5.16 3.696l.72-3.12c-3.384-.12-5.52-2.112-5.88-5.544H9.84C9.48 6.632 7.344 8.6 3.96 8.72Z" />
          </svg>
        </Button>
        <Badge className="mt-6" />
      </div>
      <div className="mt-16 flex flex-col items-center gap-y-4 border-t border-neutral-700 py-6 md:flex-row md:justify-between">
        <span className="font-mono text-sm leading-4 tracking-tight text-white">
          &copy; {new Date().getFullYear()} - Tech Book Club
        </span>
        <div className="flex items-center gap-x-6">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={20}
              fill="none"
              className="fill-white"
            >
              <path d="M4.74 1.299c2.509 1.878 5.207 5.693 6.195 7.743.989-2.045 3.687-5.861 6.197-7.743 1.809-1.358 4.74-2.406 4.74.937 0 .666-.383 5.607-.607 6.41-.782 2.785-3.626 3.498-6.157 3.064 4.421.752 5.547 3.244 3.115 5.737-4.615 4.735-6.63-1.186-7.146-2.703-.073-.21-.111-.335-.142-.335-.03 0-.068.129-.141.335-.516 1.517-2.535 7.438-7.146 2.703-2.428-2.493-1.306-4.985 3.115-5.737-2.53.434-5.375-.279-6.153-3.068C.382 7.84 0 2.897 0 2.232c0-3.344 2.93-2.295 4.74-.937v.004Z" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              className="fill-white"
            >
              <path d="M19.25 3.75c.664 0 1.25.586 1.25 1.29V20c0 .703-.586 1.25-1.25 1.25H4.21C3.548 21.25 3 20.703 3 20V5.04c0-.704.547-1.29 1.21-1.29h15.04Zm-10.977 15v-8.32H5.695v8.32h2.578ZM6.984 9.258c.82 0 1.485-.664 1.485-1.485 0-.82-.664-1.523-1.485-1.523-.859 0-1.523.703-1.523 1.523s.664 1.485 1.523 1.485ZM18 18.75v-4.57c0-2.227-.508-3.985-3.125-3.985-1.25 0-2.11.703-2.46 1.367h-.04V10.43h-2.46v8.32h2.577v-4.102c0-1.093.195-2.148 1.563-2.148 1.328 0 1.328 1.25 1.328 2.188v4.062H18Z" />
            </svg>
          </a>
        </div>
      </div>
    </Container>
  );
}
