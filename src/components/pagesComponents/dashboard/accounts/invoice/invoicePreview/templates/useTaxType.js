import { useEffect, useState } from 'react';
import { TAX_TYPES_BY_STATES, UT_STATE_CODES } from '../../invoice/staticData';

export default function useTaxType(invoice, businessProfile) {
  const [taxType, setTaxType] = useState(TAX_TYPES_BY_STATES.inter);

  useEffect(() => {
    if (invoice?.gstNumber) {
      const gstin = invoice?.gstNumber;
      const userGstin = businessProfile?.profile?.gstin;
      const code = gstin.slice(0, 2);

      if (UT_STATE_CODES.includes(code)) {
        return setTaxType(TAX_TYPES_BY_STATES.ut);
      }

      if (gstin === userGstin) {
        return setTaxType(TAX_TYPES_BY_STATES.intra);
      }

      if (gstin !== userGstin) {
        return setTaxType(TAX_TYPES_BY_STATES.inter);
      }
    }
  }, [invoice?.gstNumber, businessProfile?.profile?.gstin]);

  return [taxType, setTaxType];
}
