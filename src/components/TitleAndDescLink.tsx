const TitleAndDescLink: React.FC<{
  title: string;
  text: string;
  url: string;
}> = ({ title, text, url }) => {
  return (
    <a
      className="flex h-full max-w-xs flex-col gap-4 rounded-xl bg-pink-200/10  p-5 text-pink-200 shadow-[0_0_10px_theme(colors.pink.200)] hover:bg-pink-200/20 
      hover:shadow-[0_0_15px_theme(colors.pink.200)]"
      href={url}
    >
      <h3 className="text-2xl font-bold">{title} →</h3>
      <div className="text-lg">{text}</div>
    </a>
  );
};

export default TitleAndDescLink;
