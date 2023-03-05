const Hover: React.FC<{
  children: JSX.Element;
  duration?: number;
  scale?: number;
}> = ({ children, duration = 100, scale = 1.03 }) => {
  return (
    <div
      className={`transition duration-[${duration}] ease-in-out hover:scale-[${scale}]`}
    >
      {children}
    </div>
  );
};

export default Hover;
