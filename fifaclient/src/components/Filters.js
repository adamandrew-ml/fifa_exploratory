import React, { useState } from 'react'
import Select from "react-select";
import Table from './Table'


const Filters = () => {

  const get_year_options = () => {
    const all_years = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];
    return (all_years.map(item_year => (
      {"value": item_year, "label": item_year}
    )));
  };
  const year_options = get_year_options();
  const [selectedYear, setSelectedYear] = useState("YEAR");
  const handleOnChangeYear = (selectedYearOpt) => {
    setSelectedYear(selectedYearOpt.value);
    console.log(selectedYear);
  };


  // const get_club_options = () => {
  //   const all_clubs = ["Arsenal", "Chelsea", "Liverpool"];
  //   return (all_clubs.map(item_club => (
  //     {"value": item_club, "label": item_club}
  //   )));
  // };
  // const club_options = get_club_options();
  // const [selectedClub, setSelectedClub] = useState("CLUB");
  // const handleOnChangeClub = (selectedClubOpt) => {
  //   setSelectedClub(selectedClubOpt.value);
  //   console.log(selectedClub);
  // };



  return (
    <div>
      <Select options={year_options} id="year-select" onChange={handleOnChangeYear}/>
      <Table year = {selectedYear}/>
    </div>
  )
}

export default Filters;