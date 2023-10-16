import React, { useState} from 'react'
import Select from "react-select";
import Table from './Table'


const Filters = () => {

  const all_years = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
  const get_year_options = (all_years) => {
    return (all_years.map(item => (
      {"value": item, "label": item}
    )))
  };
  const year_options = get_year_options(all_years);


  const [selectedYear, setSelectedYear] = useState(null);
  const handleOnChangeYear = (selectedYearOpt) => {
    setSelectedYear(selectedYearOpt.value);
  };

  return (
    <div>
      <Select options={year_options} id="year-select" onChange={handleOnChangeYear}/>
      <Table year = {selectedYear}/>
    </div>
  )
}

export default Filters