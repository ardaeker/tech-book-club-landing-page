import Image from "next/image";

import { Container } from "@/components/container";

import featuresPhotoTop from "@/assets/images/features-photo-top.jpg";
import featuresPhotoBottom from "@/assets/images/features-photo-bottom.jpg";

export function Features() {
  return (
    <Container as="section" className="bg-white pt-16 md:pt-20 lg:pt-30">
      <div className="space-y-16 md:space-y-20 lg:space-y-30">
        <div className="grid place-items-center gap-x-20 gap-y-10 lg:grid-cols-2">
          <Image
            src={featuresPhotoTop}
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt="Friends enjoying a book club meeting with coffee and pastries"
            className="aspect-square rounded-[20px] object-cover max-lg:order-2 lg:max-w-140"
          />
          <div>
            <h2 className="font-mono text-4xl leading-12 font-semibold tracking-tighter text-neutral-900 md:text-5xl md:leading-16">
              Read together, grow together
            </h2>
            <ul className="mt-6 space-y-4 md:mt-8.5 md:space-y-6 lg:pr-26">
              <li className="flex items-center gap-x-3.5">
                <span
                  className="flex size-7 items-center justify-center rounded border-2 border-neutral-700"
                  aria-hidden
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
                    <path
                      fill="#385159"
                      d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                    />
                  </svg>
                </span>
                <p className="font-sans text-xl leading-7 tracking-tight text-neutral-700">
                  Monthly curated tech reads selected by industry experts
                </p>
              </li>
              <li className="flex items-center gap-x-3.5">
                <span
                  className="flex size-7 items-center justify-center rounded border-2 border-neutral-700"
                  aria-hidden
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
                    <path
                      fill="#385159"
                      d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                    />
                  </svg>
                </span>
                <p className="font-sans text-xl leading-7 tracking-tight text-neutral-700">
                  Virtual and in-person meetups for deep-dive discussions
                </p>
              </li>
              <li className="flex items-center gap-x-3.5">
                <span
                  className="flex size-7 items-center justify-center rounded border-2 border-neutral-700"
                  aria-hidden
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
                    <path
                      fill="#385159"
                      d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                    />
                  </svg>
                </span>
                <p className="font-sans text-xl leading-7 tracking-tight text-neutral-700">
                  Early access to new tech book releases
                </p>
              </li>
              <li className="flex items-center gap-x-3.5">
                <span
                  className="flex size-7 items-center justify-center rounded border-2 border-neutral-700"
                  aria-hidden
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
                    <path
                      fill="#385159"
                      d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                    />
                  </svg>
                </span>
                <p className="font-sans text-xl leading-7 tracking-tight text-neutral-700">
                  Author Q&A sessions with tech thought leaders
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid place-items-center gap-x-20 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 className="font-mono text-4xl leading-12 font-semibold tracking-tighter text-neutral-900 md:text-5xl md:leading-16">
              Not your average book{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 scale-130">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 173 119"
                    fill="none"
                    className="h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <path
                      fill="#FEA36F"
                      d="M20.58 53.245C53.023 29.78 98.577 25.552 129.044 29.01c13.76 1.56 26.479 5.037 31.222 12.523 4.08 6.434 1.257 16.392-9.465 25.094-13.512 10.969-35.468 15.727-52.798 18.505-16.729 2.682-32.78 3.447-46.942 2.333-13.93-1.094-27.379-3.812-35.345-9.428C7.25 72.07 6.283 60.898 21.8 50.346 37.117 39.933 59.42 35.573 76.89 33.086c19.789-2.817 38.476-3.612 55.701-2.664 1.917.105 3.729-1.957 1.815-2.06-18.898-1.032-39.525.025-61.347 3.42-16.854 2.62-37.528 7.372-52.377 17.01C7.18 57.555 3.561 67.762 7.663 74.68c5.159 8.708 20.998 12.648 36.765 14.393 15.747 1.744 33.959 1.055 53.093-2.002 17.684-2.827 39.641-7.751 54.108-18.554 11.239-8.394 15.425-18.092 13.428-25.2-2.519-8.963-15.053-13.62-29.198-15.732-31.744-4.742-82.3-.634-117.35 24.75-1.697 1.23.356 2.15 2.07.91Z"
                    />
                  </svg>
                </span>
                club
              </span>
            </h2>
            <p className="mt-6 font-sans text-xl leading-7 tracking-tight text-neutral-700 lg:pr-1">
              Connect with a community that speaks your language - from{" "}
              <strong className="font-semibold">Python</strong> to{" "}
              <strong className="font-semibold">TypeScript</strong> and everything in between. Our
              discussions blend technical depth with practical applications.
            </p>
          </div>
          <Image
            src={featuresPhotoBottom}
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt="Friends enjoying a book club meeting with coffee and pastries"
            className="aspect-square rounded-[20px] object-cover lg:max-w-140"
          />
        </div>
      </div>
    </Container>
  );
}
