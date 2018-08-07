const wolframkey = require('../config').wolfram_key;
const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI(wolframkey);

module.exports.getAllData = function(cities){

  let queryString = cities.join(' vs ');

  return waApi.getFull(queryString).then((queryresult) => {
      const pods = queryresult.pods;
      const filteredPods = pods.filter(pod => {
        if(pod.id != "Input" && pod.id != "Path:CityData" && pod.id != "Distances:CityData" && pod.id != "CurrentTime:CityData"){
          return true;
        }
      });
      // const output = filteredPods.map((pod) => {
      //   let podObj = {};
      //   podObj.title = pod.title;
      //   podObj.subpods = pod.subpods.map(subpod => {
      //     return subpod.plaintext.split('|');
      //   });
      //   return podObj;
      // });
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
module.exports.getPopData = function(cities){

    let queryString = "population of " + cities.join(' vs ');

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

// Retreive Living costs data for a list of cities
module.exports.getLivingCosts = function(city){

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

module.exports.getTaxRates = function(cities){

  let queryString = "tax rates of " + cities.join(' vs ');

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

module.exports.getCrimeRates = function(cities){

  let queryString = "crime rates of " + cities.join(' vs ');

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

module.exports.getEmploymentData = function(cities){

  // Unemployment rates from wolfram
  let queryString = "crime rates of " + cities.join(' vs ');

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

module.exports.getClimateData = function(cities){

  let queryString = "weather history in " + cities.join(' vs ');

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

module.exports.getHousingData = function(cities){

  let queryString = "housing " + cities.join(' vs ');
  // need rent values too

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

module.exports.getEducationData = function(cities){

  let queryString = "education in " + cities.join(' vs ');

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