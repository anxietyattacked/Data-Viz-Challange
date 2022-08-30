export default function cleanData(data) {
  return data.map((d) => {
    if (d["location_name"] === "Antigua and Barbuda") {
      d["location_name"] = "Antigua and Barb.";
    }
    if (d["location_name"] === "The Bahamas") {
      d["location_name"] = "Bahamas";
    }
    if (d["location_name"] === "Bosnia and Herzegovina") {
      d["location_name"] = "Bosnia and Herz.";
    }
    if (d["location_name"] === "Central African Republic") {
      d["location_name"] = "Central African Rep.";
    }
    if (d["location_name"] === "Cote d'Ivoire") {
      d["location_name"] = "Côte d'Ivoire";
    }
    if (d["location_name"] === "Czech Republic") {
      d["location_name"] = "Czechia";
    }
    if (d["location_name"] === "Dominican Republic") {
      d["location_name"] = "Dominican Rep.";
    }
    if (d["location_name"] === "Democratic Republic of the Congo") {
      d["location_name"] = "Dem. Rep. Congo";
    }
    if (d["location_name"] === "Equatorial Guinea") {
      d["location_name"] = "Eq. Guinea";
    }
    if (d["location_name"] === "Russian Federation") {
      d["location_name"] = "Russia";
    }
    if (d["location_name"] === "Solomon Islands") {
      d["location_name"] = "Solomon Is.";
    }
    if (d["location_name"] === "South Sudan") {
      d["location_name"] = "S. Sudan";
    }
    if (d["location_name"] === "United States") {
      d["location_name"] = "United States of America";
    }
    if (d["location_name"] === "Virgin Islands, U.S.") {
      d["location_name"] = "U.S. Virgin Is.";
    }
    return d;
  });
}
