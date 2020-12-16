import Axios from "axios";

export const fetchAllProjects = async (filter) => {
  const subscription = () => {
    const free = () => {
      if (filter.free) {
        return "Free";
      } else {
        return null;
      }
    };
    const premium = () => {
      if (filter.premium && free) {
        return " OR Premium";
      } else if (filter.premium) {
        return "Premium";
      } else {
        return null;
      }
    };
    const megaString = `${free}${premium}`;

    if (megaString === ``) {
      return null;
    } else {
      return megaString;
    }
  };

  const activityType = () => {
    const animation = () => {
      if (filter.animation) {
        return "Animation";
      } else {
        return null;
      }
    };
    const game = () => {
      if (filter.game && animation) {
        return " OR Game";
      } else if (filter.game) {
        return "Game";
      } else {
        return null;
      }
    };
    const chatbot = () => {
      if (filter.chatbot) {
        if (animation || game) {
          return " OR Chatbot";
        } else {
          return "Chatbot";
        }
      } else {
        return null;
      }
    };
    const augmentedReality = () => {
      if (filter.augmentedReality) {
        if (animation || game || chatbot) {
          return " OR Augmented Reality";
        } else {
          return "Augmented Reality";
        }
      } else {
        return null;
      }
    };

    const megaString = `${animation}${game}${chatbot}${augmentedReality}`;

    if (megaString === ``) {
      return null;
    } else {
      return megaString;
    }
  };

  const yearLevel = () => {
    const low = () => {
      if (filter.oneToFour) {
        return "1";
      } else if (filter.fiveToSix) {
        return "5";
      } else if (filter.sevenToEight) {
        return "7";
      } else if (filter.nineToThirteen) {
        return "9";
      } else {
        return "1";
      }
    };
    const high = () => {
      if (filter.nineToThirteen) {
        return "13";
      } else if (filter.sevenToEight) {
        return "8";
      } else if (filter.fiveToSix) {
        return "6";
      } else if (filter.oneToFour) {
        return "4";
      } else {
        return "13";
      }
    };

    const megaString = `${low} AND ${high}`;

    if (megaString === ``) {
      return null;
    } else {
      return megaString;
    }
  };

  const subjectMatter = () => {
    const computerScience = () => {
      if (filter.computerScience) {
        return "Computer Science";
      } else {
        return null;
      }
    };
    const maths = () => {
      if (filter.maths && computerScience) {
        return " OR Maths";
      } else if (filter.maths) {
        return "Maths";
      } else {
        return null;
      }
    };
    const science = () => {
      if (filter.science) {
        if (computerScience || maths) {
          return " OR Science";
        } else {
          return "Science";
        }
      } else {
        return null;
      }
    };
    const language = () => {
      if (filter.language) {
        if (computerScience || maths || science) {
          return " OR Language";
        } else {
          return "Language";
        }
      } else {
        return null;
      }
    };
    const art = () => {
      if (filter.art) {
        if (computerScience || maths || science || language) {
          return " OR Art";
        } else {
          return "Art";
        }
      } else {
        return null;
      }
    };
    const music = () => {
      if (filter.music) {
        if (computerScience || maths || science || language || art) {
          return " OR Music";
        } else {
          return "Music";
        }
      } else {
        return null;
      }
    };

    const megaString = `${computerScience}${maths}${science}${language}${art}`;

    if (megaString === ``) {
      return null;
    } else {
      return megaString;
    }
  };

  const subscriptionString = subscription();

  console.log(subscriptionString);

  const allProjects = await Axios.post("http://localhost:3030/fetchprojects", {
    subscription: subscription,
    activityType: activityType,
    yearLevel: yearLevel,
    subjectMatter: subjectMatter,
  });
  return allProjects;
};

export const fetchProject = async (ProjectId) => {
  const project = await Axios.post("http://localhost:3030/fetchproject", {
    ProjectID: ProjectId,
  });

  return project.data[0];
};
