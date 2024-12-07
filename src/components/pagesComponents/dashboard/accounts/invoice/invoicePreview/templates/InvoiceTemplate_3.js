import Image from 'next/image';
export default function InvoiceTemplate_3() {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10 bg-neutral-50">
      <div>
        <Image width={50} height={50} src="/logo.png" alt="itaxeasy" />
        <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
          ItaxEasy
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <div className="grid space-y-3">
            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                Billed to:
              </dt>
              <dd className="text-gray-800 dark:text-gray-200">
                <a
                  className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  sara@site.com
                </a>
              </dd>
            </dl>

            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                Billing details:
              </dt>
              <dd className="font-medium text-gray-800 dark:text-gray-200">
                <span className="block font-semibold">Sara Williams</span>
                <address className="not-italic font-normal">
                  280 Suzanne Throughway,
                  <br />
                  Breannabury, OR 45801,
                  <br />
                  United States
                  <br />
                </address>
              </dd>
            </dl>

            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                Shipping details:
              </dt>
              <dd className="font-medium text-gray-800 dark:text-gray-200">
                <span className="block font-semibold">Sara Williams</span>
                <address className="not-italic font-normal">
                  280 Suzanne Throughway,
                  <br />
                  Breannabury, OR 45801,
                  <br />
                  United States
                  <br />
                </address>
              </dd>
            </dl>
          </div>
        </div>

        <div>
          <div className="grid space-y-3">
            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                Invoice number:
              </dt>
              <dd className="font-medium text-gray-800 dark:text-gray-200">
                ADUQ2189H1-0038
              </dd>
            </dl>

            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                Currency:
              </dt>
              <dd className="font-medium text-gray-800 dark:text-gray-200">
                USD - US Dollar
              </dd>
            </dl>

            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                Due date:
              </dt>
              <dd className="font-medium text-gray-800 dark:text-gray-200">
                10 Jan 2023
              </dd>
            </dl>

            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                Billing method:
              </dt>
              <dd className="font-medium text-gray-800 dark:text-gray-200">
                Send invoice
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
        <div className="hidden sm:grid sm:grid-cols-5">
          <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
            Item
          </div>
          <div className="text-start text-xs font-medium text-gray-500 uppercase">
            Qty
          </div>
          <div className="text-start text-xs font-medium text-gray-500 uppercase">
            Rate
          </div>
          <div className="text-end text-xs font-medium text-gray-500 uppercase">
            Amount
          </div>
        </div>

        <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          <div className="col-span-full sm:col-span-2">
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Item
            </h5>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              Design UX and UI
            </p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Qty
            </h5>
            <p className="text-gray-800 dark:text-gray-200">1</p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Rate
            </h5>
            <p className="text-gray-800 dark:text-gray-200">5</p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Amount
            </h5>
            <p className="sm:text-end text-gray-800 dark:text-gray-200">$500</p>
          </div>
        </div>

        <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          <div className="col-span-full sm:col-span-2">
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Item
            </h5>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              Web project
            </p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Qty
            </h5>
            <p className="text-gray-800 dark:text-gray-200">1</p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Rate
            </h5>
            <p className="text-gray-800 dark:text-gray-200">24</p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Amount
            </h5>
            <p className="sm:text-end text-gray-800 dark:text-gray-200">
              $1250
            </p>
          </div>
        </div>

        <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          <div className="col-span-full sm:col-span-2">
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Item
            </h5>
            <p className="font-medium text-gray-800 dark:text-gray-200">SEO</p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Qty
            </h5>
            <p className="text-gray-800 dark:text-gray-200">1</p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Rate
            </h5>
            <p className="text-gray-800 dark:text-gray-200">6</p>
          </div>
          <div>
            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
              Amount
            </h5>
            <p className="sm:text-end text-gray-800 dark:text-gray-200">
              $2000
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex sm:justify-end">
        <div className="w-full max-w-2xl sm:text-end space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
              <dt className="col-span-3 text-gray-500">Subotal:</dt>
              <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                $2750.00
              </dd>
            </dl>

            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
              <dt className="col-span-3 text-gray-500">Total:</dt>
              <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                $2750.00
              </dd>
            </dl>

            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
              <dt className="col-span-3 text-gray-500">Tax:</dt>
              <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                $39.00
              </dd>
            </dl>

            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
              <dt className="col-span-3 text-gray-500">Amount paid:</dt>
              <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                $2789.00
              </dd>
            </dl>

            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
              <dt className="col-span-3 text-gray-500">Due balance:</dt>
              <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                $0.00
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
