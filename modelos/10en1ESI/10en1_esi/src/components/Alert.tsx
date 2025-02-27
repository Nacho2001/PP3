interface AlertProps {
    message: string;
  }
  
  export function Alert({ message }: AlertProps) {
    return (
      <>
        <span>{message}</span>
      </>
    );
  }