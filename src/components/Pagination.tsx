import * as React from 'react';
import styled from 'styled-components';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

export type Props = {
  testId?: string;
  pageCount: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  onPageChange?: ((event: any) => void) & Function;
} & React.HTMLAttributes<HTMLElement> &
  ReactPaginateProps;

const Pagination: React.FC<Props> = (props: Props) => {
  const {
    pageCount,
    pageRangeDisplayed,
    marginPagesDisplayed,
    onPageChange,
    testId,
    ...rest
  } = props;

  return (
    <Styled.ReactPaginateContainer>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        previousLabel="Prev"
        nextLabel="Next"
        onPageChange={onPageChange}
        previousClassName="previous-label bullet flex"
        nextClassName="next-label bullet flex"
        pageClassName="page-number flex"
        activeClassName="active-page-number flex"
        activeLinkClassName="active-page-number-link flex"
        pageLinkClassName="page-number-link flex"
        previousLinkClassName="previous-link flex"
        nextLinkClassName="next-link flex"
        breakClassName="break"
        id={testId}
        {...rest}
      />
    </Styled.ReactPaginateContainer>
  );
};

const Styled = {
  ReactPaginateContainer: styled.div`
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .break {
      display: none;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bullet {
      width: 60px;
      height: 40px;
      font-size: 14px;

      text-transform: upperCase;
      background-color: ${(props) => props.theme.colors.black5};
      cursor: pointer;
    }
    .previous-label {
      border-radius: 50% 0 0 50%;
      margin-right: ${(props) => props.theme.spacings.xxxs3};
    }
    .next-label {
      border-radius: 0 50% 50% 0;
    }
    .previous-link {
      border-radius: 50% 0 0 50%;

      width: 100%;
      height: 100%;
      &:active {
        background-color: ${(props) => props.theme.colors.seaBlueMain};
        color: ${(props) => props.theme.colors.white};
      }
    }
    .next-link {
      border-radius: 0 50% 50% 0;
      width: 100%;
      height: 100%;
      &:active {
        background-color: ${(props) => props.theme.colors.seaBlueMain};
        color: ${(props) => props.theme.colors.white};
      }
    }
    .page-number {
      width: 35px;
      height: 35px;
      color: ${(props) => props.theme.colors.black90};
      cursor: pointer;
      margin-right: ${(props) => props.theme.spacings.xxxs3};
    }
    .active-page-number {
      border-radius: 50%;

      background-color: ${(props) => props.theme.colors.seaBlueMuted};
      color: ${(props) => props.theme.colors.seaBlueDark};
    }
    a {
      border: none;
      outline: none;
    }
    .page-number-link {
      border-radius: 50%;
      font-size: 14px;
      width: 100%;
      height: 100%;

      &:not(.active-page-number-link):hover {
        background-color: ${(props) => props.theme.colors.seaBlueMain};
        color: ${(props) => props.theme.colors.white};
      }
    }
  `,
};

export default Pagination;
