import { useLocation } from 'react-router'
export const useQueryParapms = () => {
  return new URLSearchParams(useLocation().search)
}
