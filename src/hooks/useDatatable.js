import { useDatatableStore } from '../store/datatableStore'

export const useDatatable = () => {
  const props = useDatatableStore((state) => state)
  return props
}
