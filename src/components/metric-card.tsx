import React, { ReactNode } from "react";
import cx from "@/lib/cx";

function MetricCard({
  children,
  data,
  prefix = "",
}: {
  children: ReactNode;
  data: string | number | ReactNode;
  prefix?: string;
}) {
  return (
    <div className={cx("px-4 py-3 !no-underline", "rounded-xl bg-zinc-200")}>
      <h5 className="text-mute">{children}</h5>
      <div className="font-semibold">
        {prefix}
        {data}
      </div>
    </div>
  );
}

export default MetricCard;
