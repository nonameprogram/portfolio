import { Pill, PillContent, PillProps } from "@/components/pill";

export type PillGroupProps = {
  items: PillContent[];
};

export const PillGroup = ({ items }: PillGroupProps) => {
  return (
    <div className="flex mt-4 gap-2 text-sm flex-wrap">
      {items.sort().map((content, index) => (
        <Pill key={index} content={content} />
      ))}
    </div>
  );
};
