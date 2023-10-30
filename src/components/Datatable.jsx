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
    theme,
    cols,
    allRows,
    filteredRows,
    totalRows,
    minRowIndex,
    maxRowIndex,
    pageIndex,
    pageSize,
    maxPageCount,
    sortField,
    sortDir,
    searchText,
    setTheme,
    setTitle,
    setCols,
    setRows,
    setAllRows,
    setFilteredRows,
    setTotalRows,
    setMinRowIndex,
    setMaxRowIndex,
    setPages,
    setPageCount,
    setPageIndex,
    setPageGroupIndex,
    setMinPageIndex,
    setMaxPageIndex,
    setShowLess,
    setShowMore
  } = useDatatable()

  const setDocumentTheme = () => {
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }

  const setDataInfo = () => {
    const rowsByIndex = pageSize * pageIndex
    const minRowIndex = rowsByIndex - pageSize + 1
    const maxRowIndex = rowsByIndex > totalRows ? totalRows : rowsByIndex

    setMinRowIndex(minRowIndex)
    setMaxRowIndex(maxRowIndex)
  }

  const setPagination = () => {
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

    setPageCount(pageCount)
    setPageGroupIndex(pageGroupIndex)
    setMinPageIndex(minPageIndex)
    setMaxPageIndex(maxPageIndex)
    setShowLess(showLess)
    setShowMore(showMore)
    setPages(pages)
  }

  const filterRows = () => {
    if (!allRows.length || !searchText) {
      setFilteredRows(allRows)
      setTotalRows(allRows.length)
      return
    }

    const newFilteredRows = allRows.filter((row) =>
      cols.some((col) => {
        const value = row[col.field].toString().toLowerCase()
        return value.includes(searchText.toLowerCase())
      })
    )

    setFilteredRows(newFilteredRows)
    setTotalRows(newFilteredRows.length)
  }

  const paginateRows = () => {
    let newRows = [...filteredRows]

    if (sortField && (sortDir === 1 || sortDir === -1)) {
      newRows = newRows.sort(compareByField(sortField, sortDir))
    }

    newRows = newRows.slice(minRowIndex - 1, maxRowIndex)

    setRows(newRows)
  }

  useEffect(() => {
    setDocumentTheme()
  }, [])

  useEffect(() => {
    setTitle(props.title)
  }, [props.title])

  useEffect(() => {
    setCols(props.cols)
  }, [props.cols])

  useEffect(() => {
    setAllRows(props.rows)
  }, [props.rows])

  useEffect(() => {
    setPageIndex(1)
  }, [pageSize])

  useEffect(() => {
    setDataInfo()
    setPagination()
  }, [totalRows, pageIndex])

  useEffect(() => {
    filterRows()
  }, [allRows, searchText])

  useEffect(() => {
    paginateRows()
  }, [sortField, sortDir, cols, filteredRows, minRowIndex, maxRowIndex])

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
