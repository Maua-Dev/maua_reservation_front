
interface ButtonProps {
    buttonTitle: string;
    handleButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ buttonTitle, handleButtonClick }: ButtonProps) {
    return (
        <button onClick={handleButtonClick}>
            {buttonTitle}
        </button>
    );
}
