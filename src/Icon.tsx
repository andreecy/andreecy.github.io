declare global {
    namespace JSX {
        interface IntrinsicElements {
            "iconify-icon": IconifyAttributes;
        }

        interface IconifyAttributes extends HTMLAttributes {
            icon: string;
            width: number | string;
            height: number | string;
        }
    }
}

export const Icon = ({ icon, size = 32 }: { icon: string, size?: number }) => {
    return (
        <iconify-icon icon={icon} width={size} height={size}></iconify-icon>
    )
}