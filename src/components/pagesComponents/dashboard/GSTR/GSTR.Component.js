import Header from './GSTRHomeComponent/Header';
import NavigationBar from './GSTRHomeComponent/GSTRNavigation';
import MyComponent from './GSTRHomeComponent/GSTRSecondNavigation';
import GSTLedgerComponent from './GSTRHomeComponent/GSTRLedgerComponent';
import LinkComponent from './GSTRHomeComponent/GSTROtherLinkComponent';
import CustomButton from './GSTRHomeComponent/CustomButton';

export default function GSTR({ businessProfile }) {
  return (
    <div className="p-2">
      <Header />
      <NavigationBar />
      <MyComponent />
      <GSTLedgerComponent />
      <LinkComponent />
    </div>
  );
}
