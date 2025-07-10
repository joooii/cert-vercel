interface CardProps {
  title: string;
  text?: string;
  svgComponent: React.ReactNode;
}

const DefaultCard = ({ title, text, svgComponent }: CardProps) => {
  return (
    <div className="rounded-lg border bg-white border-gray-200 shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6 text-center pb-6 items-center">
        <div className="mb-6">{svgComponent}</div>
        <div className="font-semibold tracking-tight text-gray-900 text-lg">
          {title}
        </div>
        <div className="p-1">
          <div className="text-sm text-gray-600 text-center leading-relaxed">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefaultCard;
