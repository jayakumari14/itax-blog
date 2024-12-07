'use client';

import React, { useEffect, useState } from 'react';
import {
  NormalDashboardUpperItem,
  QuickAccess,
  WelcomeHeader,
} from '../../../normal/mainBoard/items/Dashboard';
import moment from 'moment';

const MainLayout = ({ children }) => {
  const [filterType, setFilterType] = useState('financialyear');
  const [dateFilter, setDateFilter] = useState({ startDate: '', endDate: '' });

  function getDateRangeByType(type) {
    if (type) {
      const today = moment();
      let startDate, endDate;

      switch (type.toLowerCase()) {
        case 'financialyear':
          if (today.month() >= 3) {
            startDate = moment([today.year(), 3, 1]);
            endDate = moment([today.year() + 1, 2, 31]);
          } else {
            startDate = moment([today.year() - 1, 3, 1]);
            endDate = moment([today.year(), 2, 31]);
          }
          break;

        case 'yearly':
          startDate = moment([today.year(), 0, 1]);
          endDate = moment([today.year(), 11, 31]);
          break;

        case 'quarterly':
          const quarter = Math.floor(today.month() / 3);
          startDate = moment([today.year(), quarter * 3, 1]);
          endDate = startDate.clone().add(2, 'months').endOf('month');
          break;

        case 'monthly':
          startDate = moment([today.year(), today.month(), 1]);
          endDate = startDate.clone().endOf('month');
          break;

        case 'weekly':
          startDate = today.clone().startOf('isoWeek');
          endDate = today.clone().endOf('isoWeek');
          break;

        default:
          throw new Error(
            'Invalid type. Must be one of: financialyear, yearly, quarterly, monthly, weekly.',
          );
      }

      return {
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),
      };
    }
  }

  useEffect(() => {
    const dateRange = getDateRangeByType(filterType);
    setDateFilter(dateRange);
  }, [filterType]);

  return (
    <div>
      <WelcomeHeader dateFilter={dateFilter} />
      <NormalDashboardUpperItem />
      <QuickAccess
        setFilterType={setFilterType}
        setDateFilter={setDateFilter}
      />
      {children}
    </div>
  );
};

export default MainLayout;
