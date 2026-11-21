
export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  href,
  disabled = false,
  className = "",
}) {
  const variants = {
    primary: "button",
    secondary: "button secondary-button",
    text: "text-button",
    danger: "text-button delete-button",
  };

  const classes = `${variants[variant] || variants.primary} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
