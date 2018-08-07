const wolframkey = require('../config').wolfram_key;
const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI(wolframkey);

module.exports.getAllData = function (cities) {

  let queryString = cities.join(' vs ');

  return waApi.getFull(queryString).then((queryresult) => {
    const pods = queryresult.pods;
    const filteredPods = pods.filter(pod => {
      if (pod.id != "Input" && pod.id != "Path:CityData" && pod.id != "Distances:CityData" && pod.id != "CurrentTime:CityData") {
        return true;
      }
    });
    const output = filteredPods.map((pod) => {
      let podObj = {};
      podObj.title = pod.title;
      podObj.subpods = pod.subpods.map(subpod => {
        subpod.formattedData = {};
        let plaintextArr = subpod.plaintext.split('\n'); // ["| Boston | Tampa | Albany", ...]
        // Don't need the first row
        plaintextArr.splice(0,1);
        plaintextArr.forEach(element => {
          let rs = element.split("|"); // ["City Pop", "30 ppl", "4 ppl", "100 ppl"]
          let title = rs.splice(0,1);
          title = title[0].replace(/\s/g,'');
          subpod.formattedData[title] = [];
          cities.forEach((city, index)=>{
            subpod.formattedData[title].push({"name": city, "value": rs[index]});
            //subpod.formattedData[city].title = rs.splice(0,1);
            //subpod.formattedData[city].data = rs[index];
          });
        });
      });
      return podObj;
    });

    //console.log(output);
    // const output = pods.map((pod) => {
    //   const subpodContent = pod.subpods.map(subpod =>
    //     `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
    //   ).join('\n');
    //   return `<h2>${pod.title}</h2>\n${subpodContent}`;
    // }).join('\n');
    return filteredPods;
  }).catch(console.error);
};

// Retreive Population data for a list of cities
module.exports.getPopData = function (cities) {

  let queryString = "population of Boston, MA and Tampa, FL";// + cities.join(' vs ');

  return waApi.getShort(queryString).then((queryresult) => {
    const pods = queryresult;
    // const output = pods.map((pod) => {
    //   const subpodContent = pod.subpods.map(subpod =>
    //     `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
    //   ).join('\n');
    //   return `<h2>${pod.title}</h2>\n${subpodContent}`;
    // }).join('\n');
    // return output;
    return pods;
  }).catch(console.error);
};

// Retreive Living costs data for a list of cities
module.exports.getLivingCosts = function (city) {

  let queryString = "living costs of " + city;

  return waApi.getFull(queryString).then((queryresult) => {
    const pods = queryresult.pods;
    const output = pods.map((pod) => {
      const subpodContent = pod.subpods.map(subpod =>
        `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
      ).join('\n');
      return `<h2>${pod.title}</h2>\n${subpodContent}`;
    }).join('\n');
    return output;
  }).catch(console.error);
};

module.exports.getTaxRates = function (cities) {

  let queryString = "tax rates of " + cities.join(' vs ');

  return waApi.getFull(queryString).then((queryresult) => {
    const pods = queryresult.pods;
    // const output = pods.map((pod) => {
    //   const subpodContent = pod.subpods.map(subpod =>
    //     `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
    //   ).join('\n');
    //   return `<h2>${pod.title}</h2>\n${subpodContent}`;
    // }).join('\n');
    // return output;
    return pods;
  }).catch(console.error);
};

module.exports.getCrimeRates = function (cities) {

  let queryString = "crime rates of " + cities.join(' vs ');

  return waApi.getFull(queryString).then((queryresult) => {
    const pods = queryresult.pods;
    // const output = pods.map((pod) => {
    //   const subpodContent = pod.subpods.map(subpod =>
    //     `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
    //   ).join('\n');
    //   return `<h2>${pod.title}</h2>\n${subpodContent}`;
    // }).join('\n');
    // return output;
    return pods;
  }).catch(console.error);
};

module.exports.getEmploymentData = function (cities) {

  // Unemployment rates from wolfram
  let queryString = "crime rates of " + cities.join(' vs ');

  return waApi.getFull(queryString).then((queryresult) => {
    const pods = queryresult.pods;
    // const output = pods.map((pod) => {
    //   const subpodContent = pod.subpods.map(subpod =>
    //     `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
    //   ).join('\n');
    //   return `<h2>${pod.title}</h2>\n${subpodContent}`;
    // }).join('\n');
    // return output;
    return pods;
  }).catch(console.error);
};

module.exports.getClimateData = function (cities) {

  let queryString = "weather history in " + cities.join(' vs ');

  return waApi.getFull(queryString).then((queryresult) => {
    const pods = queryresult.pods;
    // const output = pods.map((pod) => {
    //   const subpodContent = pod.subpods.map(subpod =>
    //     `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
    //   ).join('\n');
    //   return `<h2>${pod.title}</h2>\n${subpodContent}`;
    // }).join('\n');
    // return output;
    return pods;
  }).catch(console.error);
};

module.exports.getHousingData = function (cities) {

  let queryString = "housing " + cities.join(' vs ');
  // need rent values too

  return waApi.getFull(queryString).then((queryresult) => {
    const pods = queryresult.pods;
    // const output = pods.map((pod) => {
    //   const subpodContent = pod.subpods.map(subpod =>
    //     `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
    //   ).join('\n');
    //   return `<h2>${pod.title}</h2>\n${subpodContent}`;
    // }).join('\n');
    // return output;
    return pods;
  }).catch(console.error);
};

module.exports.getEducationData = function (cities) {

  let queryString = "education in " + cities.join(' vs ');

  return waApi.getFull(queryString).then((queryresult) => {
    const pods = queryresult.pods;
    // const output = pods.map((pod) => {
    //   const subpodContent = pod.subpods.map(subpod =>
    //     `  <img src="${subpod.img.src}" alt="${subpod.img.alt}">`
    //   ).join('\n');
    //   return `<h2>${pod.title}</h2>\n${subpodContent}`;
    // }).join('\n');
    // return output;
    return pods;
  }).catch(console.error);
};

module.exports.getDataBasedOnPref = function (pref, cities) {
  let promise;
  switch (pref) {
    case "Education":
      promise = this.getEducationData(cities);
      break;
    case "Cost of Living":
      promise = this.getLivingCosts(cities);
      break;
    case "Real Estate Values":
      promise = this.getHousingData(cities);
      break;
    case "Crime Rates":
      promise = this.getCrimeRates(cities);
      break;
    case "Tax Rates":
      promise = this.getTaxRates(cities);
      break;
    case "Weather":
      promise = this.getClimateData(cities);
      break;
    case "Population":
      promise = this.getPopData(cities);
      break;
    case "Employment":
      promise = this.getEmploymentData(cities);
      break;
    default:
      promise = new Promise().reject();
  }

  return promise;
};
