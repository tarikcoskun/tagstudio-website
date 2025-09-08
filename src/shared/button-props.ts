import { tw } from "@/utils/tw"
import { cn } from "@/utils/cn"

type ButtonColors = "surface" | "negative" | "white" | "black"
type ButtonVariants = "solid" | "soft" | "ghost"
type ButtonSizes = "base" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
type ButtonPaddings = "base" | "even"

export interface ButtonStyleProps {
	color: ButtonColors
	variant?: ButtonVariants
	size?: ButtonSizes
	padding?: ButtonPaddings
}

export const buttonVariantClasses = {
	solid: {
		surface: tw`bg-surface-200 text-surface-950 hover:bg-surface-300 active:bg-surface-400`,
		negative: tw`bg-negative-200 text-surface-50 hover:bg-negative-300`,
		white: tw`bg-white text-black hover:bg-neutral-200`,
		black: tw`bg-black text-white hover:bg-neutral-800`,
	},
	soft: {
		surface: tw`bg-additive-lv1 text-heading hover:bg-additive-lv2 active:bg-additive-lv3`,
		negative: tw`bg-red`,
		white: tw`bg-white/15 text-white hover:bg-white/25`,
		black: tw`bg-black/15 text-black hover:bg-black/25`,
	},
	ghost: {
		surface: tw`text-heading hover:bg-additive-lv1 active:bg-additive-lv3`,
		negative: tw``,
		white: tw`text-white hover:bg-white/15`,
		black: tw`text-black hover:bg-black/15`,
	},
} satisfies Record<ButtonVariants, Record<ButtonColors, string>>

export function getButtonStyles({ color, variant, size, padding }: Required<ButtonStyleProps>) {
	return cn(
		"accessibility inline-flex cursor-pointer items-center rounded-md text-sm",
		{
			"h-(--ia-base) gap-x-(--ia-pi-even-base) px-(--ia-pi-base)": size === "base",
			"h-(--ia-sm) gap-x-(--ia-pi-even-sm) px-(--ia-pi-sm)": size === "sm",
			"h-(--ia-lg) gap-x-(--ia-pi-even-lg) px-(--ia-pi-lg)": size === "lg",
			"size-(--ia-base) justify-center": size === "icon",
			"size-(--ia-sm) justify-center": size === "icon-sm",
			"size-(--ia-lg) justify-center": size === "icon-lg",
		},
		padding === "even" && {
			"px-(--ia-pi-even-base)": size === "base",
			"px-(--ia-pi-even-sm)": size === "sm",
			"px-(--ia-pi-even-lg)": size === "lg",
		},
		buttonVariantClasses[variant][color],
	)
}
