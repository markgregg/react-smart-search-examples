import * as React from 'react';
import ReactSmartSearch, {
  Field,
  defaultComparison,
  numberComparisons,
  stringComparisons,
} from 'react-smart-search';
import { extractDate, findItem, findItems, getSize, isSize } from './functions';

export function SmartSeachBasic() {
  const fields = React.useMemo<Field[]>(
    () => [
      {
        name: 'ISIN',
        title: 'ISIN Code',
        comparisons: defaultComparison,
        precedence: 3,
        allowLists: true,
        fieldMatches: [
          {
            minimumSearchLength: 2,
            ignoreCase: true,
            source: async (text) =>
              new Promise((resolve) => {
                setTimeout(() => resolve(findItems(text, 'isin')), 5);
              }),
            matchOnPaste: async (text) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(findItem(text, 'isin'));
                }, 5);
              }),
          },
        ],
      },
      {
        name: 'Currency',
        title: 'Currency Code',
        comparisons: defaultComparison,
        precedence: 2,
        allowLists: true,
        fieldMatches: [
          {
            ignoreCase: true,
            source: async (text) =>
              new Promise((resolve) => {
                setTimeout(() => resolve(findItems(text, 'currency')), 5);
              }),
            matchOnPaste: async (text) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(findItem(text, 'currency'));
                }, 5);
              }),
          },
        ],
      },
      {
        name: 'Coupon',
        title: 'Coupon',
        comparisons: numberComparisons,
        precedence: 1,
        allowRanges: true,
        fieldMatches: [
          {
            match: (text: string) => !Number.isNaN(Number(text)),
            value: (text: string) => Number.parseFloat(text),
            matchOnPaste: true,
          },
        ],
      },
      {
        name: 'HairCut',
        title: 'Hair Cut',
        comparisons: numberComparisons,
        precedence: 1,
        allowRanges: true,
        fieldMatches: [
          {
            match: (text: string) => !Number.isNaN(Number(text)),
            value: (text: string) => Number.parseFloat(text),
            matchOnPaste: true,
          },
        ],
      },
      {
        name: 'Size',
        title: 'Size',
        comparisons: numberComparisons,
        precedence: 4,
        allowRanges: true,
        fieldMatches: [
          {
            match: (text: string) => isSize(text),
            value: (text: string) => getSize(text),
            matchOnPaste: true,
          },
        ],
      },
      {
        name: 'Side',
        title: 'Side',
        comparisons: stringComparisons,
        precedence: 9,
        fieldMatches: [
          {
            ignoreCase: true,
            source: ['BUY', 'SELL'],
            matchOnPaste: true,
          },
        ],
      },
      {
        name: 'Issuer',
        title: 'Issuer',
        comparisons: stringComparisons,
        precedence: 1,
        fieldMatches: [
          {
            ignoreCase: true,
            match: /^[a-zA-Z ]{2,}$/,
            value: (text: string) => text,
            matchOnPaste: false,
          },
          {
            ignoreCase: false,
            searchStartLength: 3,
            source: async (text) =>
              new Promise((resolve) => {
                setTimeout(() => resolve(findItems(text, 'issuer')), 5);
              }),
            matchOnPaste: async (text) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(findItem(text, 'issuer'));
                }, 5);
              }),
          },
        ],
      },
      {
        name: 'MaturityDate',
        title: 'Maturity Date',
        comparisons: numberComparisons,
        precedence: 4,
        allowRanges: true,
        fieldMatches: [
          {
            match: /^[0-9]{0,2}[yYmM]$/,
            value: (text: string) => extractDate(text),
            matchOnPaste: true,
          },
        ],
      },
      {
        name: 'IssueDate',
        title: 'Issue Date',
        comparisons: numberComparisons,
        precedence: 3,
        allowRanges: true,
        fieldMatches: [
          {
            match: /^[0-9]{0,2}[yYmM]$/,
            value: (text: string) => extractDate(text),
            matchOnPaste: true,
          },
        ],
      },
      {
        name: 'Sector',
        title: 'Sector',
        comparisons: stringComparisons,
        precedence: 8,
        allowLists: true,
        fieldMatches: [
          {
            searchStartLength: 2,
            ignoreCase: true,
            source: [
              'Energy',
              'Materials',
              'Industrials',
              'Consumer',
              'Health',
              'Financials',
              'Technology',
              'Communications',
              'Utilities',
            ],
            matchOnPaste: true,
          },
        ],
      },
    ],
    [],
  );

  return (
    <div>
      <span>
        Below is a simple example of the React Smart Search component hooked up
        to a client side data source. Smart search supports server-side, client
        side or a hybrid. <br />
        Allows multiple comparison methods and spports, and/or, brackets, lists
        and ranges. <br />
        You can search by field (side = buy), by comparion and value (${'>'} 5),
        or by value (sell). <br />
        If a comparison is not provided equals is assumed. Likewsie, conditions
        are joined by and, unless or is supplied.
        <br />
      </span>
      <div style={{ height: '300px', width: '800px', position: 'relative' }}>
        <ReactSmartSearch fields={fields} />
      </div>
    </div>
  );
}
