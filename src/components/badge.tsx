interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div>
      <div className="justify-center mb-8 px-6 py-3 text-sm font-semibold rounded-full border bg-[rgba(158,1,1,0.05)] text-[#9E0101] border-[rgba(158,1,1,0.2)]">
        {text}
      </div>
    </div>
  );
};
export default Badge;
