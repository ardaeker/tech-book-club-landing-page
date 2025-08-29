import { Container } from "@/components/container";

export function Steps() {
  return (
    <Container as="section" className="bg-white pt-16 md:pt-20 lg:pt-30">
      <div className="bg-pattern-light rounded-xl bg-neutral-100 px-4 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-y-8 md:gap-y-12 lg:items-center lg:gap-y-16">
          <h2 className="font-mono text-4xl leading-11 font-semibold tracking-tighter text-neutral-900 md:text-5xl md:leading-16 lg:max-w-lg lg:text-center">
            Your tech reading journey
          </h2>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-8 md:gap-y-10 lg:grid-cols-4">
            <li className="space-y-5 md:space-y-6">
              <span className="flex items-center justify-between">
                <span className="flex size-8 items-center justify-center rounded border-2 border-neutral-900 font-mono text-base leading-5 font-semibold tracking-tighter text-neutral-900 md:text-lg md:leading-6">
                  1
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={80}
                  height={33}
                  fill="none"
                  className="hidden lg:block"
                >
                  <g
                    stroke="#F9A06D"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={1.553}
                    clipPath="url(#a)"
                  >
                    <path d="M2.544 21.82c10.137-6.576 37.73-17.132 67.014-6.751" />
                    <path d="M66.105 21.638a56.85 56.85 0 0 1 6.17-1.052c.488-.058 5.67-.495 5.562-.808-.52-1.498-1.719-2.888-2.496-4.266-1.59-2.817-2.982-5.61-3.806-8.737-.412-1.565-.652-3.15-.995-4.713" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 12 75.854.39l3.222 20.257-75.854 11.61z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="font-mono text-base leading-5 font-semibold tracking-tighter text-neutral-900 md:text-lg md:leading-6">
                Choose your membership tier
              </p>
            </li>
            <li className="space-y-5 md:space-y-6">
              <span className="flex items-center justify-between">
                <span className="flex size-8 items-center justify-center rounded border-2 border-neutral-900 font-mono text-base leading-5 font-semibold tracking-tighter text-neutral-900 md:text-lg md:leading-6">
                  2
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={80}
                  height={33}
                  fill="none"
                  className="hidden lg:block"
                >
                  <g
                    stroke="#F9A06D"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={1.553}
                    clipPath="url(#a)"
                  >
                    <path d="M2.544 21.82c10.137-6.576 37.73-17.132 67.014-6.751" />
                    <path d="M66.105 21.638a56.85 56.85 0 0 1 6.17-1.052c.488-.058 5.67-.495 5.562-.808-.52-1.498-1.719-2.888-2.496-4.266-1.59-2.817-2.982-5.61-3.806-8.737-.412-1.565-.652-3.15-.995-4.713" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 12 75.854.39l3.222 20.257-75.854 11.61z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="font-mono text-base leading-5 font-semibold tracking-tighter text-neutral-900 md:text-lg md:leading-6">
                Get your monthly book selection
              </p>
            </li>
            <li className="space-y-5 md:space-y-6">
              <span className="flex items-center justify-between">
                <span className="flex size-8 items-center justify-center rounded border-2 border-neutral-900 font-mono text-base leading-5 font-semibold tracking-tighter text-neutral-900 md:text-lg md:leading-6">
                  3
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={80}
                  height={33}
                  fill="none"
                  className="hidden lg:block"
                >
                  <g
                    stroke="#F9A06D"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={1.553}
                    clipPath="url(#a)"
                  >
                    <path d="M2.544 21.82c10.137-6.576 37.73-17.132 67.014-6.751" />
                    <path d="M66.105 21.638a56.85 56.85 0 0 1 6.17-1.052c.488-.058 5.67-.495 5.562-.808-.52-1.498-1.719-2.888-2.496-4.266-1.59-2.817-2.982-5.61-3.806-8.737-.412-1.565-.652-3.15-.995-4.713" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 12 75.854.39l3.222 20.257-75.854 11.61z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="font-mono text-base leading-5 font-semibold tracking-tighter text-neutral-900 md:text-lg md:leading-6">
                Join our discussion forums
              </p>
            </li>
            <li className="space-y-5 md:space-y-6">
              <span className="flex size-8 items-center justify-center rounded border-2 border-neutral-900 font-mono text-base leading-5 font-semibold tracking-tighter text-neutral-900 md:text-lg md:leading-6">
                4
              </span>

              <p className="font-mono text-base leading-5 font-semibold tracking-tighter text-neutral-900 md:text-lg md:leading-6">
                Attend exclusive meetups
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
