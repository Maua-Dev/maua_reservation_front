
interface ButtonProps {
    buttonTitle: string;
    handleClick: () => void;
}

export default function Button({ buttonTitle, handleClick }: ButtonProps) {
    return (
        <button onClick={handleClick}>
            {buttonTitle}
        </button>
    );
}
