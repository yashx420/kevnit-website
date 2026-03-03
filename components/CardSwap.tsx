import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
} from "react";
import gsap from "gsap";

export const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { customClass?: string }
>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: any, slot: any, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  autoPlay?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: string;
  children: React.ReactNode;
}

export interface CardSwapRef {
  next: () => void;
  prev: () => void;
}

const CardSwap = forwardRef<CardSwapRef, CardSwapProps>(
  (
    {
      width = 500,
      height = 400,
      cardDistance = 60,
      verticalDistance = 70,
      delay = 5000,
      pauseOnHover = false,
      autoPlay = true,
      onCardClick,
      skewAmount = 6,
      easing = "elastic",
      children,
    },
    ref,
  ) => {
    const config =
      easing === "elastic"
        ? {
            ease: "elastic.out(0.6,0.9)",
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "power1.inOut",
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          };

    const childArr = useMemo(() => Children.toArray(children), [children]);
    const refs = useMemo(
      () => childArr.map(() => React.createRef<HTMLDivElement>()),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [childArr.length],
    );

    const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const intervalRef = useRef<number | undefined>(undefined);
    const container = useRef<HTMLDivElement>(null);
    const isAnimating = useRef(false);
    const pendingDirection = useRef<number>(0);

    const checkQueue = () => {
      if (pendingDirection.current > 0) {
        pendingDirection.current--;
        doSwapNext();
      } else if (pendingDirection.current < 0) {
        pendingDirection.current++;
        doSwapPrev();
      }
    };

    const doSwapNext = () => {
      if (order.current.length < 2) return;
      isAnimating.current = true;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
          checkQueue();
        },
      });
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`,
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length,
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return",
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return",
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    const doSwapPrev = () => {
      if (order.current.length < 2) return;
      isAnimating.current = true;

      const back = order.current[order.current.length - 1];
      const rest = order.current.slice(0, -1);
      const elBack = refs[back].current;
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
          checkQueue();
        },
      });
      tlRef.current = tl;

      const frontSlot = makeSlot(
        0,
        cardDistance,
        verticalDistance,
        refs.length,
      );

      tl.set(elBack, {
        zIndex: refs.length + 1,
        y: frontSlot.y + 500,
        x: frontSlot.x,
        z: frontSlot.z,
      });

      tl.addLabel("demote", 0);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(
          i + 1,
          cardDistance,
          verticalDistance,
          refs.length,
        );
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `demote+=${(rest.length - i) * 0.15}`,
        );
        tl.set(
          el,
          { zIndex: slot.zIndex },
          `demote+=${(rest.length - i) * 0.15}`,
        );
      });

      tl.to(
        elBack,
        {
          y: frontSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        `-=${config.durReturn * 0.5}`,
      );

      tl.call(() => {
        order.current = [back, ...rest];
      });
    };

    const swapNext = () => {
      if (isAnimating.current) {
        pendingDirection.current++;
        return;
      }
      doSwapNext();
    };

    const swapPrev = () => {
      if (isAnimating.current) {
        pendingDirection.current--;
        return;
      }
      doSwapPrev();
    };

    useImperativeHandle(ref, () => ({
      next: swapNext,
      prev: swapPrev,
    }));

    useEffect(() => {
      const total = refs.length;
      refs.forEach((r, i) =>
        placeNow(
          r.current,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount,
        ),
      );

      if (autoPlay) {
        intervalRef.current = window.setInterval(swapNext, delay);

        if (pauseOnHover) {
          const node = container.current;
          if (node) {
            const pause = () => {
              tlRef.current?.pause();
              clearInterval(intervalRef.current);
            };
            const resume = () => {
              tlRef.current?.play();
              intervalRef.current = window.setInterval(swapNext, delay);
            };
            node.addEventListener("mouseenter", pause);
            node.addEventListener("mouseleave", resume);
            return () => {
              node.removeEventListener("mouseenter", pause);
              node.removeEventListener("mouseleave", resume);
              clearInterval(intervalRef.current);
            };
          }
        }
      }
      return () => clearInterval(intervalRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      cardDistance,
      verticalDistance,
      delay,
      pauseOnHover,
      skewAmount,
      easing,
      autoPlay,
    ]);

    const rendered = childArr.map((child: any, i) =>
      isValidElement(child)
        ? cloneElement(child, {
            key: i,
            ref: refs[i],
            style: {
              width,
              height,
              ...((child as React.ReactElement<any>).props.style ?? {}),
            },
            onClick: (e: any) => {
              (child as React.ReactElement<any>).props.onClick?.(e);
              onCardClick?.(i);
            },
          } as any)
        : child,
    );

    return (
      <div
        ref={container}
        className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
        style={{ width, height }}
      >
        {rendered}
      </div>
    );
  },
);

CardSwap.displayName = "CardSwap";

export default CardSwap;
