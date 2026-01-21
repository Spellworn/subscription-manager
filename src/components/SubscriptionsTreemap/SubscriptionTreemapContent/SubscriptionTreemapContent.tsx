import { useAppSelector } from "../../../app/store.ts";
import { selectSubscriptionById } from "../../../features/subscriptions/subscriptionsSlice.ts";
import { styleHelper } from "../../../utils/styleHelper.ts";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "../../ModalContent/ModalContent.tsx";
import type { TreemapNode } from "recharts";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SubscriptionTreemapContentProps extends Partial<
  Pick<TreemapNode, "x" | "y" | "width" | "height" | "id">
> {}

export const SubscriptionTreemapContent = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  id,
}: SubscriptionTreemapContentProps) => {
  const subscription = useAppSelector((state) =>
    selectSubscriptionById(state, id),
  );
  const [showModal, setShowModal] = useState(false);

  const gap = styleHelper.remToPx(0.5);

  const innerX = x + gap;
  const innerY = y + gap;
  const innerWidth = Math.max(0, width - gap * 2);
  const innerHeight = Math.max(0, height - gap * 2);

  if (!id || width <= 2 || height <= 2) return null;

  return (
    <>
      <g
        onClick={() => setShowModal(true)}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.85";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        <rect
          x={innerX}
          y={innerY}
          width={innerWidth}
          height={innerHeight}
          rx={styleHelper.remToPx(0.75)}
          ry={styleHelper.remToPx(0.75)}
          fill={subscription?.color}
        />
        {innerWidth > 60 && (
          <>
            <text
              x={innerX + styleHelper.remToPx(1)}
              y={innerY + styleHelper.remToPx(3)}
              fill="#fff"
              fontSize={styleHelper.fitFontSizeToWidth(
                subscription?.name,
                width,
                1.5,
              )}
              fontWeight={600}
            >
              {subscription?.name}
            </text>
            <text
              x={innerX + styleHelper.remToPx(1)}
              y={innerY + styleHelper.remToPx(5)}
              fill="#fff"
              fontSize={styleHelper.fitFontSizeToWidth(
                subscription?.name,
                width,
                1.25,
              )}
              opacity={0.8}
            >
              {subscription?.price && `${subscription.price} ₽`}
            </text>
          </>
        )}
      </g>
      {showModal &&
        createPortal(
          <ModalContent id={id} onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
};
