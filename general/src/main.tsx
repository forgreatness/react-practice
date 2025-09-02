import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import TypescriptPractice from './typescript-practice/main.tsx'
// import  from './typescript-practice/functionalComponent.tsx';
import TypescriptFunctionalComponent from './typescript-practice/functionalComponent.tsx'
// import { CountComponent, CounterClassComponent } from './typescript-practice/functionalComponentWithHooks.tsx'
import { CounterFuncComponent, CounterClassComponent, CounterDeclartiveFuncComponent } from './typescript-practice/functionalComponentWithHooks copy.tsx'
import { ZooComponent, AsiaRegionProps, EuropeRegionProps } from './typescript-practice/genericComponents/ZooClassComponent.tsx'
import { Box, BoxDecFuncComponent, BoxAssignmentFuncComponent } from './typescript-practice/genericComponents/BoxClassComponent.tsx'
import { TableComponent, DiningTable, WorkTable } from './typescript-practice/genericComponents/TableClassCoponent.tsx'
import { CounterReducerComponent } from './typescript-practice/hooks-practice/useReducerComponent/CounterReducerComponent.tsx'
import { TodoReducerComponent } from './typescript-practice/hooks-practice/useReducerComponent/TodoReducerComponent.tsx'

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
    <CounterFuncComponent initialValue={89}/>
    <CounterDeclartiveFuncComponent initialValue={88}/>
    <CounterReducerComponent />
    {/* <CounterClassComponent /> */}
    <ZooComponent<AsiaRegionProps> region={asiaRegionZoo} />
    <ZooComponent<EuropeRegionProps> region={europeRegionZoo} />
    <Box<string> content="What in the typscript world" />
    <Box<number> content={3} />
    <BoxAssignmentFuncComponent<string> content="what is this cool thing" />
    <TableComponent<DiningTable> table={table1} />
    <TodoReducerComponent />
    {/* <TypescriptPractice /> */}
  </StrictMode>,
)
