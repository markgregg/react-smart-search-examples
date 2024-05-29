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

export function SmartSeachAgGrid() {
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
    <div>
      <span>
        React Smart Search for Ag-Grid will provide advanced filtering for
        Ag-Grid out of the box
        <br />
      </span>
      <div className="agGridFrame">
        <ReactSmartSearchAgGrid<Bond>
          matchers={matchers}
          onChanged={(m, f) => matchersChanged(m, f)}
          maxMatcherWidth={250}
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
