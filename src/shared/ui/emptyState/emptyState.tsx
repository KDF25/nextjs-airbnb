"use client";

import { Button, Heading } from "@shared/ui";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

export const EmptyState: React.FC<Props> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-[60vh] flex flex-col gap-2 justify-center items-center"
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </motion.div>
  );
};
