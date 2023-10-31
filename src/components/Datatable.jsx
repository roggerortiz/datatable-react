import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { compareByField } from '../helpers/utils'
import { useDatatable } from '../hooks/useDatatable'
import BottomBar from './BottomBar'
import Header from './Header'
import Table from './Table'
import TopBar from './TopBar'
import Wrapper from './Wrapper'

function Datatable(props) {
  const {
    cols,
    rows,
    processedRows,
    searchValue,
    pager,
    pagination,
    setTitle,
    setCols,
    setRows,
    setPagedRows,
    setProcessedRows,
    setPager,
    setPagination
  } = useDatatable()

  const setInitialData = () => {
    setTitle(props.title)
    setCols(props.cols)
    setRows(props.rows)
  }

  const processRows = () => {
    if (!rows.length || !searchValue) {
      setProcessedRows(rows)
      setPager({ totalRows: rows.length, pageIndex: 1 })
      return
    }

    const newProcessedRows = rows.filter((row) =>
      cols.some((col) => {
        const value = row[col.field].toString().toLowerCase()
        return value.includes(searchValue.toLowerCase())
      })
    )

    setProcessedRows(newProcessedRows)
    setPager({ totalRows: newProcessedRows.length, pageIndex: 1 })
  }

  const paginateRows = () => {
    const { sortField, sortDir } = pager
    const { minRowIndex, maxRowIndex } = pagination

    let newPagedRows = [...processedRows]

    if (sortField && (sortDir === 1 || sortDir === -1)) {
      newPagedRows = newPagedRows.sort(compareByField(sortField, sortDir))
    }

    newPagedRows = newPagedRows.slice(minRowIndex - 1, maxRowIndex)

    setPagedRows(newPagedRows)
  }

  const createPagination = () => {
    const { pageSize, pageIndex, totalRows } = pager
    const { maxPageCount } = pagination

    const rowsByIndex = pageSize * pageIndex
    const minRowIndex = rowsByIndex - pageSize + 1
    const maxRowIndex = rowsByIndex > totalRows ? totalRows : rowsByIndex

    const pageCount = Math.ceil(totalRows / pageSize)
    const pageGroups = Math.ceil(pageCount / maxPageCount)
    const pageGroupIndex = Math.ceil(pageIndex / maxPageCount)

    const minPageIndex = (pageGroupIndex - 1) * maxPageCount + 1
    const maxPageIndex =
      pageGroupIndex < pageGroups ? minPageIndex + maxPageCount - 1 : pageCount

    const showLess = pageGroups > 1 && pageGroupIndex > 1
    const showMore = pageGroups > 1 && pageGroupIndex < pageGroups

    const length = maxPageIndex - minPageIndex + 1
    const pages = Array.from({ length }, (_, index) => minPageIndex + index)

    setPager({ pageCount })
    setPagination({
      pages,
      pageGroupIndex,
      minRowIndex,
      maxRowIndex,
      minPageIndex,
      maxPageIndex,
      showLess,
      showMore
    })
  }

  useEffect(() => {
    setInitialData()
  }, [props])

  useEffect(() => {
    processRows()
  }, [rows, searchValue])

  useEffect(() => {
    setPager({ pageIndex: 1 })
  }, [pager.pageSize])

  useEffect(() => {
    paginateRows()
  }, [
    cols,
    processedRows,
    pager.sortField,
    pager.sortDir,
    pagination.minRowIndex,
    pagination.maxRowIndex
  ])

  useEffect(() => {
    createPagination()
  }, [pager.totalRows, pager.pageIndex])

  return (
    <Wrapper>
      <Header />
      <TopBar />
      <Table />
      <BottomBar />
    </Wrapper>
  )
}

Datatable.propTypes = {
  title: PropTypes.string.isRequired,
  cols: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sort: PropTypes.oneOf([1, -1])
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired
}

export default Datatable
