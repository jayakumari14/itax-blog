import Button from './Button';

export default function GSTR_Supply() {
  return (
    <>
      <div className="border rounded-tl-md rounded-bl-md w-2/6 [&>div]:min-h-12">
        <div className="mt-12">
          <div className="flex justify-between items-center pr-1 pl-1">
            <Button
              title="Outward Supplies (GSTR-1)"
              className="w-[90%]"
              linkTo="/dashboard/easy-gst-return/outward-supplies"
            />

            <div className="text-xs text-gray-900">A</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center pr-1 pl-1">
            <Button
              className="w-[90%]"
              title="Inward Supplies (GSTR-2)"
              linkTo="/dashboard/easy-gst-return/inward-supplies"
            />
            <div className="text-xs text-gray-900">B</div>
          </div>
        </div>
        <div className="flex justify-between items-center align-center pt-2 pb-2 pl-1 pr-1">
          <div className="text-xs text-primary font-semibold">
            Utilized ITC Balance:
          </div>
          <div className="text-xs text-gray-900">C</div>
        </div>
        <div className="flex justify-between items-center align-center pt-2 pb-2 pl-1 pr-1">
          <div className="text-xs text-gray-900">
            Net Tax Liability on Outward Supply: (A-C)
          </div>
          <div className="text-xs text-gray-900">D</div>
        </div>
        <div className="flex justify-between items-center align-center pt-2 pb-2 pl-1 pr-1">
          <div className="text-xs text-gray-900">
            Add: Tax Liability on Inward Supply
          </div>
          <div className="text-xs text-gray-900">E</div>
        </div>
        <div className="flex justify-between items-center align-center pt-2 pb-2 pl-1 pr-1">
          <div className="text-xs text-gray-900">
            Total Tax Payyable in Cash: (D+E)
          </div>
          <div className="text-xs text-gray-900">F</div>
        </div>
        <div className="flex justify-between items-center align-center pt-1 pb-2 pl-1 pr-1">
          <div className="text-xs text-primary font-semibold">
            Less: Utilized Cash Balance:
          </div>
          <div className="text-xs text-gray-900">G</div>
        </div>
        <div className="flex justify-between items-center align-center pt-2 pb-2 pl-1 pr-1">
          <div className="text-xs text-gray-900">Balance GST Due: (F-G)</div>
          <div className="text-xs text-gray-900">H</div>
        </div>
      </div>
    </>
  );
}
