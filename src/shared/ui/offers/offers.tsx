"use client";

import { offersRowOne, offersRowTwo } from "@shared/config";
import { motion } from "framer-motion";

export const Offers: React.FC = ({}) => {
  return (
    <div>
      <p className="text-xl font-semibold">What this place offers</p>
      <div className="flex justify-start space-x-12 pt-6">
        <div className="flex flex-col gap-2">
          {offersRowOne.map((item, index) => (
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 cursor-pointer"
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
        {/* another row */}
        <div className="flex flex-col gap-2">
          {offersRowTwo.map((item, index) => (
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 cursor-pointer"
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
