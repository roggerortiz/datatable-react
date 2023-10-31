import { create } from 'zustand'

export const useDatatableStore = create((set) => ({
  theme: '',
  title: '',
  cols: [],
  rows: [],
  pagedRows: [],
  processedRows: [],
  searchValue: '',
  pager: {
    totalRows: 0,
    pageSize: 5,
    pageIndex: 1,
    pageCount: 1,
    sortField: '',
    sortDir: 0
  },
  pagination: {
    pages: [],
    pageGroupIndex: 1,
    minRowIndex: 1,
    maxRowIndex: 1,
    minPageIndex: 1,
    maxPageIndex: 1,
    maxPageCount: 5,
    showLess: false,
    showMore: false
  },
  setTheme: (theme) => set({ theme }),
  setTitle: (title) => set({ title }),
  setCols: (cols) => set({ cols }),
  setRows: (rows) => set({ rows }),
  setPagedRows: (pagedRows) => set({ pagedRows }),
  setProcessedRows: (processedRows) => set({ processedRows }),
  setSearchValue: (searchValue) => set({ searchValue }),
  setPager: (pager) => {
    return set((state) => ({ pager: { ...state.pager, ...pager } }))
  },
  setPagination: (pagination) => {
    return set((state) => ({
      pagination: { ...state.pagination, ...pagination }
    }))
  }
}))
