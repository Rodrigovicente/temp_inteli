import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode
	iconOffset?: number
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, icon, iconOffset = 0, ...props }, ref) => {
		const InputComp = (
			<input
				type={type}
				className={cn(
					'flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				style={icon ? { paddingLeft: 38 + iconOffset + 'px' } : undefined}
				ref={ref}
				{...props}
			/>
		)

		if (icon) {
			return (
				<div className="relative">
					<div
						className="absolute inset-y-0 left-0 flex items-center"
						style={{ paddingLeft: 8 + iconOffset + 'px' }}
					>
						{icon}
					</div>
					{InputComp}
				</div>
			)
		}

		return InputComp
	}
)
Input.displayName = 'Input'

export { Input }
