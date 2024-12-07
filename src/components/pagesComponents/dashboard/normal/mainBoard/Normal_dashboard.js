import CardOverview from './items/CardOverview';
import DashSection from '@/components/pagesComponents/pageLayout/DashSection';
import Sales_and_Purchase from './items/Sales_and_Purchase';
import DataState from './items/DataState';

export default function Normal_dashboard() {
  return (
    <div className="p-4 grid xl:grid-cols-12 gap-8">
      <CardOverview className="col-span-12 xl:col-span-7" />
      <Sales_and_Purchase />

     <DashSection
        className={'col-span-12 xl:col-span-7'}
        title={'Income & Expense'}
        titleRight={'current year - 2024'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection> 
      <DashSection
        className={'col-span-12 xl:col-span-5'}
        title={'account balance'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
      <DashSection
        className={'col-span-12 xl:col-span-7'}
        title={'latest income'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
      <DashSection
        className={'col-span-12 xl:col-span-5'}
        title={'latest expense'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
      <DashSection
        className={'col-span-12 xl:col-span-7'}
        title={'recent invoices'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
      <DashSection
        className={'col-span-12 xl:col-span-5'}
        title={'recent bills'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
      <DashSection className={'col-span-12 xl:col-span-7'} title={'cashflow'}>
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>

      <DashSection
        className={'col-span-12 xl:col-span-5'}
        title={'income vs expense'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
      <DashSection
        className={'col-span-12 xl:col-span-7'}
        title={'storage limit'}
        titleRight={'0MB / 25MB'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
      <DashSection
        className={'col-span-12 xl:col-span-5'}
        title={'income by category'}
        titleRight={'Year - 2024'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
      <DashSection
        className={'col-span-12 xl:col-span-7'}
        title={'Expense By Category'}
        titleRight={'Year - 2024'}
      >
        <div className="p-4">
          <DataState />
        </div>
      </DashSection>
    </div>
  );
}
