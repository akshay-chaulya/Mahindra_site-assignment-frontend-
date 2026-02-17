import { useDialogContext } from "../context/ContextProvider";

const Btn1 = ({text}) => {
  const { openDialog } = useDialogContext();

  return (
    <button
      onClick={openDialog}
      className="
      cursor-pointer
      px-6 lg:px-16
      py-1.5 sm:py-2 md:py-2.5
      border border-gray-700
      text-gray-700
      font-semibold
      rounded-full
      hover:bg-gray-700 hover:text-white
      transition-all duration-300
      hover:scale-105 active:scale-95
    "
    >
     {text}
    </button>
  );
};

export default Btn1;