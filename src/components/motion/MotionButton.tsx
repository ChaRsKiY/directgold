"use client";

import { motion } from "motion/react";
import { type ComponentPropsWithoutRef } from "react";

export function MotionButton({
	children,
	...props
}: ComponentPropsWithoutRef<typeof motion.button>) {
	return <motion.button {...props}>{children}</motion.button>;
}

