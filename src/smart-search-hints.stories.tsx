import * as React from 'react';
import ReactSmartSearch, {
  Field,
  defaultComparison,
  numberComparisons,
  stringComparisons,
} from 'react-smart-search';
import { extractDate, findItem, findItems, getSize, isSize } from './functions';

export function SmartSeachWithHints() {
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
        Quickpick hints can be provided for common selection options.
        <br />
      </span>
      <div style={{ height: '300px', width: '800px', position: 'relative' }}>
        <ReactSmartSearch
          fields={fields}
          hints={[
            {
              field: 'Currency',
            },
            {
              field: 'Side',
              options: ['BUY', 'SELL'],
            },
            {
              field: 'Sector',
              options: [
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
            },
            {
              field: 'MaturityDate',
              options: [
                {
                  displayText: '1Y to 5Y',
                  text: '2024-01-01',
                  value: '2024-01-01',
                  textTo: '2029-12-31',
                  valueTo: '2029-12-31',
                },
                {
                  displayText: '6Y to 10Y',
                  text: '2030-01-01',
                  value: '2030-01-01',
                  textTo: '2034-12-31',
                  valueTo: '2034-12-31',
                },
                {
                  displayText: '10Y to 15Y',
                  text: '2035-01-01',
                  value: '2035-01-01',
                  textTo: '2039-12-31',
                  valueTo: '2039-12-31',
                },
                {
                  displayText: '15Y to 20Y',
                  text: '2040-01-01',
                  value: '2040-01-01',
                  textTo: '2044-12-31',
                  valueTo: '2044-12-31',
                },
              ],
            },
          ]}
          comparisonDescriptons={[
            {
              symbol: '!',
              description: 'not',
              bgcolor: 'rgb(143 61 61)',
            },
            {
              symbol: '*',
              description: 'contains',
            },
            {
              symbol: '!*',
              description: 'not contains',
              bgcolor: 'rgb(143 61 61)',
            },
            {
              symbol: '<*',
              description: 'starts with',
            },
            {
              symbol: '>*',
              description: 'ends with',
            },
            {
              symbol: 'list',
              bgcolor: 'rgb(78 74 121)',
            },
            {
              symbol: 'range',
              bgcolor: 'rgb(82 103 66)',
            },
          ]}
        />
      </div>
    </div>
  );
}
