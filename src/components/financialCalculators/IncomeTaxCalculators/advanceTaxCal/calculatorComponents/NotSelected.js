export default function NotSelected() {
    return (
        <ul className="[&>li]:mt-2 [&>li]:grid [&>li]:items-center [&>li]:gap-x-2 [&>li]:grid-cols-1 sm:[&>li]:grid-cols-[2fr,1fr]">
            <li>
                <label htmlFor="">Net Taxable Income</label>
                <input className="input" type="text" />
            </li>
            <li>
                <label htmlFor="">Income Tax</label>
                <input className="input" type="text" />
            </li>
            <li>
                <label htmlFor="">Surcharge</label>
                <input className="input" type="text" />
            </li>
            <li>
                <label htmlFor="">Health and Education Cess</label>
                <input className="input" type="text" />
            </li>
            <li>
                <label htmlFor="">Total Tax Liability</label>
                <input className="input" type="text" />
            </li>
            <li>
                <label htmlFor="">Relief</label>
                <input className="input" type="text" />
            </li>
            <li>
                <label htmlFor="">TDS/TCS/MAT (AMT) Credit Utilized</label>
                <input className="input" type="text" />
            </li>
            <li>
                <label htmlFor="">Assessed Tax</label>
                <input className="input" type="number" />
            </li>
        </ul>
    );
}