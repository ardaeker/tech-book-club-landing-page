import { Container } from "@/components/container";
import { Button } from "./button";

export function Pricing() {
  return (
    <Container as="section" id="pricing" className="bg-white pt-16 md:pt-20 lg:pt-30">
      <div className="space-y-6 md:space-y-10 lg:space-y-16">
        <h2 className="font-mono text-4xl leading-12 font-semibold tracking-tighter text-neutral-900 md:text-5xl md:leading-16 lg:text-center">
          Membership options
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_minmax(21.875rem,1fr)_1fr]">
          <div className="lg:py-4">
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="font-mono text-2xl leading-6.5 font-semibold tracking-tighter text-neutral-900">
                Starter
              </h3>
              <div className="mt-6 flex items-center gap-x-2">
                <span className="inline-block font-mono text-4xl leading-11 font-semibold tracking-tighter text-neutral-900">
                  19$
                </span>
                <span className="font-sans text-xl leading-7 text-neutral-700">/month</span>
              </div>
              <span className="my-6 block h-px w-full bg-neutral-200" />
              <ul className="space-y-4">
                <li className="flex items-center gap-x-3">
                  <span
                    className="flex size-6 items-center justify-center rounded border-2 border-neutral-700"
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-5"
                    >
                      <path
                        fill="#385159"
                        d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                      />
                    </svg>
                  </span>
                  <p className="font-inter text-xl leading-7 tracking-tight text-neutral-700">
                    1 book/month
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <span
                    className="flex size-6 items-center justify-center rounded border-2 border-neutral-700"
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-5"
                    >
                      <path
                        fill="#385159"
                        d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                      />
                    </svg>
                  </span>
                  <p className="font-inter text-xl leading-7 tracking-tight text-neutral-700">
                    Online forums
                  </p>
                </li>
              </ul>
              <Button variant="primary" className="mt-8 w-full">
                Subscribe now
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-6 lg:py-10">
            <h3 className="font-mono text-2xl leading-6.5 font-semibold tracking-tighter text-neutral-900">
              Pro
            </h3>
            <div className="mt-6 flex items-center gap-x-2">
              <span className="inline-block font-mono text-4xl leading-11 font-semibold tracking-tighter text-neutral-900">
                29$
              </span>
              <span className="font-sans text-xl leading-7 text-neutral-700">/month</span>
            </div>
            <span className="my-6 block h-px w-full bg-neutral-200" />
            <ul className="space-y-4">
              <li className="flex items-center gap-x-3">
                <span
                  className="flex size-6 items-center justify-center rounded border-2 border-neutral-700"
                  aria-hidden
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5"
                  >
                    <path
                      fill="#385159"
                      d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                    />
                  </svg>
                </span>
                <p className="font-inter text-xl leading-7 tracking-tight text-neutral-700">
                  2 books/month
                </p>
              </li>
              <li className="flex items-center gap-x-3">
                <span
                  className="flex size-6 items-center justify-center rounded border-2 border-neutral-700"
                  aria-hidden
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5"
                  >
                    <path
                      fill="#385159"
                      d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                    />
                  </svg>
                </span>
                <p className="font-inter text-xl leading-7 tracking-tight text-neutral-700">
                  Virtual meetups
                </p>
              </li>
            </ul>
            <Button variant="primary" className="mt-8 w-full">
              Subscribe now
            </Button>
          </div>
          <div className="lg:py-4">
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="font-mono text-2xl leading-6.5 font-semibold tracking-tighter text-neutral-900">
                Pro
              </h3>
              <div className="mt-6">
                <span className="inline-block font-mono text-4xl leading-11 font-semibold tracking-tighter text-neutral-900">
                  Custom
                </span>
              </div>
              <span className="my-6 block h-px w-full bg-neutral-200" />
              <ul className="space-y-4">
                <li className="flex items-center gap-x-3">
                  <span
                    className="flex size-6 items-center justify-center rounded border-2 border-neutral-700"
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-5"
                    >
                      <path
                        fill="#385159"
                        d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                      />
                    </svg>
                  </span>
                  <p className="font-inter text-xl leading-7 tracking-tight text-neutral-700">
                    Team access
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <span
                    className="flex size-6 items-center justify-center rounded border-2 border-neutral-700"
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-5"
                    >
                      <path
                        fill="#385159"
                        d="m17.06 4.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54H9.2c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"
                      />
                    </svg>
                  </span>
                  <p className="font-inter text-xl leading-7 tracking-tight text-neutral-700">
                    Private sessions
                  </p>
                </li>
              </ul>
              <Button variant="primary" className="mt-8 w-full">
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
