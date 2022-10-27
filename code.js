'use strict';

const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ab2aff2756msh72cb2e095fbf9a6p10582ejsn486f88b3ec0d",
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
  };
  
  fetch('https://api-football-beta.p.rapidapi.com/teams?season=2019&league=39', options).then(data => data.json())
    .then(
      res => teamList(res.response) )
    .catch(
      err => alert('Ocurrio un error, intenta nuevamente.')
      );
  
  
  function teamList(teams) {
    teams.map((team, i) => {
      document.getElementById("loading").style.display = "none";
  
      let tab = 
          `<tr>
              <th>Nombre</th>
              <th>País</th>
              <th>Fundado</th>
              <th>Logo</th>    
          </tr>`;
  
      for (let item of teams.slice(0, 10)) {
          tab += 
              `<tr> 
                  <td>${item.team.name} </td>
                  <td>${item.team.country}</td>
                  <td>${item.team.founded}</td>   
                  <td><img src=${item.team.logo}></td>        
              </tr>`;
      }
  
      document.getElementById("teams").innerHTML = tab;
    });
  }