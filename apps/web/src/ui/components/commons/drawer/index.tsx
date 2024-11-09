import { type ForwardedRef, forwardRef, type ReactNode, useImperativeHandle } from "react";
import { Slot } from "@radix-ui/react-slot";
import RmDrawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css"
import { useDrawer } from "./use-drawer";
import type { DrawerRef } from "./types/drawer-ref";
import { X } from "lucide-react";

type DrawerProps = {
  children: (closeDrawer: VoidFunction) => ReactNode;
  trigger: ReactNode;
  direction?: "top" | "left" | "right" | "bottom";
  zIndex?: number;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
};
export const DrawerComponent = (
  {
    children,
    trigger,
    direction = "right",
    zIndex = 1,
    onOpen,
    onClose,
  }: DrawerProps,
  ref: ForwardedRef<DrawerRef>,
) => {
  const { open, close, isOpen } = useDrawer(onOpen, onClose);
  useImperativeHandle(
    ref,
    () => {
      return {
        close,
        open,
      };
    },
    [close, open],
  );
  return (
    <>
      <RmDrawer
        open={isOpen}
        onClose={close}
        size={700}
        direction={direction}
        zIndex={zIndex}
      >
        <div className="p-6 pb-12 h-full overflow-y-auto">
          <div className="ml-auto w-max">
            <X onClick={close} size={20} />
          </div>
          <div className="mt-1 h-full sm:h-auto">{children(close)}</div>
        </div>
      </RmDrawer>
      <Slot onClick={open}>{trigger}</Slot>
    </>
  );
};
export const Drawer = forwardRef(DrawerComponent)
