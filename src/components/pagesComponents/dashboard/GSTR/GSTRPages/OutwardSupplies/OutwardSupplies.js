import GSTRTable from '../../GSTRTable';
import OutwardSuppliesDetails from './OutwardSuppliesDetails';
import StatusHeader from '../StatusHeader';
import DashSection from '@/components/pagesComponents/pageLayout/DashSection';

const OutwardSupplies = () => {
  const supplyData = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];

  return (
    <>
      <main>
        <section>
          <StatusHeader />
        </section>

        <DashSection>
          <div className="flex p-3">
            <OutwardSuppliesDetails />
            <GSTRTable supplyData={supplyData} />
          </div>
        </DashSection>
      </main>
    </>
  );
};

export default OutwardSupplies;
