import React, { useEffect, useState } from "react";
import * as FirestoreService from "../../services/firestore";
import RelatedBusiness from "./RelatedBusiness";

export default ({ category, uid }) => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const getBusinesses = () => {
      FirestoreService.getRelatedBusinesses("category", "==", category)
        .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
            if (doc.id !== uid) {
              data.push({ uid: doc.id, ...doc.data() });
            }
          });
          setBusinesses(data);
        })
        .catch((err) => console.log("Error getting list", err));
    };
    getBusinesses();
  }, [category, uid]);

  // console.log(businesses);
  return (
    !!businesses.length && (
      <>
        <h3 className="text-uppercase text-muted h6 my-3">
          Related Businesses
        </h3>
        {businesses.map((b, idx) => (
          <RelatedBusiness key={idx} business={b} />
        ))}
      </>
    )
  );
};
