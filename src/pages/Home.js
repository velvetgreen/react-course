import React from 'react';
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/api";
import { STATUSES } from "../utils/constans";
import Layout from 'components/Layout';

export default function HomePage () {
    const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const dataRequest = useSelector(state => state.data.request);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const renderData = (item) => {
      return (
        <div>
        <h4>Another important fact about your {item.type}</h4>
        <span>{item.text}</span>
      </div>
      )
  }

  if (dataRequest === STATUSES.REQUEST) {
    return (
        <Layout>
            <h3>Loading</h3>
        </Layout>
    )
  }

  if (dataRequest === STATUSES.FAILURE) {
    return (
        <Layout>
            <h3>Error</h3>
        </Layout>
    )
  }
    return (
        <Layout>
            <div className='home-page'>
                <h3>Home page</h3>
                <img src='https://placekitten.com/750/200' alt='pretty-kitty'></img>
                {data.map(renderData)}
            </div>
        </Layout>
    )
};
