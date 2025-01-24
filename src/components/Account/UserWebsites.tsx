import { AllUserWebsites } from './AllUserWebsites'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const items = [
  {
    label: 'All sites',
    value: 'all',
    element: AllUserWebsites
  },
  {
    label: 'Recent sites',
    value: 'recent',
    element: () => 'world'
  }
]

export const UserWebsites = () => {
  return (
    <Tabs defaultValue='all'>
      <TabsList>
        {items.map(({ label, value }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map(({ value, element: Element }) => (
        <TabsContent key={value} value={value}>
          <Element />
        </TabsContent>
      ))}
    </Tabs>
  )
}
