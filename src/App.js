import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TabsContextConsumer } from './lib/context';
import { getTopStories, getMostPopular } from './lib/state/actions';

import './App.css';

const Card = ({
  abstract,
  title,
  date,
  section,
  url,
  img
}) => {
  return (
    <div className="card d-flex flex-row justify-content-between">
      <div className="d-flex">
        <img className="mr-4 rounded"
          src={
            img
          }
          alt="placeholder"
          width="170"
          height="170"/>
        <div className="d-flex flex-column"
          style={
            {width: "75%"}
        }>
          <p>
            <small>
              <strong>{date}</strong>
            </small>
          </p>
          <h5>
            <a href={url}
              target="_blank"
              rel="noreferrer"
              style={
                {color: "#2980b9"}
            }>
              {title} </a>
          </h5>
          <i>{abstract}</i>
        </div>
      </div>
      <p className="d-flex text-right"
        style={
          {color: "#2980b9"}
      }>
        <strong>{section}</strong>
      </p>
    </div>
  );
};

const styles = {
  left: {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px"
  },
  right: {
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px"
  },
  info: {
    padding: 0,
    listStyleType: "none",
    fontSize: "14px"
  }
};

const Tabs = ({ state: { links, active}, setActive }) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <ul className="nav nav-pills nav-fill"
        style={
          {
            marginTop: "20px",
            width: "70%"
          }
      }>
        
      {links.map((link, index) => {
        return (
          <li key={index} className="nav-item" onClick={() => setActive(link)} >
           
            <a 
              href="#"
              className={`nav-link ${link.name === active.name && "active"}`}
              style={index === 0 ? styles.left : styles.right }
            >
              <i className={`fas fa-${link.icon}`}></i> {link.name}
            </a>
          </li>
        );
      })}
       
      </ul>
    </div>
  )
}

const List = ({ state: { active } }) => {
  const { top_stories } = useSelector((state) => ({ ...state.topStories }));
  const { most_popular } = useSelector((state) => ({ ...state.mostPopular }));
  const results = active.name === "Top Stories" ? top_stories : most_popular;
  return results.map((result, index) => <Card key={index} {...result} />);
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopStories());
   dispatch(getMostPopular());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <TabsContextConsumer>
        {(value) => {
          return (
            <>
              <Tabs {...value} />
              <List {...value} />
            </>
          )
        }}
        </TabsContextConsumer>
       
       </div>
    </div>
  );
}

export default App;
