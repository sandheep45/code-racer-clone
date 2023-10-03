import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const AuthIcon = (
  { title, titleId, desc, descId, ...props }: Props,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      className="stroke-black dark:stroke-white"
      fill="none"
      d="M24.393 26.472 29.01 41.21l-.732 1.29-5-2.515-4.047-14.158"
    />
    <path
      className="stroke-black dark:stroke-white"
      fill="none"
      d="M24.393 26.472c-6.605.37-12.467-3.46-11.261-11.166"
    />
    <path
      className="stroke-black dark:stroke-white"
      fill="none"
      d="M9.675 19.276a7.41 7.41 0 1 1 11.133-5.333"
    />
    <path
      className="stroke-black dark:stroke-white"
      fill="none"
      d="m29.337 19.411 12.554 11.947.05 2.497-5.634.03-10.95-10.738m-.013.005a7.112 7.112 0 0 1-9.601-6.661 7.111 7.111 0 0 1 7.11-7.111 7.111 7.111 0 0 1 7.112 7.11 7.111 7.111 0 0 1-.623 2.91"
    />
  </svg>
);
const ForwardRef = forwardRef(AuthIcon);
const Memo = memo(ForwardRef);
export default Memo;
