import clsx from "clsx";
import Image from "next/image";

import { Container } from "@/components/container";

import avatarJames from "@/assets/images/avatars/avatar-james.jpg";
import avatarOliver from "@/assets/images/avatars/avatar-oliver.jpg";
import avatarWilliam from "@/assets/images/avatars/avatar-william.jpg";

type BadgeProps = {
  className?: string;
};

export function Badge({ className }: BadgeProps) {
  return (
    <div className={clsx("flex items-center gap-x-3", className)}>
      <div className="flex items-center -space-x-1">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-[1.5px] border-white">
          <Image src={avatarJames} alt="" sizes="40px" className="object-cover" fill />
        </div>
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-[1.5px] border-white">
          <Image src={avatarOliver} alt="" sizes="40px" className="object-cover" fill />
        </div>
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-[1.5px] border-white">
          <Image src={avatarWilliam} alt="" sizes="40px" className="object-cover" fill />
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
              <path
                fill="#FF9A60"
                d="M11.207 5.242c.328-.656 1.258-.629 1.559 0L14.57 8.88l3.992.574c.711.11.985.985.465 1.504l-2.87 2.816.683 3.965c.11.711-.656 1.258-1.285.93L12 16.781l-3.582 1.887c-.629.328-1.395-.219-1.285-.93l.683-3.964-2.87-2.817c-.52-.52-.247-1.394.464-1.504l4.02-.574 1.777-3.637Z"
                opacity={0.9}
              />
            </svg>
          ))}
        </div>
        <span className="inline-block font-mono text-sm leading-4 tracking-tighter text-neutral-700">
          200+ developers joined already
        </span>
      </div>
    </div>
  );
}

export function Testimonial() {
  return (
    <Container className="bg-white py-16 md:py-20 lg:py-30">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center lg:justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
              <path
                fill="#FF9A60"
                d="M11.207 5.242c.328-.656 1.258-.629 1.559 0L14.57 8.88l3.992.574c.711.11.985.985.465 1.504l-2.87 2.816.683 3.965c.11.711-.656 1.258-1.285.93L12 16.781l-3.582 1.887c-.629.328-1.395-.219-1.285-.93l.683-3.964-2.87-2.817c-.52-.52-.247-1.394.464-1.504l4.02-.574 1.777-3.637Z"
                opacity={0.9}
              />
            </svg>
          ))}
        </div>
        <h2 className="font-mono text-2xl leading-6.5 font-semibold tracking-tight text-neutral-900 md:text-[2.125rem] md:leading-11 lg:text-center">
          &quot;This book club transformed my technical reading from a solitary activity into an
          enriching community experience. The discussions are gold!&quot;
        </h2>
        <p className="font-sans text-xl leading-7 tracking-tight text-neutral-700 lg:text-center">
          Sarah Chen, Software Architect
        </p>
      </div>
    </Container>
  );
}
