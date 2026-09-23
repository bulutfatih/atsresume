import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {
  const print = () => {
    window.print();
  };

  return (
    <button
      type="button"
      aria-label="Print or save resume as PDF"
      title="Opens print options. Choose Save as PDF to download."
      className="exclude-print resume-floating-action resume-pdf-action"
      onClick={print}
    >
      <MdPictureAsPdf className="resume-floating-action-icon" aria-hidden="true" />
      <span className="resume-pdf-copy">
        <span className="resume-pdf-label">Save as PDF</span>
      </span>
    </button>
  );
};

export default WinPrint;
