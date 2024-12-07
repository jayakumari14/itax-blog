function Invoice_Details(props) {
    const { register } = props;
	return (
        <div>
            <ul className="grid gap-2 py-2 [&>li]:grid [&>li]:grid-cols-[1fr,2fr] [&>li]:gap-2">
                <li>
                    <label className="label" htmlFor="invoiceNumber">Invoice Number</label>
                    <input {...register("invoiceNumber")} className="input" type="text" id="invoiceNumber" />
                </li>           
                <li>
                    <label className="label" htmlFor="invoiceDate">Invoice Date</label>
                    <input {...register("invoiceDate")} className="input" type="text" id="invoiceDate" />
                </li>           
                <li>
                    <label className="label" htmlFor="dueDate">Due Date</label>
                    <input {...register("dueDate")} className="input" type="text" id="dueDate" />
                </li>           
                <li>
                    <label className="label" htmlFor="modeOfPayment">Mode Of Payment</label>
                    <input {...register("modeOfPayment")} className="input" type="text" id="modeOfPayment" />
                </li>           
            </ul>
        </div>
	);
}

function Items_Details(props) {
    const {invoiceItems}=props;
	return (
		<div className="border-4 p-2 min-h-96">
            <table>
                <thead className="text-nowrap bg-blue-400 text-neutral-50 p-1">
                    <tr>
                        <th>Item Name</th>
                        <th>HSN Code</th>
                        <th>Purchase Price</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Opening Stock</th>
                        <th>Closing Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceItems?.map((item,index)=>(
                        <tr className=" text-nowrap" key={item.id}>
                            <td>: {item.item.itemName}</td>
                            <td>: {item.item.hsnCode}</td>
                            <td>: {item.item.purchasePrice}</td>
                            <td>: {item.quantity}</td>
                            <td>: {item.item.price}</td>
                            <td>: {item.discount}</td>
                            <td>: {item.item.openingStock}</td>
                            <td>: {item.item.closingStock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
		</div>
	);
}
function OtherDetails({register}) {
	return (
        <div>
            <div className="border-4 p-2 mt-2">
                <div className="mt-2">
                    <label htmlFor="details">Details</label>
                    <input
                        className="input text-md"
                        type="text"
                        {...register("details")}
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="extraDetails">Extra Details</label>
                    <textarea
                        className="input text-md"
                        type="text"
                        {...register("extraDetails")}
                        cols="30"
                        rows="2"
                    ></textarea>
                </div>
            </div>
            <div className="border-4 p-2 mt-2">
                <div className="mt-2">
                    <label htmlFor="declaration">
                        Declaration
                    </label>
                    <textarea
                        className="input text-md"
                        type="text"
                        {...register("declaration")}
                        cols="30"
                        rows="2"
                    ></textarea>
                </div>
                <div className="mt-2">
                    <label htmlFor="regards">Regards</label>
                    <input
                        className="input text-md"
                        type="text"
                        {...register("regards")}
                    />
                </div>
            </div>
        </div>
	);
}
function DetailsFrom_Inputs(props) {
    const { register } = props;
    return (
        <div>
            <div className="mt-2 text-xl text-gray-800 font-semibold">From:</div>
            <ul className="grid gap-2 py-2 [&>li]:grid [&>li]:grid-cols-[1fr,2fr] [&>li]:gap-2">
                <li>
                    <label className="label" htmlFor="bName_DetailsFrom">Business Name</label>
                    <input {...register("bName_DetailsFrom")} className="input" type="text" id="bName_DetailsFrom" />
                </li>            
                <li>
                    <label className="label" htmlFor="GSTIN_DetailsFrom">GSTIN</label>
                    <input {...register("GSTIN_DetailsFrom")} className="input" type="text" id="GSTIN_DetailsFrom" />
                </li>            
                <li>
                    <label className="label" htmlFor="pan_DetailsFrom">Pan</label>
                    <input {...register("pan_DetailsFrom")} className="input" type="text" id="pan_DetailsFrom" />
                </li>            
                <li>
                    <label className="label" htmlFor="Address_DetailsFrom">Address</label>
                    <input {...register("Address_DetailsFrom")} className="input" type="text" id="Address_DetailsFrom" />
                </li>            
                <li>
                    <label className="label" htmlFor="phone_DetailsFrom">Phone</label>
                    <input {...register("phone_DetailsFrom")} className="input" type="text" id="phone_DetailsFrom" />
                </li>            
                <li>
                    <label className="label" htmlFor="email_DetailsFrom">Email</label>
                    <input {...register("email_DetailsFrom")} className="input" type="text" id="email_DetailsFrom" />
                </li>            
            </ul>
        </div>
    )
}
function DetailsTo_Inputs(props) {
    const { register } = props;
    return (
        <div>
            <div className="mt-2 text-xl text-gray-800 font-semibold">To:</div>
            <ul className="grid gap-2 py-2 [&>li]:grid [&>li]:grid-cols-[1fr,2fr]">
                <li>
                    <label className="label" htmlFor="bName_DetailsTo">Business Name</label>
                    <input {...register("bName_DetailsTo")} className="input" type="text" id="bName_DetailsTo" />
                </li>            
                <li>
                    <label className="label" htmlFor="GSTIN_DetailsTo">GSTIN</label>
                    <input {...register("GSTIN_DetailsTo")} className="input" type="text" id="GSTIN_DetailsTo" />
                </li>            
                <li>
                    <label className="label" htmlFor="pan_DetailsTo">Pan</label>
                    <input {...register("pan_DetailsTo")} className="input" type="text" id="pan_DetailsTo" />
                </li>            
                <li>
                    <label className="label" htmlFor="Address_DetailsTo">Address</label>
                    <input {...register("Address_DetailsTo")} className="input" type="text" id="Address_DetailsTo" />
                </li>            
                <li>
                    <label className="label" htmlFor="phone_DetailsTo">Phone</label>
                    <input {...register("phone_DetailsTo")} className="input" type="text" id="phone_DetailsTo" />
                </li>            
                <li>
                    <label className="label" htmlFor="email_DetailsTo">Email</label>
                    <input {...register("email_DetailsTo")} className="input" type="text" id="email_DetailsTo" />
                </li>            
            </ul>
        </div>
    )
}
export default function EditTemplate(props) {
    const {register ,respInvoice} = props;
    return (
        <div className={props.className}>
            <div>
                <div className="grid items-center md:grid-cols-[1fr,2fr] py-4 gap-4">
                    <div>
                        <label hidden htmlFor="invoiceTitle">Invoice</label>
                        <input
                            className="input text-2xl"
                            type="text"
                            {...register("invoiceTitle")}
                        />
                    </div>
                    <div>
                        {/* <label hidden htmlFor="invoiceBusinessBrand">Business Name</label>
                        <input
                            className="input text-md"
                            type="text"
                            {...register("invoiceBusinessBrand")}
                        /> */}
                    </div>
                </div>
            </div>
            <Invoice_Details register={register }/>
            <div className=" mt-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
                <DetailsFrom_Inputs register={register }/>
                <DetailsTo_Inputs register={register }/>
            </div>
            <Items_Details invoiceItems={respInvoice?.invoiceItems}/>
            <OtherDetails register={register} />
        </div>
    )
}