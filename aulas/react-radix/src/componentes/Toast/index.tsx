import { CheckIcon } from "@radix-ui/react-icons";
import { Toast } from "radix-ui";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

const ToastDemo = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleClick = () => {
    setOpen(false);
    clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  return (
    <>
      <button className="Button large" onClick={handleClick}>
        Adicionar produto
      </button>
      <Toast.Provider swipeDirection="up">
        <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
          <Toast.Description className="ToastDescription">
            <CheckIcon />
            Produto adicionado ao carrinho!
          </Toast.Description>
          <Toast.Action className="ToastAction" asChild altText="Fechar">
            <button className="Button small">x</button>
          </Toast.Action>
        </Toast.Root>

        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </>
  );
};

export default ToastDemo;
