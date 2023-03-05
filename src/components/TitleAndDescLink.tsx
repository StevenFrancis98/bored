import Link from "next/link";

const TitleAndDescLink: React.FC<{
  title: string;
  text: string;
  url: string;
}> = ({ title, text, url }) => {
  return (
    <Link
      className="hover: flex h-full max-w-xs flex-col gap-4 rounded-xl bg-[#590d22]/10 p-5 text-[#590d22] hover:bg-[#590d22]/20"
      href={url}
      target="_blank"
      shallow
    >
      <h3 className="text-2xl font-bold">{title} →</h3>
      <div className="text-lg">{text}</div>
    </Link>
  );
};

export default TitleAndDescLink;