import { Suspense } from 'react';
import BusinessDetails from './BusinessDetails';
import LoadingComponent from '@/components/partials/loading/LoadingComponent';
import PersonalDetails from './PersonalDetails';
import BankDetails from './BankDetails';

export default function PermanentInfo({ businessProfile, userProfile }) {
  return (
    <>
      <div className="max-w-7xl w-[calc(100%-2rem)] mx-auto py-4 grid gap-4 lg:grid-cols-3">
        <Suspense fallback={<LoadingComponent />}>
          <BankDetails userProfile={userProfile} />
          <PersonalDetails userProfile={userProfile} />
          <BusinessDetails businessProfile={businessProfile} />
        </Suspense>
      </div>
    </>
  );
}
