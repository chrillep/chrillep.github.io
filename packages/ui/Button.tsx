interface Props {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    label?: string;
}

export const Button = ({
                           backgroundColor,
                           primary = false,
                           label = "Boop",
                           size = "small",
                       }: Props) => {
    return (
        <button
            style={{
                backgroundColor: backgroundColor ? backgroundColor : primary ? "red" : "blue",
                fontSize: size === "small" ? "12px" : size === "medium" ? "16px" : "24px",
            }}
        >
            {label}
        </button>
    );
};