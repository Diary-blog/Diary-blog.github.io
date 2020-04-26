import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faSearch, faMoon, faSun, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { useColorMode } from 'theme-ui';

import './header.scss';
const config = require('../../../config');

export interface headerPropsType {
  siteTitle: string;
  path: string;
  size: string;
  isMobile: boolean;
  setPath: Function;
}

const Header = (props: headerPropsType) => {
  const { siteTitle, path, setPath, size, isMobile } = props;
  const [, setYPos] = useState(0);
  const [isHide, setIsHide] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const toggleTheme = useCallback(() => {
    const ms: number = 300;
    const header: HTMLElement | null = document.getElementById('Header');

    document.body.style.transition = `background-color ${ms}ms`;
    if (header) header.style.transition = `background-color ${ms}ms`;

    if (colorMode === 'dark') {
      setColorMode('default');
    } else {
      setColorMode('dark');
    }

    setTimeout(() => {
      document.body.style.transition = 'none';
      if (header) header.style.transition = `background-color ${ms}ms`;
    }, ms + 100);
  }, [colorMode]);

  useEffect(() => {
    const bio: HTMLDivElement | null = document.querySelector('.bio');
    if (bio) {
      if (isHide === true) {
        bio.style.opacity = '0';
        bio.style.pointerEvents = 'none';
      } else {
        bio.style.opacity = '1';
        bio.style.pointerEvents = 'all';
      }
    }
  }, [isHide]);

  useEffect(() => {
    const profile: HTMLImageElement | null = document.querySelector('.header-profile-image-wrap>img');

    const prevPath: string = path;
    const currPath: string = location.pathname;

    if (profile) {
      if (currPath === prevPath) {
        setPath(location.pathname, currPath !== '/bookmark/' ? '25px' : '50px');
      }

      if (prevPath !== '/bookmark/' && currPath === '/bookmark/') {
        setPath(location.pathname, '50px');
      }

      if (prevPath === '/bookmark/' && currPath !== '/bookmark/') {
        setPath(location.pathname, '25px');
      }

      if (prevPath !== '/bookmark/' && currPath !== '/bookmark/') {
        setPath(location.pathname);
      }
    } else {
      setPath(location.pathname);
    }

    const setVisible: () => void = () => {
      setYPos(prevYPos => {
        const currentYPos = window.pageYOffset;

        if (currentYPos > 0) setIsHide(prevYPos < currentYPos);

        return currentYPos;
      });
    };
    document.addEventListener('scroll', setVisible);
    return () => document.removeEventListener('scroll', setVisible);
  }, []);

  return (
    <header id="Header" className={`${isHide ? 'hide' : 'show'} ${isMobile ? 'mobile' : ''}`}>
      <div className="header-title">
        {/* <Link to="/">
          <div className="header-profile-image-wrap">
            <img
              src={
                config.profileImageFileName
                  ? require(`../../images/${config.profileImageFileName}`)
                  : 'https://source.unsplash.com/random/100x100'
              }
              alt="title profile picture"
              width={size || '25px'}
              height={size || '25px'}
            />
          </div>
        </Link> */}

        <Link to="/bookmark/">
          <h1 className="header-title-text">{siteTitle}</h1>
        </Link>
      </div>

      <nav id="nav">
        <div className="theme-toggle">
          <div className="theme-toggle-description" style={{ display: isMobile ? 'none' : 'flex' }}>
            <Fa
              icon={colorMode === 'dark' ? faMoon : faSun}
              style={{ fontSize: colorMode === 'dark' ? '1.1rem' : '1.2rem' }}
            />
            <Fa icon={faChevronRight} style={{ fontSize: '0.9rem' }} />
          </div>

          <Fa
            icon={colorMode === 'dark' ? faSun : faMoon}
            style={{ fontSize: colorMode === 'dark' ? '1.2rem' : '1.1rem' }}
            onMouseEnter={() => {
              const toggle: HTMLDivElement | null = document.querySelector('.theme-toggle-description');
              if (toggle) toggle.style.opacity = '0.5';
            }}
            onMouseLeave={() => {
              const toggle: HTMLDivElement | null = document.querySelector('.theme-toggle-description');
              if (toggle) toggle.style.opacity = '0';
            }}
            onClick={() => {
              toggleTheme();
            }}
          />
        </div>

        <ul>
          <li>
            <div className="tag-wrap">
              <Link to="/bookmark/tags">
              <svg className="svg-inline--fa fa-tags fa-w-20" viewBox="0 0 640 512">
                <path fill="currentColor" d="M259.69042,85.96457l49.64549,20.69969,20.70353,49.643a6.65746,6.65746,0,0,0,11.926,0L362.667,106.66426l49.64549-20.69969a6.66574,6.66574,0,0,0,0-11.92493L362.667,53.338,341.96545,3.697a6.65746,6.65746,0,0,0-11.926,0L309.33591,53.338,259.69042,74.03964a6.66574,6.66574,0,0,0,0,11.92493ZM364.294,267.29343,259.4951,251.99764l-46.90716-95.19633c-8.39078-16.99879-32.68813-17.2019-41.18829,0l-46.90716,95.19633L19.69358,267.29343C.89634,269.99636-6.71318,293.19783,6.99021,306.49376l75.90772,73.99472L64.89758,485.07476c-3.20319,18.9049,16.68782,33.107,33.29752,24.2014l93.7987-49.3871,93.79869,49.3871A22.95361,22.95361,0,0,0,319.09,485.07476L301.199,380.48848l75.89209-73.99472C390.70077,293.19783,383.09125,269.99636,364.294,267.29343ZM509.05268,219.2285,469.339,202.67109,452.7801,162.961a5.32691,5.32691,0,0,0-9.5412,0L426.678,202.67109l-39.7117,16.55741a5.33385,5.33385,0,0,0,0,9.54033L426.678,245.3282l16.56087,39.7081a5.32534,5.32534,0,0,0,9.5412,0L469.339,245.3282l39.71366-16.55937a5.33386,5.33386,0,0,0,0-9.54033Z"></path>
                {/* <Fa icon={faTags} /> */}
              </svg>
              </Link>
            </div>
          </li>

          <li>
            <div className="search-wrap">
              <Link to="/bookmark/search" className="search">
                <Fa icon={faSearch} />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ path, size, isMobile }: { path: string; size: string; isMobile: boolean }) => {
  return { path, size, isMobile };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setPath: (path: string, size: string) => dispatch({ type: `SET_PATH`, path, size }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
