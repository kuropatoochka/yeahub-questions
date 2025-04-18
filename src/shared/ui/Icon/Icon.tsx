type IconProps = {
  src: string,
  alt?: string,
  size?: number,
  className?: string,
}

const Icon = ( { src, alt = 'icon', size = 20, className }: IconProps ) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      className={className}
      loading="lazy"
      style={{ height: "100%" }}
    />
  );
};

export default Icon;