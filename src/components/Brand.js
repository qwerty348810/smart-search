import React from 'react';
import './Brand.css';

const Brand = ({filterText, listServer}) => {
  console.log(listServer);

  const listPreview = {
    'BrandArray': [
      {
        title: 'Brand 1',
        statusBrand: 'UP',
      },
      {
        title: 'Brand 2',
        statusBrand: 'UP',
      },
      {
        title: 'Brand 3',
        statusBrand: 'UP',
      },
      {
        title: 'Brand 4',
        statusBrand: 'DOWN',
      },
    ]
  };

if(filterText!=='')
return(
  <>
  {
    listServer.map((listServer, index) => {
      return (
        <div className='brand-item__description' key={index}>
          <h2>{listServer.title}</h2>
          <div className='brand-item__status'>Status:{listServer.statusBrand}</div>
        </div>
      )
      })
  }
  </>
);
if(filterText==='')
return(
    <>
    {
      listPreview.BrandArray.map((BrandArray, index) => {
        return (
          <div className='brand-item__description' key={index}>
            <h2>{BrandArray.title}</h2>
            <div className='brand-item__status'>Status:{BrandArray.statusBrand}</div>
          </div>
        )
        })
    }
    </>
);
}
export default Brand;
