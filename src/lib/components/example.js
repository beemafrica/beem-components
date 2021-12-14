const btnVariants = {
  primary: "primary",
  danger: "danger",
  tertiary: "tertiary",
};

// Variant styles
const variantStyles = {
  [btnVariants.primary]: {
    background: "#1890ff",
  },
  [btnVariants.danger]: {
    background: "#f81d22",
  },
  [btnVariants.tertiary]: {
    background: "#fff",
    color: "#000",
  },
};

function BaseButton({ variant, ...props }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    ...variantStyles[variant],
  };

  return <button {...props} style={btnStyle} />;
}