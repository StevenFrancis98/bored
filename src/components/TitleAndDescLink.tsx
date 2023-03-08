const TitleAndDescLink: React.FC<{
  title: string;
  text: string;
  url: string;
}> = ({ title, text, url }) => {
  return (
    <div
      className="rounded-xl shadow-[0_0px_5px_theme(colors.pink.200)] transition-all duration-[150] ease-in-out
    hover:shadow-[0_0px_0px_theme(colors.pink.200)]"
    >
      <a
        className="flex h-full max-w-xs flex-col gap-4 rounded-xl  bg-pink-200/5 p-5 text-pink-200  shadow-[inset_0_0px_0px_theme(colors.pink.200)] transition-all duration-[150]
      ease-in-out hover:shadow-[inset_0_0px_5px_theme(colors.pink.200)]"
        href={url}
      >
        <h3 className="text-2xl font-bold">{title} →</h3>
        <div className="text-lg">{text}</div>
      </a>
    </div>
  );
};

export default TitleAndDescLink;
