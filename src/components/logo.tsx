import Image from "next/image";

export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt="Momentum"
      width={144}
      height={120}
      priority
      className={className}
    />
  );
}
