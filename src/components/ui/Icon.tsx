
import * as React from "react";
import * as LucideIcons from "lucide-react";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  fallback?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] ||
    LucideIcons[fallback as keyof typeof LucideIcons];

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      aria-hidden="true"
    />
  );
};

export default Icon;
