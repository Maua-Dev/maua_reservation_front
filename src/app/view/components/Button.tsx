
interface ButtonProps {
    buttonTitle: string;
}

export default function Button({ buttonTitle }: ButtonProps) {
    return (
        <button>
            {buttonTitle}
        </button>
    );
}
