

export const homeView = async (req, res) => {
    try {      
      res.render("home");
    } catch (error) {
      res.render("home", {
        error: true,
      });
    }
  };

