import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import TypescriptPractice from './typescript-practice/main.tsx'
// import  from './typescript-practice/functionalComponent.tsx';
import TypescriptFunctionalComponent from './typescript-practice/functionalComponent.tsx'
// import { CountComponent, CounterClassComponent } from './typescript-practice/functionalComponentWithHooks.tsx'
import { CounterFuncComponent, CounterClassComponent } from './typescript-practice/functionalComponentWithHooks copy.tsx'
import { ZooComponent, AsiaRegionProps, EuropeRegionProps } from './typescript-practice/genericComponents/ZooClassComponent.tsx'
import { Box } from './typescript-practice/genericComponents/BoxClassComponent.tsx'
import { TableComponent, DiningTable, WorkTable } from './typescript-practice/genericComponents/TableClassCoponent.tsx'

const asiaRegionZoo: AsiaRegionProps = {
  type: 'asia',
  climate: "HOT and Humid",
  name: "Southeast Asia",
  species: 25
}

const europeRegionZoo: EuropeRegionProps = {
  type: 'europe',
  climate: "ICECING COLD",
  name: "North Europe Hemisphere",
  languages: ["Findland", "Norway", "Swedish", "Swiss"]
}

const table1: DiningTable = {
  type: 'Dining',
  capacity: 12,
  material: "redwood",
  price: 15000
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <CounterFuncComponent />
    <CounterClassComponent /> */}
    <ZooComponent<AsiaRegionProps> region={asiaRegionZoo} />
    <ZooComponent<EuropeRegionProps> region={europeRegionZoo} />
    <Box<string> content="What in the typscript world" />
    <Box<number> content={3} />
    <TableComponent<DiningTable> table={table1} />
    {/* <TypescriptPractice /> */}
  </StrictMode>,
)
