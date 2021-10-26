import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="https://agile-sierra-02047.herokuapp.com/">
          Tech Blog (MVC)
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="https://stormy-depths-69854.herokuapp.com/">
              Book Search Engine (MERN)
            </a>
          </li>
          ))
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

// HELPED FROM MODULE 20 PHOTO PORT COURSEWORK FROM GW CODING BOOTCAMP
