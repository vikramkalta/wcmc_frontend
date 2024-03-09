import React from "react";

const Metrics = ({ country, metrics }) => {
  if (!metrics.length) {
    return <p>Metrics not found.</p>
  }
  const landCover = metrics.find(x => x.name === 'Land Cover');

  const areaLandCover = Math.round(landCover.results.area_km2);
  for (const key in landCover.results.data) {
    landCover.results.data[key] = Math.round(landCover.results.data[key]);
    landCover.results.data[key + '_perc'] = landCover.results.data[key] / areaLandCover * 100;
  }
  const protectedAreas = metrics.find(x => x.name === 'Protected Areas');
  for (const key in protectedAreas.results) {
    protectedAreas.results[key] = Math.round(protectedAreas.results[key]);
  }
  
  return (
    <div className={""}>
      <h2 style={{color:'#555', marginBottom: 10,  borderBottom:'1px solid lightgrey'}}>{country}</h2>
      <p>Protected Areas</p>
      <table>
        <tr>
          <td>Marine</td>
          <td>{protectedAreas.results.marine_area_km2 + ' km2 (' + protectedAreas.results.marine_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Terrestrial</td>
          <td>{protectedAreas.results.terrestrial_area_km2 + ' km2 (' + protectedAreas.results.terrestrial_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Unprotected</td>
          <td>{protectedAreas.results.unprotected_area_km2 + ' km2 (' + protectedAreas.results.unprotected_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{protectedAreas.results.area_km2 + ' km2 (100%)'}</td>
        </tr>
      </table>

      <br/>
      <p>Land Cover</p>
      <table>
        <tr>
          <td>Forest</td>
          <td>{landCover.results.data.forest + ' km2 (' + landCover.results.data.forest_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Sparse vegetation</td>
          <td>{landCover.results.data.sparse_vegetation + ' km2 (' + landCover.results.data.sparse_vegetation_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Grassland</td>
          <td>{landCover.results.data.grassland + ' km2 (' + landCover.results.data.grassland_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Wetland</td>
          <td>{landCover.results.data.wetland + ' km2 (' + landCover.results.data.wetland_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Water</td>
          <td>{landCover.results.data.water + ' km2 (' + landCover.results.data.water_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Permanent snow and ice</td>
          <td>{landCover.results.data.permanent_snow_and_ice + ' km2 (' + landCover.results.data.permanent_snow_and_ice_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Bare</td>
          <td>{landCover.results.data.bare + ' km2 (' + landCover.results.data.bare_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Agriculture</td>
          <td>{landCover.results.data.agriculture + ' km2 (' + landCover.results.data.agriculture_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Settlements</td>
          <td>{landCover.results.data.settlements + ' km2 (' + landCover.results.data.settlements_perc  + '%)'}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{areaLandCover + ' km2 (100%)'}</td>
        </tr>
      </table>
    </div>
  );
};

export default Metrics;
