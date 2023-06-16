interface Props {
  color?: string;
  pxSize?: number;
  className?: string;
}

export default function SearchIcon({ color, pxSize, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={pxSize ?? "32"}
      width={pxSize ?? "32"}
      fill={color || undefined}
      className={className || undefined}
    >
      <path d="M795.761-114.304 531.326-378.5q-29.761 25.264-69.6 39.415-39.84 14.15-85.161 14.15-109.835 0-185.95-76.195Q114.5-477.326 114.5-585t76.196-183.87q76.195-76.195 184.369-76.195t183.87 76.195q75.695 76.196 75.695 184.02 0 43.328-13.641 82.97-13.641 39.641-40.924 74.402L845.5-164.043l-49.739 49.739ZM375.65-393.065q79.73 0 135.29-56.245Q566.5-505.554 566.5-585t-55.595-135.69q-55.595-56.245-135.255-56.245-80.494 0-136.757 56.245Q182.63-664.446 182.63-585t56.228 135.69q56.227 56.245 136.792 56.245Z" />
    </svg>
  );
}