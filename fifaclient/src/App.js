import React, { useState, useEffect } from 'react';


function App(year) {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/query?year__eql=2021&club_name__lik=aston").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
      <div>
        <p> Data in the table should be queryable via the API. Use the following:<br/><br/>
          for equality:   field_name__eql=somevalue<br/>
          for like:       field_name__lik=somevalue<br/>
          for at least:   field_name__lst=somevalue<br/>
          for at most:    field_name__mst=somevalue<br/><br/>
          Separate all fields with & and no spaces
        </p>

        <table className = "mydatatable">
          <thead>
            <tr>
              <th>UniqueID</th>
              <th>PlayerID</th>
              <th>Year</th>
              <th>Name</th>
              <th>Club</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            {
              (typeof data.Things === "undefined") ? (
                <tr>
                  <td colSpan={6}>Nothing yet</td>
                </tr>
              ) : (
                data.Things.map((thing, i) => (
                  <tr key = {i}>
                    <td>{i}</td>
                    <td>{thing.sofifa_id}</td>
                    <td>{thing.year}</td>
                    <td>{thing.short_name}</td>
                    <td>{thing.club_name}</td>
                    <td>{thing.overall}</td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>


      </div>
      
  );
}

export default App;
