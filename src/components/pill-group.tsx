import { Pill, PillContent, PillProps } from "@/components/pill";

export type PillGroupProps = {
  items: PillContent[];
  pillClasses?: string;
};

export const PillGroup = ({ items, pillClasses }: PillGroupProps) => {
  return (
    <div className="flex mt-4 gap-2 text-sm flex-wrap">
      {items.sort().map((content, index) => (
        <Pill key={index} content={content} className={pillClasses} />
      ))}
    </div>
  );
};
