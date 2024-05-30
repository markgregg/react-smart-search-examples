import * as React from 'react';
import {
  FilterFunction,
  Matcher,
  ReactSmartSearchAgGrid,
} from 'react-smart-search';
import {
  ColDef,
  ColumnApi,
  GridApi,
  GridReadyEvent,
  IRowNode,
} from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import Bond from './types/Bond';
import { bonds } from './data/bonds';
import { columns } from './functions';
import './styles.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export function SmartSeachAgGridHints() {
  const filterRef = React.useRef<FilterFunction | null>(null);
  const [matchers, setMatchers] = React.useState<Matcher[]>([]);
  const [rowData] = React.useState<Bond[]>(bonds);
  const [columnDefs] = React.useState<ColDef<Bond>[]>(columns);
  const [gridApi, setGridApi] = React.useState<GridApi<Bond> | null>(null);
  const [columnApi, setColumnApi] = React.useState<ColumnApi | null>(null);

  const matchersChanged = (
    newMatchers: Matcher[],
    newFilter: FilterFunction | null,
  ) => {
    setMatchers(newMatchers);
    filterRef.current = newFilter;
    gridApi?.onFilterChanged();
  };

  const handleGridReady = React.useCallback((event: GridReadyEvent<Bond>) => {
    setGridApi(event.api);
    setColumnApi(event.columnApi);
  }, []);

  const isExternalFilterPresent = React.useCallback(
    (): boolean => filterRef.current !== null,
    [],
  );

  const doesExternalFilterPass = React.useCallback(
    (node: IRowNode<Bond>): boolean =>
      filterRef.current !== null && filterRef.current(node),
    [],
  );

  return (
    <div className="storyStyle">
      <h1>Smart Search For Ag-Grid with Hints</h1>
      <div className="text">
        Hints can also be configured for Ag-grid. By default the hints options
        will be taken from the values in the grid.
      </div>
      <div className="agGridFrame">
        <ReactSmartSearchAgGrid<Bond>
          matchers={matchers}
          onChanged={(m, f) => matchersChanged(m, f)}
          maxMatcherWidth={250}
          hints={[
            {
              field: 'currency',
            },
            {
              field: 'side',
            },
            {
              field: 'maturityDate',
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
          gridApi={gridApi}
          columnApi={columnApi}
        />
        <div className="ag-theme-alpine agGrid">
          <AgGridReact
            onGridReady={handleGridReady}
            rowData={rowData}
            columnDefs={columnDefs}
            isExternalFilterPresent={isExternalFilterPresent}
            doesExternalFilterPass={doesExternalFilterPass}
          />
        </div>
      </div>
    </div>
  );
}
