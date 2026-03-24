
export function AnimatedLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-2 text-xl font-medium w-fit"
    >
      <div className="relative overflow-hidden w-full">
        <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-full flex flex-col delay-0 group-hover:delay-300">
          <span>{name}</span>
          <span className="absolute top-full left-0">{name}</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-0" />
      </div>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white size-6"
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
}