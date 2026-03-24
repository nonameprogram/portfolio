export function AnimatedLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      className="group relative inline-flex w-fit items-center gap-2 font-medium text-xl"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col transition-transform delay-0 duration-500 ease-in-out group-hover:-translate-y-full group-hover:delay-300">
          <span>{name}</span>
          <span className="absolute top-full left-0">{name}</span>
        </div>
        <div className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-0" />
      </div>
      <svg
        className="size-6 text-white"
        fill="none"
        height="15"
        viewBox="0 0 15 15"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </a>
  );
}
