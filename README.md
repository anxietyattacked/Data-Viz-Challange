# Data Visualization Coding Challenge

## Objective

**“What population is most affected by opioid use disorders?”**
I created a global choropleth map to show what populations are most affected by opioid use disorders. The data is selectable by sex(Female, Male, Both) and year(1990-2017). the map is interactive with a tooltip displaying the mean, lower bound, and upper bound, as well as being zoom and draggable.
[Link to Visualization](https://musical-baklava-6dff82.netlify.app/)

## Data

Global Burden of Disease Collaborative Network.
Global Burden of Disease Study 2017 (GBD 2017) Results.
Seattle, United States: Institute for Health Metrics and Evaluation (IHME), 2018.
Available from ,http://ghdx.healthdata.org/gbd-results-tool>.
Permalink to opioid use disorder data: <http://ghdx.healthdata.org/gbd-results-tool?params=gbd-api-2017-permalink/c12b65baf872c661f4640bb583320b4e>

Data Definitions:

- Mean: This is the mean death rate (number of deaths per 100,000 people) due to opioid use disorders for a given location, sex, and year.
- Upper: This is the upper bound of uncertainty for the mean
- Lower: This is the lower bound of uncertainty for the mean`.

## Software requirements

**you’ll need to have Node 14.0.0 or later version on your local development machine**.
We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

## Getting started

### Installing dependencies

```bash
npm install
```

### Stating the application

```bash
npm run start
```

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will automatically reload when you make changes.

## Browser compatibility

This starter project uses modern JavaScript features. It should work as expected in modern browsers (tested in current versions of Chrome, Firefox, and Safari), but it may not work in Internet Explorer, Edge, and older browser versions.
