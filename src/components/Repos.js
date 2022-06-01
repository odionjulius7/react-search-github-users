import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Pie, Column, Bar, Doughnut } from "./Charts";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  // Getting the values of each Languages in the repos array to calculate the total number of each language
  // firstly, loop thru all the items in the array with reduce()
  const languages = repos.reduce((total, item) => {
    // total is what we return, if not the reduce() won't work
    // item is what is being interated thru

    //now NOTE: when an item you want to loop thru and is in another object or array just destructure it to get it value
    const { language, stargazers_count } = item;
    // same way we did for total[language].value so also we do for total[language].star

    if (!language) return total; // here we are checking to see if there is an instance were the value of language is null
    // if yes return the total

    // if language is not null
    if (!total[language]) {
      // then, but the total we are returning does not have a value for language then give that language the below values
      // same way we did for total[language].value so also we do for total[language].star
      total[language] = { label: language, value: 1, stars: stargazers_count };
      // just like giving the total the object values were the language position is in each item[language]
    } else {
      // else if it have value spread all the values of the total.language
      // and then edit the value and add 1 to it
      total[language] = {
        // total[language] is been over ride and given a new value
        // our total(an object) is given or has language(an object) as value and still manipulated/over
        // ride the value of the total
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
        // same way we did for total[language].value so also we do for total[language].star
      };
    }

    return total;
  }, {});

  // getting 5 most popular language out of all the languages the repo we interated thru has
  //  by using object.value() to get the value of the key "total[language]"
  //  and sorting from the most highes to the smalls
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      // a is the smallest value and be is the highest value
      return b.value - a.value;
      // total[language].value i.e b - total[language].value i.e a smallest
      // b.value - a.value indicate that we are sorting from hightest to lowest (not reducing/minus oh)
    })
    .slice(0, 5); // then slice 5 highest from them // then slice that sorted array five highest

  //
  // most stars per language
  // mostPoplar is for the stars in our total[language].stars
  // and just as we did with mostUsed values
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      // now, only that the doughNut chart needs a key name of value, so we tweak/manipulate it(instead of using another reduce()) and
      // pass the stars values to total[value] i.e language.value = language.stars
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  //
  // stars, forks
  // getting stars, forks from the repos array
  // desructuring directly the total's(an object) value we are returning back
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      // total.stars[stargazers_count] is been over ride and given anew value
      // we create a new key star, passing and object (stargazers_count) to it and still manipulating/over
      // riding the value of the stargazers_count(object)
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      // create a key star and pass it an object with values
      total.forks[forks] = { label: name, value: forks };
      // create a key forks and pass it an object with values
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  // this was why we destructured the total's item in the first place in reduce()
  // getting the values of the object stars and forks slice and get the highest to lowest
  stars = Object.values(stars).slice(-5).reverse(); // just like sorting and slice reviously
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie data={mostUsed} />
        <Column data={stars} />
        <Doughnut data={mostPopular} />
        <Bar data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
