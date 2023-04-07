import Layout2 from '@/layout/Layout2'

export default [{
  path: '/dashboards',
  component: Layout2,
  children: [{
    path: 'dashboard-1',
    component: () => import('@/components/dashboards/Dashboard1')
  }]
}]
