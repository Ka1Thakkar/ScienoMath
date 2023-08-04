// components/CarouselControls.tsx
import classNames from "classnames";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-center gap-2 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "px-4 py-2 text-black font-medium rounded-md": true,
          "bg-buttonorange/80": !props.canScrollPrev,
          "bg-buttonorange": props.canScrollPrev,
        })}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "px-4 py-2 text-black font-medium rounded-md": true,
          "bg-buttonorange/80": !props.canScrollNext,
          "bg-buttonorange": props.canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  );
};
export default CarouselControls;