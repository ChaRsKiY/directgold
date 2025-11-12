"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionLi({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.li>) {
	return <motion.li {...props}>{children}</motion.li>;
}

