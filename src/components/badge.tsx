interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div>
      <div className="justify-center mb-8 px-6 py-3 text-sm font-semibold rounded-full border bg-cert-home-red-5 border-cert-home-red-20 text-cert-home-red ">
        {text}
      </div>
    </div>
  );
};
export default Badge;
