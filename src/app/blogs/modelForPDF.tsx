// import { MdOutlineCancel } from "react-icons/md";

import { RxCross2 } from "react-icons/rx";
type propsData = {
  currentPdf: string | undefined;
  closeModal: () => void;
};
const ModelForPDF: React.FC<propsData> = ({ currentPdf, closeModal }) => {
  return (
    <main>
      <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center  animate-fadeIn">
        <div className="bg-white w-[90%] max-w-[1000px]  rounded-2xl  flex justify-between relative p-1 gap-1">
          <div className="w-full h-[700px] rounded-xl overflow-hidden ">
            <iframe
              // src={currentPdf}
              src={`${currentPdf}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full"
              title="PDF Viewer"
            />
          </div>
          <div className="py-2">
            <button
              className="rounded-full  bg-gray/40 p-1.5  cursor-pointer"
              onClick={closeModal}
            >
              <RxCross2 className="text-gray md:text-[20px] sm:text-[15px] text-[10px] " />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ModelForPDF;
