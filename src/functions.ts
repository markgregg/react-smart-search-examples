import { SourceItem } from 'react-smart-search';
import { ColDef } from 'ag-grid-community';
import Bond from './types/Bond';
import { bonds } from './data/bonds';

export const findItems = (text: string, field: keyof Bond): SourceItem[] => {
  const uniqueItems = new Set<string>();
  bonds.forEach((bond) => {
    const value =
      typeof bond[field] === 'string'
        ? (bond[field] as string)
        : bond[field].toString();
    if (value && value.toUpperCase().includes(text.toUpperCase())) {
      uniqueItems.add(value.toString());
    }
  });
  let items = [...uniqueItems].sort();
  if (items.length > 10) {
    items = items?.slice(10);
  }
  return items;
};

export const findItem = (
  text: string,
  field: 'isin' | 'currency' | 'issuer',
): SourceItem | null => {
  const found = bonds.find((bond) => bond[field] === text);
  return found ? found[field] : null;
};

const formatDate = (date: Date): string =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

export const extractDate = (text: string) => {
  const dt = new Date();
  const value = parseInt(text.substring(0, text.length - 1), 10);
  const postFix = text.substring(text.length - 1);
  if (postFix === 'y' || postFix === 'Y') {
    dt.setFullYear(dt.getFullYear() + value);
    return formatDate(dt);
  }
  const addYears = (value + dt.getMonth()) / 12;
  const months = (value + dt.getMonth()) % 12;
  dt.setFullYear(dt.getFullYear() + addYears);
  dt.setMonth(months);
  return formatDate(dt);
};

export const isSize = (text: string): boolean => {
  if (text.length > 1 && !text.includes('.')) {
    const postfix = text.toLowerCase()[text.length - 1];
    if (postfix === 'm' || postfix === 'k') {
      const number = Number(text.substring(0, text.length - 1));
      return !Number.isNaN(Number(number));
    }
    return !Number.isNaN(Number(text));
  }
  return false;
};

export const getSize = (text: string): number => {
  const postfix = text.toLowerCase()[text.length - 1];
  if (postfix === 'm' || postfix === 'k') {
    const number = Number(text.substring(0, text.length - 1));
    return Number(number) * (postfix === 'm' ? 1000000 : 1000);
  }
  return Number(text);
};

export const columns: ColDef<Bond>[] = [
  {
    field: 'active',
    sortable: true,
    resizable: true,
  },
  {
    field: 'isin',
    filter: 'agSetColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'side',
    filter: 'agSetColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'currency',
    filter: 'agSetColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'issueDate',
    sortable: true,
    resizable: true,
  },
  {
    field: 'maturityDate',
    sortable: true,
    resizable: true,
  },
  {
    field: 'coupon',
    sortable: true,
    resizable: true,
  },
  {
    field: 'issuer',
    sortable: true,
    resizable: true,
  },
  {
    field: 'hairCut',
    sortable: true,
    resizable: true,
  },
  {
    field: 'categories.sector',
    filter: 'agSetColumnFilter',
    sortable: true,
    resizable: true,
  },
];
