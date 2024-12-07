export default function PopUpDialog({ isOpen, onClose, title, children }) {
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="bg-black opacity-50 fixed inset-0"></div>
			<div className="bg-bg_1 p-8 rounded-lg z-10">
				<div className="flex justify-between items-center border-b pb-4 mb-4">
					<h2 className="text-xl font-bold">{title}</h2>
					<button type="button" className=" m-2 text-2xl text-txt hover:text-red-600" onClick={onClose} >
                        &times;
					</button>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
}
