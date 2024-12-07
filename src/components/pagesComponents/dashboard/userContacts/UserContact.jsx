import { Suspense } from 'react';
import DashSection from '../../pageLayout/DashSection';
import { AllContacts } from './AllContacts';
import { AllCareers } from './AllCareers';

function UserContact() {
  return (
    <div className=" container  mx-auto p-4">
      <DashSection title="Contacts">
        <Suspense
          fallback={
            <div className="h-34 grid place-content-center">
              <p className="animate-pulse">Loading contacts...</p>
            </div>
          }
        >
          <AllContacts />
        </Suspense>
      </DashSection>
      <DashSection title="Careers">
        <Suspense
          fallback={
            <div className="h-34 grid place-content-center">
              <p className="animate-pulse">Loading careers...</p>
            </div>
          }
        >
          <AllCareers />
        </Suspense>
      </DashSection>
    </div>
  );
}

export default UserContact;
