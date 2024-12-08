'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { getUserDetailsUsingPAN, generatePDF } from './utils/rest';
import { handleCalculations } from './utils/calculationHandler';
import { formatINRCurrency } from '@/utils/utilityFunctions';
import { DOMESTIC_COMPANY_CATEGORY } from './utils/constants';
import { toast } from 'react-toastify';
function NewTaxCalculator() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    getValues,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [comparison, setComparison] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [result, setResult] = useState(null);

  const submitHandler = (formData) => {
    console.log(formData);
    handleCalculations(formData, setValue, setComparison, setResult);
  };

  const panOnBlurHandler = async (event) => {
    const value = event.target.value;
    if (value === '') {
      setError('pan', { type: 'custom', message: 'Pan number is required' });
      return;
    }
    let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (!regex.test(value)) {
      setError(
        'pan',
        { type: 'custom', message: 'Pan number is invalid' },
        { shouldFocus: true },
      );
      return;
    }
    try {
      const result = await getUserDetailsUsingPAN(
        value,
        setValue,
        setError,
        setUserDetails,
      );
      if (result) clearErrors('pan');
    } catch (error) {
      console.log(error);
    }
  };

  const handlePDFexport = () => {
    if (!userDetails || !result) {
      toast.error('Please calculate tax and try again');
      return;
    }
    generatePDF(userDetails, result, getValues);
  };
  return (
    <div className="my-8 flex justify-center">
      <div
        className={`${classes} ${classes2} w-full rounded-md border border-primary_light p-8 md:w-[950px] [&>div]:border-b [&>div]:border-b-primary_light [&_div]:flex [&_div]:items-center [&_div]:justify-between [&_div]:gap-2 [&_div]:py-1`}
        id="advancetaxdiv"
      >
        <h3 className="mb-8 w-max rounded bg-primary px-2 text-2xl font-bold text-white md:text-3xl">
          TAX CALCULATOR
        </h3>
        <form onSubmit={handleSubmit(submitHandler)}>
          {/* PAN NUMBER */}
          <div>
            <div>
              <label htmlFor="pan">
                PAN No. <sup className="text-red-500">*</sup>
              </label>
            </div>
            <div className="relative w-64">
              <input
                type="text"
                id="pan"
                placeholder="Pan number "
                {...register('pan', {
                  required: 'Pan number is required',
                  pattern: {
                    value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                    message: 'Pan number is invalid',
                  },
                  onBlur: panOnBlurHandler,
                })}
              />
              {errors.pan && (
                <p className="absolute -bottom-4  text-red-500">
                  {errors.pan.message}
                </p>
              )}
            </div>
          </div>
          {/* TAX PAYER CATEGORY */}
          <div>
            <div>
              <label htmlFor="taxPayerCategory">Tax Payer</label>
              <sup className="text-red-500">*</sup>
            </div>
            <div className="relative w-64">
              <select
                id="taxPayerCategory"
                {...register('taxPayerCategory', {
                  required: 'Tax Payer type is required',
                })}
              >
                <option value="">Select</option>
                <option value={'General'}>Individual</option>
                <option value={'HUF(Hindu undivided family)'}>
                  HUF(Hindu undivided family)
                </option>
                <option value={'AOP/BOI'}>AOP/BOI</option>
                <option value={'Domestic Company'}>Domestic Company</option>
                <option value={'Foreign Company'}>Foreign Company</option>
                <option value={'LLP'}>Firm/LLP</option>
                <option value={'Co-operative Society'}>
                  Co-operative Society
                </option>
              </select>
              {errors.taxPayerCategory && (
                <p className="absolute -bottom-4  text-red-500">
                  {errors.taxPayerCategory.message}
                </p>
              )}
            </div>
          </div>
          {/* STATUS */}
          <div>
            <div>
              <label htmlFor="">Status</label>
            </div>
            <div className="w-64">
              <input
                readOnly
                placeholder="Status"
                type="text"
                {...register('status')}
              />
            </div>
          </div>
          {/* FIRST NAME */}
          <div>
            <div>
              <label htmlFor="">First Name </label>
            </div>
            <div className="w-64">
              <input
                type="text"
                placeholder="First Name"
                {...register('firstName')}
                readOnly
              />
            </div>
          </div>
          {/* LAST NAME */}
          <div>
            <div>
              <label htmlFor="">Last Name </label>
            </div>
            <div className="w-64">
              <input
                placeholder="Last Name"
                {...register('lastName')}
                type="text"
                readOnly
              />
            </div>
          </div>
          {/* ASSESSMENT YEAR */}
          <div>
            <div>
              <label htmlFor="assessmentYear">
                Assessment Year<sup className="text-red-500">*</sup>
              </label>
            </div>
            <div className="relative w-64">
              <select
                id="assessmentYear"
                {...register('assessmentYear', {
                  required: 'Assessment Year is required',
                })}
              >
                <option value="">Choose...</option>
                <option value={'AY 2024-25'}>2024-25</option>
                <option value={'AY 2023-24'}>2023-24</option>
                <option value={'AY 2022-23'}>2022-23</option>
                <option value={'AY 2021-22'}>2021-22</option>
                <option value={'AY 2020-21'}>2020-21</option>
                <option value={'AY 2019-20'}>2019-20</option>
                {/* <option value={"AY 2018-19"}>2018-19</option> */}
              </select>
              {errors.assessmentYear && (
                <p className="absolute -bottom-4  text-red-500">
                  {errors.assessmentYear.message}
                </p>
              )}
            </div>
          </div>
          {/*CONDITIONAL RENDERING FOR INDIVIDUAL TAX PAYERS */}
          {watch('taxPayerCategory') === 'General' && (
            <>
              {/*   OLD REGIME OR NEW REGIME */}
              {(watch('assessmentYear') === 'AY 2024-25' ||
                watch('assessmentYear') === 'AY 2023-24' ||
                watch('assessmentYear') === 'AY 2022-23' ||
                watch('assessmentYear') === 'AY 2021-22') && (
                <div>
                  <div>
                    <label htmlFor="oldRegime">
                      Whether opting htmlFor taxation under Section
                      <span className="text-blue-600">115BAC</span>?
                    </label>
                  </div>
                  <div>
                    <select id="oldRegime" {...register('isOldRegime')}>
                      <option value="no">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              )}
              {/* GENDER */}
              <div>
                <div>
                  <label htmlFor="gender">
                    Gender<sup className="text-red-500">*</sup>
                  </label>
                </div>
                <div className="relative w-64">
                  <select
                    id="gender"
                    {...register('gender', { required: 'Gender is required' })}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="senior_citizen">Senior Citizen</option>
                    <option value="super_senior_citizen">
                      Super Senior Citizen
                    </option>
                  </select>
                  {errors.gender && errors.gender?.message && (
                    <span className="text-red-500 absolute -bottom-4">
                      {errors.gender.message}
                    </span>
                  )}
                </div>
              </div>
              {/* RESIDENT STATUS */}
              <div>
                <div>
                  <label htmlFor="resident">
                    Residential Status<sup className="text-red-500">*</sup>
                  </label>
                </div>
                <div className="w-64 relative">
                  <select
                    id="resident"
                    {...register('residentStatus', {
                      required: 'Residential Status is required',
                    })}
                  >
                    <option value="">Select</option>
                    <option value="resident">Resident</option>
                    <option value="non_resident">Non Resident</option>
                    <option value="not_ordinary_resident">
                      Not Ordinary Resident
                    </option>
                  </select>
                  {errors.residentStatus && errors.residentStatus?.message && (
                    <span className="text-red-500 absolute -bottom-4">
                      {errors.residentStatus.message}
                    </span>
                  )}
                </div>
              </div>
              {/* NET TAXABLE INCOME */}
              <div>
                <div>
                  <label htmlFor="income">
                    Net Taxable Income<sup className="text-red-500">*</sup>
                  </label>
                </div>
                <div className="w-64 relative">
                  <input
                    {...register('basicIncome', {
                      required: 'Income is required',
                    })}
                    type="text"
                    id="income"
                  />
                  {errors.basicIncome && errors.basicIncome?.message && (
                    <span className="text-red-500 absolute -bottom-4">
                      {errors.basicIncome.message}
                    </span>
                  )}
                </div>
              </div>
              {/*  INCOME TAX */}
              <div>
                <div>
                  <label htmlFor="tax">
                    Income Tax after relief u/s
                    <span className="text-blue-600"> 87A</span>
                  </label>
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    id="tax"
                    {...register('calculatedNetTax')}
                    readOnly
                  />
                </div>
              </div>
              {/* SURCHARGE */}
              <div>
                <div>
                  <label htmlFor="surcharge">Surcharge</label>
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    id="surcharge"
                    readOnly
                    {...register('surcharge')}
                  />
                </div>
              </div>
              {/* HEALTH & EDUCATION CESS */}
              <div>
                <div>
                  <label htmlFor="cess">Health and Education Cess</label>
                </div>
                <div className="w-64">
                  <input
                    id="cess"
                    readOnly
                    {...register('educationCess')}
                    type="text"
                  />
                </div>
              </div>
              {/* TOTAL TAX LIABILITY */}
              <div>
                <div>
                  <label htmlFor="taxLiability">Total Tax Liability</label>
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    id="taxLiability"
                    {...register('totalTaxLiability')}
                    readOnly
                  />
                </div>
              </div>
            </>
          )}
          {/* CONDITIONAL RENDERING FOR OTHER TAX PAYERS */}
          {(watch('taxPayerCategory') === 'AOP/BOI' ||
            watch('taxPayerCategory') === 'HUF(Hindu undivided family)' ||
            watch('taxPayerCategory') === 'Domestic Company' ||
            watch('taxPayerCategory') === 'Foreign Company' ||
            watch('taxPayerCategory') === 'LLP') && (
            <>
              {/*   RENDERING EXTRA CHECKS FOR DOMESTIC COMPANY */}
              {watch('taxPayerCategory') === 'Domestic Company' && (
                <>
                  {/* AY 24-25 */}
                  {watch('assessmentYear') === 'AY 2024-25' && (
                    <div>
                      <div>
                        <input
                          type="radio"
                          {...register('domesticCategory')}
                          value={DOMESTIC_COMPANY_CATEGORY.LESS_THAN_400}
                          id="flexCheckDefault"
                          style={{ width: '15px', height: '15px' }}
                        />
                      </div>
                      <div>
                        <label className=" text-xs" htmlFor="flexCheckDefault">
                          Tick if, total turnover or gross receipt of the
                          company in the previous year &quot;year&quot; does not
                          exceed 400 crore rupees
                        </label>
                      </div>
                    </div>
                  )}
                  {/* AY 23-24 */}
                  {watch('assessmentYear') === 'AY 2023-24' && (
                    <div>
                      <div>
                        <input
                          type="radio"
                          {...register('domesticCategory')}
                          value={DOMESTIC_COMPANY_CATEGORY.LESS_THAN_400}
                          id="flexCheckDefault"
                          style={{ width: '15px', height: '15px' }}
                        />
                      </div>
                      <div>
                        <label className=" text-xs" htmlFor="flexCheckDefault">
                          Tick if, total turnover or gross receipt of the
                          company in the previous year 2020-21 does not exceed
                          400 crore rupees
                        </label>
                      </div>
                    </div>
                  )}
                  {/* AY 22-23 */}
                  {watch('assessmentYear') === 'AY 2022-23' && (
                    <div>
                      <div>
                        <input
                          type="radio"
                          {...register('domesticCategory')}
                          value={DOMESTIC_COMPANY_CATEGORY.LESS_THAN_400}
                          id="flexCheckDefault"
                          style={{ width: '15px', height: '15px' }}
                        />
                      </div>
                      <div>
                        <label className=" text-xs" htmlFor="flexCheckDefault">
                          Tick if, total turnover or gross receipt of the
                          company in the previous year 2019-20 does not exceed
                          400 crore rupees
                        </label>
                      </div>
                    </div>
                  )}
                  {/* AY 21-22 */}
                  {watch('assessmentYear') === 'AY 2021-22' && (
                    <div>
                      <div>
                        <input
                          type="radio"
                          {...register('domesticCategory')}
                          value={DOMESTIC_COMPANY_CATEGORY.LESS_THAN_400}
                          id="flexCheckDefault"
                          style={{ width: '15px', height: '15px' }}
                        />
                      </div>
                      <div>
                        <label className=" text-xs" htmlFor="flexCheckDefault">
                          Tick if, total turnover or gross receipt of the
                          company in the previous year 2018-19 does not exceed
                          400 crore rupees
                        </label>
                      </div>
                    </div>
                  )}
                  {/* AY 20-21 */}
                  {watch('assessmentYear') === 'AY 2020-21' && (
                    <div>
                      <div>
                        <input
                          type="radio"
                          {...register('domesticCategory')}
                          value={DOMESTIC_COMPANY_CATEGORY.LESS_THAN_400}
                          id="flexCheckDefault"
                          style={{ width: '15px', height: '15px' }}
                        />
                      </div>
                      <div>
                        <label className=" text-xs" htmlFor="flexCheckDefault">
                          Tick if, total turnover or gross receipt of the
                          company in the previous year 2017-18 does not exceed
                          400 crore rupees
                        </label>
                      </div>
                    </div>
                  )}
                  {/* AY 19-20 */}
                  {watch('assessmentYear') === 'AY 2019-20' && (
                    <div>
                      <div>
                        <input
                          type="radio"
                          {...register('domesticCategory')}
                          value={DOMESTIC_COMPANY_CATEGORY.LESS_THAN_400}
                          id="flexCheckDefault"
                          style={{ width: '15px', height: '15px' }}
                        />
                      </div>
                      <div>
                        <label className=" text-xs" htmlFor="flexCheckDefault">
                          Tick if, total turnover or gross receipt of the
                          company in the previous year 2016-17 does not exceed
                          250 crore rupees
                        </label>
                      </div>
                    </div>
                  )}
                  {/* OTHER CHECKS */}
                  <div className="flex items-center me-4">
                    <div>
                      <input
                        type="radio"
                        {...register('domesticCategory')}
                        value={DOMESTIC_COMPANY_CATEGORY.SECTION_115BA}
                        id="flexCheckDefault2"
                        style={{ width: '15px', height: '15px' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="flexCheckDefault2">
                        Tick if, company opted and qualify under section 115BA
                      </label>
                    </div>
                  </div>
                  {/* OTHER CHECKS */}
                  <div>
                    <div>
                      <input
                        type="radio"
                        {...register('domesticCategory')}
                        value={DOMESTIC_COMPANY_CATEGORY.SECTION_115BAA}
                        id="flexCheckDefault3"
                        style={{ width: '15px', height: '15px' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="flexCheckDefault3">
                        Tick if, company opted and qualify htmlFor section
                        115BAA
                      </label>
                    </div>
                  </div>
                  {/* OTHER CHECKS */}
                  <div>
                    <div>
                      <input
                        type="radio"
                        {...register('domesticCategory')}
                        value={DOMESTIC_COMPANY_CATEGORY.SECTION_115BAB}
                        style={{ width: '15px', height: '15px' }}
                        id="flexCheckDefault4"
                      />
                    </div>
                    <div>
                      <label htmlFor="flexCheckDefault4">
                        Tick if, company opted and qualify htmlFor section
                        115BAB
                      </label>
                    </div>
                  </div>
                </>
              )}
              {/* NET TAXABLE INCOME */}
              <div>
                <div>
                  <label htmlFor="income">
                    Net Taxable Income <sup className="text-red-500">*</sup>{' '}
                  </label>
                </div>

                <div className="relative w-64">
                  <input
                    type="text"
                    id="income"
                    {...register('basicIncome', {
                      required: 'Income is required',
                    })}
                  />
                  {errors.basicIncome && errors.basicIncome?.message && (
                    <span className="text-red-500 absolute -bottom-4">
                      {errors.basicIncome.message}
                    </span>
                  )}
                </div>
              </div>
              {/*  INCOME TAX */}
              <div>
                <div>
                  <label htmlFor="tax">
                    Income Tax after relief u/s
                    <span className="text-blue-600">87A</span>
                  </label>
                </div>
                <div className="w-64">
                  <input
                    id="tax"
                    {...register('calculatedNetTax')}
                    type="text"
                    readOnly
                  />
                </div>
              </div>
              {/* SURCHARGE */}
              <div>
                <div>
                  <label htmlFor="surcharge">Surcharge</label>
                </div>
                <div className="w-64">
                  <input {...register('surcharge')} readOnly type="text" />
                </div>
              </div>
              {/* HEALTH AND EDUCATION CESS */}
              <div>
                <div>
                  <label htmlFor="cess">Health and Education Cess</label>
                </div>
                <div className="w-64">
                  <input type="text" id="cess" {...register('educationCess')} />
                </div>
              </div>
              {/* TOTAL TAX LIABILITY */}
              <div>
                <div>
                  <label htmlFor="liability">Total Tax Liability</label>
                </div>
                <div className="w-64">
                  <input
                    id="liability"
                    type="text"
                    {...register('totalTaxLiability')}
                  />
                </div>
              </div>
            </>
          )}
          {/* CONDITIONAL RENDERING FOR CO-OPERATIVE SOCIETY  */}
          {watch('taxPayerCategory') === 'Co-operative Society' && (
            <>
              {/* CHECK OPTED FOR 115BAD  */}
              <div>
                <div>
                  <label htmlFor="115BAD">
                    Co-operative society opted and qualify htmlFor section
                    <span className="text-blue-600">115BAD</span>
                  </label>
                </div>
                <div>
                  <select id="115BAD" {...register('coOperative1115bad')}>
                    <option value="no">select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              {/* CHECK OPTED FOR 115BAE  */}
              {watch('assessmentYear') === 'AY 2024-25' && (
                <div>
                  <div>
                    <label htmlFor="115bae">
                      Co-operative society opted and qualify htmlFor section
                      <span className="text-blue-600">115BAE</span>
                    </label>
                  </div>
                  <div>
                    <select htmlFor="115bae" {...register('115BAE')}>
                      <option value="no">select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              )}
              {/* NET TAXABLE INCOME */}
              <div>
                <div>
                  <label htmlFor="netIncome">
                    Net Taxable Income<sup className="text-red-500">*</sup>
                  </label>
                </div>
                <div className="relative w-64">
                  <input
                    id="netIncome"
                    type="text"
                    {...register('basicIncome')}
                  />
                  {errors.basicIncome && errors.basicIncome?.message && (
                    <span className="text-red-500 absolute -bottom-4">
                      {errors.basicIncome.message}
                    </span>
                  )}
                </div>
              </div>
              {/* INCOME TAX */}
              <div>
                <div>
                  <label htmlFor="tax">
                    Income Tax after relief u/s
                    <span className="text-blue-600">87A</span>
                  </label>
                </div>
                <div className="w-64 relative">
                  <input
                    id="tax"
                    {...register('calculatedNetTax')}
                    type="text"
                    readOnly
                  />
                </div>
              </div>
              {/* SURCHARGE */}
              <div>
                <div>
                  <label htmlFor="surcharge">Surcharge</label>
                </div>
                <div className="w-64">
                  <input
                    id="surcharge"
                    {...register('surcharge')}
                    type="text"
                  />
                </div>
              </div>
              {/* EDUCATION CESS */}
              <div>
                <div>
                  <label htmlFor="cess">Education Cess</label>
                </div>
                <div className="w-64">
                  <input type="text" id="cess" {...register('educationCess')} />
                </div>
              </div>
              {/* TAX LIABILITY */}
              <div>
                <div>
                  <label htmlFor="liability">Total Tax Liability</label>
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    id="liability"
                    {...register('totalTaxLiability')}
                  />
                </div>
              </div>
            </>
          )}
          {/* FORM ACTIONS */}
          <section className="mt-8 flex justify-center gap-8">
            <button
              onClick={() => {
                reset();
                setUserDetails(null);
                setComparison(null);
              }}
              type="reset"
              className="rounded bg-red-500 p-3 px-8 text-white hover:opacity-75"
            >
              <span>Reset</span>
            </button>

            <button
              type="submit"
              className="rounded bg-primary p-3 px-8 text-white hover:opacity-75"
            >
              <span>Calculate</span>
            </button>
            <button
              type="button"
              className="rounded hover:bg-green-600 bg-green-500 p-3 px-8 text-white hover:opacity-75"
              onClick={handlePDFexport}
            >
              <span>Download PDF</span>
            </button>
          </section>
          {/* COMPARISON */}
          {comparison && (
            <section className="mt-8">
              <div className="px-3 py-1 bg-primary">
                <h1 className="text-white font-semibold text-xl">
                  Comparison b/w Old Regime and New Regime
                </h1>
              </div>
              <ul className="flex flex-col px-3">
                <li className="flex  flex-row justify-between">
                  <div className="flex-grow">Old Regime: </div>
                  <div className="flex-grow ">
                    {formatINRCurrency(comparison.oldRegime)}
                  </div>
                </li>
                <li className="flex flex-row justify-between">
                  <div className="flex-grow">New Regime: </div>
                  <div className="flex-grow ">
                    {formatINRCurrency(comparison.newRegime)}
                  </div>
                </li>
              </ul>
              <div className="px-3 py-1 ">
                <h2 className="text-green-700 font-semibold">
                  You save {formatINRCurrency(comparison.save)} if you opt
                  htmlFor {comparison.regime} Tax Regime.
                </h2>
              </div>
            </section>
          )}
        </form>
      </div>
    </div>
  );
}
const classes =
  '[&_input]:h-10 [&_input]:px-3 [&_input]:border [&_input]:border-neutral-800 [&_input]:rounded [&_input]:w-full';
const classes2 =
  '[&_select]:h-10 [&_select]:bg-white [&_select]:border [&_select]:border-neutral-800 [&_select]:px-2 [&_select]:rounded [&_select]:w-full [&_label]:text-lg';

export default NewTaxCalculator;
