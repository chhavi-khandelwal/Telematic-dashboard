import Pagination from 'components/Pagination';
import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import Cross from 'assets/images/cross.png';
import Tick from 'assets/images/tick.png';
import { getLocalString } from 'utils/getLocalTime';

interface Props {
  data: any;
  setPageNumber: (data: number) => void;
  total?: number;
  pages?: number;
}

export default function Table({ data, setPageNumber, total, pages }: Props) {
  const columns = React.useMemo(
    () => [
      {
        id: 'MachineTable',
        Header: () => undefined,
        hideHeader: false,
        columns: [
          {
            Header: 'Machine',
            accessor: 'equipmentHeader',
            Cell: (row: any) => {
              return (
                <>
                  <span>{`${row.row.values.equipmentHeader.OEMName} | `}</span>
                  <span>{`${row.row.values.equipmentHeader.model} | `}</span>
                  <span>
                    {` ${row.row.values.equipmentHeader.serialNumber}`}
                  </span>
                </>
              );
            },
          },
          {
            Header: 'Fuel Consumed',
            accessor: 'fuelUsed.fuelConsumed',
          },
          {
            Header: 'Engine Status',
            accessor: 'engineStatus',
            Cell: (row: any) => {
              return (
                <Styled.Flex>
                  {row.row.values.engineStatus.running ? (
                    <img src={Tick} width={16} height={16} alt="tick" />
                  ) : (
                    <img src={Cross} width={16} height={16} alt="cross" />
                  )}
                </Styled.Flex>
              );
            },
          },
          {
            Header: 'Fuel Remaining ',
            accessor: 'fuelRemaining.percent',
          },
          {
            Header: 'snapshot Time',
            accessor: 'equipmentHeader.snapshotTime',
            Cell: (row: any) => {
              return (
                <span>
                  {getLocalString(row.row.values.equipmentHeader.snapshotTime)}
                </span>
              );
            },
          },
          {
            Header: 'Location',
            accessor: 'location',
            Cell: (row: any) => {
              return (
                <>
                  <span>{`lat: ${row.row.values.location.latitude} | `}</span>
                  <span>{`long: ${row.row.values.location.longitude}`}</span>
                </>
              );
            },
          },
          {
            Header: 'cumulativeIdle Hours',
            accessor: 'cumulativeIdleHours',
            Cell: (row: any) => {
              return (
                <span
                  data-testid={`cell${row.row.values.equipmentHeader.model}`}
                >
                  {row.row.values.cumulativeIdleHours.hour}
                </span>
              );
            },
          },
          {
            Header: 'cumulative Operating Hours',
            accessor: 'cumulativeOperatingHours.hour',
          },
          {
            Header: 'distance',
            accessor: 'distance.odometer',
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data: data || [],
    });

  return (
    <Styled.Container>
      <Styled.Table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => {
                return column.hideHeader === false ? null : (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr onClick={() => {}} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Styled.Table>
      <Styled.Divider />
      <Pagination
        pageCount={pages ?? 1}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
      />
    </Styled.Container>
  );
}

const Styled = {
  Flex: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Table: styled.table`
      width: 100%;
      border-spacing: 0;
      border: 1px solid ${(props) => props.theme.colors.black30};

      tr {
          :nth-child(even) {
              background: ${(props) => props.theme.colors.seaBlueLighten};
          }
          :nth-child(odd) {
            background: ${(props) => props.theme.colors.white};
          } 

          &:hover {
            cursor: pointer;
            background-color: ${(props) => props.theme.colors.seaBlueMuted};
          }
      }

      th,
      td {
          margin: 0;
          padding: ${(props) => props.theme.spacings.m};
          border-bottom: 1px solid ${(props) => props.theme.colors.black30};
          border-right: 1px solid ${(props) => props.theme.colors.black30};
          text-align: left;

          font-size: 15px;
          color: ${(props) => props.theme.colors.black30}

          :last-child {
              border-right: 0;
          }
      }
  `,
  Divider: styled.div`
    width: 700px;
    height: 4px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.black20};
    margin-top: ${(props) => props.theme.spacings.l};
    margin-bottom: ${(props) => props.theme.spacings.xl};
    align-self: center;
  `,
};
